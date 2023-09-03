"use client";

import NextLink from "next/link";
import { ComponentProps, useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import tailwindMerge from "@/utils/tailwindMerge";
import { cx } from "class-variance-authority";
import path from "path";

const containerStyles = tailwindMerge("group relative whitespace-nowrap mx-2");

// same props as NextLink but href is optional
type LinkProps = {
  href?: string;
  active?: boolean;
} & Omit<ComponentProps<typeof NextLink>, "href">;

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
    <NextLink
      href={href}
      className={cx(containerStyles({}), className)}
      {...props}
    >
      <span className="absolute bottom-1 left-0 w-full h-1.5 bg-primary opacity-60 transition-all group-hover:h-full"></span>
      <span
        className={`relative ${
          isActive ? "text-baby-powder" : "text-raisin-black-100"
        }`}
      >
        {children}
      </span>
    </NextLink>
  );
}
