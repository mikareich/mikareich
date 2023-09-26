import { notFound } from 'next/navigation'

import MdxContent from '@/components/MdxContent'
import {
  getPagesByPath,
  getPageBySlug,
  DYNAMIC_PAGE_PATHS,
} from '@/utils/pageUtils'

type PageProps = {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const pages = await getPagesByPath(Object.values(DYNAMIC_PAGE_PATHS))

  console.log(pages)

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

  console.log(slug, page)

  if (!page) notFound()

  return <MdxContent source={page.content} />
}
