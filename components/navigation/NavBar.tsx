'use client'

import { useContext } from 'react'

import { Bars2Icon, XMarkIcon } from '@heroicons/react/20/solid'

import type { PageMetadata } from '@/utils/contentUtils'
import makeTwoDigitNumber from '@/utils/makeTwoDigitNumber'

import { List, ListItem } from '../base/List'
import Logo from '../base/Logo'
import { Context } from '../ContextProvider'

import Link from './Link'

type NavBarProps = {
  routes: PageMetadata[]
}
export default function NavBar({ routes }: NavBarProps) {
  const { drawerOpen, toggleDrawer } = useContext(Context)!

  return (
    <nav className="flex w-full font-heading">
      {/* Logo */}
      <div className="mr-auto">
        <Logo />
      </div>

      {/* NavBar link (hidden if size < md-breakpoint) */}
      <List inline className="hidden text-lg lg:flex">
        {routes.map(({ title, slug }, index) => (
          <ListItem key={title}>
            <Link href={`/${slug}`}>{title}</Link>
          </ListItem>
        ))}
      </List>

      {/* Toggle Drawer Button (only if size < md-breakpoint) */}
      <button
        type="button"
        aria-label="Toggle Drawer"
        className="object-contain text-lg text-body-color lg:hidden"
        onClick={toggleDrawer}
      >
        {drawerOpen ? <XMarkIcon width={24} /> : <Bars2Icon width={24} />}
      </button>
    </nav>
  )
}
