"use client";

import { useState } from "react";
import { faqItems, type FaqItem } from "@/lib/faq";
import { ChevronIcon } from "@/components/icons";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";

export function FAQAccordion({ items = faqItems }: { items?: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-gold/15 border-y border-gold/20">
      {items.map((item, index) => {
        const isOpen = open === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;

        return (
          <Reveal key={item.question} delay={index * 0.04}>
            <div>
              <h3>
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpen(isOpen ? null : index)}
                  className="flex w-full items-start justify-between gap-6 py-6 text-left"
                >
                  <span className="flex min-w-0 items-start gap-4 md:gap-6">
                    <span className="mt-2 font-display text-[0.62rem] tracking-[0.18em] text-gold">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-serif text-2xl leading-snug text-ivory italic md:text-[1.85rem]">
                      {item.question}
                    </span>
                  </span>
                  <ChevronIcon
                    className={cn(
                      "mt-2 h-5 w-5 shrink-0 text-gold transition-transform duration-300",
                      isOpen && "rotate-180",
                    )}
                  />
                </button>
              </h3>
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className="accordion-panel"
                data-open={isOpen}
              >
                <div className="min-h-0 overflow-hidden">
                  <p className="max-w-3xl pb-6 pl-[2.75rem] text-sm leading-7 text-stone-light md:pl-[3.5rem] md:text-base">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
