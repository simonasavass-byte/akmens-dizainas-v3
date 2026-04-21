# Akmens Dizainas

Independent Vite + React website ready for GitHub and Vercel deployment.

## Local Development

```sh
npm install
npm run dev
```

The development server runs on port `8080` by default.

## Verification

```sh
npm run lint
npm test
npm run build
npm run preview
```

## Vercel

Use the default Vercel settings for a Vite project:

- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm install`

The included `vercel.json` rewrites direct page requests back to `index.html` so React Router routes work after deployment.
