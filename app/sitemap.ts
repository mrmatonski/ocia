import type { MetadataRoute } from "next";
import { getProgramSlugs } from "@/lib/education";
import { site } from "@/lib/site";

const routes = [
  "",
  "/about",
  "/religious-education",
  ...getProgramSlugs().map((slug) => `/religious-education/${slug}`),
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
