import { TopicAccordion } from "@/components/topics/TopicAccordion";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function TopicsPreview() {
  return (
    <Section tone="ivory" className="py-20 md:py-28">
      <div className="page-wrap">
        <SectionHeading
          light
          eyebrow="What we'll explore"
          title="The faith, unfolded with care."
          description="Themes Catholics ordinarily study in OCIA. Weekly class topics are set with the Religious Education office."
        />
        <div className="mt-14">
          <TopicAccordion compact tone="light" />
        </div>
        <div className="mt-12 flex justify-center">
          <Button href="/topics">
            Explore all topics
          </Button>
        </div>
      </div>
    </Section>
  );
}
