import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <>
      <PageHero
        eyebrow="404"
        title="This path does not continue here."
        description="The page you are looking for has moved, or it never existed. The invitation still stands."
      />
      <div className="flex justify-center pb-24">
        <Button href="/">Return home</Button>
      </div>
    </>
  );
}
