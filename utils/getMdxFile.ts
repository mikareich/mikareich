import fs from 'fs/promises'

import matter from 'gray-matter'

export type MDXFile<FrontMatter extends Record<string, unknown>> = {
  content: string
  frontMatter: FrontMatter
}

/**
 * Get the content and front-matter of an MDX file
 * @param path Absolute path to the MDX file
 */
export default async function getMdxFile<
  FrontMatter extends Record<string, unknown>,
>(path: string): Promise<MDXFile<FrontMatter>> {
  const fileContent = await fs.readFile(path, 'utf-8')
  const { content, data } = matter(fileContent)

  return {
    content,
    frontMatter: data as FrontMatter,
  }
}
