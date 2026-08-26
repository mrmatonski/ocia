import { PersonIcon } from "@/components/icons";
import type { Instructor } from "@/lib/education";

export function InstructorCard({ instructor }: { instructor: Instructor }) {
  return (
    <article className="border border-gold/15 bg-navy-lift/20 p-7 md:p-8">
      <p className="eyebrow">Instructor</p>
      <div className="mt-6 flex items-start gap-4">
        <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center border border-gold/30 text-gold">
          <PersonIcon />
        </span>
        <div>
          <h3 className="font-serif text-2xl text-ivory italic">{instructor.name}</h3>
          <p className="mt-1 text-[0.65rem] tracking-[0.18em] text-gold uppercase">
            {instructor.title}
          </p>
        </div>
      </div>
      <p className="mt-6 text-sm leading-7 text-stone-light">{instructor.note}</p>
    </article>
  );
}
