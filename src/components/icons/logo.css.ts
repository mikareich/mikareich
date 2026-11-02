import { style } from "@vanilla-extract/css";
import { scale } from "~/styles/sprinkles.css";
import { VARS } from "~/styles/theme.css";

const BRACKETS = style({
  fontSize: `${scale(8)}px`,
  fontWeight: 500,
  color: VARS.color.primary,
});

const INITIALS = style({
  fontSize: `${scale(6)}px`,
  textTransform: "lowercase",
  color: VARS.color.text,
});

const CONTAINER = style({
  fontFamily: VARS.font.body,
  display: "flex",
  gap: `${scale(2)}px`,
  alignItems: "center",
});

export const LOGO_STYLES = { BRACKETS, INITIALS, CONTAINER };
