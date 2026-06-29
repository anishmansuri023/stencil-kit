'use client';
import { createComponent } from '@stencil/react-output-target/runtime';
import React from 'react';
import { MyAlert as MyAlertElement, defineCustomElement as defineMyAlert } from "@stencil-kit/core/dist/components/my-alert.js";
import { MyBadge as MyBadgeElement, defineCustomElement as defineMyBadge } from "@stencil-kit/core/dist/components/my-badge.js";
import { MyButton as MyButtonElement, defineCustomElement as defineMyButton } from "@stencil-kit/core/dist/components/my-button.js";
import { MyCard as MyCardElement, defineCustomElement as defineMyCard } from "@stencil-kit/core/dist/components/my-card.js";
import { MyComponent as MyComponentElement, defineCustomElement as defineMyComponent } from "@stencil-kit/core/dist/components/my-component.js";
import { MyDropdown as MyDropdownElement, defineCustomElement as defineMyDropdown } from "@stencil-kit/core/dist/components/my-dropdown.js";
import { MyInput as MyInputElement, defineCustomElement as defineMyInput } from "@stencil-kit/core/dist/components/my-input.js";
import { MyModal as MyModalElement, defineCustomElement as defineMyModal } from "@stencil-kit/core/dist/components/my-modal.js";
export const MyAlert = createComponent({
    tagName: 'my-alert',
    elementClass: MyAlertElement,
    react: React,
    events: { onMyDismiss: 'myDismiss' },
    defineCustomElement: defineMyAlert
});
export const MyBadge = createComponent({
    tagName: 'my-badge',
    elementClass: MyBadgeElement,
    react: React,
    events: {},
    defineCustomElement: defineMyBadge
});
export const MyButton = createComponent({
    tagName: 'my-button',
    elementClass: MyButtonElement,
    react: React,
    events: {},
    defineCustomElement: defineMyButton
});
export const MyCard = createComponent({
    tagName: 'my-card',
    elementClass: MyCardElement,
    react: React,
    events: {},
    defineCustomElement: defineMyCard
});
export const MyComponent = createComponent({
    tagName: 'my-component',
    elementClass: MyComponentElement,
    react: React,
    events: {},
    defineCustomElement: defineMyComponent
});
export const MyDropdown = createComponent({
    tagName: 'my-dropdown',
    elementClass: MyDropdownElement,
    react: React,
    events: { onMyChange: 'myChange' },
    defineCustomElement: defineMyDropdown
});
export const MyInput = createComponent({
    tagName: 'my-input',
    elementClass: MyInputElement,
    react: React,
    events: {
        onMyChange: 'myChange',
        onMyBlur: 'myBlur'
    },
    defineCustomElement: defineMyInput
});
export const MyModal = createComponent({
    tagName: 'my-modal',
    elementClass: MyModalElement,
    react: React,
    events: { onMyClose: 'myClose' },
    defineCustomElement: defineMyModal
});
//# sourceMappingURL=components.js.map