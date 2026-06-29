# Framework Integration Guide

Step-by-step guide for integrating Stencil components into different frameworks.

## Table of Contents

- [Vanilla HTML/JS](#vanilla-htmljs)
- [React](#react)
- [Vue 3](#vue-3)
- [Angular](#angular)

---

## Vanilla HTML/JS

The simplest way to use Stencil components - just load the script and use the tags.

### Installation

No installation needed! Just reference the built Stencil library.

### Usage

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Stencil Components</title>
</head>
<body>
  <h1>My App</h1>
  
  <!-- Use components -->
  <my-button variant="primary" size="medium">Click Me</my-button>
  
  <my-card card-title="Welcome" subtitle="Get started" elevation="medium">
    <p>This is a card component</p>
    <div slot="footer">
      <my-badge color="success">New</my-badge>
    </div>
  </my-card>

  <!-- Load Stencil library -->
  <script type="module" src="../stencil-library/dist/stencil-library/stencil-library.esm.js"></script>
</body>
</html>
```

### CDN Usage (Future)

```html
<script type="module" src="https://unpkg.com/your-stencil-library/dist/stencil-library/stencil-library.esm.js"></script>
```

### JavaScript Interaction

```html
<script type="module">
  // Wait for components to be defined
  await customElements.whenDefined('my-button');
  
  // Get reference to component
  const button = document.querySelector('my-button');
  
  // Add event listener
  button.addEventListener('click', () => {
    console.log('Button clicked!');
  });
</script>
```

---

## React

Use the React wrapper library for type-safe React components.

### 1. Installation

The React library is already included in the monorepo at `packages/react-library`.

### 2. Build the Libraries

```bash
# From monorepo root
npm run build
```

This builds:
1. `stencil-library` (core components)
2. `react-library` (React wrappers)

### 3. Import Components

```tsx
import { MyButton, MyCard, MyBadge, MyComponent } from 'react-library';

function App() {
  return (
    <div>
      <MyButton variant="primary" size="large">
        Click Me
      </MyButton>
      
      <MyCard cardTitle="Welcome" subtitle="Get started" elevation="high">
        <p>Card content</p>
        <div slot="footer">
          <MyBadge color="success">New</MyBadge>
        </div>
      </MyCard>
    </div>
  );
}
```

### 4. TypeScript Support

The React library includes full TypeScript definitions:

```tsx
import { MyButton } from 'react-library';
import type { JSX } from 'react-library';

// Props are fully typed
const button: JSX.MyButton = {
  variant: 'primary', // Autocomplete works!
  size: 'medium',
  disabled: false
};
```

### 5. Event Handling

```tsx
import { MyButton } from 'react-library';

function App() {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <MyButton 
      variant="primary" 
      onClick={handleClick}
    >
      Click Me
    </MyButton>
  );
}
```

### 6. Using in Existing React App

```bash
# In your React app
npm install file:../react-library
```

Then import and use as shown above.

---

## Vue 3

Use the Vue wrapper library with the plugin system.

### 1. Installation

The Vue library is already included in the monorepo at `packages/vue-library`.

### 2. Build the Libraries

```bash
# From monorepo root
npm run build
```

This builds:
1. `stencil-library` (core components)
2. `vue-library` (Vue wrappers)

### 3. Register the Plugin

In your `main.ts`:

```typescript
import { createApp } from 'vue';
import App from './App.vue';
import { ComponentLibrary } from 'vue-library';

const app = createApp(App);

// Register Stencil components
app.use(ComponentLibrary);

app.mount('#app');
```

### 4. Configure Vite

In `vite.config.ts`:

```typescript
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // Treat all tags starting with 'my-' as custom elements
          isCustomElement: (tag) => tag.startsWith('my-')
        }
      }
    })
  ]
});
```

### 5. Use Components in Templates

```vue
<template>
  <div>
    <my-button variant="primary" size="large">
      Click Me
    </my-button>
    
    <my-card card-title="Welcome" subtitle="Get started" elevation="high">
      <p>Card content</p>
      <div slot="footer">
        <my-badge color="success">New</my-badge>
      </div>
    </my-card>
  </div>
</template>

<script setup lang="ts">
// No imports needed - components are globally registered
</script>
```

### 6. Event Handling

```vue
<template>
  <my-button 
    variant="primary" 
    @click="handleClick"
  >
    Click Me
  </my-button>
