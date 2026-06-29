'use strict';

var index = require('./index-BrMvRGjk.js');
var appGlobals = require('./app-globals-V2Kpy_OQ.js');

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await appGlobals.globalScripts();
  return index.bootstrapLazy([["my-badge.cjs",[[769,"my-badge",{"color":[1],"size":[1],"pill":[4]}]]],["my-button.cjs",[[769,"my-button",{"variant":[1],"size":[1],"disabled":[4]}]]],["my-card.cjs",[[769,"my-card",{"cardTitle":[1,"card-title"],"subtitle":[1],"elevation":[1]}]]],["my-component.cjs",[[513,"my-component",{"first":[1],"middle":[1],"last":[1]}]]]], options);
};

exports.setNonce = index.setNonce;
exports.defineCustomElements = defineCustomElements;
