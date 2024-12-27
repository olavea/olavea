import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		date: z.coerce.date().optional(),
		// Transform string to Date object

		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

const top = defineCollection({
	schema: z.object({
		title: z.string(),
		stars: z.number(),
		photo: z.string(),
	})
})

export const collections = { blog, top };
