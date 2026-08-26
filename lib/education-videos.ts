export type EducationVideo = {
  id: string;
  title: string;
  description: string;
  category: string;
  duration: string;
  date: string;
  href: string | null;
  thumbnailLabel: string;
};

/*
 * PLACEHOLDER VIDEO ENTRIES
 * TODO: Replace with official parish video links and titles.
 * Do not treat these as published lessons. Leave `href` null until a real
 * video URL exists — do not invent recordings.
 */
export const educationVideos: EducationVideo[] = [
  {
    id: "catholic-teaching",
    title: "Catholic teaching",
    description:
      "A place for recorded instruction in the faith. Video coming soon.",
    category: "Catholic teaching",
    duration: "Duration to be announced",
    date: "Date to be announced",
    href: null,
    thumbnailLabel: "Video placeholder",
  },
  {
    id: "class-instruction",
    title: "Class instruction",
    description:
      "Recorded lessons for families who cannot attend in person, when the parish provides them.",
    category: "Class instruction",
    duration: "Duration to be announced",
    date: "Date to be announced",
    href: null,
    thumbnailLabel: "Video placeholder",
  },
  {
    id: "sacramental-prep",
    title: "Sacramental preparation",
    description:
      "Catechetical material for First Communion, Confirmation, and related preparation.",
    category: "Sacramental preparation",
    duration: "Duration to be announced",
    date: "Date to be announced",
    href: null,
    thumbnailLabel: "Video placeholder",
  },
  {
    id: "bible-study",
    title: "Bible study",
    description: "Scripture study for adults and families, when recordings are available.",
    category: "Bible study",
    duration: "Duration to be announced",
    date: "Date to be announced",
    href: null,
    thumbnailLabel: "Video placeholder",
  },
];
