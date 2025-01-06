import { getFileBySlug } from "~/lib/content";
import HeroSection from "./HeroSection";
import { notFound } from "next/navigation";
import Content from "~/components/Content";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;

  const file = await getFileBySlug("page", slug ? `/${slug}` : "/");
  if (!file) notFound();

  return {
    title: `Mika Reich | ${file.frontmatter.pageTitle}`,
    description: file.frontmatter.hero.subtitle,
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  const file = await getFileBySlug("page", slug ? `/${slug}` : "/");
  if (!file) notFound();

  const { frontmatter, source, components } = file;

  return (
    <>
      <HeroSection {...frontmatter.hero} />

      <Content source={source} components={components} />
    </>
  );
}
