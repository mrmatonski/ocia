import type { Metadata } from "next";
import { AnnouncementFeed } from "@/components/education/AnnouncementFeed";
import { EducationBreadcrumbs } from "@/components/education/EducationBreadcrumbs";
import { EducationSubnav } from "@/components/education/EducationSubnav";
import { RegistrationCTA } from "@/components/education/RegistrationCTA";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { getPublishedAnnouncements } from "@/lib/education-announcements";

export const metadata: Metadata = {
  title: "Announcements",
  description:
    "Stay up to date with the latest news, schedule changes, reminders, and information from Religious Education at St. Mary, Star of the Sea Catholic Church in Astoria, Oregon.",
};

export default function EducationAnnouncementsPage() {
  const announcements = getPublishedAnnouncements();

  return (
    <>
      <PageHero
        eyebrow="Religious Education"
        title="Announcements"
        description="Stay up to date with the latest news, schedule changes, reminders, and information from Religious Education."
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
          <AnnouncementFeed items={announcements} />
        </div>
      </Section>
      <RegistrationCTA
        title="Have a question about a notice?"
        description="Write to the parish if you are unsure whether a class is meeting."
      />
    </>
  );
}
