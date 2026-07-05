/* ============================================================
   EduVerse AI — Client-Side Router
   ============================================================ */

import { isLoggedIn, getState } from './state.js';

/* Pages that require authentication */
const PROTECTED_PAGES = [
  'dashboard', 'roadmap', 'assessment', 'skillgraph',
  'resume', 'jobs', 'tutor', 'settings', 'educator', 'admin'
];

/* Page registry — maps name → html file */
const PAGE_MAP = {
  landing:    'index.html',
  login:      'login.html',
  register:   'register.html',
  dashboard:  'dashboard.html',
  roadmap:    'roadmap.html',
  assessment: 'assessment.html',
  skillgraph: 'skillgraph.html',
  resume:     'resume.html',
  jobs:       'jobs.html',
  tutor:      'tutor.html',
  settings:   'settings.html',
  educator:   'educator.html',
  admin:      'admin.html',
  credentials:'credentials.html'
};

/* ── Navigate to a page ── */
export function navigate(page, params = {}) {
  // Auth guard
  if (PROTECTED_PAGES.includes(page) && !isLoggedIn()) {
    navigateTo('login');
    return;
  }

  navigateTo(page, params);
}

function navigateTo(page, params = {}) {
  const file = PAGE_MAP[page];
  if (!file) {
    console.error(`Unknown page: ${page}`);
    return;
  }

  const query = Object.keys(params).length
    ? '?' + new URLSearchParams(params).toString()
    : '';

  window.location.href = file + query;
}

/* ── Get current page name from URL ── */
export function getCurrentPage() {
  const path = window.location.pathname;
  const file = path.split('/').pop() || 'index.html';
  return Object.keys(PAGE_MAP).find(k => PAGE_MAP[k] === file) || 'landing';
}

/* ── Get URL query params ── */
export function getParams() {
  return Object.fromEntries(new URLSearchParams(window.location.search));
}

/* ── Redirect if not logged in ── */
export function requireAuth() {
  if (!isLoggedIn()) {
    window.location.href = 'login.html';
    return false;
  }
  return true;
}

/* ── Redirect if already logged in ── */
export function requireGuest() {
  if (isLoggedIn()) {
    const state = getState();
    // Redirect to appropriate dashboard
    window.location.href = 'dashboard.html';
    return false;
  }
  return true;
}
