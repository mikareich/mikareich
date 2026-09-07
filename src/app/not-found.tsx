import Content from "~/components/Content";
import { getFileBySlug } from "~/lib/content";
import HeroSection from "./[[...slug]]/HeroSection";

export default async function NotFound() {
  const file = await getFileBySlug("page", "/not-found");
  if (!file) return <h1>404 Not Found</h1>;
  return (
    <>
      <HeroSection {...file.frontmatter.hero} />
      <Content components={file.components} source={file.source} />
    </>
  );
}
