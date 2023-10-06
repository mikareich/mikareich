import fs from 'fs/promises'

import type { MDXFile } from './getMdxFile'
import getMdxFile from './getMdxFile'

export type PageMetadata = {
  title: string
  description: string
  slug: string
}

export type MDXPage = MDXFile<PageMetadata>

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

const PAGES_PATH = 'content/pages'
const ERROR_PAGE_SLUGS = ['not-found', 'server-error']
const BLOG_PATH = 'content/blog'

/**
 * Returns all MDX files in the given directory
 * @param contentDirectory The directory to search for MDX files
 */
async function getContentFiles<Metadata extends Record<string, unknown>>(
  contentDirectory: string,
): Promise<MDXFile<Metadata>[]> {
  const allPaths = await fs.readdir(contentDirectory)

  const files = await Promise.all(
    allPaths.map((path) => getMdxFile<Metadata>(`${contentDirectory}/${path}`)),
  )

  // filter not found files
  return files.filter((file) => file !== undefined) as MDXFile<Metadata>[]
}

/** Returns all pages
 * @param includeErrorPage Whether to exclude error pages
 */
export async function getAllPages(includeErrorPage = true): Promise<MDXPage[]> {
  const allPages = await getContentFiles<PageMetadata>(PAGES_PATH)
  return allPages.filter(
    (page) =>
      includeErrorPage || !ERROR_PAGE_SLUGS.includes(page.frontMatter.slug),
  )
}
/** Returns the page with the given slug
 * @param slug The slug of the page
 */
export async function getPageBySlug(
  slug: string,
): Promise<MDXPage | undefined> {
  const pages = await getAllPages()
  const page = pages.find((p) => p.frontMatter.slug === slug)

  return page
}

/**
 * Returns not found page
 */
export async function getNotFoundPage(): Promise<MDXPage | undefined> {
  const page = await getPageBySlug('not-found')

  return page
}

/** Returns all blog posts */
export async function getAllPosts(): Promise<MDXPost[]> {
  const posts = await getContentFiles<PostMetadata>(BLOG_PATH)
  return posts.sort(
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

export function getFrontMatter<File extends MDXFile>(
  files: File[],
): File['frontMatter'][] {
  return files.map((file) => file.frontMatter)
}
