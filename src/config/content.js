/**
 * ============================================================================
 *  CONTENT — everything written on the sales site / design hub
 * ============================================================================
 *  Edit this file to change any wording, prices, FAQs or the design list.
 * ============================================================================
 */

const live = (n) => `https://hairstylist-template-${n}.netlify.app`;
const shot = (n, size) => `/images/designs/design-${n}-${size}.webp`;

export const content = {
  site: {
    lang: 'en',
    url: 'https://andrew-makris.netlify.app', // update if you rename the Netlify project or add a domain
    title: 'Andrew Makris — Websites for independent hairstylists',
    description:
      'Beautiful, mobile-first websites for independent hairstylists. Pick one of ten designs, send your photos and booking link, and launch in 3 days.',
    ogImage: 'https://andrew-makris.netlify.app/images/og.jpg',
    ogImageAlt: 'Andrew Makris — website designs for hairstylists',
  },

  brand: {
    name: 'Andrew Makris',
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
      'Pick one of ten designs made for stylists. I fill it with your photos, services and booking link, and launch it in 3 days.',
    primaryCta: { label: 'Browse the designs', href: '#designs' },
    secondaryCta: { label: 'Get started', href: '#contact' },
    highlights: ['10 original designs', 'Works with your booking app', 'Live in 3 days'],
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
    heading: 'From “I need a website” to live in 3 days.',
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
    intro: 'No monthly fees unless you want them. Prices in USD.',
    plans: [
      {
        name: 'Launch',
        price: '$299',
        cadence: 'one-time',
        description: 'A beautiful site in your chosen design, ready to share.',
        features: ['Your pick of the 10 designs', 'Your photos, services, prices and bio', 'Booking button and contact form', 'Mobile-first, with SEO basics', 'One round of revisions', 'Free .netlify.app address'],
        cta: 'Choose Launch',
      },
      {
        name: 'Signature',
        price: '$599',
        cadence: 'one-time',
        badge: 'Most popular',
        featured: true,
        description: 'Your design, tailored to your brand, on your own domain.',
        features: ['Everything in Launch', 'Your own domain connected', 'Colours and fonts matched to your brand', 'One extra section (bridal, policies or FAQ)', 'Three rounds of revisions'],
        cta: 'Choose Signature',
      },
      {
        name: 'Care plan',
        price: '$19',
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
    heading: 'Hi, I’m Andrew.',
    photo: { src: '/images/andrew.webp', alt: 'Andrew Makris' },
    initial: 'AM', // shown in a round avatar if there's no photo
    bio: [
      'I’m Andrew, and I build websites for independent hairstylists. You’ve put years into your craft, and your website should show it off as well as your Instagram does, with your best work up front and booking one tap away.',
      'You work with me directly, start to finish. No agency, no account managers and no tech jargon: you pick a design, send me your photos and services, and I handle the rest. If something needs changing later, you message me and it’s done.',
      'I care about the details your clients notice: a site that loads fast on their phone, looks polished and makes it effortless to book you.',
    ],
    signature: 'Andrew Makris',
  },

  faq: {
    label: 'FAQ',
    heading: 'Questions, answered.',
    items: [
      { q: 'Do I have to switch booking apps?', a: 'No. Your site links straight to the booking app you already use, whether that’s StyleSeat, Vagaro, Booksy, GlossGenius, Square or another. Clients book exactly how they do now.' },
      { q: 'Do I need professional photos?', a: 'No. Good phone photos of your work look great in every design. I’ll crop and optimise them so the site stays fast.' },
      { q: 'What do I need to send you?', a: 'Your photos, a list of services with prices and durations, a few lines about you, your booking link, your contact details and your hours. I’ll send you a simple checklist.' },
      { q: 'How long does it take?', a: 'About 3 days from when I have your photos and details.' },
      { q: 'Can I change things later?', a: 'Yes. With the Care plan, small updates like new prices, photos or hours are included each month. Without it, I can make changes whenever you need them.' },
      { q: 'Do I own my website and domain?', a: 'Your domain is registered in your name and your content is always yours. Once you’ve paid, your site is yours to use for as long as you like.' },
      { q: 'How does payment work?', a: 'You pay 50% up front to book your project and the other 50% when you approve your site, before it goes live. If you cancel before I start work, I refund your deposit in full. Once I’ve sent your preview link, the deposit isn’t refundable. You can cancel the Care plan anytime.' },
      { q: 'Can you change the colours or fonts?', a: 'Yes. Every design can be matched to your brand colours and fonts. That’s included in the Signature plan.' },
      { q: 'Will I see it before it goes live?', a: 'Always. You get a private preview link to check on your phone and computer, and nothing launches until you’re happy.' },
    ],
  },

  contact: {
    label: 'Get started',
    heading: 'Let’s build your website.',
    intro: 'Tell me a little about you and which design you like. I’ll get back to you the same day with next steps.',
    promises: ['No obligation', 'A real reply from me, not a bot', 'Clear pricing up front'],
    emailLabel: 'Prefer email?',
    email: 'amakris03@gmail.com',
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
      successMessage: 'Thanks! Your enquiry is in. I’ll be in touch the same day.',
      errorMessage: 'Sorry, something went wrong. Please try again in a moment.',
      privacyNote: 'Your details are only used to reply to you.',
      privacyLabel: 'Privacy policy',
    },
  },

  // --------------------------------------------------------------------------
  // CLIENT CHECKLIST — the /checklist/ page you send a client once they've
  // booked. Not linked from the main page and hidden from search engines.
  // Submissions arrive as the "intake" form (emailed like enquiries).
  // --------------------------------------------------------------------------
  checklist: {
    title: 'Your website checklist | Andrew Makris',
    description: 'Everything Andrew needs to build your website, in one form.',
    backLabel: 'Back to the main site',
    label: 'Your website checklist',
    heading: 'Everything I need to build your site.',
    intro: 'Fill this in once and I’ll take it from there. It takes about 15 minutes. Not sure about something? Leave it blank and we’ll sort it out together.',
    photos: {
      heading: 'Your photos',
      text: 'Phone photos are fine. Email them to me or share a Google Drive, Dropbox or iCloud link in the form below.',
      items: [
        'A photo of you: a friendly headshot or you at work',
        '6–9 photos of your best work, in good light',
        'One wide (landscape) photo for the top of the page, if you have one',
        'Your logo, if you have one',
      ],
    },
    form: {
      name: 'intake', // Netlify form name — shows up in the Netlify dashboard
      groups: [
        {
          heading: 'You and your plan',
          fields: [
            { name: 'name', label: 'Your name', type: 'text', required: true, autocomplete: 'name' },
            { name: 'email', label: 'Email', type: 'email', required: true, autocomplete: 'email' },
            { name: 'design', label: 'Your design', type: 'design' },
            { name: 'plan', label: 'Your plan', type: 'plan' },
          ],
        },
        {
          heading: 'Your business',
          fields: [
            { name: 'business', label: 'Business name, as it should appear on the site', type: 'text', required: true, wide: true },
            { name: 'tagline', label: 'One-line tagline', type: 'text', placeholder: 'Lived-in colour and easy cuts', wide: true },
            { name: 'city', label: 'City or area', type: 'text', placeholder: 'Austin, Texas' },
            { name: 'address', label: 'Studio address', type: 'text', placeholder: 'Or “mobile” / “by appointment”' },
            { name: 'public-phone', label: 'Phone for the site', type: 'tel' },
            { name: 'public-email', label: 'Email for the site', type: 'email' },
            { name: 'booking', label: 'Booking link', type: 'text', placeholder: 'Your StyleSeat, Vagaro, Booksy… link', hint: 'Every “Book” button on your site will go here.', wide: true },
            { name: 'hours', label: 'Opening hours', type: 'textarea', rows: 3, placeholder: 'Tue–Fri 10–7, Sat 9–4, Sun–Mon closed', wide: true },
          ],
        },
        {
          heading: 'About you',
          fields: [
            { name: 'bio', label: 'A few lines about you', type: 'textarea', rows: 5, placeholder: 'How long you’ve been doing hair, what you love, what clients can expect…', hint: 'Don’t worry about polish. I’ll tidy it up and send it back for you to check.', wide: true },
            { name: 'specialties', label: 'What you’re known for', type: 'text', placeholder: 'Blonding, curly cuts, bridal…', wide: true },
          ],
        },
        {
          heading: 'Services and prices',
          fields: [
            { name: 'services', label: 'Your services', type: 'textarea', rows: 7, placeholder: 'One per line: name, time, price, short note\nWomen’s cut, 60 min, $85, includes wash and style\nFull highlights, 3 hrs, from $220', hint: 'Or just paste your price list or booking-app menu.', wide: true },
          ],
        },
        {
          heading: 'Reviews',
          fields: [
            { name: 'reviews', label: '2–3 short reviews from clients', type: 'textarea', rows: 5, placeholder: 'The quote, plus their first name and initial', hint: 'Copy them from Google, your booking app or messages. Only use reviews clients are happy to share.', wide: true },
          ],
        },
        {
          heading: 'Socials and photos',
          fields: [
            { name: 'instagram', label: 'Instagram', type: 'text', placeholder: '@yourhandle' },
            { name: 'tiktok', label: 'TikTok', type: 'text', placeholder: '@yourhandle' },
            { name: 'other-socials', label: 'Facebook, Pinterest or others', type: 'text', wide: true },
            { name: 'photos-link', label: 'Link to your photos', type: 'text', placeholder: 'Google Drive, Dropbox or iCloud link', hint: 'Or email them to me. Either is fine.', wide: true },
          ],
        },
        {
          heading: 'Signature plan extras',
          note: 'Only if you chose Signature.',
          fields: [
            { name: 'brand', label: 'Brand colours and fonts', type: 'text', placeholder: 'Hex codes, a brand guide, or “match my Instagram”', wide: true },
            { name: 'extra-section', label: 'Your extra section', type: 'select', options: ['Not sure yet', 'Bridal & events', 'Booking policies', 'FAQ', 'Something else'] },
            { name: 'domain', label: 'Your domain', type: 'text', placeholder: 'yourname.com, or the one you’d like' },
            { name: 'extra-details', label: 'Details for your extra section', type: 'textarea', rows: 4, placeholder: 'Bridal packages and prices, your cancellation policy, common questions…', wide: true },
          ],
        },
        {
          heading: 'Anything else',
          fields: [
            { name: 'message', label: 'Launch date, things you love on other sites, anything I should know', type: 'textarea', rows: 4, wide: true },
          ],
        },
      ],
      designUnsure: 'Not sure yet',
      honeypotLabel: 'Don’t fill this out if you’re human:',
      submitLabel: 'Send my details',
      sendingLabel: 'Sending…',
      successMessage: 'Got it, thank you! Once your photos are in, your private preview is about 3 days away. I’ll be in touch if anything’s missing.',
      errorMessage: 'Sorry, something went wrong. Please try again in a moment, or email me your details.',
      privacyNote: 'Your details are only used to build and look after your website.',
      privacyLabel: 'Privacy policy',
    },
  },

  footer: {
    note: 'Every design on this page is a live website. Click around.',
    copyrightName: 'Andrew Makris',
    copyrightSuffix: 'All rights reserved.',
    backToTopLabel: 'Back to top',
    privacyLabel: 'Privacy policy',
  },

  // --------------------------------------------------------------------------
  // PRIVACY POLICY — the /privacy/ page, linked under both forms and in the
  // footer. {email} is filled in from contact.email.
  // --------------------------------------------------------------------------
  privacy: {
    title: 'Privacy policy | Andrew Makris',
    heading: 'Privacy policy',
    updatedLabel: 'Last updated',
    updated: 'October 2, 2026',
    backLabel: 'Back to the main site',
    intro: 'I’m Andrew Makris, and I build websites for independent hairstylists. This policy explains what I collect through this website and how I use it.',
    sections: [
      { heading: 'What I collect', paragraphs: ['Through the enquiry form: your name, email, phone number if you give it, business name, Instagram or website, the design and plan you’re interested in, and your message.', 'Through the website checklist, if you become a client: your business details, bio, services and prices, reviews, social links, a link to your photos, and anything else you choose to share.'] },
      { heading: 'How I use it', paragraphs: ['To reply to you, quote for your website, and build and look after it. The details you send for your site are published on your website, because that’s what they’re for. I never sell your details or add you to marketing emails.'] },
      { heading: 'Where it’s kept', paragraphs: ['Form submissions are stored by my website host, Netlify, and sent to my email. Client website files, including the content you send, are kept in a private code repository on GitHub.'] },
      { heading: 'How long I keep it', paragraphs: ['Enquiries that don’t turn into a project are deleted within 12 months. Client details are kept while we work together and as long as I need them for my business records.'] },
      { heading: 'Cookies and analytics', paragraphs: ['This website doesn’t use cookies or any tracking.'] },
      { heading: 'Your choices', paragraphs: ['You can ask to see, correct or delete the details I hold about you by emailing {email}.'] },
      { heading: 'Children', paragraphs: ['This website isn’t aimed at children under 13, and I don’t knowingly collect their details.'] },
    ],
  },
};
