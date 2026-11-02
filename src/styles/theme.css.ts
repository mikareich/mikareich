import {
  createGlobalTheme,
  createTheme,
  createThemeContract,
} from "@vanilla-extract/css";

export const VARS = createThemeContract({
  color: {
    background: null,
    backgroundAccent: null,
    primary: null,
    primaryAccent: null,
    foreground: null,
    foregroundAccent: null,
    text: null,
    textAccent: null,
    border: null,
  },
  font: {
    body: "var(--theme-font-body)",
    heading: "var(--theme-font-heading)",
  },
});

export const DARK_THEME = createTheme(VARS, {
  color: {
    background: "oklch(13% 0.028 261.692)",
    backgroundAccent: "oklch(21% 0.034 264.665)",
    primary: "oklch(58.5% 0.233 277.117)",
    primaryAccent: "oklch(45.7% 0.24 277.023)",
    foreground: "oklch(98.5% 0.002 247.839)",
    foregroundAccent: "oklch(92.8% 0.006 264.531)",
    text: "oklch(92.8% 0.006 264.531)",
    textAccent: "oklch(87.2% 0.01 258.338)",
    border: "oklch(27.8% 0.033 256.848)",
  },
  font: {
    body: "var(--theme-font-body)",
    heading: "var(--theme-font-heading)",
  },
});

export const LIGHT_THEME = createTheme(VARS, {
  color: {
    background: "oklch(98.5% 0.002 247.839)",
    backgroundAccent: "oklch(92.8% 0.006 264.531)",
    primary: "oklch(58.5% 0.233 277.117)",
    primaryAccent: "oklch(67.3% 0.182 276.935)",
    foreground: "oklch(96.2% 0.018 272.314)",
    foregroundAccent: "oklch(78.5% 0.115 274.713)",
    text: "oklch(37.3% 0.034 259.733)",
    textAccent: "oklch(55.1% 0.027 264.364)",
    border: "oklch(92.8% 0.006 264.531)",
  },
  font: {
    body: "var(--theme-font-body)",
    heading: "var(--theme-font-heading)",
  },
});
