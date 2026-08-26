import { getTodayIso } from "@/lib/utils";

export const announcementCategories = [
  "General",
  "Schedule Update",
  "Important Reminder",
  "Event",
  "Parent Information",
  "Class Information",
  "Sacramental Preparation",
] as const;

export type AnnouncementCategory = (typeof announcementCategories)[number];
export type AnnouncementStatus = "published" | "draft";

export type AnnouncementImage = {
  src: string;
  alt: string;
};

export type AnnouncementAttachment = {
  name: string;
  href: string | null;
};

export type AnnouncementLink = {
  label: string;
  href: string;
};

export type Announcement = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category?: AnnouncementCategory;
  author?: string;
  publishedAt: string;
  updatedAt?: string;
  image?: AnnouncementImage;
  attachment?: AnnouncementAttachment;
  externalLink?: AnnouncementLink;
  status: AnnouncementStatus;
};

export function announcementPath(slug: string) {
  return `/religious-education/announcements/${slug}`;
}

function publishedDate(value: string) {
  return value.slice(0, 10);
}

export function isAnnouncementPublic(
  announcement: Announcement,
  today = getTodayIso(),
) {
  return (
    announcement.status === "published" &&
    publishedDate(announcement.publishedAt) <= today
  );
}

export function getPublishedAnnouncements(today?: string) {
  return educationAnnouncements
    .filter((item) => isAnnouncementPublic(item, today))
    .sort((a, b) => publishedDate(b.publishedAt).localeCompare(publishedDate(a.publishedAt)));
}

export function getAnnouncementBySlug(slug: string, today?: string) {
  const announcement = educationAnnouncements.find((item) => item.slug === slug);
  if (!announcement || !isAnnouncementPublic(announcement, today)) {
    return undefined;
  }
  return announcement;
}

export function getPublishedAnnouncementSlugs(today?: string) {
  return getPublishedAnnouncements(today).map((item) => item.slug);
}

export const educationAnnouncements: Announcement[] = [
  {
    id: "daily-mass-pause",
    slug: "daily-masses-august-11-september-2",
    title: "Daily Masses paused through September 2",
    excerpt:
      "Daily Masses at St. Mary are cancelled from August 11 through September 2. Sunday Mass continues as published.",
    content: `The parish has announced that **daily Masses are cancelled from August 11 through September 2**.

Sunday Mass at St. Mary continues:

- 8:30 a.m.
- 10:30 a.m.
- Noon (Spanish)

The Saturday Vigil Mass at St. Francis de Sales Mission in Hammond remains at 4:00 p.m.

If you are unsure whether a weekday liturgy is meeting, call the parish office at (503) 325-3671.`,
    category: "Schedule Update",
    author: "St. Mary, Star of the Sea",
    publishedAt: "2026-08-11",
    status: "published",
    externalLink: {
      label: "Parish website",
      href: "https://stmaryastoria.com/",
    },
  },
  {
    id: "re-registration",
    slug: "religious-education-registration-begins-in-august",
    title: "Religious Education registration begins in August",
    excerpt:
      "Registration for the formation year begins in August. If you are new to the parish, please call the office.",
    content: `**Registration begins in August.**

Religious Education at St. Mary includes:

- Kindergarten through fifth grade — Penance and First Holy Communion
- Youth Group for grades 6 through high school, with Confirmation every two years
- Adult Education — OCIA, for unbaptized adults wishing to become Catholic

Marty Dursse, Director of Religious Education, can be reached at marty@stmaryastoria.com. The parish office is open Tuesday–Friday, 9:00 a.m. – 4:00 p.m. (closed Mondays), at (503) 325-3671.

If you are new to the parish, please call the office.`,
    category: "Parent Information",
    author: "Religious Education",
    publishedAt: "2026-08-01",
    status: "published",
    externalLink: {
      label: "Religious Education",
      href: "/religious-education",
    },
  },
  {
    id: "ocia-fall",
    slug: "ocia-classes-begin-in-the-fall",
    title: "OCIA classes begin in the Fall",
    excerpt:
      "Weekly adult formation for those exploring the Catholic faith begins in the Fall. Call the office for the current meeting day and time.",
    content: `An adult who has not been baptized and wishes to learn about becoming Catholic may participate in **OCIA** — the Order of Christian Initiation of Adults.

The parish describes this as a formation process focused on conversion. The Church celebrates that conversion through prayerful rites. **Classes are weekly and begin in the Fall.**

The weekday and hour are not posted online. Call (503) 325-3671 or write to Marty Dursse at marty@stmaryastoria.com, and we will tell you when the next gathering meets.

You do not need to arrive certain. Inquiry is welcome.`,
    category: "Class Information",
    author: "Religious Education",
    publishedAt: "2026-07-20",
    status: "published",
    externalLink: {
      label: "Learn about OCIA",
      href: "/religious-education/ocia",
    },
  },
  {
    id: "reach-re",
    slug: "how-to-reach-religious-education",
    title: "How to reach Religious Education",
    excerpt:
      "Marty Dursse, Director of Religious Education, and the parish office are ready to help families and inquirers.",
    content: `**Marty Dursse** is Director of Religious Education.

- Email: marty@stmaryastoria.com
- Parish office: office@stmaryastoria.com
- Telephone: (503) 325-3671
- Hours: Tuesday–Friday, 9:00 a.m. – 4:00 p.m. (closed Mondays)
- Address: 1465 Grand Avenue, Astoria, OR 97103

Pastor: Fr. William D. Oruko, AJ

You may also use the contact page on this site. The form does not send email by itself — please call or write if you need a reply.`,
    category: "General",
    author: "St. Mary, Star of the Sea",
    publishedAt: "2026-07-01",
    status: "published",
    externalLink: {
      label: "Contact",
      href: "/contact",
    },
  },
];
