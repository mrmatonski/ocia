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

export const educationCalendarEvents: CalendarEvent[] = [
  {
    id: "re-registration",
    title: "Religious Education registration",
    date: "August",
    category: "registration",
    location: "Parish Office, 1465 Grand Avenue",
    notes:
      "Registration begins in August. Call (503) 325-3671 or write to Marty Dursse at marty@stmaryastoria.com. If you are new to the parish, please call the office.",
  },
  {
    id: "ocia-fall",
    title: "OCIA weekly classes",
    date: "Fall",
    category: "class",
    time: "Weekly",
    location: "St. Mary, Star of the Sea",
    notes:
      "An adult who has not been baptized and wishes to learn about becoming Catholic may participate in OCIA. Classes are weekly and begin in the Fall. Call the parish office for the current meeting day and time.",
  },
  {
    id: "daily-mass-pause",
    title: "Daily Masses paused",
    date: "2026-08-11",
    endDate: "2026-09-02",
    category: "break",
    location: "St. Mary, Star of the Sea",
    notes:
      "The parish has announced that daily Masses are cancelled from August 11 through September 2. Sunday Mass continues as published. See announcements for the latest word.",
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
