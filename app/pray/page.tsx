import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { PrayerGuide } from "@/components/pray/PrayerGuide";
import { CTASection } from "@/components/home/CTASection";

import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "How to Pray",
  description:
    "Learn traditional Catholic prayers for the OCIA journey at St. Mary, Star of the Sea Catholic Church in Astoria, Oregon.",
  path: "/pray",
});

export default function PrayPage() {
  return (
    <>
      <PageHero
        eyebrow="How to pray"
        title="Speak to God as to a friend."
        description="Prayer is heart-to-heart dialogue with God. It is not a performance. It is how the OCIA journey takes root — slowly, in words the Church has loved for centuries."
      />
      <Section tone="navy" className="py-20 md:py-28">
        <div className="page-wrap">
          <p className="mb-12 max-w-2xl text-sm leading-7 text-stone-light md:text-base md:leading-8">
            You do not need to know these prayers by heart on the first day.
            Read them. Pray them poorly, then pray them again. In time they
            become a language for the heart — at Mass, at home, and in the quiet
            of the OCIA path.
          </p>
          <PrayerGuide />
        </div>
      </Section>
      <CTASection />
    </>
  );
}
