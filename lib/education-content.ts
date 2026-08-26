import { getTodayIso } from "@/lib/utils";

export const educationContentTypes = [
  "Video",
  "Article",
  "PDF",
  "Study Guide",
  "Lesson",
  "Presentation",
  "External Resource",
] as const;

export const educationContentCategories = [
  "Class Lessons",
  "Catholic Teaching",
  "Scripture",
  "Sacraments",
  "Prayer",
  "Church History",
  "Bible Study",
  "Faith Formation",
  "Supplemental Materials",
] as const;

export type EducationContentType = (typeof educationContentTypes)[number];
export type EducationContentCategory = (typeof educationContentCategories)[number];
export type EducationContentStatus = "published" | "draft";

export type EducationContentThumbnail = {
  src: string;
  alt: string;
};

export type EducationContentResource = {
  label: string;
  href: string;
};

export type EducationVideoEmbed =
  | { kind: "youtube"; id: string }
  | { kind: "vimeo"; id: string }
  | { kind: "file"; src: string };

export type EducationContent = {
  id: string;
  slug: string;
  title: string;
  description: string;
  body?: string;
  type: EducationContentType;
  category: EducationContentCategory;
  thumbnail?: EducationContentThumbnail;
  videoUrl?: string | null;
  contentUrl?: string | null;
  publishedAt: string;
  author?: string;
  duration?: string;
  featured?: boolean;
  resources?: EducationContentResource[];
  relatedSlugs?: string[];
  status: EducationContentStatus;
};

export function contentPath(slug: string) {
  return `/religious-education/content/${slug}`;
}

export function contentActionLabel(type: EducationContentType) {
  return type === "Video" ? "Watch" : "View Content";
}

export function isVisualContent(type: EducationContentType) {
  return type === "Video" || type === "Lesson" || type === "Presentation";
}

function publishedDate(value: string) {
  return value.slice(0, 10);
}

export function isContentPublic(item: EducationContent, today = getTodayIso()) {
  return item.status === "published" && publishedDate(item.publishedAt) <= today;
}

export function getPublishedContent(today?: string) {
  return educationContent
    .filter((item) => isContentPublic(item, today))
    .sort((a, b) => publishedDate(b.publishedAt).localeCompare(publishedDate(a.publishedAt)));
}

export function getFeaturedContent(today?: string) {
  return getPublishedContent(today).find((item) => item.featured);
}

export function getBrowsableContent(today?: string) {
  const featured = getFeaturedContent(today);
  return getPublishedContent(today).filter((item) => item.id !== featured?.id);
}

export function getContentBySlug(slug: string, today?: string) {
  const item = educationContent.find((entry) => entry.slug === slug);
  if (!item || !isContentPublic(item, today)) {
    return undefined;
  }
  return item;
}

export function getPublishedContentSlugs(today?: string) {
  return getPublishedContent(today).map((item) => item.slug);
}

export function getRelatedContent(item: EducationContent, today?: string) {
  const slugs = item.relatedSlugs ?? [];
  return slugs
    .map((slug) => getContentBySlug(slug, today))
    .filter((related): related is EducationContent => Boolean(related && related.slug !== item.slug));
}

export function getVideoEmbed(url: string): EducationVideoEmbed | null {
  try {
    const parsed = new URL(url);
    if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
      return null;
    }

    const host = parsed.hostname.replace(/^www\./, "");

    if (host === "youtu.be") {
      const id = parsed.pathname.split("/").filter(Boolean)[0];
      return id ? { kind: "youtube", id } : null;
    }

    if (host === "youtube.com" || host === "youtube-nocookie.com") {
      const fromQuery = parsed.searchParams.get("v");
      const fromPath = parsed.pathname.match(/\/(?:embed|shorts)\/([^/]+)/)?.[1];
      const id = fromQuery ?? fromPath;
      return id ? { kind: "youtube", id } : null;
    }

    if (host === "vimeo.com" || host === "player.vimeo.com") {
      const id = parsed.pathname.split("/").filter(Boolean).pop();
      return id && /^\d+$/.test(id) ? { kind: "vimeo", id } : null;
    }

    if (/\.(mp4|webm|ogg)$/i.test(parsed.pathname)) {
      return { kind: "file", src: url };
    }

    return null;
  } catch {
    return null;
  }
}

