import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-button',
  styleUrl: 'my-button.css',
  shadow: true,
})
export class MyButton {
  /**
   * The button variant
   */
  @Prop() variant: 'primary' | 'secondary' | 'danger' = 'primary';

  /**
   * The button size
   */
  @Prop() size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * Disabled state
   */
  @Prop() disabled: boolean = false;

  render() {
    return (
      <button
        class={`btn btn--${this.variant} btn--${this.size}`}
        disabled={this.disabled}
      >
        <slot></slot>
      </button>
    );
  }
}
