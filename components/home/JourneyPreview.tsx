import { JourneyTimeline } from "@/components/journey/JourneyTimeline";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function JourneyPreview() {
  return (
    <Section tone="navy" className="py-28 md:py-36">
      <div className="page-wrap">
        <SectionHeading
          eyebrow="Your journey"
          title="A path walked with the Church."
          description="The Church's path of initiation — inquiry, catechumenate, purification, and the sacraments — walked with a parish that makes room for questions."
        />
        <div className="mt-16">
          <JourneyTimeline />
        </div>
        <div className="mt-14 flex justify-center">
          <Button href="/journey" variant="secondary">
            Walk the full journey
          </Button>
        </div>
      </div>
    </Section>
  );
}
