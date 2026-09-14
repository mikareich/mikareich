import { Link } from "next-view-transitions";
import { POSTS } from "~/content/config";

export async function PostList() {
  return (
    <section className="space-y-10">
      {Object.entries(POSTS).map(([slug, post], i) => (
        <div
          className="grid grid-cols-[auto_1fr_auto] grid-rows-[auto_auto] gap-x-4 gap-y-1 overflow-hidden max-sm:grid-cols-[auto_auto] max-sm:grid-rows-[repeat(4,auto)]"
          key={post.config.title}
        >
          <span className="row-span-2 row-start-1 self-start text-2xl text-theme-primary max-sm:row-span-4">
            {i.toString().padStart(2, "0")}
          </span>

          <h2 className="truncate font-heading font-medium text-2xl text-portfolio-text-strong sm:whitespace-nowrap">
            {post.config.title}
          </h2>

          <div className="flex gap-4">
            {post.config.tags?.map((tag) => (
              <span className="truncate font-thin text-sm uppercase" key={tag}>
                <span className="text-theme-primary"># </span>
                {tag}
              </span>
            ))}
          </div>

          <span className="truncate">{post.config.subtitle}</span>

          <Link
            className="text-link w-fit sm:justify-self-end"
            href={`/blog${slug}`}
          >
            Read more...
          </Link>
        </div>
      ))}
    </section>
  );
}
