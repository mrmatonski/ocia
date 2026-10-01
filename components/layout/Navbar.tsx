"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { isNavHrefActive, isNavItemActive, navItems, type NavItem } from "@/lib/navigation";
import { getNextClassPath } from "@/lib/education-announcements";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { CathedralVault } from "@/components/ui/Ornament";
import { StarOfTheSeaIcon } from "@/components/icons";

function Caret({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 12 8"
      aria-hidden="true"
      className={cn(
        "h-2 w-2 shrink-0 text-gold/80 transition-transform duration-300",
        open && "rotate-180",
      )}
    >
      <path
        d="M1 1.5 L6 6.5 L11 1.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function withNextClass(item: NavItem): NavItem {
  if (!item.children) return item;
  const nextClass = getNextClassPath();
  return {
    ...item,
    children: item.children.map((child) =>
      child.href === "/next-class" ? { ...child, href: nextClass } : child,
    ),
  };
}

function DesktopItem({
  item,
  pathname,
  open,
  onOpen,
  onClose,
}: {
  item: NavItem;
  pathname: string;
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const active = isNavItemActive(item, pathname);
  const hasChildren = Boolean(item.children?.length);

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        buttonRef.current?.focus();
      }
    };
    const onPointer = (event: MouseEvent) => {
      if (!wrapRef.current?.contains(event.target as Node)) onClose();
    };

    window.addEventListener("keydown", onKey);
    window.addEventListener("mousedown", onPointer);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mousedown", onPointer);
    };
  }, [open, onClose]);

  if (!hasChildren) {
    return (
      <Link
        href={item.href}
        data-active={active}
        aria-current={active ? "page" : undefined}
        className={cn(
          "nav-link shrink-0 text-[0.62rem] tracking-[0.16em] whitespace-nowrap uppercase transition-colors xl:text-[0.66rem] xl:tracking-[0.18em]",
          active ? "text-gold" : "text-ivory/75 hover:text-ivory",
        )}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div
      ref={wrapRef}
      className="relative"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
    >
      <button
        ref={buttonRef}
        type="button"
        data-active={active}
        aria-expanded={open}
        aria-haspopup="true"
        className={cn(
          "nav-link inline-flex min-h-11 shrink-0 items-center gap-1.5 text-[0.62rem] tracking-[0.16em] whitespace-nowrap uppercase transition-colors xl:text-[0.66rem] xl:tracking-[0.18em]",
          active ? "text-gold" : "text-ivory/75 hover:text-ivory",
        )}
        onClick={() => (open ? onClose() : onOpen())}
      >
        {item.label}
        <Caret open={open} />
      </button>
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-full left-1/2 z-[80] min-w-[15.5rem] -translate-x-1/2 pt-3"
          >
            <ul
              role="menu"
              className="border border-gold/18 bg-navy-deep/95 py-2 shadow-[0_24px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl"
            >
              {item.children?.map((child) => {
                const childActive = isNavHrefActive(child.href, pathname);
                return (
                  <li key={`${child.href}-${child.label}`} role="none">
                    <Link
                      href={child.href}
                      role="menuitem"
                      aria-current={childActive ? "page" : undefined}
                      className={cn(
                        "block min-h-11 px-5 py-3 text-[0.62rem] tracking-[0.16em] uppercase transition-colors",
                        childActive
                          ? "text-gold"
                          : "text-ivory/80 hover:text-gold",
                      )}
                    >
                      {child.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [desktopMenu, setDesktopMenu] = useState<string | null>(null);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const [seenPath, setSeenPath] = useState(pathname);
  const menuId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  if (pathname !== seenPath) {
    setSeenPath(pathname);
    setOpen(false);
    setDesktopMenu(null);
    setMobileSection(null);
  }

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
    const firstLink = panelRef.current?.querySelector<HTMLElement>(
      "a[href], button:not([disabled])",
    );
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
            className="hidden items-center gap-3.5 xl:flex xl:gap-5 2xl:gap-6"
            aria-label="Primary"
          >
            {navItems.map((item) => (
              <DesktopItem
                key={item.label}
                item={withNextClass(item)}
                pathname={pathname}
                open={desktopMenu === item.label}
                onOpen={() => setDesktopMenu(item.label)}
                onClose={() =>
                  setDesktopMenu((current) =>
                    current === item.label ? null : current,
                  )
                }
              />
            ))}
          </nav>

          <div className="hidden xl:block">
            <Button href="/contact" className="px-5 py-3">
              Begin Your Journey
            </Button>
          </div>

          <button
            ref={buttonRef}
            type="button"
            className="relative z-[80] flex h-11 w-11 items-center justify-center xl:hidden"
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
            className="fixed inset-0 z-[60] xl:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-navy-deep/97" />
            <CathedralVault className="absolute inset-x-[-12%] top-8 h-[70%] w-[124%] opacity-50" />
            <nav className="relative flex h-full flex-col justify-center overflow-y-auto px-8 py-24">
              {navItems.map((item, index) => {
                const navItem = withNextClass(item);
                const active = isNavItemActive(navItem, pathname);
                const expanded = mobileSection === item.label;
                const hasChildren = Boolean(navItem.children?.length);

                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.07 * index, duration: 0.5 }}
                  >
                    {hasChildren ? (
                      <div className="border-b border-gold/12">
                        <button
                          type="button"
                          aria-expanded={expanded}
                          aria-haspopup="true"
                          onClick={() =>
                            setMobileSection((current) =>
                              current === item.label ? null : item.label,
                            )
                          }
                          className={cn(
                            "flex min-h-14 w-full items-center gap-5 py-4 text-left",
                            active ? "text-gold" : "text-ivory",
                          )}
                        >
                          <span className="font-display text-[0.62rem] tracking-[0.22em] text-gold/80">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span className="flex-1 font-serif text-[2.15rem] leading-none italic md:text-5xl">
                            {item.label}
                          </span>
                          <Caret open={expanded} />
                        </button>
                        <div className="accordion-panel" data-open={expanded}>
                          <div className="overflow-hidden">
                            <ul
                              className="border-t border-gold/10 pb-4 pl-[3.35rem]"
                              aria-hidden={!expanded}
                              inert={!expanded}
                            >
                              {navItem.children?.map((child) => {
                                const childActive = isNavHrefActive(child.href, pathname);
                                return (
                                  <li key={`${child.href}-${child.label}`}>
                                    <Link
                                      href={child.href}
                                      aria-current={childActive ? "page" : undefined}
                                      className={cn(
                                        "flex min-h-11 items-center py-2 text-[0.78rem] tracking-[0.14em] uppercase transition-colors",
                                        childActive
                                          ? "text-gold"
                                          : "text-ivory/80 hover:text-gold",
                                      )}
                                    >
                                      {child.label}
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "flex items-baseline gap-5 border-b border-gold/12 py-4",
                          active ? "text-gold" : "text-ivory",
                        )}
                      >
                        <span className="font-display text-[0.62rem] tracking-[0.22em] text-gold/80">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="font-serif text-[2.15rem] leading-none italic md:text-5xl">
                          {item.label}
                        </span>
                      </Link>
                    )}
                  </motion.div>
                );
              })}
              <motion.div
                className="mt-10"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.52 }}
              >
                <Button href="/contact">
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
