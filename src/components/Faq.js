import { esc, sectionLabel } from './utils.js';
import { icon } from './icons.js';

export function Faq({ faq }) {
  const items = faq.items
    .map(
      (it) => `
      <li class="border-b border-line">
        <details class="group">
          <summary class="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left [&::-webkit-details-marker]:hidden">
            <h3 class="font-heading text-2xl text-ink md:text-[1.7rem]">${esc(it.q)}</h3>
            <span class="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-tint text-accent transition-transform duration-300 group-open:rotate-45" aria-hidden="true">${icon('plus', 'h-4 w-4')}</span>
          </summary>
          <p class="max-w-2xl pb-7 text-base leading-relaxed text-muted">${esc(it.a)}</p>
        </details>
      </li>`,
    )
    .join('');

  return `
<section id="faq" class="scroll-mt-16 bg-paper px-5 py-24 md:scroll-mt-20 md:px-8 md:py-32" aria-labelledby="faq-heading">
  <div class="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
    <div>
      ${sectionLabel(faq.label)}
      <h2 id="faq-heading" class="mt-6 font-heading text-5xl text-ink md:text-6xl">${esc(faq.heading)}</h2>
    </div>
    <ul class="border-t border-line">${items}</ul>
  </div>
</section>`;
}
