import { useId } from "react";
import { NOISE_BACKGROUND_STYLE } from "./noise-background.css";

export function NoiseBackground() {
  const id = useId();
  const filterId = `${id}-noise`;
  const patternId = `${id}-pattern`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={NOISE_BACKGROUND_STYLE}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <filter
          id={filterId}
          filterUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="256"
          height="256"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            type="turbulence"
            baseFrequency="0.28"
            numOctaves="1"
            stitchTiles="stitch"
          />
          {/* Convert noise brightness to coverage, then apply the theme color. */}
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2126 0.7152 0.0722 0 0"
          />
          <feComponentTransfer result="grain">
            <feFuncA type="discrete" tableValues="0 0 0 1 1 1 1" />
          </feComponentTransfer>
          <feComposite in="SourceGraphic" in2="grain" operator="in" />
        </filter>
        <pattern
          id={patternId}
          patternUnits="userSpaceOnUse"
          width="256"
          height="256"
        >
          <rect
            width="256"
            height="256"
            fill="currentColor"
            filter={`url(#${filterId})`}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
}
