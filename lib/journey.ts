export type JourneyStage = {
  number: string;
  title: string;
  latin: string;
  description: string;
};

/*
 * PLACEHOLDER JOURNEY STAGES
 * TODO: Replace with the parish's official explanation of the OCIA process.
 * These stages reflect the universal structure of Christian initiation
 * and are not a parish-specific pastoral plan.
 */
export const journeyStages: JourneyStage[] = [
  {
    number: "01",
    title: "Inquiry",
    latin: "Precatechumenate",
    description:
      "[PLACEHOLDER] A season of questions. You are invited to come, listen, and explore the Catholic faith without pressure or expectation. This is a time to be known, to wonder, and to see whether this path is for you.",
  },
  {
    number: "02",
    title: "Catechumenate",
    latin: "Catechumenate",
    description:
      "[PLACEHOLDER] A longer season of formation. Those who wish to continue are accompanied more deeply into Scripture, the Creed, the sacraments, and the life of the parish — learning not only what the Church believes, but how she lives.",
  },
  {
    number: "03",
    title: "Purification & Enlightenment",
    latin: "Illuminatio",
    description:
      "[PLACEHOLDER] Typically unfolding in Lent, this is a time of more intense prayer, examination of heart, and preparation for the sacraments of initiation. The Church walks with you toward Easter.",
  },
  {
    number: "04",
    title: "Sacraments of Initiation",
    latin: "Initiatio",
    description:
      "[PLACEHOLDER] At the Easter Vigil, those who are ready may receive Baptism, Confirmation, and the Eucharist — entering fully into the life of the Catholic Church. The night is ancient, luminous, and unlike any other.",
  },
  {
    number: "05",
    title: "Mystagogy",
    latin: "Mystagogia",
    description:
      "[PLACEHOLDER] The journey does not end at the font. Mystagogy is the unfolding of the mysteries you have received — learning to live as a Catholic among the people who have become your parish family.",
  },
];
