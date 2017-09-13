import Vue from 'vue';
import VueCurrencyFilter from 'vue-currency-filter';

import App from './App.vue';

Vue.use(VueCurrencyFilter, {symbol : '$',fractionCount: '2', fractionSeparator: '.'});

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
