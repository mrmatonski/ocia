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

/*
 * 2026–2027 Sunday Religious Education / OCIA calendar
 * with Liguori Journey of Faith lesson topics.
 * Weekly meeting hours are not posted for ordinary class days; do not invent them.
 */
const scheduleRows: ScheduleRow[] = [
  {
    id: "2026-08-16-registration",
    date: "2026-08-16",
    title: "Religious Education Registration Begins",
    topic: "Religious Education Registration Begins",
    time: "",
    location: officeLocation,
    instructor: dre,
  },
  {
    id: "2026-09-06-registration-ends",
    date: "2026-09-06",
    title: "Final Day for Registration",
    topic: "Final Day for Registration",
    time: "",
    location: officeLocation,
    instructor: dre,
  },
  {
    id: "2026-09-13-first-class",
    date: "2026-09-13",
    title: "First Day of Classes",
    topic: "Welcome & Introduction to OCIA / Faith Journey (Liguori Inquiry Q1)",
  },
  {
    id: "2026-09-20-all-classes",
    date: "2026-09-20",
    title: "All Classes",
    topic: "What Is Faith? & The Trinity (Liguori Inquiry Q2 & Q3)",
  },
  {
    id: "2026-09-27-all-classes",
    date: "2026-09-27",
    title: "All Classes",
    topic: "The Bible & Sacred Scripture (Liguori Inquiry Q4 & Q5)",
  },
  {
    id: "2026-10-04-all-classes",
    date: "2026-10-04",
    title: "All Classes",
    topic: "Divine Revelation, Mass & Liturgy (Liguori Inquiry Q6 & Q7)",
  },
  {
    id: "2026-10-11-all-classes",
    date: "2026-10-11",
    title: "All Classes",
    topic: "The Church, Mary & the Saints (Liguori Inquiry Q8 & Q9)",
  },
  {
    id: "2026-10-18-all-classes",
    date: "2026-10-18",
    title: "All Classes",
    topic: "Prayer, Personal Devotion & Sacraments Overview (Liguori Inquiry Q10 & Q11)",
  },
  {
    id: "2026-10-25-all-classes",
    date: "2026-10-25",
    title: "All Classes (Child Safety Training)",
    topic: "Places in the Church & Christian Morality (Liguori Inquiry Q12 & Q13)",
  },
  {
    id: "2026-11-01-all-classes",
    date: "2026-11-01",
    title: "All Classes (All Saints Day)",
    topic: "The OCIA Process & Salvation History (Liguori Catechumenate C1 & C2)",
  },
  {
    id: "2026-11-08-all-classes",
    date: "2026-11-08",
    title: "All Classes",
    topic: "Sacraments of Initiation – Baptism & Confirmation (Liguori Catechumenate C3 & C4)",
  },
  {
    id: "2026-11-15-all-classes",
    date: "2026-11-15",
    title: "All Classes",
    topic: "Sacrament of the Eucharist & Real Presence (Liguori Catechumenate C5)",
  },
  {
    id: "2026-11-22-all-classes",
    date: "2026-11-22",
    title: "All Classes",
    topic: "Sacraments of Healing – Reconciliation & Anointing of the Sick (Liguori Catechumenate C6 & C7)",
  },
  {
    id: "2026-11-29-no-classes",
    date: "2026-11-29",
    title: "NO CLASSES / Thanksgiving Break",
    topic: "First Sunday in Advent",
    time: "",
  },
  {
    id: "2026-12-06-all-classes",
    date: "2026-12-06",
    title: "All Classes",
    topic: "Second Sunday in Advent — Holy Orders & Matrimony (Liguori Catechumenate C8 & C9)",
  },
  {
    id: "2026-12-13-all-classes",
    date: "2026-12-13",
    title: "All Classes",
    topic: "Third Sunday in Advent — The Ten Commandments & Christian Virtues (Liguori Catechumenate C10 & C11)",
  },
  {
    id: "2026-12-20-all-classes",
    date: "2026-12-20",
    title: "All Classes",
    topic: "Fourth Sunday in Advent — Catholic Social Teaching & Dignity of Life (Liguori Catechumenate C12 & C13)",
  },
  {
    id: "2026-12-27-no-classes",
    date: "2026-12-27",
    title: "NO CLASSES / Christmas Break",
    topic: "NO CLASSES / Christmas Break",
    time: "",
  },
  {
    id: "2027-01-03-no-classes",
    date: "2027-01-03",
    title: "NO CLASSES / New Year Break",
    topic: "NO CLASSES / New Year Break",
    time: "",
  },
  {
    id: "2027-01-10-all-classes",
    date: "2027-01-10",
    title: "All Classes",
    topic: "History of the Catholic Church (Liguori Catechumenate C14)",
  },
  {
    id: "2027-01-17-no-classes",
    date: "2027-01-17",
    title: "NO CLASSES / MLK Holiday Weekend",
    topic: "NO CLASSES / MLK Holiday Weekend",
    time: "",
  },
  {
    id: "2027-01-24-all-classes",
    date: "2027-01-24",
    title: "All Classes",
    topic: "The Creed, Statement of Beliefs & The Last Things (Liguori Catechumenate C15 & C16)",
  },
  {
    id: "2027-01-31-all-classes",
    date: "2027-01-31",
    title: "All Classes",
    topic: "Overview of Lent & Spiritual Preparation (Liguori Enlightenment E1)",
  },
  {
    id: "2027-02-07-all-classes",
    date: "2027-02-07",
    title: "All Classes",
    topic: "Discernment & Examining Conscience (Liguori Enlightenment E2)",
  },
  {
    id: "2027-02-14-no-classes",
    date: "2027-02-14",
    title: "NO CLASSES / President's Day Weekend",
    topic: "First Sunday in Lent — OCIA/OCIC Rite of Election",
    time: "",
  },
  {
    id: "2027-02-21-all-classes",
    date: "2027-02-21",
    title: "All Classes",
    topic: "Second Sunday in Lent — The Creed, Christian Witness & Lenten Practices (Liguori Enlightenment E3 & E4)",
  },
  {
    id: "2027-02-28-all-classes",
    date: "2027-02-28",
    title: "All Classes",
    topic: "Third Sunday in Lent (OCIA/OCIC First Scrutiny) — The Scrutinies & Healing (Liguori Enlightenment E5)",
  },
  {
    id: "2027-03-07-all-classes",
    date: "2027-03-07",
    title: "All Classes",
    topic: "Fourth Sunday in Lent (OCIA/OCIC Second Scrutiny) — Holy Week Preparation & Jesus, Light of the World (Liguori Enlightenment E6 & E7)",
  },
  {
    id: "2027-03-14-all-classes",
    date: "2027-03-14",
    title: "All Classes",
    topic: "Fifth Sunday in Lent (OCIA/OCIC Third Scrutiny) — Rites of Initiation Review & Jesus, Resurrection and Life (Liguori Enlightenment E8)",
  },
  {
    id: "2027-03-21-no-classes",
    date: "2027-03-21",
    title: "NO CLASSES / Spring Break",
    topic: "Palm Sunday",
    time: "",
  },
  {
    id: "2027-03-28-no-classes",
    date: "2027-03-28",
    title: "NO CLASSES / Resurrection of the Lord",
    topic: "Easter Sunday",
    time: "",
  },
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
