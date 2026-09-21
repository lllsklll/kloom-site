// Links that float on screen during the v2 intro, then land in the phone.
// x / y are 0–1 positions across the viewport (desktop), mx / my the same on phones
// (two columns). 0 = flush left/top, 1 = flush right/bottom, whatever the card's size.
// rot is the card's tilt in degrees.

export type Kind = 'video' | 'shop' | 'tweet' | 'article' | 'music' | 'place';

export type Item = {
  kind: Kind;
  title: string;
  host: string;
  tag: string;
  // Relative age in the card's meta row, in the app's own terse format
  // ("now", "5m", "3h", "2d", "1w"). See LinkRowView.relativeDate in the app.
  age?: string;
  meta?: string;
  price?: string;
  grad?: string;
  name?: string;
  handle?: string;
  initials?: string;
  avatar?: string;
  x: number;
  y: number;
  mx?: number;
  my?: number;
  rot: number;
  // Only shown on wide screens (1280px+); smaller ones have no free spot for it.
  wideOnly?: boolean;
};

export const floating: Item[] = [
  { kind: 'video', title: 'The science of deep focus', host: 'youtube.com', meta: '12:48', tag: 'Watch', age: '2h', x: 0.03, y: 0.05, mx: 0, my: 0, rot: -6 },
  { kind: 'shop', title: 'Linen overshirt, sand', host: 'everlane.com', price: '$68', grad: 'from-amber-100 to-orange-300', tag: 'Shop', age: '5h', x: 0.97, y: 0.04, mx: 1, my: 0, rot: 5 },
  { kind: 'article', title: 'How to Do Great Work', host: 'paulgraham.com', meta: '18 min read', tag: 'Read', age: '1d', x: 0.03, y: 0.78, mx: 0, my: 0.82, rot: 4 },
  { kind: 'shop', title: 'Ceramic pour-over set', host: 'amazon.com', price: '$34', grad: 'from-stone-100 to-stone-400', tag: 'Shop', age: '2d', x: 0.97, y: 0.98, mx: 1, my: 1, rot: -4 },
  { kind: 'music', title: 'Deep Focus', host: 'open.spotify.com', meta: 'Playlist · 142 songs', tag: 'Listen', age: '3d', x: 0.3, y: 0, rot: -3, wideOnly: true },
  {
    kind: 'tweet',
    title: 'Good typography is invisible. Bad typography is all you see.',
    name: 'Design Notes',
    handle: '@designnotes',
    age: '6h',
    initials: 'DN',
    avatar: 'bg-sky-500',
    host: 'x.com',
    tag: 'Design',
    x: 0.68,
    y: 0,
    rot: 3,
    wideOnly: true,
  },
  { kind: 'place', title: 'Blue Bottle Coffee', host: 'maps.google.com', meta: '★ 4.6 · Hayes Valley, SF', tag: 'Places', age: '4d', x: 0.25, y: 0.98, mx: 0, my: 1, rot: -2 },
];

// Already in the app before the intro starts.
export const saved: Item[] = [
  { kind: 'article', title: 'Mobbin — UI & UX design reference', host: 'mobbin.com', tag: 'Design', age: '1w', x: 0, y: 0, rot: 0 },
  { kind: 'article', title: 'Stratechery by Ben Thompson', host: 'stratechery.com', tag: 'Read', age: '1w', x: 0, y: 0, rot: 0 },
  { kind: 'article', title: 'godly.website', host: 'godly.website', tag: 'Design', age: '2w', x: 0, y: 0, rot: 0 },
  { kind: 'article', title: 'Swift by Sundell', host: 'swiftbysundell.com', tag: 'Dev', age: '3w', x: 0, y: 0, rot: 0 },
];

// The link the scroll story shares, saves into Read, then finds by search.
export const story: Item = {
  kind: 'article',
  title: 'Principles of Calm Technology',
  host: 'calmtech.com',
  tag: 'Read',
  age: 'now',
  grad: 'from-sky-100 via-indigo-100 to-rose-100',
  x: 0,
  y: 0,
  rot: 0,
};
