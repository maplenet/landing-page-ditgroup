import { defineCollection, z } from 'astro:content';

const legal = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

const noticias = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    image: z.string(),
    description: z.string(),
  }),
});

export const collections = {
  'legal': legal,
  'noticias': noticias,
};