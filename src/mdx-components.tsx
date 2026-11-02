import type { MDXComponents } from "mdx/types";
import { Link } from "next-view-transitions";
import { PostLayout } from "./app/blog/_components/post-layout";
import { HeroSection } from "./components/layout/hero-section";
import { template } from "./lib/template/builder";
import { className } from "./lib/template/class-name";
import { HIGHLIGHTED } from "./styles/highlighted.css";
import { LIST } from "./styles/list.css";
import { TYPOGRAPHY } from "./styles/typography.css";

const components = {
  a: template(Link).with(...className(TYPOGRAPHY.LINK)),
  p: template("p").with(...className(TYPOGRAPHY.BODY)),
  em: template("u").with(...className(HIGHLIGHTED)),
  h1: template("h1").with(...className(TYPOGRAPHY.HEADING_1)),
  h2: template("h2").with(...className(TYPOGRAPHY.HEADING_2)),
  h3: template("h3").with(...className(TYPOGRAPHY.HEADING_3)),
  h4: template("h4").with(...className(TYPOGRAPHY.HEADING_4)),
  h5: template("h5").with(...className(TYPOGRAPHY.HEADING_5)),
  h6: template("h6").with(...className(TYPOGRAPHY.HEADING_5)),
  Post: PostLayout,
  HeroSection: HeroSection,
  ol: template("ol").with(...className(LIST.ORDERED)),
  ul: template("ul").with(...className(LIST.UNORDERED)),
  li: template("li").with(...className(LIST.ITEM)),
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
  return components;
}
