import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full mb-[50px] grid grid-cols-[1fr_auto] grid-rows-[auto_auto]">
      <h1 className="text-2xl xs:text-5xl font-bold text-baby-powder self-end col-span-1">
        Hey, I&apos;m Mika
      </h1>
      <h3 className="xs:text-2xl self-start font-medium text-raisin-black-100">
        Student & programming enthusiast
      </h3>
      <picture className="self-center rounded-full overflow-hidden col-start-2 row-start-1 row-span-2">
        <source
          srcSet="/avatar.svg"
          media="(min-width: 1024px)"
          width={300}
          height={300}
        />
        <source
          srcSet="/avatar.svg"
          media="(min-width: 768px)"
          width={260}
          height={260}
        />
        <source
          srcSet="/avatar.svg"
          media="(min-width: 640px)"
          width={220}
          height={220}
        />
        <source
          srcSet="/avatar.svg"
          media="(min-width: 576px)"
          width={180}
          height={180}
        />
        <source
          srcSet="/avatar.svg"
          media="(min-width: 0px)"
          width={140}
          height={140}
        />

        <Image src="/avatar.svg" alt="Mika Reich" width={300} height={300} />
      </picture>
    </section>
  );
}
