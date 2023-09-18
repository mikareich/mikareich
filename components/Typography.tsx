import appendStyles from "@/utils/appendStyles";

/* Pre: 
    1. Mobile Typography and Desktop Typography switch from the xs-breakpoint
    2. Sizes:
        Title - 2xl  xs:5xl
        h1    - xl   xs:4xl
        h2    - lg   xs:3xl
        h3    - base xs:2xl
        h4    - base xs:xl
        h5    - base xs:lg
        base  - sm   xs:base
        small - xs   xs:sm
    */

export const Title = appendStyles(
  "h1",
  "text-2xl xs:text-5xl font-bold text-baby-powder"
);

const headingStyles = "font-medium text-baby-powder";
export const Heading1 = appendStyles(
  "h1",
  `${headingStyles} text-xl xs:text-4xl mb-[14px]`
);
export const Heading2 = appendStyles(
  "h2",
  `${headingStyles} text-lg xs:text-3xl mb-[16px]`
);
export const Heading3 = appendStyles(
  "h3",
  `${headingStyles} text-base xs:text-2xl mb-[12px]`
);
export const Heading4 = appendStyles(
  "h4",
  `${headingStyles} text-base xs:text-xl mb-[8px]`
);
export const Heading5 = appendStyles(
  "h5",
  `${headingStyles} text-base xs:text-lg mb-[8px]`
);

export const TextLarge = appendStyles(
  "p",
  "text-raisin-black-100 text-base xs:text-lg my-[20px]"
);

export const Text = appendStyles(
  "p",
  "text-raisin-black-100 leading-normal text-base xs:text-base my-[20px]"
);

export const Small = appendStyles(
  "p",
  "text-raisin-black-100 leading-loose text-xs xs:text-sm"
);
