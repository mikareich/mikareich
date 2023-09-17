"use client";

import { createContext, useState } from "react";

type ContextType = ReturnType<typeof useMenu>;
export const Context = createContext<ContextType | null>(null);

export const useMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);
  const openMenu = () => setMenuOpen(true);

  return {
    menuOpen,
    toggleMenu,
    closeMenu,
    openMenu,
  };
};

export default function ContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const menuContext = useMenu();
  return (
    <Context.Provider value={{ ...menuContext }}>{children}</Context.Provider>
  );
}
