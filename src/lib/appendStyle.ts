import type { ClassValue } from "clsx";
import clsx from "clsx";
import {
  type ComponentProps,
  type ComponentType,
  createElement,
  type ElementType,
  type JSX,
  type ReactElement,
} from "react";

type Style<Type extends ComponentType | keyof JSX.IntrinsicElements> =
  | ClassValue
  | ClassValue[]
  | ((props: ComponentProps<Type>) => ClassValue | ClassValue[]);

/**
 * Creates a component with given style already applied.
 *
 * The argument style can be an item or an array of clsx ClassValues
 * or even a function that receives the properties applied on the element
 * and returns an item or an array of clsx ClassValues.
 *
 * The function type for the style argument allows styles to be applied
 * dynamically, depending on the properties of the element.
 *
 * The className properties is not ommited from the properies, the className
 * supplied by the invocation of the element is merged with the styles given
 * to this function. Merging happens with clsx.
 */
export function appendStyle<
  Type extends ElementType,
  Props extends ComponentProps<Type> = ComponentProps<Type>,
>(Component: Type, style: Style<Type>) {
  return (props: Props): ReactElement => {
    const classNames = [];

    if (typeof style === "function") classNames.push(style(props));
    else classNames.push(style);

    if ("className" in props) classNames.push(props.className);

    return createElement(Component, {
      ...props,
      className: clsx(...classNames),
    });
  };
}
