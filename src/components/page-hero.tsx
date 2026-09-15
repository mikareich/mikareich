import Image from "next/image";

type PageHeroProps = {
  title: string;
  subtitle: string;
  imageUrl: string;
};

export function PageHero({ title, subtitle, imageUrl }: PageHeroProps) {
  return (
    <header className="grid grid-cols-[1fr_auto] grid-rows-2 gap-x-5 sm:min-h-72 lg:gap-x-20">
      <h1 className="self-end font-black font-heading text-5xl text-portfolio-text-strong leading-tight sm:text-6xl">
        {title}
      </h1>
      <Image
        alt={`Image for ${title}`}
        className="row-span-2 hidden aspect-square h-full w-40 self-center overflow-hidden sm:block sm:w-52 lg:w-72"
        height={300}
        src={imageUrl}
        width={300}
      />
      <h3 className="row-start-2 font-thin text-2xl text-theme-text sm:text-3xl">
        {subtitle}
      </h3>
    </header>
  );
}
