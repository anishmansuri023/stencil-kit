import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-card',
  styleUrl: 'my-card.css',
  shadow: true,
})
export class MyCard {
  /**
   * Card title
   */
  @Prop() cardTitle: string;

  /**
   * Card subtitle
   */
  @Prop() subtitle: string;

  /**
   * Card elevation (shadow depth)
   */
  @Prop() elevation: 'low' | 'medium' | 'high' = 'medium';

  render() {
    return (
      <div class={`card card--${this.elevation}`}>
        {this.cardTitle && (
          <div class="card__header">
            <h3 class="card__title">{this.cardTitle}</h3>
            {this.subtitle && <p class="card__subtitle">{this.subtitle}</p>}
          </div>
        )}
        <div class="card__content">
          <slot></slot>
        </div>
        <div class="card__footer">
          <slot name="footer"></slot>
        </div>
      </div>
    );
  }
}
