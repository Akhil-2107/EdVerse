/* ============================================================
   EduVerse AI — Mock Database
   All application data lives here. No backend required.
   ============================================================ */

// ─── USERS ──────────────────────────────────────────────────
export const users = [
  {
    id: 'u1',
    name: 'Akhil Reddy',
    email: 'akhil@eduverse.ai',
    password: 'demo123',
    role: 'learner',
    avatar: '🧑‍💻',
    enrolledCourses: ['c1'],
    targetJob: 'j1',
    xp: 2650,
    level: 4,
    streak: 15,
    joinedDate: '2025-12-10',
    darkMode: false,
    skills: {
      html: 96, css: 92, javascript: 88, react: 72, nodejs: 45,
      typescript: 35, git: 90, testing: 40, systemDesign: 20, databases: 55
    },
    completedLessons: ['l1','l2','l3','l4','l5','l6','l7','l8'],
    completedQuizzes: ['q1','q2','q3'],
    badges: ['b1','b2','b3','b4','b5'],
    dailyGoal: 60, // minutes
    dailyProgress: 42,
    resumeScore: 68
  },
  {
    id: 'u2',
    name: 'Sarah Connor',
    email: 'sarah@eduverse.ai',
    password: 'demo123',
    role: 'learner',
    avatar: '👩‍🎓',
    enrolledCourses: ['c1','c2'],
    targetJob: 'j2',
    xp: 4200,
    level: 6,
    streak: 32,
    joinedDate: '2025-10-05',
    darkMode: true,
    skills: {
      html: 98, css: 95, javascript: 94, react: 91, nodejs: 78,
      typescript: 70, git: 92, testing: 65, systemDesign: 50, databases: 82
    },
    completedLessons: ['l1','l2','l3','l4','l5','l6','l7','l8','l9','l10','l11','l12'],
    completedQuizzes: ['q1','q2','q3','q4','q5'],
    badges: ['b1','b2','b3','b4','b5','b6','b7','b8'],
    dailyGoal: 90,
    dailyProgress: 75,
    resumeScore: 82
  },
  {
    id: 'u3',
    name: 'Alex Smith',
    email: 'alex@eduverse.ai',
    password: 'demo123',
    role: 'learner',
    avatar: '👨‍💻',
    enrolledCourses: ['c1'],
    targetJob: 'j1',
    xp: 1100,
    level: 2,
    streak: 3,
    joinedDate: '2026-03-15',
    darkMode: false,
    skills: {
      html: 85, css: 78, javascript: 60, react: 30, nodejs: 15,
      typescript: 10, git: 70, testing: 12, systemDesign: 5, databases: 35
    },
    completedLessons: ['l1','l2','l3','l4'],
    completedQuizzes: ['q1'],
    badges: ['b1','b2'],
    dailyGoal: 45,
    dailyProgress: 10,
    resumeScore: 42
  },
  {
    id: 'u4',
    name: 'Dr. Emily Watson',
    email: 'emily@eduverse.ai',
    password: 'demo123',
    role: 'educator',
    avatar: '👩‍🏫',
    courses: ['c1','c2','c3'],
    students: ['u1','u2','u3','u5'],
    joinedDate: '2025-08-01'
  },
  {
    id: 'u5',
    name: 'John Doe',
    email: 'john@eduverse.ai',
    password: 'demo123',
    role: 'learner',
    avatar: '🧑‍🎓',
    enrolledCourses: ['c1'],
    targetJob: 'j3',
    xp: 1800,
    level: 3,
    streak: 7,
    joinedDate: '2026-01-20',
    darkMode: false,
    skills: {
      html: 90, css: 85, javascript: 75, react: 55, nodejs: 40,
      typescript: 25, git: 88, testing: 30, systemDesign: 15, databases: 50
    },
    completedLessons: ['l1','l2','l3','l4','l5','l6'],
    completedQuizzes: ['q1','q2'],
    badges: ['b1','b2','b3'],
    dailyGoal: 60,
    dailyProgress: 55,
    resumeScore: 55
  },
  {
    id: 'u6',
    name: 'Admin',
    email: 'admin@eduverse.ai',
    password: 'admin123',
    role: 'admin',
    avatar: '🛡️',
    joinedDate: '2025-01-01'
  }
];

