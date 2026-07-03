# Aibo Robot Dog Website Redesign

This is a code bundle for Aibo Robot Dog Website Redesign. The original project is available at https://www.figma.com/design/EVXxo9AFYrn8dHzsKQHo24/Aibo-Robot-Dog-Website-Redesign.

## Running locally

```bash
npm install
npm run dev
```

## Deploying to GitHub Pages

1. Create a new GitHub repository and push this project to the `main` branch.
2. In the repository, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Push to `main` (or run the workflow manually from the **Actions** tab). The site will be published at:

   `https://<your-username>.github.io/<repository-name>/`

The deploy workflow builds with the correct base path automatically from `GITHUB_REPOSITORY`, so asset URLs work on project pages.

### Custom domain

If you use a custom domain instead of the default `github.io` project URL, set `base: '/'` in `vite.config.ts` and configure the domain under **Settings → Pages**.
