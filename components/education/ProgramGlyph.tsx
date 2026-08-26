import {
  BookIcon,
  ChaliceIcon,
  ChurchIcon,
  CrossIcon,
  FamilyIcon,
  FlameIcon,
  PersonIcon,
  QuestionIcon,
  UsersIcon,
} from "@/components/icons";
import type { EducationIcon } from "@/lib/education";

export function ProgramGlyph({
  icon,
  className = "h-5 w-5",
}: {
  icon: EducationIcon;
  className?: string;
}) {
  if (icon === "flame") return <FlameIcon className={className} />;
  if (icon === "book") return <BookIcon className={className} />;
  if (icon === "question") return <QuestionIcon className={className} />;
  if (icon === "chalice") return <ChaliceIcon className={className} />;
  if (icon === "family") return <FamilyIcon className={className} />;
  if (icon === "users") return <UsersIcon className={className} />;
  if (icon === "cross") return <CrossIcon className={className} />;
  if (icon === "person") return <PersonIcon className={className} />;
  return <ChurchIcon className={className} />;
}
