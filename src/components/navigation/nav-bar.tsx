import { Logo } from "~/components/icons/logo";
import { CONTENT_TYPE } from "~/lib/content/content-types";
import { ROUTE_MANIFEST } from "~/lib/content/manifest";
import { LIST } from "~/styles/list.css";
import { AppBar } from "./app-bar";

const links = ROUTE_MANIFEST.filter(
  (route) => route.type === CONTENT_TYPE.PAGE,
).sort((a, b) => b.metadata.priority - a.metadata.priority);

export function NavBar() {
  return (
    <AppBar asChild>
      <nav>
        <AppBar.Logo href="/">
          <Logo />
        </AppBar.Logo>

        <AppBar.Links>
          {links.map(({ metadata, slug }) => (
            <li key={slug} className={LIST.ITEM}>
              <AppBar.Link href={slug}>{metadata.title}</AppBar.Link>
            </li>
          ))}
        </AppBar.Links>
      </nav>
    </AppBar>
  );
}
