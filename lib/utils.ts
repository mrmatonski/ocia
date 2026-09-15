export const PARISH_TIMEZONE = "America/Los_Angeles";

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function isIsoDate(value: string) {
  return /^\d{4}-\d{2}-\d{2}$/.test(value);
}

export function formatClassDate(isoDate: string) {
  if (!isIsoDate(isoDate)) return isoDate;
  const date = new Date(`${isoDate}T12:00:00`);
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
  }).format(date);
}

export function formatFullDate(isoDate: string) {
  const date = new Date(`${isoDate.slice(0, 10)}T12:00:00`);
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

export function formatClassWeekday(isoDate: string) {
  if (!isIsoDate(isoDate)) return "";
  const date = new Date(`${isoDate}T12:00:00`);
  return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
}

export function formatMonthLabel(isoDate: string) {
  const date = new Date(`${isoDate}T12:00:00`);
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
  }).format(date);
}

export function formatWeekdayDate(isoDate: string) {
  const weekday = formatClassWeekday(isoDate);
  if (!weekday) return formatClassDate(isoDate);
  return `${weekday} · ${formatClassDate(isoDate)}`;
}

export function getTodayIso(now = new Date()) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: PARISH_TIMEZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);
}

export function getParishDateParts(now = new Date()) {
  const iso = getTodayIso(now);
  const [year, month, day] = iso.split("-").map(Number);
  return { year, month, day };
}
