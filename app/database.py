import os
import asyncpg
from dotenv import load_dotenv

load_dotenv()

# Explicit fallback ensures Render never defaults to localhost:5432
NEON_FALLBACK = "postgresql://neondb_owner:npg_YFcvx8b0CZRU@ep-plain-glitter-b3wqaugf-pooler.c-4.ap-southeast-1.aws.neon.tech/neondb?sslmode=require"
DATABASE_URL = os.getenv("DATABASE_URL") or NEON_FALLBACK

_db_pool = None

async def init_db_pool():
    global _db_pool
    if _db_pool is None:
        try:
            _db_pool = await asyncpg.create_pool(
                dsn=DATABASE_URL,
                min_size=1,
                max_size=10,
                ssl="require"
            )
            print("Successfully initialized Neon DB connection pool.")
        except Exception as e:
            print(f"Error initializing DB pool: {e}")
            raise e
    return _db_pool

async def close_db_pool():
    global _db_pool
    if _db_pool is not None:
        await _db_pool.close()
        _db_pool = None
        print("Closed Neon DB connection pool.")

async def get_db_pool():
    global _db_pool
    if _db_pool is None:
        await init_db_pool()
    return _db_pool
