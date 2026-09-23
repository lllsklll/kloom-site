import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// SITE_URL and BASE_PATH are set at deploy time. Today the site is served from
// GitHub Pages at https://lllsklll.github.io/kloom-site/ (BASE_PATH=/kloom-site).
// Once the custom domain is live, SITE_URL becomes that domain and BASE_PATH "/".
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://lllsklll.github.io',
  base: process.env.BASE_PATH ?? '/',
  // Astro 7 defaults to JSX-style whitespace, which eats the space between inline
  // elements ("<b>Pro</b> unlocks"). Keep HTML semantics.
  compressHTML: true,
  devToolbar: { enabled: false },
  // "preserve" builds support.astro as /support.html. The live App Store listing
  // links to /support.html, /privacy.html and /terms.html, so those exact paths
  // must keep resolving. Index pages (/, /blog/, /blog/<post>/) stay pretty.
  build: { format: 'preserve' },
  integrations: [
    sitemap({
      // Blog pages are folders (/blog/<post>/index.html), and GitHub Pages
      // redirects /blog/<post> to /blog/<post>/. The sitemap drops that slash, so
      // it's put back to match each page's canonical URL and skip the redirect.
      serialize(item) {
        const path = new URL(item.url).pathname;
        if (path.startsWith('/blog') && !path.endsWith('/')) item.url += '/';
        return item;
      },
    }),
  ],
  vite: { plugins: [tailwindcss()] },
});
