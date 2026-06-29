# CLAUDE.md — my-monorepo Design System

## What this project is

A **Stencil.js design system monorepo** that ships a single set of Web Components and wraps them in framework-specific libraries for Angular, React, and Vue. Built strictly following the official Stencil.js documentation on framework integration / output targets.

The key idea: you write the components **once** in `packages/stencil-library/`, and the Stencil build auto-generates idiomatic wrappers into the framework packages via output targets.

> **Important:** Folder names and npm package names are different things in this repo.
> The folders (`stencil-library/`, `react-library/`, etc.) have never changed.
> Only the npm `"name"` fields inside each `package.json` use the `@stencil-kit/*` scope.

---

## Package map

```
my-monorepo/
├── packages/
│   ├── stencil-library/       # npm: @stencil-kit/core  — Web Components source
│   ├── react-library/         # npm: @stencil-kit/react — Auto-generated React wrappers
│   ├── vue-library/           # npm: @stencil-kit/vue   — Auto-generated Vue 3 wrappers
│   ├── angular-workspace/     # Angular workspace (ng-packagr)
│   │   └── projects/
│   │       ├── component-library/  # npm: @stencil-kit/angular — Angular library
│   │       └── angular-app/        # Angular demo/test app (not published)
│   ├── react-app/             # Vite + React demo/test app (not published)
│   ├── vue-app/               # Vite + Vue 3 demo/test app (not published)
│   ├── html-app/              # Vanilla HTML demo (not published)
│   ├── docs-site/             # Internal developer docs site (not published)
│   └── public-docs/           # Public-facing docs site (not published)
├── lerna.json                 # Lerna v8 orchestrates builds and publishes
├── nx.json                    # Nx caches builds; build order: stencil → wrappers
└── package.json               # Root — npm workspaces, shared devDeps
```

---

## Toolchain

| Tool | Role |
|---|---|
| **npm workspaces** | Links all packages under `packages/*` together locally |
| **Lerna v8** | Task runner across packages; handles `publish` |
| **Nx** | Build cache + task dependency graph (stencil builds before wrapper builds) |
| **Stencil v4/v5** | Compiles Web Components and generates framework proxies |
| **ng-packagr** | Builds the Angular library into a publishable format |
| **TypeScript** | Wrapper packages compile with `tsc` |

---

## Components (defined once in packages/stencil-library/)

| Tag | File | Props |
|---|---|---|
| `<my-button>` | `src/components/my-button/my-button.tsx` | `variant` (primary/secondary/danger), `size` (small/medium/large), `disabled` |
| `<my-badge>` | `src/components/my-badge/my-badge.tsx` | `color` (success/warning/error/info/neutral), `size`, `pill` |
| `<my-card>` | `src/components/my-card/my-card.tsx` | `cardTitle`, `subtitle`, `elevation` (low/medium/high) |
| `<my-component>` | `src/components/my-component/my-component.tsx` | starter example |

All components use **Shadow DOM** (`shadow: true`) and slot-based content projection.

---

## How the build pipeline works

```
stencil build  (run inside packages/stencil-library/)
    │
    ├── dist/          → consumed by react-library, vue-library, angular-workspace
    ├── loader/        → published as part of @stencil-kit/core
    │
    ├── angularOutputTarget  → writes generated proxies into
    │     angular-workspace/projects/component-library/src/lib/stencil-generated/
    │
    ├── reactOutputTarget    → writes generated proxies into
    │     react-library/lib/components/stencil-generated/
    │
    └── vueOutputTarget      → writes generated proxies into
          vue-library/lib/components.ts

Then:
  react-library:     tsc --outDir ./dist   → published as @stencil-kit/react
  vue-library:       tsc --outDir ./dist   → published as @stencil-kit/vue
  angular-workspace: ng build component-library  (ng-packagr) → published as @stencil-kit/angular
```

The Nx `dependsOn: ["^build"]` rule enforces this order automatically.

---

## Daily development commands

