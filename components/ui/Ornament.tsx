import { cn } from "@/lib/utils";
import { StarOfTheSeaIcon } from "@/components/icons";

export function Ornament({
  className,
  light = false,
  align = "center",
}: {
  className?: string;
  light?: boolean;
  align?: "center" | "start";
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-3",
        align === "center" ? "justify-center" : "justify-start",
        className,
      )}
      aria-hidden="true"
    >
      <span
        className={cn(
          "h-px w-8 bg-gradient-to-r from-transparent to-gold/70",
          light && "to-gold-dim/70",
        )}
      />
      <StarOfTheSeaIcon className={cn("h-3.5 w-3.5 text-gold", light && "text-gold-dim")} />
      <span
        className={cn(
          "h-px w-8 bg-gradient-to-l from-transparent to-gold/70",
          light && "to-gold-dim/70",
        )}
      />
    </div>
  );
}

export function CathedralVault({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 900"
      fill="none"
      aria-hidden="true"
      className={cn("pointer-events-none text-gold", className)}
    >
      <path
        d="M80 880 V390 C80 150 600 36 600 36 C600 36 1120 150 1120 390 V880"
        stroke="currentColor"
        strokeOpacity="0.16"
        strokeWidth="1.2"
      />
      <path
        d="M220 880 V430 C220 210 600 90 600 90 C600 90 980 210 980 430 V880"
        stroke="currentColor"
        strokeOpacity="0.1"
        strokeWidth="1"
      />
      <path
        d="M380 880 V470 C380 280 600 160 600 160 C600 160 820 280 820 470 V880"
        stroke="currentColor"
        strokeOpacity="0.08"
        strokeWidth="1"
      />
      <path d="M600 36 V880" stroke="currentColor" strokeOpacity="0.07" />
      <path d="M80 390 H1120" stroke="currentColor" strokeOpacity="0.06" />
    </svg>
  );
}
