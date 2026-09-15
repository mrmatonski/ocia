import OpenAI from "openai";
import { assistantSystemPrompt, type ChatMessage } from "@/lib/chat/knowledge";

export const DEFAULT_OPENAI_MODEL = "gpt-5.6-luna";

export function getOpenAIModel() {
  return process.env.OPENAI_MODEL?.trim() || DEFAULT_OPENAI_MODEL;
}

function getOpenAIClient() {
  const apiKey = process.env.OPENAI_API_KEY?.trim();
  if (!apiKey) return null;
  return new OpenAI({ apiKey });
}

export function hasOpenAIKey() {
  return Boolean(process.env.OPENAI_API_KEY?.trim());
}

export async function streamOpenAIReply(messages: ChatMessage[]) {
  const client = getOpenAIClient();
  if (!client) return null;

  const input = messages
    .filter((message) => message.role === "user" || message.role === "assistant")
    .map((message) => ({
      role: message.role,
      content: message.content,
    }));

  const stream = await client.responses.create({
    model: getOpenAIModel(),
    instructions: assistantSystemPrompt,
    input,
    stream: true,
  });

  const encoder = new TextEncoder();

  return new ReadableStream<Uint8Array>({
    async start(controller) {
      try {
        for await (const event of stream) {
          if (event.type === "response.output_text.delta" && event.delta) {
            controller.enqueue(encoder.encode(event.delta));
          }
        }
        controller.close();
      } catch (error) {
        controller.error(error);
      }
    },
  });
}
