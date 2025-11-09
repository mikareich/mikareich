import type { Headings } from '~/lib/getHeadings'

type TocProps = {
  headings: Headings
  id: string
  description: string
}

export default function TableOfContents({
  description,
  headings,
  id,
}: TocProps) {
  return (
    <aside className="w-full space-y-2 overflow-hidden">
      <p>{description}</p>
      <ol className="ol space-y-4">
        {headings.map(({ slug, content }) => (
          <li className="truncate" key={slug}>
            <a className="highlighted truncate" href={`#${slug}`}>
              {content}
            </a>
          </li>
        ))}
      </ol>

      <a
        className="mb-2 block font-body font-thin text-sm uppercase"
        href={`https://github.com/mikareich/mikareich/edit/main/src/content/posts/${id}`}
      >
        Edit this page on GitHub
      </a>
    </aside>
  )
}
