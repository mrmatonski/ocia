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
    "Explore the teachings of the Catholic Church, deepen your understanding of the faith, and review materials from our weekly OCIA classes.",
  path: "/lesson-materials",
});

export default function LessonMaterialsPage() {
  const lessons = getPublishedLessons();

  return (
    <>
      <PageHero
        eyebrow="Weekly formation"
        title="OCIA Lesson Materials"
        description="Explore the teachings of the Catholic Church, deepen your understanding of the faith, and review materials from our weekly OCIA classes."
      />
      <Section tone="navy" className="py-20 md:py-28">
        <div className="page-wrap">
          <div className="mx-auto flex max-w-3xl flex-col gap-8 md:gap-10">
            {lessons.map((lesson, index) => (
              <Reveal key={lesson.id} delay={index * 0.06}>
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
