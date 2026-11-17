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

# ---------------- Brevo HTTPS 2-Step Registration & Recovery OTP Engine ----------------
import os, json, secrets, urllib.request, urllib.error

OTP_VALIDITY_SECONDS = 600  # 10 minutes

class CbseRegOtpInitModel(BaseModel):
    full_name: str
    email: EmailStr
    password: str
    institution_code: str = "DIRECT"
    student_class: int = 10
    math_track: Optional[str] = "Standard"

class CbseRegOtpVerifyModel(BaseModel):
    challenge_id: int
    email: EmailStr
    otp: str

class CbseResendOtpModel(BaseModel):
    challenge_id: int
    purpose: str = "Account Registration"

class OtpRequestModel(BaseModel):
    email: EmailStr
    full_name: Optional[str] = "Student"
    phone: Optional[str] = ""

class OtpResetModel(BaseModel):
    email: EmailStr
    otp: str
    new_password: str
    challenge_id: Optional[int] = None

def _dispatch_cbse_otp_https(to_email: str, full_name: str, otp_code: str, purpose: str, ref_id: int):
    brevo_key = os.environ.get("BREVO_API_KEY", "").strip()
    resend_key = os.environ.get("RESEND_API_KEY", "").strip()
    sender_email = os.environ.get("OTP_SENDER_EMAIL", "contact@goalisb.com").strip()
    sender_name = os.environ.get("OTP_SENDER_NAME", "GOALisB CBSE Master").strip()

    subject = f"GOALisB CBSE Verification Code: {otp_code} ({purpose}) [Ref #{ref_id}]"
    html_body = (
        f'<div style="font-family:Arial,sans-serif;max-width:520px;margin:auto;padding:24px;border:1px solid #e2e8f0;border-radius:12px;">'
        f'<div style="display:flex;justify-content:space-between;align-items:center;">'
        f'<h2 style="color:#1e1b4b;margin:0;">GOALisB {purpose} Verification</h2>'
        f'<span style="font-size:11px;font-weight:700;color:#4f46e5;background:#eef2ff;padding:3px 8px;border-radius:6px;">Ref #{ref_id}</span></div>'
        f'<p style="color:#334155;font-size:14px;margin-top:14px;">Hi {full_name or "Student"},</p>'
        f'<p style="color:#334155;font-size:14px;">Use the 6-digit verification code below to verify your email and activate your single-student CBSE workspace:</p>'
        f'<div style="background:#eef2ff;border:1px solid #c7d2fe;border-radius:10px;padding:16px;text-align:center;margin:18px 0;">'
        f'<span style="font-size:28px;font-weight:800;letter-spacing:6px;color:#3730a3;">{otp_code}</span></div>'
        f'<p style="color:#64748b;font-size:12px;">Valid for <strong>10 minutes</strong> (Session Ref #{ref_id}). Resending within 10 minutes sends this same code.</p></div>'
    )

    if brevo_key:
        try:
            payload = json.dumps({
                "sender": {"name": sender_name, "email": sender_email},
                "to": [{"email": to_email, "name": full_name or "Student"}],
                "subject": subject,
                "htmlContent": html_body
            }).encode("utf-8")
            req = urllib.request.Request(
                "https://api.brevo.com/v3/smtp/email",
                data=payload,
                headers={"api-key": brevo_key, "Content-Type": "application/json", "Accept": "application/json"},
                method="POST"
            )
            with urllib.request.urlopen(req, timeout=12) as resp:
                if 200 <= resp.status < 300:
                    return True, "Brevo"
        except urllib.error.HTTPError as he:
            err_body = he.read().decode("utf-8", errors="ignore")[:180]
            return False, f"Brevo HTTP {he.code}: {err_body}"
        except Exception as exc:
            return False, f"Brevo error: {exc}"

    if resend_key:
        try:
            payload = json.dumps({
                "from": f"{sender_name} <{sender_email}>",
                "to": [to_email],
                "subject": subject,
                "html": html_body
            }).encode("utf-8")
            req = urllib.request.Request(
                "https://api.resend.com/emails",
                data=payload,
                headers={"Authorization": f"Bearer {resend_key}", "Content-Type": "application/json"},
                method="POST"
            )
            with urllib.request.urlopen(req, timeout=12) as resp:
                if 200 <= resp.status < 300:
                    return True, "Resend"
        except Exception as exc:
            return False, f"Resend error: {exc}"

    return False, "Set BREVO_API_KEY and OTP_SENDER_EMAIL in Render Environment Variables."

