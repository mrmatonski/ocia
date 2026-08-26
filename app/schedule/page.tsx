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
        description="Registration begins in August. Weekly OCIA classes begin in the Fall. Call (503) 325-3671 for the current meeting day and time."
      />
      <Section tone="navy" className="py-20 md:py-28">
        <div className="page-wrap">
          <ScheduleTimeline />
        </div>
      </Section>
      <CTASection />
    </>
  );
}
