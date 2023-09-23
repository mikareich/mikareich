import { notFound } from 'next/navigation'

import MdxContent from '@/components/MdxContent'
import { getPageBySlug } from '@/utils/pageUtils'

export async function generateMetadata() {
  const page = await getPageBySlug('index')

  if (!page) notFound()

  return {
    title: `Mika Reich | ${page.frontMatter.title}`,
    description: page.frontMatter.description,
  }
}

export default async function Page() {
  const page = await getPageBySlug('index')

  if (!page) notFound()

  return <MdxContent source={page.content} />
}
