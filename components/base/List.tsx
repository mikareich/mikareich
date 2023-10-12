import clsx from 'clsx'

import appendStyles from '@/utils/appendStyles'
import tailwindMerge from '@/utils/tailwindMerge'

type ListProps = {
  inline?: boolean
} & React.HTMLAttributes<HTMLUListElement>

const listStyle = tailwindMerge<ListProps>(
  'flex gap-x-[20px] gap-y-[10px] list-inside [counter-reset:list-counter]]',
  {
    inline: false || undefined,
    use: 'flex-col',
  },
  {
    inline: true,
    use: 'items-center',
  },
)

export function List({ inline, className, children, ...props }: ListProps) {
  return (
    <ol start={0} className={clsx(className, listStyle({ inline }))} {...props}>
      {children}
    </ol>
  )
}

// const counterStyle =
//   'before:absolute before '

export const ListItem = appendStyles(
  'li',
  'text-body-color marker:content-[counter(list-counter,decimal-leading-zero)] marker:font-heading marker:box-border marker:[counter-increment:list-counter] marker:text-primary-color ',
)
