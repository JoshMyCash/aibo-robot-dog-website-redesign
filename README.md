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
3. Under **Build and deployment**, set **Source** to **GitHub Actions** (not "Deploy from a branch").
4. Push to `main`, or open the **Actions** tab and re-run **Deploy to GitHub Pages**.

The site will be published at:

`https://<your-username>.github.io/<repository-name>/`

> **Blank page?** That usually means Pages is still serving the `main` branch source files instead of the built site. Switch the Pages source to **GitHub Actions** and re-run the deploy workflow.

The build uses the correct base path automatically from `GITHUB_REPOSITORY`, so asset URLs work on project pages.

### Custom domain

If you use a custom domain instead of the default `github.io` project URL, set `base: '/'` in `vite.config.ts` and configure the domain under **Settings → Pages**.
