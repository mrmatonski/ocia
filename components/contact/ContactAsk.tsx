"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type Message = {
  role: "user" | "assistant";
  content: string;
  local?: boolean;
};

const welcomeMessage =
  "Welcome! I'm the St. Mary OCIA assistant. You can ask me about the Catholic faith, Scripture, the sacraments, prayer, Church teaching, OCIA, or another topic you're curious about. What would you like to know?";

const suggestions = [
  "What happens during OCIA?",
  "What do Catholics believe about the Eucharist?",
  "What is the Holy Trinity?",
  "How do I pray the Rosary?",
  "Why do Catholics confess to a priest?",
];

export function ContactAsk() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: welcomeMessage, local: true },
  ]);
  const [input, setInput] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const abortRef = useRef<AbortController | null>(null);
  const started = messages.some((message) => message.role === "user");

  useEffect(() => {
    listRef.current?.scrollTo({
      top: listRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, pending]);

  async function send(text: string) {
    const question = text.trim();
    if (!question || pending) return;

    const nextMessages: Message[] = [
      ...messages,
      { role: "user", content: question },
    ];
    setMessages(nextMessages);
    setInput("");
    setPending(true);
    setError(null);

    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    const history = nextMessages
      .filter((message) => !message.local)
      .map(({ role, content }) => ({ role, content }));

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history }),
        signal: controller.signal,
      });

      if (!response.ok || !response.body) {
        throw new Error("unavailable");
      }

      const contentType = response.headers.get("content-type") ?? "";
      if (contentType.includes("application/json")) {
        throw new Error("unavailable");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let assistant = "";
      setMessages([...nextMessages, { role: "assistant", content: "" }]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        assistant += decoder.decode(value, { stream: true });
        const snapshot = assistant;
        setMessages([...nextMessages, { role: "assistant", content: snapshot }]);
      }

      if (!assistant.trim()) {
        throw new Error("empty");
      }
    } catch (caught) {
      if ((caught as Error).name === "AbortError") return;
      setError("We weren't able to answer just now. Please try again.");
      setMessages(nextMessages);
    } finally {
      setPending(false);
    }
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    void send(input);
  }

  return (
    <div className="border-y border-gold/18 py-8 md:py-10">
      <p className="eyebrow">Ask St. Mary OCIA</p>
      <h3 className="mt-4 font-serif text-3xl text-ivory">
        Questions about the Catholic faith—and beyond.
      </h3>
      <p className="mt-4 text-sm leading-7 text-stone-light">
        Ask a question about Catholic teaching, Scripture, OCIA, prayer, the
        sacraments, Church history, or just about anything you&apos;d like to
        understand better. This is an AI assistant, not Marty, a priest, or
        another member of the parish staff.
      </p>

      <div className="mt-8 flex min-h-[28rem] flex-col">
        <div
          ref={listRef}
          className="max-h-[28rem] min-h-[18rem] flex-1 space-y-4 overflow-y-auto pr-1 md:max-h-[32rem]"
          aria-live="polite"
        >
          {messages.map((message, index) => (
            <div
              key={`${message.role}-${index}`}
              className={cn(
                "max-w-[94%] text-sm leading-7",
                message.role === "user"
                  ? "ml-auto border border-gold/25 bg-gold/10 px-3.5 py-2.5 text-ivory"
                  : "text-stone-light",
              )}
            >
              {message.role === "assistant" ? (
                <p
                  className={cn(
                    "whitespace-pre-wrap",
                    pending &&
                      index === messages.length - 1 &&
                      !message.content &&
                      "chat-cursor",
                  )}
                >
                  {message.content}
                </p>
              ) : (
                <p className="whitespace-pre-wrap">{message.content}</p>
              )}
            </div>
          ))}
          {pending && messages[messages.length - 1]?.role !== "assistant" ? (
            <p className="text-sm text-stone-light chat-cursor">Considering…</p>
          ) : null}
          {error ? (
            <p role="alert" className="text-sm leading-7 text-stone-light">
              {error}
            </p>
          ) : null}
        </div>

        {!started ? (
          <ul className="mt-5 flex flex-col gap-2">
            {suggestions.map((item) => (
              <li key={item}>
                <button
                  type="button"
                  onClick={() => void send(item)}
                  disabled={pending}
                  className="w-full border border-gold/20 px-3 py-2.5 text-left text-sm text-stone-light transition-colors hover:border-gold/45 hover:text-ivory disabled:opacity-60"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        ) : null}

        <form onSubmit={onSubmit} className="mt-6" aria-busy={pending}>
          <label htmlFor="ocia-ask-input" className="sr-only">
            Ask a question
          </label>
          <textarea
            id="ocia-ask-input"
            rows={4}
            value={input}
            disabled={pending}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter" && !event.shiftKey) {
                event.preventDefault();
                void send(input);
              }
            }}
            placeholder="Ask a question..."
            className="w-full resize-none border border-gold/20 bg-ink/50 px-4 py-3 text-ivory outline-none transition-colors placeholder:text-stone/70 focus:border-gold disabled:opacity-60"
          />
          <div className="mt-4">
            <Button
              type="submit"
              className="w-full sm:w-auto"
              disabled={pending || !input.trim()}
            >
              {pending ? "Sending…" : "Send"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
