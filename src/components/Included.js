import { esc, sectionLabel } from './utils.js';
import { icon } from './icons.js';

export function Included({ included }) {
  const items = included.items
    .map(
      (it) => `
      <li class="rounded-3xl border border-line bg-paper p-7 transition-colors hover:border-accent/30">
        <span class="grid h-12 w-12 place-items-center rounded-2xl bg-tint text-accent">${icon(it.icon, 'h-6 w-6')}</span>
        <h3 class="mt-6 font-heading text-2xl leading-tight text-ink">${esc(it.title)}</h3>
        <p class="mt-3 text-sm leading-relaxed text-muted">${esc(it.text)}</p>
      </li>`,
    )
    .join('');

  return `
<section id="included" class="scroll-mt-16 bg-paper px-5 py-24 md:scroll-mt-20 md:px-8 md:py-32" aria-labelledby="included-heading">
  <div class="mx-auto max-w-6xl">
    <div class="mx-auto max-w-3xl text-center">
      ${sectionLabel(included.label)}
      <h2 id="included-heading" class="mt-6 font-heading text-5xl leading-[1.05] text-ink md:text-6xl">${esc(included.heading)}</h2>
    </div>
    <ul class="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">${items}</ul>
  </div>
</section>`;
}
