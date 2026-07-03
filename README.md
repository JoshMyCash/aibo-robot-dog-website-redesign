# Aibo Robot Dog Website Redesign

This is a code bundle for Aibo Robot Dog Website Redesign. The original project is available at https://www.figma.com/design/EVXxo9AFYrn8dHzsKQHo24/Aibo-Robot-Dog-Website-Redesign.

## Running locally

```bash
npm install
npm run dev
```

## Deploying to GitHub Pages

1. Push this project to the `main` branch on GitHub.
2. In the repository, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Set **Branch** to `gh-pages` and folder to `/ (root)`, then save.
5. Push to `main` (or re-run the workflow from the **Actions** tab). The workflow builds the site and publishes the `dist` folder to the `gh-pages` branch.

The site will be published at:

`https://<your-username>.github.io/<repository-name>/`

The build uses the correct base path automatically from `GITHUB_REPOSITORY`, so asset URLs work on project pages.

### Custom domain

If you use a custom domain instead of the default `github.io` project URL, set `base: '/'` in `vite.config.ts` and configure the domain under **Settings → Pages**.
