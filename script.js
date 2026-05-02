// ===================================================
// THIẾU NHI THÁNH THỂ – Script
// ===================================================

// --- Navbar scroll effect ---
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// --- Mobile menu toggle ---
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// --- Hero particles ---
(function spawnParticles() {
  const container = document.getElementById('particles');
  for (let i = 0; i < 20; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = 3 + Math.random() * 8;
    Object.assign(p.style, {
      width:  size + 'px',
      height: size + 'px',
      left:   Math.random() * 100 + '%',
      animationDuration: (8 + Math.random() * 12) + 's',
      animationDelay:    (Math.random() * 8) + 's',
    });
    container.appendChild(p);
  }
})();

// --- Counter animation ---
function animateCounter(el) {
  const target = +el.dataset.target;
  const duration = 1800;
  const step = target / (duration / 16);
  let current = 0;
  const timer = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = Math.round(current) + (target >= 40 ? '+' : '');
    if (current >= target) clearInterval(timer);
  }, 16);
}

const counters = document.querySelectorAll('.stat-num');
let countersDone = false;
const statsObserver = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting && !countersDone) {
    countersDone = true;
    counters.forEach(animateCounter);
  }
}, { threshold: .5 });
if (counters.length) statsObserver.observe(counters[0].closest('.stats-bar'));

// --- Scroll reveal animation ---
const revealEls = document.querySelectorAll(
  '.about-grid, .doanthe-card, .info-card, .hd-card, .news-featured, .news-item, .contact-card, .value-item'
);
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: .15 });

revealEls.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity .6s ease, transform .6s ease';
  revealObserver.observe(el);
});

// --- Form submission ---
function handleSubmit(e) {
  e.preventDefault();
  document.getElementById('successModal').classList.add('active');
}
function closeModal() {
  document.getElementById('successModal').classList.remove('active');
  document.querySelector('.contact-form').reset();
}
document.getElementById('successModal').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});

// --- Active nav link on scroll ---
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY + 80;
  sections.forEach(sec => {
    const top    = sec.offsetTop;
    const height = sec.offsetHeight;
    const id     = sec.getAttribute('id');
    const link   = document.querySelector(`.nav-links a[href="#${id}"]`);
    if (link) {
      link.style.background   = scrollY >= top && scrollY < top + height ? 'rgba(255,255,255,.18)' : '';
      link.style.color        = scrollY >= top && scrollY < top + height ? '#fff' : '';
    }
  });
}, { passive: true });
