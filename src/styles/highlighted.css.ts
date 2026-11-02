import { createVar, style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { ANIMATION_DURATION } from "./animation.css";
import { scale } from "./sprinkles.css";
import { VARS } from "./theme.css";

const HIGHLIGHTED_OFFSET = createVar({
  syntax: "<length> | <length-percentage>",
  inherits: false,
  initialValue: `${scale(1)}px`,
});

export const HIGHLIGHTED_SIZE = createVar({
  syntax: "<length> | <length-percentage>",
  inherits: false,
  initialValue: `${scale(2)}px`,
});

export const FULL_HIGHLIGHT = { [HIGHLIGHTED_SIZE]: "120%" } as const;

export const HIGHLIGHTED = style({
  vars: {
    [HIGHLIGHTED_SIZE]: "inital",
    [HIGHLIGHTED_OFFSET]: "initial",
  },
  textDecoration: "underline",
  textUnderlineOffset: calc("0%")
    .subtract(HIGHLIGHTED_SIZE)
    .add(HIGHLIGHTED_OFFSET)
    .toString(),
  textDecorationSkipInk: "none",
  textDecorationColor: `oklch(from ${VARS.color.primaryAccent} l c h / 0.5)`,
  textDecorationThickness: HIGHLIGHTED_SIZE,
  transitionProperty: "text-decoration-thickness, text-underline-offset",
  transitionDuration: ANIMATION_DURATION,
  ":hover": { vars: FULL_HIGHLIGHT },
  ":focus": { vars: FULL_HIGHLIGHT },
});
