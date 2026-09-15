import type { Metadata } from "next";
import { ResourceLibrary } from "@/components/resources/ResourceLibrary";
import { CTASection } from "@/components/home/CTASection";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Ornament } from "@/components/ui/Ornament";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Trustworthy Catholic resources for OCIA, lifelong formation, and those exploring the faith at St. Mary, Star of the Sea in Astoria, Oregon.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Read with the Church."
        description="A quiet shelf of trustworthy Catholic sources — for those in OCIA, for Catholics who wish to go deeper, and for anyone still exploring the faith."
      />

      <Section tone="ivory" className="py-20 md:py-28">
        <div className="page-wrap grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="eyebrow text-gold-dim">A help, not a substitute</p>
            <h2 className="mt-5 font-serif text-4xl leading-[1.12] font-medium text-ink italic md:text-5xl">
              You need not wander the internet alone.
            </h2>
            <Ornament className="mt-7" light align="start" />
            <div className="mt-8 space-y-5 text-base leading-8 text-ink/75">
              <p>
                The Church has already given us what we need: Scripture read
                with her, the Catechism, the liturgy, and a parish that will
                sit with your questions. The links below are offered so you
                can begin that reading with confidence.
              </p>
              <p>
                They will not replace Sunday Mass, a conversation with
                Religious Education, or the slow work of OCIA. They will give
                you a place to stand — official teaching, daily readings, and
                the life of this parish — while you discern.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <ImagePlaceholder
              label="Formation at St. Mary"
              aspectRatio="4/5"
              src="/images/parish/formation.jpg"
              alt="Religious Education at St. Mary, Star of the Sea"
              caption="Formation in the life of the parish."
            />
          </Reveal>
        </div>
      </Section>

      <Section tone="navy" className="py-20 md:py-28">
        <div className="page-wrap">
          <ResourceLibrary />
        </div>
      </Section>

      <CTASection />
    </>
  );
}
