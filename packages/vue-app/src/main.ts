import './assets/main.css'
import { ComponentLibrary } from '@stencil-kit/vue';

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).use(ComponentLibrary).mount('#app')
