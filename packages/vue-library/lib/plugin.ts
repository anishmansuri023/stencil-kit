// packages/vue-library/lib/plugin.ts

import { Plugin } from 'vue';
import { defineCustomElements } from 'stencil-library/loader';

export const ComponentLibrary: Plugin = {
  async install() {
    defineCustomElements();
  },
};