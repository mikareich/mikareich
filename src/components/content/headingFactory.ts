import React from "react";

export const headingFactory = (headings: { slug: string }[]) => {
  // generate heading component based on level
  const generateHeadingComponent = (level: number) => (props: any) => {
    // create index element: <span>xx</span> -> <span>00|01|02|03|...</span>
    const index = headings.findIndex((heading) => heading.slug === props.id);

    const indexElement = React.createElement(
      "span",
      { className: "text-blue-200 font-heading", style: { fontSize: "unset" } },
      index.toString().padStart(2, "0") + " ",
    );

    const heading = React.createElement(
      `h${level}`,
      props,
      // insert index element before children
      indexElement,
      props.children,
    );
    return heading;
  };

  return {
    h1: generateHeadingComponent(1),
    h2: generateHeadingComponent(2),
    h3: generateHeadingComponent(3),
    h4: generateHeadingComponent(4),
    h5: generateHeadingComponent(5),
    h6: generateHeadingComponent(6),
  };
};
