"use client";

import { useAnimate, type AnimationSequence } from "framer-motion";
import { useMemo, useState } from "react";
import { Link } from "next-view-transitions";
import Image from "next/image";

import FullInitialsSVG from "../../public/images/full-initials.svg";
import SmallInitialsSVG from "../../public/images/small-initials.svg";

type NavItemProps = {
  slug: string;
  title: string;
};

function NavItem({ slug, title }: NavItemProps) {
  return (
    <li className="truncate text-lg sm:text-xl">
      <Link className="highlighted" href={slug}>
        {title}
      </Link>
    </li>
  );
}

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [drawerScope, animateDrawer] = useAnimate<HTMLElement>();
  const [btnScope, animateBtn] = useAnimate<HTMLButtonElement>();

  const links = useMemo(
    () => [
      <NavItem key="about-me" slug="/" title="About Me" />,
      <NavItem key="projects" slug="/projects" title="Projects" />,
      <NavItem key="blog" slug="/blog" title="Blog" />,
    ],
    []
  );

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    const drawer = drawerScope.current;

    window.document.body.style.overflow = !isMenuOpen ? "hidden" : "auto";
    if (!isMenuOpen) drawer.classList.remove("hidden");

    animateDrawer(
      drawer,
      { opacity: !isMenuOpen ? 1 : 0 },
      { onComplete: () => !isMenuOpen || drawer.classList.add("hidden") }
    );

    const sequence = [
      ["img:first-child", { opacity: !isMenuOpen ? 0 : 1 }],
      ["img:last-child", { opacity: !isMenuOpen ? 1 : 0 }],
    ] as AnimationSequence;

    animateBtn(!isMenuOpen ? sequence : sequence.reverse());
  };

  return (
    <>
      <nav className="z-30 mt-10 flex items-center justify-between gap-4 py-5">
        <Link href="/">
          <Image src={SmallInitialsSVG} alt="Logo" className="sm:hidden" />
          <Image src={FullInitialsSVG} alt="Logo" className="max-sm:hidden" />
        </Link>

        <ol className="ol hidden gap-4 overflow-hidden sm:flex">{links}</ol>

        <button
          type="button"
          ref={btnScope}
          className="relative h-6 w-6 sm:hidden"
          onClick={toggleMenu}
        >
          <Image
            className="absolute top-0 left-0"
            src="/icons/menu.svg"
            width={24}
            height={24}
            alt="menu"
          />

          <Image
            className="absolute top-0 left-0 opacity-0"
            src="/icons/close.svg"
            width={24}
            height={24}
            alt="close"
          />
        </button>
      </nav>

      <aside
        ref={drawerScope}
        className="fixed top-0 left-0 z-20 hidden h-screen w-screen bg-gray-400/50 backdrop-blur-3xl sm:hidden"
      >
        <div className="mx-auto flex h-full w-fit flex-col justify-center">
          <ol className="ol space-y-4">
            {links}

            <p className="small !mt-8">Socials</p>
            {/* {Object.entries(socials).map(([name, link]) => (
              <li key={name} className="large">
                <a href={link} className="highlighted">
                  {name}
                </a>
              </li>
            ))} */}
          </ol>
        </div>
      </aside>
    </>
  );
}
