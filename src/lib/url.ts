// Prefixes a site path with the configured base, so links keep working both at
// the GitHub Pages sub-path (/kloom-site/) and at the root of a custom domain.
export function url(path = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}
