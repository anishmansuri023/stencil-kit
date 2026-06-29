import { Component, Prop, State, Event, EventEmitter, h } from '@stencil/core';

export interface DropdownOption {
  label: string;
  value: string;
}

@Component({
  tag: 'my-dropdown',
  styleUrl: 'my-dropdown.css',
  shadow: true,
})
export class MyDropdown {
  @Prop() options: DropdownOption[] | string = [];
  @Prop({ mutable: true }) value: string = '';
  @Prop() placeholder: string = 'Select an option';
  @Prop() label: string = '';
  @Prop() disabled: boolean = false;
  @Prop() error: string = '';

  @State() isOpen: boolean = false;

  @Event() myChange: EventEmitter<string>;

  private get parsedOptions(): DropdownOption[] {
    if (typeof this.options === 'string') {
      try { return JSON.parse(this.options); } catch { return []; }
    }
    return this.options;
  }

  private get selectedLabel(): string {
    const found = this.parsedOptions.find(o => o.value === this.value);
    return found ? found.label : this.placeholder;
  }

  private select(value: string) {
    this.value = value;
    this.myChange.emit(value);
    this.isOpen = false;
  }

  render() {
    return (
      <div class={`dropdown-wrapper ${this.error ? 'dropdown-wrapper--error' : ''}`}>
        {this.label && <label class="dropdown-label">{this.label}</label>}
        <div class={`dropdown ${this.isOpen ? 'dropdown--open' : ''} ${this.disabled ? 'dropdown--disabled' : ''}`}>
          <button
            class="dropdown-trigger"
            disabled={this.disabled}
            onClick={() => !this.disabled && (this.isOpen = !this.isOpen)}
          >
            <span class={!this.value ? 'dropdown-placeholder' : ''}>{this.selectedLabel}</span>
            <span class="dropdown-arrow">{this.isOpen ? '▲' : '▼'}</span>
          </button>
          {this.isOpen && (
            <ul class="dropdown-menu">
              {this.parsedOptions.map(option => (
                <li
                  class={`dropdown-item ${option.value === this.value ? 'dropdown-item--selected' : ''}`}
                  onClick={() => this.select(option.value)}
                >
                  {option.label}
                </li>
              ))}
            </ul>
          )}
        </div>
        {this.error && <span class="dropdown-error">{this.error}</span>}
      </div>
    );
  }
}
