'use client'

import { useContext, useEffect } from 'react'

import { usePathname } from 'next/navigation'

import type { Route } from '@/utils/pageUtils'

import Container from './Container'
import { Context } from './ContextProvider'
import Link from './Link'
import NavBar from './NavBar'

type MenuProps = {
  routes: Route[]
}

export default function Menu({ routes }: MenuProps) {
  const { menuOpen, closeMenu } = useContext(Context)!
  const pathname = usePathname()

  useEffect(() => {
    closeMenu()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  return (
    menuOpen && (
      <div
        className={`fixed left-0 top-0 h-full w-full bg-raisin-black-200 bg-opacity-80 backdrop-blur md:hidden`}
      >
        <Container className="flex flex-col">
          <NavBar routes={routes} />
          <ol className="my-auto mt-[100px] text-center text-lg text-raisin-black-100">
            {routes.map(({ title, slug }, index) => (
              <li key={title} className="mb-[20px]">
                <span className="mr-[10px] text-primary">
                  {
                    // make index two digits
                    index.toLocaleString('en-US', {
                      minimumIntegerDigits: 2,
                      useGrouping: false,
                    })
                  }
                </span>
                <Link href={`/${slug}`}>{title}</Link>
              </li>
            ))}
          </ol>
        </Container>
      </div>
    )
  )
}
