/* ============================================================
   EduVerse AI — Utility Functions
   ============================================================ */

/* ── DOM Helpers ── */
export const $ = (sel, ctx = document) => ctx.querySelector(sel);
export const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

export function el(tag, attrs = {}, ...children) {
  const element = document.createElement(tag);
  Object.entries(attrs).forEach(([k, v]) => {
    if (k === 'class') element.className = v;
    else if (k === 'html') element.innerHTML = v;
    else if (k.startsWith('on')) element.addEventListener(k.slice(2).toLowerCase(), v);
    else element.setAttribute(k, v);
  });
  children.flat().forEach(c => {
    if (c == null) return;
    element.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);
  });
  return element;
}

export function show(el) { if (el) el.classList.remove('hidden'); }
export function hide(el) { if (el) el.classList.add('hidden'); }
export function toggle(el) { if (el) el.classList.toggle('hidden'); }

/* ── Format helpers ── */
export function formatXP(xp) {
  return xp >= 1000 ? `${(xp / 1000).toFixed(1)}k` : String(xp);
}

export function formatPercent(val) {
  return `${Math.round(val)}%`;
}

export function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

export function formatDuration(minutes) {
  if (minutes < 60) return `${minutes}m`;
  const h = Math.floor(minutes / 60), m = minutes % 60;
  return m ? `${h}h ${m}m` : `${h}h`;
}

/* ── Skill color ── */
export function skillColor(value) {
  if (value >= 85) return 'var(--accent-green)';
  if (value >= 65) return 'var(--accent-primary)';
  if (value >= 40) return 'var(--accent-orange)';
  return 'var(--accent-red)';
}

/* ── Match color class ── */
export function matchClass(pct) {
  if (pct >= 75) return 'job-match-high';
  if (pct >= 50) return 'job-match-mid';
  return 'job-match-low';
}

/* ── Toast Notifications ── */
let toastContainer = null;

export function toast(message, type = 'info', duration = 3500) {
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    Object.assign(toastContainer.style, {
      position: 'fixed', bottom: '24px', right: '24px',
      zIndex: '9999', display: 'flex', flexDirection: 'column',
      gap: '10px', maxWidth: '360px'
    });
    document.body.appendChild(toastContainer);
  }

  const icons = { success: '✅', error: '❌', warning: '⚠️', info: 'ℹ️', xp: '⚡' };
  const colors = {
    success: '#10b981', error: '#ef4444',
    warning: '#f59e0b', info: '#6366f1', xp: '#8b5cf6'
  };

  const t = document.createElement('div');
  t.style.cssText = `
    display:flex; align-items:center; gap:10px;
    padding:12px 16px; border-radius:12px;
    background:rgba(16,16,42,0.95); backdrop-filter:blur(16px);
    border:1px solid ${colors[type]}30;
    box-shadow:0 8px 24px rgba(0,0,0,0.4);
    font-family:var(--font-sans); font-size:13px; color:#f1f5f9;
    animation:slideLeft 0.3s ease-out forwards;
    transform-origin:right; min-width:260px;
  `;
  t.innerHTML = `<span style="font-size:16px">${icons[type]}</span><span>${message}</span>`;
  toastContainer.appendChild(t);

  setTimeout(() => {
    t.style.opacity = '0';
    t.style.transform = 'translateX(20px)';
    t.style.transition = 'all 0.3s ease';
    setTimeout(() => t.remove(), 300);
  }, duration);
}

/* ── Smooth count-up animation ── */
export function animateCount(el, from, to, duration = 1000, suffix = '') {
  const start = performance.now();
  const update = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(from + (to - from) * eased) + suffix;
    if (progress < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}

/* ── Scroll reveal ── */
export function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/* ── Progress bar helper ── */
export function setProgress(barEl, value, color = null) {
  if (!barEl) return;
  const fill = barEl.querySelector('.progress-fill');
  if (fill) {
    fill.style.width = `${Math.min(100, Math.max(0, value))}%`;
    if (color) fill.style.background = color;
  }
}

/* ── Debounce ── */
export function debounce(fn, ms = 300) {
  let t;
  return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), ms); };
}

/* ── Markdown-lite renderer (for AI tutor) ── */
export function renderMarkdown(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/```(\w*)\n([\s\S]*?)```/g, '<pre><code>$2</code></pre>')
    .replace(/^• (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/\n/g, '<br>');
}

/* ── Sleep / delay ── */
export const sleep = ms => new Promise(r => setTimeout(r, ms));