/*
 * PLACEHOLDER CONTENT LIBRARY
 * TODO: Replace with official Religious Education materials.
 * Do not treat these entries as published parish lessons or curriculum.
 * Leave videoUrl, contentUrl, thumbnail, and resources unset until a real
 * file or link exists — do not invent recordings, instructors, or downloads.
 *
 * Categories are organizational labels for this library, not official
 * St. Mary program names.
 */
export const educationContent: EducationContent[] = [
  {
    id: "featured-lesson",
    slug: "featured-lesson-coming-soon",
    title: "Featured lesson coming soon",
    description:
      "A featured recording or class lesson will appear here when the parish posts it.",
    body: `This is a **placeholder** for a featured Religious Education lesson.

When a recording, presentation, or class material is provided, families will be able to open it from this page.

*Featured lesson coming soon.*`,
    type: "Lesson",
    category: "Class Lessons",
    publishedAt: "2026-08-22",
    featured: true,
    relatedSlugs: ["video-content-coming-soon", "understanding-the-eucharist"],
    status: "published",
  },
  {
    id: "understanding-the-eucharist",
    slug: "understanding-the-eucharist",
    title: "Understanding the Eucharist",
    description:
      "Sample study-guide entry. Supplemental material for class will be posted here when the parish provides it.",
    body: `This is a **sample** study-guide entry — not an official parish handout.

When a reading, worksheet, or class note is provided, it can be linked from this page.

*Additional Religious Education resources will be posted here.*`,
    type: "Study Guide",
    category: "Sacraments",
    publishedAt: "2026-08-18",
    relatedSlugs: ["featured-lesson-coming-soon", "additional-class-resources"],
    status: "published",
  },
  {
    id: "video-coming-soon",
    slug: "video-content-coming-soon",
    title: "Video content coming soon",
    description:
      "Instructional recordings in the Catholic faith will be posted here as they become available.",
    body: `This is a **placeholder** for an instructional video.

No recording has been posted yet. When the parish provides a lesson, it can be watched from this page.

*Video content coming soon.*`,
    type: "Video",
    category: "Catholic Teaching",
    publishedAt: "2026-08-12",
    relatedSlugs: ["scripture-study-recording", "featured-lesson-coming-soon"],
    status: "published",
  },
  {
    id: "scripture-study",
    slug: "scripture-study-recording",
    title: "Scripture study recording",
    description:
      "A place for Bible study recordings for families and classes. Video content coming soon.",
    body: `This is a **placeholder** for a Scripture study recording.

It is not a published parish Bible study. When a recording is provided, it will appear here.

*Video content coming soon.*`,
    type: "Video",
    category: "Scripture",
    publishedAt: "2026-08-06",
    relatedSlugs: ["video-content-coming-soon"],
    status: "published",
  },
  {
    id: "additional-resources",
    slug: "additional-class-resources",
    title: "Additional class resources",
    description:
      "PDFs, handouts, and other study materials will be listed here as the parish provides them.",
    body: `This is a **placeholder** for downloadable class material.

Leave the file link empty until a real document is placed in the site’s documents folder.

*Additional Religious Education resources will be posted here.*`,
    type: "PDF",
    category: "Supplemental Materials",
    publishedAt: "2026-07-30",
    relatedSlugs: ["understanding-the-eucharist"],
    status: "published",
  },
  {
    id: "draft-example",
    slug: "draft-content-example",
    title: "Draft content example",
    description: "Draft entries stay hidden from the public library.",
    type: "Article",
    category: "Faith Formation",
    publishedAt: "2026-01-01",
    status: "draft",
  },
  {
    id: "future-example",
    slug: "future-content-example",
    title: "Future content example",
    description: "Items dated in the future stay hidden until that date.",
    type: "Article",
    category: "Faith Formation",
    publishedAt: "2027-12-01",
    status: "published",
  },
];
