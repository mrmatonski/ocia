export type LessonPage = {
  src: string;
  alt: string;
};

export type LessonImage = {
  src: string;
  alt: string;
  caption?: string;
  aspect?: "portrait" | "landscape";
};

export type LessonMaterial = {
  id: string;
  slug: string;
  number: number;
  title: string;
  publisher: string;
  description: string;
  subjects: readonly string[];
  image?: LessonImage;
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

/** Titles in teaching order, for announcements and the next-class summary. */
export function formatLessonSequence(titles: readonly string[]) {
  if (titles.length <= 1) return titles[0] ?? "";
  if (titles.length === 2) return `${titles[0]}, then ${titles[1]}`;
  return `${titles.slice(0, -1).join(", ")}, then ${titles[titles.length - 1]}`;
}

export function upcomingLessonSequence() {
  return formatLessonSequence(lessonMaterials.map((lesson) => lesson.title));
}

export const lessonMaterials: LessonMaterial[] = [
  {
    id: "mary",
    slug: "mary",
    number: 1,
    title: "Mary",
    publisher: "Journey of Faith — Liguori Publications",
    description: `Mary holds a singular place in God's plan of salvation. The eternal Son of God took flesh in her womb, and the Church honors her as the Mother of God. That title does not make her divine. It confesses who her child is: true God and true man. When the angel brought God's invitation, she answered in faith that she was the Lord's servant, and that it should be done to her according to his word. She carried that yes through the hidden years, to the foot of the Cross, and into the prayer of the first disciples.

Catholics honor Mary and ask her to pray for them because she is the first and most faithful disciple, and because she always leads people to her Son. Honor is not worship. Worship belongs to God alone — Father, Son, and Holy Spirit. Asking Mary's intercession is like asking a mother close to Christ to pray with us. It does not replace prayer to God. In this lesson we will look at her place in the story of salvation, her faithful response to God's will, and why love for Mary is a way of staying near Jesus.`,
    subjects: [
      "Mary's place in God's plan of salvation",
      "The Mother of God",
      "Her faithful yes to God's will",
      "Mary as the first disciple",
      "Honor and intercession, not worship",
      "How devotion to Mary leads to Christ",
    ],
    image: {
      src: "/images/parish/grotto-mary.jpg",
      alt: "Statue of Mary with open hands at the outdoor grotto of St. Mary, Star of the Sea",
      caption: "The Marian grotto at St. Mary, Star of the Sea.",
      aspect: "portrait",
    },
    accessUrl: null,
    publicationApproved: false,
  },
  {
    id: "the-saints",
    slug: "the-saints",
    number: 2,
    title: "The Saints",
    publisher: "Journey of Faith — Liguori Publications",
    description: `The saints are men and women made holy by the grace of God. The Church names some of them and keeps their feast days. Countless others are known to God alone. With the faithful still on earth, and with those who have died and are being purified, they belong to the communion of saints. Death does not break the Body of Christ. Heaven and earth remain one family in him.

Catholics honor the saints and learn from their lives because holiness has a human face. Their stories show what it looks like to follow Jesus in different centuries, vocations, and sufferings. Asking a saint to intercede is like asking a holy friend to pray. It does not set anyone beside God, and it does not replace Jesus Christ, the one mediator. Their prayer points toward him. Devotion to the saints is a way of remembering that the Church is larger than any one parish or any one lifetime: a people who already behold the Lord, and who help us on the way to him.`,
    subjects: [
      "Who the saints are",
      "The communion of saints",
      "Learning from their example",
      "Why Catholics honor the saints",
      "Asking for their intercession",
      "How the saints point us to Jesus Christ",
    ],
    accessUrl: null,
    publicationApproved: false,
  },
];
