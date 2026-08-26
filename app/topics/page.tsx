import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { TopicAccordion } from "@/components/topics/TopicAccordion";
import { CTASection } from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Topics",
  description:
    "Explore the Catholic faith topics discussed during OCIA at St. Mary, Star of the Sea.",
};

export default function TopicsPage() {
  return (
    <>
      <PageHero
        eyebrow="What we'll explore"
        title="The mysteries the Church has loved for centuries."
        description="This outline is representative, not official. It will be replaced with the parish's confirmed OCIA curriculum."
      />
      <Section tone="navy" className="py-20 md:py-28">
        <div className="page-wrap">
          <TopicAccordion />
        </div>
      </Section>
      <CTASection />
    </>
  );
}
