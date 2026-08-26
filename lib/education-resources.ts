export type ResourceType =
  | "Article"
  | "PDF"
  | "Study guide"
  | "Worksheet"
  | "Reading"
  | "External"
  | "Class notes"
  | "Book";

export type EducationResource = {
  id: string;
  title: string;
  description: string;
  type: ResourceType;
  date: string;
  href: string | null;
};

/*
 * PLACEHOLDER LEARNING RESOURCES
 * TODO: Replace with official parish materials. Leave `href` null until a
 * real file or link exists. Do not invent downloads.
 */
export const educationResources: EducationResource[] = [
  {
    id: "study-guide",
    title: "Study guide",
    description:
      "A future home for class study guides. Additional resources will be posted here.",
    type: "Study guide",
    date: "Date to be announced",
    href: null,
  },
  {
    id: "reading",
    title: "Recommended reading",
    description:
      "Catholic educational reading the parish may recommend. Titles will be listed when confirmed.",
    type: "Book",
    date: "Date to be announced",
    href: null,
  },
  {
    id: "worksheet",
    title: "Family worksheet",
    description: "Printable helps for the home, when the parish provides them.",
    type: "Worksheet",
    date: "Date to be announced",
    href: null,
  },
  {
    id: "external",
    title: "External Catholic resources",
    description:
      "Links to trusted Catholic educational material, when the parish chooses to share them.",
    type: "External",
    date: "Date to be announced",
    href: null,
  },
];
