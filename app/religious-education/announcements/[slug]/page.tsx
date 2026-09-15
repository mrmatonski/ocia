import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AnnouncementDetail } from "@/components/education/AnnouncementDetail";
import {
  getAnnouncementBySlug,
  getPublishedAnnouncementSlugs,
} from "@/lib/education-announcements";
import { canonicalUrl, pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getPublishedAnnouncementSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const announcement = getAnnouncementBySlug(slug);
  if (!announcement) {
    return { title: "Announcement not found" };
  }
  const path = `/religious-education/announcements/${slug}`;
  return {
    ...pageMetadata({
      title: announcement.title,
      description: announcement.excerpt,
      path,
    }),
    openGraph: {
      title: `${announcement.title} | ${site.parish}`,
      description: announcement.excerpt,
      url: canonicalUrl(path),
      type: "article",
    },
  };
}

export default async function EducationAnnouncementPage({ params }: Props) {
  const { slug } = await params;
  const announcement = getAnnouncementBySlug(slug);
  if (!announcement) notFound();
  return <AnnouncementDetail announcement={announcement} />;
}
