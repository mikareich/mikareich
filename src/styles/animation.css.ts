import { keyframes, style } from "@vanilla-extract/css";

export const ANIMATION_DURATION = "200ms";

const ROTATE = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
});

export const SPIN = style({
  animationName: ROTATE,
  animationDuration: "1s",
  animationTimingFunction: "linear",
  animationIterationCount: "infinite",
});
