import Image from 'next/image'
import type { PageMatter } from '~/lib/content'

export default function HeroSection({
  title,
  subtitle,
  imageSrc,
}: PageMatter['hero']) {
  return (
    <header className="grid grid-cols-[1fr_auto] grid-rows-2 gap-x-5 sm:h-72 lg:gap-x-20">
      <h1 className="self-end font-black font-heading text-5xl text-gray-100 leading-10 sm:text-6xl">
        {title}
      </h1>

      <Image
        alt={`Image for ${title}`}
        className="row-span-2 hidden aspect-square h-full w-40 self-center overflow-hidden sm:block sm:w-52 lg:w-72"
        height={300}
        src={imageSrc}
        width={300}
      />

      <h3 className="row-start-2 font-thin text-2xl text-gray-200 sm:text-3xl">
        {subtitle}
      </h3>
    </header>
  )
}
