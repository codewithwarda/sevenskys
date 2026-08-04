// Lightweight, dependency-free spam protection for the public form endpoints.
// This is intentionally simple: a honeypot field (invisible to real visitors,
// almost always filled in by bots) plus a best-effort in-memory rate limit per
// IP. The rate limit resets whenever the serverless function cold-starts, so
// treat it as a helpful speed bump rather than a hard guarantee — if abuse
// becomes a real problem, swap this for a durable store (Upstash/Vercel KV)
// or a hosted service like Cloudflare Turnstile.

const hits = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS = 5;

export function isHoneypotFilled(value: unknown): boolean {
  return typeof value === "string" && value.trim().length > 0;
}

export function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return request.headers.get("x-real-ip") || "unknown";
}

export function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);

  if (timestamps.length >= MAX_REQUESTS) {
    hits.set(ip, timestamps);
    return true;
  }

  timestamps.push(now);
  hits.set(ip, timestamps);
  return false;
}
