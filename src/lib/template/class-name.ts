import clsx, { type ClassValue } from "clsx";

export function className<Props extends { className?: string }>(
  style: ClassValue | ClassValue[] | ((props: Props) => string),
) {
  return [
    "className",
    (props: Props) => {
      const classNames = [];

      if (typeof style === "function") classNames.push(style(props));
      else classNames.push(style);

      return clsx(...classNames, props.className);
    },
  ] as const;
}
