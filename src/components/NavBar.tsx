import { router } from "@/lib/utils";
import { useAnimate, type AnimationSequence } from "framer-motion";
import Logo from "./Logo";
import { useState, useMemo } from "react";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [drawerScope, animateDrawer] = useAnimate<HTMLElement>();
  const [btnScope, animateBtn] = useAnimate<HTMLButtonElement>();

  const links = useMemo(() => {
    return router.map(({ title, slug }) => {
      const isActive = window.location.pathname === slug;
      return (
        <li className="large truncate" key={slug}>
          <a
            className={isActive ? "highlighted-full" : "highlighted"}
            href={slug}
          >
            {title}
          </a>
        </li>
      );
    });
  }, [router]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    const drawer = drawerScope.current;

    window.document.body.style.overflow = !isMenuOpen ? "hidden" : "auto";
    if (!isMenuOpen) drawer.classList.remove("hidden");

    animateDrawer(
      drawer,
      { opacity: !isMenuOpen ? 1 : 0 },
      { onComplete: () => !isMenuOpen || drawer.classList.add("hidden") },
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
        <Logo />
        <ol className="hidden gap-4 overflow-hidden sm:flex">{links}</ol>
        <button
          ref={btnScope}
          className="relative h-6 w-6 sm:hidden"
          onClick={toggleMenu}
        >
          <img
            className="absolute left-0 top-0"
            src="/menu.svg"
            width={24}
            height={24}
            alt="menu"
          />

          <img
            className="absolute left-0 top-0 opacity-0"
            src="/close.svg"
            width={24}
            height={24}
            alt="close"
          />
        </button>
      </nav>

      <aside
        ref={drawerScope}
        className="fixed left-0 top-0 z-10 hidden h-screen w-screen bg-gray-400/50 backdrop-blur-3xl sm:hidden"
      >
        <ol className="mx-auto flex h-full w-fit flex-col justify-center gap-4">
          {links}
        </ol>
      </aside>
    </>
  );
}
