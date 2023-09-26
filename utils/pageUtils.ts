import type { MDXFile } from './getMdxFile'
import getMdxFile from './getMdxFile'

export const ALL_PAGE_PATHS = {
  abouteMe: '/content/pages/about-me.mdx',
  projects: '/content/pages/projects.mdx',
  contact: '/content/pages/contact.mdx',
  blog: '/content/pages/blog.mdx',
  notFound: '/content/pages/not-found.mdx',
}

export const DYNAMIC_PAGE_PATHS = {
  projects: ALL_PAGE_PATHS.projects,
  contact: ALL_PAGE_PATHS.contact,
  abouteMe: ALL_PAGE_PATHS.abouteMe,
}

export type PageMetadata = {
  title: string
  description: string
  slug: string
}

export type MDXPage = MDXFile<PageMetadata>

/** Returns all pages with the given paths
 * @param paths The paths to search for pages
 */
export async function getPagesByPath(paths: string[]): Promise<MDXPage[]> {
  const pages = await Promise.all(paths.map(getMdxFile<PageMetadata>))

  return pages.filter((page) => page !== undefined) as MDXPage[]
}

/** Returns the page with the given slug
 * @param slug The slug of the page
 * @param paths The paths to search for the page
 */
export async function getPageBySlug(
  slug: string,
  paths = Object.values(ALL_PAGE_PATHS),
): Promise<MDXPage | undefined> {
  const pages = await getPagesByPath(paths)
  const page = pages.find((p) => p.frontMatter.slug === slug)

  return page
}
