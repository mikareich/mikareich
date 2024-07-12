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

    window.document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
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
      <nav className="mt-10 flex justify-between items-center py-5 gap-4 z-30">
        <Logo />
        <ol className="gap-4 overflow-hidden hidden sm:flex">{links}</ol>
        <button
          ref={btnScope}
          className="sm:hidden relative w-6 h-6"
          onClick={toggleMenu}
        >
          <img
            className="absolute top-0 left-0"
            src="/images/menu.svg"
            width={24}
            height={24}
            alt="menu"
          />

          <img
            className="absolute top-0 left-0 opacity-0"
            src="/images/close.svg"
            width={24}
            height={24}
            alt="close"
          />
        </button>
      </nav>

      <aside
        ref={drawerScope}
        className="fixed z-10 top-0 left-0 w-screen h-screen bg-gray-400/50 backdrop-blur-3xl hidden sm:hidden"
      >
        <ol className="flex flex-col gap-4 mx-auto justify-center w-fit h-full">
          {links}
        </ol>
      </aside>
    </>
  );
}
