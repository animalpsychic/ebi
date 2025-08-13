import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

// Blog
const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
});

// Obat
const obat = defineCollection({
  loader: glob({ base: "./src/content/obat", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date().optional(),
  }),
});

// Ilmu
const ilmu = defineCollection({
  loader: glob({ base: "./src/content/ilmu", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string().optional(),
    pubDate: z.coerce.date().optional(),
  }),
});

export const collections = { blog, obat, ilmu };
