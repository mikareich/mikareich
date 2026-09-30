import { cn } from "~/lib/cn";
import { CONTENT_DATA, type PostData } from "~/lib/content/content-types";
import Comments from "./comments";
import { TableOfContents } from "./toc";

type PostLayoutProps = {
  raw: string;
  children: React.ReactNode;
};

export function PostLayout({ children, raw }: PostLayoutProps) {
  const post = CONTENT_DATA.parse(JSON.parse(raw)) as PostData;

  return (
    <main className={cn("grid", "grid-cols-4", "gap-8")}>
      <header
        className={cn(
          "border-b",
          "border-b-theme-border",
          "pb-8",
          "grid",
          "col-span-4",
          "grid-cols-subgrid",
          "gap-4",
        )}
      >
        <h1 className={cn("text-title", "col-span-full")}>
          {post.metadata.title}
        </h1>

        <h3 className={cn("text-subtitle", "col-span-full")}>
          {post.metadata.description}
        </h3>

        <ol className={cn("flex", "gap-x-2", "col-span-full", "sm:col-span-3")}>
          {post.metadata.keywords.map((keyword) => (
            <li key={keyword} className="uppercase">
              <span className="text-theme-primary">#</span> {keyword}
            </li>
          ))}
        </ol>

        <time
          className={cn(
            "sm:place-self-end",
            "uppercase",
            "max-sm:col-span-full",
          )}
          dateTime={post.metadata.openGraph.publishedTime.toISOString()}
        >
          {post.metadata.openGraph.publishedTime.toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </time>
      </header>

      <TableOfContents className="lg:hidden col-span-full" toc={post.toc} />

      <hr className="text-theme-border col-span-full lg:hidden" />

      <div
        className={cn(
          "col-span-full",
          "lg:col-span-3",
          "overflow-x-hidden",
          "lg:w-full",
          "pr-8",
        )}
      >
        <article className={cn("max-w-prose", "space-y-4")}>{children}</article>
      </div>

      <aside
        className={cn(
          "sticky",
          "top-8",
          "self-start",
          "space-y-8",
          "max-lg:hidden",
        )}
      >
        <TableOfContents className="mb-10" toc={post.toc} />

        <hr className="text-theme-border" />

        <Comments postId="unofficial-valorant-api" />
      </aside>

      <hr className="text-theme-border col-span-full lg:hidden" />

      <Comments
        className="lg:hidden col-span-full "
        postId="unofficial-valorant-api"
      />
    </main>
  );
}
