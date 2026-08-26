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

/*
 * PLACEHOLDER CALENDAR EVENTS
 * TODO: Replace with the official parish Religious Education calendar.
 * Dates, times, and titles below are structural examples only.
 * They are not published parish events.
 */
export const educationCalendarEvents: CalendarEvent[] = [
  {
    id: "placeholder-registration",
    title: "Registration period",
    date: "TBD",
    category: "registration",
    notes:
      "[PLACEHOLDER] Registration dates will be published here when the parish confirms them.",
  },
  {
    id: "placeholder-class-year",
    title: "Formation year gatherings",
    date: "TBD",
    category: "class",
    time: "Details coming soon",
    location: "[LOCATION PLACEHOLDER]",
    notes:
      "[PLACEHOLDER] Weekly class dates will follow the official schedule. See Class Schedules.",
  },
  {
    id: "placeholder-parent",
    title: "Parent meeting",
    date: "TBD",
    category: "parent",
    time: "Details coming soon",
    location: "[LOCATION PLACEHOLDER]",
    notes: "[PLACEHOLDER] Parent meeting details will be updated soon.",
  },
  {
    id: "placeholder-sacrament",
    title: "Sacramental preparation",
    date: "TBD",
    category: "sacrament",
    notes:
      "[PLACEHOLDER] First Communion, Confirmation, and related dates will appear here when confirmed.",
  },
  {
    id: "placeholder-break",
    title: "Seasonal break",
    date: "TBD",
    category: "break",
    notes: "[PLACEHOLDER] Breaks in the formation year will be listed when the parish calendar is set.",
  },
  {
    id: "placeholder-holiday",
    title: "Holy day / holiday",
    date: "TBD",
    category: "holiday",
    notes:
      "[PLACEHOLDER] Holy days and holidays that affect Religious Education will be noted here.",
  },
];
