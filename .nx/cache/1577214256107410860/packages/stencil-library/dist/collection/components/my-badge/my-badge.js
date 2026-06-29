import { h } from "@stencil/core";
export class MyBadge {
    /**
     * Badge color variant
     */
    color = 'neutral';
    /**
     * Badge size
     */
    size = 'medium';
    /**
     * Rounded pill style
     */
    pill = false;
    render() {
        return (h("span", { key: '33a316730b54199e32c7ecbd1160997411e5ff95', class: `badge badge--${this.color} badge--${this.size} ${this.pill ? 'badge--pill' : ''}` }, h("slot", { key: 'eb7a3e46ea27e7d714dcc60723ca7f5801204674' })));
    }
    static get is() { return "my-badge"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["my-badge.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["my-badge.css"]
        };
    }
    static get properties() {
        return {
            "color": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'success' | 'warning' | 'error' | 'info' | 'neutral'",
                    "resolved": "\"error\" | \"info\" | \"neutral\" | \"success\" | \"warning\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Badge color variant"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "color",
                "defaultValue": "'neutral'"
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
                    "text": "Badge size"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "size",
                "defaultValue": "'medium'"
            },
            "pill": {
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
                    "text": "Rounded pill style"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "pill",
                "defaultValue": "false"
            }
        };
    }
}
