import type { Metadata } from "next";
import { EducationBreadcrumbs } from "@/components/education/EducationBreadcrumbs";
import { EducationCalendar } from "@/components/education/EducationCalendar";
import { EducationSubnav } from "@/components/education/EducationSubnav";
import { RegistrationCTA } from "@/components/education/RegistrationCTA";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Religious Education Calendar",
  description:
    "Religious Education calendar for St. Mary, Star of the Sea Catholic Church in Astoria, Oregon. A general guideline that may change; see announcements for the latest information.",
};

export default function EducationCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Religious Education"
        title="The year’s gatherings, at a glance."
        description="Classes, parent meetings, sacramental dates, breaks, and other formation events — published here as a guideline."
      />
      <Section tone="ivory" className="py-12 md:py-16">
        <div className="page-wrap">
          <EducationBreadcrumbs
            light
            items={[
              { href: "/", label: "Home" },
              { href: "/religious-education", label: "Religious Education" },
              { label: "Calendar" },
            ]}
          />
          <div className="mt-8">
            <EducationSubnav light />
          </div>
        </div>
      </Section>
      <Section tone="navy" className="py-20 md:py-28">
        <div className="page-wrap">
          <SectionHeading
            eyebrow="Parish calendar"
            title="A guide, not a contract."
            description="Use announcements if something changes after this page is updated."
          />
          <div className="mt-14">
            <EducationCalendar />
          </div>
        </div>
      </Section>
      <RegistrationCTA
        title="Need the latest word?"
        description="Announcements will carry changes that are not yet on the calendar."
      />
    </>
  );
}