// ─── COURSES ────────────────────────────────────────────────
export const courses = [
  {
    id: 'c1',
    title: 'Full-Stack Web Development',
    description: 'Master modern web development from HTML to system design. Build production-grade applications with React, Node.js, and databases.',
    icon: '🌐',
    color: '#6366f1',
    duration: '24 weeks',
    difficulty: 'Intermediate',
    enrolled: 1247,
    rating: 4.8,
    instructor: 'u4',
    modules: [
      { id: 'm1', title: 'HTML & CSS Fundamentals', lessons: ['l1','l2','l3'], quizId: 'q1' },
      { id: 'm2', title: 'JavaScript Deep Dive', lessons: ['l4','l5','l6'], quizId: 'q2' },
      { id: 'm3', title: 'React Ecosystem', lessons: ['l7','l8','l9'], quizId: 'q3' },
      { id: 'm4', title: 'Node.js & APIs', lessons: ['l10','l11','l12'], quizId: 'q4' },
      { id: 'm5', title: 'Databases & ORM', lessons: ['l13','l14'], quizId: 'q5' },
      { id: 'm6', title: 'System Design', lessons: ['l15','l16'], quizId: 'q6' }
    ],
    skills: ['html','css','javascript','react','nodejs','typescript','databases','systemDesign','git','testing']
  },
  {
    id: 'c2',
    title: 'Data Science & Machine Learning',
    description: 'Learn data analysis, visualization, and machine learning with Python. From pandas to deep learning frameworks.',
    icon: '🤖',
    color: '#8b5cf6',
    duration: '20 weeks',
    difficulty: 'Advanced',
    enrolled: 893,
    rating: 4.7,
    instructor: 'u4',
    modules: [
      { id: 'm7', title: 'Python Foundations', lessons: ['l17','l18'], quizId: 'q7' },
      { id: 'm8', title: 'Data Analysis', lessons: ['l19','l20'], quizId: 'q8' },
      { id: 'm9', title: 'Machine Learning', lessons: ['l21','l22'], quizId: 'q9' }
    ],
    skills: ['python','pandas','numpy','sklearn','tensorflow','sql','statistics','dataViz']
  },
  {
    id: 'c3',
    title: 'Cloud & DevOps Engineering',
    description: 'Master cloud platforms, CI/CD pipelines, containerization, and infrastructure as code.',
    icon: '☁️',
    color: '#06b6d4',
    duration: '16 weeks',
    difficulty: 'Advanced',
    enrolled: 654,
    rating: 4.6,
    instructor: 'u4',
    modules: [
      { id: 'm10', title: 'Docker & Containers', lessons: ['l23','l24'], quizId: 'q10' },
      { id: 'm11', title: 'AWS Fundamentals', lessons: ['l25','l26'], quizId: 'q11' },
      { id: 'm12', title: 'CI/CD Pipelines', lessons: ['l27','l28'], quizId: 'q12' }
    ],
    skills: ['docker','kubernetes','aws','terraform','cicd','linux','networking']
  }
];

