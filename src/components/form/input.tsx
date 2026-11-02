import { clsx } from "clsx";
import type React from "react";
import { INPUT_STYLE } from "./input.css";

type InputProps = React.ComponentProps<"input"> & {
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
};

export function Input({
  className,
  prefixIcon,
  suffixIcon,
  disabled,
  ...props
}: InputProps): React.ReactElement {
  return (
    <div className={clsx(INPUT_STYLE.CONTAINER, className)}>
      {prefixIcon !== null && prefixIcon !== undefined && (
        <span className={INPUT_STYLE.ICON}>{prefixIcon}</span>
      )}

      <input disabled={disabled} className={INPUT_STYLE.INPUT} {...props} />

      {suffixIcon !== null && suffixIcon !== undefined && (
        <span className={INPUT_STYLE.ICON}>{suffixIcon}</span>
      )}
    </div>
  );
}
