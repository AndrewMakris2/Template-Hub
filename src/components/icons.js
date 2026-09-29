/**
 * Inline SVG icons (stroke style, inherit color via currentColor).
 * Social icons are looked up by the `platform` key used in content.js.
 */

const svg = (paths, cls = 'h-5 w-5') =>
  `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${paths}</svg>`;

const paths = {
  instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none"/>',
  facebook: '<path d="M17 3h-2.5A4.5 4.5 0 0 0 10 7.5V10H7v4h3v7h4v-7h3l1-4h-4V7.5a.5.5 0 0 1 .5-.5H17z"/>',
  tiktok: '<path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5"/><path d="M14 3c.4 2.6 2.3 4.5 5 4.8"/>',
  pinterest: '<circle cx="12" cy="12" r="9"/><path d="M10.2 20.6 12 13"/><path d="M9.5 14.2c-.9-.8-1.3-1.9-1.1-3.2.4-2.4 2.7-3.8 5-3.3 2.2.5 3.3 2.4 2.8 4.6-.4 1.9-1.8 3.1-3.3 2.8-1-.2-1.5-1-1.3-2"/>',
  youtube: '<rect x="2.5" y="5" width="19" height="14" rx="4"/><path d="m10 9 5 3-5 3z"/>',
  x: '<path d="M4 4l16 16M20 4 4 20" />',
  smartphone: '<rect x="6" y="2" width="12" height="20" rx="2.5"/><path d="M11 18h2"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 11h18"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  image: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-5-5L5 21"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
  zap: '<path d="M13 2 3 14h9l-1 8 10-12h-9z"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
  pen: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  menu: '<path d="M3 8h18M3 16h18"/>',
  close: '<path d="M5 5l14 14M19 5 5 19"/>',
  arrowRight: '<path d="M4 12h16M14 6l6 6-6 6"/>',
  arrowUpRight: '<path d="M7 17 17 7M8 7h9v9"/>',
  chevronLeft: '<path d="m15 5-7 7 7 7"/>',
  chevronRight: '<path d="m9 5 7 7-7 7"/>',
  arrowUp: '<path d="M12 20V4M6 10l6-6 6 6"/>',
};

export function icon(name, cls) {
  return svg(paths[name] ?? '', cls);
}
