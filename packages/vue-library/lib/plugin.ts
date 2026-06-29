// packages/vue-library/lib/plugin.ts

import { Plugin } from 'vue';
import { defineCustomElements } from '@stencil-kit/core/loader';

export const ComponentLibrary: Plugin = {
  async install() {
    defineCustomElements();
  },
};