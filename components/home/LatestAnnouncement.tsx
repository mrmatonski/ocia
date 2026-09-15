import Link from "next/link";
import { ArrowIcon } from "@/components/icons";
import { Section } from "@/components/ui/Section";
import {
  announcementPath,
  getLatestAnnouncement,
} from "@/lib/education-announcements";
import { formatWeekdayDate } from "@/lib/utils";

export function LatestAnnouncement() {
  const announcement = getLatestAnnouncement();
  if (!announcement) return null;

  const dateLabel = announcement.eventDate
    ? formatWeekdayDate(announcement.eventDate)
    : null;

  return (
    <Section tone="navy" className="border-y border-gold/12 py-12 md:py-14">
      <div className="page-wrap max-w-3xl">
        <p className="eyebrow">Latest announcement</p>
        {announcement.kicker ? (
          <p className="mt-5 text-[0.62rem] tracking-[0.16em] text-gold uppercase">
            {announcement.kicker}
          </p>
        ) : null}
        <h2 className="mt-4 font-serif text-3xl leading-tight text-ivory italic md:text-4xl">
          {announcement.title}
        </h2>
        {dateLabel ? (
          <p className="mt-3 font-serif text-lg text-gold/90 md:text-xl">{dateLabel}</p>
        ) : null}
        <p className="mt-5 max-w-2xl text-sm leading-7 text-stone-light md:text-[0.95rem] md:leading-8">
          {announcement.excerpt}
        </p>
        <p className="mt-7">
          <Link
            href={announcementPath(announcement.slug)}
            className="inline-flex min-h-11 items-center gap-2 text-[0.68rem] tracking-[0.2em] text-gold uppercase transition-colors hover:text-gold-bright"
          >
            Read announcement
            <ArrowIcon />
          </Link>
        </p>
      </div>
    </Section>
  );
}
