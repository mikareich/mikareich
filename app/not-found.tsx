import MdxContent from '@/components/MdxContent'
import { getNotFoundPage } from '@/utils/pageUtils'

export async function generateMetadata() {
  const p = await getNotFoundPage()

  console.log(p)

  return {
    title: `Mika Reich | ${p?.frontMatter.title}`,
    description: p?.frontMatter.description,
  }
}

export default async function NotFound() {
  const p = await getNotFoundPage()

  return <MdxContent source={p?.content || ''} />
}
