# New client: from "yes" to live site

Every client site is its own copy of one of the 10 templates, in its own
GitHub repo and Netlify project. Plan on about an hour of hands-on work once
you have the client's details and photos.

---

## 1. They've paid and picked a design

You need: their design (1–10), their plan (Launch, Signature, Care plan) and
their email.

## 2. Send them the checklist

Send this link:

**https://andrew-makris.netlify.app/checklist/**

It's one form covering everything: business details, booking link, bio,
services, reviews, socials, a photo link and the Signature extras. Answers
arrive by email (as an **intake** form submission) and are also in Netlify →
andrew-makris → Forms. The page isn't linked from your site and is hidden
from Google.

Photos come by email or a shared Drive / Dropbox / iCloud link.

## 3. Create their site

From this repo (needs the GitHub CLI, signed in):

```bash
tools/new-client.sh 4 jane-doe-hair
```

That copies Template 4 into `../jane-doe-hair`, sets the site address to
`https://jane-doe-hair.netlify.app`, and creates and pushes a private GitHub repo
`jane-doe-hair`. Use a short slug of their business name; it becomes their
free web address.

## 4. Fill in their content

Everything is in `src/config/content.js`. Map the checklist answers:

| Checklist answer | content.js |
| --- | --- |
| Business name, tagline, city | `business.name`, `business.tagline`, `business.location` |
| Booking link | `booking.url` |
| About you, what you're known for | `about` (tidy the bio up and send it back to check) |
| Services and prices | `services.items` |
| Reviews | `testimonials.items` |
| Phone, email and address for the site | `contact.phone`, `contact.email`, `contact.address` |
| Opening hours | `footer.hours` **and** `localBusiness.hours` |
| Studio address | `contact.address` **and** `localBusiness.address` |
| Instagram, TikTok, others | `social` (remove platforms they don't use) |
| Footer name | `footer.copyrightName` |

Also:

- **Page title and description:** `site.title` and `site.description`. Write
  them like a Google result: name, what they do, where.
- **Photos:** put them in `public/images/` and point each `src` at
  `/images/...`. Every demo photo is a placeholder and must be replaced. Write
  real `alt` text. See the template README for sizes.
- **Share image:** `site.ogImage`, a 1200×630 photo, as a full URL
  (`https://jane-doe-hair.netlify.app/images/og.jpg`).
- **Signature only:**
  - Brand colours and fonts go in `src/config/theme.js`. Keep text readable
    against its background.
  - Their extra section: set `enabled: true` on `events`, `policies` or `faq`,
    fill it in, and add it to `nav.links`, e.g. `{ label: 'FAQ', href: '#faq' }`.

- **Privacy page:** `/privacy/` is built in and fills in their name, email
  and address. Set `privacy.updated` to the launch date and ask them to read
  it. The script has already removed the demo banner.

Check nothing is left over, then preview:

```bash
grep -rn TODO src/config
npm install
npm run dev
```

To check it on your phone, run `npm run dev -- --host` and open the Network
address it prints (same Wi-Fi).

## 5. Push it

```bash
git add -A
git commit -m "Add client content"
git push
```

## 6. Connect it to Netlify (once per client, about 3 minutes)

In app.netlify.com:

1. **Add new project → Import an existing project → GitHub →** pick the repo
   → **Deploy**. Build settings come from `netlify.toml` automatically.
2. **Project configuration → General → Project details → Change project
   name** → the slug (e.g. `jane-doe-hair`), so the address matches.
3. **Project configuration → General → Powered by Netlify badge → Configure**
   → untick → **Save**.
4. **Forms → Submission notifications → Add notification → Email
   notification** → the client's email. Subject: "New message from your
   website".
5. Send a test message through the site's contact form and check it arrives.

From then on, every `git push` updates the live site within a minute.

## 7. Preview and revisions

Send them the `.netlify.app` link to check on their phone and computer.
Launch includes one round of revisions, Signature three.

## 8. Their domain (Signature)

1. They buy the domain in their own name (Namecheap, Squarespace Domains,
   GoDaddy…).
2. Netlify → the project → **Domain management → Add a domain** → follow the
   DNS instructions at their registrar. HTTPS is set up automatically.
3. Update `site.url` (and `site.ogImage`) in `content.js` to the new domain
   and push.

## 9. Care plan

- **Analytics:** add the site in Umami (umami.is; free for up to 3 sites, then
  a paid plan) or Google Analytics 4 (free). Paste the ID into `analytics` in
  `content.js` and push.
- **Monthly report:** visits, `book_tap` (Book button taps), `call_tap` and
  `email_tap` from analytics, plus the number of form messages from Netlify →
  Forms. Send them a two-line summary.
- **Updates:** edit `content.js`, push, done.

## 10. After launch

- Check their Google details with the Rich Results Test:
  https://search.google.com/test/rich-results
- Suggest a Google Business Profile if they don't have one. It's the biggest
  factor in "hairstylist near me" searches (and an easy add-on to charge for).
- Ask for a review you can put on your own site.
