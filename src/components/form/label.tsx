import { clsx } from "clsx";
import type { ComponentProps } from "react";
import { LABEL_STYLES } from "./label.css";

type LabelProps = ComponentProps<"label"> & { title: string };

export function Label({ title, className, children, ...props }: LabelProps) {
  return (
    <label
      className={clsx(LABEL_STYLES.CONTAINER)}
      htmlFor={props.htmlFor || ""}
      {...props}
    >
      <span className={LABEL_STYLES.TITLE}>{title}</span>

      {children}
    </label>
  );
}
