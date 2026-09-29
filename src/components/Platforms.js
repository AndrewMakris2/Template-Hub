import { esc } from './utils.js';

/** A quiet strip naming the booking apps the sites link to. */
export function Platforms({ platforms }) {
  const names = platforms.names.map((n) => `<li>${esc(n)}</li>`).join('<li class="text-ink/20" aria-hidden="true">&middot;</li>');
  return `
<section class="border-y border-line bg-cream px-5 py-10 md:px-8" aria-label="${esc(platforms.label)}">
  <div class="mx-auto max-w-6xl text-center">
    <p class="text-sm text-muted">${esc(platforms.label)}</p>
    <ul class="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-heading text-2xl italic text-ink/70 md:text-3xl">${names}</ul>
  </div>
</section>`;
}