async def _ensure_cbse_otp_and_session_tables(conn):
    await conn.execute("""
        CREATE TABLE IF NOT EXISTS otp_challenges (
            challenge_id SERIAL PRIMARY KEY,
            email TEXT NOT NULL,
            otp_code TEXT NOT NULL,
            purpose TEXT NOT NULL DEFAULT 'register',
            payload_json TEXT DEFAULT '{}',
            verified BOOLEAN NOT NULL DEFAULT FALSE,
            expires_at TIMESTAMP NOT NULL,
            created_at TIMESTAMP NOT NULL DEFAULT NOW()
        );
    """)
    await conn.execute("ALTER TABLE otp_challenges ADD COLUMN IF NOT EXISTS payload_json TEXT DEFAULT '{}'")
    await conn.execute("ALTER TABLE users ADD COLUMN IF NOT EXISTS active_session_token TEXT DEFAULT ''")

@router.post("/student/register-otp/init")
async def init_cbse_student_reg_otp(payload: CbseRegOtpInitModel, pool: asyncpg.Pool = Depends(get_db_pool)):
    if payload.student_class != 10:
        raise HTTPException(status_code=400, detail=f"Class {payload.student_class} is currently locked. Only Class 10 is activated.")
    if len(payload.password.strip()) < 6:
        raise HTTPException(status_code=400, detail="Password must be at least 6 characters.")

    clean_email = payload.email.strip().lower()
    code_clean = (payload.institution_code or "DIRECT").strip().upper()

    async with pool.acquire() as conn:
        await _ensure_cbse_otp_and_session_tables(conn)

        existing = await conn.fetchval("SELECT 1 FROM users WHERE LOWER(email) = $1", clean_email)
        if existing:
            return {
                "ok": False,
                "already_registered": True,
                "email": clean_email,
                "detail": "This email is already registered. Please sign in instead."
            }

        inst = await conn.fetchrow(
            "SELECT institution_id, name, is_active FROM institutions WHERE UPPER(institution_code) = $1",
            code_clean
        )
        if not inst:
            raise HTTPException(status_code=400, detail=f"Institution with code '{code_clean}' does not exist.")
        if not inst["is_active"]:
            raise HTTPException(status_code=403, detail="The parent institution is inactive.")

        now_utc = datetime.utcnow()
        active_ch = await conn.fetchrow(
            """
            SELECT challenge_id, otp_code, expires_at FROM otp_challenges
            WHERE LOWER(email) = $1 AND purpose = 'register' AND verified = FALSE AND expires_at > $2
            ORDER BY challenge_id DESC LIMIT 1
            """,
            clean_email, now_utc
        )

        reg_blob = json.dumps({
            "full_name": payload.full_name.strip(),
            "email": clean_email,
            "password_hash": hash_password(payload.password.strip()),
            "institution_code": code_clean,
            "institution_id": inst["institution_id"],
            "institution_name": inst["name"],
            "student_class": payload.student_class,
            "math_track": payload.math_track or "Standard"
        })

        if active_ch:
            await conn.execute(
                "UPDATE otp_challenges SET payload_json = $1 WHERE challenge_id = $2",
                reg_blob, active_ch["challenge_id"]
            )
            cid = active_ch["challenge_id"]
            otp_code = active_ch["otp_code"]
            expires_in = max(60, int((active_ch["expires_at"] - now_utc).total_seconds()))
            reused = True
        else:
            otp_code = f"{secrets.randbelow(900000) + 100000}"
            expires_at = now_utc + timedelta(seconds=OTP_VALIDITY_SECONDS)
            row = await conn.fetchrow(
                """
                INSERT INTO otp_challenges (email, otp_code, purpose, payload_json, expires_at)
                VALUES ($1, $2, 'register', $3, $4) RETURNING challenge_id
                """,
                clean_email, otp_code, reg_blob, expires_at
            )
            cid = row["challenge_id"]
            expires_in = OTP_VALIDITY_SECONDS
            reused = False

        sent, info = _dispatch_cbse_otp_https(clean_email, payload.full_name.strip(), otp_code, "Account Registration", cid)
        if not sent:
            raise HTTPException(status_code=502, detail=f"Email OTP dispatch failed ({info})")

        return {
            "ok": True,
            "challenge_id": cid,
            "ref_id": cid,
            "email": clean_email,
            "reused_same_otp": reused,
            "expires_in": expires_in
        }

