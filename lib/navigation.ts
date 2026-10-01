export type NavChild = {
  href: string;
  label: string;
};

export type NavItem = {
  href: string;
  label: string;
  children?: readonly NavChild[];
};

export const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  {
    href: "/about",
    label: "About OCIA",
    children: [
      { href: "/about", label: "What Is OCIA?" },
      { href: "/journey", label: "The OCIA Journey" },
      { href: "/faq", label: "FAQ" },
    ],
  },
  {
    href: "/schedule",
    label: "Classes",
    children: [
      { href: "/next-class", label: "Next Class" },
      { href: "/religious-education/announcements", label: "Announcements" },
      { href: "/schedule", label: "Class Schedule" },
      { href: "/religious-education/calendar", label: "2026–2027 Calendar" },
    ],
  },
  {
    href: "/topics",
    label: "Learn",
    children: [
      { href: "/topics", label: "Class Topics" },
      { href: "/religious-education/content", label: "Content & Videos" },
      { href: "/pray", label: "How to Pray" },
    ],
  },
  {
    href: "/resources",
    label: "Resources",
    children: [
      { href: "/resources", label: "Catholic Resources" },
      { href: "/religious-education/handbook", label: "Handbook" },
      { href: "/religious-education", label: "Religious Education" },
    ],
  },
  { href: "/contact", label: "Contact" },
];

export const footerNavItems = [
  { href: "/about", label: "About OCIA" },
  { href: "/schedule", label: "Classes" },
  { href: "/topics", label: "Learn" },
  { href: "/resources", label: "Resources" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;

const educationHubRoutes = [
  "/religious-education/announcements",
  "/religious-education/calendar",
  "/religious-education/content",
  "/religious-education/handbook",
  "/religious-education/schedules",
];

function pathMatches(href: string, pathname: string) {
  if (href === "/") return pathname === "/";
  if (pathname === href) return true;
  if (href === "/next-class") {
    return pathname.startsWith("/religious-education/announcements/");
  }
  if (href === "/religious-education") {
    if (!pathname.startsWith("/religious-education/")) return false;
    return !educationHubRoutes.some(
      (route) => pathname === route || pathname.startsWith(`${route}/`),
    );
  }
  return pathname.startsWith(`${href}/`);
}

export function isNavHrefActive(href: string, pathname: string) {
  return pathMatches(href, pathname);
}

export function isNavItemActive(item: NavItem, pathname: string) {
  const targets = item.children?.length
    ? item.children.map((child) => child.href)
    : [item.href];
  return targets.some((href) => pathMatches(href, pathname));
}
