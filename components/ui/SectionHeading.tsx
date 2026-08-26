import { cn } from "@/lib/utils";
import { Ornament } from "@/components/ui/Ornament";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  italic?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  italic = true,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className={cn("eyebrow mb-4", light && "text-gold-dim")}>{eyebrow}</p>
      ) : null}
      <h2
        className={cn(
          "font-serif text-[2.35rem] leading-[1.12] font-medium tracking-tight md:text-5xl lg:text-[3.35rem]",
          italic && "italic",
          light ? "text-ink" : "text-ivory",
        )}
      >
        {title}
      </h2>
      <Ornament className="mt-7" light={light} />
      {description ? (
        <p
          className={cn(
            "mx-auto mt-6 max-w-2xl text-[0.98rem] leading-8 md:text-lg",
            light ? "text-ink/68" : "text-stone-light",
            align === "left" && "mx-0",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
