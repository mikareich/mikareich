import { Link } from "next-view-transitions";
import { cn } from "~/lib/cn";
import type { PostData } from "~/lib/content/content-types";
import Comments from "./comments";
import { TableOfContents } from "./toc";

type SidebarProps = Omit<React.ComponentProps<"aside">, "children"> & {
  post: PostData;
};

export function Sidebar({ post, className, ...props }: SidebarProps) {
  return (
    <aside className={cn(className)} {...props}>
      <TableOfContents toc={post.toc} />

      <Comments postId="unofficial-valorant-api" />
    </aside>
  );
}
