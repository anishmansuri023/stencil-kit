'use strict';

var index = require('./index-BrMvRGjk.js');

const myBadgeCss = () => `:host{display:inline-block}.badge{display:inline-flex;align-items:center;justify-content:center;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;font-weight:600;border-radius:4px;transition:all 0.2s ease}.badge--pill{border-radius:100px}.badge--small{padding:4px 8px;font-size:11px;line-height:1}.badge--medium{padding:6px 12px;font-size:13px;line-height:1}.badge--large{padding:8px 16px;font-size:15px;line-height:1}.badge--success{background-color:#10b981;color:white}.badge--warning{background-color:#f59e0b;color:white}.badge--error{background-color:#ef4444;color:white}.badge--info{background-color:#3b82f6;color:white}.badge--neutral{background-color:#6b7280;color:white}.badge:hover{opacity:0.9;transform:scale(1.05)}`;

const MyBadge = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
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
        return (index.h("span", { key: '33a316730b54199e32c7ecbd1160997411e5ff95', class: `badge badge--${this.color} badge--${this.size} ${this.pill ? 'badge--pill' : ''}` }, index.h("slot", { key: 'eb7a3e46ea27e7d714dcc60723ca7f5801204674' })));
    }
};
MyBadge.style = myBadgeCss();

exports.my_badge = MyBadge;
