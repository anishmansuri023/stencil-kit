import type { EventName, StencilReactComponent } from '@stencil/react-output-target/runtime';
import { type MyAlertCustomEvent, type MyDropdownCustomEvent, type MyInputCustomEvent, type MyModalCustomEvent } from "@stencil-kit/core";
import type { Components } from "@stencil-kit/core/dist/components";
import { MyAlert as MyAlertElement } from "@stencil-kit/core/dist/components/my-alert.js";
import { MyBadge as MyBadgeElement } from "@stencil-kit/core/dist/components/my-badge.js";
import { MyButton as MyButtonElement } from "@stencil-kit/core/dist/components/my-button.js";
import { MyCard as MyCardElement } from "@stencil-kit/core/dist/components/my-card.js";
import { MyComponent as MyComponentElement } from "@stencil-kit/core/dist/components/my-component.js";
import { MyDropdown as MyDropdownElement } from "@stencil-kit/core/dist/components/my-dropdown.js";
import { MyInput as MyInputElement } from "@stencil-kit/core/dist/components/my-input.js";
import { MyModal as MyModalElement } from "@stencil-kit/core/dist/components/my-modal.js";
export type MyAlertEvents = {
    onMyDismiss: EventName<MyAlertCustomEvent<void>>;
};
export declare const MyAlert: StencilReactComponent<MyAlertElement, MyAlertEvents, Components.MyAlert>;
export type MyBadgeEvents = NonNullable<unknown>;
export declare const MyBadge: StencilReactComponent<MyBadgeElement, MyBadgeEvents, Components.MyBadge>;
export type MyButtonEvents = NonNullable<unknown>;
export declare const MyButton: StencilReactComponent<MyButtonElement, MyButtonEvents, Components.MyButton>;
export type MyCardEvents = NonNullable<unknown>;
export declare const MyCard: StencilReactComponent<MyCardElement, MyCardEvents, Components.MyCard>;
export type MyComponentEvents = NonNullable<unknown>;
export declare const MyComponent: StencilReactComponent<MyComponentElement, MyComponentEvents, Components.MyComponent>;
export type MyDropdownEvents = {
    onMyChange: EventName<MyDropdownCustomEvent<string>>;
};
export declare const MyDropdown: StencilReactComponent<MyDropdownElement, MyDropdownEvents, Components.MyDropdown>;
export type MyInputEvents = {
    onMyChange: EventName<MyInputCustomEvent<string>>;
    onMyBlur: EventName<MyInputCustomEvent<void>>;
};
export declare const MyInput: StencilReactComponent<MyInputElement, MyInputEvents, Components.MyInput>;
export type MyModalEvents = {
    onMyClose: EventName<MyModalCustomEvent<void>>;
};
export declare const MyModal: StencilReactComponent<MyModalElement, MyModalEvents, Components.MyModal>;
