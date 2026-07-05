# Implementation Plan - Eduverse Education Platform

We will build **Eduverse**, a premium, end-to-end desktop web application for career-oriented education. It features a complete learning pathway based on the student's target job, initial assessments, interactive skills roadmaps, daily motivation widgets, cheat-proof quizzes, W3Schools-like learning material, resume parsing simulation, and a mock job search.

## Proposed Tech Stack & Architecture
- **Framework**: Vite + React + TypeScript for a fast, responsive, and robust single-page application.
- **Styling**: Modern, premium CSS (Glassmorphism, CSS variables, dark-mode styling, animations, responsive grid system) with Google Fonts (e.g., "Outfit" or "Inter") and modern icon libraries (Lucide React).
- **Interactive Roadmaps**: Canvas/SVG interactive skill graphs showing mastery levels.
- **State Management**: React state with localStorage persistence so progress, assessments, and notifications are saved.

---

## User Review Required
> [!IMPORTANT]
> The application will be created in a new subdirectory: `C:\Users\Firoz\.gemini\antigravity\scratch\eduverse-app`.
> Once generated, please open this folder in your IDE/workspace to run the Vite development server.

> [!NOTE]
> We will implement the cheat-proof quiz system using standard Web APIs (Fullscreen API, Page Visibility API, and window blur events). If a user attempts to leave the tab, switch windows, or exit fullscreen, the quiz will display a warning and eventually auto-submit if violations exceed a threshold.

---

## Key Modules & Features

### 1. Welcome & Onboarding (Career Selection & Initial Assessment)
- User enters name, select a career path (e.g., Frontend Web Developer, Data Scientist, Cybersecurity Analyst).
- Pre-assessment test (5 quick questions) to establish baseline skills.
- AI Skill Level evaluation simulation, generating a personalized skill graph.

### 2. Personalized Dashboard
- **Daily Progress Tracker**: Shows overall mastery, current streaks, and interactive metrics.
- **Skill Graph Widget**: Interactive network graph showing skills (e.g., HTML, CSS, JS for Web Dev) with current levels (Beginner, Intermediate, Master).
- **Daily Notification Center**: Simulation of everyday notifications and motivators.
- **AI Adaptive Tutor Sidebar**: Interactive chat interface to ask questions, explain topics, or analyze a resume.

### 3. W3Schools-Style Learning Center (Theory & Sandbox)
- Rich technical articles with collapsible chapters.
- Live interactive play-ground (e.g., HTML/CSS sandbox or JS executor) where students can try out code snippets.

### 4. Cheat-Proof Assessment Engine
- Beautiful modal-based or full-screen test environment.
- Detects if user opens developer tools, switches tabs, loses focus, or exits fullscreen.
- Provides dynamic questions matching the current skill level.

### 5. AI Gap Analysis & Career Transition
- **Resume Analyzer**: User can drop a resume (or copy text) to receive tailored feedback on what skills they are missing for their target job.
- **Mock Job Board**: Dynamically list relevant jobs matching their current skill levels, showing matching percentage based on completed modules.

---

## Proposed Folder Structure
```text
eduverse-app/
├── index.html
├── package.json
├── vite.config.ts
├── src/
│   ├── main.tsx
│   ├── index.css
│   ├── App.tsx
│   ├── components/
│   │   ├── Dashboard.tsx
│   │   ├── SkillGraph.tsx
│   │   ├── LearningCenter.tsx
│   │   ├── Assessment.tsx
│   │   ├── Onboarding.tsx
│   │   ├── Tutor.tsx
│   │   ├── CareerHub.tsx
│   │   └── NotificationBanner.tsx
│   ├── data/
│   │   ├── coursesData.ts
│   │   ├── skillsData.ts
│   │   └── quizData.ts
│   └── hooks/
│       └── useCheatDetector.ts
```

---

## Verification Plan

### Manual Verification
1. We will launch the Vite development server using `npm run dev`.
2. Open the page in a browser using our browser subagent or manually.
3. Validate onboarding flow and skill assessment.
4. Test W3Schools-like theory sandbox.
5. Launch a quiz and test the cheat-proof visibility and focus-loss triggers to confirm they successfully warn and submit.
6. Test simulated resume parsing and job recommendations.
