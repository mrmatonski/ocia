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

/*
 * Parish-published formation notes from stmaryastoria.com.
 * Weekly OCIA meeting days/times are not posted online; do not invent them.
 */
export const classSchedule: ClassSession[] = [
  {
    id: "re-registration",
    date: "August",
    time: "Tuesday–Friday, 9:00 a.m. – 4:00 p.m.",
    title: "Religious Education registration",
    topic: "Registration for the formation year begins in August.",
    location: "Parish Office, 1465 Grand Avenue",
    instructor: "Marty Dursse, Director of Religious Education",
  },
  {
    id: "ocia-fall",
    date: "Fall",
    time: "Weekly",
    title: "OCIA classes begin",
    topic:
      "Weekly adult formation, beginning in the Fall. Call the parish office for the current meeting day and time.",
    location: "St. Mary, Star of the Sea, 1465 Grand Avenue",
    instructor: "Religious Education Office",
  },
];

export function getClassStatus(date: string, today = getTodayIso()): ClassStatus {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return "upcoming";
  return date < today ? "completed" : "upcoming";
}

export function withStatus(session: ClassSession, today = getTodayIso()) {
  return { ...session, status: getClassStatus(session.date, today) };
}

function getTodayIso() {
  const now = new Date();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${now.getFullYear()}-${month}-${day}`;
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
