"use client";

import NextLink from "next/link";
import { ComponentProps, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Underline from "./Underline";

// same props as NextLink but href is optional
type LinkProps = {
  active?: boolean;
} & ComponentProps<typeof NextLink>;

export default function Link({
  children,
  active,
  href = "",
  className,
  ...props
}: LinkProps) {
  const [isActive, setIsActive] = useState(active);

  const pathname = usePathname();

  useEffect(() => {
    setIsActive(active || href === pathname);
  }, [active, href, pathname, setIsActive]);

  return (
    <NextLink href={href} className={className} {...props}>
      <Underline active={isActive}>{children}</Underline>
    </NextLink>
  );
}
