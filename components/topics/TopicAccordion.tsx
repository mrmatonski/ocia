"use client";

import { useState } from "react";
import { topicCategories, type TopicCategory } from "@/lib/topics";
import { ChevronIcon } from "@/components/icons";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";

const numerals = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"];

export function TopicAccordion({
  compact = false,
  tone = "dark",
}: {
  compact?: boolean;
  tone?: "dark" | "light";
}) {
  const categories = compact ? topicCategories.slice(0, 4) : topicCategories;
  const [openId, setOpenId] = useState<string | null>(categories[0]?.id ?? null);

  return (
    <div className={cn("border-y", tone === "light" ? "border-gold/25" : "border-gold/15")}>
      {categories.map((category, index) => (
        <Reveal key={category.id} delay={index * 0.04}>
          <TopicCard
            category={category}
            numeral={numerals[index] ?? String(index + 1)}
            open={openId === category.id}
            onToggle={() =>
              setOpenId((current) => (current === category.id ? null : category.id))
            }
            tone={tone}
            last={index === categories.length - 1}
          />
        </Reveal>
      ))}
    </div>
  );
}

function TopicCard({
  category,
  numeral,
  open,
  onToggle,
  tone,
  last,
}: {
  category: TopicCategory;
  numeral: string;
  open: boolean;
  onToggle: () => void;
  tone: "dark" | "light";
  last: boolean;
}) {
  const panelId = `${category.id}-panel`;
  const buttonId = `${category.id}-button`;
  const light = tone === "light";

  return (
    <article className={cn(!last && (light ? "border-b border-gold/25" : "border-b border-gold/15"))}>
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-start justify-between gap-6 py-6 text-left md:py-7"
        >
          <span className="flex min-w-0 items-start gap-5 md:gap-8">
            <span className="mt-2 font-display text-[0.62rem] tracking-[0.22em] text-gold">
              {numeral}
            </span>
            <span>
              <span
                className={cn(
                  "block font-serif text-[1.85rem] leading-tight italic md:text-4xl",
                  light ? "text-ink" : "text-ivory",
                )}
              >
                {category.label}
              </span>
              <span
                className={cn(
                  "mt-2 block max-w-xl text-sm leading-7",
                  light ? "text-ink/65" : "text-stone-light",
                )}
              >
                {category.description}
              </span>
            </span>
          </span>
          <ChevronIcon
            className={cn(
              "mt-3 h-5 w-5 shrink-0 text-gold transition-transform duration-300",
              open && "rotate-180",
            )}
          />
        </button>
      </h3>
      <div id={panelId} role="region" aria-labelledby={buttonId} className="accordion-panel" data-open={open}>
        <div className="min-h-0 overflow-hidden">
          <ul className="space-y-5 pb-8 pl-[3.35rem] md:pl-[4.25rem]">
            {category.items.map((item) => (
              <li key={item.title}>
                <p className={cn("font-serif text-xl", light ? "text-ink" : "text-ivory")}>
                  {item.title}
                </p>
                <p className={cn("mt-1.5 text-sm leading-7", light ? "text-ink/68" : "text-stone-light")}>
                  {item.summary}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
