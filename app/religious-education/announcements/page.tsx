import type { Metadata } from "next";
import { AnnouncementList } from "@/components/education/AnnouncementList";
import { EducationBreadcrumbs } from "@/components/education/EducationBreadcrumbs";
import { EducationSubnav } from "@/components/education/EducationSubnav";
import { RegistrationCTA } from "@/components/education/RegistrationCTA";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Religious Education Announcements",
  description:
    "Religious Education announcements for St. Mary, Star of the Sea Catholic Church in Astoria, Oregon — schedule updates, closures, and family notices.",
};

export default function EducationAnnouncementsPage() {
  return (
    <>
      <PageHero
        eyebrow="Religious Education"
        title="What families need to know."
        description="The most current notices for students, parents, and catechists. Check here if the calendar has not yet been updated."
      />
      <Section tone="ivory" className="py-12 md:py-16">
        <div className="page-wrap">
          <EducationBreadcrumbs
            light
            items={[
              { href: "/", label: "Home" },
              { href: "/religious-education", label: "Religious Education" },
              { label: "Announcements" },
            ]}
          />
          <div className="mt-8">
            <EducationSubnav light />
          </div>
        </div>
      </Section>
      <Section tone="navy" className="py-20 md:py-28">
        <div className="page-wrap max-w-3xl">
          <AnnouncementList />
        </div>
      </Section>
      <RegistrationCTA
        title="Have a question about a notice?"
        description="Write to the parish if you are unsure whether a class is meeting."
      />
    </>
  );
}
