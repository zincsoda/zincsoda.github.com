# zincsoda.github.com

Personal site — Steve Walsh.

## Stack

- [Vite](https://vitejs.dev/) + [React](https://react.dev/) + [React Router](https://reactrouter.com/)

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build & deploy (GitHub Pages)

```bash
npm run build
```

Deploy the `dist/` folder (e.g. push to a `gh-pages` branch or use GitHub Actions). The build copies `index.html` to `404.html` so client-side routes like `/public`, `/projects`, `/notes` work on refresh when hosted on GitHub Pages.

Legacy static pages (e.g. `/flappy.html`, `/clock.html`, `/wwcode.html`) live in `public/` and are served as-is.

## Project layout

- `src/` — React app (components, pages, styles)
- `public/` — Static assets (images, CNAME, legacy HTML pages and their css/js)
