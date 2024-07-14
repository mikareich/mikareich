import { z, defineCollection } from "astro:content";

const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    published: z.date(),
  }),
});

const pages = defineCollection({
  schema: z.object({
    pageTitle: z.string(),
    metaDescription: z.string().optional(),
    heroTitle: z.string(),
    heroDescription: z.string(),
    heroImage: z.string(),
  }),
});

export const collections = {
  posts,
  pages,
};
