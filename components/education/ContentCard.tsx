import Link from "next/link";
import { ArrowIcon } from "@/components/icons";
import { ImagePlaceholder, ParishFillImage } from "@/components/ui/ImagePlaceholder";
import {
  contentActionLabel,
  contentPath,
  isVisualContent,
  type EducationContent,
} from "@/lib/education-content";
import { formatFullDate } from "@/lib/utils";

function Thumbnail({
  item,
  sizes,
}: {
  item: EducationContent;
  sizes: string;
}) {
  if (item.thumbnail) {
    return (
      <Link
        href={contentPath(item.slug)}
        aria-label={item.title}
        className="relative block aspect-[16/9] overflow-hidden [clip-path:inset(0)] border-b border-gold/15"
      >
        <ParishFillImage
          src={item.thumbnail.src}
          alt=""
          sizes={sizes}
        />
      </Link>
    );
  }

  if (!isVisualContent(item.type)) {
    return null;
  }

  return (
    <Link
      href={contentPath(item.slug)}
      aria-label={item.title}
      className="block"
    >
      <ImagePlaceholder
        label={item.title}
        aspectRatio="16/9"
        alt=""
      />
    </Link>
  );
}

export function ContentCard({ item }: { item: EducationContent }) {
  const href = contentPath(item.slug);
  const published = item.publishedAt.slice(0, 10);

  return (
    <article className="card-hover flex h-full min-w-0 flex-col overflow-hidden border border-gold/15 bg-navy-lift/20">
      <Thumbnail item={item} sizes="(min-width: 768px) 50vw, 100vw" />
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.62rem] tracking-[0.16em] uppercase">
          <span className="text-gold">{item.type}</span>
          <span className="text-gold/35" aria-hidden="true">
            ·
          </span>
          <span className="text-stone">{item.category}</span>
        </p>
        <h3 className="mt-4 font-serif text-2xl leading-tight break-words text-ivory italic">
          <Link href={href} className="transition-colors hover:text-gold-bright">
            {item.title}
          </Link>
        </h3>
        {item.author ? (
          <p className="mt-3 text-sm text-ivory/70">{item.author}</p>
        ) : null}
        <p className="mt-3 flex-1 text-sm leading-7 text-stone-light">{item.description}</p>
        <p className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.62rem] tracking-[0.14em] text-stone uppercase">
          <time dateTime={published}>{formatFullDate(item.publishedAt)}</time>
          {item.duration ? (
            <>
              <span className="text-gold/35" aria-hidden="true">
                ·
              </span>
              <span>{item.duration}</span>
            </>
          ) : null}
        </p>
        <Link
          href={href}
          className="mt-6 inline-flex min-h-11 items-center gap-2 text-[0.68rem] tracking-[0.2em] text-gold uppercase transition-colors hover:text-gold-bright"
        >
          {contentActionLabel(item.type)}
          <ArrowIcon />
        </Link>
      </div>
    </article>
  );
}
