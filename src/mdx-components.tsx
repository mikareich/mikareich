import type { MDXComponents } from "mdx/types";
import { Link } from "next-view-transitions";
import { cn } from "~/lib/cn";

const components = {
  a: ({ className, ...props }: React.ComponentProps<typeof Link>) => (
    <Link className={cn("underlined", className)} {...props} />
  ),
  u: ({ className, ...props }: React.ComponentProps<"u">) => {
    <u className={cn("underlined", className)} {...props} />;
  },
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
  return components;
}
