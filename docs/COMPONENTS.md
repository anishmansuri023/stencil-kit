# Component API Reference

Complete API documentation for all components in the Stencil Design System.

## MyButton

A customizable button component with multiple variants and sizes.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'danger'` | `'primary'` | Button style variant |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Button size |
| `disabled` | `boolean` | `false` | Disabled state |

### Slots

| Slot | Description |
|------|-------------|
| (default) | Button content/label |

### Usage Examples

#### HTML
```html
<my-button variant="primary" size="medium">Click Me</my-button>
<my-button variant="secondary" size="small">Secondary</my-button>
<my-button variant="danger" disabled>Disabled</my-button>
```

#### React
```tsx
import { MyButton } from '@stencil-kit/react';

<MyButton variant="primary" size="large">Click Me</MyButton>
```

#### Vue
```vue
<template>
  <my-button variant="primary" size="medium">Click Me</my-button>
</template>
```

#### Angular
```html
<my-button variant="primary" size="medium">Click Me</my-button>
```

### Variants

- **primary** - Primary action button (blue gradient)
- **secondary** - Secondary action button (gray)
- **danger** - Destructive action button (red gradient)

### Sizes

- **small** - Compact button (padding: 6px 16px, font: 14px)
- **medium** - Standard button (padding: 10px 24px, font: 16px)
- **large** - Large button (padding: 14px 32px, font: 18px)

---

## MyCard

A card container component with header, content, and footer sections.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `cardTitle` | `string` | `undefined` | Card title text |
| `subtitle` | `string` | `undefined` | Card subtitle text |
| `elevation` | `'low' \| 'medium' \| 'high'` | `'medium'` | Shadow depth/elevation |

### Slots

| Slot | Description |
|------|-------------|
| (default) | Main card content |
| `footer` | Card footer content |

### Usage Examples

#### HTML
```html
<my-card card-title="Card Title" subtitle="Subtitle" elevation="medium">
  <p>Card content goes here</p>
  <div slot="footer">
    <my-button variant="primary">Action</my-button>
  </div>
</my-card>
```

#### React
```tsx
import { MyCard, MyButton } from '@stencil-kit/react';

<MyCard cardTitle="Card Title" subtitle="Subtitle" elevation="high">
  <p>Card content goes here</p>
  <div slot="footer">
    <MyButton variant="primary">Action</MyButton>
  </div>
</MyCard>
```

#### Vue
```vue
<template>
  <my-card card-title="Card Title" subtitle="Subtitle" elevation="low">
    <p>Card content goes here</p>
    <div slot="footer">
      <my-button variant="primary">Action</my-button>
    </div>
  </my-card>
</template>
```

#### Angular
```html
<my-card cardTitle="Card Title" subtitle="Subtitle" elevation="medium">
  <p>Card content goes here</p>
  <div slot="footer">
    <my-button variant="primary">Action</my-button>
  </div>
</my-card>
```

### Elevation Levels

- **low** - Subtle shadow (2px blur)
- **medium** - Standard shadow (8px blur)
- **high** - Prominent shadow (16px blur)

---

## MyBadge

A status badge component with multiple colors and styles.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `color` | `'success' \| 'warning' \| 'error' \| 'info' \| 'neutral'` | `'neutral'` | Badge color variant |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Badge size |
| `pill` | `boolean` | `false` | Rounded pill style |

### Slots

| Slot | Description |
|------|-------------|
| (default) | Badge content/label |

### Usage Examples

#### HTML
```html
<my-badge color="success" size="medium">Success</my-badge>
<my-badge color="warning" pill>Warning</my-badge>
<my-badge color="error" size="small">Error</my-badge>
```

#### React
```tsx
import { MyBadge } from '@stencil-kit/react';

<MyBadge color="success" size="large">Success</MyBadge>
<MyBadge color="info" pill>Info</MyBadge>
```

#### Vue
```vue
<template>
  <my-badge color="success" size="medium">Success</my-badge>
  <my-badge color="warning" pill>Warning</my-badge>
</template>
```

#### Angular
```html
<my-badge color="success" size="medium">Success</my-badge>
<my-badge color="warning" pill>Warning</my-badge>
```

### Colors

- **success** - Green (for positive states)
- **warning** - Orange (for warnings)
- **error** - Red (for errors)
- **info** - Blue (for information)
- **neutral** - Gray (for neutral states)

### Sizes

- **small** - Compact badge (padding: 2px 8px, font: 12px)
- **medium** - Standard badge (padding: 4px 12px, font: 14px)
- **large** - Large badge (padding: 6px 16px, font: 16px)

---

## MyComponent

Demo component showing basic Stencil functionality.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `first` | `string` | `undefined` | First name |
| `last` | `string` | `undefined` | Last name |

### Usage Examples

#### HTML
```html
<my-component first="John" last="Doe"></my-component>
```

#### React
```tsx
import { MyComponent } from '@stencil-kit/react';

<MyComponent first="John" last="Doe" />
```

#### Vue
```vue
<template>
  <my-component first="John" last="Doe"></my-component>
</template>
```

#### Angular
```html
<my-component first="John" last="Doe"></my-component>
```

---

## Styling

All components use **Shadow DOM** for style encapsulation. This means:
- Component styles don't leak out
- External styles don't leak in
- Components look consistent across all frameworks

### CSS Custom Properties

Components expose CSS custom properties for theming (coming soon).

### Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility

All components follow accessibility best practices:
- Semantic HTML
- ARIA attributes where needed
- Keyboard navigation support
- Screen reader friendly
