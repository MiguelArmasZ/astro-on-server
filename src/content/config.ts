import { z, defineCollection } from "astro:content";

const products = defineCollection({
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      cover: image(),
      description: z.string(),
    }),
});

export const collections = { products };
