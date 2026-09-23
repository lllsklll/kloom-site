// RSS feed at /blog/rss.xml, written by hand instead of adding @astrojs/rss:
// a feed of title, link, date and summary is a few lines of XML. Summaries only,
// so readers come to the site for the full post.
import type { APIRoute } from 'astro';
import { SITE } from '../../data/site';
import { getPosts } from '../../lib/blog';
import { url } from '../../lib/url';

const escape = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const GET: APIRoute = async ({ site }) => {
  const origin = site ?? 'https://kloom.app';
  const blog = new URL(url('blog/'), origin).href;
  const posts = await getPosts();

  const items = posts
    .map((post) => {
      const link = new URL(url(`blog/${post.id}/`), origin).href;
      return `    <item>
      <title>${escape(post.data.title)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${post.data.date.toUTCString()}</pubDate>
      <category>${escape(post.data.category)}</category>
      <description>${escape(post.data.description)}</description>
    </item>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escape(SITE.name)} blog</title>
    <link>${blog}</link>
    <atom:link href="${blog}rss.xml" rel="self" type="application/rss+xml" />
    <description>Guides to saving, sorting and finding links on iPhone.</description>
    <language>en-us</language>
${items}
  </channel>
</rss>
`;

  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
};
