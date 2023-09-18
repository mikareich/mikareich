import clsx from "clsx";
import React, { ComponentType, FC } from "react";

type StyleArg<T> = string | ((props: T) => string);

/**
 * `appendStyles` is a Higher-Order Component (HOC) that appends additional styles
 * to a given React component or intrinsic element.
 *
 * @template T - The type of the React component or intrinsic element.
 * @template Props - The props type for the given React component or intrinsic element.
 *
 * @param {T} Component - The React component or intrinsic element to which styles should be appended.
 * @param {StyleArg<any>} styles - The styles to append. Can be a static string or a function returning a string based on props.
 *
 * @returns {FC<Props>} - A new React functional component with the appended styles.
 *
 * @example
 *
 * import appendStyles from '@/utils/appendStyles'
 * import tailwindMerge from '@/utils/tailwindMerge'
 * import NextLink from 'next/link'
 *
 * const linkStyle = tailwindMerge('underline transition-all')
 * const Link = appendStyles(NextLink, linkStyle())
 *
 * export default Link
 */
export default function appendStyles<
  T extends ComponentType<any> | keyof JSX.IntrinsicElements,
  Props extends Record<string, any> = React.ComponentPropsWithoutRef<T>
>(Component: T, styles: StyleArg<any>): FC<Props> {
  return function StyledComponent(props) {
    const { className, ...otherProps } = props;
    const resolvedStyles =
      typeof styles === "function" ? styles(props) : styles;
    const newClassName = clsx(resolvedStyles, className || "");
    return React.createElement(Component, {
      className: newClassName,
      ...otherProps,
    });
  };
}
