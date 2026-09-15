import type { Metadata } from "next";
import { site } from "@/lib/site";

export function canonicalUrl(path = "/") {
  const base = site.url.replace(/\/$/, "");
  if (!path || path === "/") return `${base}/`;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = canonicalUrl(path);
  const isHome = path === "/";
  const ogTitle = isHome ? site.title : `${title} | ${site.parish}`;

  return {
    title: isHome ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: ogTitle,
      description,
      url,
      type: "website",
      locale: "en_US",
      siteName: site.title,
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
    },
  };
}
