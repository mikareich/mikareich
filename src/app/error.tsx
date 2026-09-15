"use client";

import { PageHero } from "~/components/page-hero";

export default function ErrorBoundary({ reset }: { reset: () => void }) {
  return (
    <>
      <PageHero
        imageUrl="/images/warning.svg"
        subtitle="Oh snap, something went wrong!"
        title="500 Error"
      />
      <p>Looks like something went wrong. Please try again.</p>
      <button className="text-link" onClick={reset} type="button">
        Try again
      </button>
    </>
  );
}
