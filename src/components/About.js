import { esc, sectionLabel } from './utils.js';

export function About({ about }) {
  const bio = about.bio.map((p) => `<p>${esc(p)}</p>`).join('');
  return `
<section id="about" class="scroll-mt-16 bg-cream px-5 py-24 md:scroll-mt-20 md:px-8 md:py-32" aria-labelledby="about-heading">
  <div class="mx-auto grid max-w-5xl grid-cols-1 items-center gap-14 md:grid-cols-[18rem_1fr] md:gap-20">
    <div class="relative mx-auto h-56 w-56 md:h-72 md:w-72">
      <div class="absolute inset-0 translate-x-4 translate-y-4 rounded-full border border-accent/40" aria-hidden="true"></div>
      <div class="relative grid h-full w-full place-items-center rounded-full bg-accent font-heading text-[7rem] italic leading-none text-on-accent md:text-[9rem]" aria-hidden="true">${esc(about.initial)}</div>
    </div>
    <div>
      ${sectionLabel(about.label)}
      <h2 id="about-heading" class="mt-6 font-heading text-5xl text-ink md:text-6xl">${esc(about.heading)}</h2>
      <div class="mt-6 space-y-5 text-lg leading-relaxed text-muted">${bio}</div>
      <p class="mt-8 font-heading text-4xl italic text-accent">${esc(about.signature)}</p>
    </div>
  </div>
</section>`;
}
