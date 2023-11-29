import Vue from 'vue';
import App from './App.vue';
import router from './router';
import stor from './store';

Vue.config.productionTip = false;

new Vue({
  router,
  stor,
  render: (h) => h(App),
}).$mount('#app');
