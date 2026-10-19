import { sundayOciaClassTime } from "@/lib/schedule";
import { getTodayIso } from "@/lib/utils";

export const announcementCategories = [
  "General",
  "Schedule Update",
  "Important Reminder",
  "Event",
  "Parent Information",
  "Class Information",
  "Sacramental Preparation",
] as const;

export type AnnouncementCategory = (typeof announcementCategories)[number];
export type AnnouncementStatus = "published" | "draft";
export type AnnouncementLifecycle = "current" | "upcoming" | "archived";

export type AnnouncementImage = {
  src: string;
  alt: string;
};

export type AnnouncementAttachment = {
  name: string;
  href: string | null;
};

export type AnnouncementLink = {
  label: string;
  href: string;
};

export type Announcement = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category?: AnnouncementCategory;
  author?: string;
  publishedAt: string;
  updatedAt?: string;
  eventDate?: string;
  expiresAt?: string;
  kicker?: string;
  image?: AnnouncementImage;
  attachment?: AnnouncementAttachment;
  externalLink?: AnnouncementLink;
  status: AnnouncementStatus;
};

export function announcementPath(slug: string) {
  return `/religious-education/announcements/${slug}`;
}

function isoDay(value: string) {
  return value.slice(0, 10);
}

export function isAnnouncementPublic(
  announcement: Announcement,
  today = getTodayIso(),
) {
  return (
    announcement.status === "published" &&
    isoDay(announcement.publishedAt) <= today
  );
}

export function getAnnouncementLifecycle(
  announcement: Announcement,
  today = getTodayIso(),
): AnnouncementLifecycle {
  if (announcement.expiresAt && isoDay(announcement.expiresAt) < today) {
    return "archived";
  }
  if (announcement.eventDate) {
    const event = isoDay(announcement.eventDate);
    if (event < today) return "archived";
    if (event > today) return "upcoming";
    return "current";
  }
  return "current";
}

function sortByRecency(a: Announcement, b: Announcement) {
  return isoDay(b.publishedAt).localeCompare(isoDay(a.publishedAt));
}

function sortActive(a: Announcement, b: Announcement) {
  const aEvent = a.eventDate ? isoDay(a.eventDate) : "";
  const bEvent = b.eventDate ? isoDay(b.eventDate) : "";
  if (aEvent && bEvent) return aEvent.localeCompare(bEvent);
  if (aEvent) return -1;
  if (bEvent) return 1;
  return sortByRecency(a, b);
}

export function getPublishedAnnouncements(today?: string) {
  const day = today ?? getTodayIso();
  return educationAnnouncements
    .filter((item) => isAnnouncementPublic(item, day))
    .sort((a, b) => {
      const aLife = getAnnouncementLifecycle(a, day);
      const bLife = getAnnouncementLifecycle(b, day);
      const aArchived = aLife === "archived";
      const bArchived = bLife === "archived";
      if (aArchived !== bArchived) return aArchived ? 1 : -1;
      if (!aArchived && !bArchived) return sortActive(a, b);
      return sortByRecency(a, b);
    });
}

export function getCurrentAnnouncements(today?: string) {
  const day = today ?? getTodayIso();
  return getPublishedAnnouncements(day).filter(
    (item) => getAnnouncementLifecycle(item, day) !== "archived",
  );
}

export function getArchivedAnnouncements(today?: string) {
  const day = today ?? getTodayIso();
  return getPublishedAnnouncements(day).filter(
    (item) => getAnnouncementLifecycle(item, day) === "archived",
  );
}

export function getLatestAnnouncement(today?: string) {
  return getCurrentAnnouncements(today)[0] ?? null;
}

export function getNextClassPath(today?: string) {
  const latest = getLatestAnnouncement(today);
  return latest
    ? announcementPath(latest.slug)
    : "/religious-education/announcements";
}

export function getAnnouncementBySlug(slug: string, today?: string) {
  const announcement = educationAnnouncements.find((item) => item.slug === slug);
  if (!announcement || !isAnnouncementPublic(announcement, today)) {
    return undefined;
  }
  return announcement;
}

export function getPublishedAnnouncementSlugs(today?: string) {
  return getPublishedAnnouncements(today).map((item) => item.slug);
}

