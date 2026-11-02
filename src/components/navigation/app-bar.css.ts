import { style } from "@vanilla-extract/css";
import { LIST } from "~/styles/list.css";
import { scale } from "~/styles/sprinkles.css";
import { VARS } from "~/styles/theme.css";
import { TYPOGRAPHY } from "~/styles/typography.css";

const CONTAINER = style({
  display: "flex",
  alignItems: "center",
  marginBottom: `${scale(10)}px`,
});

const LINK = style([
  TYPOGRAPHY.LINK,
  {
    color: VARS.color.text,
    fontSize: `${scale(4.5)}px`,
  },
]);

const LINKS = style([
  LIST.ORDERED,
  {
    marginLeft: "auto",
    display: "flex",
    gap: `${scale(5)}px`,
  },
]);

const LOGO = style([
  LINK,
  {
    textDecoration: "none",
  },
]);

export const APP_BAR_STYLES = { CONTAINER, LINK, LINKS, LOGO };
