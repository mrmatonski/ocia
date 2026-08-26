import type { Metadata } from "next";
import { EducationBreadcrumbs } from "@/components/education/EducationBreadcrumbs";
import { EducationSubnav } from "@/components/education/EducationSubnav";
import { ResourceCard } from "@/components/education/ResourceCard";
import { RegistrationCTA } from "@/components/education/RegistrationCTA";
import { VideoCard } from "@/components/education/VideoCard";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { educationResources } from "@/lib/education-resources";
import { educationVideos } from "@/lib/education-videos";

export const metadata: Metadata = {
  title: "Religious Education Videos & Resources",
  description:
    "Educational videos and learning resources for Religious Education at St. Mary, Star of the Sea Catholic Church in Astoria, Oregon.",
};

export default function EducationLearnPage() {
  return (
    <>
      <PageHero
        eyebrow="Religious Education"
        title="Videos and learning resources."
        description="A place for recorded lessons, study guides, and other helps — posted here as the parish provides them."
      />
      <Section tone="ivory" className="py-12 md:py-16">
        <div className="page-wrap">
          <EducationBreadcrumbs
            light
            items={[
              { href: "/", label: "Home" },
              { href: "/religious-education", label: "Religious Education" },
              { label: "Videos & Resources" },
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
            eyebrow="Watch"
            title="Educational videos."
            description="Instructional recordings will appear here. No videos have been posted yet."
          />
          <ul className="mt-14 grid gap-5 sm:grid-cols-2">
            {educationVideos.map((video) => (
              <li key={video.id} className="min-w-0">
                <VideoCard video={video} />
              </li>
            ))}
          </ul>
        </div>
      </Section>
      <Section tone="dark" className="py-20 md:py-28">
        <div className="page-wrap">
          <SectionHeading
            eyebrow="Read & download"
            title="Learning resources."
            description="Study guides, worksheets, and other materials — when the parish provides a file or link."
          />
          <ul className="mt-14 grid gap-5 sm:grid-cols-2">
            {educationResources.map((resource) => (
              <li key={resource.id} className="min-w-0">
                <ResourceCard resource={resource} />
              </li>
            ))}
          </ul>
        </div>
      </Section>
      <RegistrationCTA
        title="Looking for something specific?"
        description="If a lesson or handout has not been posted yet, the parish can point you to what is available."
      />
    </>
  );
}
