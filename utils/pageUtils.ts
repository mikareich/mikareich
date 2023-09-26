import type { MDXFile } from './getMdxFile'
import getMdxFile from './getMdxFile'

export const PAGE_PATHS = [
  '/content/pages/about-me.mdx',
  '/content/pages/blog.mdx',
  '/content/pages/projects.mdx',
  '/content/pages/contact.mdx',
]

export const NOT_FOUND_PATH = '/content/pages/not-found.mdx'

export type PageMetadata = {
  title: string
  description: string
  slug: string
}

export type MDXPage = MDXFile<PageMetadata>

/** Returns all pages with the given paths
 */
export async function getAllPages(): Promise<MDXPage[]> {
  const pages = await Promise.all(PAGE_PATHS.map(getMdxFile<PageMetadata>))

  return pages.filter((page) => page !== undefined) as MDXPage[]
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
