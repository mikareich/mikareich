import makeTwoDigitNumber from '@/utils/makeTwoDigitNumber'
import { getAllPosts } from '@/utils/postUtils'

import Link from './Link'
import { Small } from './Typography'

export default async function PostList() {
  const allPosts = await getAllPosts()

  return (
    <ol className="mt-[50px] flex flex-col gap-[30px] px-[10px]">
      {allPosts.map(({ frontMatter }, index) => (
        <li
          key={frontMatter.slug}
          className="grid grid-cols-[auto_1fr_auto] grid-rows-[1fr_auto] items-center gap-x-[20px]"
        >
          <span className="row-span-2 text-lg text-primary xs:text-xl">
            {makeTwoDigitNumber(index)}
          </span>
          <div className="col-span-2 overflow-hidden xs:col-span-1">
            <p className="font-heading !text-baby-powder xs:text-lg">
              {frontMatter.title}
            </p>
            <div className="flex overflow-hidden">
              <Small className="shrink-0">
                {new Date(frontMatter.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}{' '}
                .{' '}
              </Small>

              <Small className="ml-[5px] truncate">
                {frontMatter.description}
              </Small>
            </div>
          </div>
          <Link
            className="col-start-2 xs:col-start-3"
            href={`/blog/${frontMatter.slug}`}
          >
            Read more
          </Link>
        </li>
      ))}
    </ol>
  )
}
