import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";

export const SCALE_FACTOR = 4;
export function scale(value: number): number {
  return value * SCALE_FACTOR;
}

const DIMENSIONS = defineProperties({
  properties: {
    display: ["flex"],
    flex: ["1"],
    flexShrink: {
      noShrink: 0,
    },
  },
});

export const SPRINKLES = createSprinkles(DIMENSIONS);

export type Sprinkles = Parameters<typeof SPRINKLES>[0];
