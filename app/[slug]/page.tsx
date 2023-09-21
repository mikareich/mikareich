import MdxContent from "@/components/MdxContent";
import getMdxFile from "@/utils/getMdxFile";
import { getPageBySlug } from "@/utils/pageUtils";

type PageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: PageProps) {
  const { slug } = params;
  const { frontMatter } = await getPageBySlug(slug);

  return {
    title: `Mika Reich | ${frontMatter.title}`,
    description: frontMatter.description,
  };
}

export default async function Projects({ params }: PageProps) {
  const { slug } = params;
  const { content } = await getPageBySlug(slug);

  return <MdxContent source={content} />;
}
