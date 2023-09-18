import Link from "@/components/Link";
import { Heading1, Text } from "@/components/Typography";

export default function ContactMe() {
  return (
    <main>
      <Heading1>Get in Touch </Heading1>
      <Text className="mt-[50px]">
        If you have any questions, project ideas, or just want to chat about web
        development, I&apos;d love to hear from you. Reach out, and I&apos;ll
        get back to you as soon as I can.
      </Text>
      <Text>
        You can reach out directly to my email at{" "}
        <Link href="mailto:mikareich0@gmail.com">mikareich0@gmail.com</Link>. If
        you&apos;re interested in my coding projects,{" "}
        <Link href="https://github.com/mikareich">my GitHub</Link> has it all.
        For those who prefer real-time discussions, I&apos;m available on
        <Link>Discord</Link>. Keep up with my latest thoughts on Twitter, see
        snippets of my day on Instagram, or even tune into my music preferences
        on Spotify.
      </Text>
    </main>
  );
}
