import { esc, sectionLabel } from './utils.js';
import { icon } from './icons.js';

export function Included({ included }) {
  const items = included.items
    .map(
      (it) => `
      <li class="bg-paper p-7">
        <span class="grid h-11 w-11 place-items-center rounded-lg bg-tint text-accent">${icon(it.icon, 'h-5 w-5')}</span>
        <h3 class="mt-5 text-lg font-semibold tracking-tight text-ink">${esc(it.title)}</h3>
        <p class="mt-2 text-sm leading-relaxed text-muted">${esc(it.text)}</p>
      </li>`,
    )
    .join('');

  return `
<section id="included" class="scroll-mt-16 bg-paper px-5 py-24 md:px-8 md:py-32" aria-labelledby="included-heading">
  <div class="mx-auto max-w-6xl">
    <div class="max-w-2xl">
      ${sectionLabel(included.label)}
      <h2 id="included-heading" class="mt-5 text-4xl font-semibold tracking-[-0.03em] text-ink md:text-5xl">${esc(included.heading)}</h2>
    </div>
    <ul class="mt-14 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">${items}</ul>
  </div>
</section>`;
}
