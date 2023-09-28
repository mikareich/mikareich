import clsx from 'clsx'
import type { ImageProps } from 'next/image'
import NextImage from 'next/image'

import { Small } from './Typography'

export default function Image({ alt, src, className, ...props }: ImageProps) {
  return (
    <div className="my-[20px]">
      <NextImage
        className={clsx(className, 'mx-auto h-auto w-auto rounded-lg')}
        alt={alt || 'No description'}
        src={src}
        width={1000}
        height={1000}
        {...props}
      />
      <Small className="text-center">{alt || 'No description.'}</Small>
    </div>
  )
}
