const nav = document.querySelector('.primary-nav');
const toggle = document.querySelector('.nav-toggle');

function setNavOpen(open) {
  if (!nav || !toggle) return;
  nav.classList.toggle('open', open);
  toggle.setAttribute('aria-expanded', String(open));
}

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = !nav.classList.contains('open');
    setNavOpen(open);
  });

  // Close mobile nav when user clicks a link
  nav.addEventListener('click', (event) => {
    const anchor = (event.target instanceof HTMLElement && event.target.closest('a')) || null;
    if (anchor) {
      setNavOpen(false);
    }
  });
}

// Init scroll animations
if (window.AOS) {
  AOS.init({
    duration: 750,
    once: true,
    easing: 'ease-out-cubic',
    anchorPlacement: 'top-bottom',
  });
}
