import type { MDXFile } from './getMdxFile'
import getMdxFile from './getMdxFile'

const PAGE_PATHS = {
  abouteMe: '/content/pages/about-me.mdx',
  projects: '/content/pages/projects.mdx',
  contact: '/content/pages/contact.mdx',
}

export const NOT_FOUND_PATH = '/content/pages/not-found.mdx'

type PageMetadata = {
  title: string
  description: string
  slug: string
}

/** Returns all pages */
export async function getAllPages(): Promise<MDXFile<PageMetadata>[]> {
  // search for all mdx files inside the pages folder and parse them
  const pages = await Promise.all(
    Object.values(PAGE_PATHS).map(async (path) => {
      const page = await getMdxFile<PageMetadata>(path)
      return page
    }),
  )

  return pages
}

export type Route = {
  title: string
  slug: string
}

/** Returns all routes for the pages */
export async function getPageRoutes(): Promise<Route[]> {
  const pages = await getAllPages()

  return pages.map((page) => ({
    title: page.frontMatter.title,
    slug: page.frontMatter.slug,
  }))
}

/** Returns the page with the given slug */
export async function getPageBySlug(
  slug: string,
): Promise<MDXFile<PageMetadata> | undefined> {
  const pages = await getAllPages()
  const page = pages.find((p) => p.frontMatter.slug === slug)

  return page
}

/** Returns the not-found page */
export async function getNotFoundPage(): Promise<MDXFile<PageMetadata>> {
  return getMdxFile<PageMetadata>(NOT_FOUND_PATH)
}
