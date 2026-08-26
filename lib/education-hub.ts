import type { EducationIcon } from "@/lib/education";

export const educationNavItems = [
  { href: "/religious-education", label: "Overview" },
  { href: "/religious-education/content", label: "Content & Videos" },
  { href: "/religious-education/announcements", label: "Announcements" },
  { href: "/religious-education/schedules", label: "Class Schedules" },
  { href: "/religious-education/calendar", label: "Calendar" },
  { href: "/religious-education/handbook", label: "Handbook" },
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
    href: "/religious-education/content",
    title: "Content & Videos",
    description: "Articles and lessons on OCIA, children's formation, Confirmation, and the worship of the Church.",
    cta: "Explore content",
    icon: "flame",
  },
  {
    href: "/religious-education/announcements",
    title: "Announcements",
    description: "The most current notices for families and catechists.",
    cta: "Read announcements",
    icon: "question",
  },
  {
    href: "/religious-education/schedules",
    title: "Class Schedules",
    description: "Registration begins in August. Weekly OCIA classes begin in the Fall.",
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
    href: "/religious-education/handbook",
    title: "Handbook",
    description: "How to register and how to reach Marty Dursse, Director of Religious Education.",
    cta: "View handbook",
    icon: "book",
  },
];
