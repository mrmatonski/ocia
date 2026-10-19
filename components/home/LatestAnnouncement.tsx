import { Button } from "@/components/ui/Button";
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
    <Section id="next-class" tone="navy" className="border-y border-gold/15 py-12 md:py-16">
      <div className="page-wrap">
        <p className="eyebrow">
          {announcement.title.toLowerCase().startsWith("next class")
            ? "Next class"
            : "Latest announcement"}
        </p>
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
        <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap">
          <Button href={announcementPath(announcement.slug)}>
            {announcement.title.toLowerCase().startsWith("next class")
              ? "Read next class"
              : "Read announcement"}
          </Button>
          <Button href="/schedule" variant="secondary">
            View Upcoming Classes
          </Button>
          <Button href="/lesson-materials" variant="secondary">
            Explore Lesson Materials
          </Button>
        </div>
      </div>
    </Section>
  );
}
