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
    "Religious Education registration for St. Mary, Star of the Sea Catholic Church in Astoria, Oregon. Contact Marty Dursse or the parish office.",
};

export default function EducationHandbookPage() {
  return (
    <>
      <PageHero
        eyebrow="Religious Education"
        title="Registration."
        description="Marty Dursse, Director of Religious Education, coordinates formation for the parish. Registration begins in August."
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
        description="Call (503) 325-3671 or write to marty@stmaryastoria.com. Office hours are Tuesday–Friday, 9:00 a.m. – 4:00 p.m."
      />
    </>
  );
}
