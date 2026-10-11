"use client";

import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CloseIcon } from "@/components/icons";
import type { LessonPage } from "@/lib/lesson-materials";
import { cn } from "@/lib/utils";

type Props = {
  title: string;
  pages: readonly LessonPage[];
  onClose: () => void;
};

function Chevron({
  direction,
  className,
}: {
  direction: "prev" | "next";
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={cn("h-5 w-5", className)}
    >
      {direction === "prev" ? (
        <path
          d="M15 6 9 12l6 6"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ) : (
        <path
          d="m9 6 6 6-6 6"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  );
}

export function LessonViewer({ title, pages, onClose }: Props) {
  const labelId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const [index, setIndex] = useState(0);
  const [enlarged, setEnlarged] = useState(false);
  const page = pages[index];
  const total = pages.length;

  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const id = window.setTimeout(() => closeRef.current?.focus(), 80);
    return () => {
      document.body.style.overflow = previous;
      window.clearTimeout(id);
    };
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        if (enlarged) {
          setEnlarged(false);
          return;
        }
        onClose();
        return;
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setIndex((current) => Math.max(0, current - 1));
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        setIndex((current) => Math.min(total - 1, current + 1));
      }
      if (event.key !== "Tab" || !panelRef.current) return;
      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        "button:not([disabled]), [href]",
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [enlarged, onClose, total]);

  if (!page) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[70] flex items-center justify-center p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby={labelId}
    >
      <button
        type="button"
        className="absolute inset-0 bg-ink/88 backdrop-blur-sm"
        aria-label="Close lesson materials"
        onClick={onClose}
      />
      <motion.div
        ref={panelRef}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 12 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="relative flex max-h-[min(96vh,58rem)] w-full max-w-5xl flex-col overflow-hidden border border-gold/20 bg-navy-deep shadow-[0_28px_80px_rgba(0,0,0,0.45)]"
      >
        <header className="flex items-center justify-between gap-4 border-b border-gold/12 px-4 py-3 sm:px-6">
          <div className="min-w-0">
            <p className="eyebrow text-[0.58rem]">Lesson materials</p>
            <h2
              id={labelId}
              className="mt-1 truncate font-serif text-lg text-ivory italic sm:text-xl"
            >
              {title}
            </h2>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="inline-flex min-h-11 min-w-11 items-center justify-center text-gold transition-colors hover:text-gold-bright"
            aria-label="Close lesson materials"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
        </header>

        <div className="relative flex min-h-0 flex-1 items-center justify-center bg-ink-soft/80 px-3 py-5 sm:px-8 sm:py-8">
          <button
            type="button"
            onClick={() => setEnlarged(true)}
            className="max-h-full max-w-full cursor-zoom-in focus-visible:outline-offset-4"
            aria-label={`Enlarge page ${index + 1} of ${total}`}
          >
            {/* Native img preserves page proportions without cropping. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={page.src}
              alt={page.alt}
              className="mx-auto max-h-[min(68vh,46rem)] w-auto max-w-full object-contain shadow-[0_16px_40px_rgba(0,0,0,0.35)]"
            />
          </button>
        </div>

        <footer className="flex items-center justify-between gap-3 border-t border-gold/12 px-4 py-3 sm:px-6">
          <button
            type="button"
            onClick={() => setIndex((current) => Math.max(0, current - 1))}
            disabled={index === 0}
            className="inline-flex min-h-11 items-center gap-2 px-2 text-[0.68rem] tracking-[0.16em] text-gold uppercase transition-colors hover:text-gold-bright disabled:cursor-not-allowed disabled:opacity-35"
            aria-label="Previous page"
          >
            <Chevron direction="prev" />
            Previous
          </button>
          <p className="font-serif text-sm tracking-wide text-stone-light italic">
            Page {index + 1} of {total}
          </p>
          <button
            type="button"
            onClick={() => setIndex((current) => Math.min(total - 1, current + 1))}
            disabled={index === total - 1}
            className="inline-flex min-h-11 items-center gap-2 px-2 text-[0.68rem] tracking-[0.16em] text-gold uppercase transition-colors hover:text-gold-bright disabled:cursor-not-allowed disabled:opacity-35"
            aria-label="Next page"
          >
            Next
            <Chevron direction="next" />
          </button>
        </footer>
      </motion.div>

      <AnimatePresence>
        {enlarged ? (
          <motion.div
            key="enlarged"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-10 flex items-center justify-center bg-ink/94 p-3 sm:p-6"
          >
            <button
              type="button"
              className="absolute inset-0"
              aria-label="Close enlarged page"
              onClick={() => setEnlarged(false)}
            />
            <button
              type="button"
              onClick={() => setEnlarged(false)}
              className="absolute top-4 right-4 z-20 inline-flex min-h-11 min-w-11 items-center justify-center text-gold hover:text-gold-bright"
              aria-label="Close enlarged page"
            >
              <CloseIcon className="h-5 w-5" />
            </button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={page.src}
              alt={page.alt}
              className="relative z-10 max-h-[94vh] w-auto max-w-full object-contain"
            />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.div>
  );
}
