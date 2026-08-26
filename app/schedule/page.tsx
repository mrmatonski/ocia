import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { ScheduleTimeline } from "@/components/schedule/ScheduleTimeline";
import { CTASection } from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Class Schedule",
  description:
    "View the OCIA class schedule at St. Mary, Star of the Sea in Astoria, Oregon.",
};

export default function SchedulePage() {
  return (
    <>
      <PageHero
        eyebrow="Class schedule"
        title="Week by week, into the heart of the faith."
        description="Placeholder sessions for a full formation year. Dates, times, topics, and presenters will be replaced with the official parish calendar."
      />
      <Section tone="navy" className="py-20 md:py-28">
        <div className="page-wrap">
          {/* PLACEHOLDER DATA: see lib/schedule.ts */}
          <ScheduleTimeline />
        </div>
      </Section>
      <CTASection />
    </>
  );
}
