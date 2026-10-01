/**
 * Shared helpers for components. Structural only — no content, no colors.
 */

/** Escape a value for safe use in HTML text or attribute values. */
export function esc(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/** Attributes for links that leave the site. */
export const external = 'target="_blank" rel="noopener noreferrer"';

/** Section label: a small blue square and quiet grey caps. */
export function sectionLabel(text) {
  return `<p class="flex items-center gap-2.5 text-[0.68rem] font-medium uppercase tracking-[0.1em] text-muted sm:text-xs sm:tracking-[0.18em]"><span class="h-1.5 w-1.5 bg-accent" aria-hidden="true"></span>${esc(text)}</p>`;
}

/** Host name of a URL, for the fake browser address bar. */
export const host = (url) => String(url).replace(/^https?:\/\//, '').replace(/\/$/, '');

/** A screenshot inside a simple browser window frame. */
export function browserFrame(src, url, { eager = false, cls = '' } = {}) {
  return `<div class="overflow-hidden rounded-xl border border-ink/10 bg-paper shadow-xl shadow-ink/10 ${cls}">
      <div class="flex items-center gap-1.5 border-b border-ink/10 bg-cream px-3 py-2" aria-hidden="true"><span class="h-2.5 w-2.5 rounded-full bg-ink/15"></span><span class="h-2.5 w-2.5 rounded-full bg-ink/15"></span><span class="h-2.5 w-2.5 rounded-full bg-ink/15"></span><span class="ml-3 truncate rounded-md bg-paper px-2.5 py-0.5 text-[10px] text-muted">${esc(host(url))}</span></div>
      <img src="${esc(src)}" alt="" class="block aspect-[1440/900] w-full object-cover object-top" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async" width="1200" height="750" />
    </div>`;
}

/** A screenshot inside a phone frame. */
export function phoneFrame(src, { eager = false, cls = '' } = {}) {
  return `<div class="overflow-hidden rounded-[1.4rem] border-[5px] border-ink bg-ink shadow-xl shadow-ink/20 ${cls}"><img src="${esc(src)}" alt="" class="block aspect-[390/844] w-full object-cover object-top" ${eager ? '' : 'loading="lazy"'} decoding="async" width="520" height="1125" /></div>`;
}

/** Shared button styles. */
export const buttonClasses = {
  primary:
    'inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-[0.95rem] font-medium text-on-accent transition-colors duration-200 hover:bg-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent',
  dark:
    'inline-flex items-center justify-center gap-2 rounded-lg bg-ink px-6 py-3 text-[0.95rem] font-medium text-on-ink transition-colors duration-200 hover:bg-accent hover:text-on-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent',
  ghost:
    'inline-flex items-center justify-center gap-2 rounded-lg border border-line bg-paper px-6 py-3 text-[0.95rem] font-medium text-ink transition-colors duration-200 hover:border-ink/40 hover:bg-cream focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent',
};
