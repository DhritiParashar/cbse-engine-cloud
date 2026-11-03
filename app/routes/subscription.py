import uuid
from typing import Optional
from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from pydantic import BaseModel
import asyncpg
import jwt

from app.database import get_db_pool
from app.routes.auth import SECRET_KEY, ALGORITHM, create_access_token

router = APIRouter(prefix="/api/subscription", tags=["Subscription Management"])

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/api/auth/student/login")

TIER_RANKS = {"FREE": 1, "PRO": 2, "ENTERPRISE": 3}

class SubscriptionMigrateRequest(BaseModel):
    target_tier: str  # 'FREE', 'PRO', 'ENTERPRISE'
    reason: Optional[str] = "User self-service change"

class VoucherRedeemRequest(BaseModel):
    code: str

async def get_current_user_payload(token: str = Depends(oauth2_scheme)) -> dict:
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        user_id: str = payload.get("user_id")
        if user_id is None:
            raise credentials_exception
        return payload
    except Exception:
        raise credentials_exception

@router.post("/migrate")
async def migrate_subscription(
    payload: SubscriptionMigrateRequest,
    current_user: dict = Depends(get_current_user_payload),
    pool: asyncpg.Pool = Depends(get_db_pool)
):
    target_tier = payload.target_tier.upper()
    if target_tier not in TIER_RANKS:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST, 
            detail=f"Invalid target plan tier: {target_tier}"
        )

    current_tier = (current_user.get("plan_tier") or "FREE").upper()
    if current_tier == target_tier:
        return {
            "status": "unchanged", 
            "message": f"Account is already on {target_tier} plan."
        }

    migration_type = "UPGRADE" if TIER_RANKS[target_tier] > TIER_RANKS.get(current_tier, 1) else "DOWNGRADE"
    user_id_raw = current_user["user_id"]

    try:
        user_uuid = uuid.UUID(str(user_id_raw))
    except (ValueError, AttributeError):
        user_uuid = user_id_raw

    async with pool.acquire() as conn:
        async with conn.transaction():
            user_record = await conn.fetchrow(
                """
                UPDATE users 
                SET plan_tier = $1, plan_updated_at = CURRENT_TIMESTAMP
                WHERE user_id = $2
                RETURNING user_id, full_name, email, institution_id, math_track, student_class, active_subjects, plan_tier;
                """,
                target_tier, user_uuid
            )

            if not user_record:
                raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User record not found.")

            await conn.execute(
                """
                INSERT INTO subscription_migrations (user_id, previous_tier, new_tier, migration_type, reason)
                VALUES ($1, $2, $3, $4, $5);
                """,
                user_uuid, current_tier, target_tier, migration_type, payload.reason
            )

    new_token_payload = {
        **current_user,
        "plan_tier": target_tier
    }
    new_token = create_access_token(new_token_payload)

    return {
        "status": "success",
        "migration_type": migration_type,
        "previous_tier": current_tier,
        "current_tier": target_tier,
        "access_token": new_token,
        "user": new_token_payload
    }

@router.post("/redeem-voucher")
async def redeem_voucher(
    payload: VoucherRedeemRequest,
    current_user: dict = Depends(get_current_user_payload),
    pool: asyncpg.Pool = Depends(get_db_pool)
):
    clean_code = payload.code.strip().upper()

    async with pool.acquire() as conn:
        async with conn.transaction():
            voucher = await conn.fetchrow(
                """
                SELECT * FROM promo_vouchers 
                WHERE UPPER(code) = $1 AND is_active = TRUE
                FOR UPDATE
                """,
                clean_code
            )

            if not voucher:
                raise HTTPException(status_code=400, detail="Invalid or expired promo code.")

            if voucher["times_used"] >= voucher["max_uses"]:
                raise HTTPException(status_code=400, detail="This promo code has reached its maximum redemptions.")

            target_tier = voucher["target_tier"].upper()
            user_id_raw = current_user["user_id"]
            user_uuid = uuid.UUID(str(user_id_raw)) if isinstance(user_id_raw, str) else user_id_raw

            await conn.execute(
                """
                UPDATE users 
                SET plan_tier = $1, plan_updated_at = CURRENT_TIMESTAMP
                WHERE user_id = $2
                """,
                target_tier, user_uuid
            )

            await conn.execute(
                "UPDATE promo_vouchers SET times_used = times_used + 1 WHERE voucher_id = $1",
                voucher["voucher_id"]
            )

            await conn.execute(
                """
                INSERT INTO subscription_migrations (user_id, previous_tier, new_tier, migration_type, reason)
                VALUES ($1, $2, $3, 'UPGRADE', $4)
                """,
                user_uuid, current_user.get("plan_tier", "FREE"), target_tier, f"Voucher: {clean_code}"
            )

    new_token_payload = {
        **current_user,
        "plan_tier": target_tier
    }
    new_token = create_access_token(new_token_payload)

    return {
        "status": "success",
        "message": f"Successfully activated {target_tier} plan via voucher {clean_code}!",
        "access_token": new_token,
        "user": new_token_payload
    }