# Frank Dominguez Portfolio

Portfolio site for Frank Dominguez, a web developer and designer based in Kansas City.

Live site: [frankweb.dev](https://frankweb.dev)

## Overview

This is a React + Vite portfolio built to showcase selected work, case studies, and personal background in a clean editorial-style layout. The site includes a home page, About page, individual work pages, a custom 404 page, route-level SEO metadata, and static assets for GitHub Pages deployment.

## Tech Stack

- React 19
- Vite 6
- React Router 7
- Tailwind CSS 4
- Framer Motion
- ESLint

## Features

- Responsive portfolio layout with custom typography and motion
- Project data driven from a central source in [`src/data/projects.js`](./src/data/projects.js)
- About gallery driven from [`src/data/aboutGallery.js`](./src/data/aboutGallery.js)
- Dynamic per-route SEO tags via [`src/components/Seo.jsx`](./src/components/Seo.jsx)
- Custom favicon and social share image
- In-app 404 page for unknown routes
- GitHub Pages SPA fallback support
- Custom domain support for `frankweb.dev`

## Routes

- `/` - Home page / selected work
- `/about` - About page
- `/work/:slug` - Individual case study page
- `*` - Custom 404 page

## Getting Started

### Prerequisites

- Node.js 18+ recommended
- npm

### Install

```bash
npm install
```

### Run Locally

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Project Structure

```text
src/
  components/
    FluidButton.jsx
    Hero.jsx
    MenuMorphButton.jsx
    MobileMenu.jsx
    ProjectCard.jsx
    Seo.jsx
    SiteFooter.jsx
    SiteHeader.jsx
  data/
    aboutGallery.js
    projects.js
  pages/
    AboutPage.jsx
    CaseStudyPage.jsx
    HomePage.jsx
    NotFoundPage.jsx
  App.jsx
  App.css
  index.css
  main.jsx

public/
  404.html
  CNAME
  favicon.svg
  og-image.svg
  robots.txt
  site.webmanifest
  sitemap.xml
  fonts/
  icons/
  images/
```

## Editing Content

### Add or Update Projects

Project cards and case study content live in [`src/data/projects.js`](./src/data/projects.js).

Each project entry can define:

- `slug`
- `title`
- `caseTitle`
- `year`
- `summary`
- `description`
- `imageSrc`
- `imageAlt`
- `imageClassName`
- `technologies`
- `externalUrl`

When adding a new project page, also update [`public/sitemap.xml`](./public/sitemap.xml) so the route is included in the sitemap.

### Update About Gallery

About page gallery items live in [`src/data/aboutGallery.js`](./src/data/aboutGallery.js). Each item includes image source, alt text, and layout sizing data for the masonry-style grid.

## SEO and Metadata

Global metadata is defined in [`index.html`](./index.html).

Route-specific metadata is managed by [`src/components/Seo.jsx`](./src/components/Seo.jsx), which updates:

- page title
- description
- canonical URL
- Open Graph tags
- Twitter card tags
- robots meta tag

Static SEO and platform assets are stored in `public/`:

- [`public/robots.txt`](./public/robots.txt)
- [`public/sitemap.xml`](./public/sitemap.xml)
- [`public/site.webmanifest`](./public/site.webmanifest)
- [`public/og-image.svg`](./public/og-image.svg)
- [`public/favicon.svg`](./public/favicon.svg)

## Deployment

This repo is configured for GitHub Pages with a custom domain:

- Custom domain: `frankweb.dev`
- Domain file: [`public/CNAME`](./public/CNAME)

Because the site uses `BrowserRouter`, GitHub Pages needs an SPA fallback for direct route visits and refreshes. That behavior is handled by:

- [`public/404.html`](./public/404.html) to capture unknown static requests
- the route restoration script in [`index.html`](./index.html)

This allows paths like `/about` and `/work/richon-planning` to load correctly on GitHub Pages.

## Notes

- This project uses a local copy of ITC Garamond in `public/fonts/`.
- Social icons and branding assets live in `public/icons/`.
- The current live project data includes the Richon Planning case study.

## License

Private portfolio project.
