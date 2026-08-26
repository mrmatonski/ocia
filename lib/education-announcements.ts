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

/*
 * PLACEHOLDER ANNOUNCEMENTS
 * TODO: Replace with official St. Mary Religious Education notices.
 * These entries are structural samples only — not parish communications.
 * Keep newest published posts first in the array if you like; the helpers
 * sort by publishedAt regardless.
 *
 * To post a notice later:
 * 1. Add an object below (or edit one).
 * 2. Use a unique slug for the URL.
 * 3. Set status: "published" and publishedAt to YYYY-MM-DD.
 * 4. Leave image/attachment/externalLink off until a real file or URL exists.
 * 5. Drafts and future dates stay hidden from the public feed.
 */
export const educationAnnouncements: Announcement[] = [
  {
    id: "schedule-update",
    slug: "class-schedule-update",
    title: "Class Schedule Update",
    excerpt:
      "Placeholder notice for a change to class meeting times or dates. Official details will replace this sample.",
    content: `This is a **sample announcement** so families can see how schedule notices will appear on this page.

When a class time or date changes, the parish can publish the details here. Please treat the calendar as a guideline and check this page for the most current information.

## What to do

- Read this notice before assuming a class is cancelled
- Check [Class Schedules](/religious-education/schedules) for weekly gatherings
- Write to the parish if you are unsure whether a class is meeting

*This sample is not an official change to the Religious Education calendar.*`,
    category: "Schedule Update",
    author: "St. Mary Religious Education",
    publishedAt: "2026-08-26",
    status: "published",
    externalLink: {
      label: "View class schedules",
      href: "/religious-education/schedules",
    },
  },
  {
    id: "parent-meeting",
    slug: "upcoming-parent-meeting",
    title: "Upcoming Parent Meeting",
    excerpt:
      "Placeholder notice for a future parent gathering. Date, time, and location will be posted when they are confirmed.",
    content: `This is a sample parent notice. It is not a scheduled meeting.

When the parish confirms a gathering for families, this page can carry:

1. The date and time
2. The place of the meeting
3. Whether children are welcome to attend

Until those details are published, please treat this as a **placeholder** only.`,
    category: "Parent Information",
    publishedAt: "2026-08-20",
    status: "published",
  },
  {
    id: "weather-closure",
    slug: "weather-closure-notice",
    title: "Important Weather Closure",
    excerpt:
      "Placeholder notice for weather-related cancellations. This sample is not an active closure.",
    content: `If weather requires a cancellation, the parish can post it here so families do not rely on an outdated calendar.

**This sample is not an active closure.** Classes are not being cancelled by this notice.

When a real closure is posted, it will say so plainly: which programs are affected, and when gatherings are expected to resume.`,
    category: "Important Reminder",
    author: "St. Mary Religious Education",
    publishedAt: "2026-08-14",
    status: "published",
  },
  {
    id: "new-resource",
    slug: "new-religious-education-resource",
    title: "New Religious Education Resource Available",
    excerpt:
      "Placeholder notice when a new study guide, video, or handbook is posted. Additional resources will appear on the learning page.",
    content: `Links to new materials will appear on the [Videos & Resources](/religious-education/learn) page and can be announced here.

This sample does not add a download. When the parish provides a handbook, study guide, or recording, the announcement can include:

- A short description of the material
- A link to the learning page
- A download, once a real file is placed in the site’s documents folder

*Additional resources will be posted here as they are provided.*`,
    category: "Class Information",
    publishedAt: "2026-08-08",
    status: "published",
    externalLink: {
      label: "Explore resources",
      href: "/religious-education/learn",
    },
  },
  {
    id: "future-example",
    slug: "future-example-notice",
    title: "Future notice (not yet public)",
    excerpt: "Held until its publication date. This entry should not appear on the public feed.",
    content: "This draft-dated sample exists only to keep future notices off the public page until their publishedAt date.",
    category: "General",
    publishedAt: "2027-12-01",
    status: "published",
  },
  {
    id: "draft-example",
    slug: "draft-example-notice",
    title: "Internal draft (not public)",
    excerpt: "Draft announcements are hidden until status is set to published.",
    content: "This draft should never appear on the public announcements page.",
    status: "draft",
    publishedAt: "2026-01-01",
  },
];
