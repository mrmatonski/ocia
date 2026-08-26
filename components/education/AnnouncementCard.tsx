import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/icons";
import { Button } from "@/components/ui/Button";
import {
  announcementPath,
  type Announcement,
} from "@/lib/education-announcements";
import { formatFullDate } from "@/lib/utils";

export function AnnouncementCard({ announcement }: { announcement: Announcement }) {
  const href = announcementPath(announcement.slug);
  const attachmentReady = Boolean(announcement.attachment?.href);

  return (
    <article className="card-hover min-w-0 overflow-hidden border border-gold/15 bg-navy-lift/20">
      {announcement.image ? (
        <Link href={href} className="relative block aspect-[16/9] border-b border-gold/15">
          <Image
            src={announcement.image.src}
            alt={announcement.image.alt}
            fill
            className="object-cover"
            sizes="(min-width: 768px) 42rem, 100vw"
          />
        </Link>
      ) : null}
      <div className="p-6 sm:p-8 md:p-9">
        <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.62rem] tracking-[0.16em] uppercase">
          <span className="text-gold">{announcement.category ?? "Announcement"}</span>
          <span className="text-gold/35" aria-hidden="true">
            ·
          </span>
          <time className="text-stone" dateTime={announcement.publishedAt.slice(0, 10)}>
            {formatFullDate(announcement.publishedAt)}
          </time>
        </p>
        <h2 className="mt-4 font-serif text-[1.85rem] leading-tight break-words text-ivory italic md:text-3xl">
          <Link href={href} className="transition-colors hover:text-gold-bright">
            {announcement.title}
          </Link>
        </h2>
        {announcement.author ? (
          <p className="mt-3 text-sm text-ivory/70">{announcement.author}</p>
        ) : null}
        <p className="mt-4 text-sm leading-7 text-stone-light md:text-[0.95rem] md:leading-8">
          {announcement.excerpt}
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <Link
            href={href}
            className="inline-flex min-h-11 items-center gap-2 text-[0.68rem] tracking-[0.2em] text-gold uppercase transition-colors hover:text-gold-bright"
          >
            Read the announcement
            <ArrowIcon />
          </Link>
          {announcement.externalLink ? (
            <Button
              href={announcement.externalLink.href}
              variant="ghost"
              className="min-h-11 justify-start"
            >
              {announcement.externalLink.label}
            </Button>
          ) : null}
          {attachmentReady && announcement.attachment?.href ? (
            <Button
              href={announcement.attachment.href}
              variant="secondary"
              className="min-h-11 px-5 py-3"
              ariaLabel={`Download ${announcement.attachment.name}`}
            >
              {announcement.attachment.name}
            </Button>
          ) : null}
        </div>
      </div>
    </article>
  );
}
