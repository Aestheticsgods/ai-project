# Rivoxa Agents

A front-end concept for an AI agent workspace. The application presents a dashboard for navigating agent management, analytics, marketplace, rewards, documentation and account settings.

**Live preview:** [ai-project-eight-lac.vercel.app](https://ai-project-eight-lac.vercel.app)  
**Repository:** [Aestheticsgods/ai-project](https://github.com/Aestheticsgods/ai-project)

## What is included

- Dashboard and analytics screens for presenting agent activity
- Agent catalogue with search and lifecycle controls in the interface
- Marketplace, rewards, documentation and account screens
- Reusable interface components and responsive layouts

This repository currently represents the product interface. Agent execution, model integrations and backend services are not included in this front-end project.

## Technology

- React and TypeScript
- Vite
- Tailwind CSS and shadcn/ui components
- React Router and Recharts

## Run locally

Requirements: Node.js and npm.

```bash
git clone https://github.com/Aestheticsgods/ai-project.git
cd ai-project
npm install
npm run dev
```

Create a production build with `npm run build`, or run the configured lint check with `npm run lint`.

## Project layout

```text
src/
  components/   Shared interface and landing-page components
  pages/        Dashboard, agents, analytics, marketplace and account screens
  App.tsx       Application routes
  index.css     Global styles
```
