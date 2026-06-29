# Documentation Guide

This project has **two separate documentation sites** for different audiences:

## 📚 1. Developer Documentation (`docs-site`)

**Audience**: Team members and contributors maintaining the monorepo

**Purpose**: Internal documentation for developers working on the design system

**Access**: `npm run docs` → http://localhost:9000/

**Contents**:
- Monorepo setup and architecture
- Build system (Lerna + Nx)
- Development workflow
- How to create new components
- Testing and deployment
- Package structure and dependencies
- Framework integration implementation details

**Use this when**:
- Onboarding new team members
- Contributing to the design system
- Understanding the monorepo architecture
- Debugging build issues
- Adding new components or features

---

## 🌐 2. Public Documentation (`public-docs`)

**Audience**: External developers consuming the published npm packages

**Purpose**: End-user documentation for installing and using the components

**Access**: `npm run docs:public` → http://localhost:9001/

**Contents**:
- Quick start guide
- npm installation instructions
- Framework-specific usage (React, Vue, Angular, Vanilla JS)
- Component API reference with live examples
- Code snippets ready to copy-paste
- Real-world examples and patterns
- TypeScript usage

**Use this when**:
- Sharing with external developers
- Publishing to production
- Creating public-facing documentation site
- Helping users integrate components

---

## 🚀 Quick Commands

```bash
# Run demo applications
npm run dev

# Run developer documentation (internal)
npm run docs

# Run public documentation (end-users)
npm run docs:public
```

## 📦 Documentation Structure

```
my-monorepo/
├── docs/                      # Markdown docs (developer-focused)
│   ├── README.md
│   ├── SETUP.md
│   ├── COMPONENTS.md
│   ├── INTEGRATION.md
│   ├── DEVELOPMENT.md
│   └── ARCHITECTURE.md
│
├── packages/
│   ├── docs-site/            # HTML docs (developer-focused)
│   │   ├── index.html        # Monorepo overview
│   │   ├── components.html   # Component internals
│   │   ├── setup.html        # Development setup
│   │   └── ...               # Build system docs
│   │
│   └── public-docs/          # HTML docs (end-user focused)
│       ├── index.html        # Getting started
│       ├── components.html   # Component usage
│       ├── react.html        # React installation
│       ├── vue.html          # Vue installation
│       ├── angular.html      # Angular installation
│       └── vanilla.html      # Vanilla JS usage
```

## 🎯 Key Differences

| Feature | Developer Docs | Public Docs |
|---------|---------------|-------------|
| **Audience** | Internal team | External users |
| **Focus** | How it's built | How to use it |
| **Installation** | Monorepo setup | npm install |
| **Content** | Architecture, build system | Usage, examples |
| **Tone** | Technical, detailed | User-friendly, concise |
| **Port** | 9000 | 9001 |

## 📝 Updating Documentation

### Developer Documentation
Update when:
- Adding new build scripts
- Changing monorepo structure
- Updating development workflow
- Adding new tools or dependencies

Files to update:
- `/docs/*.md` - Markdown documentation
- `/packages/docs-site/*.html` - HTML documentation

### Public Documentation
Update when:
- Adding new components
- Changing component APIs
- Publishing new versions
- Adding framework support

Files to update:
- `/packages/public-docs/*.html` - HTML documentation
- Component examples and code snippets

## 🚢 Deployment

### Developer Docs
- Can be hosted internally (e.g., company intranet)
- Or kept as local-only documentation

### Public Docs
- Should be deployed to public hosting (Netlify, Vercel, GitHub Pages)
- Accessible at your-domain.com/docs
- Updated with each npm package release

## 💡 Best Practices

1. **Keep them separate**: Don't mix internal and external documentation
2. **Update together**: When adding components, update both docs
3. **Test locally**: Run both doc sites before committing
4. **Version sync**: Keep public docs version in sync with npm packages
5. **Examples first**: Public docs should prioritize working examples

---

**Need help?** Check the appropriate documentation site based on your role:
- **Team member**: Use `npm run docs`
- **Package user**: Use `npm run docs:public`
