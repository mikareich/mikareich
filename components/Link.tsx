"use client";

import NextLink from "next/link";
import Underline from "./Underline";
import { ComponentProps, useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type LinkProps = ComponentProps<typeof NextLink>;

const isLinkActive = (href: string) => {
  console.log(href, window.location.href);
  return window.location.href.endsWith(href);
};

export default function Link({ children, href, ...props }: LinkProps) {
  const [isActive, setIsActive] = useState(false);

  const searchParams = useSearchParams();

  useEffect(() => {
    setIsActive(isLinkActive(href.toString()));
  }, [searchParams]);

  return (
    <NextLink href={href} {...props}>
      <Underline
        className={`ml-[10px] text-raisin-black-100 hover:text-baby-powder ${
          isActive ? "!text-baby-powder" : ""
        }`}
      >
        {children}
      </Underline>
    </NextLink>
  );
}
