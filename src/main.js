// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import  VueResource  from 'vue-resource'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import Mint from 'mint-ui';
import "mint-ui/lib/style.css"
import './assets/css/ji_vue.scss'
import axios from 'axios'

Vue.config.productionTip = false;
Vue.use(ElementUI);//全局使用ElenmentUI
Vue.use(Mint);
Vue.use(VueResource) ;
Vue.prototype.$ajax = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
