import Link from "next/link";
import { ArrowIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

type Props = {
  children: React.ReactNode;
  href?: string;
  variant?: Variant;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  ariaLabel?: string;
};

export function Button({
  children,
  href,
  variant = "primary",
  className,
  type = "button",
  onClick,
  ariaLabel,
}: Props) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[0.7rem] font-medium uppercase tracking-[0.2em] transition-colors duration-300",
    variant === "primary" && "btn-primary",
    variant === "secondary" && "btn-secondary",
    variant === "ghost" && "h-auto rounded-none px-0 text-gold hover:text-gold-bright",
    className,
  );

  if (href) {
    const external = href.startsWith("http");
    return (
      <Link
        href={href}
        className={classes}
        aria-label={ariaLabel}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        onClick={onClick}
      >
        {children}
        {variant === "ghost" ? <ArrowIcon /> : null}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} aria-label={ariaLabel}>
      {children}
      {variant === "ghost" ? <ArrowIcon /> : null}
    </button>
  );
}
