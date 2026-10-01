import { esc, sectionLabel } from './utils.js';

export function About({ about }) {
  const bio = about.bio.map((p) => `<p>${esc(p)}</p>`).join('');
  return `
<section id="about" class="scroll-mt-16 bg-cream px-5 py-24 md:px-8 md:py-32" aria-labelledby="about-heading">
  <div class="mx-auto grid max-w-5xl grid-cols-1 items-center gap-12 md:grid-cols-[14rem_1fr] md:gap-16">
    <div class="mx-auto grid h-40 w-40 place-items-center rounded-full bg-accent text-5xl font-semibold tracking-[-0.04em] text-on-accent shadow-xl shadow-accent/25 ring-8 ring-tint md:h-56 md:w-56 md:text-6xl" aria-hidden="true">${esc(about.initial)}</div>
    <div>
      ${sectionLabel(about.label)}
      <h2 id="about-heading" class="mt-5 text-4xl font-semibold tracking-[-0.03em] text-ink md:text-5xl">${esc(about.heading)}</h2>
      <div class="mt-6 space-y-5 text-lg leading-relaxed text-muted">${bio}</div>
      <p class="mt-8 text-base font-medium text-ink">&mdash; ${esc(about.signature)}</p>
    </div>
  </div>
</section>`;
}
