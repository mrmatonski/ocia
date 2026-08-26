import { getUpcomingSessions } from "@/lib/schedule";
import { ScheduleTimeline } from "@/components/schedule/ScheduleTimeline";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function SchedulePreview() {
  const upcoming = getUpcomingSessions(4);

  return (
    <Section tone="dark" className="py-28 md:py-36">
      <div className="page-wrap">
        <SectionHeading
          eyebrow="Class schedule"
          title="A place at the table, week by week."
          description="Placeholder dates for a full formation year. The official calendar will replace this list when it is confirmed."
        />
        <div className="mt-16">
          <ScheduleTimeline limit={upcoming.length || 4} />
        </div>
        <div className="mt-12 flex justify-center">
          <Button href="/schedule" variant="secondary">
            View full schedule
          </Button>
        </div>
      </div>
    </Section>
  );
}
