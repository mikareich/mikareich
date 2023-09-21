import clsx from "clsx";

type Option<
  ComponentProps extends Record<string, any> | undefined = undefined,
> = (ComponentProps extends undefined
  ? {
      [key: string]: any;
    }
  : Partial<ComponentProps>) & {
  use: string | ((props: any) => string);
};

function merged<ComponentProps extends Record<string, any> | undefined>(
  props: ComponentProps | undefined,
  styles: (string | Option<ComponentProps>)[],
) {
  const classes: string[] = [];

  styles.forEach((style) => {
    // check if style is unconditional
    if (typeof style === "string") {
      classes.push(style);
      return;
    }

    // check if props were passed
    if (!props) return;

    // if style is dependent on props, check if all props are fulfilled
    const fulfilled = Object.keys(style).every((key) => {
      // exclude 'use' key
      if (key === "use") return true;

      const prop = props[key];
      const styleProp = style[key];

      return prop === styleProp;
    });

    if (fulfilled) {
      if (typeof style.use === "function") {
        classes.push(style.use(props));
      } else {
        classes.push(style.use);
      }
    }
  });

  return clsx(classes);
}

/**
 * Creates a function that merges various style conditions and returns the final Tailwind CSS classes string.
 *
 * @template ComponentProps The type of the component properties.
 *
 * @param {...(string | Option<ComponentProps>)[]} styles The list of unconditional styles (as strings)
 * and conditional styles (as options) that could be applied based on the properties.
 *
 * @returns {(props: ComponentProps) => string} A function that when invoked with specific properties,
 * returns a combined Tailwind CSS classes string based on the conditions provided in the styles.
 *
 * @example
 *
 * const buttonStyles = tailwindMerge<ButtonProps>(
 *   'rounded px-5',
 *   {
 *     fillMode: 'filled',
 *     use: 'bg-primary-500',
 *   },
 *   {
 *     disabled: true,
 *     use: 'opacity-50',
 *   }
 * );
 *
 * buttonStyles({ fillMode: 'filled', disabled: true })
 * // returns "rounded px-5 bg-primary-500 opacity-50"
 *
 */
export default function tailwindMerge<
  ComponentProps extends Record<string, any> | undefined = undefined,
>(
  ...styles: (string | Option<ComponentProps>)[]
): (props: Partial<ComponentProps>) => string {
  return (props?: any) => merged<ComponentProps>(props, styles);
}
