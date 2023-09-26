import matter from 'gray-matter'

import MdxContent from '@/components/MdxContent'
import NotFoundMDX from '@/content/pages/not-found.mdx'

export const metadata = {
  title: 'Mika Reich | Page not found',
  description: 'The page you are looking for does not exist',
}

export default async function NotFound() {
  const { content } = matter(NotFoundMDX)

  return <MdxContent source={content} />
}
