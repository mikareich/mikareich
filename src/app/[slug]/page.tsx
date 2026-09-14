import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PostList } from "~/components/post-list";
import { ProjectCard } from "~/components/project-card";
import { isDefinedSlug, PAGES } from "~/content/config";
import HeroSection from "./HeroSection";

export function generateStaticParams() {
  return Object.keys(PAGES).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[slug]">): Promise<Metadata> {
  const slug = `/${(await params).slug}`;
  if (!isDefinedSlug("page", slug)) notFound();

  return PAGES[slug].config.meta;
}

export default async function Page({ params }: PageProps<"/[slug]">) {
  const slug = `/${(await params).slug}`;
  if (!isDefinedSlug("page", slug)) notFound();

  const { config, Component } = PAGES[slug];

  return (
    <>
      <HeroSection {...config} />

      <Component components={{ PostList, ProjectCard }} />
    </>
  );
}
