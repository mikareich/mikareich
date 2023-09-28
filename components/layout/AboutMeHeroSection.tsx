import Image from 'next/image'

import { Heading3, Title } from '../base/Typography'

export default function AboutMeHeroSection() {
  const avatarSrc = '/app/avatar.svg'
  return (
    <section className="mb-[50px] grid w-full grid-cols-[1fr_auto] grid-rows-[auto_auto] xs:mb-[100px]">
      <Title className="col-span-1 self-end">Hey, I&apos;m Mika</Title>
      <Heading3 className="self-start text-heading-color">
        Student & programming enthusiast
      </Heading3>
      <picture className="col-start-2 row-span-2 row-start-1 self-center overflow-hidden rounded-full">
        <source
          srcSet={avatarSrc}
          media="(min-width: 1024px)"
          width={300}
          height={300}
        />
        <source
          srcSet={avatarSrc}
          media="(min-width: 768px)"
          width={260}
          height={260}
        />
        <source
          srcSet={avatarSrc}
          media="(min-width: 640px)"
          width={220}
          height={220}
        />
        <source
          srcSet={avatarSrc}
          media="(min-width: 576px)"
          width={180}
          height={180}
        />
        <source
          srcSet={avatarSrc}
          media="(min-width: 0px)"
          width={140}
          height={140}
        />

        <Image src={avatarSrc} alt="Mika Reich" width={300} height={300} />
      </picture>
    </section>
  )
}
