import { esc } from './utils.js';
import { icon } from './icons.js';

export function Footer({ brand, nav, footer }) {
  const year = new Date().getFullYear();
  const links = nav.links.map((l) => `<li><a href="${esc(l.href)}" class="hover:text-ink">${esc(l.label)}</a></li>`).join('');
  return `
<footer class="border-t border-line bg-paper px-5 py-14 text-muted md:px-8">
  <div class="mx-auto max-w-6xl">
    <div class="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
      <div>
        <a href="#top" class="flex items-center gap-2.5 text-lg font-semibold tracking-tight text-ink"><span class="h-2.5 w-2.5 bg-accent" aria-hidden="true"></span>${esc(brand.name)}</a>
        <p class="mt-3 max-w-sm text-sm">${esc(brand.tagline)} ${esc(footer.note)}</p>
      </div>
      <ul class="flex flex-wrap gap-x-6 gap-y-2 text-sm">${links}</ul>
    </div>
    <div class="mt-12 flex flex-col gap-3 border-t border-line pt-6 text-sm sm:flex-row sm:justify-between">
      <p>&copy; ${year} ${esc(footer.copyrightName)}. ${esc(footer.copyrightSuffix)}</p>
      <a href="#top" class="inline-flex items-center gap-2 text-ink hover:text-accent">${esc(footer.backToTopLabel)} ${icon('arrowUp', 'h-4 w-4')}</a>
    </div>
  </div>
</footer>`;
}
