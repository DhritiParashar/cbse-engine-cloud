import re
from typing import Optional
from fastapi import APIRouter, Depends, HTTPException, Query
import asyncpg
from app.database import get_db_pool

router = APIRouter(prefix="/api/mock-test", tags=["Mock Test & Past Papers"])


def normalize_chapter_id(raw_id: str, subject_code: str = "MATH", class_level: int = 10) -> str:
    """
    Normalizes chapter IDs across Class 10, 11, and 12 without corrupting prefixes.
    """
    if not raw_id or raw_id.upper() in ["ALL", "FULL"]:
        return "ALL"
    
    clean = raw_id.strip().upper()
    subj = subject_code.strip().upper()

    if re.match(r'^(C11_|C12_|M10_|S10_|SS10_)', clean):
        return clean

    match = re.search(r'(?:CH|CHAPTER)[\s_-]*(\d+)', clean, re.IGNORECASE)
    num = int(match.group(1)) if match else (int(clean) if clean.isdigit() else None)

    if num is not None:
        if class_level == 12:
            return f"C12_{subj}_CH{num:02d}"
        elif class_level == 11:
            return f"C11_{subj}_CH{num:02d}"
        else:
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
    subject_code: str = Query("PHYS", description="Subject: MATH, PHYS, CHEM, BIOL, SCI, SST"),
    class_level: int = Query(12, description="Class level: 10, 11, or 12"),
    pool: asyncpg.Pool = Depends(get_db_pool)
):
    try:
        subj = subject_code.strip().upper()
        grade_prefix = f"C{class_level}_%" if class_level in [11, 12] else "%10_%"

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
                  AND chapter_id LIKE $2
                  AND pyq_year IS NOT NULL 
                  AND pyq_set IS NOT NULL
                  AND is_active = TRUE
                GROUP BY pyq_year, pyq_set, paper_region
                ORDER BY pyq_year DESC, pyq_set ASC;
                """,
                subj, grade_prefix
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
                    "class_level": class_level,
                    "question_count": q_count,
                    "total_marks": t_marks,
                    "label": f"CBSE Class {class_level} {y} {reg} ({s}) • {t_marks} Marks ({q_count} Questions)",
                    "value": f"{y}_{s}"
                })
            return {"subject": subj, "class_level": class_level, "papers": papers}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


# -------------------------------------------------------------------------
# 2. GENERATE AUTHENTIC PAST BOARD PAPER (FULL PYQ SET)
# -------------------------------------------------------------------------
@router.get("/generate-pyq/{year}")
async def generate_pyq(
    year: int,
    pyq_set: str = Query("Set-1"),
    subject_code: str = Query("PHYS", description="Subject: MATH, PHYS, CHEM, BIOL, SCI, SST"),
    class_level: int = Query(12, description="Class level: 10, 11, or 12"),
    pool: asyncpg.Pool = Depends(get_db_pool)
):
    clean_set = pyq_set.strip()
    subj = subject_code.strip().upper()
    grade_prefix = f"C{class_level}_%" if class_level in [11, 12] else "%10_%"

    try:
        async with pool.acquire() as conn:
            records = await conn.fetch(
                """
                SELECT 
                    question_id, chapter_id, subject_code, question_text, marking_rubric,
                    total_marks::float AS total_marks, difficulty_tier, ideal_solution,
                    pyq_year, pyq_set
                FROM question_bank
                WHERE subject_code = $1
                  AND chapter_id LIKE $2
                  AND pyq_year = $3 
                  AND (LOWER(TRIM(pyq_set)) = LOWER(TRIM($4)) OR pyq_set ILIKE '%' || $4 || '%')
                  AND is_active = TRUE
                ORDER BY total_marks ASC, question_id ASC;
                """,
                subj, grade_prefix, year, clean_set
            )

            if not records:
                records = await conn.fetch(
                    """
                    SELECT 
                        question_id, chapter_id, subject_code, question_text, marking_rubric,
                        total_marks::float AS total_marks, difficulty_tier, ideal_solution,
                        pyq_year, pyq_set
                    FROM question_bank
                    WHERE subject_code = $1
                      AND chapter_id LIKE $2
                      AND pyq_year = $3
                      AND is_active = TRUE
                    ORDER BY total_marks ASC, question_id ASC
                    LIMIT 18;
                    """,
                    subj, grade_prefix, year
                )

            if not records:
                raise HTTPException(
                    status_code=404,
                    detail=f"No questions found for Class {class_level} {subj} PYQ {year} ({pyq_set})"
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
                    "sourceTag": f"CBSE Class {class_level} {r['pyq_year']} • {r['pyq_set']}"
                })

            total_paper_marks = sum(q["total_marks"] for q in questions)
            duration_minutes = 180 if total_paper_marks >= 70 else 90

            return {
                "title": f"CBSE Class {class_level} {subj} Examination {year} ({clean_set})",
                "class_level": class_level,
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
# 3. TARGETED PRACTICE DRILLS BY CHAPTER
# -------------------------------------------------------------------------
@router.get("/practice/pyqs/{chapter_id}")
async def get_chapter_pyq_practice(
    chapter_id: str,
    subject_code: str = Query("PHYS", description="Subject: MATH, PHYS, CHEM, BIOL, SCI, SST"),
    class_level: int = Query(12, description="Class level: 10, 11, or 12"),
    marks: Optional[int] = None,
    limit: int = 10,
    pool: asyncpg.Pool = Depends(get_db_pool)
):
    subj = subject_code.strip().upper()
    clean_ch = normalize_chapter_id(chapter_id, subj, class_level)
    grade_prefix = f"C{class_level}_%" if class_level in [11, 12] else "%10_%"

    try:
        async with pool.acquire() as conn:
            base_query = """
                SELECT 
                    question_id, chapter_id, subject_code, question_text, marking_rubric,
                    total_marks::float AS total_marks, difficulty_tier, ideal_solution,
                    pyq_year, pyq_set
                FROM question_bank
                WHERE subject_code = $1
                  AND (chapter_id = $2 OR ($2 = 'ALL' AND chapter_id LIKE $3))
                  AND is_active = TRUE
            """
            params = [subj, clean_ch, grade_prefix]

            if marks is not None:
                base_query += " AND ROUND(total_marks) = $4 ORDER BY RANDOM() LIMIT $5;"
                params.extend([marks, limit])
            else:
                base_query += " ORDER BY pyq_year DESC NULLS LAST, total_marks ASC LIMIT $4;"
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
                    "sourceTag": f"CBSE {r['pyq_year']} • {r['pyq_set']}"
                })

            return {
                "class_level": class_level,
                "subject": subj,
                "chapter_id": clean_ch,
                "total_extracted": len(questions),
                "questions": questions
            }
    except Exception as e:
        print(f"Error in /practice/pyqs: {e}")
        raise HTTPException(status_code=500, detail=str(e))
