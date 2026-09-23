// Blog posts are Markdown files in src/content/blog. The file name is the URL:
// save-links.md → /blog/save-links/. Reading time isn't stored here; it's worked
// out from the text at build time, so it can't drift when a post is edited.
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    // Also the meta description, so search results show the same sentence.
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    category: z.string(),
    // The search phrase the post is written for. Not shown anywhere; kept so the
    // next edit knows what the post has to keep answering.
    keyword: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
