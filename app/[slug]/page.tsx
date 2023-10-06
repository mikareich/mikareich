import { notFound } from 'next/navigation'

import AllPosts from '@/components/content/AllPosts'
import AllProjects from '@/components/content/AllProjects'
import AllSkills from '@/components/content/AllSkills'
import MdxContent from '@/components/content/MdxContent'
import AboutMeHeroSection from '@/components/layout/AboutMeHeroSection'
import { getAllPages, getPageBySlug } from '@/utils/contentUtils'

type PageProps = {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const pages = await getAllPages(false)

  return pages.map((page) => ({
    slug: page.frontMatter.slug,
  }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = params
  const page = await getPageBySlug(slug)

  if (!page) notFound()

  return {
    title: `Mika Reich | ${page.frontMatter.title}`,
    description: page.frontMatter.description,
  }
}

export default async function Page({ params }: PageProps) {
  const { slug } = params
  const page = await getPageBySlug(slug)

  if (!page) notFound()

  const components = {
    AboutMeHeroSection,
    AllSkills,
    AllProjects,
    AllPosts,
  }

  return <MdxContent components={components} source={page.content} />
}