```bash
# Install everything from root
npm install

# Build publishable packages in order (stencil → react/vue/angular)
npm run build

# Build only the three wrapper libraries (skips angular)
npm run build:libs

# Run all demo apps in parallel with browser auto-open
npm run dev

# Run a single demo app
npx lerna run dev --scope=react-app
npx lerna run dev --scope=vue-app
npx lerna run dev --scope=angular-workspace

# Run docs sites
npm run docs:dev      # → http://localhost:9000/docs-site/   (dev-facing docs)
npm run docs:public   # → http://localhost:9001/public-docs/ (user-facing docs)
# Note: / redirects automatically to the correct subfolder

# Run tests across all packages
npm test

# Generate a new Stencil component (interactive)
cd packages/stencil-library && npx stencil generate

# Stencil dev server (hot reload) for the Web Component itself
cd packages/stencil-library && npm start
```

---

## Adding a new component

1. `cd packages/stencil-library && npx stencil generate my-new-component`
2. Implement TSX + CSS in `src/components/my-new-component/`
3. `npm run build` from root — output targets auto-generate the framework wrappers
4. The new component is immediately importable in all three framework libraries

---

## Publishing to npm

### Before you publish

Packages that are meant to be published publicly:

| Folder | npm package name |
|---|---|
| `packages/stencil-library/` | `@stencil-kit/core` |
| `packages/react-library/` | `@stencil-kit/react` |
| `packages/vue-library/` | `@stencil-kit/vue` |
| `packages/angular-workspace/projects/component-library/` | `@stencil-kit/angular` |

All wrapper packages have `"publishConfig": { "access": "public" }` already set.

### Step 1 — Create an npm account and log in

```bash
# Create an account at https://www.npmjs.com/signup then:
npm login
npm whoami
```

### Step 2 — Set versions

```bash
# Bump all packages together (patch / minor / major)
npx lerna version patch --no-push --no-git-tag-version
# or set a specific version
npx lerna version 1.0.0 --no-push --no-git-tag-version
```

### Step 3 — Build everything

```bash
npm run build
```

Always build before publishing — the `dist/` output is what gets shipped.

### Step 4 — Publish

```bash
# Publish all public packages that have changed
npx lerna publish from-package --yes

# Or publish a single package manually (e.g. the core)
cd packages/stencil-library
npm publish --access public
```

For scoped packages, `--access public` is required on the first publish.

### Testing before going live with npm pack

```bash
# In packages/stencil-library (after building)
npm pack
# Creates stencil-library-0.0.1.tgz  (the tarball uses the folder name)

# In a separate test project
npm install /path/to/stencil-library-0.0.1.tgz
```

### Checking what gets published

```bash
# See exactly which files will be included (reads the "files" field in package.json)
cd packages/stencil-library && npm pack --dry-run
```

`packages/stencil-library/package.json` already limits published files to `["dist/", "loader/"]`.

---

## npm workspace resolution (local vs published)

Inside this monorepo, `@stencil-kit/react` (in `react-library/`) depends on `"@stencil-kit/core": "*"`. npm workspaces resolves this to the local `packages/stencil-library/` automatically via a symlink. When a consumer installs `@stencil-kit/react` from npm, npm resolves it from the registry instead. No special action needed.

---

## Key files to know

| File | Purpose |
|---|---|
| `packages/stencil-library/stencil.config.ts` | Controls all output targets — the single source of truth for code generation |
| `packages/stencil-library/src/index.ts` | Exports all components for the Stencil dist |
| `packages/react-library/lib/index.ts` | Re-exports auto-generated React components |
| `packages/vue-library/lib/index.ts` | Re-exports components + Vue plugin |
| `packages/vue-library/lib/plugin.ts` | Vue plugin that calls `defineCustomElements()` |
| `packages/angular-workspace/projects/component-library/src/public-api.ts` | Angular library public API |
| `lerna.json` | Lerna version/publish config |
| `nx.json` | Build cache + dependency order |
