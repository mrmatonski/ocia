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

export const lessonMaterials: LessonMaterial[] = [
  {
    id: "who-shepherds-the-church",
    slug: "who-shepherds-the-church",
    number: 1,
    title: "Who Shepherds the Church",
    publisher: "Journey of Faith — Liguori Publications",
    description: `Jesus Christ is the Good Shepherd and the head of the Church. He knows his people and lays down his life for them, and he has not left them without care. He continues to guide the Church through the pastors he calls. Their ministry is not a rank to be enjoyed. It is a share in his own service: teaching the faith handed on from the apostles, celebrating the sacraments proper to each order, and walking with the people of God.

That care takes a distinct shape in each ministry. The pope, the Bishop of Rome and successor of Saint Peter, serves the unity of the whole Church. Bishops, as successors of the apostles, teach and shepherd the dioceses entrusted to them. Priests share that work as coworkers of the bishop: they preach the Gospel, celebrate the Eucharist and the Sacrament of Reconciliation, and stay near the life of a parish. Deacons are ordained for service. They proclaim the Gospel, assist at the liturgy, and give themselves to works of charity. For someone exploring the Catholic faith, these shepherds are how the Church teaches you, accompanies you, and helps you grow closer to Jesus Christ.`,
    subjects: [
      "Jesus Christ, the Good Shepherd",
      "The pope and the unity of the Church",
      "Bishops as successors of the apostles",
      "Priests and the life of the parish",
      "Deacons and the ministry of service",
      "Leadership as a call to serve",
    ],
    image: {
      src: "/images/announcements/bishop-preaching.jpg",
      alt: "A Catholic bishop preaches from the ambo, hands open, with the altar and crucifix behind him",
      caption:
        "Bishop Robert Brennan preaching at St. Leo Oratory, Columbus. Photograph by Ken Snow, public domain (CC0).",
      aspect: "portrait",
    },
    accessUrl: null,
    publicationApproved: false,
  },
  {
    id: "the-church-as-community",
    slug: "the-church-as-community",
    number: 2,
    title: "The Church as Community",
    publisher: "Journey of Faith — Liguori Publications",
    description: `The Church is more than the building where we gather. It is the People of God and the Body of Christ: a community Jesus himself gathers in faith, in prayer, in the worship of the Mass, and in the sacraments. Catholics are one because they belong to him. That unity does not erase difference. The Church lives through many gifts, backgrounds, vocations, and responsibilities, and each person has a place.

Belonging is both a gift and a way of life. In the community we receive the Word of God, the sacraments, and the encouragement of people who pray with us. We also share what we have received: welcoming the newcomer, serving one another, and carrying Christ's love into ordinary life. If you are in OCIA, you are already being invited into this living community. You are not asked only to attend a class. You are being welcomed among a people who are learning, with you, what it means to belong to Christ.`,
    subjects: [
      "The People of God",
      "The Body of Christ",
      "Unity and many gifts",
      "Prayer, worship, and the sacraments",
      "Welcome, fellowship, and service",
      "Sharing the Church's mission",
    ],
    image: {
      src: "/images/parish/formation.jpg",
      alt: "A bishop stands with parishioners gathered in the church at St. Mary, Star of the Sea",
      aspect: "landscape",
    },
    accessUrl: null,
    publicationApproved: false,
  },
];
