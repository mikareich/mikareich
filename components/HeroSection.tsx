import Image from "next/image";
import { Heading3, Title } from "./Typography";

export default function HeroSection() {
  return (
    <section className="w-full mb-[50px] grid grid-cols-[1fr_auto] grid-rows-2">
      <Title className="self-end">Hey, I&apos;m Mika</Title>
      <Image
        className="self-center rounded-full overflow-hidden row-span-2"
        src="/avatar.svg"
        alt="Mika Reich"
        width={300}
        height={300}
      />
      <Heading3 className="text-raisin-black-100">
        Student & programming enthusiast
      </Heading3>
    </section>
  );
}
