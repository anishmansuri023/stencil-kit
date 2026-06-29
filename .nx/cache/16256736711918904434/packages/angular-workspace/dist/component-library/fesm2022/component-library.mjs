import { __decorate } from 'tslib';
import * as i0 from '@angular/core';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { fromEvent } from 'rxjs';
import { defineCustomElement as defineCustomElement$1 } from 'stencil-library/components/my-badge.js';
import { defineCustomElement as defineCustomElement$2 } from 'stencil-library/components/my-button.js';
import { defineCustomElement as defineCustomElement$3 } from 'stencil-library/components/my-card.js';
import { defineCustomElement as defineCustomElement$4 } from 'stencil-library/components/my-component.js';

/* eslint-disable */
/* tslint:disable */
const proxyInputs = (Cmp, inputs) => {
    const Prototype = Cmp.prototype;
    inputs.forEach((item) => {
        Object.defineProperty(Prototype, item, {
            get() {
                return this.el[item];
            },
            set(val) {
                this.z.runOutsideAngular(() => (this.el[item] = val));
            },
            /**
             * In the event that proxyInputs is called
             * multiple times re-defining these inputs
             * will cause an error to be thrown. As a result
             * we set configurable: true to indicate these
             * properties can be changed.
             */
            configurable: true,
        });
    });
};
const proxyMethods = (Cmp, methods) => {
    const Prototype = Cmp.prototype;
    methods.forEach((methodName) => {
        Prototype[methodName] = function () {
            const args = arguments;
            return this.z.runOutsideAngular(() => this.el[methodName].apply(this.el, args));
        };
    });
};
const proxyOutputs = (instance, el, events) => {
    events.forEach((eventName) => (instance[eventName] = fromEvent(el, eventName)));
};
const defineCustomElement = (tagName, customElement) => {
    if (customElement !== undefined && typeof customElements !== 'undefined' && !customElements.get(tagName)) {
        customElements.define(tagName, customElement);
    }
};
// tslint:disable-next-line: only-arrow-functions
function ProxyCmp(opts) {
    const decorator = function (cls) {
        const { defineCustomElementFn, inputs, methods } = opts;
        if (defineCustomElementFn !== undefined) {
            defineCustomElementFn();
        }
        if (inputs) {
            proxyInputs(cls, inputs);
        }
        if (methods) {
            proxyMethods(cls, methods);
        }
        return cls;
    };
    return decorator;
}

let MyBadge = class MyBadge {
    z;
    el;
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: MyBadge, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.2.11", type: MyBadge, isStandalone: true, selector: "my-badge", inputs: { color: "color", pill: "pill", size: "size" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
};
MyBadge = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineCustomElement$1,
        inputs: ['color', 'pill', 'size']
    })
], MyBadge);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: MyBadge, decorators: [{
            type: Component,
            args: [{
                    selector: 'my-badge',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['color', 'pill', 'size'],
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let MyButton = class MyButton {
    z;
    el;
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: MyButton, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.2.11", type: MyButton, isStandalone: true, selector: "my-button", inputs: { disabled: "disabled", size: "size", variant: "variant" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
};
MyButton = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineCustomElement$2,
        inputs: ['disabled', 'size', 'variant']
    })
], MyButton);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: MyButton, decorators: [{
            type: Component,
            args: [{
                    selector: 'my-button',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['disabled', 'size', 'variant'],
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let MyCard = class MyCard {
    z;
    el;
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: MyCard, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.2.11", type: MyCard, isStandalone: true, selector: "my-card", inputs: { cardTitle: "cardTitle", elevation: "elevation", subtitle: "subtitle" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
};
MyCard = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineCustomElement$3,
        inputs: ['cardTitle', 'elevation', 'subtitle']
    })
], MyCard);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: MyCard, decorators: [{
            type: Component,
            args: [{
                    selector: 'my-card',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['cardTitle', 'elevation', 'subtitle'],
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let MyComponent = class MyComponent {
    z;
    el;
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: MyComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.2.11", type: MyComponent, isStandalone: true, selector: "my-component", inputs: { first: "first", last: "last", middle: "middle" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
};
MyComponent = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineCustomElement$4,
        inputs: ['first', 'last', 'middle']
    })
], MyComponent);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: MyComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'my-component',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['first', 'last', 'middle'],
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });

const DIRECTIVES = [
    MyBadge,
    MyButton,
    MyCard,
    MyComponent
];

/*
 * Public API Surface of component-library
 */
// export * from './lib/component-library';

/**
 * Generated bundle index. Do not edit.
 */

export { DIRECTIVES, MyBadge, MyButton, MyCard, MyComponent };
//# sourceMappingURL=component-library.mjs.map
