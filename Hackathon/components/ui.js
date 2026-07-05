/* ============================================================
   EduVerse AI — Shared UI Components
   ============================================================ */

import { navigate, getCurrentPage } from '../assets/js/router.js';
import { getState, clearSession, isLoggedIn } from '../assets/js/state.js';
import { getUserById, notifications as allNotifs } from '../data/data.js';
import { toast, skillColor } from '../assets/js/utils.js';

/* ============================================================
   SIDEBAR COMPONENT
   ============================================================ */
export function renderSidebar(role = 'learner') {
  const state = getState();
  const user = getUserById(state.currentUser);
  const currentPage = getCurrentPage();

  const learnerLinks = [
    { id: 'dashboard',  icon: '🏠', label: 'Dashboard' },
    { id: 'roadmap',    icon: '🗺️', label: 'My Roadmap' },
    { id: 'skillgraph', icon: '🕸️', label: 'Skill Graph' },
    { id: 'assessment', icon: '📝', label: 'Assessment' },
    { id: 'tutor',      icon: '🤖', label: 'AI Tutor', badge: 'AI' },
    { id: 'resume',     icon: '📄', label: 'Resume Analyzer' },
    { id: 'jobs',       icon: '💼', label: 'Job Matches' },
  ];

  const educatorLinks = [
    { id: 'educator',   icon: '📊', label: 'Educator Dashboard' },
    { id: 'dashboard',  icon: '🏠', label: 'Overview' },
  ];

  const adminLinks = [
    { id: 'admin',      icon: '🛡️', label: 'Admin Panel' },
    { id: 'educator',   icon: '📊', label: 'Analytics' },
    { id: 'dashboard',  icon: '🏠', label: 'Dashboard' },
  ];

  const links = role === 'educator' ? educatorLinks : role === 'admin' ? adminLinks : learnerLinks;

  const linksHTML = links.map(l => `
    <button class="sidebar-link ${currentPage === l.id ? 'active' : ''}" data-page="${l.id}" aria-label="${l.label}">
      <span class="link-icon">${l.icon}</span>
      <span class="link-label">${l.label}</span>
      ${l.badge ? `<span class="link-badge">${l.badge}</span>` : ''}
    </button>
  `).join('');

  const sidebarEl = document.getElementById('sidebar');
  if (!sidebarEl) return;

  sidebarEl.innerHTML = `
    <div class="sidebar-header">
      <div class="nav-logo-icon" style="font-size:1.4rem;width:34px;height:34px;border-radius:10px;background:linear-gradient(135deg,#6366f1,#8b5cf6);display:flex;align-items:center;justify-content:center;">🎓</div>
      <span style="font-size:1rem;font-weight:800;letter-spacing:-0.02em">EduVerse <span style="background:linear-gradient(135deg,#6366f1,#8b5cf6);-webkit-background-clip:text;-webkit-text-fill-color:transparent">AI</span></span>
    </div>

    <nav class="sidebar-nav" role="navigation">
      <div class="sidebar-section-title">Navigation</div>
      ${linksHTML}
      <div class="sidebar-section-title" style="margin-top:var(--sp-4)">Account</div>
      <button class="sidebar-link ${currentPage === 'settings' ? 'active' : ''}" data-page="settings">
        <span class="link-icon">⚙️</span>
        <span class="link-label">Settings</span>
      </button>
    </nav>

    <div class="sidebar-footer">
      <div class="sidebar-user" id="sidebar-user-menu">
        <div class="sidebar-user-avatar">${user?.avatar || '🧑'}</div>
        <div class="sidebar-user-info">
          <div class="sidebar-user-name">${user?.name || 'User'}</div>
          <div class="sidebar-user-role">${user?.role || 'Learner'}</div>
        </div>
        <span style="color:var(--text-muted);font-size:12px">⋮</span>
      </div>
    </div>
  `;

  // Bind nav links
  sidebarEl.querySelectorAll('.sidebar-link[data-page]').forEach(btn => {
    btn.addEventListener('click', () => navigate(btn.dataset.page));
  });

  // Sidebar user menu
  const userMenu = document.getElementById('sidebar-user-menu');
  if (userMenu) {
    userMenu.addEventListener('click', () => showUserMenu(userMenu, user));
  }
}

