"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { educationNavItems } from "@/lib/education-hub";
import { cn } from "@/lib/utils";

export function EducationSubnav({ light = false }: { light?: boolean }) {
  const pathname = usePathname();

  return (
    <nav aria-label="Religious Education">
      <ul className="flex gap-x-5 gap-y-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {educationNavItems.map((item) => {
          const active =
            item.href === "/religious-education"
              ? pathname === "/religious-education"
              : pathname === item.href || pathname.startsWith(`${item.href}/`);
          return (
            <li key={item.href} className="shrink-0">
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "border-b pb-1 text-[0.65rem] tracking-[0.18em] whitespace-nowrap uppercase transition-colors",
                  active
                    ? "border-gold text-gold"
                    : light
                      ? "border-transparent text-ink/50 hover:text-gold-dim"
                      : "border-transparent text-stone-light hover:text-ivory",
                )}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
