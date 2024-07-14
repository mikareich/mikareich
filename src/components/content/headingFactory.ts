import React from "react";

export const headingFactory = (level: number, headings: { slug: string }[]) => {
  return (props: any) => {
    // create index element: <span>xx</span>
    const index = headings.findIndex((heading) => heading.slug === props.id);

    const indexElement = React.createElement(
      "span",
      { className: "text-blue-200", style: { fontSize: "unset" } },
      index.toString().padStart(2, "0") + " ",
    );

    const heading = React.createElement(
      `h${level}`,
      { ...props, className: "", key: index },
      // add index element before children
      indexElement,
      props.children,
    );
    return heading;
  };
};
