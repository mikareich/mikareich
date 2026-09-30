import type { MDXComponents } from "mdx/types";
import { Link } from "next-view-transitions";
import { cn } from "~/lib/cn";
import { PostLayout } from "./app/blog/_components/post-layout";

const components = {
  a: ({ className, ...props }: React.ComponentProps<typeof Link>) => (
    <Link className={cn("underlined", className)} {...props} />
  ),
  p: ({ className, ...props }: React.ComponentProps<"p">) => (
    <p className={cn("text-body", className)} {...props} />
  ),
  h1: ({ className, ...props }: React.ComponentProps<"h1">) => (
    <h1 className={cn("text-heading-1", className)} {...props} />
  ),
  h2: ({ className, ...props }: React.ComponentProps<"h2">) => (
    <h2 className={cn("text-heading-2", className)} {...props} />
  ),
  h3: ({ className, ...props }: React.ComponentProps<"h3">) => (
    <h3 className={cn("text-heading-3", className)} {...props} />
  ),
  h4: ({ className, ...props }: React.ComponentProps<"h4">) => (
    <h4 className={cn("text-heading-4", className)} {...props} />
  ),
  h5: ({ className, ...props }: React.ComponentProps<"h5">) => (
    <h5 className={cn("text-heading-4", className)} {...props} />
  ),
  h6: ({ className, ...props }: React.ComponentProps<"h6">) => (
    <h6 className={cn("text-heading-4", className)} {...props} />
  ),
  Post: PostLayout,
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
  return components;
}
