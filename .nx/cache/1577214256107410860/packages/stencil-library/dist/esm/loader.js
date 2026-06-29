import { b as bootstrapLazy } from './index-BxR2ZwFH.js';
export { s as setNonce } from './index-BxR2ZwFH.js';
import { g as globalScripts } from './app-globals-DQuL1Twl.js';

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await globalScripts();
  return bootstrapLazy([["my-badge",[[769,"my-badge",{"color":[1],"size":[1],"pill":[4]}]]],["my-button",[[769,"my-button",{"variant":[1],"size":[1],"disabled":[4]}]]],["my-card",[[769,"my-card",{"cardTitle":[1,"card-title"],"subtitle":[1],"elevation":[1]}]]],["my-component",[[513,"my-component",{"first":[1],"middle":[1],"last":[1]}]]]], options);
};

export { defineCustomElements };
