'use client'

import type { ComponentProps } from 'react'
import { useEffect, useState } from 'react'

import NextLink from 'next/link'
import { usePathname } from 'next/navigation'

import Underline from './Underline'

// same props as NextLink but href is optional
type LinkProps = {
  active?: boolean
} & ComponentProps<typeof NextLink>

export default function Link({
  children,
  active = false,
  href,
  className,
  ...props
}: LinkProps) {
  const [isActive, setIsActive] = useState(active)

  const pathname = usePathname()

  useEffect(() => {
    const indexPageActive = href === '/index' && pathname === '/'
    setIsActive(active || href === pathname || indexPageActive)
  }, [active, href, pathname, setIsActive])

  return (
    <NextLink href={href} className={className} {...props}>
      <Underline active={isActive}>{children}</Underline>
    </NextLink>
  )
}
