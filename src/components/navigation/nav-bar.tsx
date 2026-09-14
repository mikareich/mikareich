import { Link } from "next-view-transitions";
import { PAGES, SOCIALS } from "~/content/config";
import { ActiveUnderlined } from "../active-link";
import { AppBar } from "./app-bar";
import { Drawer } from "./drawer";
import { Logo } from "./logo";

const links = Object.entries(PAGES).map(([href, { config }]) => ({
  href,
  title: config.meta.title,
}));

export function NavBar() {
  return (
    <AppBar asChild>
      <nav className="anchor/nav-bar list-ordered gap-6 relative z-20 pointer-events-auto">
        <Logo />

        {links.map(({ href, title }) => (
          <AppBar.Item key={href} asChild>
            <Link
              className="underlined-none text-theme-text hidden leading-7 text-lg sm:list-item sm:text-xl"
              href={href}
            >
              <ActiveUnderlined exact={href === "/"} pathname={href}>
                {title}
              </ActiveUnderlined>
            </Link>
          </AppBar.Item>
        ))}

        <Drawer links={links} socials={SOCIALS} />
      </nav>
    </AppBar>
  );
}