@router.post("/otp/resend")
async def resend_cbse_otp(payload: CbseResendOtpModel, pool: asyncpg.Pool = Depends(get_db_pool)):
    async with pool.acquire() as conn:
        await _ensure_cbse_otp_and_session_tables(conn)
        ch = await conn.fetchrow(
            "SELECT challenge_id, email, otp_code, purpose, payload_json, expires_at FROM otp_challenges WHERE challenge_id = $1",
            int(payload.challenge_id)
        )
        if not ch:
            raise HTTPException(status_code=404, detail="OTP session not found. Please submit your details again.")

        now_utc = datetime.utcnow()
        if ch["expires_at"] > now_utc:
            otp_code = ch["otp_code"]
            expires_in = max(60, int((ch["expires_at"] - now_utc).total_seconds()))
            reused = True
        else:
            otp_code = f"{secrets.randbelow(900000) + 100000}"
            new_exp = now_utc + timedelta(seconds=OTP_VALIDITY_SECONDS)
            await conn.execute(
                "UPDATE otp_challenges SET otp_code = $1, expires_at = $2, created_at = $3 WHERE challenge_id = $4",
                otp_code, new_exp, now_utc, ch["challenge_id"]
            )
            expires_in = OTP_VALIDITY_SECONDS
            reused = False

        full_name = "Student"
        try:
            meta = json.loads(ch["payload_json"] or "{}")
            full_name = meta.get("full_name") or "Student"
        except Exception:
            pass

        sent, info = _dispatch_cbse_otp_https(ch["email"], full_name, otp_code, payload.purpose, ch["challenge_id"])
        if not sent:
            raise HTTPException(status_code=502, detail=f"Resend failed ({info})")

        return {
            "ok": True,
            "challenge_id": ch["challenge_id"],
            "ref_id": ch["challenge_id"],
            "email": ch["email"],
            "reused_same_otp": reused,
            "expires_in": expires_in
        }

@router.post("/student/register-otp/verify", status_code=status.HTTP_201_CREATED)
async def verify_cbse_student_reg_otp(payload: CbseRegOtpVerifyModel, pool: asyncpg.Pool = Depends(get_db_pool)):
    clean_email = payload.email.strip().lower()
    async with pool.acquire() as conn:
        await _ensure_cbse_otp_and_session_tables(conn)
        ch = await conn.fetchrow(
            "SELECT challenge_id, email, otp_code, payload_json, verified, expires_at FROM otp_challenges WHERE challenge_id = $1",
            int(payload.challenge_id)
        )
        if not ch or ch["email"].lower() != clean_email:
            raise HTTPException(status_code=400, detail="OTP session expired or mismatched. Please register again.")
        if ch["expires_at"] < datetime.utcnow():
            raise HTTPException(status_code=400, detail=f"OTP (Ref #{ch['challenge_id']}) expired after 10 minutes. Click Resend OTP.")
        if ch["otp_code"] != payload.otp.strip():
            raise HTTPException(status_code=400, detail=f"Incorrect OTP for Ref #{ch['challenge_id']}. Check the 6-digit code in your email.")

        existing = await conn.fetchval("SELECT 1 FROM users WHERE LOWER(email) = $1", clean_email)
        if existing:
            raise HTTPException(status_code=409, detail="This email is already registered. Please sign in.")

        meta = json.loads(ch["payload_json"] or "{}")
        session_nonce = secrets.token_hex(16)
        user_record = await conn.fetchrow(
            """
            INSERT INTO users (institution_id, full_name, email, password_hash, role, math_track, student_class, active_subjects, active_session_token)
            VALUES ($1, $2, $3, $4, 'student', $5, $6, ARRAY['Mathematics'], $7)
            RETURNING user_id, full_name, email, institution_id, math_track, student_class, active_subjects;
            """,
            meta["institution_id"], meta["full_name"], clean_email, meta["password_hash"],
            meta.get("math_track", "Standard"), int(meta.get("student_class", 10)), session_nonce
        )
        await conn.execute("UPDATE otp_challenges SET verified = TRUE WHERE challenge_id = $1", ch["challenge_id"])

        token_payload = {
            "user_id": str(user_record["user_id"]),
            "institution_id": user_record["institution_id"],
            "institution_name": meta.get("institution_name", "Direct Learner"),
            "full_name": user_record["full_name"],
            "email": user_record["email"],
            "student_class": user_record["student_class"],
            "math_track": user_record["math_track"],
            "active_subjects": user_record["active_subjects"],
            "role": "student",
            "plan_tier": "Institutional",
            "plan": "Institutional",
            "session_nonce": session_nonce
        }
        return {
            "status": "success",
            "access_token": create_access_token(token_payload),
            "user": token_payload
        }

