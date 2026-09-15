import { AnnouncementCard } from "@/components/education/AnnouncementCard";
import type { Announcement } from "@/lib/education-announcements";

export function AnnouncementFeed({
  items,
  current = [],
  archived = [],
}: {
  items?: Announcement[];
  current?: Announcement[];
  archived?: Announcement[];
}) {
  const active = current.length ? current : items ?? [];
  const past = archived;
  const empty = active.length === 0 && past.length === 0;

  if (empty) {
    return (
      <div className="border-y border-gold/20 py-16 text-center md:py-20">
        <p className="eyebrow">Parish notices</p>
        <h2 className="mt-5 font-serif text-3xl text-ivory italic md:text-4xl">
          No announcements at this time.
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-stone-light md:text-base">
          When Religious Education has news, schedule changes, or reminders for
          families, those notices will appear here.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-14">
      {active.length > 0 ? (
        <ul className="grid gap-6">
          {active.map((announcement) => (
            <li key={announcement.id} className="min-w-0">
              <AnnouncementCard announcement={announcement} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="border-y border-gold/20 py-12 text-center">
          <p className="font-serif text-2xl text-ivory italic">
            No current announcements.
          </p>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-stone-light">
            Earlier notices remain below for reference.
          </p>
        </div>
      )}
      {past.length > 0 ? (
        <div>
          <p className="eyebrow mb-6">Earlier notices</p>
          <ul className="grid gap-6">
            {past.map((announcement) => (
              <li key={announcement.id} className="min-w-0">
                <AnnouncementCard announcement={announcement} archived />
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
