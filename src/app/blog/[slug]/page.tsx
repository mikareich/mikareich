import { getFileBySlug } from "~/lib/content";
import { notFound } from "next/navigation";
import HeroSection from "./HeroSection";
import TableOfContents from "./TableOfContents";
import getHeadings from "~/lib/getHeadings";
import Content from "./PostContent";
import Comments from "./Comments";
import { Suspense } from "react";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;

  const file = await getFileBySlug("post", slug ? `/${slug}` : "/");
  if (!file) notFound();

  return {
    title: `Mika Reich | ${file.frontmatter.hero.title}`,
    description: file.frontmatter.hero.subtitle,
  };
}

export default async function Post({ params }: PageProps) {
  const { slug } = await params;

  const file = await getFileBySlug("post", slug ? `/${slug}` : "/");
  if (!file) notFound();

  const { frontmatter, source, components } = file;
  const headings = getHeadings(source);

  return (
    <>
      <HeroSection {...frontmatter} />

      <main className="flex justify-between gap-4">
        {/* Upper Side TOC */}
        <div className="max-w-prose overflow-hidden">
          <details className="max-lg:mb-4 lg:hidden">
            <summary className="mt-6 mb-4 cursor-pointer font-bold font-heading text-gray-100 text-xl sm:text-2xl">
              <span className="highlighted">On this page </span>
            </summary>

            <TableOfContents
              id={`${slug}.mdx`}
              headings={headings}
              description={frontmatter.hero.subtitle}
            />
          </details>

          {/* Actual Content */}
          <Content
            source={source}
            components={components}
            headings={headings}
          />

          <Suspense fallback="Loading Comments...">
            <Comments postId={slug} />
          </Suspense>
        </div>

        {/* Right Side TOC */}

        <div className="sticky top-5 h-min max-w-72 overflow-hidden max-lg:hidden">
          <p className="mb-2 font-body text-gray-100 text-lg sm:text-xl">
            On this page
          </p>

          <TableOfContents
            id={`${slug}.mdx`}
            headings={headings}
            description={frontmatter.hero.subtitle}
          />
        </div>
      </main>
    </>
  );
}
