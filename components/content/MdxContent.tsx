import type { ComponentType } from 'react'

import type { MDXComponents } from 'mdx/types'
import { MDXRemote } from 'next-mdx-remote/rsc'
import rehypeExternalLinks from 'rehype-external-links'
import rehypeHighlight from 'rehype-highlight'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'

import HorizontalLine from '../base/HorizontalLine'
import Image from '../base/Image'
import { List, ListItem } from '../base/List'
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Text,
  TextLarge,
} from '../base/Typography'
import Underline from '../base/Underline'
import Link from '../navigation/Link'

function ActiveLink({ children, href, ...props }: Parameters<typeof Link>[0]) {
  return (
    <Link href={href} active {...props}>
      {children}
    </Link>
  )
}

function ActiveUnderline({
  children,
  ...props
}: Parameters<typeof Underline>[0]) {
  return (
    <Underline active {...props}>
      {children}
    </Underline>
  )
}

const typographyComponents: MDXComponents = {
  h1: Heading1,
  h2: Heading2,
  h3: Heading3,
  h4: Heading4,
  h5: Heading5,
  TextLarge,
  p: Text,
  a: ActiveLink as ComponentType,
  Underline: ActiveUnderline,
  u: Underline,
  hr: HorizontalLine,
  ol: List,
  li: ListItem,
}

const layoutComponents: MDXComponents = {
  img: Image as ComponentType,
}

type ContentProps = {
  components?: MDXComponents
  source: string
}

export default function MdxContent({ components, source }: ContentProps) {
  return (
    // @ts-ignore
    <MDXRemote
      source={source}
      // override literal html elements with custom components
      options={{
        mdxOptions: {
          remarkPlugins: [remarkMath],
          rehypePlugins: [
            [
              rehypeExternalLinks,
              { target: '_blank', rel: ['noopener', 'noreferrer'] },
            ],
            // @ts-ignore
            rehypeHighlight,
            // @ts-ignore
            [rehypeKatex],
          ],
          format: 'mdx',
        },
      }}
      components={{
        ...typographyComponents,
        ...layoutComponents,
        ...components,
      }}
    />
  )
}
