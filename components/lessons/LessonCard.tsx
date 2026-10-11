import { StarOfTheSeaIcon } from "@/components/icons";
import { LessonAccess } from "@/components/lessons/LessonAccess";
import { Ornament } from "@/components/ui/Ornament";
import type { LessonMaterial } from "@/lib/lesson-materials";

export function LessonCard({ lesson }: { lesson: LessonMaterial }) {
  return (
    <article className="card-hover overflow-hidden border border-gold/15 bg-navy-lift/20">
      <div className="p-6 sm:p-8 md:p-10 lg:p-12">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(17rem,0.8fr)] lg:gap-14 xl:gap-16">
          <div className="min-w-0">
            <p className="eyebrow">Lesson {lesson.number}</p>
            <h2 className="mt-4 font-serif text-[2.15rem] leading-[1.08] font-medium tracking-tight text-ivory italic sm:text-4xl md:text-[2.75rem] lg:text-5xl">
              {lesson.title}
            </h2>
            <p className="mt-3 font-serif text-lg leading-snug text-ivory/68 italic">
              {lesson.publisher}
            </p>
            <Ornament className="mt-6" align="start" />
            <p className="mt-6 max-w-2xl text-sm leading-7 text-stone-light md:text-[0.98rem] md:leading-8">
              {lesson.description}
            </p>
          </div>

          <div className="min-w-0 border-gold/14 lg:border-l lg:pl-10">
            <p className="eyebrow text-[0.58rem]">In this lesson</p>
            <ul className="mt-5 space-y-3.5">
              {lesson.subjects.map((subject) => (
                <li key={subject} className="flex items-start gap-3">
                  <StarOfTheSeaIcon className="mt-1 h-3 w-3 shrink-0 text-gold/70" />
                  <span className="font-serif text-[1.05rem] leading-snug text-ivory/92 italic md:text-[1.1rem]">
                    {subject}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-gold/12 pt-8 md:mt-12">
          <LessonAccess lesson={lesson} />
        </div>
      </div>
    </article>
  );
}
