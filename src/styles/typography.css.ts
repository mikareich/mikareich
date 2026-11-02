import { type CSSProperties, style } from "@vanilla-extract/css";
import { HIGHLIGHTED } from "./highlighted.css";
import { LAYOUT } from "./layout.css";
import { scale } from "./sprinkles.css";
import { VARS } from "./theme.css";

const BODY_BASE = {
  fontFamily: VARS.font.body,
  lineHeight: 2,
  fontWeight: 400,
  color: VARS.color.textAccent,
} as CSSProperties satisfies CSSProperties;

const HEADING_BASE = {
  ...BODY_BASE,
  fontFamily: VARS.font.heading,
  fontWeight: "bold",
  lineHeight: 1.5,
  color: VARS.color.text,
} as CSSProperties satisfies CSSProperties;

const ACTION = style({
  textTransform: "uppercase",
  fontFamily: VARS.font.heading,
  fontSize: scale(4),
  lineHeight: "normal",
});

const LINK = style([
  LAYOUT.FOCUSED_OUTLINE,
  HIGHLIGHTED,
  {
    fontFamily: VARS.font.heading,
    fontSize: scale(4),
    lineHeight: "normal",
    color: "inherit",
  },
]);

const HEADING_1 = style({
  ...HEADING_BASE,
  fontSize: `${scale(9)}px`,
  marginTop: `${scale(10)}px`,
  marginBottom: `${scale(5)}px`,
});

const HEADING_2 = style({
  ...HEADING_BASE,
  fontSize: `${scale(8)}px`,
  marginTop: `${scale(8)}px`,
  marginBottom: `${scale(4)}px`,
});

const HEADING_3 = style({
  ...HEADING_BASE,
  fontSize: `${scale(6)}px`,
  marginTop: `${scale(6)}px`,
  marginBottom: `${scale(3)}px`,
});

const HEADING_4 = style({
  ...HEADING_BASE,
  fontSize: `${scale(5)}px`,
  marginTop: `${scale(5)}px`,
  marginBottom: `${scale(2)}px`,
});

const HEADING_5 = style({
  ...HEADING_BASE,
  fontSize: `${scale(4.5)}px`,
  marginTop: `${scale(4)}px`,
  marginBottom: `${scale(2)}px`,
});

const BODY = style({ ...BODY_BASE, fontSize: `${scale(4)}px` });

const SMALL = style({
  ...BODY_BASE,
  fontSize: `${scale(3.5)}px`,
  lineHeight: 1.5,
});

export const TYPOGRAPHY = {
  ACTION,
  HEADING_1,
  HEADING_2,
  HEADING_3,
  HEADING_4,
  HEADING_5,
  BODY,
  SMALL,
  LINK,
};
