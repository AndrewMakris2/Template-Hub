import { esc, sectionLabel, buttonClasses } from './utils.js';
import { icon } from './icons.js';
import { designOption } from './Designs.js';

const inputClasses =
  'mt-2 block w-full rounded-lg border border-line bg-paper px-4 py-3 text-base text-ink placeholder:text-muted/70 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/15';
const labelClasses = 'text-sm font-medium text-ink';

/** One form control from the checklist config (text, textarea, select, or the design/plan pickers). */
function control(f, { designs, pricing, unsure }) {
  const id = `intake-${f.name}`;
  const req = f.required ? ' required' : '';
  const ph = f.placeholder ? ` placeholder="${esc(f.placeholder)}"` : '';
  const options = (list) => list.map((o) => `<option value="${esc(o)}">${esc(o)}</option>`).join('');
  let input;
  if (f.type === 'textarea') {
    input = `<textarea id="${id}" name="${esc(f.name)}" rows="${f.rows || 4}" class="${inputClasses} resize-y"${ph}${req}></textarea>`;
  } else if (f.type === 'design') {
    input = `<select id="${id}" name="${esc(f.name)}" class="${inputClasses}">${options([unsure, ...designs.items.map(designOption)])}</select>`;
  } else if (f.type === 'plan') {
    input = `<select id="${id}" name="${esc(f.name)}" class="${inputClasses}">${options([unsure, ...pricing.plans.map((p) => p.name)])}</select>`;
  } else if (f.type === 'select') {
    input = `<select id="${id}" name="${esc(f.name)}" class="${inputClasses}">${options(f.options)}</select>`;
  } else {
    const auto = f.autocomplete ? ` autocomplete="${esc(f.autocomplete)}"` : '';
    input = `<input id="${id}" name="${esc(f.name)}" type="${esc(f.type)}" class="${inputClasses}"${ph}${auto}${req} />`;
  }
  const hint = f.hint ? `<p class="mt-2 text-sm text-muted">${esc(f.hint)}</p>` : '';
  return `<div class="${f.wide ? 'sm:col-span-2' : ''}"><label for="${id}" class="${labelClasses}">${esc(f.label)}${f.required ? ' <span class="text-muted">(required)</span>' : ''}</label>${input}${hint}</div>`;
}

/** The /checklist/ page body: what to send, then one grouped intake form (Netlify Forms). */
export function Checklist({ brand, checklist, designs, pricing }) {
  const { form, photos } = checklist;
  const ctx = { designs, pricing, unsure: form.designUnsure };
  const photoItems = photos.items
    .map((p) => `<li class="flex items-start gap-3"><span class="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-white/15">${icon('check', 'h-3.5 w-3.5')}</span>${esc(p)}</li>`)
    .join('');
  const groups = form.groups
    .map(
      (g, i) => `
      <fieldset class="rounded-xl border border-line bg-paper p-6 md:p-8">
        <legend class="sr-only">${esc(g.heading)}</legend>
        <h2 class="flex items-baseline gap-3 text-xl font-semibold tracking-[-0.02em] text-ink" aria-hidden="true"><span class="text-sm font-medium tabular-nums text-muted">${String(i + 1).padStart(2, '0')}</span>${esc(g.heading)}</h2>
        ${g.note ? `<p class="mt-1 text-sm text-muted">${esc(g.note)}</p>` : ''}
        <div class="mt-6 grid gap-5 sm:grid-cols-2">${g.fields.map((f) => control(f, ctx)).join('')}</div>
      </fieldset>`,
    )
    .join('');

  return `
<header class="bg-navy text-on-ink">
  <div class="mx-auto flex h-16 max-w-3xl items-center justify-between gap-6 px-5 md:px-8">
    <a href="/" class="flex items-center gap-2.5 text-[1.05rem] font-semibold tracking-tight"><span class="h-2.5 w-2.5 bg-sky" aria-hidden="true"></span>${esc(brand.name)}</a>
    <a href="/" class="text-sm text-on-ink/70 transition-colors hover:text-on-ink">${esc(checklist.backLabel)}</a>
  </div>
</header>
<main id="main" class="bg-cream px-5 pb-24 md:px-8">
  <div class="mx-auto max-w-3xl">
    <div class="pb-10 pt-14 md:pt-20">
      ${sectionLabel(checklist.label)}
      <h1 class="mt-5 text-4xl font-semibold tracking-[-0.03em] text-ink md:text-5xl">${esc(checklist.heading)}</h1>
      <p class="mt-5 text-lg leading-relaxed text-muted">${esc(checklist.intro)}</p>
    </div>

    <section class="rounded-xl bg-navy p-6 text-on-ink md:p-8" aria-labelledby="photos-heading">
      <h2 id="photos-heading" class="text-xl font-semibold tracking-[-0.02em]">${esc(photos.heading)}</h2>
      <p class="mt-2 text-base leading-relaxed text-on-ink/75">${esc(photos.text)}</p>
      <ul class="mt-6 space-y-3 text-base">${photoItems}</ul>
    </section>

    <form name="${esc(form.name)}" method="POST" action="/" data-netlify="true" netlify-honeypot="bot-field" class="mt-6 space-y-6" data-contact-form>
      <input type="hidden" name="form-name" value="${esc(form.name)}" />
      <p class="hidden" aria-hidden="true"><label>${esc(form.honeypotLabel)} <input name="bot-field" tabindex="-1" autocomplete="off" /></label></p>
      ${groups}
      <div>
        <button type="submit" class="w-full ${buttonClasses.primary} !py-4 disabled:opacity-60" data-submit data-sending-label="${esc(form.sendingLabel)}">${esc(form.submitLabel)} ${icon('arrowRight', 'h-4 w-4')}</button>
        <p class="mt-4 hidden rounded-lg bg-tint p-4 text-base text-ink" role="status" data-form-success>${esc(form.successMessage)}</p>
        <p class="mt-4 hidden rounded-lg bg-paper p-4 text-base text-ink" role="alert" data-form-error>${esc(form.errorMessage)}</p>
        <p class="mt-4 text-sm text-muted">${esc(form.privacyNote)} <a href="/privacy/" class="underline underline-offset-4">${esc(form.privacyLabel)}</a></p>
      </div>
    </form>
  </div>
</main>`;
}
