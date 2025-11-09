import { Link } from 'next-view-transitions'
import { POSTS } from '~/content/config'
import { getFileBySlug } from '~/lib/content'

export default async function PostList() {
  const posts = await Promise.all(
    POSTS.map(({ slug }) => getFileBySlug('post', slug)),
  )

  return (
    <section className="space-y-10">
      {posts.map((post, i) =>
        !post ? null : (
          <div
            className="grid grid-cols-[auto_1fr_auto] grid-rows-[auto_auto] gap-x-4 gap-y-1 overflow-hidden max-sm:grid-cols-[auto_auto] max-sm:grid-rows-[repeat(4,auto)]"
            key={post.frontmatter.hero.title}
          >
            <span className="row-span-2 row-start-1 self-start text-2xl text-blue-200 max-sm:row-span-4">
              {i.toString().padStart(2, '0')}
            </span>

            <h2 className="truncate font-heading font-medium text-2xl text-gray-100 sm:whitespace-nowrap">
              {post.frontmatter.hero.title}
            </h2>

            <div className="flex gap-4">
              {post.frontmatter.hero.tags.map((tag) => (
                <span
                  className="truncate font-thin text-sm uppercase"
                  key={tag}
                >
                  <span className="text-blue-200"># </span>
                  {tag}
                </span>
              ))}
            </div>

            <span className="truncate">{post.frontmatter.hero.subtitle}</span>

            <Link
              className="highlighted w-fit sm:justify-self-end"
              href={`/blog${post.frontmatter.slug}`}
            >
              Read more...
            </Link>
          </div>
        ),
      )}
    </section>
  )
}
