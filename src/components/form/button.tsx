import { ReloadIcon } from "@radix-ui/react-icons";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import type React from "react";
import { BUTTON_STYLE } from "./button.css";

const LOADING_ICON = <ReloadIcon className={BUTTON_STYLE.LOADING_ICON} />;

type ButtonProps = React.ComponentProps<"button"> & {
  asChild?: boolean;
  loading?: boolean;
} & (
    | {
        prefixIcon?: React.ReactNode;
        suffixIcon?: React.ReactNode;
        mode?: "filled" | "outlined" | "ghost";
      }
    | { mode: "icon" }
  );

export function Button({
  className,
  children,
  asChild,
  loading,
  ...props
}: ButtonProps): React.ReactElement {
  const cleanedProps = props;
  let Comp: typeof Slot | "button" = "button";
  if (asChild) {
    Comp = Slot;
  }

  let prefixIcon = null;
  let suffixIcon = null;

  if (props.mode !== "icon") {
    prefixIcon = loading ? LOADING_ICON : props.prefixIcon;
    suffixIcon = props.suffixIcon;

    delete props.prefixIcon;
    delete props.suffixIcon;
  } else {
  }

  const mode = props.mode || "filled";
  delete props.mode;

  props.disabled = Boolean(props.disabled || loading);

  return (
    <Comp
      className={clsx(
        BUTTON_STYLE.CONTAINER({ mode, disabled: props.disabled }),
        className,
      )}
      {...cleanedProps}
    >
      {prefixIcon !== null && prefixIcon !== undefined && (
        <span className={BUTTON_STYLE.ICON}>{prefixIcon}</span>
      )}

      <Slottable child={children}>
        {(child: React.ReactNode): React.ReactNode => (
          <span className={BUTTON_STYLE.LABEL}>
            {/** biome-ignore lint/suspicious/noLeakedRender: No value to leak here... */}
            {loading && mode === "icon" ? LOADING_ICON : child}
          </span>
        )}
      </Slottable>

      {suffixIcon !== null && suffixIcon !== undefined && (
        <span className={BUTTON_STYLE.ICON}>{suffixIcon}</span>
      )}
    </Comp>
  );
}
