from fastapi import APIRouter, HTTPException, Depends, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from pydantic import BaseModel, EmailStr
from typing import Optional, List
import asyncpg
import bcrypt
import jwt
from datetime import datetime, timedelta
from app.database import get_db_pool

router = APIRouter(prefix="/api/auth", tags=["Hierarchical Authentication"])

SECRET_KEY = "CBSE_SECURE_INSTITUTION_KEY_2026"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_DAYS = 7
security = HTTPBearer()

# ----------------- Request Models -----------------

class InstitutionRegisterRequest(BaseModel):
    institution_name: str
    institution_code: str  # e.g., "DPS-RKP"
    admin_email: EmailStr
    admin_password: str

class InstitutionLoginRequest(BaseModel):
    admin_email: EmailStr
    admin_password: str

class StudentRegisterRequest(BaseModel):
    full_name: str
    email: EmailStr
    password: str
    institution_code: str
    student_class: int = 10  # Only Class 10 is currently active
    math_track: Optional[str] = "Standard"

class StudentLoginRequest(BaseModel):
    email: EmailStr
    password: str

# ----------------- Cryptography & Token Helpers -----------------

def hash_password(password: str) -> str:
    salt = bcrypt.gensalt(rounds=12)
    return bcrypt.hashpw(password.encode("utf-8"), salt).decode("utf-8")

def verify_password(plain_password: str, hashed_password: str) -> bool:
    try:
        return bcrypt.checkpw(plain_password.encode("utf-8"), hashed_password.encode("utf-8"))
    except Exception:
        # Fallback check for plain seed strings like PLATFORM_SUPER_ADMIN
        return plain_password == hashed_password

def create_access_token(data: dict) -> str:
    to_encode = data.copy()
    expire = datetime.utcnow() + timedelta(days=ACCESS_TOKEN_EXPIRE_DAYS)
    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)

def get_current_user(credentials: HTTPAuthorizationCredentials = Depends(security)) -> dict:
    try:
        payload = jwt.decode(credentials.credentials, SECRET_KEY, algorithms=[ALGORITHM])
        return payload
    except jwt.ExpiredSignatureError:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Session expired.")
    except jwt.InvalidTokenError:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid token.")

# ----------------- Tier 1: GOALisB Super Admin -----------------

@router.get("/admin/institutions")
async def list_all_institutions(current_user: dict = Depends(get_current_user), pool: asyncpg.Pool = Depends(get_db_pool)):
    if current_user.get("role") != "super_admin":
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="GOALisB Super Admin access required.")
    
    async with pool.acquire() as conn:
        records = await conn.fetch(
            """
            SELECT 
                i.institution_id, 
                i.institution_code, 
                i.name, 
                i.admin_email, 
                i.is_active, 
                i.created_at,
                COUNT(u.user_id)::int AS enrolled_students
            FROM institutions i
            LEFT JOIN users u ON i.institution_id = u.institution_id AND u.role = 'student'
            GROUP BY i.institution_id, i.institution_code, i.name, i.admin_email, i.is_active, i.created_at
            ORDER BY i.created_at DESC;
            """
        )
        return {"institutions": [dict(r) for r in records]}

# ----------------- Tier 2: Institution Tenant Portal -----------------

@router.post("/institution/register", status_code=status.HTTP_201_CREATED)
async def register_institution(payload: InstitutionRegisterRequest, pool: asyncpg.Pool = Depends(get_db_pool)):
    code_clean = payload.institution_code.strip().upper()
    async with pool.acquire() as conn:
        existing = await conn.fetchval(
            "SELECT 1 FROM institutions WHERE UPPER(institution_code) = $1 OR LOWER(admin_email) = LOWER($2)",
            code_clean, payload.admin_email.strip()
        )
        if existing:
            raise HTTPException(status_code=409, detail="Institution code or admin email already registered.")

        inst_id = f"INST_{code_clean.replace('-', '_')}"
        hashed_pw = hash_password(payload.admin_password)

        await conn.execute(
            """
            INSERT INTO institutions (institution_id, institution_code, name, admin_email, admin_password_hash, is_active)
            VALUES ($1, $2, $3, $4, $5, TRUE)
            ON CONFLICT (institution_id) DO NOTHING;
            """,
            inst_id, code_clean, payload.institution_name.strip(), payload.admin_email.strip().lower(), hashed_pw
        )

        token = create_access_token({
            "institution_id": inst_id,
            "institution_code": code_clean,
            "institution_name": payload.institution_name.strip(),
            "role": "institution_admin"
        })
        return {
            "status": "success",
            "message": f"Institution '{payload.institution_name}' registered successfully.",
            "institution_code": code_clean,
            "access_token": token
        }

