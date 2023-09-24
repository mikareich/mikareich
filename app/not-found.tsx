import MdxContent from '@/components/MdxContent'
import { getPageBySlug } from '@/utils/pageUtils'

export default async function NotFound() {
  const page = await getPageBySlug('index')

  return <MdxContent source={page!.content} />
}