// ─── LESSONS ────────────────────────────────────────────────
export const lessons = [
  { id: 'l1', title: 'Semantic HTML5', type: 'reading', duration: 15, xp: 50, skill: 'html', content: 'Learn the building blocks of the web with semantic HTML5 elements, accessibility best practices, and document structure.' },
  { id: 'l2', title: 'CSS Flexbox & Grid', type: 'interactive', duration: 25, xp: 75, skill: 'css', content: 'Master modern CSS layout techniques including Flexbox for 1D layouts and Grid for 2D layouts.' },
  { id: 'l3', title: 'Responsive Design Patterns', type: 'project', duration: 40, xp: 120, skill: 'css', content: 'Build mobile-first responsive layouts using media queries, fluid typography, and container queries.' },
  { id: 'l4', title: 'JavaScript Closures & Scope', type: 'reading', duration: 20, xp: 80, skill: 'javascript', content: 'Understand lexical scope, closures, execution contexts, and the JavaScript memory model.' },
  { id: 'l5', title: 'Async JavaScript Patterns', type: 'interactive', duration: 30, xp: 100, skill: 'javascript', content: 'Master callbacks, promises, async/await, and the event loop for handling asynchronous operations.' },
  { id: 'l6', title: 'ES6+ Modern Features', type: 'reading', duration: 20, xp: 80, skill: 'javascript', content: 'Destructuring, spread operator, template literals, modules, iterators, generators, and more.' },
  { id: 'l7', title: 'React Component Patterns', type: 'interactive', duration: 35, xp: 110, skill: 'react', content: 'Learn functional components, hooks, context API, and component composition patterns.' },
  { id: 'l8', title: 'State Management with Redux', type: 'reading', duration: 25, xp: 90, skill: 'react', content: 'Understand Redux Toolkit, slices, async thunks, and global state management strategies.' },
  { id: 'l9', title: 'React Router & SSR', type: 'project', duration: 45, xp: 150, skill: 'react', content: 'Build multi-page React applications with client-side routing and server-side rendering concepts.' },
  { id: 'l10', title: 'Node.js Fundamentals', type: 'reading', duration: 20, xp: 80, skill: 'nodejs', content: 'Event loop, streams, buffers, modules system, and building CLI tools with Node.js.' },
  { id: 'l11', title: 'REST API with Express', type: 'interactive', duration: 35, xp: 120, skill: 'nodejs', content: 'Build RESTful APIs with Express.js including routing, middleware, validation, and error handling.' },
  { id: 'l12', title: 'Authentication & Security', type: 'project', duration: 40, xp: 140, skill: 'nodejs', content: 'Implement JWT authentication, OAuth, rate limiting, CORS, and security best practices.' },
  { id: 'l13', title: 'SQL & PostgreSQL', type: 'interactive', duration: 30, xp: 100, skill: 'databases', content: 'Relational database design, SQL queries, joins, indexes, and PostgreSQL-specific features.' },
  { id: 'l14', title: 'MongoDB & Mongoose', type: 'reading', duration: 25, xp: 90, skill: 'databases', content: 'NoSQL concepts, document modeling, aggregation pipelines, and Mongoose ODM.' },
  { id: 'l15', title: 'Scalable Architecture', type: 'reading', duration: 30, xp: 110, skill: 'systemDesign', content: 'Load balancing, caching strategies, message queues, and microservice patterns.' },
  { id: 'l16', title: 'System Design Interview Prep', type: 'project', duration: 50, xp: 180, skill: 'systemDesign', content: 'Design URL shorteners, chat systems, and news feeds at scale with detailed trade-off analysis.' },
  { id: 'l17', title: 'Python Core', type: 'reading', duration: 20, xp: 70, skill: 'python', content: 'Python syntax, data structures, OOP, and Pythonic idioms.' },
  { id: 'l18', title: 'Advanced Python', type: 'interactive', duration: 25, xp: 90, skill: 'python', content: 'Decorators, generators, context managers, metaclasses, and performance optimization.' },
  { id: 'l19', title: 'Pandas & NumPy', type: 'interactive', duration: 30, xp: 100, skill: 'pandas', content: 'Data manipulation, cleaning, transformation, and numerical computing.' },
  { id: 'l20', title: 'Data Visualization', type: 'project', duration: 35, xp: 120, skill: 'dataViz', content: 'Create stunning visualizations with Matplotlib, Seaborn, and Plotly.' },
  { id: 'l21', title: 'ML Fundamentals', type: 'reading', duration: 30, xp: 110, skill: 'sklearn', content: 'Supervised and unsupervised learning, model evaluation, and scikit-learn pipelines.' },
  { id: 'l22', title: 'Deep Learning', type: 'interactive', duration: 40, xp: 150, skill: 'tensorflow', content: 'Neural networks, CNNs, RNNs, transfer learning with TensorFlow and Keras.' },
  { id: 'l23', title: 'Docker Essentials', type: 'interactive', duration: 25, xp: 90, skill: 'docker', content: 'Containers, images, Dockerfiles, multi-stage builds, and Docker Compose.' },
  { id: 'l24', title: 'Kubernetes Basics', type: 'reading', duration: 30, xp: 110, skill: 'kubernetes', content: 'Pods, deployments, services, ingress, and Helm charts.' },
  { id: 'l25', title: 'AWS Core Services', type: 'reading', duration: 25, xp: 90, skill: 'aws', content: 'EC2, S3, Lambda, RDS, and IAM fundamentals.' },
  { id: 'l26', title: 'Serverless Architecture', type: 'project', duration: 40, xp: 140, skill: 'aws', content: 'Build serverless applications with Lambda, API Gateway, and DynamoDB.' },
  { id: 'l27', title: 'GitHub Actions', type: 'interactive', duration: 20, xp: 80, skill: 'cicd', content: 'Automate workflows with GitHub Actions, build pipelines, and deployment automation.' },
  { id: 'l28', title: 'Infrastructure as Code', type: 'project', duration: 35, xp: 130, skill: 'terraform', content: 'Terraform modules, state management, and cloud infrastructure provisioning.' }
];

