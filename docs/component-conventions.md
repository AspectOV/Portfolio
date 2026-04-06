# Component Conventions

- Keep route files in `src/app/**/page.tsx` server-rendered when possible, and move interactive logic into `src/components/pages/*Client.tsx`.
- Prefer typed props interfaces and named union types for categories and variants.
- Use shared data from `src/content/siteContent.ts` for projects and skills to avoid repeated hardcoded values.
- Keep component folders grouped by feature (`header/*`, `pages/*`) and use consistent `PascalCase` file names.
- Default non-critical images/components to lazy loading.
