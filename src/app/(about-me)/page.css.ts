import { style } from "@vanilla-extract/css";
import { LIST } from "~/styles/list.css";
import { scale } from "~/styles/sprinkles.css";
import { VARS } from "~/styles/theme.css";
import { TYPOGRAPHY } from "~/styles/typography.css";

const SKILL_LIST = style([
  LIST.UNORDERED,
  {
    display: "flex",
    flexWrap: "wrap",
    gap: `${scale(4)}px`,
  },
]);

const SKILL_LIST_ITEM = style([
  LIST.ITEM,
  {
    ":before": {
      display: "none",
    },
    display: "flex",
    alignItems: "center",
    gap: `${scale(2)}px`,
    color: VARS.color.text,
  },
]);

export const STYLES = { SKILL_LIST, SKILL_LIST_ITEM };
