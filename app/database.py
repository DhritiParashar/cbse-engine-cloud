import os
from dotenv import load_dotenv
load_dotenv()
import asyncpg
from typing import Optional

# Configuration defaults (or load from environment variables)
DB_HOST = os.getenv("DB_HOST", "127.0.0.1")
DB_PORT = int(os.getenv("DB_PORT", 5432))
DB_USER = os.getenv("DB_USER", "postgres")
DB_PASSWORD = os.getenv("DB_PASSWORD", "AaravPass2026")
DB_NAME = os.getenv("DB_NAME", "postgres")

# Global async connection pool
pool: Optional[asyncpg.Pool] = None

async def init_db_pool() -> asyncpg.Pool:
    global pool
    if pool is None:
        pool = await asyncpg.create_pool(
            host=DB_HOST,
            port=DB_PORT,
            user=DB_USER,
            password=DB_PASSWORD,
            database=DB_NAME,
            ssl="require",
            min_size=10,             # Keep 10 warm connections open at all times
            max_size=40,             # Expand up to 40 connections during traffic spikes
            max_queries=50000,       # Recycle connection after 50k queries to prevent memory leaks
            max_inactive_connection_lifetime=300.0,  # 5 minutes idle cleanup
            command_timeout=15.0     # Reject hanging queries after 15 seconds
        )
    return pool

async def close_db_pool():
    global pool
    if pool is not None:
        await pool.close()
        pool = None

async def get_db_pool() -> asyncpg.Pool:
    global pool
    if pool is None:
        return await init_db_pool()
    return pool
