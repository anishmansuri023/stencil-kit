# Stencil Design System

A modern, framework-agnostic web component library built with StencilJS, designed to work seamlessly across React, Vue, Angular, and vanilla HTML/JS applications.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Build all libraries
npm run build

# Run all demo apps
npm run dev

# Run documentation site (separate command)
npm run docs
```

The `npm run dev` command will automatically open **4 browser tabs**:
- **🌐 HTML App**: http://localhost:3000/html-app/
- **🅰️ Angular App**: http://localhost:4200/
- **⚛️ React App**: http://localhost:5173/
- **💚 Vue App**: http://localhost:5174/

The `npm run docs` command will start the documentation site at:
- **📚 Documentation**: http://localhost:9000/

## 📦 What's Included

### Core Libraries
- **@stencil-kit/core** - Core web components built with StencilJS
- **@stencil-kit/react** - React wrapper components
- **@stencil-kit/vue** - Vue 3 wrapper components  
- **angular-workspace** - Angular standalone components

### Demo Applications
- **html-app** - Vanilla HTML/JS integration example
- **react-app** - React integration example
- **vue-app** - Vue 3 integration example
- **angular-workspace/angular-app** - Angular integration example
- **docs-site** - Complete documentation website

## 🎨 Components

### MyButton
Customizable button with variants (primary, secondary, danger) and sizes (small, medium, large).

### MyCard
Card container with header, content, and footer slots. Supports elevation levels.

### MyBadge
Status badge with colors (success, warning, error, info, neutral) and pill style.

### MyComponent
Demo component showing basic Stencil functionality.

See the [Component Documentation](http://localhost:9000/components.html) for detailed API reference.

## 🔧 Framework Integration

### Vanilla HTML/JS
```html
<script type="module" src="../stencil-library/dist/stencil-library/stencil-library.esm.js"></script>
<my-button variant="primary">Click Me</my-button>
```

### React
```tsx
import { MyButton } from '@stencil-kit/react';
<MyButton variant="primary">Click Me</MyButton>
```

### Vue 3
```vue
<template>
  <my-button variant="primary">Click Me</my-button>
</template>
```

### Angular
```html
<my-button variant="primary">Click Me</my-button>
```

## 📚 Documentation

Comprehensive documentation is available in two formats:

### 1. Markdown Documentation (`/docs`)
- [Setup Guide](./docs/SETUP.md) - Installation and configuration
- [Component API](./docs/COMPONENTS.md) - Complete component reference
- [Integration Guide](./docs/INTEGRATION.md) - Framework-specific usage
- [Development Guide](./docs/DEVELOPMENT.md) - Contributing and building
- [Architecture](./docs/ARCHITECTURE.md) - Monorepo structure

### 2. Interactive Documentation Site
Run `npm run docs` and visit http://localhost:9000/ for:
- Live component examples
- Interactive code snippets
- Framework integration guides
- Copy-paste ready code examples

## 🛠️ Available Commands

| Command | Description |
|---------|-------------|
| `npm run build` | Build all libraries |
| `npm run build:libs` | Build only core libraries |
| `npm run dev` | Run all demo apps + open browsers |
| `npm run docs` | Run documentation site |
| `npm run test` | Run all tests |
| `npm run clean` | Clean all node_modules |
| `npm run graph` | View dependency graph |

## 🏗️ Monorepo Structure

```
my-monorepo/
├── packages/
│   ├── @stencil-kit/core      # Core web components
│   ├── @stencil-kit/react/         # React wrappers
│   ├── @stencil-kit/vue/           # Vue wrappers
│   ├── angular-workspace/     # Angular wrappers
│   ├── react-app/             # React demo
│   ├── vue-app/               # Vue demo
│   ├── html-app/              # HTML demo
│   └── docs-site/             # Documentation website
├── docs/                      # Markdown documentation
├── scripts/                   # Build scripts
├── nx.json                    # Nx configuration
└── lerna.json                 # Lerna configuration
```

## 🔄 Build System

This project uses **Lerna** with **npm workspaces** for monorepo management and **Nx** for task orchestration with caching.

### Build Order
1. `@stencil-kit/core` builds first (core components)
2. `@stencil-kit/react`, `@stencil-kit/vue`, `angular-workspace` build in parallel
3. Demo apps can run after libraries are built

### Caching
Nx caches build outputs for faster rebuilds. Only changed packages rebuild.

## 🤝 Contributing

See [DEVELOPMENT.md](./docs/DEVELOPMENT.md) for development guidelines.

## 📄 License

[Your License Here]

## 🌟 Features

- ✅ **Framework Agnostic** - Works with React, Vue, Angular, or vanilla JS
- ✅ **TypeScript Support** - Full type definitions included
- ✅ **Shadow DOM** - Style encapsulation for consistent rendering
- ✅ **Lazy Loading** - Components load on demand
- ✅ **Small Bundle Size** - Minimal overhead (~15KB total)
- ✅ **Monorepo Architecture** - Efficient builds with Lerna + Nx
- ✅ **Comprehensive Docs** - Interactive documentation site
- ✅ **Accessible** - Built with accessibility in mind

## 🚦 Getting Started

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd my-monorepo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Build libraries**
   ```bash
   npm run build
   ```

4. **Start development**
   ```bash
   npm run dev
   ```

5. **Visit the documentation**
   Open http://localhost:9000/ in your browser

## 📞 Support

- 📖 [Documentation](http://localhost:9000/)
- 🐛 [Report Issues](https://github.com/your-repo/issues)
- 💬 [Discussions](https://github.com/your-repo/discussions)

---

Built with ❤️ using [StencilJS](https://stenciljs.com/)
