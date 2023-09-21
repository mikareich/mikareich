import MdxContent from "@/components/MdxContent";
import { getPageBySlug } from "@/utils/pageUtils";

export async function generateMetadata() {
  const { frontMatter } = await getPageBySlug("");

  return {
    title: `Mika Reich | ${frontMatter.title}`,
    description: frontMatter.description,
  };
}

export default async function Projects() {
  const { content } = await getPageBySlug("");

  return <MdxContent source={content} />;
}
