'use client';
import { createComponent } from '@stencil/react-output-target/runtime';
import React from 'react';
import { MyBadge as MyBadgeElement, defineCustomElement as defineMyBadge } from "stencil-library/dist/components/my-badge.js";
import { MyButton as MyButtonElement, defineCustomElement as defineMyButton } from "stencil-library/dist/components/my-button.js";
import { MyCard as MyCardElement, defineCustomElement as defineMyCard } from "stencil-library/dist/components/my-card.js";
import { MyComponent as MyComponentElement, defineCustomElement as defineMyComponent } from "stencil-library/dist/components/my-component.js";
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
//# sourceMappingURL=components.js.map