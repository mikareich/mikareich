import type { ComponentType } from 'react'

import type { MDXComponents } from 'mdx/types'
import { MDXRemote } from 'next-mdx-remote/rsc'
import rehypeExternalLinks from 'rehype-external-links'

import AllProjects from './AllProjects'
import AllSkills from './AllSkills'
import HeroSection from './HeroSection'
import Link from './Link'
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Text,
  TextLarge,
} from './Typography'
import Underline from './Underline'

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
}

const layoutComponents: MDXComponents = {
  HeroSection,
  AllSkills,
  AllProjects,
}

type ContentProps = {
  components?: MDXComponents
  source: string
}

export default function MdxContent({ components, source }: ContentProps) {
  return (
    <MDXRemote
      source={source}
      // override literal html elements with custom components
      options={{
        mdxOptions: {
          rehypePlugins: [[rehypeExternalLinks, { target: '_blank' }]],
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
