import re
from fastapi import APIRouter, Depends, HTTPException, Query
import asyncpg
from app.database import get_db_pool

router = APIRouter(prefix="/api/mock-test", tags=["Mock Test & Past Papers"])


def normalize_chapter_id(raw_id: str, subject_code: str = "MATH") -> str:
    """
    Normalizes chapter IDs without corrupting subject prefixes (M10, S10, SS10).
    """
    if not raw_id or raw_id.upper() in ["ALL", "FULL"]:
        return "ALL"
    
    clean = raw_id.strip().upper()
    subj = subject_code.strip().upper()

    # 1. If it already starts with a recognized subject prefix, preserve it as-is
    if clean.startswith(("M10_", "S10_", "SS10_")):
        return clean

    # 2. Extract number if passed as "CH 04", "Chapter-4", etc.
    match = re.search(r'(?:CH|CHAPTER)[\s_-]*(\d+)', clean, re.IGNORECASE)
    num = int(match.group(1)) if match else (int(clean) if clean.isdigit() else None)

    if num is not None:
        if subj == "SCI":
            return f"S10_CH{num:02d}"
        elif subj == "SST":
            return f"SS10_CH{num:02d}"
        return f"M10_CH{num:02d}"

    return clean


# -------------------------------------------------------------------------
# 1. LIST OFFICIAL PAST BOARD PAPERS (DROPDOWN POPULATION)
# -------------------------------------------------------------------------
@router.get("/past-papers")
async def get_past_papers(
    subject_code: str = Query("MATH", description="Subject code: MATH, SCI, or SST"),
    pool: asyncpg.Pool = Depends(get_db_pool)
):
    try:
        async with pool.acquire() as conn:
            records = await conn.fetch(
                """
                SELECT 
                    pyq_year::int AS year,
                    pyq_set::text AS set,
                    COALESCE(paper_region::text, 'All India') AS region,
                    COUNT(*)::int AS question_count,
                    COALESCE(SUM(total_marks), 0.0)::float AS total_marks
                FROM question_bank
                WHERE subject_code = $1 
                  AND pyq_year IS NOT NULL 
                  AND pyq_set IS NOT NULL
                  AND is_active = TRUE
                GROUP BY pyq_year, pyq_set, paper_region
                ORDER BY pyq_year DESC, pyq_set ASC;
                """,
                subject_code.upper()
            )

            papers = []
            for r in records:
                y = r["year"]
                s = r["set"]
                reg = r["region"]
                q_count = r["question_count"]
                t_marks = int(round(r["total_marks"]))
                papers.append({
                    "year": y,
                    "set": s,
                    "region": reg,
                    "question_count": q_count,
                    "total_marks": t_marks,
                    "label": f"CBSE {y} {reg} ({s}) • {t_marks} Marks ({q_count} Questions)",
                    "value": f"{y}_{s}"
                })
            return {"subject": subject_code.upper(), "papers": papers}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


