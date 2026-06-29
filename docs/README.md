# Stencil Design System

A modern, framework-agnostic web component library built with StencilJS, designed to work seamlessly across React, Vue, Angular, and vanilla HTML/JS applications.

## 🚀 Quick Start

```bash
# Clone the repository
git clone <your-repo-url>
cd my-monorepo

# Install dependencies
npm install

# Build all libraries
npm run build

# Run all demo apps
npm run dev

# Run documentation site
npm run docs
```

The `npm run dev` command will automatically open 4 browser tabs:
- **HTML App**: http://localhost:3000/html-app/
- **Angular App**: http://localhost:4200/
- **React App**: http://localhost:5173/
- **Vue App**: http://localhost:5174/

The `npm run docs` command starts the documentation site at http://localhost:9000/

## 📦 What's Included

### Core Libraries
- **stencil-library** - Core web components built with StencilJS
- **react-library** - React wrapper components
- **vue-library** - Vue 3 wrapper components  
- **angular-workspace** - Angular standalone components

### Demo Applications
- **html-app** - Vanilla HTML/JS integration example
- **react-app** - React integration example
- **vue-app** - Vue 3 integration example
- **angular-workspace/my-app** - Angular integration example

## 🎨 Components

- **MyButton** - Customizable button with variants and sizes
- **MyCard** - Card container with header, content, and footer slots
- **MyBadge** - Status badge with colors and styles
- **MyComponent** - Demo component

See [COMPONENTS.md](./COMPONENTS.md) for detailed API documentation.

## 🔧 Framework Integration

- [React Integration](./INTEGRATION.md#react)
- [Vue Integration](./INTEGRATION.md#vue)
- [Angular Integration](./INTEGRATION.md#angular)
- [Vanilla HTML/JS](./INTEGRATION.md#vanilla-htmljs)

## 📚 Documentation

- [Setup Guide](./SETUP.md) - Installation and configuration
- [Component API](./COMPONENTS.md) - Complete component reference
- [Integration Guide](./INTEGRATION.md) - Framework-specific usage
- [Development Guide](./DEVELOPMENT.md) - Contributing and building
- [Architecture](./ARCHITECTURE.md) - Monorepo structure

## 🛠️ Available Commands

```bash
# Build all libraries
npm run build

# Build only core libraries (stencil, react, vue)
npm run build:libs

# Build everything including apps
npm run build:all

# Run all demo apps and open browsers
npm run dev

# Run documentation site
npm run docs

# Run tests
npm run test

# Clean all node_modules
npm run clean

# View dependency graph
npm run graph
```

## 🏗️ Monorepo Structure

This project uses **Lerna** with **npm workspaces** for monorepo management and **Nx** for task orchestration with caching.

```
my-monorepo/
├── packages/
│   ├── stencil-library/      # Core web components
│   ├── react-library/         # React wrappers
│   ├── vue-library/           # Vue wrappers
│   ├── angular-workspace/     # Angular wrappers
│   ├── react-app/             # React demo
│   ├── vue-app/               # Vue demo
│   └── html-app/              # HTML demo
├── docs/                      # Documentation
├── scripts/                   # Build scripts
├── nx.json                    # Nx configuration
└── lerna.json                 # Lerna configuration
```

## 🤝 Contributing

See [DEVELOPMENT.md](./DEVELOPMENT.md) for development guidelines.

## 📄 License

[Your License Here]
