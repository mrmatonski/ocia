import Link from "next/link";
import { footerNavItems } from "@/lib/navigation";
import { educationNavItems } from "@/lib/education-hub";
import { contactPlaceholders, site } from "@/lib/site";
import { StarOfTheSeaIcon } from "@/components/icons";
import { Ornament } from "@/components/ui/Ornament";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-gold/12 bg-ink">
      <div className="atmosphere atmosphere-navy" aria-hidden="true" />
      <div className="page-wrap relative py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3">
              <StarOfTheSeaIcon className="h-8 w-8 text-gold" />
              <div>
                <p className="font-display text-sm tracking-[0.32em] text-ivory">
                  {site.name}
                </p>
                <p className="mt-1 text-xs tracking-[0.14em] text-stone-light uppercase">
                  {site.parish}
                </p>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-7 text-stone-light">
              Formation for adults who wish to encounter Christ in the Catholic
              Church — at {site.parishFull} in {site.city}.
            </p>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow mb-5">Explore</p>
            <ul className="space-y-3">
              {footerNavItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-ivory/80 transition-colors hover:text-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow mb-5">Formation</p>
            <ul className="space-y-3">
              {educationNavItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-ivory/80 transition-colors hover:text-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow mb-5">Parish</p>
            <a
              href={site.parishUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-ivory/80 transition-colors hover:text-gold"
            >
              stmaryastoria.com
            </a>
            <p className="mt-5 text-sm leading-7 text-stone-light">
              {contactPlaceholders.addressLine}
              <br />
              {contactPlaceholders.cityLine}
              <br />
              {contactPlaceholders.phone}
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center gap-5 border-t border-gold/12 pt-8 text-center">
          <Ornament />
          <p suppressHydrationWarning className="text-[0.65rem] tracking-[0.2em] text-stone uppercase">
            © {year} {site.parishFull}
          </p>
        </div>
      </div>
    </footer>
  );
}

export function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-gold focus:px-4 focus:py-2 focus:text-ink"
    >
      Skip to content
    </a>
  );
}