export const educationAnnouncements: Announcement[] = [
  {
    id: "ocia-nov-1-shepherds-community",
    slug: "next-class-who-shepherds-the-church-and-the-church-as-community",
    title: "Next Class: Who Shepherds the Church & The Church as Community",
    kicker: "OCIA — November 1, 2026",
    excerpt:
      "Important reminder: everybody in the adult OCIA program is to have a sponsor by next Sunday. If you need help finding or confirming a sponsor, please speak with the OCIA team. Our next gathering explores Who Shepherds the Church and The Church as Community, from Liguori Publications' Journey of Faith Inquiry program.",
    content: `:::note
Everybody in the adult OCIA program is to have a sponsor by next Sunday.
If you need help finding or confirming a sponsor, please speak with the [OCIA team](/contact).
:::

Our next OCIA gathering will explore two topics from Liguori Publications' Journey of Faith Inquiry program: Who Shepherds the Church and The Church as Community. Together we will look at how Jesus Christ continues to care for his people through the Church's pastors, and at the Church as a living community gathered by him.

## Who Shepherds the Church

![A Catholic bishop in choir dress preaches from the ambo, hands open, with the altar and crucifix behind him](/images/announcements/bishop-preaching.jpg "Bishop Robert Brennan preaching at St. Leo Oratory, Columbus. Photograph by Ken Snow, [public domain (CC0)](https://creativecommons.org/publicdomain/zero/1.0/).")

Jesus Christ is the Good Shepherd and the head of the Church. He knows his people and lays down his life for them, and he has not left them without care. He continues to guide and tend the Church through the pastors he calls. Their ministry is not a rank to be enjoyed. It is a share in his own service: teaching the faith handed on from the apostles, celebrating the sacraments proper to each order, and walking with the people of God.

That care takes a distinct shape in each ministry. The pope, the Bishop of Rome and successor of Saint Peter, serves the unity of the whole Church and confirms his brothers and sisters in the apostolic faith. Bishops, as successors of the apostles, are the chief shepherds of their dioceses. They teach, they oversee the sacramental life of the local Church, and they answer for the flock entrusted to them. Priests share in that work as coworkers of the bishop. In a parish they preach the Gospel, celebrate the Eucharist and the Sacrament of Reconciliation, and stay near the ordinary joys and sorrows of the people. Deacons are ordained for service. They proclaim the Gospel, assist at the liturgy, and give themselves to works of charity. For someone finding a way into the Catholic faith, these are not distant offices. They are how the Church teaches you, accompanies you, and helps you grow closer to Jesus Christ. The people walking with you in OCIA are part of that same shepherding.

## The Church as Community

![A bishop stands with parishioners gathered in the church at St. Mary, Star of the Sea](/images/parish/formation.jpg)

The Church is more than the building where we meet, however much that building means to a parish. It is the People of God and the Body of Christ: a community Christ himself gathers in faith, in the worship of Sunday Mass, in the sacraments, in prayer, and in service. Catholics are one because they belong to him. That unity does not erase difference. The Church lives by many gifts, backgrounds, vocations, and responsibilities — longtime parishioners and newcomers, married and single, clergy and lay people. Each person has a place, and no one is asked to become someone else in order to belong.

Belonging is both a gift and a way of life. In the community we receive what we cannot give ourselves: the Word of God, the sacraments, the prayers of people who carry us, and a home in which to grow in holiness. We also take part in the mission we have received. We welcome the person who is new. We support one another when life is heavy. We serve our neighbors. We return, week by week, to Sunday Mass. And when the moment is right, we share the Gospel with simplicity and respect. If you are walking through OCIA, you are already being drawn into this life. You do not have to have everything settled before you are welcome. The parish is learning your name, and you are learning what it means to belong to Christ together with his people.

Come with your questions and an open heart as we continue to discover how Christ shepherds his people and gathers them as one.`,
    category: "Class Information",
    author: "Religious Education",
    publishedAt: "2026-10-19",
    eventDate: "2026-11-01",
    expiresAt: "2026-11-01",
    status: "published",
    externalLink: {
      label: "View class schedule",
      href: "/schedule",
    },
  },
  {
    id: "ocia-oct-18-church-year-places",
    slug: "next-class-the-church-year-and-places-in-a-catholic-church",
    title: "Next Class: The Church Year & Places in a Catholic Church",
    kicker: "OCIA — October 18, 2026",
    excerpt:
      "Our next OCIA gathering will explore two important topics from Liguori Publications' Journey of Faith Inquiry program: The Church Year and Places in a Catholic Church. Together, we will look at the Church's liturgical calendar and the sacred spaces that shape Catholic worship.",
    content: `Our next OCIA gathering will explore two important topics from Liguori Publications' Journey of Faith Inquiry program: The Church Year and Places in a Catholic Church. Together, we will look at the Church's liturgical calendar and the sacred spaces that shape Catholic worship.

## The Church Year

The Catholic Church follows a sacred calendar known as the liturgical year, which guides us through the life, death, and Resurrection of Jesus Christ. In this lesson, we will explore the major liturgical seasons, including Advent, Christmas, Lent, Easter, and Ordinary Time, and discover how each season helps us grow closer to God. We will also learn about important feast days, holy days, and the meaning of the different liturgical colors used throughout the year. Understanding the Church year helps us see how Catholics celebrate and experience the mysteries of our faith throughout every season.

## Places in a Catholic Church

Have you ever wondered why Catholic churches contain an altar, tabernacle, sanctuary, baptismal font, and other sacred furnishings? In this lesson, we will explore the important places and objects found inside a Catholic church and understand their spiritual significance. We will discuss the purpose of the altar, where the Eucharist is celebrated; the tabernacle, where the Blessed Sacrament is reserved; the ambo, where Scripture is proclaimed; and the baptismal font, where new Christians enter the Church through Baptism. We will also discover how Catholic church architecture and sacred spaces help direct our hearts and minds toward worship, prayer, and the presence of God.

Come with your questions and an open heart as we continue exploring the life of the Church in time and in sacred space.`,
    category: "Class Information",
    author: "Religious Education",
    publishedAt: "2026-10-11",
    eventDate: "2026-10-18",
    expiresAt: "2026-10-18",
    status: "published",
    externalLink: {
      label: "View class schedule",
      href: "/schedule",
    },
  },
  {
    id: "ocia-oct-11-prayers-mass",
    slug: "next-class-catholic-prayers-and-practices-and-the-mass",
    title: "Next Class: Catholic Prayers and Practices & The Mass",
    kicker: "OCIA — October 11, 2026",
    excerpt:
      "Our next OCIA gathering will explore two important topics from Liguori Publications' Journey of Faith Inquiry program: Catholic Prayers and Practices and The Mass. Together, we will look at the Church's traditions of prayer and devotion, and at the Holy Mass as the central act of Catholic worship.",
    content: `Our next OCIA gathering will explore two important topics from Liguori Publications' Journey of Faith Inquiry program: Catholic Prayers and Practices and The Mass. Together, we will look at the Church's traditions of prayer and devotion, and at the Holy Mass as the central act of Catholic worship.

## Catholic Prayers and Practices

In this lesson, we will explore the beautiful traditions of Catholic prayer and the devotional practices that help us grow closer to God. We will learn about the Rosary, prayers asking for the intercession of Mary and the saints, Eucharistic Adoration, sacramentals, and the Liturgy of the Hours. We will also discover how these practices complement our participation in the sacraments and help us bring our Catholic faith into everyday life.

## The Mass

In this lesson, we will explore the Holy Mass, the central act of worship in the Catholic Church. We will examine the two principal parts of the Mass—the Liturgy of the Word and the Liturgy of the Eucharist—and learn why Catholics believe Jesus Christ is truly present in the Eucharist. We will also discuss the meaning of the prayers, readings, gestures, and rituals of the Mass, helping participants understand how to participate more fully and reverently in this sacred celebration.

Come with your questions and an open heart as we continue exploring the prayer of the Church and the mystery of the Mass.`,
    category: "Class Information",
    author: "Religious Education",
    publishedAt: "2026-10-09",
    eventDate: "2026-10-11",
    expiresAt: "2026-10-10",
    status: "published",
    externalLink: {
      label: "View class schedule",
      href: "/schedule",
    },
  },
  {
    id: "ocia-oct-4-revelation-prayer",
    slug: "next-class-divine-revelation-and-your-prayer-life",
    title: "Next Class: Divine Revelation & Your Prayer Life",
    kicker: "OCIA — October 4, 2026",
    excerpt:
      "Our next OCIA gathering will explore two important topics from Liguori Publications' Journey of Faith Inquiry program: Divine Revelation and Your Prayer Life. Together, we will look at how God makes Himself known to us and how we respond to that revelation through a living relationship of prayer.",
    content: `Our next OCIA gathering will explore two important topics from Liguori Publications' Journey of Faith Inquiry program: Divine Revelation and Your Prayer Life. Together, we will look at how God makes Himself known to us and how we respond to that revelation through a living relationship of prayer.

## Divine Revelation

God does not remain distant or hidden from humanity. In Divine Revelation, God freely makes Himself known to us and reveals His plan of love and salvation. We will explore how Catholics receive God's revelation through both Sacred Scripture and Sacred Tradition, which together transmit the one Word of God entrusted to the Church.

This class will also help us understand that the Bible is not an isolated collection of writings, but part of God's continuing relationship with His people. Through Scripture and Tradition, interpreted within the life and teaching of the Church, we encounter the story of salvation and ultimately Jesus Christ, who is the fullness of God's revelation.

## Your Prayer Life

Prayer is our response to the God who first calls us into relationship with Him. In this lesson, we will explore what prayer is, why it is essential to the Christian life, and how prayer allows us to grow in friendship and communion with God. Prayer is more than simply asking God for things; it includes praise, thanksgiving, repentance, listening, and bringing the whole of our lives before Him.

We will also look at some of the common difficulties people experience with prayer and how to develop a more consistent and meaningful prayer life. The goal is not to find a perfect technique, but to learn how to make time for God, speak honestly with Him, listen for His guidance, and allow prayer to gradually shape the way we live.

Come with your questions and an open heart as we continue exploring how God reveals Himself to us and how we can respond to Him through prayer.`,
    category: "Class Information",
    author: "Religious Education",
    publishedAt: "2026-10-01",
    eventDate: "2026-10-04",
    expiresAt: "2026-10-04",
    status: "published",
    externalLink: {
      label: "View class schedule",
      href: "/schedule",
    },
  },
  {
    id: "ocia-upcoming-jesus-bible",
    slug: "upcoming-ocia-classes-who-is-jesus-christ-and-the-bible",
    title: "Upcoming OCIA Classes",
    kicker: "OCIA — September 27, 2026",
    excerpt:
      "Who is Jesus Christ, and why is He at the center of the Christian faith? Our upcoming OCIA classes will also turn to the Bible as Sacred Scripture—God's Word, revealing His plan of salvation within the life of the Church.",
    content: `Our upcoming OCIA classes will explore two foundations of the Catholic faith: the person of Jesus Christ, and Sacred Scripture.

## Who Is Jesus Christ?

Who is Jesus Christ, and why is He at the very center of the Christian faith? In this session, we will explore who Jesus is, His life and mission, and the mystery of His being both fully God and fully human. We will look at His death and Resurrection and discover what it means to place our faith in Christ and enter into a relationship with Him.

## The Bible

What is the Bible, and why is it so important to the Catholic faith? In this session, we will discover Sacred Scripture as God's Word and explore how the Bible reveals God's plan of salvation. We will also learn how Catholics understand and interpret Scripture within the life and teaching of the Church, and how God's Word continues to speak to us today.

Come ready to learn, ask questions, and continue growing together in the Catholic faith.`,
    category: "Class Information",
    author: "Religious Education",
    publishedAt: "2026-09-21",
    eventDate: "2026-09-27",
    expiresAt: "2026-09-27",
    status: "published",
    externalLink: {
      label: "View class schedule",
      href: "/schedule",
    },
  },
  {
    id: "ocia-sept-20-faith-trinity",
    slug: "next-class-faith-and-the-most-holy-trinity",
    title: "Next Class: Faith & the Most Holy Trinity",
    kicker: "OCIA — September 20, 2026",
    excerpt:
      "Our next OCIA gathering will explore two foundational topics from Liguori Publications' Journey of Faith Inquiry program: What Is Faith? and Trinity: Three in One.",
    content: `At our next OCIA class, we will explore Lessons Q2 and Q3 of Liguori Publications' Journey of Faith Inquiry program.

## What Is Faith?

We will explore faith as God's gift and our response to Him—a relationship of trust that grows through prayer, learning, participation in the Church, and the way we live.

We will also consider the relationship between faith and reason and why authentic Catholic faith does not require us to abandon reason or truth.

## The Most Holy Trinity

We will then explore the central mystery of the Christian faith: one God in three distinct divine Persons—the Father, the Son, and the Holy Spirit.

We will look at how God reveals Himself as Father, Son, and Holy Spirit and why the Trinity stands at the heart of Catholic belief and Christian life.

Come ready to learn, ask questions, and continue growing together in the Catholic faith.`,
    category: "Class Information",
    author: "Religious Education",
    publishedAt: "2026-09-15",
    eventDate: "2026-09-20",
    expiresAt: "2026-09-20",
    status: "published",
    externalLink: {
      label: "View class schedule",
      href: "/schedule",
    },
  },
  {
    id: "daily-mass-pause",
    slug: "daily-masses-august-11-september-2",
    title: "Daily Masses paused through September 2",
    excerpt:
      "Daily Masses at St. Mary were cancelled from August 11 through September 2. Sunday Mass continued as published.",
    content: `The parish announced that **daily Masses were cancelled from August 11 through September 2**.

Sunday Mass at St. Mary continued as published:

- 8:30 a.m.
- 10:30 a.m.
- Noon (Spanish)

The Saturday Vigil Mass at St. Francis de Sales Mission in Hammond remained at 4:00 p.m.

If you are unsure whether a weekday liturgy is meeting, call the parish office at (503) 325-3671.`,
    category: "Schedule Update",
    author: "St. Mary, Star of the Sea",
    publishedAt: "2026-08-11",
    expiresAt: "2026-09-02",
    status: "published",
    externalLink: {
      label: "Parish website",
      href: "https://stmaryastoria.com/",
    },
  },
  {
    id: "re-registration",
    slug: "religious-education-registration-begins-in-august",
    title: "Religious Education registration begins in August",
    excerpt:
      "Registration for the formation year begins in August. If you are new to the parish, please call the office.",
    content: `**Registration begins in August.**

Religious Education at St. Mary includes:

- Kindergarten through fifth grade — Penance and First Holy Communion
- Youth Group for grades 6 through high school, with Confirmation every two years
- Adult Education — OCIA, for unbaptized adults wishing to become Catholic

Marty Dursse, Director of Religious Education, can be reached at marty@stmaryastoria.com. The parish office is open Tuesday–Friday, 9:00 a.m. – 4:00 p.m. (closed Mondays), at (503) 325-3671.

If you are new to the parish, please call the office.`,
    category: "Parent Information",
    author: "Religious Education",
    publishedAt: "2026-08-01",
    expiresAt: "2026-09-06",
    status: "published",
    externalLink: {
      label: "Religious Education",
      href: "/religious-education",
    },
  },
  {
    id: "ocia-fall",
    slug: "ocia-classes-begin-in-the-fall",
    title: "OCIA classes begin in the Fall",
    excerpt:
      `Weekly adult formation for those exploring the Catholic faith begins in the Fall. ${sundayOciaClassTime}`,
    content: `An adult who has not been baptized and wishes to learn about becoming Catholic may participate in **OCIA** — the Order of Christian Initiation of Adults.

The parish describes this as a formation process focused on conversion. The Church celebrates that conversion through prayerful rites. **Classes are weekly and begin in the Fall.**

${sundayOciaClassTime} The 11:30 AM end is typical, not guaranteed. Call (503) 325-3671 or write to Marty Dursse at marty@stmaryastoria.com with any question about the next gathering.

You do not need to arrive certain. Inquiry is welcome.`,
    category: "Class Information",
    author: "Religious Education",
    publishedAt: "2026-07-20",
    status: "published",
    externalLink: {
      label: "Learn about OCIA",
      href: "/religious-education/ocia",
    },
  },
  {
    id: "reach-re",
    slug: "how-to-reach-religious-education",
    title: "How to reach Religious Education",
    excerpt:
      "Marty Dursse, Director of Religious Education, and the parish office are ready to help families and inquirers.",
    content: `**Marty Dursse** is Director of Religious Education.

- Email: marty@stmaryastoria.com
- Parish office: office@stmaryastoria.com
- Telephone: (503) 325-3671
- Hours: Tuesday–Friday, 9:00 a.m. – 4:00 p.m. (closed Mondays)
- Address: 1465 Grand Avenue, Astoria, OR 97103

Pastor: Fr. William D. Oruko, AJ

To reach a member of the parish staff, call or write using the details above. The contact page also offers an AI assistant for ordinary questions about the Catholic faith and OCIA. That assistant is not a parish staff member.`,
    category: "General",
    author: "St. Mary, Star of the Sea",
    publishedAt: "2026-07-01",
    status: "published",
    externalLink: {
      label: "Contact",
      href: "/contact",
    },
  },
];
