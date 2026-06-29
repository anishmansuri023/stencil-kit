'use strict';

var index = require('./index-CycT25HB.js');
var appGlobals = require('./app-globals-V2Kpy_OQ.js');

var _documentCurrentScript = typeof document !== 'undefined' ? document.currentScript : null;
/*
 Stencil Client Patch Browser v4.43.4 | MIT Licensed | https://stenciljs.com
 */

var patchBrowser = () => {
  const importMeta = (typeof document === 'undefined' ? require('u' + 'rl').pathToFileURL(__filename).href : (_documentCurrentScript && _documentCurrentScript.tagName.toUpperCase() === 'SCRIPT' && _documentCurrentScript.src || new URL('stencil-library.cjs.js', document.baseURI).href));
  const opts = {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return index.promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await appGlobals.globalScripts();
  return index.bootstrapLazy([["my-badge.cjs",[[769,"my-badge",{"color":[1],"size":[1],"pill":[4]}]]],["my-button.cjs",[[769,"my-button",{"variant":[1],"size":[1],"disabled":[4]}]]],["my-card.cjs",[[769,"my-card",{"cardTitle":[1,"card-title"],"subtitle":[1],"elevation":[1]}]]],["my-component.cjs",[[513,"my-component",{"first":[1],"middle":[1],"last":[1]}]]]], options);
});

exports.setNonce = index.setNonce;
