import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'
import { POSTS } from '~/content/config'
import { getFileBySlug } from '~/lib/content'
import getHeadings from '~/lib/getHeadings'
import Comments from './Comments'
import HeroSection from './HeroSection'
import Content from './PostContent'
import TableOfContents from './TableOfContents'

type PageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = []

  for (const post of POSTS) slugs.push({ slug: post.slug.slice(1) })

  return slugs
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params

  const file = await getFileBySlug('post', slug ? `/${slug}` : '/')
  if (!file) notFound()

  return {
    description: file.frontmatter.hero.subtitle,
    title: `Mika Reich | ${file.frontmatter.hero.title}`,
  }
}

export default async function Post({ params }: PageProps) {
  const { slug } = await params

  const file = await getFileBySlug('post', slug ? `/${slug}` : '/')
  if (!file) notFound()

  const { frontmatter, source, components } = file
  const headings = getHeadings(source)

  return (
    <>
      <HeroSection {...frontmatter} />

      <main className="flex justify-between gap-4">
        {/* Upper Side TOC */}
        <div className="max-w-prose overflow-hidden">
          <details className="max-lg:mb-4 lg:hidden">
            <summary className="mt-6 mb-4 cursor-pointer font-bold font-heading text-gray-100 text-xl sm:text-2xl">
              <span className="highlighted">On this page </span>
            </summary>

            <TableOfContents
              description={frontmatter.hero.subtitle}
              headings={headings}
              id={`${slug}.mdx`}
            />
          </details>

          {/* Actual Content */}
          <Content
            components={components}
            headings={headings}
            source={source}
          />

          <Suspense fallback="Loading Comments...">
            <Comments postId={slug} />
          </Suspense>
        </div>

        {/* Right Side TOC */}

        <div className="sticky top-5 h-min max-w-72 overflow-hidden max-lg:hidden">
          <p className="mb-2 font-body text-gray-100 text-lg sm:text-xl">
            On this page
          </p>

          <TableOfContents
            description={frontmatter.hero.subtitle}
            headings={headings}
            id={`${slug}.mdx`}
          />
        </div>
      </main>
    </>
  )
}