@router.post("/forgot-password")
@router.post("/password-reset/init")
async def initiate_password_reset(payload: OtpRequestModel, pool: asyncpg.Pool = Depends(get_db_pool)):
    clean_email = payload.email.strip().lower()
    async with pool.acquire() as conn:
        await _ensure_cbse_otp_and_session_tables(conn)
        user = await conn.fetchrow("SELECT user_id, full_name FROM users WHERE LOWER(email) = $1", clean_email)
        if not user:
            raise HTTPException(status_code=404, detail="No student account found with this email.")

        now_utc = datetime.utcnow()
        active_ch = await conn.fetchrow(
            """
            SELECT challenge_id, otp_code, expires_at FROM otp_challenges
            WHERE LOWER(email) = $1 AND purpose = 'reset' AND verified = FALSE AND expires_at > $2
            ORDER BY challenge_id DESC LIMIT 1
            """,
            clean_email, now_utc
        )
        if active_ch:
            cid = active_ch["challenge_id"]
            otp_code = active_ch["otp_code"]
            expires_in = max(60, int((active_ch["expires_at"] - now_utc).total_seconds()))
            reused = True
        else:
            otp_code = f"{secrets.randbelow(900000) + 100000}"
            expires_at = now_utc + timedelta(seconds=OTP_VALIDITY_SECONDS)
            row = await conn.fetchrow(
                "INSERT INTO otp_challenges (email, otp_code, purpose, payload_json, expires_at) VALUES ($1, $2, 'reset', $3, $4) RETURNING challenge_id",
                clean_email, otp_code, json.dumps({"full_name": user["full_name"]}), expires_at
            )
            cid = row["challenge_id"]
            expires_in = OTP_VALIDITY_SECONDS
            reused = False

        sent, info = _dispatch_cbse_otp_https(clean_email, user["full_name"], otp_code, "Password Recovery", cid)
        if not sent:
            raise HTTPException(status_code=502, detail=f"Recovery email failed ({info})")

        return {
            "status": "success",
            "ok": True,
            "challenge_id": cid,
            "ref_id": cid,
            "reused_same_otp": reused,
            "expires_in": expires_in,
            "message": f"6-digit recovery OTP (Ref #{cid}) sent to {clean_email}."
        }

@router.post("/reset-password")
@router.post("/password-reset/complete")
async def complete_password_reset(payload: OtpResetModel, pool: asyncpg.Pool = Depends(get_db_pool)):
    if len(payload.new_password.strip()) < 6:
        raise HTTPException(status_code=400, detail="New password must be at least 6 characters.")
    clean_email = payload.email.strip().lower()
    async with pool.acquire() as conn:
        await _ensure_cbse_otp_and_session_tables(conn)
        ch = await conn.fetchrow(
            """
            SELECT challenge_id, otp_code, expires_at FROM otp_challenges
            WHERE LOWER(email) = $1 AND purpose = 'reset' AND verified = FALSE
            ORDER BY challenge_id DESC LIMIT 1
            """,
            clean_email
        )
        if not ch or ch["otp_code"] != payload.otp.strip():
            raise HTTPException(status_code=400, detail="Invalid OTP code. Please check your email and try again.")
        if ch["expires_at"] < datetime.utcnow():
            raise HTTPException(status_code=400, detail=f"OTP (Ref #{ch['challenge_id']}) expired. Click Resend Recovery OTP.")
        hashed_pw = hash_password(payload.new_password.strip())
        await conn.execute("UPDATE users SET password_hash = $1, active_session_token = '' WHERE LOWER(email) = $2", hashed_pw, clean_email)
        await conn.execute("UPDATE otp_challenges SET verified = TRUE WHERE challenge_id = $1", ch["challenge_id"])
        return {"status": "success", "ok": True, "message": "Password updated successfully. You can now sign in."}
