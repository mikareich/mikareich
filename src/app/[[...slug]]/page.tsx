import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Content from '~/components/Content'
import { PAGES } from '~/content/config'
import { getFileBySlug } from '~/lib/content'
import HeroSection from './HeroSection'

type PageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = []

  for (const page of PAGES) slugs.push({ slug: [page.slug.slice(1)] })

  return slugs
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params

  const file = await getFileBySlug('page', slug ? `/${slug}` : '/')
  if (!file) notFound()

  return {
    description: file.frontmatter.hero.subtitle,
    title: `Mika Reich | ${file.frontmatter.pageTitle}`,
  }
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params

  const file = await getFileBySlug('page', slug ? `/${slug}` : '/')
  if (!file) notFound()

  const { frontmatter, source, components } = file

  return (
    <>
      <HeroSection {...frontmatter.hero} />

      <Content components={components} source={source} />
    </>
  )
}
