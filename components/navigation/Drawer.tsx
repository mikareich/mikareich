'use client'

import { useContext, useEffect } from 'react'

import { usePathname } from 'next/navigation'

import type { PageMetadata } from '@/utils/contentUtils'
import makeTwoDigitNumber from '@/utils/makeTwoDigitNumber'

import { Context } from '../ContextProvider'
import Container from '../layout/Container'

import Link from './Link'
import NavBar from './NavBar'

type DrawerProps = {
  routes: PageMetadata[]
}

export default function Drawer({ routes }: DrawerProps) {
  const { drawerOpen, closeDrawer } = useContext(Context)!
  const pathname = usePathname()

  useEffect(() => {
    closeDrawer()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  return drawerOpen ? (
    <div className="fixed left-0 top-0 h-full w-full bg-background-accent-color bg-opacity-80 font-heading backdrop-blur lg:hidden">
      <Container className="flex flex-col">
        <NavBar routes={routes} />
        <ol className="text-text mx-auto my-auto mt-[100px] w-fit text-lg">
          {routes.map(({ title, slug }, index) => (
            <li key={title} className="mb-[20px]">
              <span className="mr-[10px] text-primary-color">
                {makeTwoDigitNumber(index)}
              </span>
              <Link href={`/${slug}`}>{title}</Link>
            </li>
          ))}
        </ol>
      </Container>
    </div>
  ) : null
}
