import { SOCIALS } from "~/app/config";
import { AppBar } from "./app-bar";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <AppBar asChild>
      <footer>
        <AppBar.Logo href="/">Mika Reich ― {currentYear}</AppBar.Logo>

        <AppBar.Links>
          <AppBar.Link href={SOCIALS.github}>GitHub</AppBar.Link>
          <AppBar.Link href={`mailto:${SOCIALS.email}`}>Email</AppBar.Link>
          <AppBar.Link href={SOCIALS.discord}>Discord</AppBar.Link>
        </AppBar.Links>
      </footer>
    </AppBar>
  );
}
