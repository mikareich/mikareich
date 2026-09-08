"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Link } from "next-view-transitions";
import { useEffect, useRef, useState } from "react";
import { NAVIGATION } from "~/content/config";
import { cn } from "~/lib/cn";
import FullInitialsSVG from "../../public/images/full-initials.svg";
import SmallInitialsSVG from "../../public/images/small-initials.svg";
import { AppBar } from "./app-bar";
import styles from "./NavBar.module.css";

const toggleStyles =
  "grid size-11 shrink-0 cursor-pointer place-items-center focus-visible:outline-none focus-visible:outlined sm:hidden";

function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <AppBar.Logo asChild className="min-w-0 shrink px-0" href="/">
      <Link aria-label="Mika Reich home" href="/" onClick={onClick}>
        <Image alt="" className="h-auto sm:hidden" src={SmallInitialsSVG} />
        <Image
          alt=""
          className="h-auto max-w-full max-sm:hidden"
          src={FullInitialsSVG}
        />
      </Link>
    </AppBar.Logo>
  );
}

function NavItems({
  pathname,
  onNavigate,
}: {
  pathname: string;
  onNavigate?: () => void;
}) {
  return NAVIGATION.map(({ slug, title }) => {
    const isCurrent =
      pathname === slug || (slug !== "/" && pathname.startsWith(`${slug}/`));

    return (
      <li className="whitespace-nowrap text-lg sm:text-xl" key={slug}>
        <AppBar.Item
          asChild
          className="highlighted px-0 py-0 text-lg text-portfolio-text-strong leading-7 hover:no-underline sm:text-xl"
          href={slug}
        >
          <Link
            aria-current={isCurrent ? "page" : undefined}
            href={slug}
            onClick={onNavigate}
          >
            {title}
          </Link>
        </AppBar.Item>
      </li>
    );
  });
}

export default function NavBar() {
  const pathname = usePathname();
  const previousPathname = useRef(pathname);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (previousPathname.current !== pathname) {
      setIsMenuOpen(false);
      previousPathname.current = pathname;
    }
  }, [pathname]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 40rem)");
    const closeMenu = () => setIsMenuOpen(false);
    const closeOnDesktop = () => {
      if (desktop.matches) closeMenu();
    };

    desktop.addEventListener("change", closeOnDesktop);
    window.addEventListener("popstate", closeMenu);

    return () => {
      desktop.removeEventListener("change", closeOnDesktop);
      window.removeEventListener("popstate", closeMenu);
    };
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Dialog.Root onOpenChange={setIsMenuOpen} open={isMenuOpen}>
      <AppBar asChild className="mt-10 justify-between px-0 py-5 font-body">
        <nav aria-label="Primary">
          <Logo />

          <ol className="ol hidden shrink-0 gap-4 sm:flex">
            <NavItems pathname={pathname} />
          </ol>

          <Dialog.Trigger asChild>
            <button
              aria-label="Open navigation menu"
              className={toggleStyles}
              type="button"
            >
              <Image alt="" height={24} src="/icons/menu.svg" width={24} />
            </button>
          </Dialog.Trigger>
        </nav>
      </AppBar>

      <Dialog.Portal>
        <Dialog.Overlay
          className={cn(
            styles.surface,
            "fixed inset-0 z-40 bg-theme-bg/50 backdrop-blur-3xl sm:hidden",
          )}
        />
        <Dialog.Content
          aria-describedby={undefined}
          className={cn(
            styles.surface,
            "fixed inset-0 z-50 overflow-y-auto sm:hidden",
          )}
          onCloseAutoFocus={(event) => {
            // The mobile trigger is hidden after switching to the desktop layout.
            if (window.matchMedia("(min-width: 40rem)").matches) {
              event.preventDefault();
            }
          }}
        >
          <Dialog.Title className="sr-only">Navigation menu</Dialog.Title>
          <div className="container flex min-h-dvh flex-col">
            <AppBar
              asChild
              className="mt-10 justify-between bg-transparent px-0 py-5"
            >
              <div>
                <Logo onClick={closeMenu} />
                <Dialog.Close asChild>
                  <button
                    aria-label="Close navigation menu"
                    className={toggleStyles}
                    type="button"
                  >
                    <Image
                      alt=""
                      height={24}
                      src="/icons/close.svg"
                      width={24}
                    />
                  </button>
                </Dialog.Close>
              </div>
            </AppBar>

            <AppBar
              asChild
              className="flex-1 justify-center bg-transparent px-0 py-8 font-body"
            >
              <nav aria-label="Mobile">
                <ol className="ol space-y-4">
                  <NavItems onNavigate={closeMenu} pathname={pathname} />
                </ol>
              </nav>
            </AppBar>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