@router.post("/institution/login")
async def login_institution(payload: InstitutionLoginRequest, pool: asyncpg.Pool = Depends(get_db_pool)):
    async with pool.acquire() as conn:
        inst = await conn.fetchrow(
            """
            SELECT institution_id, institution_code, name, admin_password_hash, is_active 
            FROM institutions 
            WHERE LOWER(admin_email) = LOWER($1)
            """,
            payload.admin_email.strip()
        )
        if not inst or not verify_password(payload.admin_password, inst["admin_password_hash"]):
            raise HTTPException(status_code=401, detail="Invalid institution credentials.")
        if not inst["is_active"]:
            raise HTTPException(status_code=403, detail="Institution account is deactivated.")

        token = create_access_token({
            "institution_id": inst["institution_id"],
            "institution_code": inst["institution_code"],
            "institution_name": inst["name"],
            "role": "institution_admin"
        })
        return {
            "status": "success",
            "access_token": token,
            "institution": {
                "institution_id": inst["institution_id"],
                "institution_code": inst["institution_code"],
                "name": inst["name"]
            }
        }

# ----------------- Tier 3: Student Flow -----------------

@router.post("/student/register", status_code=status.HTTP_201_CREATED)
async def register_student(payload: StudentRegisterRequest, pool: asyncpg.Pool = Depends(get_db_pool)):
    if payload.student_class != 10:
        raise HTTPException(
            status_code=400,
            detail=f"Class {payload.student_class} is currently locked. Only Class 10 is activated."
        )

    code_clean = payload.institution_code.strip().upper()
    async with pool.acquire() as conn:
        inst = await conn.fetchrow(
            "SELECT institution_id, name, is_active FROM institutions WHERE UPPER(institution_code) = $1",
            code_clean
        )
        if not inst:
            raise HTTPException(status_code=400, detail=f"Institution with code '{code_clean}' does not exist.")
        if not inst["is_active"]:
            raise HTTPException(status_code=403, detail="The parent institution is inactive.")

        existing = await conn.fetchval("SELECT 1 FROM users WHERE LOWER(email) = LOWER($1)", payload.email.strip())
        if existing:
            raise HTTPException(status_code=409, detail="An account with this email already exists.")

        hashed_pw = hash_password(payload.password)
        user_record = await conn.fetchrow(
            """
            INSERT INTO users (institution_id, full_name, email, password_hash, role, math_track, student_class, active_subjects)
            VALUES ($1, $2, $3, $4, 'student', $5, $6, ARRAY['Mathematics'])
            RETURNING user_id, full_name, email, institution_id, math_track, student_class, active_subjects;
            """,
            inst["institution_id"], payload.full_name.strip(), payload.email.strip().lower(),
            hashed_pw, payload.math_track, payload.student_class
        )

        token_payload = {
            "user_id": str(user_record["user_id"]),
            "institution_id": user_record["institution_id"],
            "institution_name": inst["name"],
            "full_name": user_record["full_name"],
            "email": user_record["email"],
            "student_class": user_record["student_class"],
            "math_track": user_record["math_track"],
            "active_subjects": user_record["active_subjects"],
            "role": "student",
            "plan_tier": "Institutional",
            "plan": "Institutional"
        }
        return {
            "status": "success",
            "access_token": create_access_token(token_payload),
            "user": token_payload
        }

@router.post("/student/login")
async def login_student(payload: StudentLoginRequest, pool: asyncpg.Pool = Depends(get_db_pool)):
    async with pool.acquire() as conn:
        record = await conn.fetchrow(
            """
            SELECT u.user_id, u.institution_id, u.full_name, u.email, 
                   u.password_hash, u.role, u.math_track, u.student_class,
                   u.active_subjects, u.is_active,
                   COALESCE(u.plan_tier, 'Institutional') AS plan_tier,
                   i.name AS institution_name, i.is_active AS inst_is_active
            FROM users u
            JOIN institutions i ON u.institution_id = i.institution_id
            WHERE LOWER(u.email) = LOWER($1)
            """,
            payload.email.strip()
        )
        if not record:
            raise HTTPException(status_code=404, detail="Student account not found.")
        if not verify_password(payload.password, record["password_hash"]):
            raise HTTPException(status_code=401, detail="Invalid password.")
        if not record["is_active"] or not record["inst_is_active"]:
            raise HTTPException(status_code=403, detail="Student account or institution is inactive.")

        # Resolve tier: defaults to 'Institutional' for any enrolled school student
        assigned_tier = record["plan_tier"] or ("Institutional" if record["institution_id"] else "Free")

        token_payload = {
            "user_id": str(record["user_id"]),
            "institution_id": record["institution_id"],
            "institution_name": record["institution_name"],
            "full_name": record["full_name"],
            "email": record["email"],
            "student_class": record["student_class"] or 10,
            "math_track": record["math_track"],
            "active_subjects": record["active_subjects"] or ["Mathematics"],
            "role": record["role"],
            "plan_tier": assigned_tier,
            "plan": assigned_tier
        }
        return {
            "status": "success",
            "access_token": create_access_token(token_payload),
            "user": token_payload,
            "portal": "GOALisB Master Engine"
        }