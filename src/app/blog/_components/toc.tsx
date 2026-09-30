import Link from "next/link";
import { cn } from "~/lib/cn";
import type { ToC } from "~/lib/content/content-types";

type TableOfContentsProps = Omit<React.ComponentProps<"ol">, "children"> & {
  toc: ToC;
};

export function TableOfContents({
  toc,
  className,
  ...props
}: TableOfContentsProps) {
  return (
    <ol className={cn("list-ordered", "space-y-2", className)} {...props}>
      <h4 className="text-heading-4">On this page</h4>
      {toc.map(({ value, id }) => (
        <li key={id} className={cn("list-item", "truncate")}>
          <Link className={cn("text-link", "text-theme-text")} href={`#${id}`}>
            {value}
          </Link>
        </li>
      ))}

      <Link
        className={cn("text-link", "text-theme-text", "max-lg:hidden")}
        href="#"
      >
        Scroll Up
      </Link>
    </ol>
  );
}
