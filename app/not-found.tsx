import MdxContent from '@/components/content/MdxContent'
import { getNotFoundPage } from '@/utils/contentUtils'

export async function generateMetadata() {
  const page = await getNotFoundPage()

  return {
    title: `Mika Reich | ${page?.frontMatter.title}`,
    description: page?.frontMatter.description,
  }
}

export default async function Page() {
  const page = await getNotFoundPage()

  return <MdxContent source={page?.content || ''} />
}
