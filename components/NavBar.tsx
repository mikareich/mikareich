'use client'

import { useContext } from 'react'

import { Bars2Icon, XMarkIcon } from '@heroicons/react/20/solid'

import type { Route } from '@/utils/pageUtils'

import { Context } from './ContextProvider'
import Link from './Link'
import Logo from './Logo'

const a = 3 - []

type NavBarProps = {
  routes: Route[]
}
export default function NavBar({ routes }: NavBarProps) {
  const { drawerOpen, toggleDrawer } = useContext(Context)!

  return (
    <nav className="flex  w-full font-heading">
      {/* Logo */}
      <div className="mr-auto">
        <Logo />
      </div>

      {/* NavBar link (hidden if size < md-breakpoint) */}
      <ol className="hidden items-center gap-[20px] text-lg text-raisin-black-100 md:flex">
        {routes.map(({ title, slug }, index) => (
          <li key={title}>
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

      {/* Toggle Drawer Button (only if size < md-breakpoint) */}
      <button
        type="button"
        aria-label="Toggle Drawer"
        className="object-contain text-lg text-raisin-black-100 md:hidden"
        onClick={toggleDrawer}
      >
        {drawerOpen ? <XMarkIcon width={24} /> : <Bars2Icon width={24} />}
      </button>
    </nav>
  )
}
