import os
import asyncpg

DEFAULT_DB_URL = "postgresql://neondb_owner:npg_YFcvx8b0CZRU@ep-plain-glitter-b3wqaugf-pooler.c-4.ap-southeast-1.aws.neon.tech/neondb?sslmode=require"

DATABASE_URL = os.getenv("DATABASE_URL", DEFAULT_DB_URL)

db_pool = None

async def init_db_pool():
    global db_pool
    if not db_pool:
        db_pool = await asyncpg.create_pool(
            dsn=DATABASE_URL,
            min_size=1,
            max_size=10
        )
        print("Connected to PostgreSQL database pool.")

async def close_db_pool():
    global db_pool
    if db_pool:
        await db_pool.close()
        print("Database pool closed.")

def get_db():
    return db_pool
def get_db_pool():
    return db_pool
