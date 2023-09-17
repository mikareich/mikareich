"use client";

import Link from "./Link";
import Logo from "./Logo";
import { routes } from "@/utils/routes";
import { useContext } from "react";
import { Context } from "./ContextProvider";

import { Bars2Icon, XMarkIcon } from "@heroicons/react/20/solid";
export default function NavBar() {
  const { menuOpen, toggleMenu } = useContext(Context)!;

  return (
    <nav className="w-full flex">
      {/* Logo */}
      <div className="mr-auto">
        <Logo />
      </div>

      {/* NavBar link (hidden if size < md-breakpoint) */}
      <ol className="hidden md:flex items-center gap-[20px] text-lg text-raisin-black-100">
        {routes.map(({ name, href }, index) => (
          <li key={name}>
            <span className="text-primary">
              {
                // make index two digits
                index.toLocaleString("en-US", {
                  minimumIntegerDigits: 2,
                  useGrouping: false,
                })
              }
            </span>
            <Link href={href}>{name}</Link>
          </li>
        ))}
      </ol>

      {/* Toggle Menu Button (only if size < md-breakpoint) */}
      <button
        className="md:hidden text-raisin-black-100 object-contain text-lg"
        onClick={toggleMenu}
      >
        {menuOpen ? <XMarkIcon width={24} /> : <Bars2Icon width={24} />}
      </button>
    </nav>
  );
}
