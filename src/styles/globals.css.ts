import { globalStyle } from "@vanilla-extract/css";
import { VARS } from "./theme.css";

globalStyle("*:not(script,style)", {
  boxSizing: "border-box",
});

globalStyle("*:not(script,style)::selection", {
  backgroundColor: VARS.color.primaryAccent,
  color: VARS.color.foreground,
});

globalStyle("svg", {
  display: "block",
});

globalStyle("html", {
  background: VARS.color.background,
});
