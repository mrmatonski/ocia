import type { ProgramTopic } from "@/lib/education";

export function TopicList({
  topics,
  note,
}: {
  topics: ProgramTopic[];
  note?: string;
}) {
  return (
    <div>
      {note ? (
        <p className="mb-10 max-w-2xl text-sm leading-7 text-stone-light">{note}</p>
      ) : null}
      <ol className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
        {topics.map((topic, index) => (
          <li key={topic.title}>
            <p className="font-display text-xs tracking-[0.28em] text-gold">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-4 font-serif text-2xl text-ivory italic md:text-[1.85rem]">
              {topic.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-stone-light">{topic.summary}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
