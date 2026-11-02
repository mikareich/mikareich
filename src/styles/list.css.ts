import { style } from "@vanilla-extract/css";
import { scale } from "./sprinkles.css";
import { VARS } from "./theme.css";

const ORDERED = style({
  listStyleType: "none",
  paddingLeft: "unset",
  counterReset: "ol-counter -1",
});

const UNORDERED = style({
  listStyleType: "none",
  paddingLeft: "unset",
  margin: "unset",
});

const ITEM = style({
  position: "relative",
  paddingLeft: `${scale(8)}px`,
  "::marker": {
    content: "none",
  },
  "::before": {
    position: "absolute",
    left: 0,
    color: VARS.color.primaryAccent,
    fontFamily: VARS.font.heading,
    fontVariantNumeric: "tabular-nums",
  },
  selectors: {
    [`${UNORDERED}>&::before`]: {
      content: `"#\\a0\\a0"`,
    },
    [`${ORDERED}>&::before`]: {
      content: `"0" counter(ol-counter) "\\a0\\a0"`,
      counterIncrement: "ol-counter",
    },
    [`${ORDERED}>&:nth-child(n+11)::before`]: {
      content: `counter(ol-counter) "\\a0\\a0"`,
    },
  },
});

export const LIST = { ORDERED, ITEM, UNORDERED };
