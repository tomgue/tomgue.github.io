// copy-code
(() => {
  const FEEDBACK_MS = 2000;

  document.querySelectorAll('.code-block-copy').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const block = btn.closest('.code-block');
      const code = block?.querySelector('pre code');
      if (!code) return;

      try {
        await navigator.clipboard.writeText(code.innerText);
      } catch {
        // Fallback contexte non sécurisé
        const ta = document.createElement('textarea');
        ta.value = code.innerText;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        ta.remove();
      }

      btn.classList.add('copied');
      btn.querySelector('.visually-hidden')?.replaceChildren('Copié !');
      setTimeout(() => {
        btn.classList.remove('copied');
        btn.querySelector('.visually-hidden')?.replaceChildren('Copier');
      }, FEEDBACK_MS);
    });
  });
})();