import { Link } from "next-view-transitions";
import { SOCIALS } from "~/content/config";
import { AppBar } from "./app-bar";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <AppBar asChild className="gap-8 border-theme-border border-t px-0 py-10">
      <footer>
        <AppBar.Logo className="text-small font-normal" asChild>
          <Link href="/">Mika Reich ― {currentYear}</Link>
        </AppBar.Logo>

        <AppBar.Item className="text-small max-sm:hidden" href={SOCIALS.github}>
          GitHub
        </AppBar.Item>

        <AppBar.Item
          className="text-small max-sm:hidden"
          href={`mailto:${SOCIALS.email}`}
        >
          Email
        </AppBar.Item>

        <AppBar.Item
          className="text-small max-sm:hidden"
          href={SOCIALS.discord}
        >
          Discord
        </AppBar.Item>
      </footer>
    </AppBar>
  );
}
