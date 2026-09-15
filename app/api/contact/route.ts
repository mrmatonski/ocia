import { parseContactBody, sendContactMessage } from "@/lib/contact-mail";
import { getRequestIp, isContactRateLimited } from "@/lib/contact-rate-limit";

export const runtime = "nodejs";

const SAFE_ERROR = "We weren't able to send your message. Please try again.";
const MAX_BODY_BYTES = 20_000;

export async function POST(request: Request) {
  const length = Number(request.headers.get("content-length") || 0);
  if (Number.isFinite(length) && length > MAX_BODY_BYTES) {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const parsed = parseContactBody(body);
  if (!parsed.ok) {
    return Response.json({ error: parsed.error }, { status: 400 });
  }

  const ip = getRequestIp(request);
  if (isContactRateLimited(ip)) {
    console.warn("Contact form rate limited.");
    return Response.json({ error: SAFE_ERROR }, { status: 429 });
  }

  if ("spam" in parsed) {
    console.warn("Contact form honeypot triggered.");
    return Response.json({ ok: true });
  }

  try {
    await sendContactMessage(parsed.fields);
  } catch (error) {
    console.error(
      "Contact form send failed:",
      error instanceof Error ? error.message : "unknown error",
    );
    return Response.json({ error: SAFE_ERROR }, { status: 503 });
  }

  return Response.json({ ok: true });
}
