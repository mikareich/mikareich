import { createElement } from 'react'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import Content from '~/components/Content'
import type { ComponentMap } from '~/lib/content'
import type { Headings } from '~/lib/getHeadings'

type ContentProps = {
  source: string
  components: ComponentMap
  headings: Headings
}

type HeadingProps = {
  level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  headings: Headings
} & React.HTMLAttributes<HTMLHeadingElement>

const Heading = ({ level, headings, id, children, ...props }: HeadingProps) => {
  const index = headings.findIndex((heading) => heading.slug === id)
  const indexElement = (
    <span className="font-heading text-blue-200" style={{ fontSize: 'unset' }}>
      {index.toString().padStart(2, '0')}{' '}
    </span>
  )

  const component = createElement(
    level,
    { id, ...props },
    <>
      {indexElement} {children}
    </>,
  )

  return component
}

export default function PostContent({
  source,
  headings,
  components: customComponents,
}: ContentProps) {
  const components = {
    h1: (props: HeadingProps) => (
      <Heading {...props} headings={headings} level="h1" />
    ),
    h2: (props: HeadingProps) => (
      <Heading {...props} headings={headings} level="h2" />
    ),
    h3: (props: HeadingProps) => (
      <Heading {...props} headings={headings} level="h3" />
    ),
    h4: (props: HeadingProps) => (
      <Heading {...props} headings={headings} level="h4" />
    ),
    h5: (props: HeadingProps) => (
      <Heading {...props} headings={headings} level="h5" />
    ),
    h6: (props: HeadingProps) => (
      <Heading {...props} headings={headings} level="h6" />
    ),
    ...customComponents,
  }

  return (
    <article className="prose mb-8">
      <Content
        components={components}
        options={{
          mdxOptions: {
            rehypePlugins: [
              rehypeSlug,
              [
                rehypePrettyCode,
                { keepBackground: false, theme: 'github-dark' },
              ],
            ],
          },
        }}
        source={source}
      />
    </article>
  )
}
