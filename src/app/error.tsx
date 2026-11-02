"use client";

import { HeroSection } from "~/components/layout/hero-section";

export default function ErrorBoundary({ reset }: { reset: () => void }) {
  return (
    <>
      <HeroSection></HeroSection>
      <p>Looks like something went wrong. Please try again.</p>
      <button className="text-link" onClick={reset} type="button">
        Try again
      </button>
    </>
  );
}
