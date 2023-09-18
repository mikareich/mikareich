import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote/rsc";
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
import { MDXProvider } from "@mdx-js/react";
import Link from "./Link";

const components: MDXComponents = {
  h1: Heading1,
  h2: Heading2,
  h3: Heading3,
  h4: Heading4,
  h5: Heading5,
  TextLarge,
  p: Text,
  a: Link as any, // passt schon
  Underline,
};

type ContentProps = {
  children: React.ReactNode;
};

export default function MdxContent({ children }: ContentProps) {
  return (
    <MDXProvider disableParentContext={true} components={components}>
      {children}
    </MDXProvider>
  );
}
