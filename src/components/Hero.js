import { esc, sectionLabel, browserFrame, phoneFrame, buttonClasses } from './utils.js';
import { icon } from './icons.js';

/** Centred pitch over a flat, layered row of real design screenshots and a phone. */
export function Hero({ hero, designs }) {
  const byId = (id) => designs.items.find((d) => d.id === id);
  const [left, center, right] = hero.collage.map(byId);
  const phone = byId(hero.phone);
  const highlights = hero.highlights
    .map((h) => `<li class="flex items-center gap-2"><span class="text-accent">${icon('check', 'h-4 w-4')}</span>${esc(h)}</li>`)
    .join('');

  return `
<section id="top" class="overflow-hidden bg-paper px-5 pb-24 pt-16 md:px-8 md:pt-24" aria-labelledby="hero-heading">
  <div class="mx-auto max-w-4xl text-center">
    <div class="flex justify-center">${sectionLabel(hero.eyebrow)}</div>
    <h1 id="hero-heading" class="mx-auto mt-6 max-w-3xl text-[clamp(2.6rem,7vw,4.75rem)] font-semibold leading-[1.04] tracking-[-0.035em] text-ink">${esc(hero.heading)} <span class="text-accent">${esc(hero.headingAccent)}</span></h1>
    <p class="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">${esc(hero.intro)}</p>
    <div class="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
      <a href="${esc(hero.primaryCta.href)}" class="${buttonClasses.primary}">${esc(hero.primaryCta.label)} ${icon('arrowRight', 'h-4 w-4')}</a>
      <a href="${esc(hero.secondaryCta.href)}" class="${buttonClasses.ghost}">${esc(hero.secondaryCta.label)}</a>
    </div>
    <ul class="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted">${highlights}</ul>
  </div>

  <div class="relative mx-auto mt-16 max-w-6xl pb-10 md:aspect-[16/7] md:pb-0" aria-hidden="true">
    ${left ? `<div class="absolute left-0 top-10 hidden w-[42%] opacity-90 md:block">${browserFrame(left.desktop, left.url)}</div>` : ''}
    ${right ? `<div class="absolute right-0 top-10 hidden w-[42%] opacity-90 md:block">${browserFrame(right.desktop, right.url)}</div>` : ''}
    ${center ? `<div class="relative z-10 md:absolute md:left-1/2 md:top-0 md:w-[54%] md:-translate-x-1/2">${browserFrame(center.desktop, center.url, { eager: true })}</div>` : ''}
    ${phone ? `<div class="absolute -bottom-2 right-3 z-20 w-[26%] md:-bottom-4 md:right-[19%] md:w-[13%]">${phoneFrame(phone.mobile, { eager: true })}</div>` : ''}
  </div>
</section>`;
}
