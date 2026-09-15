type PostHeroProps = {
  title: string;
  subtitle: string;
  tags: string[];
  publishedAt: string;
};

export function PostHero({
  title,
  subtitle,
  tags,
  publishedAt,
}: PostHeroProps) {
  const date = new Date(publishedAt);

  return (
    <header className="grid grid-rows-[1fr_1fr_auto_auto] gap-x-5 border-theme-border border-b pb-4 sm:min-h-72 lg:gap-x-20">
      <h1 className="col-span-2 mt-1 mb-6 self-end font-black font-heading text-5xl text-portfolio-text-strong leading-tight sm:text-6xl">
        {title}
      </h1>
      <h3 className="col-span-2 row-start-2 w-full font-thin text-2xl text-theme-text sm:text-3xl">
        {subtitle}
      </h3>
      <div className="row-start-3 flex gap-4">
        {tags.map((tag) => (
          <span className="truncate font-thin text-sm uppercase" key={tag}>
            <span className="text-theme-primary"># </span>
            {tag}
          </span>
        ))}
      </div>
      <time
        className="row-start-4 mb-2 font-body font-thin text-theme-text text-sm uppercase max-sm:col-span-2 sm:row-start-3 sm:text-end"
        dateTime={date.toISOString()}
      >
        {date.toLocaleDateString("en-US", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </time>
    </header>
  );
}
