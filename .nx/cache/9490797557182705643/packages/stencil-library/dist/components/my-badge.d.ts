import type { Components, JSX } from "../types/components";

interface MyBadge extends Components.MyBadge, HTMLElement {}
export const MyBadge: {
    prototype: MyBadge;
    new (): MyBadge;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
