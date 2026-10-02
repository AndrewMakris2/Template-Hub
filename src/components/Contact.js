import { esc, sectionLabel, buttonClasses } from './utils.js';
import { icon } from './icons.js';
import { designOption } from './Designs.js';

const inputClasses =
  'mt-2 block w-full rounded-lg border border-line bg-paper px-4 py-3 text-base text-ink placeholder:text-muted/70 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/15';
const labelClasses = 'text-sm font-medium text-ink';

/** Enquiry form (Netlify Forms) on a light grey panel. Design/plan selects are pre-filled by the "Start with…" buttons. */
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
    .map((p) => `<li class="flex items-center gap-3"><span class="grid h-6 w-6 place-items-center rounded-full bg-white/15">${icon('check', 'h-3.5 w-3.5')}</span>${esc(p)}</li>`)
    .join('');
  const field = (id, name, type, def, extra = '') =>
    `<div><label for="${id}" class="${labelClasses}">${esc(def.label)}</label><input id="${id}" name="${name}" type="${type}" class="${inputClasses}" placeholder="${esc(def.placeholder || '')}" ${extra} /></div>`;

  return `
<section id="contact" class="scroll-mt-16 px-5 pb-20 pt-24 md:px-8 md:pb-28 md:pt-32" aria-labelledby="contact-heading">
  <div class="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-[1fr_1.25fr] lg:gap-16">
    <div class="lg:pt-4">
      ${sectionLabel(contact.label, 'dark')}
      <h2 id="contact-heading" class="mt-5 text-4xl font-semibold tracking-[-0.03em] md:text-5xl">${esc(contact.heading)}</h2>
      <p class="mt-5 text-lg leading-relaxed text-on-ink/75">${esc(contact.intro)}</p>
      <ul class="mt-8 space-y-3 text-base">${promises}</ul>
      <p class="mt-8 text-base text-on-ink/75">${esc(contact.emailLabel)} <a href="mailto:${esc(contact.email)}" class="font-medium text-on-ink underline underline-offset-4">${esc(contact.email)}</a></p>
    </div>

    <form name="${esc(form.name)}" method="POST" action="/" data-netlify="true" netlify-honeypot="bot-field" class="grid gap-5 self-start rounded-xl bg-paper p-6 text-ink shadow-2xl shadow-black/30 sm:grid-cols-2 md:p-8" data-contact-form>
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
        <button type="submit" class="w-full ${buttonClasses.primary} disabled:opacity-60" data-submit data-label="${esc(form.submitLabel)}" data-sending-label="${esc(form.sendingLabel)}">${esc(form.submitLabel)} ${icon('arrowRight', 'h-4 w-4')}</button>
        <p class="mt-4 hidden rounded-lg bg-tint p-4 text-base text-ink" role="status" data-form-success>${esc(form.successMessage)}</p>
        <p class="mt-4 hidden rounded-lg bg-cream p-4 text-base text-ink" role="alert" data-form-error>${esc(form.errorMessage)}</p>
        <p class="mt-4 text-sm text-muted">${esc(form.privacyNote)} <a href="/privacy/" class="underline underline-offset-4">${esc(form.privacyLabel)}</a></p>
      </div>
    </form>
  </div>
</section>`;
}
