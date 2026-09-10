import { Slot } from "@radix-ui/react-slot";
import Link from "next/link";
import type React from "react";
import { Children, cloneElement, isValidElement } from "react";
import { cn } from "~/lib/cn";

const appBarStyles = `
	flex min-w-0 items-center gap-4
	w-full
	font-heading
	bg-theme-bg text-theme-text
`;

const appBarItemStyles = `
	inline-flex shrink-0 items-center gap-2
	cursor-pointer select-none
	text-body text-link text-theme-text-subtle
	h-min
`;

const appBarLogoStyles =
  "mr-auto text-xl font-bold text-theme-text underlined-none";

type AppBarProps = React.ComponentProps<typeof Slot> & {
  /**
   * The `asChild` property has no effect but shows that the AppBar hoists the
   * only direct child as container
   */
  asChild: true;
};

/**
 * Layout primitive for composing navigation bars, headers, and footers.
 * @link https://kit.reich.re/components/app-bar
 */
export function AppBar({
  className,
  children,
  asChild: _asChild,
  ...props
}: AppBarProps): React.ReactElement {
  const child = Children.only(children);

  return (
    <Slot {...props}>
      {isValidElement<{ className?: string }>(child)
        ? cloneElement(child, {
            className: cn(appBarStyles, className, child.props.className),
          })
        : child}
    </Slot>
  );
}

type AppBarItemProps =
  | (React.ComponentProps<typeof Slot> & {
      asChild: true;
    })
  | (React.ComponentProps<typeof Link> & {
      asChild?: false | null | undefined;
    });

/** A link item within an AppBar. */
function AppBarItem({
  className,
  ...props
}: AppBarItemProps): React.ReactElement {
  if (!props.asChild) {
    return <Link className={cn(appBarItemStyles, className)} {...props} />;
  }

  const { asChild: _asChild, ...slotProps } = props;
  return <Slot className={cn(appBarItemStyles, className)} {...slotProps} />;
}

/** A visually emphasized AppBar item intended for a brand mark. */
function AppBarLogo({
  className,
  ...props
}: AppBarItemProps): React.ReactElement {
  return <AppBarItem className={cn(appBarLogoStyles, className)} {...props} />;
}

AppBar.Item = AppBarItem;
AppBar.Logo = AppBarLogo;
