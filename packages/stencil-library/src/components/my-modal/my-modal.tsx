import { Component, Prop, Event, EventEmitter, Watch, h } from '@stencil/core';

@Component({
  tag: 'my-modal',
  styleUrl: 'my-modal.css',
  shadow: true,
})
export class MyModal {
  @Prop({ mutable: true }) open: boolean = false;
  @Prop() modalTitle: string = '';
  @Prop() size: 'small' | 'medium' | 'large' = 'medium';

  @Event() myClose: EventEmitter<void>;

  @Watch('open')
  handleOpenChange(open: boolean) {
    document.body.style.overflow = open ? 'hidden' : '';
  }

  private close() {
    this.open = false;
    this.myClose.emit();
  }

  render() {
    if (!this.open) return null;

    return (
      <div class="modal-overlay" onClick={() => this.close()}>
        <div class={`modal modal--${this.size}`} onClick={(e) => e.stopPropagation()}>
          <div class="modal-header">
            <span class="modal-title">{this.modalTitle}</span>
            <button class="modal-close" onClick={() => this.close()}>✕</button>
          </div>
          <div class="modal-body">
            <slot></slot>
          </div>
          <div class="modal-footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    );
  }
}