# -------------------------------------------------------------------------
# 2. GENERATE AUTHENTIC PAST BOARD PAPER (FULL PYQ SET)
# -------------------------------------------------------------------------
@router.get("/generate-pyq/{year}")
async def generate_pyq(
    year: int,
    pyq_set: str = Query("Delhi Set 1"),
    subject_code: str = Query("MATH", description="Subject code: 'MATH', 'SCI', or 'SST'"),
    pool: asyncpg.Pool = Depends(get_db_pool)
):
    clean_set = pyq_set.strip()
    subj = subject_code.strip().upper()

    try:
        async with pool.acquire() as conn:
            # Step A: Exact Match with subject_code
            records = await conn.fetch(
                """
                SELECT 
                    question_id, chapter_id, subject_code, question_text, marking_rubric,
                    total_marks::float AS total_marks, difficulty_tier, ideal_solution,
                    pyq_year, pyq_set
                FROM question_bank
                WHERE subject_code = $1
                  AND pyq_year = $2 
                  AND LOWER(TRIM(pyq_set)) = LOWER(TRIM($3))
                  AND is_active = TRUE
                ORDER BY total_marks ASC, question_id ASC;
                """,
                subj, year, clean_set
            )

            # Step B: Case-insensitive partial match
            if not records:
                records = await conn.fetch(
                    """
                    SELECT 
                        question_id, chapter_id, subject_code, question_text, marking_rubric,
                        total_marks::float AS total_marks, difficulty_tier, ideal_solution,
                        pyq_year, pyq_set
                    FROM question_bank
                    WHERE subject_code = $1
                      AND pyq_year = $2 
                      AND pyq_set ILIKE '%' || $3 || '%'
                      AND is_active = TRUE
                    ORDER BY total_marks ASC, question_id ASC;
                    """,
                    subj, year, clean_set
                )

            # Step C: Fallback to that year and subject
            if not records:
                records = await conn.fetch(
                    """
                    SELECT 
                        question_id, chapter_id, subject_code, question_text, marking_rubric,
                        total_marks::float AS total_marks, difficulty_tier, ideal_solution,
                        pyq_year, pyq_set
                    FROM question_bank
                    WHERE subject_code = $1
                      AND pyq_year = $2
                      AND is_active = TRUE
                    ORDER BY total_marks ASC, question_id ASC
                    LIMIT 18;
                    """,
                    subj, year
                )

            if not records:
                raise HTTPException(
                    status_code=404,
                    detail=f"No questions found for {subj} PYQ {year} ({pyq_set})"
                )

            questions = []
            for r in records:
                m = int(round(float(r["total_marks"]))) if r["total_marks"] is not None else 1
                sec_name = (
                    "Section A" if m == 1 else
                    ("Section B" if m == 2 else
                    ("Section C" if m == 3 else
                    ("Section E" if m == 4 else "Section D")))
                )
                questions.append({
                    "question_id": r["question_id"],
                    "chapter_id": r["chapter_id"],
                    "question_text": r["question_text"],
                    "marking_rubric": r["marking_rubric"],
                    "total_marks": m,
                    "marks": m,
                    "section": sec_name,
                    "difficulty": r["difficulty_tier"] or "Board Standard",
                    "ideal_solution": r["ideal_solution"] or "",
                    "pyq_year": r["pyq_year"],
                    "pyq_set": r["pyq_set"],
                    "sourceTag": f"CBSE {r['pyq_year']} • {r['pyq_set']}"
                })

            total_paper_marks = sum(q["total_marks"] for q in questions)
            duration_minutes = 180 if total_paper_marks >= 70 else 90

            return {
                "title": f"CBSE {subj} Board Examination {year} ({clean_set})",
                "year": year,
                "set": clean_set,
                "subject": subj,
                "duration_minutes": duration_minutes,
                "total_marks": total_paper_marks,
                "questions": questions
            }
    except HTTPException:
        raise
    except Exception as e:
        print(f"Error in /generate-pyq: {e}")
        raise HTTPException(status_code=500, detail=str(e))


