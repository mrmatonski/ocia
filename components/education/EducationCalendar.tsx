"use client";

import { useMemo, useState } from "react";
import {
  calendarCategoryLabels,
  calendarGuideline,
  educationCalendarEvents,
  type CalendarCategory,
  type CalendarEvent,
} from "@/lib/education-calendar";
import { formatClassDate, formatClassWeekday, formatMonthLabel } from "@/lib/utils";

const weekdayLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function isIsoDate(value: string) {
  return /^\d{4}-\d{2}-\d{2}$/.test(value);
}

function monthKey(year: number, monthIndex: number) {
  return `${year}-${String(monthIndex + 1).padStart(2, "0")}`;
}

export function EducationCalendar() {
  const today = new Date();
  const [cursor, setCursor] = useState({
    year: today.getFullYear(),
    month: today.getMonth(),
  });

  const dated = educationCalendarEvents.filter((event) => isIsoDate(event.date));
  const undated = educationCalendarEvents.filter((event) => !isIsoDate(event.date));
  const currentKey = monthKey(cursor.year, cursor.month);

  const monthEvents = useMemo(
    () => dated.filter((event) => event.date.startsWith(currentKey)),
    [dated, currentKey],
  );

  const daysInMonth = new Date(cursor.year, cursor.month + 1, 0).getDate();
  const startWeekday = new Date(cursor.year, cursor.month, 1).getDay();
  const cells: Array<{ day: number | null; iso?: string; events: CalendarEvent[] }> = [];

  for (let i = 0; i < startWeekday; i += 1) {
    cells.push({ day: null, events: [] });
  }
  for (let day = 1; day <= daysInMonth; day += 1) {
    const iso = `${currentKey}-${String(day).padStart(2, "0")}`;
    cells.push({
      day,
      iso,
      events: dated.filter((event) => event.date === iso),
    });
  }
  while (cells.length % 7 !== 0) {
    cells.push({ day: null, events: [] });
  }

  const monthTitle = formatMonthLabel(`${currentKey}-01`);

  return (
    <div>
      <p className="border border-gold/20 bg-navy-lift/30 px-5 py-4 text-sm leading-7 text-stone-light">
        {calendarGuideline}
      </p>

      <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-[0.62rem] tracking-[0.16em] text-stone-light uppercase">
        {(Object.keys(calendarCategoryLabels) as CalendarCategory[]).map((key) => (
          <li key={key} className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
            {calendarCategoryLabels[key]}
          </li>
        ))}
      </ul>

      <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
        <h3 className="font-serif text-3xl text-ivory italic">{monthTitle}</h3>
        <div className="flex gap-2">
          <button
            type="button"
            className="btn-secondary px-4 py-2 text-[0.62rem] tracking-[0.18em] uppercase"
            onClick={() =>
              setCursor((current) => {
                const month = current.month - 1;
                return month < 0 ? { year: current.year - 1, month: 11 } : { ...current, month };
              })
            }
          >
            Previous
          </button>
          <button
            type="button"
            className="btn-secondary px-4 py-2 text-[0.62rem] tracking-[0.18em] uppercase"
            onClick={() =>
              setCursor((current) => {
                const month = current.month + 1;
                return month > 11 ? { year: current.year + 1, month: 0 } : { ...current, month };
              })
            }
          >
            Next
          </button>
        </div>
      </div>

      <div className="mt-8 hidden md:block">
        <table className="w-full table-fixed border-collapse text-center">
          <caption className="sr-only">{monthTitle} Religious Education calendar</caption>
          <thead>
            <tr>
              {weekdayLabels.map((label) => (
                <th
                  key={label}
                  scope="col"
                  className="border-b border-gold/20 py-3 text-[0.58rem] tracking-[0.16em] text-gold uppercase"
                >
                  {label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: Math.ceil(cells.length / 7) }, (_, week) => (
              <tr key={week}>
                {cells.slice(week * 7, week * 7 + 7).map((cell, index) => (
                  <td
                    key={`${week}-${index}`}
                    className="h-20 border-b border-gold/10 align-top px-1 py-2"
                  >
                    {cell.day ? (
                      <div>
                        <span className="text-sm text-ivory/80">{cell.day}</span>
                        {cell.events.length > 0 ? (
                          <span className="mt-1 block h-1.5 w-1.5 mx-auto rounded-full bg-gold" />
                        ) : null}
                      </div>
                    ) : null}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-10">
        <p className="eyebrow mb-5">This month</p>
        {monthEvents.length === 0 ? (
          <p className="border-y border-gold/15 py-8 text-sm leading-7 text-stone-light">
            No dated events are listed for this month. Seasonal notes appear
            below.
          </p>
        ) : (
          <EventList events={monthEvents} />
        )}
      </div>

      {undated.length > 0 ? (
        <div className="mt-14">
          <p className="eyebrow mb-5">Seasonal notes</p>
          <EventList events={undated} />
        </div>
      ) : null}
    </div>
  );
}

function EventList({ events }: { events: CalendarEvent[] }) {
  return (
    <ol className="divide-y divide-gold/12 border-y border-gold/20">
      {events.map((event) => (
        <li key={event.id} className="grid gap-2 py-6 md:grid-cols-[11rem_1fr] md:gap-8">
          <div>
            <p className="font-serif text-xl text-ivory">
              {isIsoDate(event.date) ? formatClassDate(event.date) : event.date}
            </p>
            {isIsoDate(event.date) ? (
              <p className="mt-1 text-[0.62rem] tracking-[0.16em] text-gold uppercase">
                {formatClassWeekday(event.date)}
              </p>
            ) : null}
            <p className="mt-2 text-[0.62rem] tracking-[0.16em] text-gold uppercase">
              {calendarCategoryLabels[event.category]}
            </p>
          </div>
          <div>
            <h3 className="font-serif text-2xl text-ivory italic">{event.title}</h3>
            {event.time ? (
              <p className="mt-1 text-sm tracking-[0.08em] text-stone-light uppercase">
                {event.time}
              </p>
            ) : null}
            {event.location ? (
              <p className="mt-1 text-sm text-ivory/80">{event.location}</p>
            ) : null}
            <p className="mt-3 text-sm leading-7 text-stone-light">{event.notes}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
