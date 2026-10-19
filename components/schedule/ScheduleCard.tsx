"use client";

import { motion } from "framer-motion";
import { getClassStatus, withStatus } from "@/lib/schedule";
import { formatClassDate, formatClassWeekday, cn } from "@/lib/utils";

type Session = ReturnType<typeof withStatus>;

function featuredCopy(session: Session) {
  const generic = /^(all classes|no classes)/i.test(session.title);
  const match = session.topic.match(/^(.*?)\s*\((Liguori[^)]+)\)\s*$/);
  if (generic && match) {
    return { heading: match[1], detail: match[2] };
  }
  if (generic && session.topic && session.topic !== session.title) {
    return { heading: session.topic, detail: null };
  }
  return {
    heading: session.title,
    detail: session.topic && session.topic !== session.title ? session.topic : null,
  };
}

export function FeaturedSession({ session }: { session: Session }) {
  const status = session.status ?? getClassStatus(session.date);
  const copy = featuredCopy(session);
  const postedTime = session.time && session.time !== "Weekly";

  return (
    <motion.article
      className="relative overflow-hidden rounded-lg border border-gold/25 bg-navy-lift/50 px-6 py-9 md:px-10 md:py-12"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="light-shaft pointer-events-none absolute inset-x-[22%] top-0 h-full opacity-40" />
      <div className="relative">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="eyebrow">Next gathering</p>
          <span
            className={
              status === "upcoming" ? "status-pill status-pill-upcoming" : "status-pill status-pill-past"
            }
          >
            {status === "upcoming" ? "Upcoming" : "Past"}
          </span>
        </div>
        <h3 className="mt-5 max-w-2xl font-serif text-3xl leading-tight text-ivory italic md:text-5xl">
          {copy.heading}
        </h3>
        <p className="mt-4 font-serif text-xl text-gold/90 md:text-2xl">
          {formatClassWeekday(session.date)
            ? `${formatClassWeekday(session.date)} · ${formatClassDate(session.date)}`
            : formatClassDate(session.date)}
        </p>
        {postedTime ? (
          <p className="mt-2 text-sm tracking-[0.12em] text-stone-light uppercase">
            {session.time}
          </p>
        ) : null}
        {copy.detail ? (
          <p className="mt-6 max-w-xl text-base leading-8 text-stone-light">
            {copy.detail}
          </p>
        ) : null}
        <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-3 text-sm">
          <div>
            <dt className="text-[0.62rem] tracking-[0.18em] text-gold uppercase">
              Location
            </dt>
            <dd className="mt-1 text-ivory/85">{session.location}</dd>
          </div>
          <div>
            <dt className="text-[0.62rem] tracking-[0.18em] text-gold uppercase">
              Instructor
            </dt>
            <dd className="mt-1 text-ivory/85">{session.instructor}</dd>
          </div>
        </dl>
      </div>
    </motion.article>
  );
}

export function OrdoRow({
  session,
  index = 0,
}: {
  session: Session;
  index?: number;
}) {
  const status = session.status ?? getClassStatus(session.date);

  return (
    <motion.li
      className={cn(
        "ordo-row border-b border-gold/12 px-4 py-5 md:px-5 md:py-6",
        status === "upcoming" ? "bg-navy-lift/35" : "bg-transparent",
      )}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.55,
        delay: Math.min(index * 0.03, 0.2),
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="font-serif text-xl text-ivory">{formatClassDate(session.date)}</p>
          {formatClassWeekday(session.date) ? (
            <p className="mt-0.5 text-[0.62rem] tracking-[0.16em] text-gold uppercase">
              {formatClassWeekday(session.date)}
            </p>
          ) : null}
        </div>
        <span
          className={
            status === "upcoming" ? "status-pill status-pill-upcoming" : "status-pill status-pill-past"
          }
        >
          {status === "upcoming" ? "Upcoming" : "Past"}
        </span>
      </div>
      <h3 className="mt-3 font-serif text-2xl leading-snug text-ivory italic md:text-[1.7rem]">
        {session.title}
      </h3>
      {session.topic && session.topic !== session.title ? (
        <p className="mt-1 text-sm leading-6 text-stone-light">{session.topic}</p>
      ) : null}
      <dl className="mt-4 flex flex-col gap-2 text-sm sm:flex-row sm:flex-wrap sm:gap-x-8">
        {session.time ? (
          <div>
            <dt className="text-[0.62rem] tracking-[0.16em] text-gold uppercase">Time</dt>
            <dd className="mt-0.5 text-ivory/90">{session.time}</dd>
          </div>
        ) : null}
        <div>
          <dt className="text-[0.62rem] tracking-[0.16em] text-gold uppercase">Location</dt>
          <dd className="mt-0.5 text-ivory/90">{session.location}</dd>
        </div>
        <div>
          <dt className="text-[0.62rem] tracking-[0.16em] text-gold uppercase">Instructor</dt>
          <dd className="mt-0.5 text-ivory/90">{session.instructor}</dd>
        </div>
      </dl>
    </motion.li>
  );
}
