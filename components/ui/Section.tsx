import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
  tone?: "dark" | "navy" | "ivory" | "cta";
  id?: string;
};

const tones = {
  dark: "relative overflow-hidden bg-ink text-ivory",
  navy: "relative overflow-hidden bg-navy text-ivory",
  ivory: "relative overflow-hidden bg-ivory text-ink",
  cta: "relative overflow-hidden bg-navy-deep text-ivory",
};

export function Section({ children, className, tone = "dark", id }: Props) {
  return (
    <section id={id} className={cn(tones[tone], className)}>
      <div
        className={cn(
          "atmosphere",
          tone === "ivory" && "atmosphere-ivory",
          tone === "navy" && "atmosphere-navy",
          tone === "cta" && "atmosphere-cta",
          tone === "dark" && "atmosphere-navy",
        )}
        aria-hidden="true"
      />
      {tone === "ivory" ? <div className="parchment absolute inset-0" aria-hidden="true" /> : null}
      <div className="relative">{children}</div>
    </section>
  );
}
