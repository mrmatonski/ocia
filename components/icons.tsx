import type { SVGProps } from "react";
import { cn } from "@/lib/utils";

type IconProps = SVGProps<SVGSVGElement> & { className?: string };

const base = "h-5 w-5";

export function StarOfTheSeaIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className={cn("h-8 w-8", className)}
      {...props}
    >
      <path
        d="M24 3.5 L26.2 18.4 L40.8 12.2 L29.6 24 L40.8 35.8 L26.2 29.6 L24 44.5 L21.8 29.6 L7.2 35.8 L18.4 24 L7.2 12.2 L21.8 18.4 Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="24" r="3.2" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export function FlameIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className={cn(base, className)} {...props}>
      <path
        d="M16 4c2 4.2-1.2 6.6-1.2 10.2 0 2.1 1.5 3.6 3.4 3.6 2.4 0 4.3-2.2 4.3-5.4 3.2 2.6 5.5 6.4 5.5 10.1C28 26.2 22.8 29 16 29S4 26.2 4 22.5C4 16.2 10.4 11.4 16 4Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BookIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className={cn(base, className)} {...props}>
      <path
        d="M16 8.5c-2.4-2-6-3-10-3v17c4.2 0 7.8 1 10 3 2.2-2 5.8-3 10-3v-17c-4 0-7.6 1-10 3Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M16 8.5v17" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function QuestionIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className={cn(base, className)} {...props}>
      <circle cx="16" cy="16" r="11.5" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M12.8 12.4c.4-2.2 2.2-3.4 4.2-3.4 2.2 0 3.8 1.4 3.8 3.4 0 2.2-1.8 2.8-2.8 3.5-.8.6-1.2 1.2-1.2 2.3"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <circle cx="16" cy="22.2" r="1" fill="currentColor" />
    </svg>
  );
}

export function ChurchIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className={cn(base, className)} {...props}>
      <path d="M16 4v5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M13.5 6.5h5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path
        d="M6 28V16.5L16 9l10 7.5V28"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M13 28v-6h6v6" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function CameraIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className={cn(base, className)} {...props}>
      <rect x="4" y="9" width="24" height="16" rx="2.5" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="16" cy="17" r="4.2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M11 9 12.6 6.5h6.8L21 9" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  );
}

export function ChevronIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={cn("h-4 w-4", className)} {...props}>
      <path d="M5 7.5 10 12.5 15 7.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function ArrowIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={cn("h-4 w-4", className)} {...props}>
      <path d="M5 12h14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function MailIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className={cn(base, className)} {...props}>
      <rect x="5" y="8" width="22" height="16" rx="2" stroke="currentColor" strokeWidth="1.4" />
      <path d="m6.5 10.5 9.5 7 9.5-7" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  );
}

export function PhoneIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className={cn(base, className)} {...props}>
      <path
        d="M10.2 6.8c.5-.5 1.4-.5 1.9 0l2.6 2.6c.5.5.5 1.3.1 1.8l-1.6 1.8c.8 1.7 2.3 3.3 4.1 4.4l1.9-1.5c.5-.4 1.3-.4 1.8.1l2.6 2.6c.5.5.5 1.4 0 1.9l-1.5 1.5c-.6.6-1.5.9-2.4.7-4.2-.8-8.4-4.4-11.2-10.1-.6-1.2-.4-2.6.6-3.6l1.1-1.2Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PinIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className={cn(base, className)} {...props}>
      <path
        d="M16 28s8-8.2 8-14.2A8 8 0 1 0 8 13.8C8 19.8 16 28 16 28Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <circle cx="16" cy="13.8" r="2.4" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function PersonIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className={cn(base, className)} {...props}>
      <circle cx="16" cy="11" r="4.2" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M7.5 25.5c1.4-4.2 4.6-6.3 8.5-6.3s7.1 2.1 8.5 6.3"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CloseIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={cn("h-4 w-4", className)} {...props}>
      <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function SendIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={cn("h-4 w-4", className)} {...props}>
      <path d="M5 12h14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CheckIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={cn("h-5 w-5", className)} {...props}>
      <path d="M5 12.5 9.5 17 19 7.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CrossIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className={cn(base, className)} {...props}>
      <path d="M16 5v22" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M9 12h14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function ChaliceIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className={cn(base, className)} {...props}>
      <path
        d="M8 7h16v3c0 5.2-3.4 9-8 10.5C11.4 19 8 15.2 8 10V7Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M16 20.5V25" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M11 27h10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function FamilyIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className={cn(base, className)} {...props}>
      <circle cx="11" cy="9.5" r="2.6" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="21" cy="9.5" r="2.6" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="16" cy="14.2" r="2.1" stroke="currentColor" strokeWidth="1.4" />
      <path d="M5.8 24.8c.9-3.4 3.2-5.1 5.8-5.1 1.4 0 2.6.5 3.6 1.4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M16.8 21.1c1 .9 2.2 1.4 3.6 1.4 2.6 0 4.9-1.7 5.8-5.1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function UsersIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className={cn(base, className)} {...props}>
      <circle cx="12" cy="11" r="3.4" stroke="currentColor" strokeWidth="1.4" />
      <path d="M5.5 24.5c1.1-3.6 3.6-5.4 6.5-5.4s5.4 1.8 6.5 5.4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="21.5" cy="12" r="2.8" stroke="currentColor" strokeWidth="1.4" />
      <path d="M18.2 24.5c.8-2.4 2.4-3.7 4.4-3.7 2.2 0 3.9 1.4 4.8 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}
