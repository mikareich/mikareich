import { globalStyle, style } from "@vanilla-extract/css";
import { HIGHLIGHTED, HIGHLIGHTED_SIZE } from "~/styles/highlighted.css";
import { scale } from "~/styles/sprinkles.css";
import { VARS } from "~/styles/theme.css";
import { TYPOGRAPHY } from "~/styles/typography.css";

const CONTAINER = style({});

const TITLE = style([
  TYPOGRAPHY.ACTION,
  HIGHLIGHTED,
  {
    color: VARS.color.text,
    display: "block",
    ":hover": { vars: { [HIGHLIGHTED_SIZE]: "initial" } },
  },
]);

globalStyle(`${CONTAINER} > *:not(:last-child)`, {
  marginBottom: `${scale(2)}px`,
});

export const LABEL_STYLES = { CONTAINER, TITLE };
