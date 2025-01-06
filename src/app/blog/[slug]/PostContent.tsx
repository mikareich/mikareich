import { createElement } from "react";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import Content from "~/components/Content";
import type { ComponentMap } from "~/lib/content";
import type { Headings } from "~/lib/getHeadings";

type ContentProps = {
  source: string;
  components: ComponentMap;
  headings: Headings;
};

type HeadingProps = {
  level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  headings: Headings;
} & React.HTMLAttributes<HTMLHeadingElement>;

const Heading = ({ level, headings, id, children, ...props }: HeadingProps) => {
  const index = headings.findIndex((heading) => heading.slug === id);
  const indexElement = (
    <span className="font-heading text-blue-200" style={{ fontSize: "unset" }}>
      {index.toString().padStart(2, "0")}{" "}
    </span>
  );

  const component = createElement(
    level,
    { id, ...props },
    <>
      {indexElement} {children}
    </>
  );

  return component;
};

export default function PostContent({
  source,
  headings,
  components: customComponents,
}: ContentProps) {
  const components = {
    h1: (props: HeadingProps) => (
      <Heading {...props} level="h1" headings={headings} />
    ),
    h2: (props: HeadingProps) => (
      <Heading {...props} level="h2" headings={headings} />
    ),
    h3: (props: HeadingProps) => (
      <Heading {...props} level="h3" headings={headings} />
    ),
    h4: (props: HeadingProps) => (
      <Heading {...props} level="h4" headings={headings} />
    ),
    h5: (props: HeadingProps) => (
      <Heading {...props} level="h5" headings={headings} />
    ),
    h6: (props: HeadingProps) => (
      <Heading {...props} level="h6" headings={headings} />
    ),
    ...customComponents,
  };

  return (
    <article className="prose mb-8">
      <Content
        options={{
          mdxOptions: {
            rehypePlugins: [
              rehypeSlug,
              [
                rehypePrettyCode,
                { theme: "github-dark", keepBackground: false },
              ],
            ],
          },
        }}
        source={source}
        components={components}
      />
    </article>
  );
}
