"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { navItems } from "@/lib/navigation";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { CathedralVault } from "@/components/ui/Ornament";
import { StarOfTheSeaIcon } from "@/components/icons";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }

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
    const firstLink = panelRef.current?.querySelector<HTMLElement>("a[href]");
    firstLink?.focus();
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[70] transition-all duration-500",
          scrolled || open ? "glass-nav" : "bg-transparent",
        )}
      >
        <div className="page-wrap-wide flex h-[4.75rem] items-center justify-between gap-6 md:h-20">
          <Link
            href="/"
            className="group flex items-center gap-3 text-ivory"
            aria-label={`${site.name} home`}
          >
            <StarOfTheSeaIcon className="h-7 w-7 text-gold transition-transform duration-700 group-hover:rotate-[20deg]" />
            <span className="flex flex-col leading-none">
              <span className="font-display text-[0.72rem] tracking-[0.32em]">
                {site.name}
              </span>
              <span className="mt-1 hidden text-[0.58rem] tracking-[0.14em] text-stone-light uppercase sm:block">
                Astoria
              </span>
            </span>
          </Link>

          <nav
            className="hidden items-center gap-7 lg:flex"
            aria-label="Primary"
          >
            {navItems.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  data-active={active}
                  className={cn(
                    "nav-link text-[0.66rem] tracking-[0.2em] uppercase transition-colors",
                    active ? "text-gold" : "text-ivory/75 hover:text-ivory",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Button href="/contact" className="px-5 py-3">
              Begin Your Journey
            </Button>
          </div>

          <button
            ref={buttonRef}
            type="button"
            className="relative z-[80] flex h-11 w-11 items-center justify-center lg:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span className="relative block h-3.5 w-6">
              <span
                className={cn(
                  "absolute left-0 h-px w-6 bg-ivory transition-all duration-300",
                  open ? "top-1.5 rotate-45" : "top-0",
                )}
              />
              <span
                className={cn(
                  "absolute top-1.5 left-0 h-px w-6 bg-ivory transition-all duration-300",
                  open ? "scale-x-0 opacity-0" : "opacity-100",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 h-px w-6 bg-ivory transition-all duration-300",
                  open ? "top-1.5 -rotate-45" : "top-3",
                )}
              />
            </span>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            id={menuId}
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            className="fixed inset-0 z-[60] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-navy-deep/97" />
            <CathedralVault className="absolute inset-x-[-12%] top-8 h-[70%] w-[124%] opacity-50" />
            <nav className="relative flex h-full flex-col justify-center px-8 pt-16">
              {navItems.map((item, index) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.07 * index, duration: 0.5 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "flex items-baseline gap-5 border-b border-gold/12 py-4",
                        active ? "text-gold" : "text-ivory",
                      )}
                    >
                      <span className="font-display text-[0.62rem] tracking-[0.22em] text-gold/80">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="font-serif text-[2.15rem] leading-none italic md:text-5xl">
                        {item.full}
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                className="mt-10"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.52 }}
              >
                <Button href="/contact" onClick={() => setOpen(false)}>
                  Begin Your Journey
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
