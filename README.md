# Jeremy Hayes Portfolio

Next.js portfolio site for Jeremy Hayes, focused on project case studies, visual presentation, and a working contact flow.

## Stack

- Next.js App Router
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run typecheck
npm run test
npm run test:e2e:smoke
```

## Project Structure

- `src/app` route files, metadata, sitemap, and global styles
- `src/components` shared UI and page-level client components
- `src/content/siteContent.ts` structured project and profile content
- `scripts/e2e-smoke.mjs` lightweight route smoke test
- `tests` file-level regression checks

## Notes

- The site is configured for static export with `next build`.
- The contact form posts to a Cloudflare Worker and uses Turnstile for protection.
- Project pages are generated from structured content in `src/content/siteContent.ts`.
