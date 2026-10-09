/**
 * Custom components — code block copy button.
 *
 * Markup (layouts/_markup/render-codeblock.html):
 *   figure.code-block
 *     button.code-copy.js-code-copy (i.icon-copy ⇄ i.icon-check while .is-copied)
 *
 * Icon-only button: the label lives in the aria-label attribute only,
 * switched to the "copied" state for 2s (texts from window.i18n.code,
 * footer/js-i18n.html). No text node inside the button.
 */

const label = (key, fallback) =>
  (window.i18n && window.i18n.code && window.i18n.code[key]) || fallback;

const setState = (btn, copied) => {
  btn.classList.toggle('is-copied', copied);
  btn.setAttribute('aria-label', label(copied ? 'copied' : 'copy', copied ? 'Copié' : 'Copier'));
};

const copy = (btn) => {
  const block = btn.closest('.code-block');
  const target = block ? (block.querySelector('pre code') || block.querySelector('pre')) : null;
  if (!target) return;
  const text = target.textContent;
  const done = () => {
    setState(btn, true);
    clearTimeout(btn._codeCopyTimer);
    btn._codeCopyTimer = setTimeout(() => setState(btn, false), 2000);
  };
  const fallback = () => {
    const area = document.createElement('textarea');
    area.value = text;
    area.setAttribute('readonly', '');
    area.style.position = 'fixed';
    area.style.opacity = '0';
    document.body.appendChild(area);
    area.select();
    document.execCommand('copy');
    area.remove();
    done();
  };
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(done, fallback);
  } else {
    fallback();
  }
};

document.querySelectorAll('.js-code-copy').forEach((btn) => {
  btn.addEventListener('click', () => copy(btn));
});
