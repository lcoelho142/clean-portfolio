# Leah Made This

A React portfolio built with Vite. The site uses React Router for page navigation, shared layout and UI components under `src/components`, and route-level pages under `src/pages`.

## Development

```sh
npm install
npm run dev
```

Set `VITE_WEATHER_KEY` in a local `.env` file to enable the live weather temperature in the home-page sidebar.

## Project structure

- `src/pages/` contains the home, work, play, and about pages. Project-card metadata and project routes are kept in `src/pages/work/projects.js`.
- `src/components/common/` contains reusable interface elements, including the project contents sidebar.
- `src/components/layout/` contains the shared navigation, layout, and sidebar shell.
- `src/hooks/` contains reusable data hooks, such as the live weather request.
- `src/assets/` contains imported images and SVGs; `public/` contains files referenced by public URL.
- `src/index.css` defines global styles and theme variables.

## Checks

```sh
npm run lint
npm run build
```
