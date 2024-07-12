import { z, defineCollection } from "astro:content";

const posts = defineCollection({
  type: "content",
  schema: z.object({
    slug: z.string(),

    publishedAt: z.date(),

    title: z.string(),
    tags: z.array(z.string()),
    description: z.string(),
  }),
});

export const collections = {
  posts,
};
