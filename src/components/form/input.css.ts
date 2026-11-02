import { style } from "@vanilla-extract/css";
import { LAYOUT } from "~/styles/layout.css";
import { VARS } from "~/styles/theme.css";
import { TYPOGRAPHY } from "~/styles/typography.css";

const INPUT = style([
  TYPOGRAPHY.ACTION,
  {
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    flexGrow: "1",
    outline: "none",
    color: VARS.color.text,
    textTransform: "unset",
    background: "transparent",
    padding: "0",
    border: "none",
    ":disabled": {
      cursor: "not-allowed",
    },
  },
]);

const CONTAINER = style([
  LAYOUT.FORM_CONTAINER,
  LAYOUT.FOCUSED_OUTLINE,
  {
    borderColor: VARS.color.border,
    transition: "200ms",
    transitionProperty: "outline, background-color",
    selectors: {
      [`&:has(${INPUT}:disabled)`]: {
        opacity: 0.5,
        cursor: "not-allowed",
      },
      [`&:hover:has(${INPUT}:not(:disabled))`]: {
        background: VARS.color.backgroundAccent,
        cursor: "text",
      },
    },
  },
]);

const ICON = style({
  color: VARS.color.textAccent,
  flexShrink: "0",
});

export const INPUT_STYLE = { CONTAINER, INPUT, ICON };
