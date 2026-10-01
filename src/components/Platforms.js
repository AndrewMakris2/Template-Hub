import { esc } from './utils.js';

/** A quiet strip naming the booking apps the sites link to. */
export function Platforms({ platforms }) {
  const names = platforms.names.map((n) => `<li>${esc(n)}</li>`).join('');
  return `
<section class="border-y border-line bg-paper px-5 py-10 md:px-8" aria-label="${esc(platforms.label)}">
  <div class="mx-auto max-w-6xl text-center">
    <p class="text-sm text-muted">${esc(platforms.label)}</p>
    <ul class="mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-base font-medium tracking-tight text-ink/45 md:text-lg">${names}</ul>
  </div>
</section>`;
}
