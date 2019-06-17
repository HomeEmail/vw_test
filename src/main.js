import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './common.less';
// 修复vierport特性的在某些浏览器上的错误行为
const hacks = require('viewport-units-buggyfill/viewport-units-buggyfill.hacks');
require('viewport-units-buggyfill').init({
  hacks,
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