// ─── ASSESSMENTS ────────────────────────────────────────────
export const assessments = [
  {
    id: 'q1', title: 'HTML & CSS Assessment', skill: 'html', difficulty: 'beginner', timeLimit: 600,
    questions: [
      { id: 'qq1', text: 'What does the <main> element represent in HTML5?', options: ['The primary content area','A navigation section','A sidebar','A footer'], correct: 0, difficulty: 1 },
      { id: 'qq2', text: 'Which CSS property creates a flexible container?', options: ['display: block','display: flex','display: grid','display: table'], correct: 1, difficulty: 1 },
      { id: 'qq3', text: 'What is the purpose of the "alt" attribute on images?', options: ['Styling','Accessibility','Performance','Layout'], correct: 1, difficulty: 1 },
      { id: 'qq4', text: 'Which selector has the highest specificity?', options: ['.class','#id','element','*'], correct: 1, difficulty: 2 },
      { id: 'qq5', text: 'What does "box-sizing: border-box" do?', options: ['Adds animation','Includes padding/border in width','Removes margins','Creates shadows'], correct: 1, difficulty: 2 }
    ]
  },
  {
    id: 'q2', title: 'JavaScript Fundamentals', skill: 'javascript', difficulty: 'intermediate', timeLimit: 900,
    questions: [
      { id: 'qq6', text: 'What is a closure in JavaScript?', options: ['A design pattern','A function with access to outer scope','A loop type','An error handler'], correct: 1, difficulty: 2 },
      { id: 'qq7', text: 'What does "Promise.all()" do?', options: ['Runs promises sequentially','Resolves when all promises resolve','Cancels promises','Creates a new promise'], correct: 1, difficulty: 2 },
      { id: 'qq8', text: 'What is the event loop responsible for?', options: ['DOM rendering','Managing async callbacks','Memory allocation','Variable hoisting'], correct: 1, difficulty: 3 },
      { id: 'qq9', text: 'What is the output of typeof null?', options: ['"null"','"undefined"','"object"','"boolean"'], correct: 2, difficulty: 2 },
      { id: 'qq10', text: 'Which method creates a shallow copy of an array?', options: ['Array.from()','splice()','push()','sort()'], correct: 0, difficulty: 2 }
    ]
  },
  {
    id: 'q3', title: 'React Proficiency', skill: 'react', difficulty: 'intermediate', timeLimit: 900,
    questions: [
      { id: 'qq11', text: 'What hook replaces componentDidMount?', options: ['useState','useEffect','useRef','useMemo'], correct: 1, difficulty: 2 },
      { id: 'qq12', text: 'What is the purpose of React.memo()?', options: ['State management','Memoize components','Error boundary','Routing'], correct: 1, difficulty: 2 },
      { id: 'qq13', text: 'How do you pass data deep without prop drilling?', options: ['Redux only','Context API','Local state','CSS variables'], correct: 1, difficulty: 2 },
      { id: 'qq14', text: 'What does useCallback do?', options: ['Caches a function reference','Creates callbacks','Handles errors','Manages state'], correct: 0, difficulty: 3 },
      { id: 'qq15', text: 'Which pattern helps share logic between components?', options: ['Custom hooks','Inline styles','Global variables','DOM manipulation'], correct: 0, difficulty: 3 }
    ]
  },
  {
    id: 'q4', title: 'Node.js & APIs', skill: 'nodejs', difficulty: 'intermediate', timeLimit: 900,
    questions: [
      { id: 'qq16', text: 'What is Express middleware?', options: ['A database','Functions that process requests','A template engine','A testing tool'], correct: 1, difficulty: 2 },
      { id: 'qq17', text: 'What does JWT stand for?', options: ['JavaScript Web Token','JSON Web Token','Java Web Tool','JSON Web Type'], correct: 1, difficulty: 1 },
      { id: 'qq18', text: 'What HTTP method is used to update a resource?', options: ['GET','POST','PUT','DELETE'], correct: 2, difficulty: 1 },
      { id: 'qq19', text: 'What is CORS?', options: ['A database','Cross-Origin Resource Sharing','A CSS framework','A Node module'], correct: 1, difficulty: 2 },
      { id: 'qq20', text: 'What is the purpose of rate limiting?', options: ['Speed up APIs','Prevent abuse','Add caching','Handle errors'], correct: 1, difficulty: 2 }
    ]
  },
  {
    id: 'q5', title: 'Databases', skill: 'databases', difficulty: 'intermediate', timeLimit: 600,
    questions: [
      { id: 'qq21', text: 'What is database normalization?', options: ['Removing all data','Organizing data to reduce redundancy','Adding indexes','Backing up data'], correct: 1, difficulty: 2 },
      { id: 'qq22', text: 'What does SQL JOIN do?', options: ['Deletes rows','Combines rows from tables','Creates tables','Adds columns'], correct: 1, difficulty: 1 },
      { id: 'qq23', text: 'What is an index in a database?', options: ['Primary key','Speed lookup structure','Foreign key','View'], correct: 1, difficulty: 2 },
      { id: 'qq24', text: 'What is the CAP theorem?', options: ['Consistency, Availability, Partition tolerance','Create, Alter, Process','Cache, Access, Performance','Connect, Authenticate, Publish'], correct: 0, difficulty: 3 },
      { id: 'qq25', text: 'When would you choose NoSQL over SQL?', options: ['Always','For flexible schemas and horizontal scaling','For complex joins','For small datasets'], correct: 1, difficulty: 3 }
    ]
  },
  {
    id: 'q6', title: 'System Design', skill: 'systemDesign', difficulty: 'advanced', timeLimit: 1200,
    questions: [
      { id: 'qq26', text: 'What is horizontal scaling?', options: ['Adding more RAM','Adding more servers','Upgrading CPU','Compressing data'], correct: 1, difficulty: 2 },
      { id: 'qq27', text: 'What is a CDN used for?', options: ['Database storage','Content delivery close to users','Authentication','Logging'], correct: 1, difficulty: 1 },
      { id: 'qq28', text: 'What is the purpose of a load balancer?', options: ['Store data','Distribute traffic across servers','Encrypt data','Monitor logs'], correct: 1, difficulty: 2 },
      { id: 'qq29', text: 'What caching strategy serves stale data while updating?', options: ['Write-through','Cache-aside','Stale-while-revalidate','Write-back'], correct: 2, difficulty: 3 },
      { id: 'qq30', text: 'What is eventual consistency?', options: ['Instant sync','Data syncs over time','No consistency','Strong consistency'], correct: 1, difficulty: 3 }
    ]
  }
];

