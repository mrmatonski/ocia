import type { Metadata } from "next";
import { ContentLibrary } from "@/components/education/ContentLibrary";
import { EducationBreadcrumbs } from "@/components/education/EducationBreadcrumbs";
import { EducationSubnav } from "@/components/education/EducationSubnav";
import { RegistrationCTA } from "@/components/education/RegistrationCTA";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { getBrowsableContent, getFeaturedContent } from "@/lib/education-content";

export const metadata: Metadata = {
  title: "Religious Education Content & Videos",
  description:
    "Instructional videos, class lessons, and study materials for Religious Education at St. Mary, Star of the Sea Catholic Church in Astoria, Oregon.",
};

export default function EducationContentPage() {
  const featured = getFeaturedContent();
  const items = getBrowsableContent();

  return (
    <>
      <PageHero
        eyebrow="Religious Education"
        title="Content & Videos"
        description="Continue learning and growing in the Catholic faith. Recorded lessons, study guides, and other helps will be posted here as the parish provides them."
      />
      <Section tone="ivory" className="py-12 md:py-16">
        <div className="page-wrap">
          <EducationBreadcrumbs
            light
            items={[
              { href: "/", label: "Home" },
              { href: "/religious-education", label: "Religious Education" },
              { label: "Content & Videos" },
            ]}
          />
          <div className="mt-8">
            <EducationSubnav light />
          </div>
        </div>
      </Section>
      <Section tone="navy" className="py-20 md:py-28">
        <div className="page-wrap">
          <ContentLibrary featured={featured} items={items} />
        </div>
      </Section>
      <RegistrationCTA
        title="Looking for something specific?"
        description="If a lesson or handout has not been posted yet, the parish can point you to what is available."
      />
    </>
  );
}
