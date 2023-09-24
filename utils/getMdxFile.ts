import fs from 'fs/promises'
import nodePath from 'path'

import matter from 'gray-matter'

export type MDXFile<FrontMatter> = {
  content: string
  frontMatter: FrontMatter
}

/**
 * Get the content and front-matter of an MDX file
 * @param path The path to the MDX file
 */
export default async function getMdxFile<
  FrontMatter extends Record<string, unknown>,
>(path: string): Promise<MDXFile<FrontMatter> | null> {
  const realPath = nodePath.join(process.cwd(), path)
  try {
    const fileContent = await fs.readFile(realPath, 'utf-8')
    const { content, data } = matter(fileContent)

    return {
      content,
      frontMatter: data as FrontMatter,
    }
  } catch (error) {
    return null
  }
}
