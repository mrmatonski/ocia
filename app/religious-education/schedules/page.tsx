import type { Metadata } from "next";
import Link from "next/link";
import { ClassScheduleTable } from "@/components/education/ClassScheduleTable";
import { EducationBreadcrumbs } from "@/components/education/EducationBreadcrumbs";
import { EducationSubnav } from "@/components/education/EducationSubnav";
import { RegistrationCTA } from "@/components/education/RegistrationCTA";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getEducationSchedules } from "@/lib/education-schedules";

export const metadata: Metadata = {
  title: "Religious Education Class Schedules",
  description:
    "Class schedules for Religious Education at St. Mary, Star of the Sea Catholic Church in Astoria, Oregon.",
};

export default function EducationSchedulesPage() {
  const schedules = getEducationSchedules();

  return (
    <>
      <PageHero
        eyebrow="Religious Education"
        title="Class schedules."
        description="Gatherings by program, as they are published. Official times and locations will replace placeholder rows when the parish confirms them."
      />
      <Section tone="ivory" className="py-12 md:py-16">
        <div className="page-wrap">
          <EducationBreadcrumbs
            light
            items={[
              { href: "/", label: "Home" },
              { href: "/religious-education", label: "Religious Education" },
              { label: "Class Schedules" },
            ]}
          />
          <div className="mt-8">
            <EducationSubnav light />
          </div>
        </div>
      </Section>
      <Section tone="navy" className="py-20 md:py-28">
        <div className="page-wrap space-y-24">
          {schedules.map((group) => (
            <div key={group.slug}>
              <SectionHeading
                eyebrow="Program"
                title={group.name}
                align="left"
              />
              <p className="mt-6 max-w-2xl text-sm leading-7 text-stone-light">
                <Link
                  href={group.href}
                  className="text-gold underline-offset-4 hover:underline"
                >
                  View the {group.name} page
                </Link>
              </p>
              <div className="mt-10">
                <ClassScheduleTable
                  sessions={
                    group.comingSoon ? group.sessions : group.sessions.slice(0, 10)
                  }
                  comingSoon={group.comingSoon}
                  note={group.note}
                  showProgram={false}
                />
              </div>
            </div>
          ))}
        </div>
      </Section>
      <RegistrationCTA
        title="Questions about a class?"
        description="If a time or location is still listed as coming soon, write to the parish and we will help you."
      />
    </>
  );
}
