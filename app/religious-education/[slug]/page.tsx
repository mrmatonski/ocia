import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProgramDetail } from "@/components/education/ProgramDetail";
import { educationPrograms, getProgram } from "@/lib/education";
import { canonicalUrl, pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return educationPrograms.map((program) => ({ slug: program.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgram(slug);
  if (!program) {
    return { title: "Program not found" };
  }
  const path = `/religious-education/${slug}`;
  return {
    ...pageMetadata({
      title: program.seoTitle,
      description: program.seoDescription,
      path,
    }),
    keywords: [
      "St. Mary Star of the Sea",
      "Astoria Oregon",
      "Religious Education",
      program.name,
      "Catholic education",
      "Faith formation",
    ],
    openGraph: {
      title: `${program.seoTitle} | ${site.parish}`,
      description: program.seoDescription,
      url: canonicalUrl(path),
      type: "website",
    },
  };
}

export default async function EducationProgramPage({ params }: Props) {
  const { slug } = await params;
  const program = getProgram(slug);
  if (!program) notFound();
  return <ProgramDetail program={program} />;
}
