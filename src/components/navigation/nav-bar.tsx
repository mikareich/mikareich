import { Link } from "next-view-transitions";
import { NAVIGATION } from "~/content/config";
import { ActiveLink } from "../active-link";
import { AppBar } from "./app-bar";
import { Drawer } from "./drawer";
import { Logo } from "./logo";

export function NavBar() {
  return (
    <AppBar asChild>
      <nav className="anchor/nav-bar list-ordered gap-6 relative z-20 pointer-events-auto">
        <Logo />

        {NAVIGATION.map(({ slug, title }) => (
          <AppBar.Item key={slug} asChild>
            <Link
              className="underlined-none text-theme-text hidden leading-7 text-lg sm:list-item sm:text-xl"
              href={slug}
            >
              <ActiveLink href={slug} asChild>
                <span className="underlined">{title}</span>
              </ActiveLink>
            </Link>
          </AppBar.Item>
        ))}

        <Drawer />
      </nav>
    </AppBar>
  );
}
