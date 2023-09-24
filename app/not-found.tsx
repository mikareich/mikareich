import MdxContent from '@/components/MdxContent'
import { getNotFoundPage } from '@/utils/pageUtils'

export default async function NotFound() {
  const { content } = (await getNotFoundPage())!

  return <MdxContent source={content} />
}