// ─── SKILL GRAPH ────────────────────────────────────────────
export const skillGraph = {
  nodes: [
    { id: 'html', label: 'HTML5', group: 'frontend', x: 100, y: 200 },
    { id: 'css', label: 'CSS3', group: 'frontend', x: 100, y: 320 },
    { id: 'javascript', label: 'JavaScript', group: 'frontend', x: 260, y: 260 },
    { id: 'typescript', label: 'TypeScript', group: 'frontend', x: 260, y: 140 },
    { id: 'react', label: 'React', group: 'frontend', x: 420, y: 200 },
    { id: 'nodejs', label: 'Node.js', group: 'backend', x: 420, y: 340 },
    { id: 'databases', label: 'Databases', group: 'backend', x: 560, y: 280 },
    { id: 'git', label: 'Git', group: 'tools', x: 260, y: 400 },
    { id: 'testing', label: 'Testing', group: 'tools', x: 420, y: 460 },
    { id: 'systemDesign', label: 'System Design', group: 'advanced', x: 620, y: 160 }
  ],
  edges: [
    { from: 'html', to: 'css' },
    { from: 'html', to: 'javascript' },
    { from: 'css', to: 'javascript' },
    { from: 'javascript', to: 'typescript' },
    { from: 'javascript', to: 'react' },
    { from: 'javascript', to: 'nodejs' },
    { from: 'react', to: 'testing' },
    { from: 'nodejs', to: 'databases' },
    { from: 'nodejs', to: 'testing' },
    { from: 'react', to: 'systemDesign' },
    { from: 'databases', to: 'systemDesign' },
    { from: 'git', to: 'testing' }
  ]
};

// ─── JOBS ───────────────────────────────────────────────────
export const jobs = [
  {
    id: 'j1', title: 'Frontend Engineer', company: 'Stripe', logo: '💳', location: 'San Francisco / Remote',
    salary: '$130k – $165k', matchSkills: ['html','css','javascript','react','typescript','git','testing'],
    description: 'Build beautiful, performant payment UIs used by millions of developers worldwide.',
    requirements: ['3+ years React experience','Strong TypeScript skills','Testing proficiency','System design knowledge'],
    color: '#6366f1'
  },
  {
    id: 'j2', title: 'Full-Stack Developer', company: 'Vercel', logo: '▲', location: 'Remote (Global)',
    salary: '$150k – $190k', matchSkills: ['javascript','react','nodejs','typescript','databases','systemDesign','git','testing'],
    description: 'Work on Next.js, Turbopack, and the future of web development infrastructure.',
    requirements: ['Expert JavaScript/TypeScript','Node.js mastery','Cloud infrastructure experience','Open source contributions'],
    color: '#000000'
  },
  {
    id: 'j3', title: 'Software Engineer', company: 'Linear', logo: '◆', location: 'Remote',
    salary: '$120k – $155k', matchSkills: ['javascript','react','nodejs','databases','git','testing','systemDesign'],
    description: 'Build the fastest project management tool that developers love.',
    requirements: ['React proficiency','API design experience','Database optimization','Performance mindset'],
    color: '#5b21b6'
  },
  {
    id: 'j4', title: 'Backend Engineer', company: 'Notion', logo: '📝', location: 'San Francisco / Remote',
    salary: '$140k – $180k', matchSkills: ['nodejs','databases','systemDesign','typescript','testing','git'],
    description: 'Scale the collaboration platform used by millions of teams.',
    requirements: ['Distributed systems experience','Database expertise','Performance optimization','API design'],
    color: '#1a1a2e'
  },
  {
    id: 'j5', title: 'DevOps Engineer', company: 'GitLab', logo: '🦊', location: 'Remote (Global)',
    salary: '$125k – $160k', matchSkills: ['docker','kubernetes','aws','terraform','cicd','linux','networking'],
    description: 'Build and maintain the CI/CD platform used by millions of developers.',
    requirements: ['Kubernetes expertise','Cloud platform experience','Infrastructure as Code','Monitoring & observability'],
    color: '#fc6d26'
  }
];

