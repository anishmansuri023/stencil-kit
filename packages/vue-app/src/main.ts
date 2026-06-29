import './assets/main.css'
import { ComponentLibrary } from 'vue-library';

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).use(ComponentLibrary).mount('#app')
