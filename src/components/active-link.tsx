"use client";

import { usePathname } from "next/navigation";
import { cn } from "~/lib/cn";

/** Validates if a given pathname segment is part of the true pathname. */
function includesPathname(pathname: string, truePathname: string): boolean {
  let isActive = false;

  let partial = "";
  for (let idx = 0; idx < truePathname.length; idx += 1) {
    const char = truePathname[idx];
    partial += char;

    if (
      partial.length >= pathname.length &&
      endsWithPathname(pathname, partial)
    ) {
      isActive = true;
      break;
    }
  }

  return isActive;
}

/** Verifies whether true pathname string ends with given pathname string. */
function endsWithPathname(pathname: string, truePathname: string): boolean {
  const unsafeLength = pathname.length;
  const trueLength = truePathname.length;

  let matches = true;

  for (let offset = 1; offset < unsafeLength + 1; offset += 1) {
    if (pathname[unsafeLength - offset] !== truePathname[trueLength - offset]) {
      matches = false;
      break;
    }
  }

  return matches;
}

type ActiveLinkProps = React.ComponentProps<"span"> & {
  /** The pathname that matches again the browser pathname. */
  pathname: string;
  /** Whether to validate against the path ending or if its included. */
  exact?: boolean;
};

/**
 * Inline span that applies full underlined style if given pathname is within
 * current url.
 */
export function ActiveUnderlined({
  pathname,
  className,
  exact = false,
  ...props
}: ActiveLinkProps) {
  const truePathname = usePathname();
  const isActive = exact
    ? endsWithPathname(pathname, truePathname)
    : includesPathname(pathname, truePathname);

  return (
    <span
      className={cn("underlined", isActive && "after:h-full", className)}
      {...props}
    />
  );
}
