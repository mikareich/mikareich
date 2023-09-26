import { notFound } from 'next/navigation'

import MdxContent from '@/components/MdxContent'
import getMdxFile from '@/utils/getMdxFile'
import type { PageMetadata } from '@/utils/pageUtils'
import { ALL_PAGE_PATHS } from '@/utils/pageUtils'

export async function generateMetadata() {
  const page = await getMdxFile<PageMetadata>(ALL_PAGE_PATHS.blog)

  if (!page) notFound()

  return {
    title: `Mika Reich | ${page.frontMatter.title}`,
    description: page.frontMatter.description,
  }
}

export default async function Page() {
  const page = await getMdxFile<PageMetadata>(ALL_PAGE_PATHS.blog)

  if (!page) notFound()

  return <MdxContent source={page.content} />
}
