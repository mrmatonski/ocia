import Link from "next/link";
import { ParishFillImage } from "@/components/ui/ImagePlaceholder";
import { AnnouncementBody } from "@/components/education/AnnouncementBody";
import { EducationBreadcrumbs } from "@/components/education/EducationBreadcrumbs";
import { EducationSubnav } from "@/components/education/EducationSubnav";
import { RegistrationCTA } from "@/components/education/RegistrationCTA";
import { ArrowIcon } from "@/components/icons";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import type { Announcement } from "@/lib/education-announcements";
import { formatFullDate } from "@/lib/utils";

export function AnnouncementDetail({ announcement }: { announcement: Announcement }) {
  const published = announcement.publishedAt.slice(0, 10);
  const updated = announcement.updatedAt?.slice(0, 10);
  const showUpdated = Boolean(updated && updated !== published);
  const attachmentReady = Boolean(announcement.attachment?.href);

  return (
    <>
      <PageHero
        eyebrow={announcement.category ?? "Announcement"}
        title={announcement.title}
        description={
          announcement.author
            ? `${formatFullDate(announcement.publishedAt)} · ${announcement.author}`
            : formatFullDate(announcement.publishedAt)
        }
      />
      <Section tone="ivory" className="py-12 md:py-16">
        <div className="page-wrap">
          <EducationBreadcrumbs
            light
            items={[
              { href: "/", label: "Home" },
              { href: "/religious-education", label: "Religious Education" },
              { href: "/religious-education/announcements", label: "Announcements" },
              { label: announcement.title },
            ]}
          />
          <div className="mt-8">
            <EducationSubnav light />
          </div>
        </div>
      </Section>
      <Section tone="navy" className="py-20 md:py-28">
        <article className="page-wrap max-w-3xl">
          {announcement.image ? (
            <div className="relative mb-10 aspect-[16/9] overflow-hidden border border-gold/15">
              <ParishFillImage
                src={announcement.image.src}
                alt={announcement.image.alt}
                sizes="(min-width: 768px) 48rem, 100vw"
                priority
              />
            </div>
          ) : null}
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.62rem] tracking-[0.16em] uppercase">
            <span className="text-gold">{announcement.category ?? "Announcement"}</span>
            <span className="text-gold/35" aria-hidden="true">
              ·
            </span>
            <time className="text-stone" dateTime={published}>
              {formatFullDate(announcement.publishedAt)}
            </time>
            {showUpdated && updated ? (
              <>
                <span className="text-gold/35" aria-hidden="true">
                  ·
                </span>
                <span className="text-stone">Updated {formatFullDate(updated)}</span>
              </>
            ) : null}
          </p>
          {announcement.author ? (
            <p className="mt-3 text-sm text-ivory/75">{announcement.author}</p>
          ) : null}
          <div className="mt-8">
            <AnnouncementBody content={announcement.content} />
          </div>
          {announcement.externalLink || attachmentReady ? (
            <div className="mt-10 flex flex-col gap-3 border-t border-gold/15 pt-8 sm:flex-row sm:flex-wrap sm:items-center">
              {announcement.externalLink ? (
                <Button href={announcement.externalLink.href}>
                  {announcement.externalLink.label}
                </Button>
              ) : null}
              {attachmentReady && announcement.attachment?.href ? (
                <Button
                  href={announcement.attachment.href}
                  variant="secondary"
                  ariaLabel={`Download ${announcement.attachment.name}`}
                >
                  View {announcement.attachment.name}
                </Button>
              ) : null}
            </div>
          ) : null}
          <p className="mt-12">
            <Link
              href="/religious-education/announcements"
              className="inline-flex min-h-11 items-center gap-2 text-[0.68rem] tracking-[0.2em] text-gold uppercase transition-colors hover:text-gold-bright"
            >
              All announcements
              <ArrowIcon />
            </Link>
          </p>
        </article>
      </Section>
      <RegistrationCTA
        title="Have a question about a notice?"
        description="Write to the parish if you are unsure whether a class is meeting."
      />
    </>
  );
}
