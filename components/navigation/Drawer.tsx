'use client'

import { useContext, useEffect } from 'react'

import { usePathname } from 'next/navigation'

import type { PageMetadata } from '@/utils/contentUtils'
import makeTwoDigitNumber from '@/utils/makeTwoDigitNumber'

import { List, ListItem } from '../base/List'
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
        <List className="mx-auto mt-[100px] gap-y-[20px] text-lg">
          {routes.map(({ title, slug }) => (
            <ListItem key={title}>
              <Link href={`/${slug}`}>{title}</Link>
            </ListItem>
          ))}
        </List>
      </Container>
    </div>
  ) : null
}
