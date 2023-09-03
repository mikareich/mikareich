import appendStyles from "@/utils/appendStyles";
import tailwindMerge from "@/utils/tailwindMerge";

const titleStyle = tailwindMerge(
  "text-2xl md:text-5xl font-bold text-baby-powder"
);
export const Title = appendStyles("h1", titleStyle);

const headingStyle = "font-medium text-baby-powder";

const h1Style = tailwindMerge("text-xl md:text-4xl", headingStyle);
export const Heading1 = appendStyles("h1", h1Style);

const h2Style = tailwindMerge("text-lg md:text-3xl", headingStyle);
export const Heading2 = appendStyles("h2", h2Style);

const h3Style = tailwindMerge("text-base md:text-2xl", headingStyle);
export const Heading3 = appendStyles("h3", h3Style);

const h4Style = tailwindMerge("text-base md:text-xl", headingStyle);
export const Heading4 = appendStyles("h4", h4Style);

const h5Style = tailwindMerge("text-base md:text-lg", headingStyle);
export const Heading5 = appendStyles("h5", h5Style);

const baseStyle = "font-normal text-raisin-black-100";

const textLargeStyle = tailwindMerge("text-base md:text-lg", baseStyle);
export const TextLarge = appendStyles("p", textLargeStyle);

const textStyle = tailwindMerge("text-sm sm:text-base", baseStyle);
export const Text = appendStyles("p", textStyle);

const textSmallStyle = tailwindMerge("text-xs", baseStyle);
export const TextSmall = appendStyles("p", textSmallStyle);
