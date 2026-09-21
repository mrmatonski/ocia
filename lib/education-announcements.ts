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
export type AnnouncementLifecycle = "current" | "upcoming" | "archived";

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
  eventDate?: string;
  expiresAt?: string;
  kicker?: string;
  image?: AnnouncementImage;
  attachment?: AnnouncementAttachment;
  externalLink?: AnnouncementLink;
  status: AnnouncementStatus;
};

export function announcementPath(slug: string) {
  return `/religious-education/announcements/${slug}`;
}

function isoDay(value: string) {
  return value.slice(0, 10);
}

export function isAnnouncementPublic(
  announcement: Announcement,
  today = getTodayIso(),
) {
  return (
    announcement.status === "published" &&
    isoDay(announcement.publishedAt) <= today
  );
}

export function getAnnouncementLifecycle(
  announcement: Announcement,
  today = getTodayIso(),
): AnnouncementLifecycle {
  if (announcement.expiresAt && isoDay(announcement.expiresAt) < today) {
    return "archived";
  }
  if (announcement.eventDate) {
    const event = isoDay(announcement.eventDate);
    if (event < today) return "archived";
    if (event > today) return "upcoming";
    return "current";
  }
  return "current";
}

function sortByRecency(a: Announcement, b: Announcement) {
  return isoDay(b.publishedAt).localeCompare(isoDay(a.publishedAt));
}

function sortActive(a: Announcement, b: Announcement) {
  const aEvent = a.eventDate ? isoDay(a.eventDate) : "";
  const bEvent = b.eventDate ? isoDay(b.eventDate) : "";
  if (aEvent && bEvent) return aEvent.localeCompare(bEvent);
  if (aEvent) return -1;
  if (bEvent) return 1;
  return sortByRecency(a, b);
}

export function getPublishedAnnouncements(today?: string) {
  const day = today ?? getTodayIso();
  return educationAnnouncements
    .filter((item) => isAnnouncementPublic(item, day))
    .sort((a, b) => {
      const aLife = getAnnouncementLifecycle(a, day);
      const bLife = getAnnouncementLifecycle(b, day);
      const aArchived = aLife === "archived";
      const bArchived = bLife === "archived";
      if (aArchived !== bArchived) return aArchived ? 1 : -1;
      if (!aArchived && !bArchived) return sortActive(a, b);
      return sortByRecency(a, b);
    });
}

export function getCurrentAnnouncements(today?: string) {
  const day = today ?? getTodayIso();
  return getPublishedAnnouncements(day).filter(
    (item) => getAnnouncementLifecycle(item, day) !== "archived",
  );
}

export function getArchivedAnnouncements(today?: string) {
  const day = today ?? getTodayIso();
  return getPublishedAnnouncements(day).filter(
    (item) => getAnnouncementLifecycle(item, day) === "archived",
  );
}

export function getLatestAnnouncement(today?: string) {
  return getCurrentAnnouncements(today)[0] ?? null;
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
    id: "ocia-upcoming-jesus-bible",
    slug: "upcoming-ocia-classes-who-is-jesus-christ-and-the-bible",
    title: "Upcoming OCIA Classes",
    kicker: "OCIA",
    excerpt: "Who is Jesus Christ? The Bible.",
    content: `Our upcoming OCIA classes will explore two topics:

## Who is Jesus Christ?

## The Bible`,
    category: "Class Information",
    author: "Religious Education",
    publishedAt: "2026-09-21",
    eventDate: "2026-09-27",
    expiresAt: "2026-09-27",
    status: "published",
    externalLink: {
      label: "View class schedule",
      href: "/schedule",
    },
  },
  {
    id: "ocia-sept-20-faith-trinity",
    slug: "next-class-faith-and-the-most-holy-trinity",
    title: "Next Class: Faith & the Most Holy Trinity",
    kicker: "OCIA — September 20, 2026",
    excerpt:
      "Our next OCIA gathering will explore two foundational topics from Liguori Publications' Journey of Faith Inquiry program: What Is Faith? and Trinity: Three in One.",
    content: `At our next OCIA class, we will explore Lessons Q2 and Q3 of Liguori Publications' Journey of Faith Inquiry program.

## What Is Faith?

We will explore faith as God's gift and our response to Him—a relationship of trust that grows through prayer, learning, participation in the Church, and the way we live.

We will also consider the relationship between faith and reason and why authentic Catholic faith does not require us to abandon reason or truth.

## The Most Holy Trinity

We will then explore the central mystery of the Christian faith: one God in three distinct divine Persons—the Father, the Son, and the Holy Spirit.

We will look at how God reveals Himself as Father, Son, and Holy Spirit and why the Trinity stands at the heart of Catholic belief and Christian life.

Come ready to learn, ask questions, and continue growing together in the Catholic faith.`,
    category: "Class Information",
    author: "Religious Education",
    publishedAt: "2026-09-15",
    eventDate: "2026-09-20",
    expiresAt: "2026-09-20",
    status: "published",
    externalLink: {
      label: "View class schedule",
      href: "/schedule",
    },
  },
  {
    id: "daily-mass-pause",
    slug: "daily-masses-august-11-september-2",
    title: "Daily Masses paused through September 2",
    excerpt:
      "Daily Masses at St. Mary were cancelled from August 11 through September 2. Sunday Mass continued as published.",
    content: `The parish announced that **daily Masses were cancelled from August 11 through September 2**.

Sunday Mass at St. Mary continued as published:

- 8:30 a.m.
- 10:30 a.m.
- Noon (Spanish)

The Saturday Vigil Mass at St. Francis de Sales Mission in Hammond remained at 4:00 p.m.

If you are unsure whether a weekday liturgy is meeting, call the parish office at (503) 325-3671.`,
    category: "Schedule Update",
    author: "St. Mary, Star of the Sea",
    publishedAt: "2026-08-11",
    expiresAt: "2026-09-02",
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
    expiresAt: "2026-09-06",
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

To reach a member of the parish staff, call or write using the details above. The contact page also offers an AI assistant for ordinary questions about the Catholic faith and OCIA. That assistant is not a parish staff member.`,
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
