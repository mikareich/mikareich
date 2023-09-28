import appendStyles from '@/utils/appendStyles'
import tailwindMerge from '@/utils/tailwindMerge'

const horizontalLineStyles = tailwindMerge(
  'border-t-2 border-raisin-black-100 my-[50px]',
)

const HorizontalLine = appendStyles('hr', horizontalLineStyles)

export default HorizontalLine
