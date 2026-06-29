import { defineContainer } from '@stencil/vue-output-target/runtime';
export const MyBadge = defineContainer('my-badge', undefined, [
    'color',
    'size',
    'pill'
]);
export const MyButton = defineContainer('my-button', undefined, [
    'variant',
    'size',
    'disabled'
]);
export const MyCard = defineContainer('my-card', undefined, [
    'cardTitle',
    'subtitle',
    'elevation'
]);
export const MyComponent = defineContainer('my-component', undefined, [
    'first',
    'middle',
    'last'
]);
//# sourceMappingURL=components.js.map