# Tailwind CSS 4 + Stencil + Shadow DOM - Proper Integration

## Understanding the Challenge

After studying the Tailwind CSS 4 source code, here's what I learned:

### How Tailwind 4 Works:
1. `@import "tailwindcss"` is a **virtual import** processed by `@tailwindcss/postcss`
2. `@theme { }` directive creates CSS custom properties (CSS variables)
3. The PostCSS plugin scans your files for class usage and generates utilities
4. Everything happens at **build time**, not runtime

### The Stencil + Shadow DOM Problem:
1. **Stencil** compiles components with Shadow DOM encapsulation
2. **Shadow DOM** isolates styles - they don't leak in or out
3. CSS variables defined on `:root` don't work in Shadow DOM (need `:host`)
4. Each component's CSS is processed separately

## ❌ Why Current Approach Doesn't Work for User Customization

Users **CANNOT** use `@import "tailwindcss"` and `@theme` in their apps because:

```css
/* ❌ This won't work in user's app */
@import "tailwindcss";
@theme {
  --color-primary-600: oklch(0.72 0.11 178);
}
```

**Why?**
- Your components are **already compiled** with Tailwind utilities baked in
- Users get the **dist** folder with compiled CSS, not source files
- The `@import "tailwindcss"` only works during YOUR build, not theirs
- Shadow DOM prevents their styles from affecting your components

## ✅ The REAL Solution: Tailwind Plugin API

Based on the Tailwind source code, here's how to create a proper plugin:

### Option 1: Create a Tailwind Plugin (For Your Build)

```javascript
// tailwind.plugin.js
module.exports = function({ addUtilities, addComponents, theme }) {
  // Add custom utilities
  addUtilities({
    '.btn-primary': {
      backgroundColor: 'var(--color-primary-600)',
      color: 'white',
      '&:hover': {
        backgroundColor: 'var(--color-primary-700)',
      },
    },
  })
  
  // Add components
  addComponents({
    '.card': {
      borderRadius: theme('borderRadius.lg'),
      padding: theme('spacing.4'),
    },
  })
}
```

### Option 2: CSS Custom Properties (For User Customization)

The **ONLY** way users can customize your components is through CSS Custom Properties:

```css
/* Your component defines defaults */
:host {
  --btn-bg: var(--color-primary-600, oklch(0.45 0.20 250));
  --btn-hover: var(--color-primary-700, oklch(0.38 0.17 250));
}

button {
  background: var(--btn-bg);
}

button:hover {
  background: var(--btn-hover);
}
```

```css
/* User overrides in their app */
my-button {
  --color-primary-600: oklch(0.72 0.11 178); /* mint */
  --color-primary-700: oklch(0.65 0.11 178);
}
```

## 🎯 Recommended Architecture

### For Component Library (Your Build):

1. **Use Tailwind 4 utilities** in your components
2. **Define theme colors** as CSS custom properties
3. **Document** which CSS variables users can override

```tsx
// my-button.tsx
render() {
  return (
    <button class="bg-[var(--btn-bg)] hover:bg-[var(--btn-hover)] px-4 py-2 rounded-lg">
      <slot></slot>
    </button>
  );
}
```

```css
/* my-button.css */
:host {
  --btn-bg: var(--color-primary-600);
  --btn-hover: var(--color-primary-700);
}
```

### For End Users:

Provide a **theming guide** showing which CSS variables they can override:

```css
/* Available theme variables */
my-button {
  --color-primary-600: your-color;
  --color-primary-700: your-hover-color;
}

my-card {
  --card-bg: your-bg;
  --card-border: your-border;
}
```

## 📚 What I Learned from Tailwind Source

From `/packages/tailwindcss/src/theme.ts`:
- Theme values are stored as CSS custom properties
- `ThemeOptions.DEFAULT` allows overriding
- Namespaces like `--color-*` group related values

From `/packages/@tailwindcss-postcss/src/index.ts`:
- PostCSS plugin scans files for class candidates
- Compiles AST and generates CSS
- Optimizes output for production

From `/packages/tailwindcss/src/plugin.ts`:
- Plugin API provides `addUtilities`, `addComponents`, `addVariant`
- Plugins can access `theme()` function
- Config can be merged with plugin config

## 🚀 Next Steps

**Choose your approach:**

1. **Tailwind Utilities + CSS Variables** (Recommended)
   - Use Tailwind classes in components
   - Expose CSS variables for customization
   - Document theming API

2. **Pure CSS Variables** (Maximum Flexibility)
   - Don't use Tailwind utilities
   - Define everything with CSS variables
   - Users have full control

3. **Hybrid Approach** (Best of Both)
   - Use Tailwind for layout/spacing
   - CSS variables for colors/theming
   - Balance between DX and flexibility

The key insight: **Tailwind 4's `@theme` is for YOUR build process, not for end-user customization of pre-built components.**
