"use client";

import { useMemo, useState } from "react";
import { classSchedule, getScheduleMonths, withStatus } from "@/lib/schedule";
import { cn } from "@/lib/utils";
import { FeaturedSession, OrdoRow } from "@/components/schedule/ScheduleCard";

type Filter = "all" | "upcoming" | "completed";

export function ScheduleTimeline({ limit }: { limit?: number }) {
  const [filter, setFilter] = useState<Filter>(limit ? "upcoming" : "all");
  const [month, setMonth] = useState<string>("all");
  const months = getScheduleMonths();

  const sessions = useMemo(() => {
    let list = classSchedule.map((session) => withStatus(session));

    if (filter !== "all") {
      list = list.filter((session) => session.status === filter);
    }
    if (month !== "all") {
      list = list.filter((session) => session.date.startsWith(month));
    }
    if (limit) {
      list = list.filter((session) => session.status === "upcoming").slice(0, limit);
    }
    return list;
  }, [filter, month, limit]);

  const featured = sessions.find((session) => session.status === "upcoming") ?? null;
  const remaining = featured
    ? sessions.filter((session) => session.id !== featured.id)
    : sessions;
  const upcomingRest = remaining.filter((session) => session.status === "upcoming");
  const completedRest = remaining.filter((session) => session.status === "completed");

  return (
    <div>
      {limit ? null : (
        <div className="mb-12 flex flex-col gap-6">
          <div className="flex flex-wrap gap-x-6 gap-y-2" role="group" aria-label="Filter classes by status">
            {(["all", "upcoming", "completed"] as const).map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => setFilter(value)}
                aria-pressed={filter === value}
                className={cn(
                  "border-b pb-1 text-[0.68rem] tracking-[0.22em] uppercase transition-colors",
                  filter === value
                    ? "border-gold text-gold"
                    : "border-transparent text-stone-light hover:text-ivory",
                )}
              >
                {value === "all" ? "All" : value}
              </button>
            ))}
          </div>
          <div className="flex gap-x-4 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" role="group" aria-label="Filter classes by month">
            <button
              type="button"
              onClick={() => setMonth("all")}
              aria-pressed={month === "all"}
              className={cn(
                "shrink-0 px-1 py-1 text-[0.65rem] tracking-[0.16em] whitespace-nowrap uppercase transition-colors",
                month === "all" ? "text-gold" : "text-stone-light hover:text-ivory",
              )}
            >
              All months
            </button>
            {months.map((item) => (
              <button
                key={item.key}
                type="button"
                onClick={() => setMonth(item.key)}
                aria-pressed={month === item.key}
                className={cn(
                  "shrink-0 px-1 py-1 text-[0.65rem] tracking-[0.16em] whitespace-nowrap uppercase transition-colors",
                  month === item.key ? "text-gold" : "text-stone-light hover:text-ivory",
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {sessions.length === 0 ? (
        <p className="border-y border-gold/15 py-14 text-center text-stone-light">
          No classes match this filter. Call the parish office at (503) 325-3671
          for the current gathering time.
        </p>
      ) : (
        <div>
          {featured ? <FeaturedSession session={featured} /> : null}
          {upcomingRest.length > 0 ? (
            <ol className={cn("border-t border-gold/15", featured && "mt-10")}>
              {upcomingRest.map((session, index) => (
                <OrdoRow key={session.id} session={session} index={index} />
              ))}
            </ol>
          ) : null}
          {completedRest.length > 0 && !limit ? (
            <div className={cn((featured || upcomingRest.length > 0) && "mt-12")}>
              <p className="eyebrow mb-4">Earlier gatherings</p>
              <ol className="border-t border-gold/15">
                {completedRest.map((session, index) => (
                  <OrdoRow key={session.id} session={session} index={index} />
                ))}
              </ol>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}
