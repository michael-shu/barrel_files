# 📦 Barrel File Performance Test

This repository contains a sample React/Next.js project used to measure the **bundle size** and **build time** impact of using [barrel files](https://basarat.gitbook.io/typescript/main-1/barrel) (`index.ts`) versus direct imports.

## 🧪 Project Structure

The test setup includes:

- `components/` folder with 10 dummy component files
- Two variations:
- **Direct Import**: Only one component is imported directly
- **Barrel Import**: All 10 components are re-exported via `index.ts`, but only one is imported

## 📊 Metrics Collected\n\n- **Bundle Size** (using `@next/bundle-analyzer`)
- **Bundle Size** (using `@next/bundle-analyzer`)
- **Build Time** (100 build runs using Node script)
  
## 📈 Key Findings

- Barrel files increase bundle size when unused exports are bundled
- Minor but measurable increase in build time (~80ms on average)
- Circular imports significantly bloat bundle size (~53% increase)
- Next.js’s [`optimizePackageImports`](https://vercel.com/blog/how-we-optimized-package-imports-in-next-js#measuring-performance-improvements) can help mitigate barrel drawbacks

## 🔧 How to Run

Install dependencies:

```bash
npm install
```

Analyze bundle:

```bash
npm run analyze
```
> Make sure you change the imports directly in app/page.tsx, in order to update it as direct or barrel import

Run build time test:

```bash
npm run time-analyze
```
> Change the 3rd argument in time-analyze to change the output file name
> Ensure no other major processes are running to avoid skewing build time results

## 📁 File Overview

| File / Folder            | Description                                 |
|--------------------------|---------------------------------------------|
| `/components`            | Dummy components and optional `index.ts`    |
| `/scripts/measureBuildTime.js` | Node script for benchmarking build times |
| `/next.config.js`        | Next.js config with optional analyzer setup |
| `/post_images/`          | Screenshots of build and bundle results     |

## ✅ Conclusion

Barrel files can clean up your imports and simplify large projects, but they come with performance tradeoffs. This repo serves as a reproducible testbed for measuring those tradeoffs in a real Next.js environment.
