import Link from "next/link";
import { cn } from "@/lib/utils";

type Crumb = {
  href?: string;
  label: string;
};

export function EducationBreadcrumbs({
  items,
  light = false,
}: {
  items: Crumb[];
  light?: boolean;
}) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.68rem] tracking-[0.16em] uppercase">
        {items.map((item, index) => {
          const last = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              {item.href && !last ? (
                <Link
                  href={item.href}
                  className={cn(
                    "transition-colors",
                    light
                      ? "text-ink/50 hover:text-gold-dim"
                      : "text-stone-light hover:text-gold",
                  )}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className={last ? (light ? "text-gold-dim" : "text-gold") : light ? "text-ink/50" : "text-stone-light"}
                  aria-current={last ? "page" : undefined}
                >
                  {item.label}
                </span>
              )}
              {last ? null : (
                <span className="text-gold/40" aria-hidden="true">
                  /
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
