import OpenAI from "openai";
import type { ResponseCreateParamsStreaming } from "openai/resources/responses/responses";
import { assistantSystemPrompt, type ChatMessage } from "@/lib/chat/knowledge";

export const DEFAULT_OPENAI_MODEL = "gpt-5.5";
const MAX_OUTPUT_TOKENS = 900;
const HISTORY_LIMIT = 12;

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

export function conversationInput(messages: ChatMessage[]) {
  return messages
    .filter((message) => message.role === "user" || message.role === "assistant")
    .filter((message) => message.content.trim().length > 0)
    .slice(-HISTORY_LIMIT)
    .map((message) => ({
      role: message.role,
      content: message.content.trim(),
    }));
}

export async function streamOpenAIReply(messages: ChatMessage[]) {
  const client = getOpenAIClient();
  if (!client) return null;

  const input = conversationInput(messages);
  if (!input.some((message) => message.role === "user")) return null;

  const model = getOpenAIModel();
  const params: ResponseCreateParamsStreaming = {
    model,
    instructions: assistantSystemPrompt,
    input,
    stream: true,
    store: false,
    max_output_tokens: MAX_OUTPUT_TOKENS,
  };

  if (model.startsWith("gpt-5")) {
    params.reasoning = { effort: "low" };
  }

  const stream = await client.responses.create(params);
  const encoder = new TextEncoder();

  return new ReadableStream<Uint8Array>({
    async start(controller) {
      let text = "";
      try {
        for await (const event of stream) {
          if (event.type === "response.output_text.delta" && event.delta) {
            text += event.delta;
            controller.enqueue(encoder.encode(event.delta));
            continue;
          }

          if (event.type === "response.completed" && !text) {
            const completed =
              "response" in event && event.response && "output_text" in event.response
                ? String(event.response.output_text ?? "")
                : "";
            if (completed) {
              text = completed;
              controller.enqueue(encoder.encode(completed));
            }
          }
        }
        controller.close();
      } catch (error) {
        controller.error(error);
      }
    },
  });
}
