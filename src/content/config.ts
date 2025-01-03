import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		date: z.coerce.date().optional(),
		// Transform string to Date object

		updatedDate: z.coerce.date().optional(),
		photo: z.string().optional(),
		alt: z.string().optional(),
	}),
});

const top = defineCollection({
	schema: z.object({
		title: z.string(),
		stars: z.number().optional(),
		photo: z.string().optional(),
		alt: z.string().optional(),
		desc: z.string().optional(),
	})
})

const books = defineCollection({
	schema: z.object({
		title: z.string(),
		stars: z.number().optional(),
		photo: z.string().optional(),
		alt: z.string().optional(),
		desc: z.string().optional(),
	})
})

const films = defineCollection({
	schema: z.object({
		title: z.string(),
		stars: z.number().optional(),
		photo: z.string().optional(),
		alt: z.string().optional(),
		desc: z.string().optional(),
	})
})

const parenting = defineCollection({
	schema: z.object({
		title: z.string(),
		stars: z.number().optional(),
		photo: z.string().optional(),
		alt: z.string().optional(),
		desc: z.string().optional(),
	})
})

const bad = defineCollection({
	schema: z.object({
		title: z.string(),
		stars: z.number().optional(),
		photo: z.string().optional(),
		alt: z.string().optional(),
		desc: z.string().optional(),
	})
})
export const collections = { blog, top, books, bad, films, parenting };
