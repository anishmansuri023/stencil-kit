'use strict';

var index = require('./index-BrMvRGjk.js');

const myButtonCss = () => `:host{display:inline-block}.btn{font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;font-weight:600;border:none;border-radius:8px;cursor:pointer;transition:all 0.2s ease;text-align:center;display:inline-flex;align-items:center;justify-content:center;gap:8px}.btn:hover:not(:disabled){transform:translateY(-2px);box-shadow:0 4px 12px rgba(0, 0, 0, 0.15)}.btn:active:not(:disabled){transform:translateY(0)}.btn:disabled{opacity:0.5;cursor:not-allowed}.btn--small{padding:8px 16px;font-size:14px}.btn--medium{padding:12px 24px;font-size:16px}.btn--large{padding:16px 32px;font-size:18px}.btn--primary{background:linear-gradient(135deg, #667eea 0%, #764ba2 100%);color:white}.btn--primary:hover:not(:disabled){background:linear-gradient(135deg, #5568d3 0%, #63408a 100%)}.btn--secondary{background:linear-gradient(135deg, #f093fb 0%, #f5576c 100%);color:white}.btn--secondary:hover:not(:disabled){background:linear-gradient(135deg, #d97ee0 0%, #db4a5d 100%)}.btn--danger{background:linear-gradient(135deg, #fa709a 0%, #fee140 100%);color:#333}.btn--danger:hover:not(:disabled){background:linear-gradient(135deg, #e55d87 0%, #e5ca2b 100%)}`;

const MyButton = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    /**
     * The button variant
     */
    variant = 'primary';
    /**
     * The button size
     */
    size = 'medium';
    /**
     * Disabled state
     */
    disabled = false;
    render() {
        return (index.h("button", { key: '94d04ac3ac7441f76510463322200c2b7a01d569', class: `btn btn--${this.variant} btn--${this.size}`, disabled: this.disabled }, index.h("slot", { key: '80f6c9a56010f80635288b16804d33c780232da5' })));
    }
};
MyButton.style = myButtonCss();

exports.my_button = MyButton;
