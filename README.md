# Omar Mustafa — Frontend Developer Portfolio

A responsive personal portfolio built with React, TypeScript, Vite, and Tailwind CSS. It includes an introduction, background and skills, selected projects, and contact links.

**Live portfolio:** https://omarmustafa62.github.io/omar-mustafa-portfolio/

## Tech stack

- React and TypeScript
- Vite
- Tailwind CSS
- React Router
- Intersection Observer for scroll reveals, with reduced-motion support

## Run locally

```bash
npm ci
npm run dev
```

Create and preview a production build:

```bash
npm run build
npm run preview
```

## Project structure

- `src/components/` — reusable page sections and UI components
- `src/pages/` — Home, About, Projects, Contact, and Not Found pages
- `src/data/profile.ts` — portfolio bio, skills, education, and contact links
- `src/data/projects.ts` — project descriptions, screenshots, and repository links
- `public/images/` — profile and project images

## Deployment

The site deploys to GitHub Pages through the workflow in `.github/workflows/deploy.yml`. The workflow runs on pushes to `main`. In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**.

The project is configured for the repository path `/omar-mustafa-portfolio/`. If you rename the repository, update the deployment base path in `vite.config.ts`.
