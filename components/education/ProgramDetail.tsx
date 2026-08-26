import Link from "next/link";
import { ClassScheduleTable } from "@/components/education/ClassScheduleTable";
import { EducationBreadcrumbs } from "@/components/education/EducationBreadcrumbs";
import { EducationSubnav } from "@/components/education/EducationSubnav";
import { InstructorCard } from "@/components/education/InstructorCard";
import { ProgramGlyph } from "@/components/education/ProgramGlyph";
import { RegistrationCTA } from "@/components/education/RegistrationCTA";
import { TopicList } from "@/components/education/TopicList";
import { FAQAccordion } from "@/components/faq/FAQAccordion";
import { ArrowIcon, PinIcon } from "@/components/icons";
import { Button } from "@/components/ui/Button";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Ornament } from "@/components/ui/Ornament";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { EducationProgram } from "@/lib/education";

const SCHEDULE_PREVIEW = 8;

export function ProgramDetail({ program }: { program: EducationProgram }) {
  const scheduleRows = program.scheduleComingSoon
    ? program.schedule
    : program.schedule.slice(0, SCHEDULE_PREVIEW);
  const hasMoreSessions = !program.scheduleComingSoon && program.schedule.length > SCHEDULE_PREVIEW;

  return (
    <>
      <PageHero
        eyebrow="Religious Education"
        title={program.name}
        description={program.tagline}
      />

      <Section tone="ivory" className="py-20 md:py-28">
        <div className="page-wrap">
          <EducationBreadcrumbs
            light
            items={[
              { href: "/", label: "Home" },
              { href: "/religious-education", label: "Religious Education" },
              { label: program.cardTitle },
            ]}
          />
          <div className="mt-8">
            <EducationSubnav light />
          </div>
          <div className="mt-14 grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <p className="eyebrow text-gold-dim">Program overview</p>
              <h2 className="mt-5 font-serif text-4xl text-ink italic md:text-5xl">
                {program.description}
              </h2>
              <Ornament className="mt-7" light align="start" />
              <div className="mt-8 space-y-5 text-base leading-8 text-ink/75">
                {program.overview.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <ImagePlaceholder
                label={`${program.cardTitle} photograph placeholder`}
                aspectRatio="4/5"
                alt=""
              />
            </Reveal>
          </div>
        </div>
      </Section>

      <Section tone="dark" className="py-24 md:py-32">
        <div className="page-wrap">
          <SectionHeading
            eyebrow="Who it's for"
            title="A place at the table."
            description={program.audience}
          />
          <div className="mt-16 grid gap-10 md:grid-cols-3 md:divide-x md:divide-gold/15 md:gap-0">
            {program.audienceGroups.map((group, index) => (
              <Reveal key={group.title} delay={index * 0.08}>
                <article className="h-full md:px-8">
                  <p className="font-display text-xs tracking-[0.28em] text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-5 font-serif text-3xl text-ivory italic">
                    {group.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-stone-light">{group.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="navy" className="py-24 md:py-32">
        <div className="page-wrap">
          <SectionHeading
            eyebrow="What you'll learn"
            title="Class topics."
            description={program.learnIntro}
          />
          <div className="mt-16">
            <TopicList topics={program.topics} note={program.topicsNote} />
          </div>
        </div>
      </Section>

      <Section tone="dark" className="py-24 md:py-32">
        <div className="page-wrap">
          <SectionHeading
            eyebrow="Class schedule"
            title="When we gather."
          />
          <div className="mt-14">
            <ClassScheduleTable
              sessions={scheduleRows}
              comingSoon={program.scheduleComingSoon}
              note={program.scheduleNote}
            />
          </div>
          {hasMoreSessions ? (
            <div className="mt-10 flex justify-center">
              <Button href="/schedule" variant="secondary">
                View the full OCIA schedule
              </Button>
            </div>
          ) : null}
        </div>
      </Section>

      <Section tone="navy" className="py-24 md:py-32">
        <div className="page-wrap grid items-start gap-10 lg:grid-cols-2">
          <Reveal>
            <article className="h-full border border-gold/15 bg-navy-lift/20 p-7 md:p-8">
              <p className="eyebrow">Class location</p>
              <div className="mt-6 flex items-start gap-4">
                <span className="mt-1 text-gold">
                  <PinIcon />
                </span>
                <div>
                  <h3 className="font-serif text-2xl text-ivory italic">{program.location}</h3>
                  <p className="mt-4 text-sm leading-7 text-stone-light">
                    {program.locationNote}
                  </p>
                </div>
              </div>
            </article>
          </Reveal>
          <Reveal delay={0.08}>
            <InstructorCard instructor={program.instructor} />
          </Reveal>
        </div>
        <div className="page-wrap mt-16">
          <p className="eyebrow">Important dates</p>
          <ol className="mt-8 divide-y divide-gold/15 border-y border-gold/20">
            {program.importantDates.map((item) => (
              <li
                key={item.label}
                className="grid gap-2 py-6 md:grid-cols-[14rem_1fr] md:items-baseline md:gap-10"
              >
                <p className="font-serif text-2xl text-ivory italic">{item.label}</p>
                <p className="text-sm leading-7 text-stone-light md:text-base">{item.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {program.relatedLinks && program.relatedLinks.length > 0 ? (
        <Section tone="ivory" className="py-20 md:py-24">
          <div className="page-wrap">
            <SectionHeading
              eyebrow="Continue"
              title="Related pages."
              light
            />
            <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {program.relatedLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="card-hover flex items-center justify-between gap-4 border border-gold/25 bg-cream/40 px-5 py-5 text-ink transition-colors hover:border-gold-dim"
                  >
                    <span className="font-serif text-xl italic">{link.label}</span>
                    <ArrowIcon className="shrink-0 text-gold-dim" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Section>
      ) : null}

      <Section tone="navy" className="py-24 md:py-32">
        <div className="page-wrap max-w-3xl">
          <SectionHeading eyebrow="FAQ" title="Questions, asked plainly." />
          <div className="mt-14">
            <FAQAccordion items={program.faqs} />
          </div>
        </div>
      </Section>

      <Section tone="dark" className="py-20 md:py-24">
        <div className="page-wrap">
          <div className="flex flex-col items-start gap-6 border-y border-gold/15 py-10 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <span className="mt-1 text-gold" aria-hidden="true">
                <ProgramGlyph icon={program.icon} />
              </span>
              <div>
                <p className="eyebrow">Registration</p>
                <p className="mt-3 max-w-xl text-sm leading-7 text-stone-light md:text-base">
                  {program.registration}
                </p>
                <p className="mt-3 max-w-xl text-sm leading-7 text-stone">
                  {program.contactNote}
                </p>
              </div>
            </div>
            <Button href="/contact" className="shrink-0">
              Contact the parish
            </Button>
          </div>
        </div>
      </Section>

      <RegistrationCTA
        title="Begin with a conversation."
        description="Tell us which program you are asking about. The first step is simply to be in touch."
      />
    </>
  );
}
