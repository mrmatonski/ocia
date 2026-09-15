import { canonicalUrl } from "@/lib/seo";
import { contactPlaceholders, site } from "@/lib/site";
import { getNextSession } from "@/lib/schedule";
import { getLatestAnnouncement } from "@/lib/education-announcements";

const organizationId = `${canonicalUrl("/")}#church`;

export function parishOrganizationLd() {
  return {
    "@type": "CatholicChurch",
    "@id": organizationId,
    name: site.parishFull,
    url: site.parishUrl,
    telephone: contactPlaceholders.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: contactPlaceholders.addressLine,
      addressLocality: "Astoria",
      addressRegion: "OR",
      postalCode: "97103",
      addressCountry: "US",
    },
  };
}

export function websiteLd() {
  return {
    "@type": "WebSite",
    "@id": `${canonicalUrl("/")}#website`,
    name: site.title,
    url: canonicalUrl("/"),
    description: site.description,
    inLanguage: "en-US",
    publisher: { "@id": organizationId },
    about: { "@id": organizationId },
  };
}

export function rootJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [parishOrganizationLd(), websiteLd()],
  };
}

export function breadcrumbJsonLd(items: Array<{ href?: string; label: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: canonicalUrl(item.href) } : {}),
    })),
  };
}

export function nextClassEventLd() {
  const session = getNextSession();
  if (!session || !/^\d{4}-\d{2}-\d{2}$/.test(session.date)) return null;

  const announcement = getLatestAnnouncement();
  const name =
    announcement?.eventDate === session.date
      ? announcement.title
      : session.topic && session.topic !== session.title
        ? session.topic
        : session.title;

  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name,
    description:
      announcement?.excerpt ??
      `${session.topic} at ${site.parishFull} in ${site.city}.`,
    startDate: session.date,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: session.location || site.parishFull,
      address: {
        "@type": "PostalAddress",
        streetAddress: contactPlaceholders.addressLine,
        addressLocality: "Astoria",
        addressRegion: "OR",
        postalCode: "97103",
        addressCountry: "US",
      },
    },
    organizer: {
      "@id": organizationId,
      name: site.parishFull,
    },
    url: canonicalUrl("/schedule"),
  };
}
