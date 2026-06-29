import * as i0 from '@angular/core';
import { NgZone, ChangeDetectorRef, ElementRef } from '@angular/core';
import { Components } from '@stencil-kit/core/components';

declare class MyBadge {
    protected z: NgZone;
    protected el: HTMLMyBadgeElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<MyBadge, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MyBadge, "my-badge", never, { "color": { "alias": "color"; "required": false; }; "pill": { "alias": "pill"; "required": false; }; "size": { "alias": "size"; "required": false; }; }, {}, never, ["*"], true, never>;
}
declare interface MyBadge extends Components.MyBadge {
}
declare class MyButton {
    protected z: NgZone;
    protected el: HTMLMyButtonElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<MyButton, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MyButton, "my-button", never, { "disabled": { "alias": "disabled"; "required": false; }; "size": { "alias": "size"; "required": false; }; "variant": { "alias": "variant"; "required": false; }; }, {}, never, ["*"], true, never>;
}
declare interface MyButton extends Components.MyButton {
}
declare class MyCard {
    protected z: NgZone;
    protected el: HTMLMyCardElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<MyCard, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MyCard, "my-card", never, { "cardTitle": { "alias": "cardTitle"; "required": false; }; "elevation": { "alias": "elevation"; "required": false; }; "subtitle": { "alias": "subtitle"; "required": false; }; }, {}, never, ["*"], true, never>;
}
declare interface MyCard extends Components.MyCard {
}
declare class MyComponent {
    protected z: NgZone;
    protected el: HTMLMyComponentElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<MyComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MyComponent, "my-component", never, { "first": { "alias": "first"; "required": false; }; "last": { "alias": "last"; "required": false; }; "middle": { "alias": "middle"; "required": false; }; }, {}, never, ["*"], true, never>;
}
declare interface MyComponent extends Components.MyComponent {
}

declare const DIRECTIVES: (typeof MyBadge | typeof MyButton | typeof MyCard | typeof MyComponent)[];

export { DIRECTIVES, MyBadge, MyButton, MyCard, MyComponent };
