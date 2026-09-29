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

/** Section label pill. tone: 'light' (default, on paper/cream) or 'dark' (on ink/accent). */
export function sectionLabel(text, tone = 'light') {
  const cls = tone === 'dark' ? 'bg-on-ink/10 text-on-ink' : 'bg-tint text-accent';
  return `<p class="inline-flex items-center gap-2 rounded-full ${cls} px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.16em]"><span class="h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true"></span>${esc(text)}</p>`;
}

/** Host name of a URL, for the fake browser address bar. */
export const host = (url) => String(url).replace(/^https?:\/\//, '').replace(/\/$/, '');

/** A screenshot inside a simple browser window frame. */
export function browserFrame(src, url, { dark = false, eager = false, cls = '' } = {}) {
  const frame = dark ? 'border-on-ink/10 bg-on-ink/5' : 'border-ink/10 bg-paper';
  const bar = dark ? 'border-on-ink/10 bg-on-ink/[0.06]' : 'border-ink/10 bg-cream';
  const dot = dark ? 'bg-on-ink/20' : 'bg-ink/15';
  const pill = dark ? 'bg-on-ink/10 text-on-ink/60' : 'bg-paper text-muted';
  return `<div class="overflow-hidden rounded-xl border ${frame} shadow-2xl shadow-black/25 ${cls}">
      <div class="flex items-center gap-1.5 border-b ${bar} px-3 py-2" aria-hidden="true"><span class="h-2.5 w-2.5 rounded-full ${dot}"></span><span class="h-2.5 w-2.5 rounded-full ${dot}"></span><span class="h-2.5 w-2.5 rounded-full ${dot}"></span><span class="ml-3 truncate rounded-md ${pill} px-2.5 py-0.5 text-[10px]">${esc(host(url))}</span></div>
      <img src="${esc(src)}" alt="" class="block aspect-[1440/900] w-full object-cover object-top" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async" width="1200" height="750" />
    </div>`;
}

/** A screenshot inside a phone frame. */
export function phoneFrame(src, { eager = false, cls = '' } = {}) {
  return `<div class="overflow-hidden rounded-[1.4rem] border-[5px] border-ink bg-ink shadow-2xl shadow-black/40 ${cls}"><img src="${esc(src)}" alt="" class="block aspect-[390/844] w-full object-cover object-top" ${eager ? '' : 'loading="lazy"'} decoding="async" width="520" height="1125" /></div>`;
}

/** Shared button styles. */
export const buttonClasses = {
  primary:
    'inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-[0.95rem] font-medium text-on-accent transition-colors duration-200 hover:bg-ink hover:text-on-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent',
  dark:
    'inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 text-[0.95rem] font-medium text-on-ink transition-colors duration-200 hover:bg-accent hover:text-on-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent',
  ghost:
    'inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 bg-paper px-7 py-3.5 text-[0.95rem] font-medium text-ink transition-colors duration-200 hover:border-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent',
  light:
    'inline-flex items-center justify-center gap-2 rounded-full bg-on-ink px-6 py-3 text-sm font-medium text-ink transition-colors duration-200 hover:bg-tint focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-on-ink',
  ghostDark:
    'inline-flex items-center justify-center gap-2 rounded-full border border-on-ink/25 px-6 py-3 text-sm font-medium text-on-ink transition-colors duration-200 hover:border-on-ink hover:bg-on-ink/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-on-ink',
};
