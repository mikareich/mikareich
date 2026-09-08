import { MDXRemote } from "next-mdx-remote/rsc";
import { Link } from "next-view-transitions";
import { cn } from "~/lib/cn";

type LinkProps = React.ComponentProps<typeof Link>;

export default function Content({
  components: customComponents,
  ...props
}: React.ComponentProps<typeof MDXRemote>) {
  const components = {
    a: ({ className, ...props }: LinkProps) => (
      <Link className={cn("highlighted", className)} {...props} />
    ),
    ...customComponents,
  };

  return <MDXRemote components={components} {...props} />;
}
