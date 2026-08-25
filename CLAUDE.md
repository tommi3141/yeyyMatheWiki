# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

This is a personal fork of [Quartz v4](https://quartz.jzhao.xyz/) — a static site generator that turns an Obsidian-style Markdown vault into a website. The owner is a Nachhilfelehrer (math tutor) who collects his math learning materials in an Obsidian vault at `content/` and publishes them as a website for his students (up to Abitur level and beyond). `content/` is the actual vault (mostly German-language math notes, see `content/Basiswissen/`, `content/Uni/`) — adding new material is usually just adding/editing Markdown files there. `quartz/` is the site-generator framework itself. Site title/config is set in [quartz.config.ts](quartz.config.ts) ("🌱YeyyMathe!").

- GitHub repo: https://github.com/tommi3141/yeyyMatheWiki (remote `origin`); the upstream Quartz template is remote `upstream` (https://github.com/jackyzha0/quartz.git) and is not actively synced from.
- Published to students via **GitHub Pages**.
- The CI workflows under `.github/workflows/` for Cloudflare preview deploys are scoped to `jackyzha0/quartz` (`if: github.repository == 'jackyzha0/quartz'`) and do **not** run on this fork — ignore them for this repo's actual publishing flow.

## Rollenverteilung: ich vs. Zirkel in Obsidian

Der Nutzer arbeitet im `content/`-Ordner (dem Obsidian-Vault, erkennbar an `content/.obsidian/`) vor allem direkt aus **Obsidian** heraus, dort mit **Zirkel** — dem Claude-Assistenten im Vault, der über das Claudian-Plugin läuft. Zirkel bekommt eine eigene, separate CLAUDE.md, die speziell auf Content-Erstellung und Mathe-Themen zugeschnitten ist.

Ich bin der Ansprechpartner für die übergeordneten, repo-weiten Themen: Hosting (GitHub Pages), das Quartz-Framework/Build/Config, Git/den `quartz sync`-Workflow und CI. Ich nenne mich **Wurzel** — Wortspiel aus mathematischer Wurzel, Git-Repo-Root und Wurzel im "digitalen Garten" von Quartz.

Wenn mich der Nutzer zu konkreten Mathe-Inhalten oder Obsidian-spezifischen Themen (Plugins, Vault-Organisation innerhalb Obsidian, Notizen-Workflow etc.) fragt, weise ich kurz darauf hin, dass dafür Zirkel in Obsidian der eigentliche Experte ist — helfe aber, so gut es ohne den dortigen Kontext geht, trotzdem weiter statt nur abzuwimmeln.

Ausnahme: Wenn Zirkel-Tooling (z.B. Claude-Skills unter `content/.claude/`) den Quartz-Build beeinflussen könnte, ist das wieder mein Thema — siehe Hinweis zu `ignorePatterns` in `quartz.config.ts`.

## Commands

- `npx quartz build` — build the site once (output to `public/` by default)
- `npx quartz build --serve` — build and serve locally with hot reload (use this to preview content changes before publishing)
- `npm run docs` — build to `docs/` (used for GitHub Pages-style output)
- `npm run check` — type-check (`tsc --noEmit`) and verify formatting (`prettier --check`) — run this before considering a change done
- `npm run format` — auto-format with prettier
- `npm test` — run all tests (`tsx --test`, native Node test runner)
- Run a single test file: `npx tsx --test quartz/util/path.test.ts`

### Publishing updates: `npx quartz sync`

This is how the owner publishes new/edited content to the live site. It runs `git add . && git commit -m "Quartz sync: <timestamp>"`, then `git pull origin v4`, then **`git push -uf origin <current-branch>`** — note the `-f`, this is a **force push**.

**Never run `npx quartz sync` (or an equivalent manual commit+force-push) without the user's explicit go-ahead first, even if asked to "push the updates" or "publish this."** Always confirm before running it.

Formatting: no semicolons, 100 char print width, trailing commas everywhere (see [.prettierrc](.prettierrc)).

CI (`.github/workflows/ci.yaml`) runs `npm run check`, `npm test`, then `npx quartz build --bundleInfo` on Windows/macOS/Linux — matches what to verify locally.

## Architecture

### Build pipeline

Entry point is `quartz/build.ts` (invoked via `quartz/bootstrap-cli.mjs` → `quartz/cli/*.js`, which is hand-written JS, not compiled). A build does, in order:

1. **Glob** the content directory for files, respecting `ignorePatterns` from `quartz.config.ts`.
2. **`parseMarkdown`** (`quartz/processors/parse.ts`) — runs each file through the configured `transformers` plugins (a `unified`/remark/rehype pipeline: frontmatter parsing, Obsidian-flavored markdown, GFM, syntax highlighting, TOC, link crawling, LaTeX, etc.) producing `ProcessedContent` (mdast/hast tree + vfile).
3. **`filterContent`** (`quartz/processors/filter.ts`) — runs `filters` plugins (e.g. `RemoveDrafts`) to drop files that shouldn't be emitted.
4. **`emitContent`** (`quartz/processors/emit.ts`) — runs `emitters` plugins, each of which takes the processed content and writes output files (HTML pages, RSS/sitemap, static assets, favicons, redirects, etc.).

In watch mode (`--serve`/`--watch`), `build.ts` sets up a `chokidar` watcher and does incremental rebuilds per changed file via the same three-stage pipeline, then triggers a client refresh over websockets.

### Plugin system

All three plugin kinds (`transformers`, `filters`, `emitters`) are registered in `quartz.config.ts` under `plugins:`, and are plain factory functions from `quartz/plugins/{transformers,filters,emitters}/`. Adding/removing a plugin is a config change; writing a new plugin means implementing the matching interface in `quartz/plugins/types.ts` and exporting it from the relevant `index.ts`.

### Pages and components

Page layout is composed in `quartz.layout.ts` out of Preact components from `quartz/components/*.tsx` (e.g. `Explorer`, `Graph`, `TableOfContents`, `Search`, `Backlinks`). `sharedPageComponents` applies to every page; `defaultContentPageLayout` is for single-note pages; `defaultListPageLayout` is for folder/tag listing pages. Components render to static HTML via `preact-render-to-string`; client-side behavior (search, graph, SPA navigation, popovers) lives in `quartz/components/scripts/`.

### Content vault conventions

- `content/` mirrors the Obsidian vault structure directly — folders are real navigation structure (see `Explorer` in the layout).
- Paths/folders listed in `ignorePatterns` in `quartz.config.ts` (`private`, `Private`, `Extra`, `templates`, `Templates`, `.obsidian`) are excluded from the build.
- Date handling defaults to `modified` (`defaultDateType`), resolved with priority `frontmatter` → `git` → `filesystem` (`CreatedModifiedDate` plugin).
