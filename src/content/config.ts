import { defineCollection, z } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';
import { blogSchema } from 'starlight-blog/schema';

export const collections = {
	docs: defineCollection({
		schema: docsSchema({
			extend: (context) => blogSchema(context).merge(z.object({ firstPublished: z.date().optional() })),
		}),
	}),
};
