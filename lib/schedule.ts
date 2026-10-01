import { getTodayIso } from "@/lib/utils";

export type ClassStatus = "upcoming" | "completed";

export type ClassSession = {
  id: string;
  date: string;
  time: string;
  title: string;
  topic: string;
  location: string;
  instructor: string;
};

const parishLocation = "St. Mary, Star of the Sea, 1465 Grand Avenue";
const officeLocation = "Parish Office, 1465 Grand Avenue";
const reOffice = "Religious Education Office";
const dre = "Marty Dursse, Director of Religious Education";

type ScheduleRow = {
  id: string;
  date: string;
  title: string;
  topic: string;
  time?: string;
  location?: string;
  instructor?: string;
};

export const allClassesNote =
  "*all classes = Sacramental preparation, Confirmation, OCIA/OCIC";

/*
 * Official St. Mary Religious Education Calendar 2026–2027.
 * Weekly meeting hours are not posted for ordinary class days; do not invent them.
 */
function row(
  date: string,
  title: string,
  topic?: string,
  extra?: Pick<ScheduleRow, "time" | "location" | "instructor">,
): ScheduleRow {
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 48);
  return {
    id: `${date}-${slug}`,
    date,
    title,
    topic: topic ?? title,
    time: extra?.time ?? "",
    location: extra?.location,
    instructor: extra?.instructor,
  };
}

const office = { time: "", location: officeLocation, instructor: dre };

const scheduleRows: ScheduleRow[] = [
  row("2026-08-16", "Religious Education registration begins", undefined, office),
  row("2026-09-06", "Final day for registration", undefined, office),
  row("2026-09-13", "First day of classes"),
  row("2026-09-16", "OCIA"),
  row("2026-09-17", "OCIC"),
  row("2026-09-19", "Catechist retreat & training"),
  row("2026-09-20", "All classes*", allClassesNote),
  row("2026-09-22", "Parent RE orientation @ 7pm", undefined, { time: "7:00 p.m." }),
  row("2026-09-24", "OCIC"),
  row("2026-09-27", "All classes"),
  row("2026-10-01", "OCIC"),
  row("2026-10-04", "All classes"),
  row("2026-10-08", "OCIC"),
  row("2026-10-11", "All classes"),
  row("2026-10-15", "OCIC"),
  row("2026-10-18", "All classes"),
  row("2026-10-22", "OCIC"),
  row("2026-10-25", "RE classes — Child Safety Training"),
  row("2026-10-29", "OCIC"),
  row("2026-11-01", "All classes"),
  row("2026-11-05", "OCIC"),
  row("2026-11-08", "All classes"),
  row("2026-11-12", "OCIC"),
  row("2026-11-15", "All classes"),
  row("2026-11-19", "OCIC"),
  row("2026-11-22", "All classes"),
  row("2026-11-26", "Thanksgiving Day"),
  row("2026-11-29", "No classes — Thanksgiving break", "First Sunday in Advent"),
  row("2026-12-02", "OCIA"),
  row("2026-12-06", "All classes", "Second Sunday in Advent"),
  row("2026-12-10", "OCIC"),
  row("2026-12-13", "All classes", "Third Sunday in Advent"),
  row("2026-12-17", "OCIC"),
  row("2026-12-20", "All classes", "Fourth Sunday in Advent"),
  row("2026-12-25", "The Nativity of the Lord"),
  row("2026-12-27", "No classes — Christmas break"),
  row("2027-01-01", "New Year's Day"),
  row("2027-01-03", "No classes"),
  row("2027-01-10", "All classes"),
  row("2027-01-14", "OCIC"),
  row("2027-01-17", "No classes — MLK holiday weekend"),
  row("2027-01-21", "OCIC"),
  row("2027-01-24", "All classes"),
  row("2027-01-28", "OCIC"),
  row("2027-02-07", "All classes"),
  row("2027-02-10", "Ash Wednesday"),
  row("2027-02-11", "OCIC"),
  row(
    "2027-02-14",
    "No classes — President's Day weekend",
    "First Sunday in Lent — OCIA/OCIC Rite of Election",
  ),
  row("2027-02-21", "All classes", "Second Sunday in Lent"),
  row("2027-02-25", "OCIC"),
  row(
    "2027-02-28",
    "All classes",
    "Third Sunday in Lent — OCIA/OCIC First Scrutiny",
  ),
  row("2027-03-03", "OCIA"),
  row("2027-03-04", "OCIC"),
  row(
    "2027-03-07",
    "All classes",
    "Fourth Sunday in Lent — OCIA/OCIC Second Scrutiny",
  ),
  row("2027-03-11", "OCIC"),
  row(
    "2027-03-14",
    "All classes",
    "Fifth Sunday in Lent — OCIA/OCIC Third Scrutiny",
  ),
  row("2027-03-18", "OCIC"),
  row("2027-03-21", "No classes — Spring Break", "Palm Sunday"),
  row("2027-03-25", "Holy Thursday"),
  row("2027-03-26", "Good Friday"),
  row("2027-03-27", "Holy Saturday"),
  row("2027-03-28", "The Resurrection of the Lord", "No classes"),
  row("2027-04-04", "RE classes", "Divine Mercy Sunday — NO OCIA/OCIC"),
  row("2027-04-11", "All classes"),
  row("2027-04-14", "OCIA"),
  row("2027-04-15", "OCIC"),
  row("2027-04-18", "All classes"),
  row("2027-04-21", "OCIA/OCIC"),
  row("2027-04-25", "All classes"),
  row("2027-04-28", "OCIA/OCIC"),
  row("2027-05-02", "All classes", "Crowning of Mary"),
  row("2027-05-08", "First Reconciliation rehearsal"),
  row("2027-05-09", "All classes"),
  row(
    "2027-05-16",
    "Pentecost Sunday",
    "OCIA/OCIC — No RE classes — Mother's Day",
  ),
  row("2027-05-22", "First Reconciliation"),
  row("2027-05-30", "No classes — Memorial Day weekend"),
  row("2027-06-06", "Final day of class"),
  row("2027-06-12", "First Holy Communion Rehearsal"),
  row("2027-06-13", "First Holy Communion"),
];

export const classSchedule: ClassSession[] = scheduleRows.map((row) => ({
  id: row.id,
  date: row.date,
  title: row.title,
  topic: row.topic,
  time: row.time ?? "Weekly",
  location: row.location ?? parishLocation,
  instructor: row.instructor ?? reOffice,
}));

export function getClassStatus(date: string, today = getTodayIso()): ClassStatus {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return "upcoming";
  return date < today ? "completed" : "upcoming";
}

export function withStatus(session: ClassSession, today = getTodayIso()) {
  return { ...session, status: getClassStatus(session.date, today) };
}

export function getUpcomingSessions(count = 4) {
  const today = getTodayIso();
  return classSchedule
    .filter((session) => getClassStatus(session.date, today) === "upcoming")
    .slice(0, count);
}

export function getNextSession() {
  return getUpcomingSessions(1)[0] ?? null;
}

export function getScheduleMonths() {
  const seen = new Set<string>();
  const months: { key: string; label: string }[] = [];

  for (const session of classSchedule) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(session.date)) continue;
    const key = session.date.slice(0, 7);
    if (seen.has(key)) continue;
    seen.add(key);
    const date = new Date(`${session.date}T12:00:00`);
    months.push({
      key,
      label: new Intl.DateTimeFormat("en-US", {
        month: "long",
        year: "numeric",
      }).format(date),
    });
  }

  return months;
}
