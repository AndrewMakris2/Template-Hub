import { esc, external, sectionLabel, browserFrame, phoneFrame, buttonClasses } from './utils.js';
import { icon } from './icons.js';

/** Design option label used in the enquiry form, e.g. "No. 06 — Noir". */
export const designOption = (d) => `No. ${String(d.id).padStart(2, '0')} — ${d.name}`;

/** The hub: every design with desktop + phone screenshots, style filters and links. */
export function Designs({ designs }) {
  const chip = 'rounded-full border border-on-ink/20 px-4 py-2 text-sm text-on-ink transition-colors hover:border-on-ink aria-pressed:border-on-ink aria-pressed:bg-on-ink aria-pressed:text-ink';
  const filters = [`<button type="button" class="${chip}" aria-pressed="true" data-filter="all">${esc(designs.filterAll)}</button>`]
    .concat(designs.filters.map((f) => `<button type="button" class="${chip}" aria-pressed="false" data-filter="${esc(f.toLowerCase())}">${esc(f)}</button>`))
    .join('');

  const cards = designs.items
    .map((d) => {
      const tags = d.tags.map((t) => `<li class="rounded-full bg-on-ink/10 px-3 py-1 text-xs text-on-ink/80">${esc(t)}</li>`).join('');
      return `
      <li class="group" data-design-card data-tags="${esc(d.tags.map((t) => t.toLowerCase()).join(' '))}">
        <a href="${esc(d.url)}" ${external} class="relative block transition-transform duration-500 group-hover:-translate-y-1.5 focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-on-ink" aria-label="${esc(`${designs.viewLabel}: ${d.name}`)}">
          ${browserFrame(d.desktop, d.url, { dark: true })}
          <div class="absolute -bottom-8 right-4 w-[21%] transition-transform duration-500 group-hover:-translate-y-2 md:right-6">${phoneFrame(d.mobile)}</div>
        </a>
        <div class="mt-12 pr-[26%]">
          <p class="text-xs uppercase tracking-[0.2em] text-on-ink/55">No. ${String(d.id).padStart(2, '0')} &middot; ${esc(d.style)}</p>
          <h3 class="mt-2 font-heading text-4xl text-on-ink md:text-5xl">${esc(d.name)}</h3>
          <p class="mt-3 text-sm leading-relaxed text-on-ink/70"><span class="text-on-ink">${esc(designs.bestForLabel)}:</span> ${esc(d.bestFor)}</p>
          <ul class="mt-4 flex flex-wrap gap-2">${tags}</ul>
        </div>
        <div class="mt-6 flex flex-wrap gap-3">
          <a href="#contact" class="${buttonClasses.light}" data-choose-design="${esc(designOption(d))}">${esc(designs.chooseLabel)}</a>
          <a href="${esc(d.url)}" ${external} class="${buttonClasses.ghostDark}">${esc(designs.viewLabel)} ${icon('arrowUpRight', 'h-4 w-4')}</a>
        </div>
      </li>`;
    })
    .join('');

  return `
<section id="designs" class="scroll-mt-16 bg-ink px-5 py-24 text-on-ink md:scroll-mt-20 md:px-8 md:py-32" aria-labelledby="designs-heading">
  <div class="mx-auto max-w-6xl">
    <div class="max-w-3xl">
      ${sectionLabel(designs.label, 'dark')}
      <h2 id="designs-heading" class="mt-6 font-heading text-5xl leading-[1.02] md:text-7xl">${esc(designs.heading)}</h2>
      <p class="mt-6 max-w-2xl text-lg leading-relaxed text-on-ink/70">${esc(designs.intro)}</p>
    </div>
    <div class="mt-12 flex flex-wrap items-center gap-2" role="group" aria-label="${esc(designs.filterLabel)}" data-filters>${filters}</div>
    <p class="mt-4 text-sm text-on-ink/55" aria-live="polite" data-filter-count data-template="${esc(designs.countTemplate)}">${esc(designs.countTemplate.replace('{count}', designs.items.length))}</p>
    <ul class="mt-12 grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2">${cards}</ul>
  </div>
</section>`;
}
