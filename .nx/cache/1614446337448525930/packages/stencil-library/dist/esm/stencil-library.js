import { p as promiseResolve, b as bootstrapLazy } from './index-Bdf40fwG.js';
export { s as setNonce } from './index-Bdf40fwG.js';
import { g as globalScripts } from './app-globals-DQuL1Twl.js';

/*
 Stencil Client Patch Browser v4.43.5 | MIT Licensed | https://stenciljs.com
 */

var patchBrowser = () => {
  const importMeta = import.meta.url;
  const opts = {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await globalScripts();
  return bootstrapLazy([["my-badge",[[769,"my-badge",{"color":[1],"size":[1],"pill":[4]}]]],["my-button",[[769,"my-button",{"variant":[1],"size":[1],"disabled":[4]}]]],["my-card",[[769,"my-card",{"cardTitle":[1,"card-title"],"subtitle":[1],"elevation":[1]}]]],["my-component",[[513,"my-component",{"first":[1],"middle":[1],"last":[1]}]]]], options);
});
