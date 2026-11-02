import { style } from "@vanilla-extract/css";
import { VARS } from "~/styles/theme.css";

export const NOISE_BACKGROUND_STYLE = style({
  position: "fixed",
  inset: 0,
  height: "100%",
  width: "100%",
  zIndex: "-1",
  overflow: "hidden",
  pointerEvents: "none",
  color: VARS.color.border,
});
