import { style } from "@vanilla-extract/css";
import { scale } from "./sprinkles.css";
import { VARS } from "./theme.css";

const CONTAINER = style({
  margin: "auto",
  width: "clamp(280px, 80vw, 800px)",
  padding: "20px",
});

const FORM_CONTAINER = style({
  padding: `${scale(3)} ${scale(4)}`,
  borderWidth: "1px",
  borderStyle: "solid",
  cursor: "pointer",
  display: "flex",
  gap: scale(4),
  alignItems: "center",
  width: "fit-content",
  height: "fit-content",
});

const OUTLINE_BASE = style({ outline: "2px solid transparent" });

const FOCUSED_OUTLINE = style([
  OUTLINE_BASE,
  {
    ":focus": {
      outline: `2px solid ${VARS.color.primaryAccent}`,
      outlineOffset: "2px",
    },
  },
]);

const FOCUSED_WITHIN_OUTLINE = style([
  OUTLINE_BASE,
  {
    outline: "2px solid transparent",
    ":focus-within": {
      outline: `2px solid ${VARS.color.primaryAccent}`,
      outlineOffset: "2px",
    },
  },
]);

export const LAYOUT = {
  CONTAINER,
  FORM_CONTAINER,
  FOCUSED_OUTLINE,
  FOCUSED_WITHIN_OUTLINE,
};
