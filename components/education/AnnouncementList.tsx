"use client";

import { useState } from "react";
import { ChevronIcon } from "@/components/icons";
import { educationAnnouncements, type Announcement } from "@/lib/education-announcements";
import { cn } from "@/lib/utils";

export function AnnouncementList({
  items = educationAnnouncements,
}: {
  items?: Announcement[];
}) {
  const [open, setOpen] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className="divide-y divide-gold/15 border-y border-gold/20">
      {items.map((item, index) => {
        const isOpen = open === item.id;
        const panelId = `announcement-panel-${item.id}`;
        const buttonId = `announcement-button-${item.id}`;

        return (
          <article key={item.id}>
            <h2>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : item.id)}
                className="flex w-full items-start justify-between gap-6 py-6 text-left"
              >
                <span className="min-w-0">
                  <span className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <span className="font-display text-[0.62rem] tracking-[0.18em] text-gold">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {item.category ? (
                      <span className="text-[0.62rem] tracking-[0.16em] text-stone-light uppercase">
                        {item.category}
                      </span>
                    ) : null}
                    <span className="text-[0.62rem] tracking-[0.12em] text-stone uppercase">
                      {item.date}
                    </span>
                  </span>
                  <span className="mt-3 block font-serif text-2xl leading-snug text-ivory italic md:text-[1.85rem]">
                    {item.title}
                  </span>
                  <span className="mt-2 block text-sm leading-7 text-stone-light">
                    {item.summary}
                  </span>
                </span>
                <ChevronIcon
                  className={cn(
                    "mt-2 h-5 w-5 shrink-0 text-gold transition-transform duration-300",
                    isOpen && "rotate-180",
                  )}
                />
              </button>
            </h2>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className="accordion-panel"
              data-open={isOpen}
            >
              <div className="min-h-0 overflow-hidden">
                <div className="max-w-3xl pb-6 text-sm leading-7 text-stone-light md:text-base">
                  <p>{item.body}</p>
                  {item.href ? (
                    <p className="mt-4">
                      <a
                        href={item.href}
                        className="text-[0.68rem] tracking-[0.18em] text-gold uppercase underline-offset-4 hover:underline"
                      >
                        Related page
                      </a>
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
