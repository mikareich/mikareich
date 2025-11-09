import { slug as generateSlug } from 'github-slugger'

export type Headings = { content: string; slug: string }[]

export default function getHeadings(source: string): Headings {
  const headings = []

  for (const line of source.split('\n')) {
    const isHeading = line.match(/#{1,6}.+/g)
    if (!isHeading) continue

    const content = line.trim().split(' ').slice(1).join(' ')
    const slug = generateSlug(content)

    headings.push({ content, slug })
  }

  return headings
}
