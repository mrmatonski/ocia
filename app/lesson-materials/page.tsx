import { CTASection } from "@/components/home/CTASection";
import { LessonCard } from "@/components/lessons/LessonCard";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { getPublishedLessons } from "@/lib/lesson-materials";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "OCIA Lesson Materials",
  description:
    "Materials for the next OCIA class: Who Shepherds the Church, then The Church as Community.",
  path: "/lesson-materials",
});

export default function LessonMaterialsPage() {
  const lessons = getPublishedLessons();

  return (
    <>
      <PageHero
        eyebrow="Weekly formation"
        title="OCIA Lesson Materials"
        description="Materials for the next OCIA class, in order: Who Shepherds the Church, then The Church as Community."
      />
      <Section tone="navy" className="pt-4 pb-20 md:pt-6 md:pb-28">
        <div className="page-wrap">
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
