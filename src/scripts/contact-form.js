/**
 * Progressive enhancement for the Netlify contact form.
 * Without JS the form posts normally and Netlify shows its default thank-you
 * page. With JS we submit in the background and show the inline message from
 * content.js instead.
 */
export function initContactForm() {
  const form = document.querySelector('[data-contact-form]');
  if (!form) return;
  const button = form.querySelector('[data-submit]');
  const success = form.querySelector('[data-form-success]');
  const error = form.querySelector('[data-form-error]');
  const buttonHtml = button.innerHTML;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    success.classList.add('hidden');
    error.classList.add('hidden');
    button.disabled = true;
    button.textContent = button.dataset.sendingLabel;

    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(form)).toString(),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      form.reset();
      success.classList.remove('hidden');
    } catch {
      error.classList.remove('hidden');
    } finally {
      button.disabled = false;
      button.innerHTML = buttonHtml;
    }
  });
}
