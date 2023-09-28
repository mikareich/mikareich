import fs from 'fs/promises'
import nodePath from 'path'

import type { MDXFile } from './getMdxFile'
import getMdxFile from './getMdxFile'

const BLOG_PATH = '/content/blog'

export type PostMetadata = {
  title: string
  description: string
  heroImage: string
  heroImageAlt: string
  skills: string[]
  slug: string
  date: Date
}

export type MDXPost = MDXFile<PostMetadata>

/** Returns all blog posts */
export async function getAllPosts(): Promise<MDXPost[]> {
  const realPath = nodePath.join(process.cwd(), BLOG_PATH)
  const blogFiles = await fs.readdir(realPath)
  const posts = await Promise.all(
    blogFiles.map((path) => getMdxFile<PostMetadata>(`${BLOG_PATH}/${path}`)),
  )

  return posts
    .filter((post) => post !== undefined)
    .sort(
      (a, b) =>
        new Date(b!.frontMatter.date).getTime() -
        new Date(a!.frontMatter.date).getTime(),
    ) as MDXPost[]
}

/** Returns the blog post with the given slug
 * @param slug The slug of the blog post
 */
export async function getPostBySlug(
  slug: string,
): Promise<MDXPost | undefined> {
  const posts = await getAllPosts()
  const post = posts.find((p) => p.frontMatter.slug === slug)

  return post
}
