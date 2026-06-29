import { Component, Prop, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'my-input',
  styleUrl: 'my-input.css',
  shadow: true,
})
export class MyInput {
  @Prop() label: string = '';
  @Prop() placeholder: string = '';
  @Prop() value: string = '';
  @Prop() type: 'text' | 'email' | 'password' | 'number' | 'tel' = 'text';
  @Prop() error: string = '';
  @Prop() disabled: boolean = false;
  @Prop() required: boolean = false;

  @Event() myChange: EventEmitter<string>;
  @Event() myBlur: EventEmitter<void>;

  render() {
    return (
      <div class={`input-wrapper ${this.error ? 'input-wrapper--error' : ''}`}>
        {this.label && (
          <label class="input-label">
            {this.label}
            {this.required && <span class="input-required">*</span>}
          </label>
        )}
        <input
          class="input-field"
          type={this.type}
          placeholder={this.placeholder}
          value={this.value}
          disabled={this.disabled}
          onInput={(e: Event) => this.myChange.emit((e.target as HTMLInputElement).value)}
          onBlur={() => this.myBlur.emit()}
        />
        {this.error && <span class="input-error">{this.error}</span>}
      </div>
    );
  }
}