// ─── ROADMAP TEMPLATES ──────────────────────────────────────
export const roadmapTemplates = {
  j1: {
    title: 'Frontend Engineer Path',
    phases: [
      { id: 'p1', title: 'Foundation', weeks: '1-4', skills: ['html','css','git'], status: 'completed', description: 'Master HTML5 semantics, CSS layouts, and version control.' },
      { id: 'p2', title: 'Core JavaScript', weeks: '5-8', skills: ['javascript'], status: 'completed', description: 'Deep dive into closures, async patterns, and ES6+ features.' },
      { id: 'p3', title: 'React Mastery', weeks: '9-14', skills: ['react','typescript'], status: 'active', description: 'Component patterns, hooks, state management, and TypeScript integration.' },
      { id: 'p4', title: 'Testing & Quality', weeks: '15-18', skills: ['testing'], status: 'locked', description: 'Unit testing, integration testing, E2E with Cypress, and TDD methodology.' },
      { id: 'p5', title: 'System Design', weeks: '19-22', skills: ['systemDesign'], status: 'locked', description: 'Frontend architecture, performance optimization, and scalability patterns.' },
      { id: 'p6', title: 'Portfolio & Apply', weeks: '23-24', skills: [], status: 'locked', description: 'Build portfolio projects, prepare resume, and start applying.' }
    ]
  },
  j2: {
    title: 'Full-Stack Developer Path',
    phases: [
      { id: 'p1', title: 'Web Foundations', weeks: '1-4', skills: ['html','css','javascript','git'], status: 'completed', description: 'Core web technologies and version control.' },
      { id: 'p2', title: 'Frontend Framework', weeks: '5-10', skills: ['react','typescript'], status: 'active', description: 'React ecosystem with TypeScript for type safety.' },
      { id: 'p3', title: 'Backend Development', weeks: '11-16', skills: ['nodejs','databases'], status: 'locked', description: 'Node.js APIs, database design, and authentication.' },
      { id: 'p4', title: 'Advanced Topics', weeks: '17-20', skills: ['testing','systemDesign'], status: 'locked', description: 'Testing strategies and system design principles.' }
    ]
  },
  j3: {
    title: 'Software Engineer Path',
    phases: [
      { id: 'p1', title: 'Programming Basics', weeks: '1-6', skills: ['html','css','javascript','git'], status: 'completed', description: 'Solid programming foundation.' },
      { id: 'p2', title: 'Framework & Backend', weeks: '7-14', skills: ['react','nodejs'], status: 'active', description: 'Full-stack development skills.' },
      { id: 'p3', title: 'Data & Architecture', weeks: '15-20', skills: ['databases','systemDesign','testing'], status: 'locked', description: 'Database mastery and system design.' }
    ]
  }
};

// ─── BADGES & ACHIEVEMENTS ──────────────────────────────────
export const badges = [
  { id: 'b1', name: 'First Steps', icon: '🚀', description: 'Complete your first lesson', xpReward: 50, criteria: 'completedLessons >= 1' },
  { id: 'b2', name: 'On Fire', icon: '🔥', description: 'Maintain a 7-day streak', xpReward: 100, criteria: 'streak >= 7' },
  { id: 'b3', name: 'Quiz Master', icon: '🧠', description: 'Score 100% on any quiz', xpReward: 150, criteria: 'perfectQuiz' },
  { id: 'b4', name: 'HTML Pro', icon: '📄', description: 'Master HTML skills to 90%+', xpReward: 200, criteria: 'skills.html >= 90' },
  { id: 'b5', name: 'CSS Wizard', icon: '🎨', description: 'Master CSS skills to 90%+', xpReward: 200, criteria: 'skills.css >= 90' },
  { id: 'b6', name: 'JS Ninja', icon: '⚡', description: 'Master JavaScript to 90%+', xpReward: 250, criteria: 'skills.javascript >= 90' },
  { id: 'b7', name: 'React Expert', icon: '⚛️', description: 'Master React to 85%+', xpReward: 300, criteria: 'skills.react >= 85' },
  { id: 'b8', name: 'Full Stack', icon: '🏗️', description: 'Master both frontend and backend', xpReward: 500, criteria: 'fullstack' },
  { id: 'b9', name: 'Streak Legend', icon: '💎', description: 'Maintain a 30-day streak', xpReward: 300, criteria: 'streak >= 30' },
  { id: 'b10', name: 'Job Ready', icon: '🎯', description: 'Reach 80% job readiness', xpReward: 500, criteria: 'jobReadiness >= 80' }
];

