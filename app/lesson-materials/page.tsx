import Link from "next/link";
import { CTASection } from "@/components/home/CTASection";
import { LessonCard } from "@/components/lessons/LessonCard";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import {
  announcementPath,
  getLatestAnnouncement,
} from "@/lib/education-announcements";
import {
  getPublishedLessons,
  upcomingLessonSequence,
} from "@/lib/lesson-materials";
import { pageMetadata } from "@/lib/seo";
import { formatClassWeekday, formatFullDate } from "@/lib/utils";

const lessonOrder = upcomingLessonSequence();

export const metadata = pageMetadata({
  title: "OCIA Lesson Materials",
  description: `Materials for the next OCIA class, in order: ${lessonOrder}.`,
  path: "/lesson-materials",
});

export default function LessonMaterialsPage() {
  const lessons = getPublishedLessons();
  const announcement = getLatestAnnouncement();
  const isNextClass = announcement?.title.toLowerCase().startsWith("next class");
  const when =
    isNextClass && announcement?.eventDate
      ? `${formatClassWeekday(announcement.eventDate)}, ${formatFullDate(announcement.eventDate)}`
      : null;

  return (
    <>
      <PageHero
        eyebrow="Weekly formation"
        title="OCIA Lesson Materials"
        description={
          when
            ? `Materials for the next OCIA class on ${when}, in order: ${lessonOrder}.`
            : `Materials for the next OCIA class, in order: ${lessonOrder}.`
        }
      />
      <Section tone="navy" className="pt-4 pb-20 md:pt-6 md:pb-28">
        <div className="page-wrap">
          {isNextClass && announcement ? (
            <p className="mb-8 max-w-2xl text-sm leading-7 text-stone-light md:text-[0.98rem] md:leading-8">
              These are short summaries for the named lessons in Liguori
              Publications&apos; Journey of Faith.{" "}
              <Link
                href={announcementPath(announcement.slug)}
                className="text-gold underline decoration-gold/40 underline-offset-4 hover:decoration-gold"
              >
                Read the class announcement
              </Link>
              .
            </p>
          ) : null}
          <div className="flex flex-col gap-8 md:gap-10">
            {lessons.map((lesson, index) => (
              <Reveal key={lesson.id} delay={index * 0.05}>
                <LessonCard lesson={lesson} />
              </Reveal>
            ))}
          </div>
        </div>
      </Section>
      <CTASection />
    </>
  );
}
