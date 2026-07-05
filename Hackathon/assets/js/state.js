/* ============================================================
   EduVerse AI — State Management (LocalStorage-backed)
   ============================================================ */

const STORAGE_KEY = 'eduverse_state';

const DEFAULT_STATE = {
  currentUser: null,       // logged-in user id
  currentPage: 'landing',  // active page/view
  sidebarOpen: true,
  notifications: [],
  theme: 'dark',
  lastActivity: null
};

/* ── Internal state object ── */
let _state = loadStateFromStorage();

function loadStateFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? { ...DEFAULT_STATE, ...JSON.parse(raw) } : { ...DEFAULT_STATE };
  } catch {
    return { ...DEFAULT_STATE };
  }
}

function persistState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(_state));
  } catch (e) {
    console.warn('State persist failed:', e);
  }
}

/* ── Public API ── */

export function getState() {
  return { ..._state };
}

export function setState(partial) {
  _state = { ..._state, ...partial };
  persistState();
  notifyListeners(_state);
}

export function resetState() {
  _state = { ...DEFAULT_STATE };
  localStorage.removeItem(STORAGE_KEY);
  notifyListeners(_state);
}

/* ── User session helpers ── */
export function setCurrentUser(userId) {
  setState({ currentUser: userId, lastActivity: Date.now() });
}

export function getCurrentUserId() {
  return _state.currentUser;
}

export function clearSession() {
  setState({ currentUser: null });
}

export function isLoggedIn() {
  return !!_state.currentUser;
}

/* ── Reactive listeners ── */
const listeners = new Set();

export function subscribe(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn); // returns unsubscribe fn
}

function notifyListeners(state) {
  listeners.forEach(fn => fn(state));
}

/* ── User-specific data persistence ── */
export function getUserData(userId, key) {
  try {
    const raw = localStorage.getItem(`ev_user_${userId}_${key}`);
    return raw ? JSON.parse(raw) : null;
  } catch { return null; }
}

export function setUserData(userId, key, value) {
  try {
    localStorage.setItem(`ev_user_${userId}_${key}`, JSON.stringify(value));
  } catch (e) {
    console.warn('User data persist failed:', e);
  }
}
