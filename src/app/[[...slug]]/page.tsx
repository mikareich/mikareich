import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Content from "~/components/Content";
import { PAGES } from "~/content/config";
import { getFileBySlug } from "~/lib/content";
import HeroSection from "./HeroSection";

export function generateStaticParams() {
  return PAGES.map((page) => ({ slug: page.slug.split("/").filter(Boolean) }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[[...slug]]">): Promise<Metadata> {
  const { slug } = await params;

  const file = await getFileBySlug(
    "page",
    slug?.length ? `/${slug.join("/")}` : "/",
  );
  if (!file) notFound();

  return {
    description: file.frontmatter.hero.subtitle,
    title: `Mika Reich | ${file.frontmatter.pageTitle}`,
  };
}

export default async function Page({ params }: PageProps<"/[[...slug]]">) {
  const { slug } = await params;

  const file = await getFileBySlug(
    "page",
    slug?.length ? `/${slug.join("/")}` : "/",
  );
  if (!file) notFound();

  const { frontmatter, source, components } = file;

  return (
    <>
      <HeroSection {...frontmatter.hero} />

      <Content components={components} source={source} />
    </>
  );
}
