import { style } from "@vanilla-extract/css";
import { LIST } from "~/styles/list.css";
import { scale } from "~/styles/sprinkles.css";
import { VARS } from "~/styles/theme.css";
import { TYPOGRAPHY } from "~/styles/typography.css";

const CONTAINER = style({
  overflow: "hidden",
  position: "relative",
  display: "grid",
  padding: `0 ${scale(4)}px`,
  gridTemplateRows: `${scale(32)}px auto auto`,
  gridTemplateColumns: "1fr 1fr",
  marginBottom: `${scale(10)}px`,
  gridTemplateAreas: `
  "title		title			"
  "subtitle	subtitle	"
  "tags			timestamp	"
  `,
});

const TITLE = style([
  TYPOGRAPHY.HEADING_1,
  {
    margin: 0,
    fontSize: `${scale(10)}px`,
    columnSpan: "all",
    alignSelf: "end",
    color: VARS.color.foreground,
    gridArea: "title",
  },
]);

const SUB_TITLE = style([
  TYPOGRAPHY.HEADING_3,
  {
    margin: 0,
    fontSize: `${scale(6)}px`,
    fontWeight: 400,
    fontFamily: VARS.font.body,
    color: VARS.color.foregroundAccent,
    gridArea: "subtitle",
    paddingBottom: `${scale(4)}px`,
  },
]);

const IMAGE = style({
  position: "absolute",
  objectFit: "cover",
  zIndex: -1,
  gridRow: "1 / 3",
  width: "100%",
  height: "100%",
});

const TAGS = style([
  LIST.UNORDERED,
  {
    gridArea: "tags",
    display: "flex",
    gap: `${scale(4)}px`,
  },
]);

const TIMESTAMP = style({
  gridArea: "timestamp",
  placeSelf: "end",
});

export const HERO_SECTION_STYLES = {
  CONTAINER,
  TITLE,
  SUB_TITLE,
  IMAGE,
  TAGS,
  TIMESTAMP,
};
