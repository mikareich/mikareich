import Image from "next/image";
import { Heading3, Title } from "./Typography";

export default function HeroSection() {
  return (
    <section className="w-full mb-[50px] grid grid-cols-[1fr_auto] grid-rows-[auto_auto]">
      <Title className="self-end col-span-1">Hey, I&apos;m Mika</Title>
      <Heading3 className="self-start text-raisin-black-100">
        Student & programming enthusiast
      </Heading3>
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
