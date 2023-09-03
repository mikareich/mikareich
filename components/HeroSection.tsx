import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full mb-[50px] grid grid-cols-[1fr_auto] grid-rows-2">
      <h1 className="text-5xl font-bold text-baby-powder self-end">
        Hey, I&apos;m Mika
      </h1>
      <Image
        className="self-center rounded-full overflow-hidden row-span-2"
        src="/avatar.svg"
        alt="Mika Reich"
        width={300}
        height={300}
      />
      <h3 className="text-2xl font-medium text-raisin-black-100">
        Student & programming enthusiast
      </h3>
    </section>
  );
}
