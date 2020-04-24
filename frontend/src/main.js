import Vue from 'vue';
import App from './App.vue';
import router from "./routes/index.js";
import store from "./store/index.js";
import VueDisqus from 'vue-disqus';


import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);
Vue.use(VueDisqus);


Vue.config.productionTip = false

new Vue({
  router, store,
  render: h => h(App),
}).$mount('#app')
