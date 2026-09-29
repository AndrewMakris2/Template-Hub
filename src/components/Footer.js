import { esc } from './utils.js';
import { icon } from './icons.js';

export function Footer({ brand, nav, footer }) {
  const year = new Date().getFullYear();
  const links = nav.links.map((l) => `<li><a href="${esc(l.href)}" class="hover:text-on-ink">${esc(l.label)}</a></li>`).join('');
  return `
<footer class="bg-ink px-5 py-16 text-on-ink/65 md:px-8">
  <div class="mx-auto max-w-6xl">
    <div class="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
      <div>
        <a href="#top" class="flex items-center gap-2 font-heading text-4xl italic text-on-ink"><span class="h-3 w-3 rounded-full bg-tint" aria-hidden="true"></span>${esc(brand.name)}</a>
        <p class="mt-3 max-w-sm">${esc(brand.tagline)}</p>
        <p class="mt-2 max-w-sm text-sm">${esc(footer.note)}</p>
      </div>
      <ul class="flex flex-wrap gap-x-6 gap-y-2 text-sm">${links}</ul>
    </div>
    <div class="mt-14 flex flex-col gap-3 border-t border-on-ink/15 pt-6 text-sm sm:flex-row sm:justify-between">
      <p>&copy; ${year} ${esc(footer.copyrightName)}. ${esc(footer.copyrightSuffix)}</p>
      <a href="#top" class="inline-flex items-center gap-2 text-on-ink hover:text-tint">${esc(footer.backToTopLabel)} ${icon('arrowUp', 'h-4 w-4')}</a>
    </div>
  </div>
</footer>`;
}
