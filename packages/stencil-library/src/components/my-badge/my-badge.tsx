import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-badge',
  styleUrl: 'my-badge.css',
  shadow: true,
})
export class MyBadge {
  /**
   * Badge color variant
   */
  @Prop() color: 'success' | 'warning' | 'error' | 'info' | 'neutral' = 'neutral';

  /**
   * Badge size
   */
  @Prop() size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * Rounded pill style
   */
  @Prop() pill: boolean = false;

  render() {
    return (
      <span class={`badge badge--${this.color} badge--${this.size} ${this.pill ? 'badge--pill' : ''}`}>
        <slot></slot>
      </span>
    );
  }
}
