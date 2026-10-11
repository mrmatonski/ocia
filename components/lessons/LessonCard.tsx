import { StarOfTheSeaIcon } from "@/components/icons";
import { LessonAccess } from "@/components/lessons/LessonAccess";
import { Ornament } from "@/components/ui/Ornament";
import type { LessonMaterial } from "@/lib/lesson-materials";

export function LessonCard({ lesson }: { lesson: LessonMaterial }) {
  const numberLabel = String(lesson.number).padStart(2, "0");

  return (
    <article className="card-hover relative overflow-hidden border border-gold/18 bg-navy-lift/25">
      <div
        className="pointer-events-none absolute -top-10 -right-6 font-display text-[7.5rem] leading-none text-gold/[0.06] select-none md:text-[9.5rem]"
        aria-hidden="true"
      >
        {numberLabel}
      </div>
      <div className="relative px-6 py-9 sm:px-10 sm:py-12 md:px-14 md:py-14">
        <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.62rem] tracking-[0.2em] text-gold uppercase">
          <span>Lesson {lesson.number}</span>
          <span className="text-gold/35" aria-hidden="true">
            ·
          </span>
          <span className="text-stone tracking-[0.14em] normal-case">
            {lesson.publisher}
          </span>
        </p>
        <h2 className="mt-5 max-w-xl font-serif text-[2.35rem] leading-[1.08] font-medium text-ivory italic md:text-5xl">
          {lesson.title}
        </h2>
        <Ornament className="mt-7" align="start" />
        <p className="mt-7 max-w-2xl text-sm leading-7 text-stone-light md:text-[0.98rem] md:leading-8">
          {lesson.description}
        </p>

        <div className="mt-10">
          <p className="eyebrow text-[0.58rem]">In this lesson</p>
          <ul className="mt-5 grid gap-px bg-gold/12 sm:grid-cols-2">
            {lesson.subjects.map((subject) => (
              <li
                key={subject}
                className="flex items-start gap-3 bg-navy-deep/70 px-4 py-3.5 last:sm:col-span-2"
              >
                <StarOfTheSeaIcon className="mt-0.5 h-3 w-3 shrink-0 text-gold/70" />
                <span className="font-serif text-[1.05rem] leading-snug text-ivory/92 italic">
                  {subject}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10">
          <LessonAccess lesson={lesson} />
        </div>
      </div>
    </article>
  );
}
