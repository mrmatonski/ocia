export type LessonPage = {
  src: string;
  alt: string;
};

export type LessonMaterial = {
  id: string;
  slug: string;
  number: number;
  title: string;
  publisher: string;
  description: string;
  subjects: readonly string[];
  /**
   * Publisher-approved digital lesson URL. When set, "Access Lesson Materials"
   * opens this resource instead of the in-site viewer.
   */
  accessUrl?: string | null;
  /**
   * Set true only after explicit permission to reproduce lesson pages online.
   * Do not add public image paths until that permission is confirmed.
   */
  publicationApproved?: boolean;
  pages?: readonly LessonPage[];
};

export function lessonMaterialsPath(slug?: string) {
  return slug ? `/lesson-materials/${slug}` : "/lesson-materials";
}

export function canViewLessonPages(lesson: LessonMaterial) {
  return Boolean(
    lesson.publicationApproved && lesson.pages && lesson.pages.length > 0,
  );
}

export function getPublishedLessons() {
  return lessonMaterials;
}

export function getLessonBySlug(slug: string) {
  return lessonMaterials.find((lesson) => lesson.slug === slug);
}

export const lessonMaterials: LessonMaterial[] = [
  {
    id: "q10-the-church-year",
    slug: "the-church-year",
    number: 10,
    title: "The Church Year",
    publisher: "Journey of Faith — Liguori Publications",
    description:
      "The Catholic Church celebrates the life of Jesus Christ throughout the liturgical year. Beginning with Advent and moving through Christmas, Lent, Easter, and Ordinary Time, we follow the great events of salvation history. In this lesson, we will explore the meaning of each liturgical season, the importance of Sundays and holy days, and how the Church's calendar helps us grow closer to Christ throughout the year.",
    subjects: [
      "The Liturgical Calendar",
      "Advent and Christmas",
      "Lent and Holy Week",
      "Easter and Ordinary Time",
      "Liturgical Colors and Their Meanings",
      "The Importance of Sunday",
      "Holy Days of Obligation",
    ],
    accessUrl: null,
    publicationApproved: false,
  },
  {
    id: "q11-places-in-a-catholic-church",
    slug: "places-in-a-catholic-church",
    number: 11,
    title: "Places in a Catholic Church",
    publisher: "Journey of Faith — Liguori Publications",
    description:
      "Every Catholic church is a sacred space designed to bring us closer to God through worship, prayer, and the celebration of the sacraments. In this lesson, we will explore the important places and sacred objects found inside a Catholic church, including the sanctuary, altar, tabernacle, ambo, baptismal font, and Stations of the Cross. We will also discover the significance of sacred vessels, religious images, and other elements that enrich Catholic worship. By understanding these sacred spaces and symbols, we can develop a deeper appreciation for the Mass, the Eucharist, and the traditions of our Catholic faith.",
    subjects: [
      "The Sanctuary and Altar",
      "The Ambo and Liturgy of the Word",
      "The Tabernacle and Blessed Sacrament",
      "The Baptismal Font",
      "The Paschal Candle",
      "The Crucifix and Stations of the Cross",
      "Sacred Vessels and Vestments",
      "Catholic Symbols and Religious Images",
      "Shrines and Places of Pilgrimage",
    ],
    accessUrl: null,
    publicationApproved: false,
  },
];
