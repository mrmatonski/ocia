import Link from "next/link";
import { ArrowIcon } from "@/components/icons";
import { ProgramGlyph } from "@/components/education/ProgramGlyph";
import type { HubCardItem } from "@/lib/education-hub";

export function HubCard({ item, index }: { item: HubCardItem; index: number }) {
  return (
    <article className="card-hover flex h-full flex-col border border-gold/15 bg-navy-lift/20 p-7 md:p-8">
      <div className="flex items-center justify-between gap-4">
        <span className="font-display text-xs tracking-[0.26em] text-gold">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="text-gold/80" aria-hidden="true">
          <ProgramGlyph icon={item.icon} />
        </span>
      </div>
      <h3 className="mt-7 font-serif text-[1.85rem] leading-tight text-ivory italic">
        {item.title}
      </h3>
      <p className="mt-4 flex-1 text-sm leading-7 text-stone-light">{item.description}</p>
      <Link
        href={item.href}
        className="mt-8 inline-flex items-center gap-2 text-[0.68rem] tracking-[0.2em] text-gold uppercase transition-colors hover:text-gold-bright"
      >
        {item.cta}
        <ArrowIcon />
      </Link>
    </article>
  );
}

export function HubGrid({ items }: { items: HubCardItem[] }) {
  return (
    <ul className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {items.map((item, index) => (
        <li key={item.href} className="min-w-0">
          <HubCard item={item} index={index} />
        </li>
      ))}
    </ul>
  );
}
