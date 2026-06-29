# Development Guide

Guide for developers contributing to the Stencil Design System.

## Getting Started

### Prerequisites

- Node.js v18+
- npm v9+
- Git
- Code editor (VS Code recommended)

### Initial Setup

```bash
# Clone repository
git clone <your-repo-url>
cd my-monorepo

# Install dependencies
npm install

# Build all libraries
npm run build
```

## Development Workflow

### 1. Create a New Component

Navigate to the Stencil library:

```bash
cd packages/stencil-library # (@stencil-kit/core)
```

Create component files:

```bash
mkdir -p src/components/my-new-component
touch src/components/my-new-component/my-new-component.tsx
touch src/components/my-new-component/my-new-component.css
```

**Component Template** (`my-new-component.tsx`):

```tsx
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-new-component',
  styleUrl: 'my-new-component.css',
  shadow: true,
})
export class MyNewComponent {
  /**
   * Component prop description
   */
  @Prop() propName: string;

  render() {
    return (
      <div class="component">
        <slot></slot>
      </div>
    );
  }
}
```

**Styles** (`my-new-component.css`):

```css
:host {
  display: block;
}

.component {
  /* Your styles */
}
```

### 2. Build and Test

```bash
# From monorepo root
npm run build

# Run dev servers
npm run dev
```

### 3. Add Component to Demo Apps

Update each demo app to showcase the new component:

- `packages/html-app/index.html`
- `packages/react-app/src/App.tsx`
- `packages/vue-app/src/App.vue`
- `packages/angular-workspace/projects/angular-app/src/app/app.html`

### 4. Document the Component

Add documentation to `docs/COMPONENTS.md`:

```markdown
## MyNewComponent

Description of the component.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `propName` | `string` | `undefined` | Prop description |

### Usage Examples

[Add examples for all frameworks]
```

## Project Structure

### Stencil Library

```
packages/stencil-library/
├── src/
│   ├── components/
│   │   ├── my-button/
│   │   │   ├── my-button.tsx
│   │   │   └── my-button.css
│   │   ├── my-card/
│   │   └── my-badge/
│   └── index.ts
├── dist/                    # Build output
├── stencil.config.ts        # Stencil configuration
└── package.json
```

### Wrapper Libraries

Each wrapper library has:
- `lib/` - Source code
- `dist/` - Build output
- `package.json` - Package configuration
- `tsconfig.json` - TypeScript configuration

## Build System

### Lerna Commands

```bash
# Build all packages
npm run build

# Build only libraries (not apps)
npm run build:libs

# Build everything including apps
npm run build:all

# Build only changed packages
npm run build:affected
```

### Nx Caching

Nx caches build outputs for faster rebuilds:

```bash
# Clear cache
npx nx reset

# View cache status
npx nx show projects
```

### Build Order

Lerna automatically builds in dependency order:

1. `@stencil-kit/core` (no dependencies)
2. `@stencil-kit/react`, `@stencil-kit/vue`, `angular-workspace` (depend on stencil-library)
3. Apps (depend on wrapper libraries)

## Testing

### Unit Tests

```bash
# Run all tests
npm run test

# Run tests for specific package
cd packages/stencil-library # (@stencil-kit/core)
npm test
```

### Manual Testing

```bash
# Run all demo apps
npm run dev
```

Test in all 4 apps:
- HTML: http://localhost:3000/html-app/
- Angular: http://localhost:4200/
- React: http://localhost:5173/
- Vue: http://localhost:5174/

## Code Style

### TypeScript

- Use TypeScript for all new code
- Enable strict mode
- Add JSDoc comments for public APIs

### Component Guidelines

1. **Props**: Use `@Prop()` decorator with JSDoc comments
2. **Events**: Use `@Event()` decorator for custom events
3. **State**: Use `@State()` for internal state
4. **Methods**: Use `@Method()` for public methods
5. **Styles**: Use Shadow DOM for style encapsulation

### Example Component

```tsx
import { Component, Prop, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The component variant
   */
  @Prop() variant: 'primary' | 'secondary' = 'primary';

  /**
   * Emitted when component is clicked
   */
  @Event() myClick: EventEmitter<void>;

  private handleClick = () => {
    this.myClick.emit();
  };

  render() {
    return (
      <div class={`component component--${this.variant}`} onClick={this.handleClick}>
        <slot></slot>
      </div>
    );
  }
}
```

## Debugging

### Browser DevTools

1. Open browser DevTools (F12)
2. Use Elements tab to inspect Shadow DOM
3. Use Console for JavaScript errors
4. Use Network tab for loading issues

### VS Code Debugging

Add to `.vscode/launch.json`:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "chrome",
      "request": "launch",
      "name": "Debug React App",
      "url": "http://localhost:5173",
      "webRoot": "${workspaceFolder}/packages/react-app"
    }
  ]
}
```

## Common Tasks

### Adding a New Prop

1. Add `@Prop()` to component class
2. Add JSDoc comment
3. Use prop in `render()` method
4. Rebuild: `npm run build`
5. Update documentation

### Changing Styles

1. Edit component `.css` file
2. Rebuild: `npm run build`
3. Refresh browser (hot reload may not work for Shadow DOM)

### Adding Framework Integration

1. Install output target: `npm install @stencil/[framework]-output-target`
2. Add to `stencil.config.ts`
3. Create wrapper library package
4. Configure `package.json` and `tsconfig.json`
5. Build and test

## Performance

### Build Performance

- Nx caching speeds up rebuilds
- Only changed packages rebuild
- Parallel execution for independent packages

### Runtime Performance

- Shadow DOM provides style encapsulation
- Lazy loading for components
- Small bundle sizes (tree-shakeable)

## Troubleshooting

### Build Fails

```bash
# Clean and rebuild
npm run clean
npm install
npm run build
```

### TypeScript Errors

```bash
# Rebuild libraries
npm run build:libs

# Restart TypeScript server in VS Code
Cmd+Shift+P > "TypeScript: Restart TS Server"
```

### Component Not Updating

1. Clear browser cache
2. Rebuild: `npm run build`
3. Hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)

### Port Already in Use

Kill process using the port:

```bash
# Find process
lsof -i :4200

# Kill process
kill -9 <PID>
```

## Git Workflow

### Branching

```bash
# Create feature branch
git checkout -b feature/my-new-component

# Make changes and commit
git add .
git commit -m "feat: add new component"

# Push to remote
git push origin feature/my-new-component
```

### Commit Messages

Follow conventional commits:

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes
- `refactor:` - Code refactoring
- `test:` - Test changes
- `chore:` - Build/tooling changes

## Publishing (Future)

### Version Bump

```bash
# Bump versions
npx lerna version

# Publish to npm
npx lerna publish
```

### Release Process

1. Update CHANGELOG.md
2. Bump versions with Lerna
3. Build all packages
4. Run tests
5. Publish to npm
6. Create GitHub release

## Resources

- [Stencil Documentation](https://stenciljs.com/docs/introduction)
- [Lerna Documentation](https://lerna.js.org/)
- [Nx Documentation](https://nx.dev/)
- [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components)

## Getting Help

- Check documentation in `/docs`
- Review component examples in demo apps
- Open an issue on GitHub
- Ask in team chat
