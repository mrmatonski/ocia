"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useChat } from "@/components/chat/ChatProvider";
import { CloseIcon, SendIcon, StarOfTheSeaIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const suggestions = [
  "What is OCIA?",
  "When is the next class?",
  "What do Catholics believe about the Eucharist?",
  "I'm just curious — where do I start?",
];

export function ChatWidget() {
  const { open, seed, openChat, closeChat, clearSeed } = useChat();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeChat();
    };
    window.addEventListener("keydown", onKey);
    const id = window.setTimeout(() => inputRef.current?.focus(), 120);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.clearTimeout(id);
    };
  }, [open, closeChat]);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, pending, open]);

  useEffect(() => {
    if (!open || !seed) return;
    const prompt = seed;
    clearSeed();
    void send(prompt);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- send on each seeded open
  }, [open, seed]);

  async function send(text: string) {
    const question = text.trim();
    if (!question || pending) return;

    const nextMessages: Message[] = [...messages, { role: "user", content: question }];
    setMessages(nextMessages);
    setInput("");
    setPending(true);
    setError(null);

    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
        signal: controller.signal,
      });

      if (!response.ok || !response.body) {
        throw new Error("The companion could not answer just now.");
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
    } catch (caught) {
      if ((caught as Error).name === "AbortError") return;
      setError("Something went quiet. Please try again.");
    } finally {
      setPending(false);
    }
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    void send(input);
  }

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[90] flex justify-end p-4 md:p-6">
      <AnimatePresence mode="wait">
        {open ? (
          <motion.div
            key="panel"
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="chat-title"
            className="pointer-events-auto flex h-[min(38rem,calc(100svh-6.5rem))] w-full max-w-[26rem] flex-col overflow-hidden border border-gold/30 bg-navy-deep/96 shadow-[0_28px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <header className="flex items-start justify-between gap-4 border-b border-gold/15 px-5 py-4">
              <div>
                <p id="chat-title" className="font-display text-[0.68rem] tracking-[0.28em] text-gold">
                  Ask
                </p>
                <p className="mt-1 font-serif text-xl text-ivory italic">A companion for your questions</p>
              </div>
              <button
                ref={closeRef}
                type="button"
                onClick={closeChat}
                className="mt-1 flex h-8 w-8 items-center justify-center text-stone-light transition-colors hover:text-ivory"
                aria-label="Close question panel"
              >
                <CloseIcon />
              </button>
            </header>

            <div ref={listRef} className="flex-1 space-y-4 overflow-y-auto px-5 py-5" aria-live="polite">
              {messages.length === 0 ? (
                <div>
                  <p className="font-serif text-lg leading-7 text-ivory/90">
                    Ask anything — about OCIA, the Catholic faith, or whatever you are wondering.
                  </p>
                  <ul className="mt-5 flex flex-col gap-2">
                    {suggestions.map((item) => (
                      <li key={item}>
                        <button
                          type="button"
                          onClick={() => void send(item)}
                          className="w-full border border-gold/20 px-3 py-2.5 text-left text-sm text-stone-light transition-colors hover:border-gold/45 hover:text-ivory"
                        >
                          {item}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                messages.map((message, index) => (
                  <div
                    key={`${message.role}-${index}`}
                    className={cn(
                      "max-w-[92%] text-sm leading-7",
                      message.role === "user"
                        ? "ml-auto border border-gold/25 bg-gold/10 px-3.5 py-2.5 text-ivory"
                        : "text-stone-light",
                    )}
                  >
                    {message.role === "assistant" ? (
                      <p className={cn("whitespace-pre-wrap", pending && index === messages.length - 1 && "chat-cursor")}>
                        {message.content}
                      </p>
                    ) : (
                      <p>{message.content}</p>
                    )}
                  </div>
                ))
              )}
              {error ? <p className="text-sm text-gold">{error}</p> : null}
            </div>

            <form onSubmit={onSubmit} className="border-t border-gold/15 p-3">
              <label htmlFor="chat-input" className="sr-only">
                Ask a question
              </label>
              <div className="flex items-end gap-2">
                <textarea
                  id="chat-input"
                  ref={inputRef}
                  rows={2}
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" && !event.shiftKey) {
                      event.preventDefault();
                      void send(input);
                    }
                  }}
                  placeholder="Ask anything…"
                  className="max-h-28 min-h-[3.25rem] flex-1 resize-none bg-transparent px-3 py-2 text-sm text-ivory outline-none placeholder:text-stone"
                />
                <button
                  type="submit"
                  disabled={pending || !input.trim()}
                  className="mb-1 flex h-10 w-10 items-center justify-center border border-gold/40 text-gold transition-colors hover:bg-gold hover:text-ink disabled:opacity-40"
                  aria-label="Send question"
                >
                  <SendIcon />
                </button>
              </div>
            </form>
          </motion.div>
        ) : (
          <motion.button
            key="launcher"
            type="button"
            onClick={() => openChat()}
            className="pointer-events-auto flex items-center gap-3 border border-gold/40 bg-ink/90 px-4 py-3 text-ivory shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-md transition-colors hover:border-gold"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            aria-expanded={open}
            aria-haspopup="dialog"
          >
            <StarOfTheSeaIcon className="h-5 w-5 text-gold" />
            <span className="font-display text-[0.68rem] tracking-[0.22em]">Ask</span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
