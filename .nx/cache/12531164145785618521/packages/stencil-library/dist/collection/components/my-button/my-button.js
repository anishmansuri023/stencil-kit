import { h } from "@stencil/core";
export class MyButton {
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
        return (h("button", { key: '94d04ac3ac7441f76510463322200c2b7a01d569', class: `btn btn--${this.variant} btn--${this.size}`, disabled: this.disabled }, h("slot", { key: '80f6c9a56010f80635288b16804d33c780232da5' })));
    }
    static get is() { return "my-button"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["my-button.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["my-button.css"]
        };
    }
    static get properties() {
        return {
            "variant": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'primary' | 'secondary' | 'danger'",
                    "resolved": "\"danger\" | \"primary\" | \"secondary\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The button variant"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "variant",
                "defaultValue": "'primary'"
            },
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'small' | 'medium' | 'large'",
                    "resolved": "\"large\" | \"medium\" | \"small\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The button size"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "size",
                "defaultValue": "'medium'"
            },
            "disabled": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Disabled state"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "disabled",
                "defaultValue": "false"
            }
        };
    }
}
