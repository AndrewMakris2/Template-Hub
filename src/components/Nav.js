import { esc, buttonClasses } from './utils.js';
import { icon } from './icons.js';

export function Nav({ brand, nav }) {
  const links = nav.links
    .map((l) => `<li><a href="${esc(l.href)}" class="px-3 py-2 text-sm text-on-ink/70 transition-colors hover:text-on-ink">${esc(l.label)}</a></li>`)
    .join('');
  const mobileLinks = nav.links
    .map((l) => `<li class="border-b border-white/10"><a href="${esc(l.href)}" class="block py-4 text-2xl font-medium tracking-tight text-on-ink" data-menu-link>${esc(l.label)}</a></li>`)
    .join('');

  return `
<a href="#main" class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-paper focus:px-4 focus:py-2 focus:text-navy">${esc(nav.skipLinkLabel)}</a>
<header class="site-header sticky top-0 z-50 border-b border-line/0 transition-[border-color] duration-300" data-header>
  <div class="absolute inset-0 -z-10 bg-navy" aria-hidden="true"></div>
  <nav class="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-5 md:px-8" aria-label="Primary">
    <a href="#top" class="flex items-center gap-2.5 text-[1.05rem] font-semibold tracking-tight text-on-ink"><span class="h-2.5 w-2.5 bg-sky" aria-hidden="true"></span>${esc(brand.name)}</a>
    <ul class="hidden items-center lg:flex">${links}</ul>
    <div class="hidden lg:block"><a href="${esc(nav.cta.href)}" class="${buttonClasses.light} !px-4 !py-2 !text-sm">${esc(nav.cta.label)}</a></div>
    <button type="button" class="inline-flex h-10 w-10 items-center justify-center text-on-ink lg:hidden" aria-expanded="false" aria-controls="mobile-menu" aria-label="${esc(nav.menuOpenLabel)}" data-menu-toggle data-label-open="${esc(nav.menuOpenLabel)}" data-label-close="${esc(nav.menuCloseLabel)}">
      <span data-icon-open>${icon('menu', 'h-6 w-6')}</span>
      <span data-icon-close hidden>${icon('close', 'h-6 w-6')}</span>
    </button>
  </nav>
  <div id="mobile-menu" class="fixed inset-x-0 top-16 bottom-0 overflow-y-auto bg-navy px-6 pb-10 pt-2 lg:hidden" hidden data-menu>
    <ul>${mobileLinks}</ul>
    <a href="${esc(nav.cta.href)}" class="mt-8 w-full ${buttonClasses.light}" data-menu-link>${esc(nav.cta.label)}</a>
  </div>
</header>`;
}
