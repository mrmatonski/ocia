"use client";

import { Button } from "@/components/ui/Button";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="page-wrap flex flex-col items-center py-28 text-center md:py-36">
      <p className="eyebrow">Something went quiet</p>
      <h1 className="mt-5 max-w-2xl font-serif text-4xl text-ivory italic md:text-6xl">
        This page could not be shown just now.
      </h1>
      <p className="mt-6 max-w-md text-sm leading-7 text-stone-light md:text-base">
        Please try again, or return home. If the trouble continues, call the
        parish office at (503) 325-3671.
      </p>
      <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
        <Button type="button" onClick={() => reset()}>
          Try again
        </Button>
        <Button href="/" variant="secondary">
          Return home
        </Button>
      </div>
    </div>
  );
}
