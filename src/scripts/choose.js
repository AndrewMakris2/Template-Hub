/**
 * "Start with this design" / "Choose <plan>" buttons pre-fill the enquiry form.
 * Also supports links like /?design=6#contact.
 */
export function initChoose() {
  const designSelect = document.querySelector('[data-design-select]');
  const planSelect = document.querySelector('[data-plan-select]');

  const pick = (select, value) => {
    if (!select || !value) return;
    const option = [...select.options].find((o) => o.value === value);
    if (option) select.value = option.value;
  };

  document.querySelectorAll('[data-choose-design]').forEach((a) =>
    a.addEventListener('click', () => pick(designSelect, a.dataset.chooseDesign)),
  );
  document.querySelectorAll('[data-choose-plan]').forEach((a) =>
    a.addEventListener('click', () => pick(planSelect, a.dataset.choosePlan)),
  );

  const n = new URLSearchParams(location.search).get('design');
  if (n && designSelect) {
    const option = [...designSelect.options].find((o) => o.value.startsWith(`No. ${String(n).padStart(2, '0')} `));
    if (option) designSelect.value = option.value;
  }
}
