import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { FAQAccordion } from "@/components/faq/FAQAccordion";
import { CTASection } from "@/components/home/CTASection";

import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "FAQ",
  description:
    "Common questions about becoming Catholic through OCIA at St. Mary, Star of the Sea in Astoria, Oregon.",
  path: "/faq",
});

export default function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="Is OCIA for me?"
        title="There is room for your questions."
        description="You do not need to have the language of the Church already. Bring the questions you actually have."
      />
      <Section tone="navy" className="py-20 md:py-28">
        <div className="page-wrap max-w-3xl">
          <FAQAccordion />
        </div>
      </Section>
      <CTASection />
    </>
  );
}
