import { esc } from './utils.js';

/** The /privacy/ page: navy header like the checklist page, then a plain, readable policy. */
export function Privacy({ brand, contact, privacy, footer }) {
  const fill = (text) => String(text).replace(/\{email\}/g, contact.email);
  const sections = privacy.sections
    .map(
      (s) => `
    <section class="mt-10">
      <h2 class="text-xl font-semibold tracking-[-0.02em] text-ink">${esc(s.heading)}</h2>
      ${s.paragraphs.map((p) => `<p class="mt-3 text-base leading-relaxed text-muted">${esc(fill(p))}</p>`).join('')}
    </section>`,
    )
    .join('');

  return `
<header class="bg-navy text-on-ink">
  <div class="mx-auto flex h-16 max-w-3xl items-center justify-between gap-6 px-5 md:px-8">
    <a href="/" class="flex items-center gap-2.5 text-[1.05rem] font-semibold tracking-tight"><span class="h-2.5 w-2.5 bg-sky" aria-hidden="true"></span>${esc(brand.name)}</a>
    <a href="/" class="text-sm text-on-ink/70 transition-colors hover:text-on-ink">${esc(privacy.backLabel)}</a>
  </div>
</header>
<main id="main" class="bg-paper px-5 py-14 md:px-8 md:py-20">
  <article class="mx-auto max-w-3xl">
    <h1 class="text-4xl font-semibold tracking-[-0.03em] text-ink md:text-5xl">${esc(privacy.heading)}</h1>
    <p class="mt-3 text-sm text-muted">${esc(privacy.updatedLabel)} ${esc(privacy.updated)}</p>
    <p class="mt-8 text-lg leading-relaxed text-ink">${esc(privacy.intro)}</p>
    ${sections}
    <p class="mt-12 border-t border-line pt-6 text-sm text-muted">&copy; ${new Date().getFullYear()} ${esc(footer.copyrightName)}. ${esc(contact.email)}</p>
  </article>
</main>`;
}
