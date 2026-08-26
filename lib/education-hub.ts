import type { EducationIcon } from "@/lib/education";

export const educationNavItems = [
  { href: "/religious-education", label: "Overview" },
  { href: "/religious-education/schedules", label: "Class Schedules" },
  { href: "/religious-education/calendar", label: "Calendar" },
  { href: "/religious-education/announcements", label: "Announcements" },
  { href: "/religious-education/handbook", label: "Handbook" },
  { href: "/religious-education/learn", label: "Videos & Resources" },
] as const;

export type HubCardItem = {
  href: string;
  title: string;
  description: string;
  cta: string;
  icon: EducationIcon;
};

export const educationHubCards: HubCardItem[] = [
  {
    href: "/religious-education/schedules",
    title: "Class Schedules",
    description: "Weekly gatherings by program, as they are published.",
    cta: "View class schedule",
    icon: "book",
  },
  {
    href: "/religious-education/calendar",
    title: "Calendar",
    description: "A general guideline for the Religious Education year.",
    cta: "View calendar",
    icon: "cross",
  },
  {
    href: "/religious-education/announcements",
    title: "Announcements",
    description: "The most current notices for families and catechists.",
    cta: "Read announcements",
    icon: "question",
  },
  {
    href: "/religious-education/handbook",
    title: "Handbook",
    description: "View or download the current Religious Education handbook.",
    cta: "View handbook",
    icon: "book",
  },
  {
    href: "/religious-education/learn",
    title: "Videos & Resources",
    description: "Instructional videos, study materials, and other helps.",
    cta: "Explore resources",
    icon: "flame",
  },
];
