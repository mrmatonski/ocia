import { AnnouncementCard } from "@/components/education/AnnouncementCard";
import type { Announcement } from "@/lib/education-announcements";

export function AnnouncementFeed({ items }: { items: Announcement[] }) {
  if (items.length === 0) {
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
    <ul className="grid gap-6">
      {items.map((announcement) => (
        <li key={announcement.id} className="min-w-0">
          <AnnouncementCard announcement={announcement} />
        </li>
      ))}
    </ul>
  );
}
