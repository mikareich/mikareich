import { getAllPosts } from '@/utils/contentUtils'
import makeTwoDigitNumber from '@/utils/makeTwoDigitNumber'

import { List, ListItem } from '../base/List'
import { Small } from '../base/Typography'
import Link from '../navigation/Link'

export default async function PostList() {
  const allPosts = await getAllPosts()

  return (
    <List className="mt-[50px] flex flex-col gap-[30px] px-[10px]">
      {allPosts.map(({ frontMatter }) => (
        <ListItem
          key={frontMatter.slug}
          className="flex flex-col overflow-hidden"
        >
          <Link
            href={`/blog/${frontMatter.slug}`}
            className="w-full font-heading text-heading-color xs:text-lg"
          >
            {frontMatter.title}
          </Link>

          <div className="flex overflow-hidden">
            <Small className="shrink-0">
              {frontMatter.date.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </Small>
            {' - '}
            <Small className="ml-[5px] truncate">
              {frontMatter.description}
            </Small>
          </div>
        </ListItem>
      ))}
    </List>
  )
}
