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

// Blocks basic cross-site abuse: a request whose Origin header doesn't match
// this site. Browsers always send Origin on cross-origin fetch/POST requests,
// so this stops other websites from silently submitting to these endpoints
// (a lightweight stand-in for CSRF protection on unauthenticated form APIs).
// Allows same-origin requests, local dev, and requests with no Origin header
// at all (some non-browser clients omit it; the honeypot + rate limit still apply).
export function isDisallowedOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");
  if (!origin) return false;

  try {
    const originHost = new URL(origin).host;
    const requestHost = request.headers.get("host");
    if (requestHost && originHost === requestHost) return false;
    if (originHost === "localhost:3000" || originHost.endsWith(".vercel.app")) return false;
    return true;
  } catch {
    return true;
  }
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
