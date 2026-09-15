import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContentDetail } from "@/components/education/ContentDetail";
import {
  getContentBySlug,
  getPublishedContentSlugs,
} from "@/lib/education-content";
import { canonicalUrl, pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getPublishedContentSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getContentBySlug(slug);
  if (!item) {
    return { title: "Content not found" };
  }
  const path = `/religious-education/content/${slug}`;
  return {
    ...pageMetadata({
      title: item.title,
      description: item.description,
      path,
    }),
    openGraph: {
      title: `${item.title} | ${site.parish}`,
      description: item.description,
      url: canonicalUrl(path),
      type: "article",
    },
  };
}

export default async function EducationContentItemPage({ params }: Props) {
  const { slug } = await params;
  const item = getContentBySlug(slug);
  if (!item) notFound();
  return <ContentDetail item={item} />;
}
