const WINDOW_MS = 10 * 60 * 1000;
const CONTACT_MAX = 5;
const CHAT_MAX = 20;

const hits = new Map<string, number[]>();

export function getRequestIp(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim();
    if (first) return first.slice(0, 128);
  }
  const real = request.headers.get("x-real-ip")?.trim();
  if (real) return real.slice(0, 128);
  return "unknown";
}

function isRateLimited(key: string, max: number, windowMs = WINDOW_MS) {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((time) => now - time < windowMs);
  if (recent.length >= max) {
    hits.set(key, recent);
    return true;
  }
  recent.push(now);
  hits.set(key, recent);
  return false;
}

export function isContactRateLimited(ip: string) {
  return isRateLimited(`contact:${ip}`, CONTACT_MAX);
}

export function isChatRateLimited(ip: string) {
  return isRateLimited(`chat:${ip}`, CHAT_MAX);
}
