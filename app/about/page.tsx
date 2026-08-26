import type { Metadata } from "next";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { WhyOcia } from "@/components/home/WhyOcia";
import { CTASection } from "@/components/home/CTASection";
import { Ornament } from "@/components/ui/Ornament";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About OCIA",
  description:
    "Learn what OCIA is and how adults at St. Mary, Star of the Sea explore the Catholic faith.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About OCIA"
        title="Discover the Catholic faith."
        description="The Order of Christian Initiation of Adults is the Church's ancient path of welcome — still living, still patient, still meant for people who are searching."
      />

      <Section tone="ivory" className="py-28 md:py-36">
        <div className="page-wrap grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="eyebrow text-gold-dim">The heart of it</p>
            <h2 className="mt-5 font-serif text-4xl text-ink italic md:text-5xl">
              A formation, not a class you survive.
            </h2>
            <Ornament className="mt-7" light align="start" />
            {/* TODO: Replace with official parish OCIA description */}
            <div className="mt-8 space-y-5 text-base leading-8 text-ink/75">
              <p>
                OCIA accompanies adults who wish to know Jesus Christ in the
                Catholic Church. It is ordered toward conversion — a turning of
                the heart — and toward the sacraments of initiation: Baptism,
                Confirmation, and the Eucharist.
              </p>
              <p>
                At St. Mary, Star of the Sea in Astoria, this path is meant to
                feel human. You will gather, pray, listen, and ask. You will be
                given time. No one is expected to arrive already certain.
              </p>
              <p>
                The Church has walked this road with inquirers for centuries.
                What is new is only this: your own life, your own questions,
                and the particular community that will receive you.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <ImagePlaceholder
              label="Formation Gathering Placeholder"
              aspectRatio="4/5"
            />
          </Reveal>
        </div>
      </Section>

      <WhyOcia />

      <Section tone="dark" className="py-28 md:py-36">
        <div className="page-wrap">
          <SectionHeading
            eyebrow="Who is welcome"
            title="If you are asking the question, you already belong in the room."
          />
          <div className="mt-16 grid gap-10 md:grid-cols-3 md:divide-x md:divide-gold/15 md:gap-0">
            {[
              {
                title: "The unbaptized",
                body: "Adults who have never been baptized and wish to explore becoming Catholic.",
              },
              {
                title: "Baptized Christians",
                body: "Those baptized in another Christian tradition who are considering full communion with the Catholic Church.",
              },
              {
                title: "Catholic adults",
                body: "Catholics who wish to complete Confirmation or the Eucharist, or simply to be formed more deeply.",
              },
            ].map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08}>
                <article className="h-full md:px-8">
                  <p className="font-display text-xs tracking-[0.28em] text-gold">
                    0{index + 1}
                  </p>
                  <h3 className="mt-5 font-serif text-3xl text-ivory italic">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-stone-light">
                    {item.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="mt-14 flex justify-center">
            <Button href="/contact">Begin Your Journey</Button>
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