# -------------------------------------------------------------------------
# 3. DYNAMIC EXAM BLUEPRINTS & DRILLS (SUBJECT-AWARE POOL GENERATION)
# -------------------------------------------------------------------------
@router.get("/generate/{chapter_id}")
async def generate_chapter_blueprint(
    chapter_id: str,
    mode: str = "chapter",
    exam_format: str = "quick",
    subject_code: str = Query("MATH", description="Subject: MATH, SCI, or SST"),
    source_pool: str = Query("ALL", description="Selection pool: 'ALL', 'PYQ_ONLY', or 'PRACTICE_ONLY'"),
    exclude_ids: str = Query("", description="Comma-separated IDs to prevent immediate repeats"),
    pool: asyncpg.Pool = Depends(get_db_pool)
):
    """
    Generates dynamic, randomized question papers strictly bounded to subject_code:
      - Chapter Drill (20M): 2x1M, 2x2M, 3x3M, 1x5M (45 mins)
      - Quick Board Drill (40M): 4x1M, 3x2M, 5x3M, 3x5M (90 mins)
      - Comprehensive Mock (80M): 20x1M, 5x2M, 6x3M, 4x5M, 3x4M (180 mins)
    """
    subj = subject_code.strip().upper()
    clean_ch = normalize_chapter_id(chapter_id, subj)
    is_single_chapter = (mode == "chapter" and clean_ch != "ALL")
    excluded = [x.strip() for x in exclude_ids.split(",") if x.strip()]

    # Source filtering logic
    source_clause = ""
    if source_pool.upper() == "PYQ_ONLY":
        source_clause = "AND pyq_year IS NOT NULL"
    elif source_pool.upper() == "PRACTICE_ONLY":
        source_clause = "AND pyq_year IS NULL"

    # Define CBSE Section Quotas: (min_marks, max_marks, target_count)
    if is_single_chapter:
        tiers = [(0.5, 1.5, 2), (1.6, 2.5, 2), (2.6, 3.5, 3), (3.6, 6.0, 1)]
    elif exam_format == "full_80":
        tiers = [(0.5, 1.5, 20), (1.6, 2.5, 5), (2.6, 3.5, 6), (4.5, 6.0, 4), (3.6, 4.4, 3)]
    else:  # quick 40M default
        tiers = [(0.5, 1.5, 4), (1.6, 2.5, 3), (2.6, 3.5, 5), (3.6, 6.0, 3)]

    selected_records = []
    used_ids = set(excluded)

    try:
        async with pool.acquire() as conn:
            for min_m, max_m, count in tiers:
                tier_rows = []

                if is_single_chapter:
                    query = f"""
                        SELECT 
                            question_id, chapter_id, subject_code, question_text, marking_rubric,
                            total_marks::float AS total_marks, difficulty_tier,
                            ideal_solution, pyq_year, pyq_set
                        FROM question_bank
                        WHERE subject_code = $1
                          AND chapter_id = $2 
                          AND total_marks >= $3 AND total_marks <= $4
                          {source_clause}
                          AND is_active = TRUE
                          AND NOT (question_id = ANY($5::text[]))
                        ORDER BY RANDOM()
                        LIMIT $6;
                    """
                    tier_rows = await conn.fetch(query, subj, clean_ch, min_m, max_m, list(used_ids), count)

                    if len(tier_rows) < count:
                        shortfall = count - len(tier_rows)
                        already_picked = [r["question_id"] for r in tier_rows]
                        fallback_query = f"""
                            SELECT 
                                question_id, chapter_id, subject_code, question_text, marking_rubric,
                                total_marks::float AS total_marks, difficulty_tier,
                                ideal_solution, pyq_year, pyq_set
                            FROM question_bank
                            WHERE subject_code = $1
                              AND chapter_id = $2 
                              AND total_marks >= $3 AND total_marks <= $4
                              {source_clause}
                              AND is_active = TRUE
                              AND NOT (question_id = ANY($5::text[]))
                            ORDER BY RANDOM()
                            LIMIT $6;
                        """
                        more = await conn.fetch(fallback_query, subj, clean_ch, min_m, max_m, already_picked, shortfall)
                        tier_rows.extend(more)

                else:
                    query = f"""
                        SELECT 
                            question_id, chapter_id, subject_code, question_text, marking_rubric,
                            total_marks::float AS total_marks, difficulty_tier,
                            ideal_solution, pyq_year, pyq_set
                        FROM question_bank
                        WHERE subject_code = $1
                          AND total_marks >= $2 AND total_marks <= $3
                          {source_clause}
                          AND is_active = TRUE
                          AND NOT (question_id = ANY($4::text[]))
                        ORDER BY RANDOM()
                        LIMIT $5;
                    """
                    tier_rows = await conn.fetch(query, subj, min_m, max_m, list(used_ids), count)

                    if len(tier_rows) < count:
                        shortfall = count - len(tier_rows)
                        already_picked = [r["question_id"] for r in tier_rows]
                        more = await conn.fetch(f"""
                            SELECT 
                                question_id, chapter_id, subject_code, question_text, marking_rubric,
                                total_marks::float AS total_marks, difficulty_tier,
                                ideal_solution, pyq_year, pyq_set
                            FROM question_bank
                            WHERE subject_code = $1
                              AND total_marks >= $2 AND total_marks <= $3
                              {source_clause}
                              AND is_active = TRUE
                              AND NOT (question_id = ANY($4::text[]))
                            ORDER BY RANDOM()
                            LIMIT $5;
                        """, subj, min_m, max_m, already_picked, shortfall)
                        tier_rows.extend(more)

                for r in tier_rows:
                    used_ids.add(r["question_id"])
                selected_records.extend(tier_rows)

            # Fallback safeguard strictly scoped to subject
            if not selected_records:
                fallback_records = await conn.fetch(
                    """
                    SELECT 
                        question_id, chapter_id, subject_code, question_text, marking_rubric,
                        total_marks::float AS total_marks, difficulty_tier,
                        ideal_solution, pyq_year, pyq_set
                    FROM question_bank
                    WHERE subject_code = $1
                      AND (chapter_id = $2 OR $2 = 'ALL')
                      AND is_active = TRUE
                    ORDER BY RANDOM()
                    LIMIT 8;
                    """,
                    subj, clean_ch
                )
                selected_records.extend(fallback_records)

        questions = []
        for r in selected_records:
            m = int(round(float(r["total_marks"]))) if r["total_marks"] is not None else 1
            sec_name = (
                "Section A" if m == 1 else
                ("Section B" if m == 2 else
                ("Section C" if m == 3 else
                ("Section E" if m == 4 else "Section D")))
            )
            tag = (
                f"CBSE {r['pyq_year']} • {r['pyq_set']}" 
                if (r["pyq_year"] and r["pyq_set"]) 
                else f"CBSE {subj} Blueprint Drill • {sec_name}"
            )
            questions.append({
                "question_id": r["question_id"],
                "chapter_id": r["chapter_id"],
                "subject_code": r["subject_code"],
                "question_text": r["question_text"],
                "marking_rubric": r["marking_rubric"],
                "total_marks": m,
                "marks": m,
                "section": sec_name,
                "difficulty": r["difficulty_tier"] or "Board Standard",
                "ideal_solution": r["ideal_solution"] or "",
                "sourceTag": tag
            })

        questions.sort(key=lambda q: (q["marks"], q["question_id"]))

        total_marks = sum(q["marks"] for q in questions)
        duration = 180 if total_marks >= 70 else (45 if is_single_chapter else 90)

        return {
            "title": f"Dynamic CBSE {subj} Blueprint ({total_marks} Marks)",
            "subject": subj,
            "chapter_id": clean_ch,
            "source_pool": source_pool,
            "exam_format": exam_format,
            "duration_minutes": duration,
            "total_marks": total_marks,
            "questions": questions
        }
    except Exception as e:
        print(f"Error in /generate: {e}")
        raise HTTPException(status_code=500, detail=str(e))


