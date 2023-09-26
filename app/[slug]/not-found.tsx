import matter from 'gray-matter'

import MdxContent from '@/components/MdxContent'
import NotFoundMDX from '@/content/pages/not-found.mdx'

const { content, data: frontMatter } = matter(NotFoundMDX)

export const metadata = {
  title: `Mika Reich | ${frontMatter.title}`,
  description: frontMatter.description,
}

export default async function NotFound() {
  return <MdxContent source={content} />
}
