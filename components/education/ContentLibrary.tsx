import Image from "next/image";
import Link from "next/link";
import { ContentCard } from "@/components/education/ContentCard";
import { ArrowIcon } from "@/components/icons";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  contentActionLabel,
  contentPath,
  type EducationContent,
} from "@/lib/education-content";
import { formatFullDate } from "@/lib/utils";

function FeaturedContent({ item }: { item: EducationContent }) {
  const href = contentPath(item.slug);
  const published = item.publishedAt.slice(0, 10);

  return (
    <article className="card-hover overflow-hidden border border-gold/15 bg-navy-lift/20 lg:grid lg:grid-cols-2 lg:items-stretch">
      <div className="min-w-0 border-b border-gold/15 lg:border-r lg:border-b-0">
        {item.thumbnail ? (
          <Link
            href={href}
            aria-label={item.title}
            className="relative block aspect-[16/9] h-full min-h-[12rem]"
          >
            <Image
              src={item.thumbnail.src}
              alt=""
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
            />
          </Link>
        ) : (
          <Link href={href} aria-label={item.title} className="block h-full">
            <ImagePlaceholder
              label="Featured lesson coming soon"
              aspectRatio="16/9"
              alt=""
              className="h-full"
            />
          </Link>
        )}
      </div>
      <div className="flex min-w-0 flex-col justify-center p-6 sm:p-8 md:p-10">
        <p className="eyebrow">Featured</p>
        <p className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.62rem] tracking-[0.16em] uppercase">
          <span className="text-gold">{item.type}</span>
          <span className="text-gold/35" aria-hidden="true">
            ·
          </span>
          <span className="text-stone">{item.category}</span>
        </p>
        <h2 className="mt-4 font-serif text-[1.85rem] leading-tight break-words text-ivory italic md:text-4xl">
          <Link href={href} className="transition-colors hover:text-gold-bright">
            {item.title}
          </Link>
        </h2>
        {item.author ? (
          <p className="mt-3 text-sm text-ivory/70">{item.author}</p>
        ) : null}
        <p className="mt-4 text-sm leading-7 text-stone-light md:text-[0.95rem] md:leading-8">
          {item.description}
        </p>
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
          className="mt-8 inline-flex min-h-11 items-center gap-2 self-start text-[0.68rem] tracking-[0.2em] text-gold uppercase transition-colors hover:text-gold-bright"
        >
          {contentActionLabel(item.type)}
          <ArrowIcon />
        </Link>
      </div>
    </article>
  );
}

export function ContentLibrary({
  featured,
  items,
}: {
  featured?: EducationContent;
  items: EducationContent[];
}) {
  if (!featured && items.length === 0) {
    return (
      <div className="border-y border-gold/20 py-16 text-center md:py-20">
        <p className="eyebrow">Content library</p>
        <h2 className="mt-5 font-serif text-3xl text-ivory italic md:text-4xl">
          Additional Religious Education resources will be posted here.
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-stone-light md:text-base">
          When recordings, study guides, or class materials are provided, they
          will appear in this library.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-16 md:space-y-20">
      {featured ? (
        <div>
          <SectionHeading
            eyebrow="Featured"
            title="Begin here."
            description="A highlighted lesson or recording will be shown here when the parish posts it."
          />
          <div className="mt-14">
            <FeaturedContent item={featured} />
          </div>
        </div>
      ) : null}

      {items.length > 0 ? (
        <div>
          <SectionHeading
            eyebrow="Library"
            title="Browse content."
            description="Videos, lessons, and study materials — clearly marked as samples until official materials are posted."
          />
          <ul className="mt-14 grid gap-5 sm:grid-cols-2">
            {items.map((item) => (
              <li key={item.id} className="min-w-0">
                <ContentCard item={item} />
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
