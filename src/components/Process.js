import { esc, sectionLabel } from './utils.js';

export function Process({ process }) {
  const steps = process.steps
    .map(
      (s, i) => `
      <li class="relative">
        <span class="relative z-10 grid h-14 w-14 place-items-center rounded-full bg-accent font-heading text-2xl italic text-on-accent" aria-hidden="true">${i + 1}</span>
        <h3 class="mt-6 font-heading text-3xl text-ink">${esc(s.title)}</h3>
        <p class="mt-3 text-base leading-relaxed text-muted">${esc(s.text)}</p>
      </li>`,
    )
    .join('');

  return `
<section id="process" class="scroll-mt-16 bg-cream px-5 py-24 md:scroll-mt-20 md:px-8 md:py-32" aria-labelledby="process-heading">
  <div class="mx-auto max-w-6xl">
    <div class="max-w-3xl">
      ${sectionLabel(process.label)}
      <h2 id="process-heading" class="mt-6 font-heading text-5xl leading-[1.05] text-ink md:text-6xl">${esc(process.heading)}</h2>
    </div>
    <div class="relative mt-16">
      <div class="absolute left-7 right-7 top-7 hidden h-px bg-accent/25 lg:block" aria-hidden="true"></div>
      <ol class="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">${steps}</ol>
    </div>
  </div>
</section>`;
}
