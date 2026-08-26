import Image from "next/image";
import Link from "next/link";
import { AnnouncementBody } from "@/components/education/AnnouncementBody";
import { EducationBreadcrumbs } from "@/components/education/EducationBreadcrumbs";
import { EducationSubnav } from "@/components/education/EducationSubnav";
import { RegistrationCTA } from "@/components/education/RegistrationCTA";
import { ArrowIcon } from "@/components/icons";
import { Button } from "@/components/ui/Button";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import {
  contentActionLabel,
  contentPath,
  getRelatedContent,
  getVideoEmbed,
  isVisualContent,
  type EducationContent,
} from "@/lib/education-content";
import { formatFullDate } from "@/lib/utils";

function ContentPlayer({ item }: { item: EducationContent }) {
  const embed = item.videoUrl ? getVideoEmbed(item.videoUrl) : null;

  if (embed?.kind === "youtube") {
    return (
      <div className="relative mb-10 aspect-[16/9] overflow-hidden border border-gold/15">
        <iframe
          title={item.title}
          src={`https://www.youtube-nocookie.com/embed/${embed.id}`}
          className="absolute inset-0 h-full w-full"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    );
  }

  if (embed?.kind === "vimeo") {
    return (
      <div className="relative mb-10 aspect-[16/9] overflow-hidden border border-gold/15">
        <iframe
          title={item.title}
          src={`https://player.vimeo.com/video/${embed.id}`}
          className="absolute inset-0 h-full w-full"
          allow="fullscreen; picture-in-picture"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    );
  }

  if (embed?.kind === "file") {
    return (
      <div className="mb-10 overflow-hidden border border-gold/15">
        <video
          className="aspect-[16/9] w-full bg-ink"
          controls
          preload="metadata"
          src={embed.src}
        >
          Your browser cannot play this video.{" "}
          <a href={embed.src} className="text-gold underline-offset-4 hover:underline">
            Open the file
          </a>
          .
        </video>
      </div>
    );
  }

  if (item.thumbnail) {
    return (
      <div className="relative mb-10 aspect-[16/9] overflow-hidden border border-gold/15">
        <Image
          src={item.thumbnail.src}
          alt={item.thumbnail.alt}
          fill
          className="object-cover"
          sizes="(min-width: 768px) 48rem, 100vw"
          priority
        />
      </div>
    );
  }

  if (isVisualContent(item.type)) {
    return (
      <div className="mb-10">
        <ImagePlaceholder
          label="Video content coming soon"
          aspectRatio="16/9"
          alt=""
        />
      </div>
    );
  }

  return null;
}

export function ContentDetail({ item }: { item: EducationContent }) {
  const published = item.publishedAt.slice(0, 10);
  const related = getRelatedContent(item);
  const readyResources = (item.resources ?? []).filter((resource) => resource.href);
  const embeddableVideo = Boolean(item.videoUrl && getVideoEmbed(item.videoUrl));
  const externalVideo = Boolean(item.videoUrl && !embeddableVideo);
  const hasMediaLink = Boolean(externalVideo || item.contentUrl);

  return (
    <>
      <PageHero
        eyebrow={item.category}
        title={item.title}
        description={item.description}
      />
      <Section tone="ivory" className="py-12 md:py-16">
        <div className="page-wrap">
          <EducationBreadcrumbs
            light
            items={[
              { href: "/", label: "Home" },
              { href: "/religious-education", label: "Religious Education" },
              { href: "/religious-education/content", label: "Content & Videos" },
              { label: item.title },
            ]}
          />
          <div className="mt-8">
            <EducationSubnav light />
          </div>
        </div>
      </Section>
      <Section tone="navy" className="py-20 md:py-28">
        <article className="page-wrap max-w-3xl">
          <ContentPlayer item={item} />
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.62rem] tracking-[0.16em] uppercase">
            <span className="text-gold">{item.type}</span>
            <span className="text-gold/35" aria-hidden="true">
              ·
            </span>
            <span className="text-stone">{item.category}</span>
            <span className="text-gold/35" aria-hidden="true">
              ·
            </span>
            <time className="text-stone" dateTime={published}>
              {formatFullDate(item.publishedAt)}
            </time>
            {item.duration ? (
              <>
                <span className="text-gold/35" aria-hidden="true">
                  ·
                </span>
                <span className="text-stone">{item.duration}</span>
              </>
            ) : null}
          </p>
          {item.author ? (
            <p className="mt-3 text-sm text-ivory/75">{item.author}</p>
          ) : null}
          <div className="mt-8">
            {item.body ? (
              <AnnouncementBody content={item.body} />
            ) : (
              <p className="text-base leading-8 text-stone-light">{item.description}</p>
            )}
          </div>
          {hasMediaLink || readyResources.length > 0 ? (
            <div className="mt-10 flex flex-col gap-3 border-t border-gold/15 pt-8 sm:flex-row sm:flex-wrap sm:items-center">
              {externalVideo && item.videoUrl ? (
                <Button href={item.videoUrl}>{contentActionLabel(item.type)}</Button>
              ) : null}
              {item.contentUrl ? (
                <Button href={item.contentUrl} variant={externalVideo ? "secondary" : "primary"}>
                  View Resource
                </Button>
              ) : null}
              {readyResources.map((resource) => (
                <Button key={resource.href} href={resource.href} variant="secondary">
                  {resource.label}
                </Button>
              ))}
            </div>
          ) : (
            <p className="mt-10 text-[0.65rem] tracking-[0.18em] text-stone uppercase">
              {isVisualContent(item.type)
                ? "Video content coming soon"
                : "Additional Religious Education resources will be posted here"}
            </p>
          )}
          {related.length > 0 ? (
            <section className="mt-14 border-t border-gold/15 pt-10" aria-labelledby="related-content">
              <h2 id="related-content" className="font-serif text-3xl text-ivory italic">
                Related lessons
              </h2>
              <ul className="mt-6 space-y-4">
                {related.map((relatedItem) => (
                  <li key={relatedItem.id} className="min-w-0">
                    <Link
                      href={contentPath(relatedItem.slug)}
                      className="group flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                    >
                      <span className="font-serif text-xl text-ivory italic transition-colors group-hover:text-gold-bright">
                        {relatedItem.title}
                      </span>
                      <span className="text-[0.62rem] tracking-[0.16em] text-gold uppercase">
                        {relatedItem.type}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
          <p className="mt-12">
            <Link
              href="/religious-education/content"
              className="inline-flex min-h-11 items-center gap-2 text-[0.68rem] tracking-[0.2em] text-gold uppercase transition-colors hover:text-gold-bright"
            >
              All content &amp; videos
              <ArrowIcon />
            </Link>
          </p>
        </article>
      </Section>
      <RegistrationCTA
        title="Looking for something specific?"
        description="If a lesson or handout has not been posted yet, the parish can point you to what is available."
      />
    </>
  );
}
