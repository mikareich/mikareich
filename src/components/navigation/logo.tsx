import Image from "next/image";
import { AppBar } from "./app-bar";

const LOGO_ALT = "Mika Reich Logo";

/** A responsive logo embedded in AppBar.Logo */
export function Logo() {
  return (
    <AppBar.Logo href="/">
      <picture>
        <source
          media="(min-width: 640px)"
          srcSet="/images/full-initials.svg"
          width={222}
          height={54}
        />

        <Image
          loading="eager"
          src="/images/small-initials.svg"
          alt={LOGO_ALT}
          width={86}
          height={54}
          className="w-21.5 sm:w-55.5"
        />
      </picture>
    </AppBar.Logo>
  );
}
