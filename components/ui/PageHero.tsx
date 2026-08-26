import { cn } from "@/lib/utils";
import { CathedralVault, Ornament } from "@/components/ui/Ornament";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
};

export function PageHero({ eyebrow, title, description, className }: Props) {
  return (
    <header
      className={cn(
        "relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24",
        className,
      )}
    >
      <div className="atmosphere atmosphere-hero" aria-hidden="true">
        <div className="light-shaft absolute inset-x-[18%] top-0 h-[70%] opacity-70" />
        <CathedralVault className="absolute inset-x-[-20%] -top-10 h-[120%] w-[140%] opacity-70" />
        <div className="vignette absolute inset-0" />
      </div>
      <div className="page-wrap relative text-center">
        {eyebrow ? <p className="eyebrow mb-5">{eyebrow}</p> : null}
        <h1 className="mx-auto max-w-4xl font-serif text-4xl leading-[1.08] font-medium tracking-tight text-ivory italic md:text-6xl">
          {title}
        </h1>
        <Ornament className="mt-7" />
        {description ? (
          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-stone-light md:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </header>
  );
}
