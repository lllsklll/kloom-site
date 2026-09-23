// Shared by the blog index, the post pages and the RSS feed, so all three agree
// on which posts are live, their order, and how dates and reading time read.
import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

// A common average for reading on screen.
const WORDS_PER_MINUTE = 200;

// Drafts show in `astro dev` so they can be previewed, never in the build.
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('blog', (p) => import.meta.env.DEV || !p.data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function readingTime(post: Post): string {
  const words = (post.body ?? '').split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / WORDS_PER_MINUTE))} min read`;
}

// Fixed to UTC: front-matter dates are midnight UTC, and formatting them in a
// timezone west of it would print the day before.
const dateFormat = new Intl.DateTimeFormat('en-US', { dateStyle: 'long', timeZone: 'UTC' });
export const formatDate = (date: Date) => dateFormat.format(date);
