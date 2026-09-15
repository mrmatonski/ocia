import { ContentLibrary } from "@/components/education/ContentLibrary";
import { EducationBreadcrumbs } from "@/components/education/EducationBreadcrumbs";
import { EducationSubnav } from "@/components/education/EducationSubnav";
import { RegistrationCTA } from "@/components/education/RegistrationCTA";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { getBrowsableContent, getFeaturedContent } from "@/lib/education-content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Religious Education Content & Videos",
  description:
    "Instructional videos, class lessons, and study materials for Religious Education at St. Mary, Star of the Sea Catholic Church in Astoria, Oregon.",
  path: "/religious-education/content",
});

export default function EducationContentPage() {
  const featured = getFeaturedContent();
  const items = getBrowsableContent();

  return (
    <>
      <PageHero
        eyebrow="Religious Education"
        title="Content & Videos"
        description="Articles and lessons from Religious Education at St. Mary — OCIA, children's formation, Confirmation, and the worship of the Church."
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
          <div className="mx-auto mt-16 w-full max-w-3xl md:mt-20">
            <div className="relative aspect-[16/9] overflow-hidden border border-gold/15">
              <iframe
                title="Religious Education video"
                src="https://www.youtube.com/embed/RS8NrJ0Y5O8"
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>
        </div>
      </Section>
      <RegistrationCTA
        title="Looking for something specific?"
        description="If you need a printed handout or a class time, call the parish office or write to Marty Dursse."
      />
    </>
  );
}
