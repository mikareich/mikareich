"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTransitionRouter } from "next-view-transitions";
import { useEffect, useRef, useState } from "react";
import { Button } from "~/components/button";
import type { SOCIALS } from "~/content/config";
import { ActiveUnderlined } from "../active-link";
import { AppBar } from "./app-bar";

const fadeStyles =
  "motion-safe:data-[state=open]:animate-fade-in motion-safe:data-[state=closed]:animate-fade-out";

type DrawerProps = {
  links: { href: string; title: string }[];
  socials: typeof SOCIALS;
};

export function Drawer(props: DrawerProps) {
  const pathname = usePathname();
  return <DrawerInstance {...props} key={pathname} pathname={pathname} />;
}

function DrawerInstance({
  links,
  pathname,
  socials,
}: DrawerProps & { pathname: string }) {
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const router = useTransitionRouter();
  const close = () => setOpen(false);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 40rem)");
    const closeOnDesktop = () => setOpen(false);

    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <AppBar.Item asChild className="underlined-none sm:hidden">
        <Dialog.Trigger ref={trigger} asChild>
          <Button mode="icon">
            {open ? (
              <Cross1Icon className="size-5" />
            ) : (
              <HamburgerMenuIcon className="size-5" />
            )}
          </Button>
        </Dialog.Trigger>
      </AppBar.Item>

      <Dialog.Portal>
        <Dialog.Overlay className={`fixed inset-0 z-10 ${fadeStyles}`} />
        <Dialog.Content
          asChild
          onCloseAutoFocus={(event) => {
            event.preventDefault();
            trigger.current?.focus({ preventScroll: true });
          }}
        >
          <AppBar asChild>
            <aside
              className={`anchored-bottom-center/nav-bar anchored-visible-always [view-transition-name:mobile-drawer] border-t border-theme-border list-ordered grid place-content-center-safe justify-items-start z-20 h-full w-anchor/nav-bar inset-0 m-0 fixed overflow-y-auto overscroll-contain ${fadeStyles}`}
            >
              {links.map(({ href, title }) => (
                <AppBar.Item
                  key={href}
                  className="list-item underlined-none"
                  asChild
                >
                  <Link
                    href={href}
                    onNavigate={(event) => {
                      event.preventDefault();
                      if (href === pathname) close();
                      else router.push(href);
                    }}
                  >
                    <ActiveUnderlined exact={href === "/"} pathname={href}>
                      {title}
                    </ActiveUnderlined>
                  </Link>
                </AppBar.Item>
              ))}

              <h5 className="text-small">Socials</h5>

              <AppBar.Item href={socials.discord} onClick={close}>
                Discord
              </AppBar.Item>

              <AppBar.Item href={`mailto:${socials.email}`} onClick={close}>
                Email
              </AppBar.Item>

              <AppBar.Item href={socials.github} onClick={close}>
                GitHub
              </AppBar.Item>
            </aside>
          </AppBar>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
