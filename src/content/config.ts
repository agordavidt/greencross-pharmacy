import { defineCollection, z } from 'astro:content';

const services = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    icon: z.string().optional(),
    description: z.string(),
  }),
});

export const collections = {
  'services': services,
};