import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Text,
  TextLarge,
} from "./Typography";
import Underline from "./Underline";

import type { MDXComponents } from "mdx/types";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "./Link";
import AllSkills from "./AllSkills";
import HeroSection from "./HeroSection";
import AllProjects from "./AllProjects";

const typographyComponents: MDXComponents = {
  h1: Heading1,
  h2: Heading2,
  h3: Heading3,
  h4: Heading4,
  h5: Heading5,
  TextLarge,
  p: Text,
  a: Link as any,
  Underline,
  u: Underline,
};

const layoutComponents: MDXComponents = {
  HeroSection,
  AllSkills,
  AllProjects,
};

type ContentProps = {
  components?: MDXComponents;
  source: string;
};

export default function MdxContent({ components, source }: ContentProps) {
  return (
    <MDXRemote
      source={source}
      // override literal html elements with custom components
      options={{}}
      components={{
        ...typographyComponents,
        ...layoutComponents,
        ...components,
      }}
    />
  );
}
