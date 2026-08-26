import {
  answerFromKnowledge,
  answerFromTheWeb,
  assistantSystemPrompt,
  fallbackReply,
  type ChatMessage,
} from "@/lib/chat/knowledge";

export const runtime = "nodejs";

type Body = {
  messages?: ChatMessage[];
};

export async function POST(request: Request) {
  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const messages = Array.isArray(body.messages) ? body.messages.slice(-16) : [];
  const lastUser = [...messages].reverse().find((message) => message.role === "user");
  if (!lastUser?.content?.trim()) {
    return Response.json({ error: "Please ask a question." }, { status: 400 });
  }

  const question = lastUser.content.trim().slice(0, 2000);

  if (process.env.OPENAI_API_KEY) {
    try {
      const streamed = await streamOpenAI(messages);
      if (streamed) return streamed;
    } catch {
      // Fall through to local answering if the model is unavailable.
    }
  }

  const local = answerFromKnowledge(question);
  const web = local ? null : await answerFromTheWeb(question);
  const text = local ?? web ?? fallbackReply;

  return streamText(text);
}

async function streamOpenAI(messages: ChatMessage[]) {
  const key = process.env.OPENAI_API_KEY;
  if (!key) return null;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: process.env.OPENAI_MODEL ?? "gpt-4o-mini",
      stream: true,
      temperature: 0.4,
      messages: [{ role: "system", content: assistantSystemPrompt }, ...messages],
    }),
  });

  if (!response.ok || !response.body) return null;

  const encoder = new TextEncoder();
  const decoder = new TextDecoder();
  const reader = response.body.getReader();

  const stream = new ReadableStream({
    async start(controller) {
      let buffer = "";
      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split("\n");
          buffer = lines.pop() ?? "";
          for (const line of lines) {
            const trimmed = line.trim();
            if (!trimmed.startsWith("data:")) continue;
            const data = trimmed.slice(5).trim();
            if (data === "[DONE]") continue;
            try {
              const json = JSON.parse(data) as {
                choices?: Array<{ delta?: { content?: string } }>;
              };
              const piece = json.choices?.[0]?.delta?.content;
              if (piece) controller.enqueue(encoder.encode(piece));
            } catch {
              // Ignore malformed SSE chunks.
            }
          }
        }
      } finally {
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
    },
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
