// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
// vue-router
import router from './router'
// element-ui
import ElementUI from 'element-ui'
// 引用api文件
import api from './api/index'
// 将api方法绑定到全局中
Vue.prototype.$api = api;
Vue.use(ElementUI);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
