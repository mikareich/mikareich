import HeroSection from "@/components/HeroSection";
import { TextLarge } from "@/components/Typography";
import Underline from "@/components/Underline";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TextLarge>
        Hi, I&apos;m Mika Reich, an 18-year-old student from Germany. Ever
        <Underline>since I was 12</Underline>, I&apos;ve been passionately
        coding <Underline>web applications and much more</Underline>. Below is
        an overview of the skills I&apos;ve honed over the years:
      </TextLarge>
    </>
  );
}
