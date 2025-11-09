import type { PostMatter } from '~/lib/content'

export default function HeroSection({
  hero,
  publishedAt,
}: Omit<PostMatter, 'components'>) {
  return (
    <header className="grid grid-rows-[1fr,1fr,auto,auto] gap-x-5 border-gray-100/10 border-b pb-4 sm:h-72 lg:gap-x-20">
      <h1 className="col-span-2 mt-1 mb-6 self-end font-black font-heading text-5xl text-gray-100 leading-10 sm:text-6xl">
        {hero.title}
      </h1>

      <h3 className="col-span-2 row-start-2 w-full font-thin text-2xl text-gray-200 sm:text-3xl">
        {hero.subtitle}
      </h3>

      <div className="row-start-3 flex gap-4">
        {hero.tags.map((tag) => (
          <span className="truncate font-thin text-sm uppercase" key={tag}>
            <span className="text-blue-200"># </span>
            {tag}
          </span>
        ))}
      </div>

      <time
        className="row-start-4 mb-2 font-body font-thin text-gray-200 text-sm uppercase max-sm:col-span-2 sm:row-start-3 sm:text-end"
        dateTime={publishedAt.toDateString()}
      >
        {publishedAt.toLocaleDateString('en-US', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        })}
      </time>
    </header>
  )
}
