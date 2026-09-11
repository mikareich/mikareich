import Image from "next/image";
import { Link } from "next-view-transitions";
import type { ComponentProps } from "react";
import { AppBar } from "./app-bar";

type LogoProps = Omit<ComponentProps<typeof Link>, "href">;

/** A responsive logo embedded in AppBar.Logo */
export function Logo(props: LogoProps) {
  return (
    <AppBar.Logo asChild>
      <Link href="/" {...props}>
        <picture>
          <source
            media="(min-width: 768px)"
            srcSet="/images/full-initials.svg"
            width={222}
            height={54}
          />

          <Image
            loading="eager"
            src="/images/small-initials.svg"
            alt="Mika Reich Logo"
            width={86}
            height={54}
            className="w-21.5 md:w-55.5"
          />
        </picture>
      </Link>
    </AppBar.Logo>
  );
}
