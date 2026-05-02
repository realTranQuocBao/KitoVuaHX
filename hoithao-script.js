// ===================================================
// HỘI THAO 2025 – Script
// ===================================================

// --- Tab switching ---
document.querySelectorAll('.ntab').forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.tab;
    document.querySelectorAll('.ntab').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.nganh-panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('tab-' + target).classList.add('active');
  });
});

// --- Scroll reveal ---
const revealItems = document.querySelectorAll(
  '.week-card, .nr-card, .notes-box, .tl-item'
);
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
      observer.unobserve(e.target);
    }
  });
}, { threshold: .12 });

revealItems.forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = `opacity .5s ease ${i * 0.04}s, transform .5s ease ${i * 0.04}s`;
  observer.observe(el);
});

// --- Highlight today's match (find nearest upcoming Sunday) ---
(function markNextRound() {
  const rounds = [
    { date: '2025-05-04', roundId: 'A' },   // CN 03/05 → Mon buffer
    { date: '2025-05-11', roundId: 'B' },
    { date: '2025-05-18', roundId: 'C' },
    { date: '2025-05-25', roundId: 'D' },
    { date: '2025-06-01', roundId: 'E' },
    { date: '2025-06-08', roundId: 'CK' },
  ];
  const today = new Date();
  for (const r of rounds) {
    if (today < new Date(r.date)) {
      // Mark the upcoming round in the table
      document.querySelectorAll(`.tr-round .th-round`).forEach(th => {
        const badge = th.querySelector('.round-lbl');
        if (badge && badge.textContent.trim() === r.roundId) {
          th.style.outline = '3px solid #f0c040';
          th.style.position = 'relative';
          const tag = document.createElement('div');
          tag.textContent = 'SẮP TỚI';
          tag.style.cssText = `
            position:absolute; bottom:-1px; left:50%; transform:translateX(-50%);
            background:#f0c040; color:#000; font-size:.6rem; font-weight:900;
            padding:1px 6px; border-radius:4px 4px 0 0; letter-spacing:.06em; white-space:nowrap;
          `;
          th.appendChild(tag);
        }
      });
      break;
    }
  }
})();
