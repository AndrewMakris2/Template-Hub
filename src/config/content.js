/**
 * ============================================================================
 *  CONTENT — everything written on the sales site / design hub
 * ============================================================================
 *  Edit this file to change any wording, prices, FAQs or the design list.
 *  Anything marked `// TODO: confirm` is a placeholder decision (brand name,
 *  prices, turnaround, bio) — check each one before sending the site out.
 *  Search this file for "TODO" to find them all.
 * ============================================================================
 */

const live = (n) => `https://hairstylist-template-${n}.netlify.app`;
const shot = (n, size) => `/images/designs/design-${n}-${size}.webp`;

export const content = {
  site: {
    lang: 'en',
    url: 'https://chairside-sites.netlify.app', // TODO: confirm — update if you rename the Netlify project or add a domain
    title: 'Chairside — Websites for independent hairstylists', // TODO: confirm brand name
    description:
      'Beautiful, mobile-first websites for independent hairstylists. Pick one of ten designs, send your photos and booking link, and launch in about a week.',
    ogImage: 'https://chairside-sites.netlify.app/images/og.jpg',
    ogImageAlt: 'Chairside — a collage of website designs for hairstylists',
  },

  brand: {
    name: 'Chairside', // TODO: confirm brand name
    tagline: 'Websites for independent hairstylists.',
  },

  nav: {
    links: [
      { label: 'Designs', href: '#designs' },
      { label: 'What you get', href: '#included' },
      { label: 'How it works', href: '#process' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'FAQ', href: '#faq' },
    ],
    cta: { label: 'Get your site', href: '#contact' },
    menuOpenLabel: 'Open menu',
    menuCloseLabel: 'Close menu',
    skipLinkLabel: 'Skip to content',
  },

  hero: {
    eyebrow: 'Websites for independent hairstylists',
    heading: 'A website as good as',
    headingAccent: 'your work.',
    intro:
      'Pick one of ten designs made for stylists. I fill it with your photos, services and booking link, and launch it in about a week.', // TODO: confirm turnaround
    primaryCta: { label: 'Browse the designs', href: '#designs' },
    secondaryCta: { label: 'Get started', href: '#contact' },
    highlights: ['10 original designs', 'Works with your booking app', 'Live in about a week'], // TODO: confirm turnaround
    collage: [2, 6, 10], // design numbers shown as desktop screenshots in the hero
    phone: 7, // design number shown on the phone
  },

  platforms: {
    label: 'Links straight to the booking app you already use',
    names: ['StyleSeat', 'Vagaro', 'Booksy', 'GlossGenius', 'Square Appointments', 'Schedulicity', 'Fresha'],
  },

  designs: {
    label: 'The designs',
    heading: 'Ten designs. One made for you.',
    intro:
      'Every design is a real, working website. Open any of them, tap around on your phone, and pick the one that feels like your chair.',
    filterLabel: 'Filter designs by style',
    filterAll: 'All',
    filters: ['Minimal', 'Elegant', 'Bold', 'Playful', 'Classic', 'Dark'],
    countTemplate: 'Showing {count} designs',
    viewLabel: 'View live',
    chooseLabel: 'Start with this design',
    bestForLabel: 'Best for',
    items: [
      { id: 1, name: 'Editorial', style: 'Minimal & editorial', tags: ['Minimal', 'Classic'], bestFor: 'Colourists and cutters who want a calm, magazine feel.', url: live(1), desktop: shot(1, 'desktop'), mobile: shot(1, 'mobile') },
      { id: 2, name: 'Atelier', style: 'Soft & romantic', tags: ['Elegant'], bestFor: 'Bridal, blonding and soft-colour specialists.', url: live(2), desktop: shot(2, 'desktop'), mobile: shot(2, 'mobile') },
      { id: 3, name: 'Organic', style: 'Warm & earthy', tags: ['Elegant', 'Minimal'], bestFor: 'Curly-hair, natural and low-tox colour stylists.', url: live(3), desktop: shot(3, 'desktop'), mobile: shot(3, 'mobile') },
      { id: 4, name: 'Grid', style: 'Bold & modern', tags: ['Bold', 'Minimal'], bestFor: 'Precision cutters, fades and vivid colour.', url: live(4), desktop: shot(4, 'desktop'), mobile: shot(4, 'mobile') },
      { id: 5, name: 'Maison', style: 'Luxe fashion house', tags: ['Elegant', 'Classic'], bestFor: 'Luxury salons, extensions and event styling.', url: live(5), desktop: shot(5, 'desktop'), mobile: shot(5, 'mobile') },
      { id: 6, name: 'Noir', style: 'Dark & cinematic', tags: ['Dark', 'Bold'], bestFor: 'Barbers, grooming studios and editorial cuts.', url: live(6), desktop: shot(6, 'desktop'), mobile: shot(6, 'mobile') },
      { id: 7, name: 'Pop', style: 'Bright & playful', tags: ['Playful', 'Bold'], bestFor: 'Vivid colour, pastels and fun, shaggy cuts.', url: live(7), desktop: shot(7, 'desktop'), mobile: shot(7, 'mobile') },
      { id: 8, name: 'Broadsheet', style: 'Classic newspaper', tags: ['Classic'], bestFor: 'Established salons with loyal, local clients.', url: live(8), desktop: shot(8, 'desktop'), mobile: shot(8, 'mobile') },
      { id: 9, name: 'Zen', style: 'Calm & minimal', tags: ['Minimal'], bestFor: 'Quiet, detail-obsessed studios and head spas.', url: live(9), desktop: shot(9, 'desktop'), mobile: shot(9, 'mobile') },
      { id: 10, name: 'Groovy', style: '70s retro', tags: ['Playful'], bestFor: 'Shags, curls and stylists with big personality.', url: live(10), desktop: shot(10, 'desktop'), mobile: shot(10, 'mobile') },
    ],
  },

  included: {
    label: 'What you get',
    heading: 'Everything a stylist’s website needs. Nothing it doesn’t.',
    items: [
      { icon: 'smartphone', title: 'Made for phones first', text: 'Most clients find you on their phone, so every design is built for small screens and looks great on big ones too.' },
      { icon: 'calendar', title: 'Your booking app, one tap away', text: 'Every “Book” button goes straight to your StyleSeat, Vagaro, Booksy or whatever you already use. No switching.' },
      { icon: 'mail', title: 'Enquiries to your inbox', text: 'A contact form with spam protection that sends messages straight to your email.' },
      { icon: 'image', title: 'Your work, front and centre', text: 'A gallery for your best photos, with a full-screen view when clients tap them.' },
      { icon: 'search', title: 'Found on Google', text: 'Page titles, descriptions and share previews set up properly, so you look good in search and in DMs.' },
      { icon: 'zap', title: 'Fast and secure', text: 'Lightweight pages on reliable hosting with free SSL (the padlock in the address bar).' },
      { icon: 'globe', title: 'Your own domain', text: 'Connect a name like yourname.com. Domain registration is paid to your registrar.' },
      { icon: 'pen', title: 'Updates when you need them', text: 'New prices, fresh photos or holiday hours: send a message and it’s done.' },
    ],
  },

  process: {
    label: 'How it works',
    heading: 'From “I need a website” to live in about a week.', // TODO: confirm turnaround
    steps: [
      { title: 'Pick a design', text: 'Browse the ten designs and choose the one that fits your style. Not sure? I’ll help you decide.' },
      { title: 'Send your stuff', text: 'Your photos, services and prices, a few lines about you, and your booking link. Phone photos are fine.' },
      { title: 'Review your preview', text: 'I send you a private link to your finished site. Tap through it and tell me what to change.' },
      { title: 'Go live', text: 'I connect your domain, switch on your contact form and launch. Then share it everywhere.' },
    ],
  },

  pricing: {
    label: 'Pricing',
    heading: 'Simple, one-time pricing.',
    intro: 'No monthly fees unless you want them. Prices in USD.', // TODO: confirm currency
    plans: [
      {
        name: 'Launch',
        price: '$499', // TODO: confirm price
        cadence: 'one-time',
        description: 'A beautiful site in your chosen design, ready to share.',
        features: ['Your pick of the 10 designs', 'Your photos, services, prices and bio', 'Booking button and contact form', 'Mobile-first, with SEO basics', 'One round of revisions', 'Free .netlify.app address'],
        cta: 'Choose Launch',
      },
      {
        name: 'Signature',
        price: '$899', // TODO: confirm price
        cadence: 'one-time',
        badge: 'Most popular',
        featured: true,
        description: 'Your design, tailored to your brand, on your own domain.',
        features: ['Everything in Launch', 'Your own domain connected', 'Colours and fonts matched to your brand', 'One extra section (bridal, FAQ, products…)', 'Three rounds of revisions', 'Priority launch'],
        cta: 'Choose Signature',
      },
      {
        name: 'Care plan',
        price: '$29', // TODO: confirm price
        cadence: 'per month',
        description: 'Optional. I keep your site running and up to date.',
        features: ['Hosting, SSL and security', 'Up to 30 minutes of updates each month', 'New photos, prices and hours on request', 'Contact form monitoring', 'Cancel anytime'],
        cta: 'Add the Care plan',
      },
    ],
    note: 'Domain registration (usually around $15 a year) is paid directly to your registrar, so it’s always yours.',
  },

  about: {
    label: 'About me',
    heading: 'Hi, I’m Andrew.', // TODO: confirm name
    initial: 'A', // TODO: confirm — shown in the round avatar
    bio: [
      'I design and build websites for independent hairstylists. Your work is gorgeous, and your website should be too, without you having to learn web design or pay agency prices.', // TODO: confirm bio
      'Every design here was made specifically for stylists: real booking buttons, real galleries, real price lists, and fast on phones. You get one person who handles everything, answers quickly and actually cares how it turns out.', // TODO: confirm bio
    ],
    signature: 'Andrew', // TODO: confirm name
  },

  faq: {
    label: 'FAQ',
    heading: 'Questions, answered.',
    items: [
      { q: 'Do I have to switch booking apps?', a: 'No. Your site links straight to the booking app you already use, whether that’s StyleSeat, Vagaro, Booksy, GlossGenius, Square or another. Clients book exactly how they do now.' },
      { q: 'Do I need professional photos?', a: 'No. Good phone photos of your work look great in every design. I’ll crop and optimise them so the site stays fast.' },
      { q: 'What do I need to send you?', a: 'Your photos, a list of services with prices and durations, a few lines about you, your booking link, your contact details and your hours. I’ll send you a simple checklist.' },
      { q: 'How long does it take?', a: 'About a week from when I have your photos and details. The Signature plan gets priority.' }, // TODO: confirm turnaround
      { q: 'Can I change things later?', a: 'Yes. With the Care plan, small updates like new prices, photos or hours are included each month. Without it, I can make changes whenever you need them.' },
      { q: 'Do I own my website and domain?', a: 'Yes. Your domain is registered in your name, and your content is always yours.' },
      { q: 'Can you change the colours or fonts?', a: 'Yes. Every design can be matched to your brand colours and fonts. That’s included in the Signature plan.' },
      { q: 'Will I see it before it goes live?', a: 'Always. You get a private preview link to check on your phone and computer, and nothing launches until you’re happy.' },
    ],
  },

  contact: {
    label: 'Get started',
    heading: 'Let’s build your website.',
    intro: 'Tell me a little about you and which design you like. I’ll get back to you within one business day with next steps.', // TODO: confirm response time
    promises: ['No obligation', 'A real reply from me, not a bot', 'Clear pricing up front'],
    form: {
      name: 'inquiry', // Netlify form name — shows up in the Netlify dashboard
      fields: {
        name: { label: 'Your name' },
        email: { label: 'Email' },
        phone: { label: 'Phone (optional)' },
        business: { label: 'Salon or business name' },
        link: { label: 'Instagram or current website', placeholder: '@yourhandle' },
        design: { label: 'Which design do you like?', unsure: 'Not sure yet' },
        plan: { label: 'Which plan?', unsure: 'Not sure yet' },
        message: { label: 'Anything else?', placeholder: 'Your services, booking app, launch date…' },
      },
      honeypotLabel: 'Don’t fill this out if you’re human:',
      submitLabel: 'Send my enquiry',
      sendingLabel: 'Sending…',
      successMessage: 'Thanks! Your enquiry is in. I’ll be in touch within one business day.', // TODO: confirm response time
      errorMessage: 'Sorry, something went wrong. Please try again in a moment.',
    },
  },

  footer: {
    note: 'Every design on this page is a live website. Click around.',
    copyrightName: 'Chairside', // TODO: confirm brand name
    copyrightSuffix: 'All rights reserved.',
    backToTopLabel: 'Back to top',
  },
};
