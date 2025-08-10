// 7-script.js
document.addEventListener('DOMContentLoaded', function () {
  const button = document.querySelector('.hamburger');
  const nav = document.getElementById('primary-nav');

  if (!button || !nav) return;

  button.addEventListener('click', function (e) {
    const isOpen = nav.classList.toggle('open');       // toggle .open on nav
    button.classList.toggle('is-active', isOpen);      // animate hamburger -> X
    button.setAttribute('aria-expanded', String(isOpen));
  });

  // Close menu when any link inside is clicked (mobile-friendly)
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (nav.classList.contains('open')) {
        nav.classList.remove('open');
        button.classList.remove('is-active');
        button.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Optional: close the menu when clicking outside
  document.addEventListener('click', (e) => {
    const target = e.target;
    if (nav.classList.contains('open') && !nav.contains(target) && !button.contains(target)) {
      nav.classList.remove('open');
      button.classList.remove('is-active');
      button.setAttribute('aria-expanded', 'false');
    }
  });
});
