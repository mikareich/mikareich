import { notFound } from 'next/navigation'

import MdxContent from '@/components/MdxContent'
import { getAllPages, getPageBySlug } from '@/utils/pageUtils'

type PageProps = {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const pages = await getAllPages()

  return (
    pages
      // filter index page
      .filter((page) => page.frontMatter.slug !== 'index')
      .map((page) => ({
        slug: page.frontMatter.slug,
      }))
  )
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
  return <MdxContent source={page.content} />
}
