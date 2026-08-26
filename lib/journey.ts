export type JourneyStage = {
  number: string;
  title: string;
  latin: string;
  description: string;
};

/*
 * Universal structure of Christian initiation, as the Church celebrates
 * conversion through prayerful rites along the OCIA journey.
 */
export const journeyStages: JourneyStage[] = [
  {
    number: "01",
    title: "Inquiry",
    latin: "Precatechumenate",
    description:
      "A season of questions. You are invited to come, listen, and explore the Catholic faith without pressure or expectation. This is a time to be known, to wonder, and to see whether this path is for you.",
  },
  {
    number: "02",
    title: "Catechumenate",
    latin: "Catechumenate",
    description:
      "A longer season of formation. Those who wish to continue are accompanied more deeply into Scripture, the Creed, the sacraments, and the life of the parish — learning not only what the Church believes, but how she lives.",
  },
  {
    number: "03",
    title: "Purification & Enlightenment",
    latin: "Illuminatio",
    description:
      "Typically unfolding in Lent, this is a time of more intense prayer, examination of heart, and preparation for the sacraments of initiation. The Church walks with you toward Easter.",
  },
  {
    number: "04",
    title: "Sacraments of Initiation",
    latin: "Initiatio",
    description:
      "At the Easter Vigil, those who are ready may receive Baptism, Confirmation, and the Eucharist — entering fully into the life of the Catholic Church. The night is ancient, luminous, and unlike any other.",
  },
  {
    number: "05",
    title: "Mystagogy",
    latin: "Mystagogia",
    description:
      "The journey does not end at the font. Mystagogy is the unfolding of the mysteries you have received — learning to live as a Catholic among the people who have become your parish family.",
  },
];
