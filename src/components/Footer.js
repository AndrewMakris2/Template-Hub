import { esc } from './utils.js';
import { icon } from './icons.js';

export function Footer({ brand, nav, footer, contact }) {
  const year = new Date().getFullYear();
  const links = nav.links.map((l) => `<li><a href="${esc(l.href)}" class="hover:text-on-ink">${esc(l.label)}</a></li>`).join('');
  return `
<footer class="relative -mt-px bg-navy px-5 pb-12 text-on-ink/70 md:px-8">
  <div class="mx-auto max-w-6xl border-t border-white/10 pt-12">
    <div class="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
      <div>
        <a href="#top" class="flex items-center gap-2.5 text-lg font-semibold tracking-tight text-on-ink"><span class="h-2.5 w-2.5 bg-sky" aria-hidden="true"></span>${esc(brand.name)}</a>
        <p class="mt-3 max-w-sm text-sm">${esc(brand.tagline)} ${esc(footer.note)}</p>
        <p class="mt-3 text-sm"><a href="mailto:${esc(contact.email)}" class="text-on-ink hover:text-tint">${esc(contact.email)}</a></p>
      </div>
      <ul class="flex flex-wrap gap-x-6 gap-y-2 text-sm">${links}</ul>
    </div>
    <div class="mt-12 flex flex-col gap-3 border-t border-white/15 pt-6 text-sm sm:flex-row sm:justify-between">
      <p>&copy; ${year} ${esc(footer.copyrightName)}. ${esc(footer.copyrightSuffix)} <a href="/privacy/" class="underline underline-offset-4 hover:text-on-ink">${esc(footer.privacyLabel)}</a></p>
      <a href="#top" class="inline-flex items-center gap-2 text-on-ink hover:text-tint">${esc(footer.backToTopLabel)} ${icon('arrowUp', 'h-4 w-4')}</a>
    </div>
  </div>
</footer>`;
}
