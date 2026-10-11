"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { CloseIcon } from "@/components/icons";
import { Button } from "@/components/ui/Button";
import { Ornament } from "@/components/ui/Ornament";
import { LessonViewer } from "@/components/lessons/LessonViewer";
import {
  canViewLessonPages,
  type LessonMaterial,
} from "@/lib/lesson-materials";

type Props = {
  lesson: LessonMaterial;
};

export function LessonAccess({ lesson }: Props) {
  const [open, setOpen] = useState(false);
  const labelId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const pagesReady = canViewLessonPages(lesson);
  const accessUrl = lesson.accessUrl?.trim() || null;

  useEffect(() => {
    if (!open || pagesReady || accessUrl) return;
    const id = window.setTimeout(() => closeRef.current?.focus(), 80);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
      if (event.key !== "Tab" || !panelRef.current) return;
      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        "a[href], button:not([disabled])",
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
    return () => {
      window.clearTimeout(id);
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [accessUrl, open, pagesReady]);

  if (accessUrl) {
    return (
      <Button href={accessUrl} className="w-full sm:w-auto">
        Access Lesson Materials
      </Button>
    );
  }

  if (pagesReady && lesson.pages) {
    return (
      <>
        <Button onClick={() => setOpen(true)} className="w-full sm:w-auto">
          Access Lesson Materials
        </Button>
        <AnimatePresence>
          {open ? (
            <LessonViewer
              title={lesson.title}
              pages={lesson.pages}
              onClose={() => setOpen(false)}
            />
          ) : null}
        </AnimatePresence>
      </>
    );
  }

  return (
    <>
      <Button onClick={() => setOpen(true)} className="w-full sm:w-auto">
        Access Lesson Materials
      </Button>
      <AnimatePresence>
        {open ? (
          <motion.div
            key="lesson-access-notice"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby={labelId}
          >
            <button
              type="button"
              className="absolute inset-0 bg-ink/80 backdrop-blur-sm"
              aria-label="Close"
              onClick={() => setOpen(false)}
            />
            <motion.div
              ref={panelRef}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-lg border border-gold/20 bg-navy-deep px-7 py-8 shadow-[0_24px_60px_rgba(0,0,0,0.4)] sm:px-10 sm:py-10"
            >
              <button
                ref={closeRef}
                type="button"
                onClick={() => setOpen(false)}
                className="absolute top-3 right-3 inline-flex min-h-11 min-w-11 items-center justify-center text-gold hover:text-gold-bright"
                aria-label="Close"
              >
                <CloseIcon />
              </button>
              <p className="eyebrow">Lesson materials</p>
              <h2
                id={labelId}
                className="mt-4 font-serif text-3xl leading-tight text-ivory italic"
              >
                {lesson.title}
              </h2>
              <Ornament className="mt-5" align="start" />
              <p className="mt-5 text-sm leading-7 text-stone-light md:text-[0.95rem] md:leading-8">
                Lesson materials are provided through Liguori Publications.
                Please contact your OCIA instructor for access.
              </p>
              <p className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex min-h-11 items-center text-[0.68rem] tracking-[0.2em] text-gold uppercase transition-colors hover:text-gold-bright"
                >
                  Contact Religious Education
                </Link>
              </p>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
