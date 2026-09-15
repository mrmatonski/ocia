import { AnnouncementFeed } from "@/components/education/AnnouncementFeed";
import { EducationBreadcrumbs } from "@/components/education/EducationBreadcrumbs";
import { EducationSubnav } from "@/components/education/EducationSubnav";
import { RegistrationCTA } from "@/components/education/RegistrationCTA";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import {
  getArchivedAnnouncements,
  getCurrentAnnouncements,
} from "@/lib/education-announcements";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Announcements",
  description:
    "Current Religious Education and OCIA notices from St. Mary, Star of the Sea Catholic Church in Astoria, Oregon.",
  path: "/religious-education/announcements",
});

export default function EducationAnnouncementsPage() {
  const current = getCurrentAnnouncements();
  const archived = getArchivedAnnouncements();

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
          <AnnouncementFeed current={current} archived={archived} />
        </div>
      </Section>
      <RegistrationCTA
        title="Have a question about a notice?"
        description="Write to the parish if you are unsure whether a class is meeting."
      />
    </>
  );
}
