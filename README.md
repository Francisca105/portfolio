## Portfolio

A modern, data-driven personal portfolio built with Next.js, TypeScript, Tailwind CSS, and a rich set of reusable UI components.

The app consumes a structured JSON file (hosted on GitHub) to render your basics, narratives, skills, experience, education, projects, and contact information.

> Live URL: *TBA*

---

## Features

- **Data-driven content** – portfolio content is loaded from a `me.json` file hosted on GitHub and typed with `zod` and TypeScript.
- **Modern stack** – Next.js App Router, React, TypeScript, Tailwind CSS 4, Radix UI primitives, and Framer Motion.
- **Themed UI** – light/dark theme support via `next-themes`.
- **Page transitions** – smooth navigation powered by a `PageTransition` component.
- **Structured sections** – Home (hero, highlights, skills), Projects, Experience, Education, and Contact pages.
- **Responsive design** – optimized for desktop, tablet, and mobile.
- **Developer-friendly tooling** – Biome for linting/formatting, SWR for data fetching, and a shared UI library in `src/components/ui`.

---

## Tech stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **UI:** [React](https://react.dev/), [Tailwind CSS 4](https://tailwindcss.com/), [Radix UI](https://www.radix-ui.com/)
- **Styling utils:** `clsx`, `class-variance-authority`, `tailwind-merge`, `tailwindcss-animate`
- **Animation:** [Framer Motion](https://www.framer.com/motion/)
- **Data fetching:** [SWR](https://swr.vercel.app/)
- **Forms & validation:** `react-hook-form`, `@hookform/resolvers`, `zod`
- **Linting & formatting:** [Biome](https://biomejs.dev/)

---

## Getting started

### Prerequisites

- Node.js (LTS version is recommended)
- npm (or your preferred package manager)

### Installation

From the project root:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

Next.js will hot-reload as you edit the files (for example, `src/app/page.tsx`).

---

## Scripts

Available npm scripts defined in `package.json`:

- `npm run dev` – start the Next.js development server.
- `npm run build` – create an optimized production build.
- `npm run start` – start the production server (after `build`).
- `npm run lint` – run Biome checks (linting and basic formatting issues).
- `npm run format` – format the codebase with Biome.

---

## Data model & customization

Portfolio data is fetched via the `useData` hook:

- Source URL: a public `me.json` file hosted in a GitHub repository.
- Type-safe: validated and typed against `PortfolioData` in `src/types/portfolio.ts`.
