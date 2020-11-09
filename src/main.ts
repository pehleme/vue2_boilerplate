import '@/main.scss';

import { router } from '@/app/app-router';
import { store } from '@/app/app-store';
import App from '@/app/App.vue';
import { i18n, vuetify } from '@/plugins';
import Vue from 'vue';
import VueHead from 'vue-head';

Vue.config.productionTip = false;

Vue.use(VueHead);

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
