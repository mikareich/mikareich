'use client'

import { useContext } from 'react'

import { Bars2Icon, XMarkIcon } from '@heroicons/react/20/solid'

import makeTwoDigitNumber from '@/utils/makeTwoDigitNumber'
import type { PageMetadata } from '@/utils/pageUtils'

import { Context } from './ContextProvider'
import Link from './Link'
import Logo from './Logo'

type NavBarProps = {
  routes: PageMetadata[]
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
      <ol className="hidden items-center gap-[20px] text-lg text-raisin-black-100 lg:flex">
        {routes.map(({ title, slug }, index) => (
          <li key={title} className="shrink-0">
            <span className="mr-[10px] text-primary">
              {makeTwoDigitNumber(index)}
            </span>
            <Link href={`/${slug}`}>{title}</Link>
          </li>
        ))}
      </ol>

      {/* Toggle Drawer Button (only if size < md-breakpoint) */}
      <button
        type="button"
        aria-label="Toggle Drawer"
        className="object-contain text-lg text-raisin-black-100 lg:hidden"
        onClick={toggleDrawer}
      >
        {drawerOpen ? <XMarkIcon width={24} /> : <Bars2Icon width={24} />}
      </button>
    </nav>
  )
}