# -------------------------------------------------------------------------
# 4. TARGETED PYQ PRACTICE DRILLS (CHAPTER-LEVEL PAST QUESTION EXTRACTION)
# -------------------------------------------------------------------------
@router.get("/practice/pyqs/{chapter_id}")
async def get_chapter_pyq_practice(
    chapter_id: str,
    subject_code: str = Query("MATH", description="Subject: MATH, SCI, or SST"),
    marks: int = Query(None, description="Optional mark filter (1, 2, 3, or 5)"),
    limit: int = Query(10, ge=1, le=50),
    pool: asyncpg.Pool = Depends(get_db_pool)
):
    subj = subject_code.strip().upper()
    clean_ch = normalize_chapter_id(chapter_id, subj)

    try:
        async with pool.acquire() as conn:
            base_query = """
                SELECT 
                    question_id, chapter_id, subject_code, question_text, marking_rubric,
                    total_marks::float AS total_marks, difficulty_tier, ideal_solution,
                    pyq_year, pyq_set
                FROM question_bank
                WHERE subject_code = $1
                  AND (chapter_id = $2 OR $2 = 'ALL')
                  AND pyq_year IS NOT NULL
                  AND is_active = TRUE
            """
            params = [subj, clean_ch]

            if marks is not None:
                base_query += " AND ROUND(total_marks) = $3 ORDER BY RANDOM() LIMIT $4;"
                params.extend([marks, limit])
            else:
                base_query += " ORDER BY pyq_year DESC, total_marks ASC LIMIT $3;"
                params.append(limit)

            records = await conn.fetch(base_query, *params)

            questions = []
            for r in records:
                m = int(round(float(r["total_marks"]))) if r["total_marks"] is not None else 1
                sec_name = (
                    "Section A" if m == 1 else
                    ("Section B" if m == 2 else
                    ("Section C" if m == 3 else
                    ("Section E" if m == 4 else "Section D")))
                )
                questions.append({
                    "question_id": r["question_id"],
                    "chapter_id": r["chapter_id"],
                    "question_text": r["question_text"],
                    "marking_rubric": r["marking_rubric"],
                    "total_marks": m,
                    "marks": m,
                    "section": sec_name,
                    "difficulty": r["difficulty_tier"] or "Board Standard",
                    "ideal_solution": r["ideal_solution"] or "",
                    "pyq_year": r["pyq_year"],
                    "pyq_set": r["pyq_set"],
                    "sourceTag": f"CBSE Board {r['pyq_year']} • {r['pyq_set']}"
                })

            return {
                "subject": subj,
                "chapter_id": clean_ch,
                "total_extracted": len(questions),
                "questions": questions
            }
    except Exception as e:
        print(f"Error in /practice/pyqs: {e}")
        raise HTTPException(status_code=500, detail=str(e))