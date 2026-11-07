from pathlib import Path
from typing import Optional
from pydantic import BaseModel
from fastapi import FastAPI, Depends
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

from app.database import init_db_pool, close_db_pool, get_db_pool
from app.routes.mock_test import router as mock_test_router
from app.routes.auth import router as auth_router
from app.routes.curriculum import router as curriculum_router
from app.routes import subscription

# Initialize FastAPI instance FIRST
app = FastAPI(title="CBSE Master Tutor Engine", version="2.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Startup and shutdown database lifecycle hooks
@app.on_event("startup")
async def startup():
    await init_db_pool()

@app.on_event("shutdown")
async def shutdown():
    await close_db_pool()

# Register API Routers
app.include_router(auth_router)
app.include_router(curriculum_router)
app.include_router(mock_test_router)
app.include_router(subscription.router)

# Feedback Data Model & Route
class FeedbackPayload(BaseModel):
    category: str
    contact: Optional[str] = "Anonymous"
    comments: str
    subject: Optional[str] = None
    chapter: Optional[str] = None
    main_tab: Optional[int] = None
    screen_resolution: Optional[str] = None
    user_agent: Optional[str] = None

@app.post("/api/feedback")
async def log_feedback(fb: FeedbackPayload, pool = Depends(get_db_pool)):
    async with pool.acquire() as conn:
        await conn.execute(
            """
            INSERT INTO app_feedback (category, contact, comments, subject, chapter, main_tab, screen_resolution, user_agent)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8);
            """,
            fb.category, fb.contact, fb.comments, fb.subject, fb.chapter, fb.main_tab, fb.screen_resolution, fb.user_agent
        )
    return {"status": "success", "message": "Feedback recorded"}

# Static and Frontend File Serving
DATA_DIR = Path(__file__).resolve().parent.parent / "frontend" / "data"
app.mount("/data", StaticFiles(directory=DATA_DIR), name="data")

FRONTEND_FILE = Path(__file__).resolve().parent.parent / "frontend" / "index.html"

@app.get("/")
async def serve_index():
    return FileResponse(FRONTEND_FILE)
