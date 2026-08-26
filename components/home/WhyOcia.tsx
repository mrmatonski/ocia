import { features } from "@/lib/features";
import { FeatureCard } from "@/components/home/FeatureCard";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { CathedralVault } from "@/components/ui/Ornament";

export function WhyOcia() {
  return (
    <Section tone="navy" className="py-28 md:py-36">
      <div className="atmosphere" aria-hidden="true">
        <CathedralVault className="absolute inset-x-0 -top-24 h-[70%] w-full opacity-40" />
      </div>
      <div className="page-wrap">
        <SectionHeading
          eyebrow="The path"
          title="Enter more deeply into the mystery."
          description="Four movements of formation — not a curriculum to consume, but a way of approaching God."
        />
        <div className="mt-16 grid gap-0 md:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-gold/15">
          {features.map((feature, index) => (
            <Reveal key={feature.number} delay={index * 0.07}>
              <FeatureCard {...feature} />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
