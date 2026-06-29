import { defineContainer } from '@stencil/vue-output-target/runtime';
export const MyAlert = defineContainer('my-alert', undefined, [
    'type',
    'alertTitle',
    'dismissible',
    'myDismiss'
], [
    'myDismiss'
]);
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
export const MyDropdown = defineContainer('my-dropdown', undefined, [
    'options',
    'value',
    'placeholder',
    'label',
    'disabled',
    'error',
    'myChange'
], [
    'myChange'
]);
export const MyInput = defineContainer('my-input', undefined, [
    'label',
    'placeholder',
    'value',
    'type',
    'error',
    'disabled',
    'required',
    'myChange',
    'myBlur'
], [
    'myChange',
    'myBlur'
]);
export const MyModal = defineContainer('my-modal', undefined, [
    'open',
    'modalTitle',
    'size',
    'myClose'
], [
    'myClose'
]);
//# sourceMappingURL=components.js.map