/* ============================================================
   EduVerse AI — Complete Application Bundle
   All JS in one file, no ES6 modules needed.
   Works on file:// protocol directly.
   ============================================================ */

// ═══════════════════════════════════════════════════════════
//  MOCK DATABASE
// ═══════════════════════════════════════════════════════════
const EV = (function() {

// ── Users ──────────────────────────────────────────────────
const users = [
  {
    id:'u1', name:'Akhil Reddy', email:'akhil@eduverse.ai', password:'demo123',
    role:'learner', avatar:'🧑‍💻',
    enrolledCourses:['c1'], targetJob:'j1',
    xp:2650, level:4, streak:15, joinedDate:'2025-12-10',
    skills:{ html:96, css:92, javascript:88, react:72, nodejs:45, typescript:35, git:90, testing:40, systemDesign:20, databases:55 },
    completedLessons:['l1','l2','l3','l4','l5','l6','l7','l8'],
    badges:['b1','b2','b3','b4','b5'], dailyGoal:60, dailyProgress:42, resumeScore:68
  },
  {
    id:'u2', name:'Sarah Connor', email:'sarah@eduverse.ai', password:'demo123',
    role:'learner', avatar:'👩‍🎓',
    enrolledCourses:['c1','c2'], targetJob:'j2',
    xp:4200, level:6, streak:32, joinedDate:'2025-10-05',
    skills:{ html:98, css:95, javascript:94, react:91, nodejs:78, typescript:70, git:92, testing:65, systemDesign:50, databases:82 },
    completedLessons:['l1','l2','l3','l4','l5','l6','l7','l8','l9','l10','l11','l12'],
    badges:['b1','b2','b3','b4','b5','b6','b7','b8'], dailyGoal:90, dailyProgress:75, resumeScore:82
  },
  {
    id:'u3', name:'Alex Smith', email:'alex@eduverse.ai', password:'demo123',
    role:'learner', avatar:'👨‍💻',
    enrolledCourses:['c1'], targetJob:'j1',
    xp:1100, level:2, streak:3, joinedDate:'2026-03-15',
    skills:{ html:85, css:78, javascript:60, react:30, nodejs:15, typescript:10, git:70, testing:12, systemDesign:5, databases:35 },
    completedLessons:['l1','l2','l3','l4'],
    badges:['b1','b2'], dailyGoal:45, dailyProgress:10, resumeScore:42
  },
  {
    id:'u4', name:'Dr. Emily Watson', email:'emily@eduverse.ai', password:'demo123',
    role:'educator', avatar:'👩‍🏫', courses:['c1','c2','c3'],
    students:['u1','u2','u3'], joinedDate:'2025-08-01',
    xp:0, streak:0, skills:{}, completedLessons:[], badges:[]
  },
  {
    id:'u5', name:'John Doe', email:'john@eduverse.ai', password:'demo123',
    role:'learner', avatar:'🧑‍🎓',
    enrolledCourses:['c1'], targetJob:'j1',
    xp:1800, level:3, streak:7, joinedDate:'2026-01-20',
    skills:{ html:92, css:88, javascript:75, react:55, nodejs:30, typescript:20, git:80, testing:25, systemDesign:10, databases:40 },
    completedLessons:['l1','l2','l3','l4','l5','l6'],
    badges:['b1','b2','b3'], dailyGoal:60, dailyProgress:30, resumeScore:55
  },
  {
    id:'u6', name:'Admin User', email:'admin@eduverse.ai', password:'admin123',
    role:'admin', avatar:'🛡️', joinedDate:'2025-01-01',
    xp:0, streak:0, skills:{}, completedLessons:[], badges:[]
  }
];

// ── Jobs ───────────────────────────────────────────────────
const jobs = [
  { id:'j1', title:'Frontend Engineer', company:'Stripe', logo:'💳', location:'San Francisco / Remote',
    salary:'$130k–$165k', matchSkills:['html','css','javascript','react','typescript','git','testing'],
    description:'Build beautiful, performant payment UIs used by millions of developers worldwide.',
    requirements:['3+ years React','Strong TypeScript','Testing proficiency','System design knowledge'], color:'#6366f1' },
  { id:'j2', title:'Full-Stack Developer', company:'Vercel', logo:'▲', location:'Remote (Global)',
    salary:'$150k–$190k', matchSkills:['javascript','react','nodejs','typescript','databases','systemDesign','git','testing'],
    description:'Work on Next.js and the future of web development infrastructure.',
    requirements:['Expert JS/TS','Node.js mastery','Cloud infrastructure','Open source contributions'], color:'#8b5cf6' },
  { id:'j3', title:'Software Engineer', company:'Linear', logo:'◆', location:'Remote',
    salary:'$120k–$155k', matchSkills:['javascript','react','nodejs','databases','git','testing','systemDesign'],
    description:'Build the fastest project management tool that developers love.',
    requirements:['React proficiency','API design','Database optimization','Performance mindset'], color:'#5b21b6' },
  { id:'j4', title:'Backend Engineer', company:'Notion', logo:'📝', location:'San Francisco / Remote',
    salary:'$140k–$180k', matchSkills:['nodejs','databases','systemDesign','typescript','testing','git'],
    description:'Scale the collaboration platform used by millions of teams.',
    requirements:['Distributed systems','Database expertise','Performance optimization','API design'], color:'#06b6d4' },
  { id:'j5', title:'DevOps Engineer', company:'GitLab', logo:'🦊', location:'Remote (Global)',
    salary:'$125k–$160k', matchSkills:['git','testing','nodejs','databases','systemDesign'],
    description:'Build and maintain the CI/CD platform used by millions of developers.',
    requirements:['Docker/K8s expertise','Cloud platforms','Infrastructure as Code','Monitoring'], color:'#f59e0b' }
];

// ── Assessments ────────────────────────────────────────────
const assessments = [
  { id:'a1', title:'JavaScript Fundamentals', skill:'javascript', difficulty:'intermediate', timeLimit:600,
    questions:[
      { id:'q1', text:'What does "closure" mean in JavaScript?', options:['A function that closes a browser window','A function that retains access to its outer scope variables','A way to close event listeners','A method to seal objects'], correct:1, difficulty:2 },
      { id:'q2', text:'What is the output of: console.log(typeof null)?', options:['"null"','"undefined"','"object"','"boolean"'], correct:2, difficulty:2 },
      { id:'q3', text:'Which method does NOT mutate the original array?', options:['push()','splice()','map()','sort()'], correct:2, difficulty:2 },
      { id:'q4', text:'What does Promise.all() do?', options:['Runs promises sequentially','Runs all promises in parallel and waits for all','Returns the first resolved promise','Cancels all promises'], correct:1, difficulty:3 },
      { id:'q5', text:'What is event delegation?', options:['Removing event listeners','Attaching a single listener to a parent element','Creating custom events','Delegating events to the server'], correct:1, difficulty:3 }
    ]
  },
  { id:'a2', title:'React Mastery', skill:'react', difficulty:'intermediate', timeLimit:480,
    questions:[
      { id:'q6', text:'What hook replaces componentDidMount in functional components?', options:['useState','useRef','useEffect','useCallback'], correct:2, difficulty:2 },
      { id:'q7', text:'When does a React component re-render?', options:['Only when the page refreshes','When state or props change','Every second','Only when explicitly called'], correct:1, difficulty:1 },
      { id:'q8', text:'What is the purpose of the key prop in lists?', options:['Styling list items','Helping React identify changed items','Setting item ID attributes','Encrypting data'], correct:1, difficulty:2 },
      { id:'q9', text:'What does useMemo optimize?', options:['Network requests','Re-renders by memoizing expensive calculations','State updates','DOM manipulation'], correct:1, difficulty:3 },
      { id:'q10', text:'What is React Context used for?', options:['Local component state','Styling components','Sharing data without prop drilling','Fetching data'], correct:2, difficulty:2 }
    ]
  },
  { id:'a3', title:'HTML & CSS Fundamentals', skill:'html', difficulty:'beginner', timeLimit:420,
    questions:[
      { id:'q11', text:'Which HTML element is used for the largest heading?', options:['<h6>','<heading>','<h1>','<title>'], correct:2, difficulty:1 },
      { id:'q12', text:'What does CSS Flexbox primarily control?', options:['Page animations','1-dimensional layout (row/column)','3D transforms','Database connections'], correct:1, difficulty:1 },
      { id:'q13', text:'What is the CSS box model composed of?', options:['Content, border, margin, padding','Header, body, footer','width, height, position','margin, border only'], correct:0, difficulty:2 },
      { id:'q14', text:'What does "semantic HTML" mean?', options:['HTML with inline styles','HTML that uses meaningful element names','Minified HTML','HTML with JavaScript'], correct:1, difficulty:2 },
      { id:'q15', text:'Which CSS unit is relative to the root element font size?', options:['px','em','rem','vh'], correct:2, difficulty:2 }
    ]
  }
];

// ── Skill Graph ─────────────────────────────────────────────
const skillGraph = {
  nodes:[
    {id:'html',x:100,y:200},{id:'css',x:100,y:320},
    {id:'javascript',x:260,y:260},{id:'typescript',x:260,y:140},
    {id:'react',x:420,y:200},{id:'nodejs',x:420,y:340},
    {id:'databases',x:560,y:280},{id:'git',x:260,y:400},
    {id:'testing',x:420,y:460},{id:'systemDesign',x:620,y:160}
  ],
  edges:[
    {from:'html',to:'javascript'},{from:'css',to:'javascript'},
    {from:'javascript',to:'typescript'},{from:'javascript',to:'react'},
    {from:'javascript',to:'nodejs'},{from:'react',to:'testing'},
    {from:'nodejs',to:'databases'},{from:'nodejs',to:'testing'},
    {from:'databases',to:'systemDesign'},{from:'react',to:'systemDesign'},
    {from:'git',to:'testing'}
  ]
};

// ── Roadmap Templates ───────────────────────────────────────
const roadmapTemplates = {
  j1:{ title:'Frontend Engineer Path', phases:[
    {id:'p1',title:'Foundation',weeks:'1–4',skills:['html','css','git'],status:'completed',description:'Master HTML5 semantics, CSS layouts, and version control.'},
    {id:'p2',title:'Core JavaScript',weeks:'5–8',skills:['javascript'],status:'completed',description:'Deep dive into closures, async patterns, and ES6+ features.'},
    {id:'p3',title:'React Mastery',weeks:'9–14',skills:['react','typescript'],status:'active',description:'Component patterns, hooks, state management, and TypeScript integration.'},
    {id:'p4',title:'Testing & Quality',weeks:'15–18',skills:['testing'],status:'locked',description:'Unit testing, integration testing, E2E with Cypress.'},
    {id:'p5',title:'System Design',weeks:'19–22',skills:['systemDesign'],status:'locked',description:'Frontend architecture, performance optimization, scalability.'},
    {id:'p6',title:'Portfolio & Apply',weeks:'23–24',skills:[],status:'locked',description:'Build portfolio projects, prepare resume, and apply.'}
  ]},
  j2:{ title:'Full-Stack Developer Path', phases:[
    {id:'p1',title:'Web Foundations',weeks:'1–4',skills:['html','css','javascript','git'],status:'completed',description:'Core web technologies and version control.'},
    {id:'p2',title:'Frontend Framework',weeks:'5–10',skills:['react','typescript'],status:'active',description:'React ecosystem with TypeScript for type safety.'},
    {id:'p3',title:'Backend Development',weeks:'11–16',skills:['nodejs','databases'],status:'locked',description:'Node.js APIs, database design, and authentication.'},
    {id:'p4',title:'Advanced Topics',weeks:'17–20',skills:['testing','systemDesign'],status:'locked',description:'Testing strategies and system design principles.'}
  ]}
};

// ── Badges ─────────────────────────────────────────────────
const badges = [
  {id:'b1',name:'First Steps',icon:'🚀',description:'Complete your first lesson'},
  {id:'b2',name:'On Fire',icon:'🔥',description:'Maintain a 7-day streak'},
  {id:'b3',name:'Quiz Master',icon:'🧠',description:'Score 100% on any quiz'},
  {id:'b4',name:'HTML Pro',icon:'📄',description:'Master HTML to 90%+'},
  {id:'b5',name:'CSS Wizard',icon:'🎨',description:'Master CSS to 90%+'},
  {id:'b6',name:'JS Ninja',icon:'⚡',description:'Master JavaScript to 90%+'},
  {id:'b7',name:'React Expert',icon:'⚛️',description:'Master React to 85%+'},
  {id:'b8',name:'Full Stack',icon:'🏗️',description:'Master frontend and backend'},
  {id:'b9',name:'Streak Legend',icon:'💎',description:'30-day streak'},
  {id:'b10',name:'Job Ready',icon:'🎯',description:'Reach 80% job readiness'}
];

// ── Leaderboard ─────────────────────────────────────────────
const leaderboard = [
  {userId:'u2',rank:1,xp:4200,streak:32},
  {userId:'u1',rank:2,xp:2650,streak:15},
  {userId:'u5',rank:3,xp:1800,streak:7},
  {userId:'u3',rank:4,xp:1100,streak:3}
];

// ── Activity Feed ───────────────────────────────────────────
const activityFeed = [
  {userId:'u2',action:'completed',target:'React Router & SSR',time:'2 min ago',icon:'✅'},
  {userId:'u1',action:'scored 92%',target:'JavaScript Quiz',time:'15 min ago',icon:'📊'},
  {userId:'u5',action:'started',target:'React Component Patterns',time:'1 hr ago',icon:'📖'},
  {userId:'u3',action:'earned badge',target:'First Steps',time:'2 hr ago',icon:'🏅'},
  {userId:'u1',action:'completed',target:'ES6+ Modern Features',time:'3 hr ago',icon:'✅'},
  {userId:'u2',action:'reached',target:'Level 6',time:'5 hr ago',icon:'⬆️'}
];

// ── Tutor Responses ─────────────────────────────────────────
const tutorResponses = {
  greeting:"Hello! I'm your EduVerse AI Tutor 🤖\n\nI can help you with **coding concepts**, review your **progress**, or suggest what to study next.\n\nTry asking me about closures, React hooks, system design, or your study plan!",
  topics:{
    closures:"**Closures** are functions that remember variables from their outer scope even after that scope has finished executing.\n\n```javascript\nfunction counter() {\n  let count = 0;\n  return () => ++count;\n}\nconst inc = counter();\ninc(); // 1\ninc(); // 2\n```\n\nThe inner function *closes over* the `count` variable. This is the foundation of the **module pattern**, callbacks, and event handlers.",
    promises:"**Promises** represent the eventual result of an async operation.\n\n```javascript\nfetch('/api/data')\n  .then(res => res.json())\n  .then(data => console.log(data))\n  .catch(err => console.error(err));\n```\n\n**States:** Pending → Fulfilled or Rejected\n\n**Pro tip:** Use `async/await` for cleaner syntax:\n```javascript\nconst data = await fetch('/api/data').then(r => r.json());\n```",
    react:"**React Hooks** let you use state and lifecycle in functional components.\n\n• `useState` — Local component state\n• `useEffect` — Side effects (data fetching, subscriptions)\n• `useContext` — Access context without consumers\n• `useMemo` / `useCallback` — Performance optimization\n\n**Golden Rule:** Hooks must be called at the top level — never inside conditions or loops!",
    progress:"Based on your current skills:\n\n✅ **Strong:** HTML (96%), CSS (92%), JS (88%), Git (90%)\n⚡ **Growing:** React (72%), Databases (55%)\n🔴 **Focus needed:** Node.js (45%), TypeScript (35%), System Design (20%)\n\n**Recommendation:** Complete the React modules to unlock the Node.js path. Your frontend foundation is excellent — you're 72% ready for your target role!",
    default:"Great question! In this demo I can help with:\n\n• **JavaScript** — closures, promises, async/await\n• **React** — hooks, state management, performance\n• **System design** — architecture, scaling, databases\n• **Your progress** — skill analysis and study plans\n\nTry asking: *\"Explain closures\"*, *\"How do promises work?\"*, or *\"Analyze my progress\"*"
  },
  suggestions:['Explain closures','How do promises work?','React hooks overview','Analyze my progress','What should I study next?','System design basics']
};

// ── Resume Profiles ─────────────────────────────────────────
const resumeProfiles = {
  profile1:{
    name:'Akhil Reddy', title:'Junior Web Developer',
    skills:['HTML5','CSS3','JavaScript','Git','Responsive Design'],
    missing:['React','TypeScript','Node.js','Testing','System Design'],
    experience:'8 months freelance', score:68,
    suggestions:[
      'Add React projects to demonstrate component architecture proficiency',
      'Include TypeScript in at least one portfolio project to show type safety knowledge',
      'Quantify achievements: "Improved page load by 40%" instead of "Optimized performance"',
      'Add a section for open-source contributions or technical blog posts',
      'Remove two-column layout — ATS parsers struggle with complex formatting'
    ]
  },
  profile2:{
    name:'Sarah Connor', title:'Full-Stack Developer',
    skills:['JavaScript','TypeScript','React','Node.js','PostgreSQL','Git','Docker'],
    missing:['Kubernetes','System Design','GraphQL'],
    experience:'2 years professional', score:82,
    suggestions:[
      'Highlight system design experience in project descriptions',
      'Add GraphQL to a portfolio project for API versatility',
      'Include CI/CD pipeline setup in project documentation',
      'Add performance metrics to each project description'
    ]
  }
};

// ── Notifications ───────────────────────────────────────────
const notifications = [
  {id:'n1',userId:'u1',title:'Badge Earned! 🎨',message:'You earned the "CSS Wizard" badge! +200 XP',read:false,time:'2 min ago',icon:'🎨'},
  {id:'n2',userId:'u1',title:'Daily Goal',message:"You're 18 minutes away from today's goal!",read:false,time:'1 hr ago',icon:'⏰'},
  {id:'n3',userId:'u1',title:'New Lesson',message:'React Context API lesson is now unlocked',read:true,time:'3 hr ago',icon:'📚'},
  {id:'n4',userId:'u1',title:'Job Match',message:'Stripe posted a new Frontend Engineer role',read:true,time:'1 day ago',icon:'💼'}
];

// ── Weekly Progress ─────────────────────────────────────────
const weeklyProgress = {
  u1:{ labels:['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
    minutes:[45,60,30,75,50,90,42],
    xpGained:[120,180,80,200,150,250,100],
    lessonsCompleted:[2,3,1,3,2,4,1] }
};

const SKILL_LABELS = {
  html:'HTML5', css:'CSS3', javascript:'JavaScript', typescript:'TypeScript',
  react:'React', nodejs:'Node.js', databases:'Databases', git:'Git',
  testing:'Testing', systemDesign:'System Design'
};

// ══════════════════════════════════════════════════════════
//  STATE MANAGEMENT
// ══════════════════════════════════════════════════════════
const STATE_KEY = 'ev_state';

function getState() {
  try { return JSON.parse(localStorage.getItem(STATE_KEY)) || {}; } catch { return {}; }
}
function setState(partial) {
  localStorage.setItem(STATE_KEY, JSON.stringify({...getState(), ...partial}));
}
function isLoggedIn() { return !!getState().currentUser; }
function getCurrentUser() {
  const s = getState();
  return s.currentUser ? users.find(u => u.id === s.currentUser) : null;
}
function setCurrentUser(id) { setState({currentUser:id}); }
function clearSession() { setState({currentUser:null}); }
function getUserData(uid, key) {
  try { return JSON.parse(localStorage.getItem(`ev_${uid}_${key}`)); } catch { return null; }
}
function setUserData(uid, key, val) {
  localStorage.setItem(`ev_${uid}_${key}`, JSON.stringify(val));
}

// ══════════════════════════════════════════════════════════
//  UTILITIES
// ══════════════════════════════════════════════════════════
function skillColor(v) {
  if (v >= 85) return '#10b981';
  if (v >= 65) return '#6366f1';
  if (v >= 40) return '#f59e0b';
  return '#ef4444';
}
function matchClass(p) {
  return p >= 75 ? 'job-match-high' : p >= 50 ? 'job-match-mid' : 'job-match-low';
}
function calcJobReadiness(skills, jobId) {
  const job = jobs.find(j => j.id === jobId);
  if (!job) return 0;
  const total = job.matchSkills.length;
  const score = job.matchSkills.reduce((s, k) => s + (skills[k] || 0), 0);
  return Math.round(score / total);
}
function getLevelProgress(xp) {
  const thresholds = [0,500,1200,2000,3500,5000,7500,10000];
  let level = 0;
  for (let i = 0; i < thresholds.length; i++) { if (xp >= thresholds[i]) level = i; else break; }
  const cur = thresholds[level] || 0;
  const nxt = thresholds[level + 1] || cur + 5000;
  return { level, progress: Math.round(((xp - cur) / (nxt - cur)) * 100), next: nxt };
}
function animateCount(el, from, to, dur, suffix) {
  if (!el) return;
  const start = performance.now();
  (function step(now) {
    const p = Math.min((now - start) / dur, 1);
    const e = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(from + (to - from) * e) + (suffix || '');
    if (p < 1) requestAnimationFrame(step);
  })(start);
}
function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }
function toast(msg, type, dur) {
  dur = dur || 3500;
  let tc = document.getElementById('_ev_toast');
  if (!tc) {
    tc = document.createElement('div');
    tc.id = '_ev_toast';
    Object.assign(tc.style, {position:'fixed',bottom:'24px',right:'24px',zIndex:'9999',display:'flex',flexDirection:'column',gap:'10px'});
    document.body.appendChild(tc);
  }
  const colors = {success:'#10b981',error:'#ef4444',warning:'#f59e0b',info:'#6366f1',xp:'#8b5cf6'};
  const icons = {success:'✅',error:'❌',warning:'⚠️',info:'ℹ️',xp:'⚡'};
  const t = document.createElement('div');
  t.style.cssText = `display:flex;align-items:center;gap:10px;padding:12px 16px;border-radius:12px;background:rgba(16,16,42,0.95);backdrop-filter:blur(16px);border:1px solid ${(colors[type]||'#6366f1')}40;box-shadow:0 8px 24px rgba(0,0,0,0.4);font-family:Inter,sans-serif;font-size:13px;color:#f1f5f9;min-width:260px;animation:slideLeft 0.3s ease-out`;
  t.innerHTML = `<span style="font-size:16px">${icons[type]||'ℹ️'}</span><span>${msg}</span>`;
  tc.appendChild(t);
  setTimeout(() => { t.style.opacity='0'; t.style.transform='translateX(20px)'; t.style.transition='all 0.3s'; setTimeout(()=>t.remove(),300); }, dur);
}
function renderMarkdown(text) {
  return text
    .replace(/```[\w]*\n([\s\S]*?)```/g,'<pre><code>$1</code></pre>')
    .replace(/`([^`]+)`/g,'<code>$1</code>')
    .replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>')
    .replace(/\*(.*?)\*/g,'<em>$1</em>')
    .replace(/\n\n/g,'</p><p>')
    .replace(/\n/g,'<br>');
}
function initScrollReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, {threshold:0.1});
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

// ══════════════════════════════════════════════════════════
//  UI COMPONENTS
// ══════════════════════════════════════════════════════════
function getCurrentPage() {
  const f = location.pathname.split('/').pop() || 'index.html';
  const map = {'index.html':'landing','login.html':'login','register.html':'register','dashboard.html':'dashboard','assessment.html':'assessment','skillgraph.html':'skillgraph','roadmap.html':'roadmap','tutor.html':'tutor','resume.html':'resume','jobs.html':'jobs','educator.html':'educator','settings.html':'settings','admin.html':'admin'};
  return map[f] || 'landing';
}
function navigate(page) {
  const map = {landing:'index.html',login:'login.html',register:'register.html',dashboard:'dashboard.html',assessment:'assessment.html',skillgraph:'skillgraph.html',roadmap:'roadmap.html',tutor:'tutor.html',resume:'resume.html',jobs:'jobs.html',educator:'educator.html',settings:'settings.html',admin:'admin.html'};
  const protected_ = ['dashboard','roadmap','assessment','skillgraph','resume','jobs','tutor','settings','educator','admin'];
  if (protected_.includes(page) && !isLoggedIn()) { location.href='login.html'; return; }
  location.href = map[page] || 'index.html';
}

function renderSidebar(role) {
  const sb = document.getElementById('sidebar'); if (!sb) return;
  const user = getCurrentUser();
  const cur = getCurrentPage();
  const learnerLinks = [
    {id:'dashboard',icon:'🏠',label:'Dashboard'},
    {id:'roadmap',icon:'🗺️',label:'My Roadmap'},
    {id:'skillgraph',icon:'🕸️',label:'Skill Graph'},
    {id:'assessment',icon:'📝',label:'Assessment'},
    {id:'tutor',icon:'🤖',label:'AI Tutor',badge:'AI'},
    {id:'resume',icon:'📄',label:'Resume Analyzer'},
    {id:'jobs',icon:'💼',label:'Job Matches'}
  ];
  const educatorLinks = [{id:'educator',icon:'📊',label:'Dashboard'},{id:'dashboard',icon:'🏠',label:'Overview'}];
  const adminLinks = [{id:'admin',icon:'🛡️',label:'Admin Panel'},{id:'educator',icon:'📊',label:'Analytics'},{id:'dashboard',icon:'🏠',label:'Dashboard'}];
  const links = role==='educator'?educatorLinks:role==='admin'?adminLinks:learnerLinks;

  sb.innerHTML = `
    <div class="sidebar-header">
      <div class="nav-logo-icon">🎓</div>
      <span style="font-size:1rem;font-weight:800">EduVerse <span class="gradient-text">AI</span></span>
    </div>
    <nav class="sidebar-nav">
      <div class="sidebar-section-title">Navigation</div>
      ${links.map(l=>`<button class="sidebar-link${cur===l.id?' active':''}" onclick="navigate('${l.id}')">
        <span class="link-icon">${l.icon}</span>
        <span class="link-label">${l.label}</span>
        ${l.badge?`<span class="link-badge">${l.badge}</span>`:''}
      </button>`).join('')}
      <div class="sidebar-section-title" style="margin-top:16px">Account</div>
      <button class="sidebar-link${cur==='settings'?' active':''}" onclick="navigate('settings')">
        <span class="link-icon">⚙️</span><span class="link-label">Settings</span>
      </button>
    </nav>
    <div class="sidebar-footer">
      <div class="sidebar-user" onclick="toggleUserMenu(this)">
        <div class="sidebar-user-avatar">${user?.avatar||'🧑'}</div>
        <div class="sidebar-user-info">
          <div class="sidebar-user-name">${user?.name||'User'}</div>
          <div class="sidebar-user-role">${user?.role||'learner'}</div>
        </div>
        <span style="color:#64748b;font-size:12px">⋮</span>
      </div>
    </div>`;
}

function toggleUserMenu(anchor) {
  const existing = document.getElementById('_user_menu');
  if (existing) { existing.remove(); return; }
  const m = document.createElement('div');
  m.id = '_user_menu';
  m.style.cssText = 'position:fixed;bottom:80px;left:12px;width:220px;background:#10102a;border:1px solid rgba(255,255,255,0.1);border-radius:14px;box-shadow:0 10px 30px rgba(0,0,0,0.5);z-index:500;overflow:hidden';
  const user = getCurrentUser();
  m.innerHTML = `<div style="padding:12px 16px;border-bottom:1px solid rgba(255,255,255,0.06)">
    <div style="font-size:13px;font-weight:700">${user?.name}</div>
    <div style="font-size:11px;color:#64748b">${user?.email}</div>
  </div>
  <button class="sidebar-link" style="width:100%;border-radius:0" onclick="navigate('settings');document.getElementById('_user_menu')?.remove()"><span class="link-icon">⚙️</span><span>Settings</span></button>
  <button class="sidebar-link" style="width:100%;border-radius:0;color:#ef4444" onclick="clearSession();location.href='login.html'"><span class="link-icon">🚪</span><span>Log Out</span></button>`;
  document.body.appendChild(m);
  setTimeout(()=>{ document.addEventListener('click',function h(e){if(!m.contains(e.target)&&e.target!==anchor){m.remove();document.removeEventListener('click',h);}});},50);
}

function renderTopbar(title, user) {
  const tb = document.getElementById('topbar'); if (!tb) return;
  const userNotifs = notifications.filter(n => n.userId === user?.id).slice(0,4);
  const unread = userNotifs.filter(n=>!n.read).length;
  tb.innerHTML = `
    <div class="topbar-left">
      <button class="mobile-sidebar-toggle" onclick="document.getElementById('sidebar').classList.toggle('open');document.getElementById('sidebar-overlay').classList.toggle('open')">☰</button>
      <h1 class="topbar-title">${title}</h1>
    </div>
    <div class="topbar-right">
      <div class="topbar-search">
        <span style="color:#64748b">🔍</span>
        <input type="text" placeholder="Search lessons, topics…" style="background:none;border:none;color:#f1f5f9;font-size:13px;outline:none;width:100%" oninput="handleSearch(this.value)">
      </div>
      <div style="position:relative">
        <button class="topbar-icon-btn" onclick="toggleNotifDropdown()" style="position:relative">🔔${unread?'<span class="notif-dot"></span>':''}</button>
        <div class="notif-dropdown" id="notif-dropdown">
          <div class="notif-dropdown-header"><span>Notifications</span></div>
          ${userNotifs.map(n=>`<div class="notif-item${n.read?'':' unread'}">
            <div class="notif-item-icon">${n.icon}</div>
            <div class="notif-item-content"><div class="notif-item-title">${n.title}</div><div class="notif-item-msg">${n.message}</div><div class="notif-item-time">${n.time}</div></div>
          </div>`).join('')}
        </div>
      </div>
      <div class="avatar" style="cursor:pointer" onclick="navigate('settings')" title="${user?.name}">${user?.avatar||'🧑'}</div>
    </div>`;
  document.getElementById('sidebar-overlay')?.addEventListener('click',()=>{document.getElementById('sidebar').classList.remove('open');document.getElementById('sidebar-overlay').classList.remove('open');});
}

function toggleNotifDropdown() {
  document.getElementById('notif-dropdown')?.classList.toggle('open');
}
function handleSearch(v) { /* Global search placeholder */ }

// ══════════════════════════════════════════════════════════
//  CANVAS CHARTS
// ══════════════════════════════════════════════════════════
function drawLineChart(id, labels, datasets, opts) {
  opts = opts || {};
  const canvas = document.getElementById(id); if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.parentElement.getBoundingClientRect();
  const W = rect.width || 600, H = opts.height || 200;
  canvas.width = W*dpr; canvas.height = H*dpr;
  canvas.style.width = W+'px'; canvas.style.height = H+'px';
  ctx.scale(dpr,dpr);
  const pad = {top:20,right:20,bottom:36,left:45};
  const w = W-pad.left-pad.right, h = H-pad.top-pad.bottom;
  ctx.clearRect(0,0,W,H);
  const allVals = datasets.flatMap(d=>d.data);
  const maxVal = Math.max(...allVals)*1.1||100;
  const xStep = w/(labels.length-1);
  const getY = v => pad.top + h - (v/maxVal)*h;
  const getX = i => pad.left + i*xStep;
  // Grid
  for (let i=0;i<=5;i++) {
    const y = pad.top+(i/5)*h;
    ctx.strokeStyle='rgba(255,255,255,0.04)'; ctx.lineWidth=1;
    ctx.beginPath(); ctx.moveTo(pad.left,y); ctx.lineTo(pad.left+w,y); ctx.stroke();
    ctx.fillStyle='#64748b'; ctx.font='10px Inter,sans-serif'; ctx.textAlign='right';
    ctx.fillText(Math.round(maxVal*(1-i/5)),pad.left-6,y+3);
  }
  // X labels
  ctx.textAlign='center'; ctx.fillStyle='#64748b'; ctx.font='11px Inter,sans-serif';
  labels.forEach((l,i)=>ctx.fillText(l,getX(i),H-10));
  // Datasets
  datasets.forEach(ds=>{
    const color=ds.color||'#6366f1';
    const pts=ds.data.map((v,i)=>({x:getX(i),y:getY(v)}));
    // Fill
    ctx.save(); ctx.beginPath(); ctx.moveTo(pts[0].x,pts[0].y);
    pts.forEach((p,i)=>{ if(!i)return; ctx.bezierCurveTo(pts[i-1].x+xStep*.4,pts[i-1].y,p.x-xStep*.4,p.y,p.x,p.y); });
    ctx.lineTo(pts[pts.length-1].x,pad.top+h); ctx.lineTo(pts[0].x,pad.top+h); ctx.closePath();
    const g=ctx.createLinearGradient(0,pad.top,0,pad.top+h);
    g.addColorStop(0,color+'44'); g.addColorStop(1,color+'02');
    ctx.fillStyle=g; ctx.fill(); ctx.restore();
    // Line
    ctx.beginPath(); ctx.strokeStyle=color; ctx.lineWidth=2.5; ctx.lineJoin='round';
    pts.forEach((p,i)=>{ if(!i){ctx.moveTo(p.x,p.y);return;} ctx.bezierCurveTo(pts[i-1].x+xStep*.4,pts[i-1].y,p.x-xStep*.4,p.y,p.x,p.y); });
    ctx.stroke();
    // Dots
    pts.forEach(p=>{ ctx.beginPath(); ctx.arc(p.x,p.y,4,0,Math.PI*2); ctx.fillStyle=color; ctx.fill(); ctx.strokeStyle='rgba(11,11,26,0.9)'; ctx.lineWidth=2; ctx.stroke(); });
  });
  // Legend
  if (datasets.length>1) {
    let lx=pad.left;
    datasets.forEach(d=>{ ctx.fillStyle=d.color||'#6366f1'; ctx.fillRect(lx,6,12,4); ctx.fillStyle='#94a3b8'; ctx.font='10px Inter,sans-serif'; ctx.textAlign='left'; ctx.fillText(d.label,lx+16,12); lx+=ctx.measureText(d.label).width+36; });
  }
}

function drawRadarChart(id, labels, datasets, opts) {
  opts = opts || {};
  const canvas = document.getElementById(id); if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  const size = opts.size || 240;
  canvas.width = size*dpr; canvas.height = size*dpr;
  canvas.style.width = size+'px'; canvas.style.height = size+'px';
  ctx.scale(dpr,dpr);
  const cx=size/2, cy=size/2, r=size/2-40;
  const n=labels.length;
  const angle=i => (i/n)*Math.PI*2 - Math.PI/2;
  ctx.clearRect(0,0,size,size);
  // Rings
  for (let ri=1;ri<=5;ri++) {
    ctx.beginPath();
    for (let i=0;i<n;i++) { const a=angle(i),rr=r*ri/5; const x=cx+Math.cos(a)*rr,y=cy+Math.sin(a)*rr; i?ctx.lineTo(x,y):ctx.moveTo(x,y); }
    ctx.closePath(); ctx.strokeStyle='rgba(255,255,255,0.05)'; ctx.stroke();
  }
  // Spokes & labels
  labels.forEach((l,i)=>{
    const a=angle(i);
    ctx.beginPath(); ctx.moveTo(cx,cy); ctx.lineTo(cx+Math.cos(a)*r,cy+Math.sin(a)*r);
    ctx.strokeStyle='rgba(255,255,255,0.07)'; ctx.stroke();
    const lx=cx+Math.cos(a)*(r+18), ly=cy+Math.sin(a)*(r+18);
    ctx.fillStyle='#64748b'; ctx.font='10px Inter,sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle';
    ctx.fillText(l,lx,ly);
  });
  // Datasets
  datasets.forEach(ds=>{
    ctx.beginPath();
    ds.data.forEach((v,i)=>{ const a=angle(i),rr=r*(v/100); const x=cx+Math.cos(a)*rr,y=cy+Math.sin(a)*rr; i?ctx.lineTo(x,y):ctx.moveTo(x,y); });
    ctx.closePath();
    ctx.fillStyle=ds.color+'22'; ctx.fill();
    ctx.strokeStyle=ds.color; ctx.lineWidth=2; ctx.stroke();
  });
}

function drawDonutChart(id, segments, opts) {
  opts = opts || {};
  const canvas = document.getElementById(id); if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  const size = opts.size || 160;
  canvas.width = size*dpr; canvas.height = size*dpr;
  canvas.style.width = size+'px'; canvas.style.height = size+'px';
  ctx.scale(dpr,dpr);
  const cx=size/2, cy=size/2, r=size/2-14, inner=r*0.62;
  let start=-Math.PI/2;
  const total=segments.reduce((s,sg)=>s+sg.value,0)||1;
  ctx.clearRect(0,0,size,size);
  segments.forEach(sg=>{
    const sweep=(sg.value/total)*Math.PI*2;
    ctx.beginPath(); ctx.moveTo(cx,cy); ctx.arc(cx,cy,r,start,start+sweep);
    ctx.fillStyle=sg.color; ctx.fill();
    start+=sweep;
  });
  // Hole
  ctx.beginPath(); ctx.arc(cx,cy,inner,0,Math.PI*2);
  ctx.fillStyle='#0b0b1a'; ctx.fill();
  // Center text
  if (opts.centerText) {
    ctx.fillStyle='#f1f5f9'; ctx.font=`bold ${opts.centerFontSize||20}px Inter,sans-serif`;
    ctx.textAlign='center'; ctx.textBaseline='middle';
    ctx.fillText(opts.centerText,cx,cy-(opts.centerLabel?8:0));
  }
  if (opts.centerLabel) {
    ctx.fillStyle='#64748b'; ctx.font='10px Inter,sans-serif';
    ctx.fillText(opts.centerLabel,cx,cy+14);
  }
}

// ══════════════════════════════════════════════════════════
//  AUTH GUARD
// ══════════════════════════════════════════════════════════
function requireAuth() {
  if (!isLoggedIn()) { location.href='login.html'; return false; }
  return true;
}

// Public API
return {
  // Data
  users, jobs, assessments, skillGraph, roadmapTemplates, badges,
  leaderboard, activityFeed, tutorResponses, resumeProfiles,
  notifications, weeklyProgress, SKILL_LABELS,
  // State
  getState, setState, isLoggedIn, getCurrentUser, setCurrentUser, clearSession,
  getUserData, setUserData,
  // Utils
  skillColor, matchClass, calcJobReadiness, getLevelProgress,
  animateCount, sleep, toast, renderMarkdown, initScrollReveal,
  // UI
  getCurrentPage, navigate, renderSidebar, renderTopbar, toggleUserMenu, toggleNotifDropdown,
  // Charts
  drawLineChart, drawRadarChart, drawDonutChart,
  // Auth
  requireAuth
};

})(); // end IIFE

// ── Expose functions needed by HTML onclick= attributes as globals ──
window.navigate          = EV.navigate;
window.toggleUserMenu    = EV.toggleUserMenu;
window.toggleNotifDropdown = EV.toggleNotifDropdown;
window.handleSearch      = function(){};   // placeholder – override per-page if needed
