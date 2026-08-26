import type { Metadata } from "next";
import { EducationBreadcrumbs } from "@/components/education/EducationBreadcrumbs";
import { EducationSubnav } from "@/components/education/EducationSubnav";
import { HandbookPanel } from "@/components/education/HandbookPanel";
import { RegistrationCTA } from "@/components/education/RegistrationCTA";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Religious Education Handbook",
  description:
    "Religious Education handbook for St. Mary, Star of the Sea Catholic Church in Astoria, Oregon. The official PDF will be posted here when provided.",
};

export default function EducationHandbookPage() {
  return (
    <>
      <PageHero
        eyebrow="Religious Education"
        title="The handbook."
        description="View or download the current Religious Education Handbook when the parish posts the official file."
      />
      <Section tone="ivory" className="py-12 md:py-16">
        <div className="page-wrap">
          <EducationBreadcrumbs
            light
            items={[
              { href: "/", label: "Home" },
              { href: "/religious-education", label: "Religious Education" },
              { label: "Handbook" },
            ]}
          />
          <div className="mt-8">
            <EducationSubnav light />
          </div>
        </div>
      </Section>
      <Section tone="navy" className="py-20 md:py-28">
        <div className="page-wrap">
          <HandbookPanel />
        </div>
      </Section>
      <RegistrationCTA
        title="Need a printed copy?"
        description="Until the file is posted here, the parish office can help you obtain the current handbook."
      />
    </>
  );
}
