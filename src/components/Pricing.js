import { esc, sectionLabel, buttonClasses } from './utils.js';
import { icon } from './icons.js';

export function Pricing({ pricing }) {
  const plans = pricing.plans
    .map((p) => {
      const featured = p.featured;
      const features = p.features
        .map((f) => `<li class="flex gap-3"><span class="mt-0.5 shrink-0 text-accent">${icon('check', 'h-4 w-4')}</span>${esc(f)}</li>`)
        .join('');
      return `
      <li class="relative flex flex-col rounded-xl bg-paper p-8 ${featured ? 'border-2 border-accent shadow-xl shadow-accent/10' : 'border border-line'}">
        ${p.badge ? `<span class="absolute -top-3 left-8 rounded-md bg-accent px-2.5 py-1 text-xs font-medium text-on-accent">${esc(p.badge)}</span>` : ''}
        <h3 class="text-lg font-semibold tracking-tight text-ink">${esc(p.name)}</h3>
        <p class="mt-1 text-sm text-muted">${esc(p.description)}</p>
        <p class="mt-7 flex items-baseline gap-2"><span class="text-5xl font-semibold tracking-[-0.03em] text-ink">${esc(p.price)}</span><span class="text-sm text-muted">${esc(p.cadence)}</span></p>
        <ul class="mt-7 flex-1 space-y-3 border-t border-line pt-7 text-sm text-ink/85">${features}</ul>
        <a href="#contact" class="mt-9 w-full ${featured ? buttonClasses.primary : buttonClasses.ghost}" data-choose-plan="${esc(p.name)}">${esc(p.cta)}</a>
      </li>`;
    })
    .join('');

  return `
<section id="pricing" class="scroll-mt-16 bg-paper px-5 py-24 md:px-8 md:py-32" aria-labelledby="pricing-heading">
  <div class="mx-auto max-w-6xl">
    <div class="mx-auto max-w-2xl text-center">
      <div class="flex justify-center">${sectionLabel(pricing.label)}</div>
      <h2 id="pricing-heading" class="mt-5 text-4xl font-semibold tracking-[-0.03em] text-ink md:text-5xl">${esc(pricing.heading)}</h2>
      <p class="mt-4 text-lg text-muted">${esc(pricing.intro)}</p>
    </div>
    <ul class="mt-16 grid gap-6 lg:grid-cols-3 lg:items-stretch">${plans}</ul>
    ${pricing.note ? `<p class="mx-auto mt-10 max-w-2xl text-center text-sm text-muted">${esc(pricing.note)}</p>` : ''}
  </div>
</section>`;
}
