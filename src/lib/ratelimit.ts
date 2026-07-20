/**
 * Shared, persistent rate limiting and demo-session tracking backed by Upstash
 * Redis. Runs only in `runtime = 'nodejs'` route handlers.
 *
 * Design notes:
 * - The counters live in Redis (atomic INCR + TTL) so a limit holds across
 *   Vercel cold starts and spans all concurrent lambda instances — an in-memory
 *   Map does neither.
 * - When Redis is not configured (local dev) or unreachable, every helper FAILS
 *   OPEN so the marketing site keeps working. The provider-side monthly spend
 *   cap (see docs/SECURITY-FIXES.md task 0) is the unconditional cost backstop;
 *   these limiters are the everyday safety net, not the last line of defence.
 */
import { Redis } from '@upstash/redis';

let redisClient: Redis | null = null;
let redisResolved = false;

function getRedis(): Redis | null {
  if (redisResolved) return redisClient;
  redisResolved = true;

  // Tolerate values pasted with surrounding quotes/whitespace (a common Vercel
  // mistake when copying from Upstash's `.env` tab).
  const url = process.env.UPSTASH_REDIS_REST_URL?.trim().replace(/^["']|["']$/g, '');
  const token = process.env.UPSTASH_REDIS_REST_TOKEN?.trim().replace(/^["']|["']$/g, '');

  if (!url || !token) {
    console.warn('ratelimit: Upstash Redis not configured — limiters fail open');
    return null;
  }

  // Constructing the client can throw on a malformed URL. Never let that crash
  // the request — fall back to fail-open, exactly as when Redis is unset.
  try {
    redisClient = new Redis({ url, token });
  } catch (err) {
    console.error('ratelimit: failed to init Upstash Redis, failing open', err);
    redisClient = null;
  }
  return redisClient;
}

/**
 * Fixed-window counter. Increments `key` and returns whether it is still within
 * `limit` for the current `windowSeconds`. Fails open on any Redis problem.
 */
export async function hitLimit(
  key: string,
  limit: number,
  windowSeconds: number
): Promise<{ allowed: boolean; count: number }> {
  const redis = getRedis();
  if (!redis) return { allowed: true, count: 0 };
  try {
    const count = await redis.incr(key);
    if (count === 1) {
      // First hit in this window — set the TTL so the window actually expires.
      await redis.expire(key, windowSeconds);
    }
    return { allowed: count <= limit, count };
  } catch (err) {
    console.error('ratelimit: redis error, failing open', err);
    return { allowed: true, count: 0 };
  }
}

/**
 * Derive the client IP from a header the platform sets, not one the client can
 * prepend. On Vercel `x-real-ip` is the true client IP; we fall back to the
 * LAST entry of `x-forwarded-for` (appended by the trusted proxy), never the
 * left-most (client-supplied) value.
 *
 * NOTE: confirm these header values in a deployed Vercel preview before fully
 * trusting them (per docs/SECURITY-FIXES.md task 1b).
 */
export function getClientIp(req: Request): string {
  const realIp = req.headers.get('x-real-ip');
  if (realIp && realIp.trim()) return realIp.trim();

  const fwd = req.headers.get('x-forwarded-for');
  if (fwd) {
    const parts = fwd
      .split(',')
      .map((p) => p.trim())
      .filter(Boolean);
    if (parts.length > 0) return parts[parts.length - 1];
  }
  return 'unknown';
}
