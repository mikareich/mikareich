import Image from 'next/image'
import NextLink from 'next/link'

type LogoProps = {
  type?: 'full' | 'initials' | 'auto'
  className?: string
}

export default function Logo({ type = 'auto', className }: LogoProps) {
  return (
    <div className={`relative h-[50px] ${className}`}>
      <NextLink href="/">
        <picture>
          {type !== 'initials' && (
            <source
              srcSet="/logo-full.png"
              media="(min-width: 640px)"
              width={206}
              height={50}
            />
          )}

          {type !== 'full' && (
            <source
              srcSet="/logo-initials.png"
              media="(min-width: 0px)"
              width={80}
              height={50}
            />
          )}

          <Image
            src="/logo-full.png"
            alt="Mika Reich"
            width={206}
            height={50}
          />
        </picture>
      </NextLink>
    </div>
  )
}
