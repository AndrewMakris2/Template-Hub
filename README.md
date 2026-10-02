# Andrew Makris — sales site & design hub

The website you send to hairstylists: who you are, what you offer, pricing, an
FAQ, an enquiry form, and a **hub of all 10 website designs** with live links,
desktop and phone screenshots, and style filters.

Built like the templates: plain HTML + vanilla JS, Tailwind CSS v4 and Vite,
rendered at build time and deployed to Netlify.

## Run it locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
```

## Edit the words, prices and designs

Everything written on the site is in **`src/config/content.js`**:

- `brand`: the business name shown in the nav, footer and page title
- `hero`: headline, intro and which designs appear in the hero collage
- `designs.items`: the 10 designs (name, style, tags, "best for", live URL, screenshots)
- `pricing.plans`: packages and prices
- `about`: your name, photo and bio
- `checklist`: the client checklist page (see below)
- `faq`, `process`, `included`, `contact`: everything else

Colours and fonts are in **`src/config/theme.js`**.

## Enquiry form

The form is a Netlify Form named **`inquiry`**. Its dropdowns are pre-filled
when a visitor clicks **Start with this design** or a pricing button. You can
also link straight to a design with `?design=6#contact`.

Enquiries are emailed to amakris03@gmail.com. To change the address: Netlify
dashboard → **Forms → Submission notifications**.

## Client checklist page

**`/checklist/`** (https://andrew-makris.netlify.app/checklist/) is the page you
send a client once they've booked: what photos to send, plus one form for
everything else. It isn't linked from the main page and is hidden from search
engines. Submissions arrive as the **intake** form, emailed like enquiries.
The wording and form fields live in the `checklist` block of `content.js`.

## Privacy page

**`/privacy/`** explains what the enquiry and checklist forms collect and how
it's used; both forms and the footer link to it. The wording is the `privacy`
block in `content.js`, and your contact email is `contact.email`.

## New clients

Step-by-step guide: **[NEW-CLIENT.md](NEW-CLIENT.md)**. To start a client's
site from a template:

```bash
tools/new-client.sh 4 jane-doe-hair
```

## Refresh the design screenshots

After changing a template, regenerate its screenshots (needs Google Chrome):

```bash
node tools/screenshots.mjs ./shots https://hairstylist-template-1.netlify.app/ https://hairstylist-template-2.netlify.app/
```

This saves `t1-desktop.png`, `t1-mobile.png`, … in the URL order given, with the
Netlify badge hidden. Convert them to WebP into `public/images/designs/`:

```bash
cwebp -q 78 -resize 1200 0 shots/t1-desktop.png -o public/images/designs/design-1-desktop.webp
cwebp -q 80 -resize 520 0 shots/t1-mobile.png -o public/images/designs/design-1-mobile.webp
```

`public/images/og.jpg` is the link-preview image (1200×630) shown when the URL
is shared in texts and DMs.

## Deploy

The site is the Netlify project **andrew-makris**
(https://andrew-makris.netlify.app). Link this GitHub repo in Netlify
(**Project configuration → Build & deploy → Link repository**) to deploy on
every push. Build settings come from `netlify.toml`.