function showUserMenu(anchor, user) {
  const existing = document.getElementById('user-context-menu');
  if (existing) { existing.remove(); return; }

  const menu = document.createElement('div');
  menu.id = 'user-context-menu';
  menu.style.cssText = `
    position:fixed; bottom:80px; left:12px; width:220px;
    background:var(--bg-secondary); border:1px solid var(--border-medium);
    border-radius:var(--radius-lg); box-shadow:var(--shadow-lg);
    z-index:500; overflow:hidden;
    animation:slideUp 0.2s ease-out forwards;
  `;
  menu.innerHTML = `
    <div style="padding:var(--sp-3) var(--sp-4);border-bottom:1px solid var(--border-subtle);">
      <div style="font-size:var(--fs-sm);font-weight:700">${user?.name || 'User'}</div>
      <div style="font-size:var(--fs-xs);color:var(--text-muted)">${user?.email || ''}</div>
    </div>
    <button class="sidebar-link" id="cm-settings" style="width:100%;border-radius:0">
      <span class="link-icon">⚙️</span><span>Settings</span>
    </button>
    <button class="sidebar-link" id="cm-logout" style="width:100%;border-radius:0;color:var(--accent-red)">
      <span class="link-icon">🚪</span><span>Log Out</span>
    </button>
  `;
  document.body.appendChild(menu);

  menu.querySelector('#cm-settings').addEventListener('click', () => { menu.remove(); navigate('settings'); });
  menu.querySelector('#cm-logout').addEventListener('click', () => {
    menu.remove();
    clearSession();
    toast('Logged out successfully', 'info');
    setTimeout(() => navigate('login'), 400);
  });

  setTimeout(() => {
    document.addEventListener('click', function handler(e) {
      if (!menu.contains(e.target) && e.target !== anchor) {
        menu.remove();
        document.removeEventListener('click', handler);
      }
    });
  }, 10);
}

/* ============================================================
   TOPBAR COMPONENT
   ============================================================ */
export function renderTopbar(title, user) {
  const topbar = document.getElementById('topbar');
  if (!topbar) return;

  const notifCount = allNotifs.filter(n => n.userId === user?.id && !n.read).length;
  const userNotifs = allNotifs.filter(n => n.userId === user?.id).slice(0, 5);

  topbar.innerHTML = `
    <div class="topbar-left">
      <button class="mobile-sidebar-toggle" id="mobile-menu-btn" aria-label="Open menu">☰</button>
      <h1 class="topbar-title">${title}</h1>
    </div>
    <div class="topbar-right">
      <div class="topbar-search">
        <span style="color:var(--text-muted)">🔍</span>
        <input type="text" placeholder="Search lessons, topics…" id="global-search" aria-label="Search">
      </div>
      <div style="position:relative">
        <button class="topbar-icon-btn" id="notif-btn" aria-label="Notifications" title="Notifications">
          🔔
          ${notifCount > 0 ? '<span class="notif-dot"></span>' : ''}
        </button>
        <div class="notif-dropdown" id="notif-dropdown">
          <div class="notif-dropdown-header">
            <span>Notifications</span>
            <button class="btn btn-ghost btn-sm" id="mark-all-read" style="font-size:11px">Mark all read</button>
          </div>
          ${userNotifs.map(n => `
            <div class="notif-item ${!n.read ? 'unread' : ''}">
              <div class="notif-item-icon">${n.icon}</div>
              <div class="notif-item-content">
                <div class="notif-item-title">${n.title}</div>
                <div class="notif-item-msg">${n.message}</div>
                <div class="notif-item-time">${n.time}</div>
              </div>
            </div>
          `).join('')}
          ${userNotifs.length === 0 ? '<div style="padding:var(--sp-5);text-align:center;color:var(--text-muted);font-size:var(--fs-sm)">No notifications</div>' : ''}
        </div>
      </div>
      <div class="avatar" style="cursor:pointer;font-size:1.2rem;flex-shrink:0" 
           title="${user?.name || 'User'}" onclick="window.location.href='settings.html'">
        ${user?.avatar || '🧑'}
      </div>
    </div>
  `;

  // Notification dropdown
  const notifBtn = document.getElementById('notif-btn');
  const notifDropdown = document.getElementById('notif-dropdown');
  if (notifBtn && notifDropdown) {
    notifBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      notifDropdown.classList.toggle('open');
    });
    document.addEventListener('click', () => notifDropdown.classList.remove('open'));
  }

  // Mobile sidebar
  const mobileBtn = document.getElementById('mobile-menu-btn');
  if (mobileBtn) {
    mobileBtn.addEventListener('click', () => {
      document.getElementById('sidebar')?.classList.toggle('open');
      document.getElementById('sidebar-overlay')?.classList.toggle('open');
    });
  }

  const overlay = document.getElementById('sidebar-overlay');
  if (overlay) {
    overlay.addEventListener('click', () => {
      document.getElementById('sidebar')?.classList.remove('open');
      overlay.classList.remove('open');
    });
  }
}

/* ============================================================
   SKILL BAR COMPONENT
   ============================================================ */
const SKILL_LABEL_MAP = {
  html: 'HTML5', css: 'CSS3', javascript: 'JavaScript',
  typescript: 'TypeScript', react: 'React', nodejs: 'Node.js',
  databases: 'Databases', git: 'Git', testing: 'Testing',
  systemDesign: 'System Design', python: 'Python',
  docker: 'Docker', kubernetes: 'Kubernetes', aws: 'AWS'
};

export function renderSkillBars(container, skills) {
  if (!container) return;
  container.innerHTML = Object.entries(skills).map(([key, val]) => `
    <div class="skill-bar-item">
      <div class="skill-bar-header">
        <span>${SKILL_LABEL_MAP[key] || key}</span>
        <span class="skill-bar-value" style="color:${skillColor(val)}">${val}%</span>
      </div>
      <div class="progress-bar">
        <div class="progress-fill" style="width:${val}%;background:${skillColor(val)};animation:none"></div>
      </div>
    </div>
  `).join('');
}
