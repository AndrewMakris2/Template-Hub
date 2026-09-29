/** Style filter chips for the designs grid. */
export function initFilter() {
  const group = document.querySelector('[data-filters]');
  if (!group) return;
  const chips = [...group.querySelectorAll('[data-filter]')];
  const cards = [...document.querySelectorAll('[data-design-card]')];
  const count = document.querySelector('[data-filter-count]');

  const apply = (filter) => {
    let shown = 0;
    cards.forEach((card) => {
      const match = filter === 'all' || card.dataset.tags.split(' ').includes(filter);
      card.hidden = !match;
      if (match) shown += 1;
    });
    chips.forEach((c) => c.setAttribute('aria-pressed', String(c.dataset.filter === filter)));
    if (count) count.textContent = count.dataset.template.replace('{count}', shown);
  };
  chips.forEach((c) => c.addEventListener('click', () => apply(c.dataset.filter)));
}
