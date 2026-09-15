import { classSchedule } from "@/lib/schedule";

export type CalendarCategory =
  | "class"
  | "sacrament"
  | "parent"
  | "event"
  | "break"
  | "holiday"
  | "registration"
  | "other";

export type CalendarEvent = {
  id: string;
  title: string;
  date: string;
  endDate?: string;
  time?: string;
  category: CalendarCategory;
  location?: string;
  notes: string;
};

export const calendarCategoryLabels: Record<CalendarCategory, string> = {
  class: "Class",
  sacrament: "Sacramental preparation",
  parent: "Parent meeting",
  event: "Special event",
  break: "Break",
  holiday: "Holiday",
  registration: "Registration",
  other: "Other",
};

export const calendarGuideline =
  "Please note: The Religious Education calendar is a general guideline and may be subject to change. Please check announcements for the most current information.";

function categoryFor(title: string): CalendarCategory {
  if (/registration/i.test(title)) return "registration";
  if (/parent/i.test(title)) return "parent";
  if (/catechist/i.test(title)) return "event";
  if (/NO CLASSES|Break/i.test(title)) return "break";
  if (
    /Thanksgiving Day|Nativity|New Year|Ash Wednesday|Holy Thursday|Good Friday|Holy Saturday|Resurrection/i.test(
      title,
    )
  ) {
    return "holiday";
  }
  return "class";
}

const parishEvents: CalendarEvent[] = [
  {
    id: "daily-mass-pause",
    title: "Daily Masses paused",
    date: "2026-08-11",
    endDate: "2026-09-02",
    category: "break",
    location: "St. Mary, Star of the Sea",
    notes:
      "Daily Masses were cancelled from August 11 through September 2, 2026. Sunday Mass continued as published. For current weekday Mass times, call the parish office.",
  },
  {
    id: "sunday-mass",
    title: "Sunday Mass at St. Mary",
    date: "Sundays",
    time: "8:30 a.m., 10:30 a.m., and Noon (Spanish)",
    category: "other",
    location: "St. Mary, Star of the Sea, 1465 Grand Avenue",
    notes: "Wheelchair accessible through the 15th Street side door.",
  },
  {
    id: "vigil-mass",
    title: "Saturday Vigil Mass",
    date: "Saturdays",
    time: "4:00 p.m.",
    category: "other",
    location: "St. Francis de Sales Mission, Hammond",
    notes: "The Rosary is prayed a half hour before the 4:00 p.m. Vigil Mass.",
  },
  {
    id: "confirmation-cycle",
    title: "Confirmation",
    date: "Every two years",
    category: "sacrament",
    notes:
      "Religious Education coordinates sacramental preparation for Confirmation. The Rite of Confirmation occurs every two years. Ask the Religious Education office for the current cycle.",
  },
];

const scheduleEvents: CalendarEvent[] = classSchedule.map((session) => ({
  id: session.id,
  title: session.title,
  date: session.date,
  time: session.time || undefined,
  category: categoryFor(session.title),
  location: session.location,
  notes: session.topic,
}));

export const educationCalendarEvents: CalendarEvent[] = [
  ...parishEvents,
  ...scheduleEvents,
];
