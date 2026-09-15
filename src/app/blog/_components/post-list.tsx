import { Link } from "next-view-transitions";
import { CONTENT_TYPES } from "~/lib/content/content-types";
import { ROUTE_MANIFEST, type RouteMetadata } from "~/lib/content/manifest";

const POSTS = ROUTE_MANIFEST.filter(
  (metadata): metadata is RouteMetadata<typeof CONTENT_TYPES.POST> =>
    metadata.type === CONTENT_TYPES.POST,
);

export async function PostList() {
  return (
    <section className="space-y-10">
      {POSTS.map((post, i) => (
        <div
          className="grid grid-cols-[auto_1fr_auto] grid-rows-[auto_auto] gap-x-4 gap-y-1 overflow-hidden max-sm:grid-cols-[auto_auto] max-sm:grid-rows-[repeat(4,auto)]"
          key={post.slug}
        >
          <span className="row-span-2 row-start-1 self-start text-2xl text-theme-primary max-sm:row-span-4">
            {i.toString().padStart(2, "0")}
          </span>

          <h2 className="truncate font-heading font-medium text-2xl text-portfolio-text-strong sm:whitespace-nowrap">
            {post.title}
          </h2>

          <div className="flex gap-4">
            {post.keywords.map((tag) => (
              <span className="truncate font-thin text-sm uppercase" key={tag}>
                <span className="text-theme-primary"># </span>
                {tag}
              </span>
            ))}
          </div>

          <span className="truncate">{post.description}</span>

          <Link
            className="text-link w-fit sm:justify-self-end"
            href={post.slug}
          >
            Read more...
          </Link>
        </div>
      ))}
    </section>
  );
}
