import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const routes = ["", "/about", "/schedule", "/topics", "/journey", "/faq", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
