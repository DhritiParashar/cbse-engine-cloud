import hashlib
import json
import os
import re
import urllib.parse
from dotenv import load_dotenv
from sqlalchemy import Boolean, Column, create_engine, Numeric, String, Text, Integer
from sqlalchemy.dialects.postgresql import JSONB
from sqlalchemy.orm import declarative_base, sessionmaker

load_dotenv()
DB_USER = os.getenv("DB_USER")
DB_PASS = os.getenv("DB_PASSWORD")
DB_HOST = os.getenv("DB_HOST", "localhost")
DB_PORT = os.getenv("DB_PORT", "5432")
DB_NAME = os.getenv("DB_NAME")

encoded_pass = urllib.parse.quote_plus(DB_PASS) if DB_PASS else ""
DATABASE_URL = f"postgresql+psycopg://{DB_USER}:{encoded_pass}@{DB_HOST}:{DB_PORT}/{DB_NAME}"

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

class QuestionBank(Base):
    __tablename__ = "question_bank"
    question_id = Column(String, primary_key=True, index=True)
    chapter_id = Column(String, index=True, nullable=False)
    subject_code = Column(String(10), default="MATH", index=True)
    paper_region = Column(String(20), default="All India")
    concept_name = Column(String, nullable=True)
    math_track = Column(String, default="Standard (041)")
    question_text = Column(Text, nullable=False)
    marking_rubric = Column(JSONB, nullable=True)
    total_marks = Column(Numeric, nullable=False)
    question_category = Column(String, default="Board Exam")
    cognitive_type = Column(String, nullable=True)
    difficulty_tier = Column(String, default="Board Standard")
    fingerprint = Column(String(64), unique=True, index=True, nullable=True)
    source_tags = Column(JSONB, default=list)
    pyq_year = Column(Integer, nullable=True)
    pyq_set = Column(String, nullable=True)
    ideal_solution = Column(Text, nullable=True)
    is_active = Column(Boolean, default=True)

OBSOLETE_PATTERNS = {
    "M10_CH01": [r"euclid'?s?\s+division", r"terminating\s+decimal", r"non-terminating\s+repeating"],
    "M10_CH02": [r"division\s+algorithm\s+for\s+polynomials", r"divide\s+p\(x\)"],
    "M10_CH03": [r"cross[-\s]multiplication\s+method", r"reducible\s+to"],
    "M10_CH04": [r"completing\s+the\s+square"],
    "M10_CH06": [r"ratio\s+of\s+the\s+areas", r"area\(abc\)\s*/\s*area\(pqr\)", r"prove\s+the\s+pythagoras"],
    "M10_CH07": [r"area\s+of\s+triangle\s+with\s+vertices", r"1/2\s*\[\s*x1"],
    "M10_CH08": [r"sin\s*\(\s*90\s*-\s*theta\s*\)", r"complementary\s+angles"],
    "M10_CH12": [r"frustum"],
    "M10_CH13": [r"ogive", r"cumulative\s+frequency\s+curve"]
}

def detect_subject(chapter_id: str) -> str:
    if chapter_id.startswith("S10_") or chapter_id.startswith("SCI_"):
        return "SCI"
    elif chapter_id.startswith("SS10_") or chapter_id.startswith("SST_"):
        return "SST"
    return "MATH"

def detect_region(pyq_set: str, source_tags: list) -> str:
    combined = (pyq_set or "") + " " + " ".join(source_tags or [])
    lower = combined.lower()
    if "delhi" in lower:
        return "Delhi"
    elif "foreign" in lower or "outside" in lower:
        return "Foreign"
    elif "sample" in lower or "sqp" in lower:
        return "Sample"
    return "All India"

def is_syllabus_compliant(text: str, ch_key: str) -> bool:
    patterns = OBSOLETE_PATTERNS.get(ch_key, [])
    lower = text.lower()
    for pat in patterns:
        if re.search(pat, lower):
            return False
    return True

def compute_fingerprint(text: str) -> str:
    t = text.lower()
    t = re.sub(r"\\(text|mathbf|mathrm|mathit)\{([^}]+)\}", r"\2", t)
    t = re.sub(r"[\$\\]", "", t)
    t = t.replace("times", "*").replace("cdot", "*").replace("div", "/")
    t = re.sub(r"[^a-z0-9]", "", t)
    return hashlib.sha256(t.encode("utf-8")).hexdigest()

def seed_from_json(json_path="cbse_master_archive.json"):
    if not os.path.exists(json_path):
        print(f"Error: {json_path} does not exist.")
        return

    with open(json_path, "r", encoding="utf-8") as f:
        records = json.load(f)

    db = SessionLocal()
    inserted, merged, skipped = 0, 0, 0

    for item in records:
        ch = item["chapter_id"]
        if not is_syllabus_compliant(item["question_text"], ch):
            skipped += 1
            continue

        subj = item.get("subject_code") or detect_subject(ch)
        reg = item.get("paper_region") or detect_region(item.get("pyq_set"), item.get("source_tags", []))
        fp = compute_fingerprint(item["question_text"])
        existing = db.query(QuestionBank).filter(QuestionBank.fingerprint == fp).first()

        if existing:
            current_tags = list(existing.source_tags or [])
            for tag in item.get("source_tags", []):
                if tag not in current_tags:
                    current_tags.append(tag)
            existing.source_tags = current_tags
            existing.subject_code = subj
            existing.paper_region = reg
            if not existing.ideal_solution:
                existing.ideal_solution = item.get("ideal_solution", "")
            merged += 1
        else:
            q = QuestionBank(
                question_id=item["question_id"],
                chapter_id=ch,
                subject_code=subj,
                paper_region=reg,
                concept_name=item.get("concept_name"),
                math_track=item.get("math_track", "Standard (041)"),
                question_text=item["question_text"],
                marking_rubric=item.get("marking_rubric"),
                total_marks=item["total_marks"],
                question_category=item.get("question_category", "Board Exam"),
                cognitive_type=item.get("cognitive_type", "Procedural"),
                difficulty_tier=item.get("difficulty_tier", "Board Standard"),
                fingerprint=fp,
                source_tags=item.get("source_tags", []),
                pyq_year=item.get("pyq_year"),
                pyq_set=item.get("pyq_set"),
                ideal_solution=item.get("ideal_solution"),
                is_active=True
            )
            db.add(q)
            inserted += 1

    db.commit()
    db.close()
    print(f"Ingestion complete: {inserted} inserted, {merged} updated/merged, {skipped} obsolete omitted.")

if __name__ == "__main__":
    seed_from_json()