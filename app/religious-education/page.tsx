import type { Metadata } from "next";
import { EducationBreadcrumbs } from "@/components/education/EducationBreadcrumbs";
import { EducationSubnav } from "@/components/education/EducationSubnav";
import { HubGrid } from "@/components/education/HubGrid";
import { ProgramGrid } from "@/components/education/ProgramGrid";
import { RegistrationCTA } from "@/components/education/RegistrationCTA";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Ornament } from "@/components/ui/Ornament";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { educationHubCards } from "@/lib/education-hub";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Religious Education",
  description:
    "Religious Education at St. Mary, Star of the Sea Catholic Church in Astoria, Oregon — class schedules, calendar, announcements, handbook, and learning resources.",
  keywords: [
    "St. Mary's Catholic Church",
    "Astoria Oregon",
    "Religious Education",
    "OCIA",
    "Catholic education",
    "Faith formation",
  ],
};

export default function ReligiousEducationPage() {
  return (
    <>
      <PageHero
        eyebrow="Religious Education"
        title="Grow in Faith. Deepen Your Knowledge. Draw Closer to Christ."
        description={`St. Mary's offers opportunities for people of all ages to learn, grow, and live the Catholic faith — at ${site.parishFull} in ${site.city}.`}
      />

      <Section tone="ivory" className="py-20 md:py-28">
        <div className="page-wrap">
          <EducationBreadcrumbs
            light
            items={[
              { href: "/", label: "Home" },
              { label: "Religious Education" },
            ]}
          />
          <div className="mt-8">
            <EducationSubnav light />
          </div>
          <div className="mt-14 grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <p className="eyebrow text-gold-dim">A parish that teaches</p>
              <h2 className="mt-5 font-serif text-4xl leading-[1.12] font-medium text-ink italic md:text-5xl">
                Formation for every season of life.
              </h2>
              <Ornament className="mt-7" light align="start" />
              <div className="mt-8 space-y-5 text-base leading-8 text-ink/75">
                <p>
                  The Church does not ask us to finish learning. From a child&apos;s
                  first Sign of the Cross to an adult&apos;s long search for truth,
                  Catholic education is a way of remaining close to Christ — in
                  Scripture, in the sacraments, and in the life of this parish.
                </p>
                <p>
                  Religious Education at St. Mary serves kindergarten through
                  fifth grade (Penance and First Holy Communion), Youth Group
                  for grades 6 through high school, and Adult Education —
                  OCIA for those exploring the Catholic faith.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <ImagePlaceholder
                label="Religious Education at St. Mary"
                aspectRatio="4/5"
                src="/images/parish/formation.jpg"
                alt="Religious Education at St. Mary, Star of the Sea"
                caption="Formation in the life of the parish."
              />
            </Reveal>
          </div>
        </div>
      </Section>

      <Section tone="navy" className="py-24 md:py-32">
        <div className="page-wrap">
          <SectionHeading
            eyebrow="For families & catechists"
            title="Find what you need."
            description="Schedules, the calendar, announcements, the handbook, and learning materials live here — so parents, students, and catechists have one place to look."
          />
          <div className="mt-16">
            <HubGrid items={educationHubCards} />
          </div>
        </div>
      </Section>

      <Section tone="dark" className="py-24 md:py-32">
        <div className="page-wrap">
          <SectionHeading
            eyebrow="Explore our programs"
            title="Paths of formation."
            description="Each path is coordinated by Religious Education. Registration begins in August. If you are new to the parish, please call the office."
          />
          <div className="mt-16">
            <ProgramGrid />
          </div>
        </div>
      </Section>

      <Section tone="navy" className="py-24 md:py-32">
        <div className="page-wrap">
          <SectionHeading
            eyebrow="All are welcome"
            title="From first questions to a lifetime of faith."
          />
          <div className="mt-16 grid gap-10 md:grid-cols-3 md:divide-x md:divide-gold/15 md:gap-0">
            {[
              {
                title: "Children & youth",
                body: "Age-appropriate catechesis, sacramental preparation, and a place to grow in prayer among friends.",
              },
              {
                title: "Adults",
                body: "OCIA for those exploring the Church, and ongoing formation for those who already belong.",
              },
              {
                title: "Families",
                body: "Marriage and family formation, when offered — because the faith is first taught at home.",
              },
            ].map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08}>
                <article className="h-full md:px-8">
                  <p className="font-display text-xs tracking-[0.28em] text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-5 font-serif text-3xl text-ivory italic">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-stone-light">{item.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <RegistrationCTA
        title="We would be glad to walk with you."
        description="If you are unsure which program fits, begin with a conversation. The parish will help you find the right door."
      />
    </>
  );
}
