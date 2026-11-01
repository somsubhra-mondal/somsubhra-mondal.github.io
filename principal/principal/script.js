const root = document.documentElement;
const themeToggle = document.querySelector('.theme-toggle');
const header = document.querySelector('[data-header]');

function syncThemeControl() {
  const isLight = root.dataset.theme === 'light';
  themeToggle.setAttribute('aria-pressed', String(isLight));
  themeToggle.setAttribute('aria-label', `Switch to ${isLight ? 'dark' : 'light'} mode`);
}

themeToggle.addEventListener('click', () => {
  root.dataset.theme = root.dataset.theme === 'light' ? 'dark' : 'light';
  localStorage.setItem('principal-theme', root.dataset.theme);
  syncThemeControl();
});
syncThemeControl();

addEventListener('scroll', () => header.classList.toggle('scrolled', scrollY > 24), { passive: true });
header.classList.toggle('scrolled', scrollY > 24);

const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const reveals = document.querySelectorAll('.reveal');
if (reducedMotion || !('IntersectionObserver' in window)) {
  reveals.forEach((item) => item.classList.add('is-visible'));
} else {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });
  reveals.forEach((item) => observer.observe(item));
}

const tabs = [...document.querySelectorAll('[role="tab"]')];
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => activateTab(tab));
  tab.addEventListener('keydown', (event) => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    let next = index;
    if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
    if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = tabs.length - 1;
    tabs[next].focus();
    activateTab(tabs[next]);
  });
});

function activateTab(activeTab) {
  tabs.forEach((tab) => {
    const selected = tab === activeTab;
    tab.setAttribute('aria-selected', String(selected));
    tab.tabIndex = selected ? 0 : -1;
    document.getElementById(tab.getAttribute('aria-controls')).hidden = !selected;
  });
}

const architecture = document.querySelector('[data-architecture]');
const detail = architecture.querySelector('.arch-detail');
const architectureNodes = architecture.querySelectorAll('[data-node]');
architectureNodes.forEach((node) => node.addEventListener('click', () => {
  architectureNodes.forEach((item) => item.classList.remove('active'));
  node.classList.add('active');
  detail.querySelector('span').textContent = node.dataset.node;
  detail.querySelector('p').textContent = node.dataset.detail;
}));

const motionToggle = architecture.querySelector('.motion-toggle');
if (reducedMotion) {
  architecture.classList.add('paused');
  motionToggle.textContent = 'Animation reduced';
  motionToggle.disabled = true;
} else {
  motionToggle.addEventListener('click', () => {
    const paused = architecture.classList.toggle('paused');
    motionToggle.setAttribute('aria-pressed', String(paused));
    motionToggle.textContent = paused ? 'Resume animation' : 'Pause animation';
  });
}

document.querySelector('[data-year]').textContent = new Date().getFullYear();
