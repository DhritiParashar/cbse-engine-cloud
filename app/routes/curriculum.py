from fastapi import APIRouter, HTTPException, Depends, Query
from typing import List, Optional
import asyncpg
from app.database import get_db_pool

router = APIRouter(prefix="/api/curriculum", tags=["Dynamic Curriculum Engine"])

@router.get("/subjects")
async def get_subjects(class_level: int = Query(10), pool: asyncpg.Pool = Depends(get_db_pool)):
    """Fetches active and locked subjects for the student's class."""
    async with pool.acquire() as conn:
        records = await conn.fetch(
            """
            SELECT subject_id, subject_code, title, is_active 
            FROM curriculum_subjects 
            WHERE class_level = $1
            ORDER BY is_active DESC, title ASC;
            """,
            class_level
        )
        return {"class_level": class_level, "subjects": [dict(r) for r in records]}

@router.get("/chapters")
async def get_chapters(subject_id: str = Query("CLASS_10_MATH"), pool: asyncpg.Pool = Depends(get_db_pool)):
    """Fetches sidebar chapter list with board weightages."""
    async with pool.acquire() as conn:
        records = await conn.fetch(
            """
            SELECT chapter_id, chapter_number, title, board_weightage 
            FROM curriculum_chapters 
            WHERE subject_id = $1 
            ORDER BY sort_order ASC;
            """,
            subject_id
        )
        return {"subject_id": subject_id, "chapters": [dict(r) for r in records]}

@router.get("/chapter/{chapter_id}/module")
async def get_chapter_module(chapter_id: str, module_type: str = Query("intuition"), pool: asyncpg.Pool = Depends(get_db_pool)):
    """Fetches specific workspace module content on demand."""
    async with pool.acquire() as conn:
        record = await conn.fetchrow(
            """
            SELECT module_id, chapter_id, module_type, title, content_json 
            FROM curriculum_modules 
            WHERE chapter_id = $1 AND module_type = $2;
            """,
            chapter_id, module_type
        )
        if not record:
            raise HTTPException(status_code=404, detail="Curriculum module content not found.")
        return dict(record)