import { esc, sectionLabel, buttonClasses } from './utils.js';
import { icon } from './icons.js';

export function Pricing({ pricing }) {
  const plans = pricing.plans
    .map((p) => {
      const dark = p.featured;
      const features = p.features
        .map((f) => `<li class="flex gap-3"><span class="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${dark ? 'bg-on-ink/15 text-on-ink' : 'bg-tint text-accent'}">${icon('check', 'h-3 w-3')}</span>${esc(f)}</li>`)
        .join('');
      return `
      <li class="relative flex flex-col rounded-[2rem] p-8 md:p-10 ${dark ? 'bg-ink text-on-ink shadow-2xl shadow-accent/20' : 'border border-line bg-paper text-ink'}">
        ${p.badge ? `<span class="absolute -top-3.5 left-8 rounded-full bg-accent px-4 py-1.5 text-xs font-medium text-on-accent">${esc(p.badge)}</span>` : ''}
        <h3 class="font-heading text-3xl">${esc(p.name)}</h3>
        <p class="mt-2 text-sm ${dark ? 'text-on-ink/70' : 'text-muted'}">${esc(p.description)}</p>
        <p class="mt-8 flex items-baseline gap-2"><span class="font-heading text-6xl leading-none">${esc(p.price)}</span><span class="text-sm ${dark ? 'text-on-ink/70' : 'text-muted'}">${esc(p.cadence)}</span></p>
        <ul class="mt-8 flex-1 space-y-3 text-sm ${dark ? 'text-on-ink/85' : 'text-ink/85'}">${features}</ul>
        <a href="#contact" class="mt-10 w-full ${dark ? buttonClasses.light : buttonClasses.dark}" data-choose-plan="${esc(p.name)}">${esc(p.cta)}</a>
      </li>`;
    })
    .join('');

  return `
<section id="pricing" class="scroll-mt-16 bg-paper px-5 py-24 md:scroll-mt-20 md:px-8 md:py-32" aria-labelledby="pricing-heading">
  <div class="mx-auto max-w-6xl">
    <div class="mx-auto max-w-2xl text-center">
      ${sectionLabel(pricing.label)}
      <h2 id="pricing-heading" class="mt-6 font-heading text-5xl text-ink md:text-6xl">${esc(pricing.heading)}</h2>
      <p class="mt-5 text-lg text-muted">${esc(pricing.intro)}</p>
    </div>
    <ul class="mt-16 grid gap-6 lg:grid-cols-3 lg:items-stretch">${plans}</ul>
    ${pricing.note ? `<p class="mx-auto mt-10 max-w-2xl text-center text-sm text-muted">${esc(pricing.note)}</p>` : ''}
  </div>
</section>`;
}
