export type Announcement = {
  id: string;
  title: string;
  date: string;
  summary: string;
  body: string;
  category?: string;
  imageLabel?: string;
  attachmentLabel?: string;
  href?: string;
};

/*
 * PLACEHOLDER ANNOUNCEMENTS
 * TODO: Replace with official St. Mary Religious Education notices.
 * These entries are structural samples only — not parish communications.
 * Keep the newest announcements first in this array.
 */
export const educationAnnouncements: Announcement[] = [
  {
    id: "schedule-update",
    title: "Class Schedule Update",
    date: "Date to be announced",
    category: "Schedule",
    summary: "Placeholder notice for a change to class meeting times or dates.",
    body: "[PLACEHOLDER] When a class time or date changes, the parish can publish the details here. Please treat the calendar as a guideline and check this page for the most current information.",
  },
  {
    id: "parent-meeting",
    title: "Upcoming Parent Meeting",
    date: "Date to be announced",
    category: "Families",
    summary: "Placeholder notice for a future parent gathering.",
    body: "[PLACEHOLDER] Parent meeting date, time, and location will be posted here when they are confirmed. This is a sample announcement only.",
  },
  {
    id: "weather-closure",
    title: "Important Weather Closure",
    date: "Date to be announced",
    category: "Closures",
    summary: "Placeholder notice for weather-related cancellations.",
    body: "[PLACEHOLDER] If weather requires a cancellation, the parish can post it here. This sample is not an active closure.",
  },
  {
    id: "new-resource",
    title: "New Religious Education Resource Available",
    date: "Date to be announced",
    category: "Resources",
    summary: "Placeholder notice when a new study guide, video, or handbook is posted.",
    body: "[PLACEHOLDER] Links to new materials will appear on the Videos & Resources page and can be announced here. Additional resources will be posted here as they are provided.",
    href: "/religious-education/learn",
  },
];
