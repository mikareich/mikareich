'use client'

import { createContext, useState } from 'react'

export const useDrawer = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const toggleDrawer = () => setDrawerOpen((prev) => !prev)
  const closeDrawer = () => setDrawerOpen(false)
  const openDrawer = () => setDrawerOpen(true)

  return {
    drawerOpen,
    toggleDrawer,
    closeDrawer,
    openDrawer,
  }
}

type ContextType = ReturnType<typeof useDrawer>
export const Context = createContext<ContextType | null>(null)

export default function ContextProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const drawerContext = useDrawer()

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <Context.Provider value={{ ...drawerContext }}>{children}</Context.Provider>
  )
}
