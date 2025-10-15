# Sports Leagues - React

This project is built with **React**, **TypeScript** and **Vite** for rapid development of modern frontend applications.

The Sports Leagues layout design was inspired by Vercel’s **V0 UI platform**.

## Local environment Setup

```bash
git clone https://github.com/deanmuse94/sports-league-search.git
```

```bash
cd sports-league-search
```

```bash
npm install
```

```bash
npm run dev
```

For production builds

```bash
npm run build && npm run preview
```

**Note:** No environment variables are required for this project.

### Tech Stack Overview

**Vite** – A modern and low configuration build tool that provides instant dev server startups for various frontend frameworks.

**React** – A JavaScript library for building dynamic and component-based user interfaces.

**TypeScript** – Adds static type checking to JavaScript and improve code quality

**Tailwind CSS** – A styling framework that allows for rapid development

**Zustand** – A powerful state management library built on hooks, used in this project to store the currently selected sport name from the Select input and pass down the name to the league results for filtering.

**SWR** – A data fetching library for React applcations - This handles the fetching of the sports leagues and season badges.

**Fuse.js** – A lightweight fuzzy search library, used to search through the league results.
