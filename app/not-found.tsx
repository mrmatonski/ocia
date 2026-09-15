import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <PageHero
        eyebrow="404"
        title="This path does not continue here."
        description="The page you are looking for has moved, or it never existed. The invitation still stands."
      />
      <div className="flex flex-col items-center justify-center gap-3 pb-24 sm:flex-row">
        <Button href="/">Return home</Button>
        <Button href="/schedule" variant="secondary">
          Class schedule
        </Button>
        <Button href="/contact" variant="ghost">
          Contact
        </Button>
      </div>
    </>
  );
}
