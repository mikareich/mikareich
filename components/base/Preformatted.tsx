import appendStyles from '@/utils/appendStyles'
import tailwindMerge from '@/utils/tailwindMerge'

const preStyles = tailwindMerge(
  'overflow-auto bg-background-accent-color rounded-lg  my-[20px]',
)
const Pre = appendStyles('pre', preStyles)

export default Pre
