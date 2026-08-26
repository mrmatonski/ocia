import { formatClassDate, formatClassWeekday } from "@/lib/utils";
import type { ScheduleEntry } from "@/lib/education";

type Props = {
  sessions: ScheduleEntry[];
  comingSoon?: boolean;
  note?: string;
  showProgram?: boolean;
};

function isIsoDate(value: string) {
  return /^\d{4}-\d{2}-\d{2}$/.test(value);
}

function DateLabel({ date }: { date: string }) {
  if (!isIsoDate(date)) {
    return <span>{date}</span>;
  }
  return (
    <span>
      <span className="block">{formatClassDate(date)}</span>
      <span className="mt-0.5 block text-[0.62rem] tracking-[0.16em] text-gold uppercase">
        {formatClassWeekday(date)}
      </span>
    </span>
  );
}

export function ClassScheduleTable({
  sessions,
  comingSoon = false,
  note,
  showProgram = false,
}: Props) {
  return (
    <div>
      {comingSoon ? (
        <p className="mb-8 border border-gold/20 bg-navy-lift/30 px-5 py-4 text-sm leading-7 text-stone-light">
          Weekly meeting days and hours are arranged through the Religious
          Education office. Call (503) 325-3671 for the current gathering time.
        </p>
      ) : null}
      {note ? (
        <p className="mb-8 max-w-2xl text-sm leading-7 text-stone-light">{note}</p>
      ) : null}

      <div className="lg:hidden">
        <ul className="space-y-4">
          {sessions.map((session, index) => (
            <li
              key={`${session.date}-${session.topic}-${index}`}
              className="border border-gold/15 bg-navy-lift/20 p-5"
            >
              {showProgram && session.program ? (
                <p className="text-[0.62rem] tracking-[0.18em] text-gold uppercase">
                  {session.program}
                </p>
              ) : null}
              <p className="mt-2 font-serif text-xl text-ivory">
                <DateLabel date={session.date} />
              </p>
              <h3 className="mt-3 font-serif text-2xl leading-snug text-ivory italic">
                {session.topic}
              </h3>
              <dl className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-[0.62rem] tracking-[0.18em] text-gold uppercase">
                    Time
                  </dt>
                  <dd className="text-right text-ivory/85">{session.time}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-[0.62rem] tracking-[0.18em] text-gold uppercase">
                    Location
                  </dt>
                  <dd className="text-right text-ivory/85">{session.location}</dd>
                </div>
                {session.instructor ? (
                  <div className="flex justify-between gap-4">
                    <dt className="text-[0.62rem] tracking-[0.18em] text-gold uppercase">
                      Catechist
                    </dt>
                    <dd className="text-right text-ivory/85">{session.instructor}</dd>
                  </div>
                ) : null}
                {session.notes ? (
                  <div>
                    <dt className="text-[0.62rem] tracking-[0.18em] text-gold uppercase">
                      Notes
                    </dt>
                    <dd className="mt-1 text-ivory/80">{session.notes}</dd>
                  </div>
                ) : null}
              </dl>
            </li>
          ))}
        </ul>
      </div>

      <div className="hidden overflow-x-auto lg:block">
        <table className="w-full min-w-[40rem] border-collapse text-left">
          <caption className="sr-only">Class schedule</caption>
          <thead>
            <tr className="border-b border-gold/25">
              {showProgram ? (
                <th scope="col" className="py-4 pr-5 text-[0.62rem] tracking-[0.2em] text-gold uppercase">
                  Program
                </th>
              ) : null}
              <th scope="col" className="py-4 pr-5 text-[0.62rem] tracking-[0.2em] text-gold uppercase">
                Date
              </th>
              <th scope="col" className="py-4 pr-5 text-[0.62rem] tracking-[0.2em] text-gold uppercase">
                Time
              </th>
              <th scope="col" className="py-4 pr-5 text-[0.62rem] tracking-[0.2em] text-gold uppercase">
                Topic
              </th>
              <th scope="col" className="py-4 pr-5 text-[0.62rem] tracking-[0.2em] text-gold uppercase">
                Location
              </th>
              <th scope="col" className="py-4 text-[0.62rem] tracking-[0.2em] text-gold uppercase">
                Catechist
              </th>
            </tr>
          </thead>
          <tbody>
            {sessions.map((session, index) => (
              <tr
                key={`${session.date}-${session.topic}-${index}`}
                className="ordo-row border-b border-gold/12"
              >
                {showProgram ? (
                  <td className="py-5 pr-5 align-top text-sm text-ivory/85">
                    {session.program ?? "—"}
                  </td>
                ) : null}
                <td className="py-5 pr-5 align-top font-serif text-lg text-ivory">
                  <DateLabel date={session.date} />
                </td>
                <td className="py-5 pr-5 align-top text-sm tracking-[0.08em] text-stone-light uppercase">
                  {session.time}
                </td>
                <td className="py-5 pr-5 align-top">
                  <p className="font-serif text-xl text-ivory italic">{session.topic}</p>
                  {session.notes ? (
                    <p className="mt-1 text-sm text-stone-light">{session.notes}</p>
                  ) : null}
                </td>
                <td className="py-5 pr-5 align-top text-sm text-ivory/85">
                  {session.location}
                </td>
                <td className="py-5 align-top text-sm text-ivory/85">
                  {session.instructor ?? "—"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
