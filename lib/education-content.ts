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

export const educationContent: EducationContent[] = [
  {
    id: "ocia-at-st-mary",
    slug: "ocia-at-st-mary",
    title: "Adult Education — OCIA",
    description:
      "An adult who has not been baptized and wishes to learn about becoming Catholic may participate in OCIA. Classes are weekly and begin in the Fall.",
    body: `At St. Mary, Star of the Sea, **Adult Education — OCIA** is the path for unbaptized adults who wish to learn about becoming Catholic.

The parish describes this as a formation process focused on conversion. The Church celebrates that conversion through prayerful rites. **Classes are weekly and begin in the Fall.**

You do not need to arrive certain. Call the parish office at (503) 325-3671 or write to Marty Dursse, Director of Religious Education, at marty@stmaryastoria.com.

The weekday and hour are not posted online. The office will tell you when the next gathering meets.`,
    type: "Article",
    category: "Faith Formation",
    thumbnail: {
      src: "/images/parish/formation.jpg",
      alt: "Religious Education at St. Mary, Star of the Sea",
    },
    contentUrl: "https://stmaryastoria.com/religious-education",
    publishedAt: "2026-08-01",
    author: "St. Mary, Star of the Sea",
    featured: true,
    relatedSlugs: ["childrens-religious-education", "gifts-of-the-holy-spirit"],
    status: "published",
  },
  {
    id: "childrens-re",
    slug: "childrens-religious-education",
    title: "Children's Religious Education",
    description:
      "Kindergarten through fifth grade prepare for Penance and First Holy Communion. Registration begins in August.",
    body: `Religious Education for **kindergarten through fifth grade** prepares children for Penance and First Holy Communion.

After First Communion, young people are invited into Youth Group for grades 6 through high school.

**Registration begins in August.** If you are new to the parish, please call the office at (503) 325-3671.

Marty Dursse, Director of Religious Education, can be reached at marty@stmaryastoria.com.`,
    type: "Article",
    category: "Class Lessons",
    thumbnail: {
      src: "/images/parish/grotto-mary.jpg",
      alt: "The Marian grotto at St. Mary, Star of the Sea",
    },
    contentUrl: "https://stmaryastoria.com/religious-education",
    publishedAt: "2026-07-28",
    author: "Religious Education",
    relatedSlugs: ["youth-group-and-confirmation", "ocia-at-st-mary"],
    status: "published",
  },
  {
    id: "youth-confirmation",
    slug: "youth-group-and-confirmation",
    title: "Youth Group and Confirmation",
    description:
      "Grades 6 through high school: education, fellowship, and Confirmation every two years.",
    body: `Youth Group at St. Mary is for **grades 6 through high school**. It is a place of education and fellowship after First Holy Communion.

Religious Education coordinates sacramental preparation for Confirmation. **The Rite of Confirmation occurs every two years.** Ask the office for the current cycle.

The gifts of the Holy Spirit — wisdom, understanding, counsel, fortitude, knowledge, piety, and fear of the Lord — belong to this preparation.

Call (503) 325-3671 or write to marty@stmaryastoria.com.`,
    type: "Lesson",
    category: "Sacraments",
    thumbnail: {
      src: "/images/parish/sanctuary-candle.jpg",
      alt: "Sanctuary candle at St. Mary, Star of the Sea",
    },
    contentUrl: "https://stmaryastoria.com/religious-education",
    publishedAt: "2026-07-22",
    author: "Religious Education",
    relatedSlugs: ["gifts-of-the-holy-spirit", "childrens-religious-education"],
    status: "published",
  },
  {
    id: "gifts-spirit",
    slug: "gifts-of-the-holy-spirit",
    title: "The gifts of the Holy Spirit",
    description:
      "Wisdom, understanding, counsel, fortitude, knowledge, piety, and fear of the Lord — as the Church has received them.",
    body: `The Church names seven gifts of the Holy Spirit:

1. Wisdom
2. Understanding
3. Counsel
4. Fortitude
5. Knowledge
6. Piety
7. Fear of the Lord

These gifts are not a list to memorize and set aside. They are the Spirit's own help for a Christian life — prayed for especially in Confirmation, and needed in ordinary days.

St. Mary's Religious Education page lists these gifts as part of formation. Speak with Marty Dursse if you are preparing for Confirmation, or if you simply wish to understand them more deeply.`,
    type: "Lesson",
    category: "Catholic Teaching",
    thumbnail: {
      src: "/images/parish/statue.jpg",
      alt: "A sacred image at St. Mary, Star of the Sea",
    },
    contentUrl: "https://stmaryastoria.com/religious-education",
    publishedAt: "2026-07-15",
    relatedSlugs: ["youth-group-and-confirmation", "sunday-mass-and-adoration"],
    status: "published",
  },
  {
    id: "mass-adoration",
    slug: "sunday-mass-and-adoration",
    title: "Sunday Mass and Adoration",
    description:
      "Sunday Mass at St. Mary is at 8:30 a.m., 10:30 a.m., and Noon in Spanish. Adoration and Reconciliation are offered as published.",
    body: `**Sunday Mass at St. Mary, Star of the Sea**

- 8:30 a.m.
- 10:30 a.m.
- Noon (Spanish)

The church is wheelchair accessible through the 15th Street side door.

**Saturday Vigil** at St. Francis de Sales Mission, Hammond: 4:00 p.m.

The Rosary is prayed a half hour before the 4:00 p.m. Vigil and the 8:30 and 10:30 a.m. Sunday Masses.

**Adoration at St. Mary:** Wednesday, 9:00 a.m. – 6:00 p.m.; First Friday, 8:00 p.m. through 8:00 a.m. Saturday.

**Reconciliation:** Wednesday at 5:00 p.m. at St. Mary; Saturday at 3:30 p.m. at St. Francis de Sales; or by appointment.

Daily Masses are cancelled from August 11 through September 2. Sunday Mass continues as published.

Parish office: (503) 325-3671 · 1465 Grand Avenue, Astoria, OR 97103`,
    type: "Article",
    category: "Prayer",
    thumbnail: {
      src: "/images/parish/church-farley.jpg",
      alt: "St. Mary, Star of the Sea, photograph by Michael Farley, Jr.",
    },
    contentUrl: "https://stmaryastoria.com/",
    publishedAt: "2026-07-08",
    author: "St. Mary, Star of the Sea",
    relatedSlugs: ["ocia-at-st-mary", "parish-mission"],
    status: "published",
  },
  {
    id: "parish-mission",
    slug: "parish-mission",
    title: "Our mission",
    description:
      "To build a Roman Catholic faith community through prayer, liturgy, education, and service.",
    body: `St. Mary, Star of the Sea Catholic Church, with St. Francis de Sales Mission in Hammond, publishes this mission:

> Our Mission is to build a Roman Catholic faith community. As a sacramental people, we foster the spiritual growth and attend to the social needs of all through prayer, liturgy, education, and service.

The first church in Astoria was blessed and dedicated on Sunday, October 11, 1874. The parish marked 150 years in Astoria on October 10, 2025, with Archbishop Alexander K. Sample.

Pastor: **Fr. William D. Oruko, AJ**

Religious Education is one way that mission takes flesh — for children, youth, and adults, including those who are only beginning to ask.`,
    type: "Article",
    category: "Church History",
    thumbnail: {
      src: "/images/parish/church-exterior.jpg",
      alt: "St. Mary, Star of the Sea Catholic Church in Astoria, Oregon",
    },
    contentUrl: "https://stmaryastoria.com/",
    publishedAt: "2026-06-20",
    author: "St. Mary, Star of the Sea",
    relatedSlugs: ["ocia-at-st-mary", "sunday-mass-and-adoration"],
    status: "published",
  },
];
