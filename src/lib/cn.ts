import clsx, { type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

// Anchor suffixes may include a dimension, theme offset, and /anchor-name.
const isAnchorSize = (value: string) => /^anchor(?:$|[-/])/.test(value);
const isAnchorInset = (value: string) =>
  /^anchor-(?:top|right|bottom|left|start|end|self-start|self-end|center)(?:$|[-/])/.test(
    value,
  );

// Defines how to resolve conflicting custom Tailwind classes.
// You might need to update this configuration if you edit the tw theme.
// https://github.com/dcastil/tailwind-merge/blob/main/docs/configuration.md
const twMerge = extendTailwindMerge<string, string>({
  extend: {
    classGroups: {
      w: [{ w: [isAnchorSize] }],
      h: [{ h: [isAnchorSize] }],
      "min-w": [{ "min-w": [isAnchorSize] }],
      "max-w": [{ "max-w": [isAnchorSize] }],
      "min-h": [{ "min-h": [isAnchorSize] }],
      "max-h": [{ "max-h": [isAnchorSize] }],
      top: [{ top: [isAnchorInset] }],
      right: [{ right: [isAnchorInset] }],
      bottom: [{ bottom: [isAnchorInset] }],
      left: [{ left: [isAnchorInset] }],
      inset: [{ inset: [isAnchorInset] }],
      "link-styles": ["text-link"],
      outlined: ["outlined"],
      underlined: ["underlined", "underlined-none"],
      "list-styles": ["list-ordered", "list-unordered"],
      "semantic-theme": ["default", "error", "warning"],
      "text-styles": [
        {
          text: [
            "heading-1",
            "heading-2",
            "heading-3",
            "heading-4",
            "body",
            "action",
            "small",
          ],
        },
      ],
    },
    conflictingClassGroups: {
      "link-styles": [
        "outlined",
        "underlined",
        "text-color",
        "text-decoration",
        "outline-style",
        "ring-w",
        "ring-color",
      ],
      outlined: ["ring-w", "ring-color"],
      "text-styles": [
        "font-family",
        "font-size",
        "font-weight",
        "leading",
        "text-transform",
        "select",
      ],
    },
  },
});

/** Merges tailwind classes and ensures only the last conflicting class is kept. */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
