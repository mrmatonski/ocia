import { redirect } from "next/navigation";
import { getNextClassPath } from "@/lib/education-announcements";

export const dynamic = "force-dynamic";

export default function NextClassPage() {
  redirect(getNextClassPath());
}
