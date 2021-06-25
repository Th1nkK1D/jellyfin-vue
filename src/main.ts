import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import { createI18n } from 'vue-i18n';

import { setupLayouts } from 'virtual:generated-layouts';
import messages from '@intlify/vite-plugin-vue-i18n/messages';

import Vuetify from './plugins/vuetify';
import App from './App.vue';
import { store, key } from './store';
import routes from './routes';

const i18n = createI18n({
  legacy: false,
  messages
});
const app = createApp(App);
const router = createRouter({
  history: createWebHashHistory(),
  routes: setupLayouts(routes)
});

app.use(i18n);
app.use(Vuetify);
app.use(store, key);
app.use(router);

app.mount('#app');
