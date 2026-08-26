import { educationHandbook } from "@/lib/education-handbook";
import { Button } from "@/components/ui/Button";

export function HandbookPanel() {
  const handbook = educationHandbook;
  const ready = Boolean(handbook.href);

  return (
    <article className="border border-gold/15 bg-navy-lift/20 px-6 py-10 md:px-10 md:py-12">
      <p className="eyebrow">Document</p>
      <h2 className="mt-5 font-serif text-4xl text-ivory italic md:text-5xl">
        {handbook.title}
      </h2>
      <p className="mt-6 max-w-xl text-base leading-8 text-stone-light">
        {handbook.description}
      </p>
      <p className="mt-4 text-sm leading-7 text-stone">{handbook.comingSoon}</p>
      <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4 text-sm">
        <div>
          <dt className="text-[0.62rem] tracking-[0.18em] text-gold uppercase">Format</dt>
          <dd className="mt-1 text-ivory/85">{handbook.fileLabel}</dd>
        </div>
        <div>
          <dt className="text-[0.62rem] tracking-[0.18em] text-gold uppercase">Updated</dt>
          <dd className="mt-1 text-ivory/85">{handbook.updated}</dd>
        </div>
      </dl>
      <div className="mt-10">
        {ready && handbook.href ? (
          <Button href={handbook.href} ariaLabel={handbook.ctaLabel ?? "Download Religious Education handbook"}>
            {handbook.ctaLabel ?? "Download handbook"}
          </Button>
        ) : (
          <p className="text-[0.7rem] tracking-[0.2em] text-stone uppercase">
            Call the parish office at (503) 325-3671
          </p>
        )}
      </div>
    </article>
  );
}
