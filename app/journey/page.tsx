import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { JourneyTimeline } from "@/components/journey/JourneyTimeline";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/home/CTASection";
import { Ornament } from "@/components/ui/Ornament";

export const metadata: Metadata = {
  title: "Your Journey",
  description:
    "Walk through the stages of OCIA — from inquiry to the sacraments of initiation.",
};

export default function JourneyPage() {
  return (
    <>
      <PageHero
        eyebrow="Your journey"
        title="An invitation to encounter Christ."
        description="The Church does not ask you to run. She asks you to walk — with others, through sacred time, toward a mystery that is larger than any one of us."
      />
      <Section tone="navy" className="py-20 md:py-28">
        <div className="page-wrap">
          <p className="mb-14 max-w-2xl text-sm leading-7 text-stone-light">
            The stages below follow the Church&apos;s structure of Christian
            initiation. At St. Mary, OCIA is conversion-focused, and the Church
            celebrates that conversion through prayerful rites.
          </p>
          <JourneyTimeline />
        </div>
      </Section>
      <Section tone="ivory" className="py-24">
        <div className="page-wrap grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow text-gold-dim">A note on freedom</p>
            <h2 className="mt-5 font-serif text-4xl text-ink italic md:text-5xl">
              You may leave the path. You may linger on it.
            </h2>
            <Ornament className="mt-7" light align="start" />
            <p className="mt-6 text-base leading-8 text-ink/75">
              OCIA is not a contract. If you need more time, you will be given
              it. If you discern that this is not your hour, you will be
              blessed on your way. The Church&apos;s first gift is hospitality —
              not pressure.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <ImagePlaceholder
              label="The sanctuary at St. Mary"
              aspectRatio="16/10"
              src="/images/parish/crucifix.jpg"
              alt="Crucifix at St. Mary, Star of the Sea"
            />
          </Reveal>
        </div>
      </Section>
      <CTASection />
    </>
  );
}
