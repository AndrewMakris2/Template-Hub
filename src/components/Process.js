import { esc, sectionLabel } from './utils.js';

export function Process({ process }) {
  const steps = process.steps
    .map(
      (s, i) => `
      <li class="border-t-2 border-accent pt-6">
        <span class="grid h-9 w-9 place-items-center rounded-lg bg-accent text-sm font-semibold tabular-nums text-on-accent" aria-hidden="true">${i + 1}</span>
        <h3 class="mt-4 text-xl font-semibold tracking-tight text-ink">${esc(s.title)}</h3>
        <p class="mt-2 text-base leading-relaxed text-muted">${esc(s.text)}</p>
      </li>`,
    )
    .join('');

  return `
<section id="process" class="scroll-mt-16 bg-cream px-5 py-24 md:px-8 md:py-32" aria-labelledby="process-heading">
  <div class="mx-auto max-w-6xl">
    <div class="max-w-2xl">
      ${sectionLabel(process.label)}
      <h2 id="process-heading" class="mt-5 text-4xl font-semibold tracking-[-0.03em] text-ink md:text-5xl">${esc(process.heading)}</h2>
    </div>
    <ol class="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">${steps}</ol>
  </div>
</section>`;
}
