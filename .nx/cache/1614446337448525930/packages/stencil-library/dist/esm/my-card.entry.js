import { r as registerInstance, h } from './index-Bdf40fwG.js';

const myCardCss = () => `:host{display:block}.card{background:white;border-radius:12px;overflow:hidden;transition:all 0.3s ease;border:1px solid #e5e7eb}.card:hover{transform:translateY(-4px)}.card--low{box-shadow:0 1px 3px rgba(0, 0, 0, 0.1)}.card--low:hover{box-shadow:0 4px 6px rgba(0, 0, 0, 0.1)}.card--medium{box-shadow:0 4px 6px rgba(0, 0, 0, 0.1)}.card--medium:hover{box-shadow:0 10px 15px rgba(0, 0, 0, 0.15)}.card--high{box-shadow:0 10px 15px rgba(0, 0, 0, 0.15)}.card--high:hover{box-shadow:0 20px 25px rgba(0, 0, 0, 0.2)}.card__header{padding:24px 24px 0}.card__title{margin:0;font-size:24px;font-weight:700;color:#1f2937;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif}.card__subtitle{margin:8px 0 0;font-size:14px;color:#6b7280;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif}.card__content{padding:24px;color:#374151;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;line-height:1.6}.card__footer{padding:0 24px 24px;display:flex;gap:12px;align-items:center}.card__footer:empty{display:none}`;

const MyCard = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
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
};
MyCard.style = myCardCss();

export { MyCard as my_card };
