import Link from "next/link";
import { ArrowIcon } from "@/components/icons";
import { ProgramGlyph } from "@/components/education/ProgramGlyph";
import type { EducationProgram } from "@/lib/education";

type Props = {
  program: EducationProgram;
  index: number;
};

export function ProgramCard({ program, index }: Props) {
  return (
    <article className="card-hover flex h-full flex-col border border-gold/15 bg-navy-lift/20 p-7 md:p-8">
      <div className="flex items-center justify-between gap-4">
        <span className="font-display text-xs tracking-[0.26em] text-gold">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="text-gold/80" aria-hidden="true">
          <ProgramGlyph icon={program.icon} />
        </span>
      </div>
      <h3 className="mt-7 font-serif text-[1.85rem] leading-tight text-ivory italic">
        {program.cardTitle}
      </h3>
      <p className="mt-4 flex-1 text-sm leading-7 text-stone-light">
        {program.description}
      </p>
      <p className="mt-6 text-[0.62rem] tracking-[0.18em] text-gold uppercase">
        Audience
      </p>
      <p className="mt-2 text-sm leading-6 text-ivory/80">{program.audience}</p>
      <Link
        href={`/religious-education/${program.slug}`}
        className="mt-8 inline-flex items-center gap-2 text-[0.68rem] tracking-[0.2em] text-gold uppercase transition-colors hover:text-gold-bright"
      >
        {program.cardCta}
        <ArrowIcon />
      </Link>
    </article>
  );
}
