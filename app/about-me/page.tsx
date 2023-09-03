import HeroSection from "@/components/HeroSection";
import Link from "@/components/Link";
import Skill, { skills } from "@/components/Skill";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <p className="text-raisin-black-100 text-lg mb-[75px]">
        Hi, I&apos;m Mika Reich, an 18-year-old student from Germany. Ever
        <Link active>since I was 12</Link>, I&apos;ve been passionately coding{" "}
        <Link active>web applications and much more</Link>. Lorem ipsum dolor
        sit amet, consectetur adipisicing elit. Dolorum dignissimos eveniet enim
        consequuntur eos, esse maiores. Below is an overview of the skills
        I&apos;ve honed over the years:
      </p>
      <div className="flex flex-wrap gap-[20px] px-[20px]">
        {[...skills, ...skills]
          .sort(() => Math.random() - 0.5)
          .map((skill) => (
            <Skill key={skill} skill={skill} />
          ))}
      </div>
    </main>
  );
}
