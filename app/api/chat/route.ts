import {
  answerFromKnowledge,
  answerFromTheWeb,
  fallbackReply,
  type ChatMessage,
} from "@/lib/chat/knowledge";
import { hasOpenAIKey, streamOpenAIReply } from "@/lib/chat/openai";
import { getRequestIp, isChatRateLimited } from "@/lib/contact-rate-limit";

export const runtime = "nodejs";

const SAFE_ERROR = "We weren't able to answer just now. Please try again.";
const MAX_BODY_BYTES = 40_000;

type Body = {
  messages?: ChatMessage[];
};

export async function POST(request: Request) {
  const length = Number(request.headers.get("content-length") || 0);
  if (Number.isFinite(length) && length > MAX_BODY_BYTES) {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const ip = getRequestIp(request);
  if (isChatRateLimited(ip)) {
    return Response.json({ error: SAFE_ERROR }, { status: 429 });
  }

  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const messages = sanitizeMessages(body.messages);
  const lastUser = [...messages].reverse().find((message) => message.role === "user");
  if (!lastUser) {
    return Response.json({ error: "Please ask a question." }, { status: 400 });
  }

  if (hasOpenAIKey()) {
    try {
      const streamed = await streamOpenAIReply(messages);
      if (streamed) {
        return new Response(streamed, {
          headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "no-store",
          },
        });
      }
    } catch (error) {
      console.error(
        "Ask assistant: OpenAI request failed.",
        error instanceof Error ? error.message : "unknown error",
      );
      return Response.json({ error: SAFE_ERROR }, { status: 503 });
    }
  }

  const question = lastUser.content;
  const local = answerFromKnowledge(question);
  const web = local ? null : await answerFromTheWeb(question);
  const text = local ?? web ?? fallbackReply;

  return streamText(text);
}

function sanitizeMessages(value: unknown): ChatMessage[] {
  if (!Array.isArray(value)) return [];

  return value
    .slice(-12)
    .flatMap((entry) => {
      if (!entry || typeof entry !== "object") return [];
      const record = entry as Record<string, unknown>;
      const role = record.role;
      const content = typeof record.content === "string" ? record.content.trim() : "";
      if ((role !== "user" && role !== "assistant") || !content) return [];
      return [{ role, content: content.slice(0, 2000) }];
    });
}

function streamText(text: string) {
  const encoder = new TextEncoder();
  const words = text.split(/(\s+)/);
  const stream = new ReadableStream({
    async start(controller) {
      for (const word of words) {
        controller.enqueue(encoder.encode(word));
        await new Promise((resolve) => setTimeout(resolve, 12));
      }
      controller.close();
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}