// ─── LEADERBOARD ────────────────────────────────────────────
export const leaderboard = [
  { userId: 'u2', rank: 1, xp: 4200, streak: 32, badges: 8 },
  { userId: 'u1', rank: 2, xp: 2650, streak: 15, badges: 5 },
  { userId: 'u5', rank: 3, xp: 1800, streak: 7, badges: 3 },
  { userId: 'u3', rank: 4, xp: 1100, streak: 3, badges: 2 }
];

// ─── NOTIFICATIONS ──────────────────────────────────────────
export const notifications = [
  { id: 'n1', userId: 'u1', type: 'achievement', title: 'Badge Earned!', message: 'You earned the "CSS Wizard" badge! +200 XP', read: false, time: '2 min ago', icon: '🎨' },
  { id: 'n2', userId: 'u1', type: 'reminder', title: 'Daily Goal', message: 'You\'re 18 minutes away from today\'s goal!', read: false, time: '1 hr ago', icon: '⏰' },
  { id: 'n3', userId: 'u1', type: 'course', title: 'New Lesson Available', message: 'React Context API lesson is now unlocked', read: true, time: '3 hr ago', icon: '📚' },
  { id: 'n4', userId: 'u1', type: 'job', title: 'New Job Match', message: 'Stripe posted a new Frontend Engineer role matching your skills', read: true, time: '1 day ago', icon: '💼' },
  { id: 'n5', userId: 'u1', type: 'streak', title: 'Streak Alert', message: 'Keep going! You\'re on a 15-day streak', read: true, time: '1 day ago', icon: '🔥' }
];

// ─── WEEKLY PROGRESS DATA (for charts) ─────────────────────
export const weeklyProgress = {
  u1: {
    labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
    minutes: [45, 60, 30, 75, 50, 90, 42],
    xpGained: [120, 180, 80, 200, 150, 250, 100],
    lessonsCompleted: [2, 3, 1, 3, 2, 4, 1]
  }
};

// ─── AI TUTOR RESPONSES ─────────────────────────────────────
export const tutorResponses = {
  greeting: "Hello! I'm your AI learning assistant. I can help you with coding concepts, review your progress, or suggest what to study next. What would you like help with?",
  topics: {
    'closures': "**Closures** are functions that remember the variables from their outer scope even after that scope has finished executing.\n\n```javascript\nfunction counter() {\n  let count = 0;\n  return () => ++count;\n}\nconst inc = counter();\ninc(); // 1\ninc(); // 2\n```\n\nThe inner function \"closes over\" the `count` variable. This is fundamental to JavaScript's module pattern, event handlers, and callbacks.",
    'promises': "**Promises** represent the eventual result of an async operation.\n\n```javascript\nfetch('/api/data')\n  .then(res => res.json())\n  .then(data => console.log(data))\n  .catch(err => console.error(err));\n```\n\n**Key states:** Pending → Fulfilled or Rejected\n\n**Pro tip:** Use `async/await` for cleaner syntax:\n```javascript\nconst data = await fetch('/api/data').then(r => r.json());\n```",
    'react hooks': "**React Hooks** let you use state and lifecycle features in functional components.\n\n• `useState` — Local state\n• `useEffect` — Side effects (fetch data, subscriptions)\n• `useContext` — Access context without consumers\n• `useRef` — Mutable refs that persist across renders\n• `useMemo` / `useCallback` — Performance optimization\n\nThe key rule: **Hooks must be called at the top level**, never inside conditions or loops.",
    'system design': "**System Design** is about building scalable, reliable systems.\n\nKey concepts:\n1. **Load Balancing** — Distribute traffic across servers\n2. **Caching** — Redis, CDN, browser cache\n3. **Database Sharding** — Split data across servers\n4. **Message Queues** — Kafka, RabbitMQ for async processing\n5. **Microservices** — Independent, deployable services\n\nAlways start with requirements → estimate scale → design components → address bottlenecks.",
    'progress': "Based on your current skills, here's my analysis:\n\n✅ **Strong areas:** HTML (96%), CSS (92%), JavaScript (88%)\n⚡ **Growing:** React (72%), Git (90%)\n🔴 **Focus needed:** Node.js (45%), TypeScript (35%), System Design (20%)\n\n**Recommendation:** Focus on completing the React modules to unlock the Node.js path. Your frontend foundation is excellent!",
    'default': "That's a great question! While I'm a simulated AI tutor in this demo, I can help with:\n\n• **JavaScript concepts** — closures, promises, async/await\n• **React patterns** — hooks, state management, performance\n• **System design** — architecture, scaling, databases\n• **Your progress** — skill analysis and study recommendations\n\nTry asking about any of these topics!"
  },
  suggestions: [
    'Explain closures',
    'How do promises work?',
    'React hooks overview',
    'System design basics',
    'Analyze my progress',
    'What should I study next?'
  ]
};

