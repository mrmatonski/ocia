import { parseContactBody, sendContactMessage } from "@/lib/contact-mail";
import { contactPlaceholders } from "@/lib/site";

export const runtime = "nodejs";

export async function POST(request: Request) {
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

  try {
    await sendContactMessage(parsed.fields);
  } catch (error) {
    console.error(
      "Contact form send failed:",
      error instanceof Error ? error.message : error,
    );
    return Response.json(
      {
        error: `We could not send your message. Please try again, or write to ${contactPlaceholders.email}.`,
      },
      { status: 503 },
    );
  }

  return Response.json({ ok: true });
}
