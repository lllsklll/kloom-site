// Facts the site states about the app. Keep them in sync with the app itself
// (AppConstants.swift / App Store Connect) — App Review checks that marketing
// claims match what the app actually does.

export const SITE = {
  name: 'Kloom',
  tagline: 'Save links from anywhere.',
  description:
    'Kloom saves links from any app on your iPhone and keeps them as clean preview cards — sorted into spaces, readable offline, no account needed.',
  appStoreURL: 'https://apps.apple.com/app/kloom/id6792812401',
  manageSubscriptionsURL: 'https://apps.apple.com/account/subscriptions',
  // Same address as AppConstants.supportEmail in the app. Owner's call: never
  // print it as visible text — only ever behind an "Email us" link/button.
  supportEmail: 'llskll.ranu@gmail.com',
};

export const mailto = (subject = 'Kloom') =>
  `mailto:${SITE.supportEmail}?subject=${encodeURIComponent(subject)}`;

// Newsletter: a plain HTML form posting to Buttondown — no third-party script,
// so the site stays tracker-free. Deferred for now (owner's call, 2026-09): the
// form and its Privacy Policy section stay hidden everywhere until the Buttondown
// username is set here.
export const NEWSLETTER = {
  buttondownUsername: '',
};
export const newsletterEnabled = Boolean(NEWSLETTER.buttondownUsername);

export const LIMITS = {
  freeSpaces: 3,
  noteCharacters: 280,
  trashDaysFree: 7,
  trashDaysPro: 30,
};

// USD base prices. The App Store charges the local price (India is set by hand).
export const PRICING = {
  yearly: { price: '$29.99', period: '/year', note: 'About $2.50 a month, billed yearly' },
  monthly: { price: '$4.99', period: '/month', note: 'Billed monthly' },
  india: { yearly: '₹1,499', monthly: '₹199' },
};
