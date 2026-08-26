"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type ChatContextValue = {
  open: boolean;
  seed: string | null;
  openChat: (prompt?: string) => void;
  closeChat: () => void;
  clearSeed: () => void;
};

const ChatContext = createContext<ChatContextValue | null>(null);

export function ChatProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [seed, setSeed] = useState<string | null>(null);

  const openChat = useCallback((prompt?: string) => {
    setSeed(prompt ?? null);
    setOpen(true);
  }, []);

  const closeChat = useCallback(() => {
    setOpen(false);
  }, []);

  const clearSeed = useCallback(() => setSeed(null), []);

  const value = useMemo(
    () => ({ open, seed, openChat, closeChat, clearSeed }),
    [open, seed, openChat, closeChat, clearSeed],
  );

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
}

export function useChat() {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChat must be used within ChatProvider");
  }
  return context;
}
