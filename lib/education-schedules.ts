import { educationPrograms, type ScheduleEntry } from "@/lib/education";

export type ProgramSchedule = {
  slug: string;
  name: string;
  comingSoon: boolean;
  note: string;
  href: string;
  sessions: ScheduleEntry[];
};

export function getEducationSchedules(): ProgramSchedule[] {
  return educationPrograms.map((program) => ({
    slug: program.slug,
    name: program.name,
    comingSoon: program.scheduleComingSoon,
    note: program.scheduleNote,
    href: `/religious-education/${program.slug}`,
    sessions: program.schedule.map((session) => ({
      ...session,
      program: session.program ?? program.cardTitle,
      instructor: session.instructor ?? program.instructor.name,
    })),
  }));
}
