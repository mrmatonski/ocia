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
 * PLACEHOLDER DATA
 * TODO: Replace this entire schedule with the official St. Mary OCIA class calendar.
 * Dates, times, titles, topics, location, and instructors are sample content only.
 */
export const classSchedule: ClassSession[] = [
  {
    id: "2026-08-19",
    date: "2026-08-19",
    time: "6:30 PM – 8:00 PM",
    title: "Inquiry Evening",
    topic: "An open conversation: Why are you here?",
    location: "Parish Hall",
    instructor: "[PLACEHOLDER]",
  },
  {
    id: "2026-08-26",
    date: "2026-08-26",
    time: "6:30 PM – 8:00 PM",
    title: "Come and See",
    topic: "What does it mean to inquire into the Catholic faith?",
    location: "Parish Hall",
    instructor: "[PLACEHOLDER]",
  },
  {
    id: "2026-09-09",
    date: "2026-09-09",
    time: "6:30 PM – 8:00 PM",
    title: "Introduction to Catholicism",
    topic: "What is the Catholic Church?",
    location: "Parish Hall",
    instructor: "[PLACEHOLDER]",
  },
  {
    id: "2026-09-16",
    date: "2026-09-16",
    time: "6:30 PM – 8:00 PM",
    title: "Sacred Scripture",
    topic: "How Catholics understand the Bible",
    location: "Parish Hall",
    instructor: "[PLACEHOLDER]",
  },
  {
    id: "2026-09-23",
    date: "2026-09-23",
    time: "6:30 PM – 8:00 PM",
    title: "The Living God",
    topic: "Who is God?",
    location: "Parish Hall",
    instructor: "[PLACEHOLDER]",
  },
  {
    id: "2026-09-30",
    date: "2026-09-30",
    time: "6:30 PM – 8:00 PM",
    title: "Jesus Christ",
    topic: "Who is Jesus — and why does He matter?",
    location: "Parish Hall",
    instructor: "[PLACEHOLDER]",
  },
  {
    id: "2026-10-07",
    date: "2026-10-07",
    time: "6:30 PM – 8:00 PM",
    title: "The Holy Spirit",
    topic: "The Lord, the Giver of Life",
    location: "Parish Hall",
    instructor: "[PLACEHOLDER]",
  },
  {
    id: "2026-10-14",
    date: "2026-10-14",
    time: "6:30 PM – 8:00 PM",
    title: "The Church",
    topic: "What is the Church, and why do we need her?",
    location: "Parish Hall",
    instructor: "[PLACEHOLDER]",
  },
  {
    id: "2026-10-21",
    date: "2026-10-21",
    time: "6:30 PM – 8:00 PM",
    title: "Sacred Tradition",
    topic: "Scripture, Tradition, and the Magisterium",
    location: "Parish Hall",
    instructor: "[PLACEHOLDER]",
  },
  {
    id: "2026-10-28",
    date: "2026-10-28",
    time: "6:30 PM – 8:00 PM",
    title: "The Sacramental Life",
    topic: "How God acts through visible signs",
    location: "Parish Hall",
    instructor: "[PLACEHOLDER]",
  },
  {
    id: "2026-11-04",
    date: "2026-11-04",
    time: "6:30 PM – 8:00 PM",
    title: "Baptism",
    topic: "Born of water and the Spirit",
    location: "Parish Hall",
    instructor: "[PLACEHOLDER]",
  },
  {
    id: "2026-11-11",
    date: "2026-11-11",
    time: "6:30 PM – 8:00 PM",
    title: "Confirmation",
    topic: "Sealed with the Gift of the Holy Spirit",
    location: "Parish Hall",
    instructor: "[PLACEHOLDER]",
  },
  {
    id: "2026-11-18",
    date: "2026-11-18",
    time: "6:30 PM – 8:00 PM",
    title: "The Eucharist",
    topic: "The source and summit of the Christian life",
    location: "Parish Hall",
    instructor: "[PLACEHOLDER]",
  },
  {
    id: "2026-12-02",
    date: "2026-12-02",
    time: "6:30 PM – 8:00 PM",
    title: "The Mass",
    topic: "How Catholics pray the liturgy",
    location: "Parish Hall",
    instructor: "[PLACEHOLDER]",
  },
  {
    id: "2026-12-09",
    date: "2026-12-09",
    time: "6:30 PM – 8:00 PM",
    title: "Prayer",
    topic: "How Catholics pray — from the Our Father to silence",
    location: "Parish Hall",
    instructor: "[PLACEHOLDER]",
  },
  {
    id: "2026-12-16",
    date: "2026-12-16",
    time: "6:30 PM – 8:00 PM",
    title: "Mary and the Saints",
    topic: "The Communion of Saints and Catholic devotion",
    location: "Parish Hall",
    instructor: "[PLACEHOLDER]",
  },
  {
    id: "2027-01-06",
    date: "2027-01-06",
    time: "6:30 PM – 8:00 PM",
    title: "The Moral Life",
    topic: "The Ten Commandments and the call to holiness",
    location: "Parish Hall",
    instructor: "[PLACEHOLDER]",
  },
  {
    id: "2027-01-13",
    date: "2027-01-13",
    time: "6:30 PM – 8:00 PM",
    title: "Sin, Grace, and Mercy",
    topic: "What grace does — and why we need it",
    location: "Parish Hall",
    instructor: "[PLACEHOLDER]",
  },
  {
    id: "2027-01-20",
    date: "2027-01-20",
    time: "6:30 PM – 8:00 PM",
    title: "Reconciliation",
    topic: "The sacrament of healing and return",
    location: "Parish Hall",
    instructor: "[PLACEHOLDER]",
  },
  {
    id: "2027-01-27",
    date: "2027-01-27",
    time: "6:30 PM – 8:00 PM",
    title: "Vocation",
    topic: "Marriage, Holy Orders, and the Christian calling",
    location: "Parish Hall",
    instructor: "[PLACEHOLDER]",
  },
  {
    id: "2027-02-10",
    date: "2027-02-10",
    time: "6:30 PM – 8:00 PM",
    title: "Catholic Social Teaching",
    topic: "Faith that takes flesh in the world",
    location: "Parish Hall",
    instructor: "[PLACEHOLDER]",
  },
  {
    id: "2027-02-17",
    date: "2027-02-17",
    time: "6:30 PM – 8:00 PM",
    title: "Ash Wednesday & Lent",
    topic: "Conversion, fasting, and the desert",
    location: "Parish Hall",
    instructor: "[PLACEHOLDER]",
  },
  {
    id: "2027-03-10",
    date: "2027-03-10",
    time: "6:30 PM – 8:00 PM",
    title: "The Scrutiny of the Heart",
    topic: "Purification, enlightenment, and preparing for Easter",
    location: "Parish Hall",
    instructor: "[PLACEHOLDER]",
  },
  {
    id: "2027-03-24",
    date: "2027-03-24",
    time: "6:30 PM – 8:00 PM",
    title: "Holy Week",
    topic: "The Paschal Mystery — from the Cross to the empty tomb",
    location: "Parish Hall",
    instructor: "[PLACEHOLDER]",
  },
  {
    id: "2027-04-07",
    date: "2027-04-07",
    time: "6:30 PM – 8:00 PM",
    title: "Mystagogy",
    topic: "Living the mysteries you have received",
    location: "Parish Hall",
    instructor: "[PLACEHOLDER]",
  },
];

export function getClassStatus(date: string, today = getTodayIso()): ClassStatus {
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
