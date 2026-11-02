import { createVar, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { SPIN } from "~/styles/animation.css";
import { LAYOUT } from "~/styles/layout.css";
import { scale } from "~/styles/sprinkles.css";
import { VARS } from "~/styles/theme.css";
import { TYPOGRAPHY } from "~/styles/typography.css";

const BG_COLOR = createVar();
const TEXT_COLOR = createVar();
const BORDER_COLOR = createVar();
const ICON_COLOR = createVar();

const CONTAINER = recipe({
  base: [
    LAYOUT.FORM_CONTAINER,
    LAYOUT.FOCUSED_OUTLINE,
    {
      transition: "200ms",
      transitionProperty: "outline, background-color",
      overflow: "hidden",
      background: BG_COLOR,
      borderColor: BORDER_COLOR,
      vars: {
        [BG_COLOR]: "transparent",
        [TEXT_COLOR]: VARS.color.text,
        [BORDER_COLOR]: VARS.color.border,
        [ICON_COLOR]: VARS.color.textAccent,
      },
      ":disabled": {
        opacity: 0.5,
        cursor: "not-allowed",
      },
    },
  ],
  variants: {
    mode: {
      filled: {
        vars: {
          [BG_COLOR]: VARS.color.primary,
          [TEXT_COLOR]: VARS.color.foreground,
          [BORDER_COLOR]: VARS.color.primary,
          [ICON_COLOR]: VARS.color.foregroundAccent,
        },
      },
      outlined: {},
      icon: {
        padding: scale(3),
      },
      ghost: {
        vars: {
          [BORDER_COLOR]: "transparent",
        },
      },
    },
    disabled: {
      true: { opacity: 0.5 },
    },
  },
  compoundVariants: [
    {
      variants: {
        mode: "filled",
        disabled: false,
      },
      style: {
        ":hover": {
          background: VARS.color.primaryAccent,
        },
      },
    },
    {
      variants: {
        mode: "outlined",
        disabled: false,
      },
      style: {
        ":hover": {
          background: VARS.color.backgroundAccent,
        },
      },
    },
    {
      variants: {
        mode: "ghost",
        disabled: false,
      },
      style: {
        ":hover": {
          background: VARS.color.backgroundAccent,
        },
      },
    },
    {
      variants: {
        mode: "icon",
        disabled: false,
      },
      style: {
        ":hover": {
          background: VARS.color.backgroundAccent,
        },
      },
    },
  ],
});

const ICON = style({
  color: ICON_COLOR,
  flexShrink: "0",
});

const LOADING_ICON = style([ICON, SPIN]);

const LABEL = style([
  TYPOGRAPHY.ACTION,
  {
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    flexGrow: "1",
    color: TEXT_COLOR,
  },
]);

export const BUTTON_STYLE = { CONTAINER, ICON, LABEL, LOADING_ICON };
