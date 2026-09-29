import { esc, sectionLabel, browserFrame, phoneFrame, buttonClasses } from './utils.js';
import { icon } from './icons.js';

/** Centered pitch over a fanned collage of real design screenshots and a phone. */
export function Hero({ hero, designs }) {
  const byId = (id) => designs.items.find((d) => d.id === id);
  const [left, center, right] = hero.collage.map(byId);
  const phone = byId(hero.phone);
  const highlights = hero.highlights
    .map((h) => `<li class="flex items-center gap-2"><span class="grid h-5 w-5 place-items-center rounded-full bg-tint text-accent">${icon('check', 'h-3 w-3')}</span>${esc(h)}</li>`)
    .join('');

  return `
<section id="top" class="relative overflow-hidden bg-paper px-5 pb-24 pt-14 md:px-8 md:pt-20" aria-labelledby="hero-heading">
  <div class="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-tint opacity-70 blur-3xl" aria-hidden="true"></div>
  <div class="relative mx-auto max-w-5xl text-center">
    ${sectionLabel(hero.eyebrow)}
    <h1 id="hero-heading" class="mx-auto mt-7 max-w-4xl font-heading text-[clamp(3rem,9vw,6.5rem)] leading-[0.98] tracking-tight text-ink">${esc(hero.heading)} <em class="text-accent">${esc(hero.headingAccent)}</em></h1>
    <p class="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">${esc(hero.intro)}</p>
    <div class="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
      <a href="${esc(hero.primaryCta.href)}" class="${buttonClasses.primary}">${esc(hero.primaryCta.label)} ${icon('arrowRight', 'h-4 w-4')}</a>
      <a href="${esc(hero.secondaryCta.href)}" class="${buttonClasses.ghost}">${esc(hero.secondaryCta.label)}</a>
    </div>
    <ul class="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted">${highlights}</ul>
  </div>

  <div class="relative mx-auto mt-16 max-w-6xl pb-10 md:aspect-[16/8] md:pb-0" aria-hidden="true">
    ${left ? `<div class="absolute left-0 top-12 hidden w-[44%] -rotate-6 md:block">${browserFrame(left.desktop, left.url)}</div>` : ''}
    ${right ? `<div class="absolute right-0 top-12 hidden w-[44%] rotate-6 md:block">${browserFrame(right.desktop, right.url)}</div>` : ''}
    ${center ? `<div class="relative z-10 md:absolute md:left-1/2 md:top-0 md:w-[56%] md:-translate-x-1/2">${browserFrame(center.desktop, center.url, { eager: true })}</div>` : ''}
    ${phone ? `<div class="absolute -bottom-2 right-3 z-20 w-[28%] md:bottom-0 md:right-[17%] md:w-[15%]">${phoneFrame(phone.mobile, { eager: true })}</div>` : ''}
  </div>
</section>`;
}
