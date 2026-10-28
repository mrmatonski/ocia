import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import {
  announcementPath,
  getLatestAnnouncement,
} from "@/lib/education-announcements";
import { getPublishedLessons } from "@/lib/lesson-materials";
import { getNextSession, isSundayOciaClass, sundayOciaClassTime } from "@/lib/schedule";
import { formatWeekdayDate } from "@/lib/utils";

export function LatestAnnouncement() {
  const announcement = getLatestAnnouncement();
  if (!announcement) return null;

  const dateLabel = announcement.eventDate
    ? formatWeekdayDate(announcement.eventDate)
    : null;
  const nextSession = getNextSession();
  const sameGathering =
    Boolean(announcement.eventDate) &&
    announcement.eventDate?.slice(0, 10) === nextSession?.date &&
    announcement.title.toLowerCase().startsWith("next class");
  const lessonTitles = sameGathering
    ? getPublishedLessons().map((lesson) => lesson.title)
    : [];
  const showSundayTime = Boolean(
    sameGathering && nextSession && isSundayOciaClass(nextSession),
  );

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
        {showSundayTime ? (
          <p className="mt-2 max-w-2xl text-sm leading-6 text-stone-light">
            {sundayOciaClassTime}
          </p>
        ) : null}
        {lessonTitles.length > 0 ? (
          <ol className="mt-6 max-w-2xl space-y-2">
            {lessonTitles.map((title, index) => (
              <li key={title} className="flex items-baseline gap-3">
                <span className="font-display text-[0.62rem] tracking-[0.18em] text-gold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-serif text-2xl text-ivory italic">{title}</span>
              </li>
            ))}
          </ol>
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
