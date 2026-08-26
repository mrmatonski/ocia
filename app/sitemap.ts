import type { MetadataRoute } from "next";
import { announcementPath, getPublishedAnnouncementSlugs } from "@/lib/education-announcements";
import { getProgramSlugs } from "@/lib/education";
import { site } from "@/lib/site";

const hubRoutes = [
  "/religious-education",
  "/religious-education/schedules",
  "/religious-education/calendar",
  "/religious-education/announcements",
  "/religious-education/handbook",
  "/religious-education/learn",
];

const routes = [
  "",
  "/about",
  ...hubRoutes,
  ...getProgramSlugs().map((slug) => `/religious-education/${slug}`),
  ...getPublishedAnnouncementSlugs().map((slug) => announcementPath(slug)),
  "/schedule",
  "/topics",
  "/journey",
  "/faq",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
