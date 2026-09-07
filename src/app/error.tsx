"use client";

import HeroSection from "./[[...slug]]/HeroSection";

export default function ErrorPage({ retry }: { retry: () => void }) {
  return (
    <>
      <HeroSection
        title="500 Error"
        subtitle="Oh snap, something went wrong!"
        imageSrc="/images/warning.svg"
      />
      <main className="prose">
        <p>Looks like an error happened. Please try again.</p>
        <button
          className="bg-blue-200 px-4 py-2 text-gray-100"
          onClick={() => retry()}
          type="button"
        >
          Try again
        </button>
      </main>
    </>
  );
}
