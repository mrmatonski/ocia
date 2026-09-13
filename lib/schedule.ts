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
 * 2026–2027 Religious Education / OCIA calendar
 * with Liguori Journey of Faith lesson topics.
 * Weekly meeting hours are not posted for ordinary class days; do not invent them.
 */
const scheduleRows: ScheduleRow[] = [
  {
    id: "2026-08-16-registration",
    date: "2026-08-16",
    title: "Religious Education registration begins",
    topic: "Religious Education registration begins",
    time: "",
    location: officeLocation,
    instructor: dre,
  },
  {
    id: "2026-09-06-registration-ends",
    date: "2026-09-06",
    title: "Final day for registration",
    topic: "Final day for registration",
    time: "",
    location: officeLocation,
    instructor: dre,
  },
  {
    id: "2026-09-13-first-class",
    date: "2026-09-13",
    title: "First day of classes",
    topic: "Welcome & Introduction to OCIA / Faith Journey (Liguori Inquiry Q1)",
  },
  {
    id: "2026-09-16-ocia",
    date: "2026-09-16",
    title: "OCIA",
    topic: "What Is Faith? (Liguori Inquiry Q2)",
  },
  {
    id: "2026-09-17-ocic",
    date: "2026-09-17",
    title: "OCIC",
    topic: "Introduction to Prayer & Faith Basics",
  },
  {
    id: "2026-09-19-catechist-retreat",
    date: "2026-09-19",
    title: "Catechist retreat & training",
    topic: "Catechist retreat & training",
    time: "",
    instructor: dre,
  },
  {
    id: "2026-09-20-all-classes",
    date: "2026-09-20",
    title: "All Classes",
    topic: "The Trinity (God the Father, Son, & Holy Spirit) (Liguori Inquiry Q3)",
  },
  {
    id: "2026-09-22-parent-orientation",
    date: "2026-09-22",
    title: "Parent Religious Education Orientation",
    topic: "Parent Religious Education Orientation",
    time: "7:00 p.m.",
    instructor: dre,
  },
  {
    id: "2026-09-23-ocia",
    date: "2026-09-23",
    title: "OCIA",
    topic: "Who Is Jesus Christ? (Liguori Inquiry Q4)",
  },
  {
    id: "2026-09-24-ocic",
    date: "2026-09-24",
    title: "OCIC",
    topic: "The Holy Trinity",
  },
  {
    id: "2026-09-27-all-classes",
    date: "2026-09-27",
    title: "All Classes",
    topic: "The Bible & Sacred Scripture (Liguori Inquiry Q5)",
  },
  {
    id: "2026-09-30-ocia",
    date: "2026-09-30",
    title: "OCIA",
    topic: "Divine Revelation & Tradition (Liguori Inquiry Q6)",
  },
  {
    id: "2026-10-01-ocic",
    date: "2026-10-01",
    title: "OCIC",
    topic: "Learning to Read the Bible",
  },
  {
    id: "2026-10-04-all-classes",
    date: "2026-10-04",
    title: "All Classes",
    topic: "The Mass & Liturgy (Liguori Inquiry Q7)",
  },
  {
    id: "2026-10-07-ocia",
    date: "2026-10-07",
    title: "OCIA",
    topic: "The Church & Its Leadership (Liguori Inquiry Q8)",
  },
  {
    id: "2026-10-08-ocic",
    date: "2026-10-08",
    title: "OCIC",
    topic: "Parts of the Mass",
  },
  {
    id: "2026-10-11-all-classes",
    date: "2026-10-11",
    title: "All Classes",
    topic: "Mary & the Saints (Liguori Inquiry Q9)",
  },
  {
    id: "2026-10-14-ocia",
    date: "2026-10-14",
    title: "OCIA",
    topic: "Prayer & Personal Devotion (Liguori Inquiry Q10)",
  },
  {
    id: "2026-10-15-ocic",
    date: "2026-10-15",
    title: "OCIC",
    topic: "Mary, Our Mother",
  },
  {
    id: "2026-10-18-all-classes",
    date: "2026-10-18",
    title: "All Classes",
    topic: "Introduction to Sacraments (Liguori Inquiry Q11)",
  },
  {
    id: "2026-10-21-ocia",
    date: "2026-10-21",
    title: "OCIA",
    topic: "Places in the Church & Liturgical Year (Liguori Inquiry Q12)",
  },
  {
    id: "2026-10-22-ocic",
    date: "2026-10-22",
    title: "OCIC",
    topic: "Sacraments Overview",
  },
  {
    id: "2026-10-25-all-classes",
    date: "2026-10-25",
    title: "All Classes",
    topic: "Child Safety Training / Christian Morality (Liguori Inquiry Q13)",
  },
  {
    id: "2026-10-28-ocia",
    date: "2026-10-28",
    title: "OCIA",
    topic: "The OCIA Process & Rites (Liguori Catechumenate C1)",
  },
  {
    id: "2026-10-29-ocic",
    date: "2026-10-29",
    title: "OCIC",
    topic: "Living as Jesus Taught",
  },
  {
    id: "2026-11-01-all-classes",
    date: "2026-11-01",
    title: "All Classes",
    topic: "All Saints Day / Salvation History (Liguori Catechumenate C2)",
  },
  {
    id: "2026-11-04-ocia",
    date: "2026-11-04",
    title: "OCIA",
    topic: "Sacrament of Baptism (Liguori Catechumenate C3)",
  },
  {
    id: "2026-11-05-ocic",
    date: "2026-11-05",
    title: "OCIC",
    topic: "Sacrament of Baptism",
  },
  {
    id: "2026-11-08-all-classes",
    date: "2026-11-08",
    title: "All Classes",
    topic: "Sacrament of Confirmation (Liguori Catechumenate C4)",
  },
  {
    id: "2026-11-11-ocia",
    date: "2026-11-11",
    title: "OCIA",
    topic: "The Eucharist & Real Presence (Liguori Catechumenate C5)",
  },
  {
    id: "2026-11-12-ocic",
    date: "2026-11-12",
    title: "OCIC",
    topic: "First Holy Communion Preparation",
  },
  {
    id: "2026-11-15-all-classes",
    date: "2026-11-15",
    title: "All Classes",
    topic: "Sacrament of Penance & Reconciliation (Liguori Catechumenate C6)",
  },
  {
    id: "2026-11-18-ocia",
    date: "2026-11-18",
    title: "OCIA",
    topic: "Anointing of the Sick & Healing (Liguori Catechumenate C7)",
  },
  {
    id: "2026-11-19-ocic",
    date: "2026-11-19",
    title: "OCIC",
    topic: "Sacrament of Reconciliation",
  },
  {
    id: "2026-11-22-all-classes",
    date: "2026-11-22",
    title: "All Classes",
    topic: "Holy Orders & Religious Vocation (Liguori Catechumenate C8)",
  },
  {
    id: "2026-11-26-thanksgiving",
    date: "2026-11-26",
    title: "Thanksgiving Day",
    topic: "Thanksgiving Day",
    time: "",
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
    topic: "Second Sunday in Advent — Holy Matrimony & Family (Liguori Catechumenate C9)",
  },
  {
    id: "2026-12-09-ocia",
    date: "2026-12-09",
    title: "OCIA",
    topic: "The Ten Commandments (Liguori Catechumenate C10)",
  },
  {
    id: "2026-12-10-ocic",
    date: "2026-12-10",
    title: "OCIC",
    topic: "Loving God & Neighbor",
  },
  {
    id: "2026-12-13-all-classes",
    date: "2026-12-13",
    title: "All Classes",
    topic: "Third Sunday in Advent — The Beatitudes & Christian Virtues (Liguori Catechumenate C11)",
  },
  {
    id: "2026-12-16-ocia",
    date: "2026-12-16",
    title: "OCIA",
    topic: "Social Justice & Catholic Social Teaching (Liguori Catechumenate C12)",
  },
  {
    id: "2026-12-17-ocic",
    date: "2026-12-17",
    title: "OCIC",
    topic: "Caring for Others",
  },
  {
    id: "2026-12-20-all-classes",
    date: "2026-12-20",
    title: "All Classes",
    topic: "Fourth Sunday in Advent — Dignity of Human Life (Liguori Catechumenate C13)",
  },
  {
    id: "2026-12-25-nativity",
    date: "2026-12-25",
    title: "The Nativity of the Lord",
    topic: "The Nativity of the Lord",
    time: "",
  },
  {
    id: "2026-12-27-no-classes",
    date: "2026-12-27",
    title: "NO CLASSES / Christmas Break",
    topic: "NO CLASSES / Christmas Break",
    time: "",
  },
  {
    id: "2027-01-01-new-year",
    date: "2027-01-01",
    title: "New Year's Day",
    topic: "New Year's Day",
    time: "",
  },
  {
    id: "2027-01-03-no-classes",
    date: "2027-01-03",
    title: "NO CLASSES",
    topic: "NO CLASSES",
    time: "",
  },
  {
    id: "2027-01-10-all-classes",
    date: "2027-01-10",
    title: "All Classes",
    topic: "History of the Catholic Church (Liguori Catechumenate C14)",
  },
  {
    id: "2027-01-13-ocia",
    date: "2027-01-13",
    title: "OCIA",
    topic: "The Creed & Statement of Beliefs (Liguori Catechumenate C15)",
  },
  {
    id: "2027-01-14-ocic",
    date: "2027-01-14",
    title: "OCIC",
    topic: "The Apostles' Creed",
  },
  {
    id: "2027-01-17-no-classes",
    date: "2027-01-17",
    title: "NO CLASSES / MLK Holiday Weekend",
    topic: "NO CLASSES / MLK Holiday Weekend",
    time: "",
  },
  {
    id: "2027-01-20-ocia",
    date: "2027-01-20",
    title: "OCIA",
    topic: "The Last Things – Death, Judgment, Heaven, Hell (Liguori Catechumenate C16)",
  },
  {
    id: "2027-01-21-ocic",
    date: "2027-01-21",
    title: "OCIC",
    topic: "Heaven & Eternal Life",
  },
  {
    id: "2027-01-24-all-classes",
    date: "2027-01-24",
    title: "All Classes",
    topic: "Overview of Lent & Spiritual Preparation (Liguori Enlightenment E1)",
  },
  {
    id: "2027-01-27-ocia",
    date: "2027-01-27",
    title: "OCIA",
    topic: "Discernment & Examining Conscience (Liguori Enlightenment E2)",
  },
  {
    id: "2027-01-28-ocic",
    date: "2027-01-28",
    title: "OCIC",
    topic: "Preparing for Lent",
  },
  {
    id: "2027-02-07-all-classes",
    date: "2027-02-07",
    title: "All Classes",
    topic: "The Creed & Christian Witness (Liguori Enlightenment E3)",
  },
  {
    id: "2027-02-10-ash-wednesday",
    date: "2027-02-10",
    title: "Ash Wednesday",
    topic: "Ash Wednesday",
    time: "",
  },
  {
    id: "2027-02-11-ocia-ocic",
    date: "2027-02-11",
    title: "OCIA / OCIC",
    topic: "The Lord’s Prayer & Lenten Practices (Liguori Enlightenment E4)",
  },
  {
    id: "2027-02-14-no-classes",
    date: "2027-02-14",
    title: "NO CLASSES / President's Day Weekend / First Sunday in Lent",
    topic: "OCIA/OCIC Rite of Election",
    time: "",
  },
  {
    id: "2027-02-21-all-classes",
    date: "2027-02-21",
    title: "All Classes",
    topic: "Second Sunday in Lent — The Scrutinies & Healing (Liguori Enlightenment E5)",
  },
  {
    id: "2027-02-24-ocia",
    date: "2027-02-24",
    title: "OCIA",
    topic: "Holy Week & Paschal Triduum Preparation (Liguori Enlightenment E6)",
  },
  {
    id: "2027-02-25-ocic",
    date: "2027-02-25",
    title: "OCIC",
    topic: "Preparing for Holy Week",
  },
  {
    id: "2027-02-28-all-classes",
    date: "2027-02-28",
    title: "All Classes",
    topic: "Third Sunday in Lent (OCIA/OCIC First Scrutiny) — Jesus, Living Water (Liguori Enlightenment E7)",
  },
  {
    id: "2027-03-03-ocia",
    date: "2027-03-03",
    title: "OCIA",
    topic: "Rites of Initiation Review (Liguori Enlightenment E8)",
  },
  {
    id: "2027-03-04-ocic",
    date: "2027-03-04",
    title: "OCIC",
    topic: "Understanding the Sacraments of Initiation",
  },
  {
    id: "2027-03-07-all-classes",
    date: "2027-03-07",
    title: "All Classes",
    topic: "Fourth Sunday in Lent (OCIA/OCIC Second Scrutiny) — Jesus, Light of the World",
  },
  {
    id: "2027-03-10-ocia",
    date: "2027-03-10",
    title: "OCIA",
    topic: "Spiritual Warfare & Overcoming Temptation",
  },
  {
    id: "2027-03-11-ocic",
    date: "2027-03-11",
    title: "OCIC",
    topic: "Making Good Choices",
  },
  {
    id: "2027-03-14-all-classes",
    date: "2027-03-14",
    title: "All Classes",
    topic: "Fifth Sunday in Lent (OCIA/OCIC Third Scrutiny) — Jesus, Resurrection and Life",
  },
  {
    id: "2027-03-17-ocia",
    date: "2027-03-17",
    title: "OCIA",
    topic: "The Easter Vigil Walkthrough & Mystagogy Preview (Liguori Mystagogy M1)",
  },
  {
    id: "2027-03-18-ocic",
    date: "2027-03-18",
    title: "OCIC",
    topic: "Easter Vigil Rehearsal",
  },
  {
    id: "2027-03-21-no-classes",
    date: "2027-03-21",
    title: "NO CLASSES / Spring Break / Palm Sunday",
    topic: "NO CLASSES / Spring Break / Palm Sunday",
    time: "",
  },
  {
    id: "2027-03-25-holy-thursday",
    date: "2027-03-25",
    title: "Holy Thursday",
    topic: "Holy Thursday",
    time: "",
  },
  {
    id: "2027-03-26-good-friday",
    date: "2027-03-26",
    title: "Good Friday",
    topic: "Good Friday",
    time: "",
  },
  {
    id: "2027-03-27-holy-saturday",
    date: "2027-03-27",
    title: "Holy Saturday",
    topic: "Easter Vigil — Reception of Sacraments",
    time: "",
  },
  {
    id: "2027-03-28-resurrection",
    date: "2027-03-28",
    title: "The Resurrection of the Lord / NO CLASSES",
    topic: "The Resurrection of the Lord / NO CLASSES",
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
