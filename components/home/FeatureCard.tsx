import { BookIcon, ChurchIcon, FlameIcon, QuestionIcon } from "@/components/icons";

type IconName = "flame" | "book" | "question" | "church";

type Props = {
  number: string;
  title: string;
  description: string;
  icon: IconName;
};

function FeatureGlyph({ icon }: { icon: IconName }) {
  const className = "h-5 w-5";
  if (icon === "flame") return <FlameIcon className={className} />;
  if (icon === "book") return <BookIcon className={className} />;
  if (icon === "question") return <QuestionIcon className={className} />;
  return <ChurchIcon className={className} />;
}

export function FeatureCard({ number, title, description, icon }: Props) {
  return (
    <article className="group relative h-full px-1 py-8 md:px-7 md:py-2">
      <div className="flex items-center justify-between">
        <span className="font-display text-xs tracking-[0.26em] text-gold">
          {number}
        </span>
        <span className="text-gold/80 transition-transform duration-500 group-hover:-translate-y-0.5">
          <FeatureGlyph icon={icon} />
        </span>
      </div>
      <h3 className="mt-8 font-serif text-[1.85rem] leading-tight text-ivory italic">
        {title}
      </h3>
      <p className="mt-4 text-sm leading-7 text-stone-light">{description}</p>
    </article>
  );
}
