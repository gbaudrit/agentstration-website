# Agentstration website

The public, bilingual showcase website for Agentstration: an open control plane for defining, orchestrating and operating AI agents and workflows.

This repository is intentionally independent from the Agentstration product repository. The deployable result is a set of static assets with no server, database or production runtime.

## Stack

- Semantic HTML generated at build time
- Hand-authored, token-based CSS (no runtime CSS framework)
- Small, dependency-free JavaScript enhancements
- A dependency-free Node.js build script
- Original SVG brand, favicon and social assets

The project deliberately has no package dependencies. Tailwind was considered, but the visual system is small enough that a focused CSS file is faster to build, easier to audit and avoids a dependency toolchain. The source structure and reusable render functions can be migrated to an SSG such as Astro later without redesigning the pages.

## Requirements

- Node.js 20 or newer
- npm (included with Node.js)

No `npm install` is required today because there are no third-party packages. Running it is harmless and may be useful for standard CI workflows.

## Run locally

```bash
npm run dev
```

The site is built and served at <http://localhost:4173/en/>. The development server is intentionally minimal; restart it after changing source files.

## Production build

```bash
npm run build
```

The command recreates `dist/`, generates eight localized HTML pages, copies public assets, and writes the sitemap. Deploy the contents of `dist/` to any static host.

Run the build and internal-link validation together with:

```bash
npm run check
```

## Deployment

The production site is deployed to GitHub Pages by `.github/workflows/deploy-pages.yml`.
Every push to `main` validates the site, builds `dist/`, and deploys the generated files.
The workflow can also be started manually from the repository's **Actions** tab.

One-time setup:

1. In the GitHub repository, open **Settings > Pages** and select **GitHub Actions** as the source.
2. Set `www.agentstrations.io` as the custom domain and enable **Enforce HTTPS** once its certificate is available.
3. In the OVH DNS zone, point the apex domain to GitHub Pages with these four `A` records:
   `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, and `185.199.111.153`.
4. Point `www` to `gbaudrit.github.io` with a `CNAME` record.

DNS propagation and HTTPS certificate issuance can take some time. The `public/CNAME` file keeps
the custom domain in the generated deployment artifact.

## Repository structure

```text
src/
  content/site.mjs     English and French content plus site configuration
  styles/site.css      Design tokens, layout, themes and responsive rules
  scripts/site.js      Theme, mobile menu and progressive reveal behavior
scripts/
  build.mjs            Shared layouts/components and static page generation
  serve.mjs            Small local static server
  check.mjs            Build and internal reference validation
public/
  favicon/             Browser icon
  logos/               Reusable Agentstration marks
  social/              OpenGraph/Twitter social image
dist/                   Generated deployable output (ignored by Git)
```

## Pages and translations

Each page is generated at an explicit, indexable URL in both languages:

| English | Français |
| --- | --- |
| `/en/` | `/fr/` |
| `/en/features/` | `/fr/features/` |
| `/en/architecture/` | `/fr/architecture/` |
| `/en/extensions/` | `/fr/extensions/` |

All localized copy and metadata live in `src/content/site.mjs`. Shared navigation, footer and CTA strings live by language; page content is grouped by language and page key. The language switch preserves the current page.

To update a translation, change the matching value under `pages.en` and `pages.fr`, then run `npm run check`. Keep the shape of both languages aligned.

## Add a page

1. Add its key to `site.pages` and route segment to `site.paths` in `src/content/site.mjs`.
2. Add English and French title, description and page content.
3. Add a renderer in `scripts/build.mjs` and select it from `renderPage`.
4. Run `npm run check` and inspect both localized URLs.

The build automatically includes registered pages in navigation, language alternates and `sitemap.xml`.

## Assets and external links

Static files under `public/` are copied to the root of `dist/`. Prefer SVG for identity and diagram assets; optimize raster screenshots before adding them. Product-preview areas intentionally remain honest placeholders until real Console and Workplace screenshots are available.

Documentation and GitHub links are centralized in `site.externalLinks` in `src/content/site.mjs`. They render as clearly disabled “soon” items while empty. Add verified public URLs there when available—do not scatter external URLs through templates.

## SEO, accessibility and performance

Generated pages include unique titles/descriptions, canonical URLs, OpenGraph/Twitter metadata, `lang`, `hreflang` (including `x-default`), semantic landmarks, sitemap and robots directives. UI controls expose state and labels, focus is visible, content remains available without JavaScript, and reduced-motion preferences are respected.

The site uses no external fonts, libraries, trackers or runtime network requests. Light and dark themes are centralized through CSS custom properties and default to the operating-system preference.
