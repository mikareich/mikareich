import { SOCIALS } from "~/content/config";
import { AppBar } from "./app-bar";

const socialLinkStyles =
  "highlighted truncate px-0 py-0 text-small text-portfolio-text-strong hover:no-underline max-sm:hidden";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <AppBar
      asChild
      className="gap-8 border-portfolio-divider border-t px-0 py-10 font-body"
    >
      <footer>
        <span className="text-small mr-auto truncate">
          Mika Reich ― {currentYear}
        </span>

        <AppBar.Item asChild className={socialLinkStyles} href={SOCIALS.github}>
          <a href={SOCIALS.github}>GitHub</a>
        </AppBar.Item>
        <AppBar.Item
          asChild
          className={socialLinkStyles}
          href={`mailto:${SOCIALS.email}`}
        >
          <a href={`mailto:${SOCIALS.email}`}>Email</a>
        </AppBar.Item>
        <AppBar.Item
          asChild
          className={socialLinkStyles}
          href={SOCIALS.discord}
        >
          <a href={SOCIALS.discord}>Discord</a>
        </AppBar.Item>
      </footer>
    </AppBar>
  );
}
