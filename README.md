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

A GitHub Action (`.github/workflows/deploy-pages.yml`) builds and deploys the site on every push to `master`.

**One-time setup:** In the repo on GitHub go to **Settings → Pages**. Under “Build and deployment”, set **Source** to **GitHub Actions**.

After that, each push to `master` will build the app and deploy the `dist/` output. Your custom domain (CNAME) in `public/` is included in the build.

To build locally: `npm run build`. The build copies `index.html` to `404.html` so client-side routes like `/public`, `/projects`, `/notes` work on refresh.

Legacy static pages (e.g. `/flappy.html`, `/clock.html`, `/wwcode.html`) live in `public/` and are served as-is.

## Project layout

- `src/` — React app (components, pages, styles)
- `public/` — Static assets (images, CNAME, legacy HTML pages and their css/js)
