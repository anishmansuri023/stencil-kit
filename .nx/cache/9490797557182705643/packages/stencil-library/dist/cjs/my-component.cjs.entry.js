'use strict';

var index = require('./index-CycT25HB.js');
var index$1 = require('./index.cjs.js');

const myComponentCss = () => `:host{display:block}`;

const MyComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    /**
     * The first name
     */
    first;
    /**
     * The middle name
     */
    middle;
    /**
     * The last name
     */
    last;
    getText() {
        return index$1.format(this.first, this.middle, this.last);
    }
    render() {
        return index.h("div", { key: '543ff9a15c7d307e7e59a1143b033faeee29b1cb' }, "Hello, World! I'm ", this.getText());
    }
};
MyComponent.style = myComponentCss();

exports.my_component = MyComponent;