// ─── RESUME TEMPLATES ───────────────────────────────────────
export const resumeProfiles = {
  profile1: {
    name: 'Akhil Reddy',
    title: 'Junior Web Developer',
    skills: ['HTML5','CSS3','JavaScript','Git','Responsive Design'],
    missing: ['React','TypeScript','Node.js','Testing','GraphQL'],
    experience: '8 months freelance web development',
    score: 68,
    suggestions: [
      'Add React projects to demonstrate component architecture proficiency',
      'Include TypeScript in at least one portfolio project',
      'Add a section for open-source contributions or technical blog posts',
      'Quantify achievements: "Improved page load by 40%" instead of "Optimized performance"',
      'Remove two-column layout — ATS parsers struggle with complex formatting'
    ]
  },
  profile2: {
    name: 'Sarah Connor',
    title: 'Full-Stack Developer',
    skills: ['JavaScript','TypeScript','React','Node.js','PostgreSQL','Git','Docker'],
    missing: ['Kubernetes','System Design','GraphQL'],
    experience: '2 years professional development',
    score: 82,
    suggestions: [
      'Highlight system design experience in project descriptions',
      'Add GraphQL to a portfolio project for API versatility',
      'Include CI/CD pipeline setup in project documentation',
      'Add performance metrics to each project description'
    ]
  }
};

// ─── ACTIVITY FEED ──────────────────────────────────────────
export const activityFeed = [
  { userId: 'u2', action: 'completed', target: 'React Router & SSR', time: '2 min ago', icon: '✅' },
  { userId: 'u1', action: 'scored 92%', target: 'JavaScript Fundamentals Quiz', time: '15 min ago', icon: '📊' },
  { userId: 'u5', action: 'started', target: 'React Component Patterns', time: '1 hr ago', icon: '📖' },
  { userId: 'u3', action: 'earned badge', target: 'First Steps', time: '2 hr ago', icon: '🏅' },
  { userId: 'u1', action: 'completed', target: 'ES6+ Modern Features', time: '3 hr ago', icon: '✅' },
  { userId: 'u2', action: 'reached Level 6', target: '', time: '5 hr ago', icon: '⬆️' }
];

// ─── HELPER: Get user by email ──────────────────────────────
export function getUserByEmail(email) {
  return users.find(u => u.email === email);
}

// ─── HELPER: Get user by id ─────────────────────────────────
export function getUserById(id) {
  return users.find(u => u.id === id);
}

// ─── HELPER: Calculate job readiness ────────────────────────
export function calcJobReadiness(userSkills, jobId) {
  const job = jobs.find(j => j.id === jobId);
  if (!job || !userSkills) return 0;
  const total = job.matchSkills.length;
  const score = job.matchSkills.reduce((sum, s) => sum + (userSkills[s] || 0), 0);
  return Math.round(score / total);
}

// ─── HELPER: Get next recommended lesson ────────────────────
export function getNextLesson(completedIds, courseId) {
  const course = courses.find(c => c.id === courseId);
  if (!course) return null;
  for (const mod of course.modules) {
    for (const lId of mod.lessons) {
      if (!completedIds.includes(lId)) {
        return lessons.find(l => l.id === lId);
      }
    }
  }
  return null;
}

// ─── XP LEVEL THRESHOLDS ────────────────────────────────────
export const levelThresholds = [0, 500, 1200, 2000, 3500, 5000, 7500, 10000, 15000, 20000];

export function getLevelProgress(xp) {
  let level = 0;
  for (let i = 0; i < levelThresholds.length; i++) {
    if (xp >= levelThresholds[i]) level = i;
    else break;
  }
  const current = levelThresholds[level] || 0;
  const next = levelThresholds[level + 1] || current + 5000;
  return { level, current, next, progress: ((xp - current) / (next - current)) * 100 };
}
