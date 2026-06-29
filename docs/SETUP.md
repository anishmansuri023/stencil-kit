# Setup Guide

Complete installation and setup instructions for the Stencil Design System.

## Prerequisites

- **Node.js**: v18 or higher
- **npm**: v9 or higher
- **Git**: Latest version

## Installation

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd my-monorepo
```

### 2. Install Dependencies

```bash
npm install
```

This will install all dependencies for all packages in the monorepo using npm workspaces.

### 3. Build the Libraries

```bash
npm run build
```

This command builds:
- `stencil-library` - Core web components
- `react-library` - React wrappers
- `vue-library` - Vue wrappers
- `angular-workspace` - Angular component library and demo app

**Build Order**: Lerna automatically builds packages in the correct dependency order using Nx task orchestration.

## Development

### Run All Demo Apps

```bash
npm run dev
```

This will:
1. Start all 4 demo app dev servers in parallel
2. Automatically open 4 browser tabs:
   - HTML: http://localhost:3000/html-app/
   - Angular: http://localhost:4200/
   - React: http://localhost:5173/
   - Vue: http://localhost:5174/

### Run Documentation Site

```bash
npm run docs
```

This starts the documentation site at http://localhost:9000/

### Run Individual Apps

```bash
# React app only
cd packages/react-app
npm run dev

# Vue app only
cd packages/vue-app
npm run dev

# Angular app only
cd packages/angular-workspace
npm run dev

# HTML app only
cd packages/html-app
npm run dev
```

## Project Structure

```
my-monorepo/
├── packages/
│   ├── stencil-library/           # Core Stencil components
│   │   ├── src/
│   │   │   └── components/        # Component source files
│   │   ├── dist/                  # Built output
│   │   └── stencil.config.ts      # Stencil configuration
│   │
│   ├── react-library/             # React wrappers
│   │   ├── lib/                   # Wrapper source
│   │   └── dist/                  # Built output
│   │
│   ├── vue-library/               # Vue wrappers
│   │   ├── lib/                   # Wrapper source
│   │   └── dist/                  # Built output
│   │
│   ├── angular-workspace/         # Angular workspace
│   │   ├── projects/
│   │   │   ├── component-library/ # Angular wrappers
│   │   │   └── my-app/           # Angular demo app
│   │   └── angular.json
│   │
│   ├── react-app/                 # React demo app
│   ├── vue-app/                   # Vue demo app
│   └── html-app/                  # Vanilla HTML demo
│
├── docs/                          # Documentation
├── scripts/                       # Build scripts
│   └── open-browsers.sh          # Auto-open browsers script
├── nx.json                        # Nx task configuration
├── lerna.json                     # Lerna configuration
└── package.json                   # Root package.json
```

## Configuration Files

### Root Configuration

- **package.json** - Workspace configuration and scripts
- **lerna.json** - Lerna monorepo settings
- **nx.json** - Task pipeline and caching configuration

### Stencil Library

- **stencil.config.ts** - Stencil compiler configuration with output targets for React, Vue, and Angular

### TypeScript

Each package has its own `tsconfig.json` that extends the root configuration.

## Build System

### Lerna + Nx

The monorepo uses **Lerna v8** powered by **Nx** for:
- **Task orchestration** - Runs builds in dependency order
- **Caching** - Caches build outputs for faster rebuilds
- **Parallel execution** - Runs independent tasks simultaneously

### Task Pipeline

Defined in `nx.json`:

```json
{
  "targetDefaults": {
    "build": {
      "dependsOn": ["^build"],
      "cache": true
    }
  }
}
```

This ensures:
1. `stencil-library` builds first
2. `react-library`, `vue-library`, and `angular-workspace` build in parallel after
3. Build outputs are cached

## Troubleshooting

### Build Errors

If you encounter build errors:

```bash
# Clean all node_modules
npm run clean

# Reinstall dependencies
npm install

# Rebuild everything
npm run build
```

### Port Conflicts

If ports are already in use:
- HTML app: Change port in `packages/html-app/package.json`
- React app: Vite will auto-increment to next available port
- Vue app: Vite will auto-increment to next available port
- Angular app: Change port in `packages/angular-workspace/package.json`

### TypeScript Errors

Make sure all libraries are built before running apps:

```bash
npm run build
```

## Next Steps

- [Component API Reference](./COMPONENTS.md)
- [Framework Integration Guide](./INTEGRATION.md)
- [Development Guide](./DEVELOPMENT.md)
