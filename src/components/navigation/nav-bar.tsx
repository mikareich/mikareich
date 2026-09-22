import { Link } from "next-view-transitions";
import { SOCIALS } from "~/app/config";
import { ROUTE_MANIFEST, type RouteMetadata } from "~/lib/content/manifest";
import { CONTENT_TYPE } from "~/lib/content/plugins/content-types";
import { ActiveUnderlined } from "../active-link";
import { AppBar } from "./app-bar";
import { Drawer } from "./drawer";
import { Logo } from "./logo";

const links = ROUTE_MANIFEST.filter(
  (route): route is RouteMetadata & { type: typeof CONTENT_TYPE.PAGE } =>
    route.type === CONTENT_TYPE.PAGE,
).sort((a, b) => b.metadata.priority - a.metadata.priority);

export function NavBar() {
  return (
    <AppBar asChild>
      <nav className="anchor/nav-bar list-ordered gap-6 relative z-20 pointer-events-auto">
        <Logo />

        {links.map(({ slug, metadata }) => (
          <AppBar.Item key={slug} asChild>
            <Link
              className="underlined-none text-theme-text hidden leading-7 text-lg sm:list-item sm:text-xl"
              href={slug}
            >
              <ActiveUnderlined exact={slug === "/"} pathname={slug}>
                {metadata.title}
              </ActiveUnderlined>
            </Link>
          </AppBar.Item>
        ))}

        <Drawer links={links} socials={SOCIALS} />
      </nav>
    </AppBar>
  );
}
