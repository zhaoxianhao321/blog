import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import ElementUi from 'element-ui'
import '@/theme-et/index.css'

Vue.use(ElementUi)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    }
  ]
})
