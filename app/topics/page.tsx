import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { TopicAccordion } from "@/components/topics/TopicAccordion";
import { CTASection } from "@/components/home/CTASection";

import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Topics",
  description:
    "Explore Catholic faith topics studied in OCIA at St. Mary, Star of the Sea in Astoria, Oregon — the Creed, Sacred Scripture, the Church, and the sacraments.",
  path: "/topics",
});

export default function TopicsPage() {
  return (
    <>
      <PageHero
        eyebrow="What we'll explore"
        title="The mysteries the Church has loved for centuries."
        description="Themes Catholics ordinarily study in OCIA. Weekly class topics are set with the Religious Education office."
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
