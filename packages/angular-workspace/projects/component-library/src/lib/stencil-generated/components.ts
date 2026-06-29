/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Output, NgZone } from '@angular/core';

import { ProxyCmp } from './angular-component-lib/utils';

import type { Components } from '@stencil-kit/core/components';

import { defineCustomElement as defineMyAlert } from '@stencil-kit/core/components/my-alert.js';
import { defineCustomElement as defineMyBadge } from '@stencil-kit/core/components/my-badge.js';
import { defineCustomElement as defineMyButton } from '@stencil-kit/core/components/my-button.js';
import { defineCustomElement as defineMyCard } from '@stencil-kit/core/components/my-card.js';
import { defineCustomElement as defineMyComponent } from '@stencil-kit/core/components/my-component.js';
import { defineCustomElement as defineMyDropdown } from '@stencil-kit/core/components/my-dropdown.js';
import { defineCustomElement as defineMyInput } from '@stencil-kit/core/components/my-input.js';
import { defineCustomElement as defineMyModal } from '@stencil-kit/core/components/my-modal.js';
@ProxyCmp({
  defineCustomElementFn: defineMyAlert,
  inputs: ['alertTitle', 'dismissible', 'type']
})
@Component({
  selector: 'my-alert',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['alertTitle', 'dismissible', 'type'],
  outputs: ['myDismiss'],
})
export class MyAlert {
  protected el: HTMLMyAlertElement;
  @Output() myDismiss = new EventEmitter<MyAlertCustomEvent<void>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { MyAlertCustomEvent } from '@stencil-kit/core/components';

export declare interface MyAlert extends Components.MyAlert {

  myDismiss: EventEmitter<MyAlertCustomEvent<void>>;
}


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


@ProxyCmp({
  defineCustomElementFn: defineMyDropdown,
  inputs: ['disabled', 'error', 'label', 'options', 'placeholder', 'value']
})
@Component({
  selector: 'my-dropdown',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'error', 'label', 'options', 'placeholder', 'value'],
  outputs: ['myChange'],
})
export class MyDropdown {
  protected el: HTMLMyDropdownElement;
  @Output() myChange = new EventEmitter<MyDropdownCustomEvent<string>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { MyDropdownCustomEvent } from '@stencil-kit/core/components';

export declare interface MyDropdown extends Components.MyDropdown {

  myChange: EventEmitter<MyDropdownCustomEvent<string>>;
}


@ProxyCmp({
  defineCustomElementFn: defineMyInput,
  inputs: ['disabled', 'error', 'label', 'placeholder', 'required', 'type', 'value']
})
@Component({
  selector: 'my-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'error', 'label', 'placeholder', 'required', 'type', 'value'],
  outputs: ['myChange', 'myBlur'],
})
export class MyInput {
  protected el: HTMLMyInputElement;
  @Output() myChange = new EventEmitter<MyInputCustomEvent<string>>();
  @Output() myBlur = new EventEmitter<MyInputCustomEvent<void>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { MyInputCustomEvent } from '@stencil-kit/core/components';

export declare interface MyInput extends Components.MyInput {

  myChange: EventEmitter<MyInputCustomEvent<string>>;

  myBlur: EventEmitter<MyInputCustomEvent<void>>;
}


@ProxyCmp({
  defineCustomElementFn: defineMyModal,
  inputs: ['modalTitle', 'open', 'size']
})
@Component({
  selector: 'my-modal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['modalTitle', 'open', 'size'],
  outputs: ['myClose'],
})
export class MyModal {
  protected el: HTMLMyModalElement;
  @Output() myClose = new EventEmitter<MyModalCustomEvent<void>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { MyModalCustomEvent } from '@stencil-kit/core/components';

export declare interface MyModal extends Components.MyModal {

  myClose: EventEmitter<MyModalCustomEvent<void>>;
}


