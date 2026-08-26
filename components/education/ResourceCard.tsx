import { Button } from "@/components/ui/Button";
import type { EducationResource } from "@/lib/education-resources";

export function ResourceCard({ resource }: { resource: EducationResource }) {
  const ready = Boolean(resource.href);

  return (
    <article className="card-hover flex h-full flex-col border border-gold/15 bg-navy-lift/20 p-7">
      <p className="text-[0.62rem] tracking-[0.18em] text-gold uppercase">{resource.type}</p>
      <h3 className="mt-4 font-serif text-2xl text-ivory italic">{resource.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-7 text-stone-light">{resource.description}</p>
      <p className="mt-4 text-[0.62rem] tracking-[0.14em] text-stone uppercase">
        {resource.date}
      </p>
      <div className="mt-6">
        {ready && resource.href ? (
          <Button href={resource.href} variant="secondary" className="px-5 py-3">
            View resource
          </Button>
        ) : (
          <p className="text-[0.65rem] tracking-[0.18em] text-stone uppercase">
            Additional resources will be posted here
          </p>
        )}
      </div>
    </article>
  );
}
