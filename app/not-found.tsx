import MdxContent from '@/components/MdxContent'
import { getNotFoundPage } from '@/utils/pageUtils'

export async function generateMetadata() {
  const { frontMatter } = await getNotFoundPage()

  return {
    title: `Mika Reich | ${frontMatter.title}`,
    description: frontMatter.description,
  }
}

export default async function NotFound() {
  const { content } = await getNotFoundPage()

  return <MdxContent source={content} />
}
