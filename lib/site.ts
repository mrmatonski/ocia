export const site = {
  name: "OCIA",
  fullName: "Order of Christian Initiation of Adults",
  parish: "St. Mary, Star of the Sea",
  parishFull: "St. Mary, Star of the Sea Catholic Church",
  city: "Astoria, Oregon",
  title: "OCIA | St. Mary, Star of the Sea",
  description:
    "Explore the Catholic faith through OCIA at St. Mary, Star of the Sea in Astoria, Oregon.",
  parishUrl: "https://stmaryastoria.com/",
  url: "https://ocia.stmaryastoria.com",
  mission:
    "Our Mission is to build a Roman Catholic faith community. As a sacramental people, we foster the spiritual growth and attend to the social needs of all through prayer, liturgy, education, and service.",
  pastor: "Fr. William D. Oruko, AJ",
};

export const contactPlaceholders = {
  coordinatorName: "Marty Dursse",
  coordinatorTitle: "Director of Religious Education",
  email: "marty@stmaryastoria.com",
  officeEmail: "office@stmaryastoria.com",
  phone: "(503) 325-3671",
  location: "St. Mary, Star of the Sea, 1465 Grand Avenue",
  addressLine: "1465 Grand Avenue",
  cityLine: "Astoria, OR 97103",
  officeHours: "Tuesday–Friday, 9:00 a.m. – 4:00 p.m. (closed Mondays)",
  missionName: "St. Francis de Sales Mission",
  missionAddress: "867 5th Avenue, Hammond, OR 97121",
};

export const parishImages = {
  exterior: {
    src: "/images/parish/church-exterior.jpg",
    alt: "St. Mary, Star of the Sea Catholic Church in Astoria, Oregon",
    caption: "St. Mary, Star of the Sea — 1465 Grand Avenue, Astoria.",
    objectPosition: "center top",
  },
  farley: {
    src: "/images/parish/church-farley.jpg",
    alt: "St. Mary, Star of the Sea, photograph by Michael Farley, Jr.",
    caption: "Photograph by Michael Farley, Jr.",
    objectPosition: "center 42%",
  },
  grotto: {
    src: "/images/parish/grotto-mary.jpg",
    alt: "The Marian grotto at St. Mary, Star of the Sea",
    caption: "The Marian grotto at St. Mary, Star of the Sea.",
    objectPosition: "center top",
  },
  hammond: {
    src: "/images/parish/church-hammond.jpg",
    alt: "St. Francis de Sales Mission in Hammond, Oregon",
    caption: "St. Francis de Sales Mission — Hammond, Oregon.",
    objectPosition: "40% center",
  },
  formation: {
    src: "/images/parish/formation.jpg",
    alt: "Religious Education at St. Mary, Star of the Sea",
    caption: "Formation in the life of the parish.",
    objectPosition: "center 32%",
  },
  statue: {
    src: "/images/parish/statue.jpg",
    alt: "A sacred image at St. Mary, Star of the Sea",
    objectPosition: "center top",
  },
  crucifix: {
    src: "/images/parish/crucifix.jpg",
    alt: "Crucifix at St. Mary, Star of the Sea",
    objectPosition: "center top",
  },
  sanctuary: {
    src: "/images/parish/sanctuary-candle.jpg",
    alt: "Sanctuary candle at St. Mary, Star of the Sea",
    objectPosition: "center 18%",
  },
  bridge: {
    src: "/images/parish/bridge.jpg",
    alt: "Astoria, where the Columbia River meets the Pacific",
    objectPosition: "center",
  },
};

export function parishImagePosition(src: string) {
  const match = Object.values(parishImages).find((image) => image.src === src);
  return match?.objectPosition ?? "center";
}

export function parishImageBleedClass(src: string) {
  if (src.includes("church-exterior")) {
    return "absolute -top-[5%] -right-[12%] -bottom-[10%] -left-[12%]";
  }
  if (src.includes("sanctuary-candle")) return "absolute -inset-[18%]";
  return "absolute inset-0";
}

export const socialPlaceholders = [
  { label: "Parish website", href: "https://stmaryastoria.com/" },
];
