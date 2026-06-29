/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone } from '@angular/core';

import { ProxyCmp } from './angular-component-lib/utils';

import type { Components } from '@stencil-kit/core/components';

import { defineCustomElement as defineMyBadge } from '@stencil-kit/core/components/my-badge.js';
import { defineCustomElement as defineMyButton } from '@stencil-kit/core/components/my-button.js';
import { defineCustomElement as defineMyCard } from '@stencil-kit/core/components/my-card.js';
import { defineCustomElement as defineMyComponent } from '@stencil-kit/core/components/my-component.js';
@ProxyCmp({
  defineCustomElementFn: defineMyBadge,
  inputs: ['color', 'pill', 'size']
})
@Component({
  selector: 'my-badge',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'pill', 'size'],
})
export class MyBadge {
  protected el: HTMLMyBadgeElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MyBadge extends Components.MyBadge {}


@ProxyCmp({
  defineCustomElementFn: defineMyButton,
  inputs: ['disabled', 'size', 'variant']
})
@Component({
  selector: 'my-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'size', 'variant'],
})
export class MyButton {
  protected el: HTMLMyButtonElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MyButton extends Components.MyButton {}


@ProxyCmp({
  defineCustomElementFn: defineMyCard,
  inputs: ['cardTitle', 'elevation', 'subtitle']
})
@Component({
  selector: 'my-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['cardTitle', 'elevation', 'subtitle'],
})
export class MyCard {
  protected el: HTMLMyCardElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MyCard extends Components.MyCard {}


@ProxyCmp({
  defineCustomElementFn: defineMyComponent,
  inputs: ['first', 'last', 'middle']
})
@Component({
  selector: 'my-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['first', 'last', 'middle'],
})
export class MyComponent {
  protected el: HTMLMyComponentElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MyComponent extends Components.MyComponent {}


