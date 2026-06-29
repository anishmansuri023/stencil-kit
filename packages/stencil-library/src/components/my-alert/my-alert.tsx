import { Component, Prop, State, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'my-alert',
  styleUrl: 'my-alert.css',
  shadow: true,
})
export class MyAlert {
  @Prop() type: 'success' | 'warning' | 'error' | 'info' = 'info';
  @Prop() alertTitle: string = '';
  @Prop() dismissible: boolean = false;

  @State() dismissed: boolean = false;

  @Event() myDismiss: EventEmitter<void>;

  private icons = {
    success: '✓',
    warning: '⚠',
    error: '✕',
    info: 'ℹ',
  };

  private dismiss() {
    this.dismissed = true;
    this.myDismiss.emit();
  }

  render() {
    if (this.dismissed) return null;

    return (
      <div class={`alert alert--${this.type}`} role="alert">
        <span class="alert-icon">{this.icons[this.type]}</span>
        <div class="alert-content">
          {this.alertTitle && <strong class="alert-title">{this.alertTitle}</strong>}
          <span class="alert-message"><slot></slot></span>
        </div>
        {this.dismissible && (
          <button class="alert-dismiss" onClick={() => this.dismiss()}>✕</button>
        )}
      </div>
    );
  }
}
