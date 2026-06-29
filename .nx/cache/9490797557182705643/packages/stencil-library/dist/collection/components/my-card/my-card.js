import { h } from "@stencil/core";
export class MyCard {
    /**
     * Card title
     */
    cardTitle;
    /**
     * Card subtitle
     */
    subtitle;
    /**
     * Card elevation (shadow depth)
     */
    elevation = 'medium';
    render() {
        return (h("div", { key: '771331816e786b93963b10dcc4577c89da6385c5', class: `card card--${this.elevation}` }, this.cardTitle && (h("div", { key: '525c2dfdda668cb45895f6f1e9b55e6923b9538d', class: "card__header" }, h("h3", { key: 'a3025832b6ce60e73dce68f575bca6fbb1143913', class: "card__title" }, this.cardTitle), this.subtitle && h("p", { key: '3c3f094449a06aa41b63db17b3ab27e7e29be437', class: "card__subtitle" }, this.subtitle))), h("div", { key: '628c69443cf48fb07ee98fde44c0c2f6de148ed5', class: "card__content" }, h("slot", { key: 'f0c2c156603f2179314e7c58aabefbeda3b2e911' })), h("div", { key: '8f5a30d595399c6a606a5cde67c393aca93e3d0d', class: "card__footer" }, h("slot", { key: '1cb72bdc25ce96673d85c9fc86ff5661975cd412', name: "footer" }))));
    }
    static get is() { return "my-card"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["my-card.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["my-card.css"]
        };
    }
    static get properties() {
        return {
            "cardTitle": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Card title"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "card-title"
            },
            "subtitle": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Card subtitle"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "subtitle"
            },
            "elevation": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'low' | 'medium' | 'high'",
                    "resolved": "\"high\" | \"low\" | \"medium\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Card elevation (shadow depth)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "elevation",
                "defaultValue": "'medium'"
            }
        };
    }
}
