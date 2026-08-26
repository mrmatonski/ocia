import { ProgramCard } from "@/components/education/ProgramCard";
import { educationPrograms } from "@/lib/education";

export function ProgramGrid() {
  return (
    <ul className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {educationPrograms.map((program, index) => (
        <li key={program.slug} className="min-w-0">
          <ProgramCard program={program} index={index} />
        </li>
      ))}
    </ul>
  );
}
