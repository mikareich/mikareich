import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { isDefinedSlug, POSTS } from "~/content/config";
import getHeadings from "~/lib/getHeadings";
import Comments from "./Comments";
import HeroSection from "./HeroSection";
import Content from "./PostContent";
import TableOfContents from "./TableOfContents";

export function generateStaticParams() {
  return Object.keys(POSTS).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const slug = `/${(await params).slug}`;
  if (!isDefinedSlug("blog", slug)) notFound();

  return POSTS[slug].config.meta;
}

export default async function Post({ params }: PageProps<"/blog/[slug]">) {
  const slug = `/${(await params).slug}`;
  if (!isDefinedSlug("blog", slug)) notFound();

  const { config, Component } = POSTS[slug];

  return (
    <>
      <HeroSection {...config} />

      <main className="flex justify-between gap-4">
        {/* Upper Side TOC */}
        <div className="max-w-prose overflow-hidden">
          <details className="max-lg:mb-4 lg:hidden">
            <summary className="mt-6 mb-4 cursor-pointer font-bold font-heading text-portfolio-text-strong text-xl sm:text-2xl">
              <span className="highlighted">On this page </span>
            </summary>

            {/*<TableOfContents
              description={frontmatter.hero.subtitle}
              headings={headings}
              id={`${slug}.mdx`}
            />*/}
          </details>

          {/* Actual Content */}
          <Component />

          <Suspense fallback="Loading Comments...">
            <Comments postId={slug} />
          </Suspense>
        </div>

        {/* Right Side TOC */}

        <div className="sticky top-5 h-min max-w-72 overflow-hidden max-lg:hidden">
          <p className="mb-2 font-body text-portfolio-text-strong text-lg sm:text-xl">
            On this page
          </p>

          {/*<TableOfContents
            description={frontmatter.hero.subtitle}
            headings={headings}
            id={`${slug}.mdx`}
          />*/}
        </div>
      </main>
    </>
  );
}
