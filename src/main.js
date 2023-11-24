import { createApp } from 'vue'
import App from './App.vue'
import router  from './router';
import { defineCustomElements } from "librarymanagement-afnan-stencil-project/loader";

defineCustomElements(window)

createApp(App).use(router).mount('#app')
