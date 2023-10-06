import NextImage from 'next/image'

import type { PostMetadata } from '@/utils/contentUtils'

import { TextLarge, Title } from '../base/Typography'

type PostHeroSectionProps = {
  title: PostMetadata['title']
  description: PostMetadata['description']
  heroImage: PostMetadata['heroImage']
  heroImageAlt: PostMetadata['heroImageAlt']
  date: PostMetadata['date']
}

export default function PostHeroSection({
  heroImage,
  title,
  heroImageAlt,
  description,
  date,
}: PostHeroSectionProps) {
  return (
    <section className="mb-[50px]">
      <div className="relative min-h-[300px] w-full xs:min-h-[500px]">
        <NextImage
          src={heroImage}
          alt={heroImageAlt}
          fill
          objectFit="cover"
          className="rounded-lg"
        />
        <div className="absolute flex h-full flex-col bg-gradient-to-b from-transparent to-raisin-black-900 p-[20px]">
          <TextLarge className="mb-0 mt-auto">
            {new Date(date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </TextLarge>
          <Title className="mt-0">{title}</Title>
        </div>
      </div>
      <TextLarge>{description}</TextLarge>
    </section>
  )
}
