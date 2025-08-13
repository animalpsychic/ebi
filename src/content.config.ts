import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
    description: z.string().optional(),
  }),
});

const obat = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string().optional(),
    description: z.string().optional(),
  }),
});

const ilmu = defineCollection({
  schema: z.object({
    title: z.string(),
    category: z.string().optional(),
    description: z.string().optional(),
  }),
});

export const collections = {
  blog,
  obat,
  ilmu,
};
