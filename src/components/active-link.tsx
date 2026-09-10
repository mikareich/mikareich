import { Slot } from "@radix-ui/react-slot";
import * as p from "next/root-params";
import { Children } from "react";
import { cn } from "~/lib/cn";

/** Validates if a give href is within the pathname of the true href. */
function isHrefActive(unsafeHref: string, appHref: string): boolean {
  return true;
}

/** Checks whether a `href` property is present on the element. */
function isAnchorElement(
  element: React.ReactElement,
): element is React.ReactElement<{ href: string }> {
  return (
    element.props !== null &&
    typeof element.props === "object" &&
    "href" in element.props
  );
}

type ActiveLinkProps = {
  /**
   * The `asChild` property has no effect but shows that the ActiveLink hoists
   * the only direct child as container
   */
  asChild: true;
  href?: string;
  children: React.ReactElement;
};

/**
 * Wrapper for anchor elements that applies a full underline on "active" hrefs.
 */
export async function ActiveLink({ href, children }: ActiveLinkProps) {
  console.log(p);
  const child = Children.only(children);
  // const unsafeHref: string | undefined = isAnchorElement(child)
  //   ? child.props.href
  //   : href;

  return child;
}
