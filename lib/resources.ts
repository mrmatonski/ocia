import type { HubCardItem } from "@/lib/education-hub";

export type ResourceGroup = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  items: HubCardItem[];
};

export const resourceGroups: ResourceGroup[] = [
  {
    id: "parish",
    eyebrow: "At St. Mary",
    title: "Begin in this parish.",
    description:
      "The surest next step is still a conversation here. These pages walk with you through prayer, class, and the life of St. Mary, Star of the Sea.",
    items: [
      {
        href: "/pray",
        title: "How to Pray",
        description:
          "The prayers Catholics learn first — the Creed, the Our Father, the Hail Mary, and the words of the Mass.",
        cta: "Learn to pray",
        icon: "flame",
      },
      {
        href: "/topics",
        title: "Topics",
        description:
          "The Creed, Scripture, the Church, and the sacraments — themes Catholics ordinarily study in OCIA.",
        cta: "Explore topics",
        icon: "book",
      },
      {
        href: "/schedule",
        title: "Class Schedule",
        description:
          "The 2026–2027 Sunday gatherings, with Liguori Journey of Faith lesson topics as they are published.",
        cta: "View the schedule",
        icon: "users",
      },
      {
        href: "/religious-education/content",
        title: "Content & Videos",
        description:
          "Articles, lessons, and a video on the Mass from Religious Education at St. Mary.",
        cta: "Open the library",
        icon: "chalice",
      },
      {
        href: "https://stmaryastoria.com/",
        title: "Parish Website",
        description:
          "Mass times, parish news, and the wider life of St. Mary, Star of the Sea Catholic Church in Astoria.",
        cta: "Visit stmaryastoria.com",
        icon: "church",
      },
      {
        href: "/contact",
        title: "Talk with Religious Education",
        description:
          "Marty Dursse, Director of Religious Education, will listen to your story and help you take a first step.",
        cta: "Begin a conversation",
        icon: "person",
      },
    ],
  },
  {
    id: "church",
    eyebrow: "The Church",
    title: "Read with those who teach in her name.",
    description:
      "Official sources from the Holy See, the bishops of the United States, and the Archdiocese of Portland — offered as a help, not a substitute for the parish.",
    items: [
      {
        href: "https://www.vatican.va/content/vatican/en.html",
        title: "The Holy See",
        description:
          "The Church in Rome: the Holy Father, the Catechism, conciliar documents, and the life of the universal Church.",
        cta: "Visit the Vatican",
        icon: "church",
      },
      {
        href: "https://www.usccb.org/",
        title: "United States Conference of Catholic Bishops",
        description:
          "Teaching, prayer, and pastoral guidance from the Catholic bishops of the United States.",
        cta: "Visit the USCCB",
        icon: "cross",
      },
      {
        href: "https://archdpdx.org/",
        title: "Archdiocese of Portland",
        description:
          "St. Mary belongs to the Archdiocese of Portland in Oregon. Find local news, vocations, and diocesan ministries.",
        cta: "Visit the Archdiocese",
        icon: "church",
      },
      {
        href: "https://www.usccb.org/beliefs-and-teachings/what-we-believe/catechism/catechism-of-the-catholic-church",
        title: "Catechism of the Catholic Church",
        description:
          "The Church's summary of what she believes, celebrates, lives, and prays — a companion for the whole of OCIA.",
        cta: "Open the Catechism",
        icon: "book",
      },
      {
        href: "https://www.vatican.va/archive/compendium_ccc/documents/archive_2005_compendium-ccc_en.html",
        title: "Compendium of the Catechism",
        description:
          "A shorter question-and-answer companion to the Catechism, suited to first reading and review.",
        cta: "Read the Compendium",
        icon: "book",
      },
      {
        href: "https://www.usccb.org/prayer-and-worship",
        title: "Prayer and Worship",
        description:
          "The liturgy of the Church: the Mass, the sacraments, the liturgical year, and how Catholics pray together.",
        cta: "Explore liturgy",
        icon: "chalice",
      },
    ],
  },
  {
    id: "scripture",
    eyebrow: "Sacred Scripture",
    title: "Open the Word with the Church.",
    description:
      "The Bible as Catholics receive it — including the daily Mass readings, so the Sunday liturgy can begin to sound like home.",
    items: [
      {
        href: "https://bible.usccb.org/",
        title: "New American Bible",
        description:
          "The translation used at Mass in the United States, published by the United States Conference of Catholic Bishops.",
        cta: "Read the Bible",
        icon: "book",
      },
      {
        href: "https://bible.usccb.org/daily-bible-reading",
        title: "Daily Readings",
        description:
          "The Scripture proclaimed at Mass today. A simple way to keep pace with the Church's year.",
        cta: "Today's readings",
        icon: "flame",
      },
      {
        href: "/journey",
        title: "Your Journey",
        description:
          "Inquiry, catechumenate, Lent, the Easter Vigil, and mystagogy — the Church's path of initiation, walked without hurry.",
        cta: "Walk the path",
        icon: "cross",
      },
    ],
  },
];
