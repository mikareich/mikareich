import { notFound } from 'next/navigation'

import Code from '@/components/base/CodeBlock'
import Pre from '@/components/base/Preformatted'
import MdxContent from '@/components/content/MdxContent'
import PostHeroSection from '@/components/layout/PostHeroSection'
import { getAllPosts, getPostBySlug } from '@/utils/contentUtils'

type PageProps = {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const posts = await getAllPosts()

  return posts.map((page) => ({
    slug: page.frontMatter.slug,
  }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = params
  const post = await getPostBySlug(slug)

  if (!post) notFound()

  return {
    title: `Mika Reich | ${post.frontMatter.title}`,
    description: post.frontMatter.description,
  }
}

export default async function Page({ params }: PageProps) {
  const { slug } = params
  const post = await getPostBySlug(slug)

  if (!post) notFound()

  const components = {
    code: Code,
    pre: Pre,
  }

  const { title, description, heroImage, heroImageAlt, date } = post.frontMatter

  return (
    <>
      <PostHeroSection
        title={title}
        description={description}
        heroImage={heroImage}
        heroImageAlt={heroImageAlt}
        date={date}
      />
      <MdxContent components={components} source={post.content} />
    </>
  )
}
