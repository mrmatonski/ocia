"use client";

import { useEffect, useState } from "react";
import { prayerCategories, type Prayer, type PrayerCategory } from "@/lib/prayers";
import { ChevronIcon } from "@/components/icons";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";

export function PrayerGuide() {
  const [active, setActive] = useState(prayerCategories[0]?.id ?? "essential");
  const [openByCategory, setOpenByCategory] = useState<Record<string, string | null>>(() =>
    Object.fromEntries(
      prayerCategories.map((category) => [category.id, category.prayers[0]?.id ?? null]),
    ),
  );

  useEffect(() => {
    const observers = prayerCategories.map((category) => {
      const el = document.getElementById(category.id);
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(category.id);
        },
        { rootMargin: "-28% 0px -60% 0px", threshold: 0 },
      );
      observer.observe(el);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  function jumpTo(id: string) {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div>
      <div className="mb-12 border-b border-gold/12 pb-3">
        <div
          className="flex gap-x-5 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          role="navigation"
          aria-label="Jump to a prayer group"
        >
          {prayerCategories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => jumpTo(category.id)}
              aria-current={active === category.id ? "true" : undefined}
              className={cn(
                "shrink-0 border-b pb-1 text-[0.68rem] tracking-[0.22em] whitespace-nowrap uppercase transition-colors",
                active === category.id
                  ? "border-gold text-gold"
                  : "border-transparent text-stone-light hover:text-ivory",
              )}
            >
              {category.navLabel}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-16 md:space-y-20">
        {prayerCategories.map((category, index) => (
          <PrayerSection
            key={category.id}
            category={category}
            openId={openByCategory[category.id] ?? null}
            onToggle={(prayerId) =>
              setOpenByCategory((current) => ({
                ...current,
                [category.id]: current[category.id] === prayerId ? null : prayerId,
              }))
            }
            delay={index * 0.04}
          />
        ))}
      </div>
    </div>
  );
}

function PrayerSection({
  category,
  openId,
  onToggle,
  delay,
}: {
  category: PrayerCategory;
  openId: string | null;
  onToggle: (id: string) => void;
  delay: number;
}) {
  return (
    <section id={category.id} className="scroll-mt-28 md:scroll-mt-32">
      <Reveal delay={delay}>
        <p className="eyebrow">{category.navLabel}</p>
        <h2 className="mt-4 max-w-2xl font-serif text-3xl leading-tight text-ivory italic md:text-4xl">
          {category.label}
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-stone-light md:text-base">
          {category.description}
        </p>
      </Reveal>
      <div className="mt-8 divide-y divide-gold/15 border-y border-gold/20">
        {category.prayers.map((prayer, index) => (
          <PrayerCard
            key={prayer.id}
            prayer={prayer}
            index={index}
            open={openId === prayer.id}
            onToggle={() => onToggle(prayer.id)}
          />
        ))}
      </div>
    </section>
  );
}

function PrayerCard({
  prayer,
  index,
  open,
  onToggle,
}: {
  prayer: Prayer;
  index: number;
  open: boolean;
  onToggle: () => void;
}) {
  const panelId = `${prayer.id}-panel`;
  const buttonId = `${prayer.id}-button`;

  return (
    <Reveal delay={index * 0.03}>
      <article>
        <h3>
          <button
            id={buttonId}
            type="button"
            aria-expanded={open}
            aria-controls={panelId}
            onClick={onToggle}
            className="flex w-full items-start justify-between gap-6 py-6 text-left md:py-7"
          >
            <span className="flex min-w-0 items-start gap-4 md:gap-6">
              <span className="mt-2 font-display text-[0.62rem] tracking-[0.18em] text-gold">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>
                <span className="block font-serif text-2xl leading-snug text-ivory italic md:text-[1.85rem]">
                  {prayer.title}
                </span>
                {prayer.latin ? (
                  <span className="mt-1.5 block text-[0.68rem] tracking-[0.16em] text-gold/80 uppercase">
                    {prayer.latin}
                  </span>
                ) : null}
              </span>
            </span>
            <ChevronIcon
              className={cn(
                "mt-2 h-5 w-5 shrink-0 text-gold transition-transform duration-300",
                open && "rotate-180",
              )}
            />
          </button>
        </h3>
        <div
          id={panelId}
          role="region"
          aria-labelledby={buttonId}
          className="accordion-panel"
          data-open={open}
        >
          <div className="min-h-0 overflow-hidden">
            <div className="max-w-3xl pb-8 pl-[2.75rem] md:pl-[3.5rem]">
              {prayer.note ? (
                <p className="mb-5 text-sm leading-7 text-stone-light italic">{prayer.note}</p>
              ) : null}
              <p className="font-serif text-[1.15rem] leading-[1.9] text-ivory/92 md:text-xl md:leading-[2]">
                {prayer.lines.map((line, lineIndex) => (
                  <span key={`${prayer.id}-${lineIndex}`} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
