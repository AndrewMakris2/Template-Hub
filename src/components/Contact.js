import { esc, sectionLabel, buttonClasses } from './utils.js';
import { icon } from './icons.js';
import { designOption } from './Designs.js';

const inputClasses =
  'mt-2 block w-full rounded-2xl border border-line bg-paper px-4 py-3 text-base text-ink placeholder:text-muted/70 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/15';
const labelClasses = 'text-sm font-medium text-ink';

/** Enquiry form (Netlify Forms) on a plum panel. Design/plan selects are pre-filled by the "Start with…" buttons. */
export function Contact({ contact, designs, pricing }) {
  const { form } = contact;
  const f = form.fields;
  const designOptions = [`<option value="${esc(f.design.unsure)}">${esc(f.design.unsure)}</option>`]
    .concat(designs.items.map((d) => `<option value="${esc(designOption(d))}">${esc(designOption(d))}</option>`))
    .join('');
  const planOptions = [`<option value="${esc(f.plan.unsure)}">${esc(f.plan.unsure)}</option>`]
    .concat(pricing.plans.map((p) => `<option value="${esc(p.name)}">${esc(`${p.name} (${p.price} ${p.cadence})`)}</option>`))
    .join('');
  const promises = contact.promises
    .map((p) => `<li class="flex items-center gap-3"><span class="grid h-6 w-6 place-items-center rounded-full bg-on-ink/15">${icon('check', 'h-3.5 w-3.5')}</span>${esc(p)}</li>`)
    .join('');
  const field = (id, name, type, def, extra = '') =>
    `<div><label for="${id}" class="${labelClasses}">${esc(def.label)}</label><input id="${id}" name="${name}" type="${type}" class="${inputClasses}" placeholder="${esc(def.placeholder || '')}" ${extra} /></div>`;

  return `
<section id="contact" class="scroll-mt-16 bg-paper px-5 pb-24 md:scroll-mt-20 md:px-8 md:pb-32" aria-labelledby="contact-heading">
  <div class="mx-auto grid max-w-6xl grid-cols-1 gap-12 rounded-[2.5rem] bg-accent p-7 text-on-accent md:p-14 lg:grid-cols-[1fr_1.25fr] lg:gap-16">
    <div class="lg:pt-4">
      ${sectionLabel(contact.label, 'dark')}
      <h2 id="contact-heading" class="mt-6 font-heading text-5xl leading-[1.02] md:text-7xl">${esc(contact.heading)}</h2>
      <p class="mt-6 text-lg leading-relaxed text-on-accent/85">${esc(contact.intro)}</p>
      <ul class="mt-10 space-y-3 text-base">${promises}</ul>
    </div>

    <form name="${esc(form.name)}" method="POST" action="/" data-netlify="true" netlify-honeypot="bot-field" class="grid gap-5 self-start rounded-[2rem] bg-paper p-6 text-ink sm:grid-cols-2 md:p-8" data-contact-form>
      <input type="hidden" name="form-name" value="${esc(form.name)}" />
      <p class="hidden" aria-hidden="true"><label>${esc(form.honeypotLabel)} <input name="bot-field" tabindex="-1" autocomplete="off" /></label></p>
      ${field('inq-name', 'name', 'text', f.name, 'autocomplete="name" required')}
      ${field('inq-email', 'email', 'email', f.email, 'autocomplete="email" required')}
      ${field('inq-business', 'business', 'text', f.business, 'autocomplete="organization"')}
      ${field('inq-phone', 'phone', 'tel', f.phone, 'autocomplete="tel"')}
      <div class="sm:col-span-2">${field('inq-link', 'link', 'text', f.link)}</div>
      <div><label for="inq-design" class="${labelClasses}">${esc(f.design.label)}</label><select id="inq-design" name="design" class="${inputClasses}" data-design-select>${designOptions}</select></div>
      <div><label for="inq-plan" class="${labelClasses}">${esc(f.plan.label)}</label><select id="inq-plan" name="plan" class="${inputClasses}" data-plan-select>${planOptions}</select></div>
      <div class="sm:col-span-2"><label for="inq-message" class="${labelClasses}">${esc(f.message.label)}</label><textarea id="inq-message" name="message" rows="4" class="${inputClasses} resize-y" placeholder="${esc(f.message.placeholder || '')}"></textarea></div>
      <div class="sm:col-span-2">
        <button type="submit" class="w-full ${buttonClasses.dark} disabled:opacity-60" data-submit data-label="${esc(form.submitLabel)}" data-sending-label="${esc(form.sendingLabel)}">${esc(form.submitLabel)} ${icon('arrowRight', 'h-4 w-4')}</button>
        <p class="mt-4 hidden rounded-2xl bg-tint p-4 text-base text-ink" role="status" data-form-success>${esc(form.successMessage)}</p>
        <p class="mt-4 hidden rounded-2xl bg-cream p-4 text-base text-ink" role="alert" data-form-error>${esc(form.errorMessage)}</p>
      </div>
    </form>
  </div>
</section>`;
}