</template>

<script setup lang="ts">
const handleClick = () => {
  console.log('Button clicked!');
};
</script>
```

### 7. Reactive Props

```vue
<template>
  <my-button 
    :variant="buttonVariant" 
    :disabled="isDisabled"
  >
    {{ buttonText }}
  </my-button>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const buttonVariant = ref<'primary' | 'secondary' | 'danger'>('primary');
const isDisabled = ref(false);
const buttonText = ref('Click Me');
</script>
```

### 8. Using in Existing Vue App

```bash
# In your Vue app
npm install file:../vue-library
```

Then configure as shown above.

---

## Angular

Use the Angular wrapper library with standalone components or modules.

### 1. Installation

The Angular library is already included in the monorepo at `packages/angular-workspace/projects/component-library`.

### 2. Build the Libraries

```bash
# From monorepo root
npm run build
```

This builds:
1. `stencil-library` (core components)
2. `component-library` (Angular wrappers)

### 3. Import Components (Standalone)

For standalone components:

```typescript
import { Component } from '@angular/core';
import { MyComponent } from 'component-library';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MyComponent],
  template: `
    <my-component first="John" last="Doe"></my-component>
  `
})
export class AppComponent {}
```

### 4. Import Components (Module-based)

For module-based apps, add `CUSTOM_ELEMENTS_SCHEMA`:

**app.module.ts:**
```typescript
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MyComponent } from 'component-library';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MyComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

**app.component.html:**
```html
<my-button variant="primary" size="large">Click Me</my-button>

<my-card cardTitle="Welcome" subtitle="Get started" elevation="high">
  <p>Card content</p>
  <div slot="footer">
    <my-badge color="success">New</my-badge>
  </div>
</my-card>
```

### 5. Event Binding

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <my-button 
      variant="primary" 
      (click)="handleClick()"
    >
      Click Me
    </my-button>
  `
})
export class AppComponent {
  handleClick() {
    console.log('Button clicked!');
  }
}
```

### 6. Property Binding

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <my-button 
      [variant]="buttonVariant" 
      [disabled]="isDisabled"
    >
      {{ buttonText }}
    </my-button>
  `
})
export class AppComponent {
  buttonVariant: 'primary' | 'secondary' | 'danger' = 'primary';
  isDisabled = false;
  buttonText = 'Click Me';
}
```

### 7. Using in Existing Angular App

```bash
# In your Angular app
npm install file:../component-library
```

Then configure as shown above.

---

## Common Patterns

### Combining Components

All frameworks can combine components:

```html
<my-card card-title="User Profile" elevation="medium">
  <p>Welcome back!</p>
  <div slot="footer">
    <my-button variant="primary" size="small">Edit</my-button>
    <my-button variant="secondary" size="small">Cancel</my-button>
    <my-badge color="success" pill>Active</my-badge>
  </div>
</my-card>
```

### Conditional Rendering

**React:**
```tsx
{isVisible && <MyButton variant="primary">Click</MyButton>}
```

**Vue:**
```vue
<my-button v-if="isVisible" variant="primary">Click</my-button>
```

**Angular:**
```html
<my-button *ngIf="isVisible" variant="primary">Click</my-button>
```

### Lists

**React:**
```tsx
{items.map(item => (
  <MyBadge key={item.id} color="info">{item.name}</MyBadge>
))}
```

**Vue:**
```vue
<my-badge 
  v-for="item in items" 
  :key="item.id" 
  color="info"
>
  {{ item.name }}
</my-badge>
```

**Angular:**
```html
<my-badge 
  *ngFor="let item of items" 
  color="info"
>
  {{ item.name }}
</my-badge>
```

---

## Troubleshooting

### Components Not Rendering

1. **Check build**: Make sure libraries are built (`npm run build`)
2. **Check imports**: Verify correct import paths
3. **Check console**: Look for JavaScript errors

### TypeScript Errors

1. **Rebuild libraries**: `npm run build`
2. **Check paths**: Verify `tsconfig.json` paths configuration
3. **Restart IDE**: Sometimes TypeScript server needs restart

### Styling Issues

Components use Shadow DOM - external styles won't affect them. Use component props to customize appearance.

---

## Next Steps

- [Component API Reference](./COMPONENTS.md)
- [Development Guide](./DEVELOPMENT.md)
- [Architecture Overview](./ARCHITECTURE.md)
