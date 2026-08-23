(() => {
  const root = document.documentElement;
  const themeButton = document.querySelector('.theme-toggle');
  const themeIcon = document.querySelector('.theme-icon');
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const saved = localStorage.getItem('portfolio-theme');
  if (saved === 'light' || saved === 'dark') root.dataset.theme = saved;

  function syncTheme() {
    const dark = root.dataset.theme === 'dark';
    if (themeIcon) themeIcon.textContent = dark ? 'Light' : 'Dark';
    if (themeButton) themeButton.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', dark ? '#0c151c' : '#f4f7f9');
  }
  syncTheme();

  themeButton?.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('portfolio-theme', root.dataset.theme);
    syncTheme();
  });

  function closeNav() {
    navLinks?.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');
  }
  navToggle?.addEventListener('click', () => {
    const open = navLinks?.classList.toggle('open') || false;
    navToggle.setAttribute('aria-expanded', String(open));
  });
  navLinks?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeNav));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeNav(); navToggle?.focus(); } });
  document.addEventListener('click', e => {
    if (!navLinks?.classList.contains('open')) return;
    if (!navLinks.contains(e.target) && !navToggle?.contains(e.target)) closeNav();
  });

  if (reduceMotion || !('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
  } else {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();