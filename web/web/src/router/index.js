import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import layout from '@/views/layout'
import userMsg from '@/views/userManage/userMsg.vue'
import login from '@/views/login/login.vue'
import pro2 from '@/views/pro2/pro2.vue'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      // 但只加载父组件，子组件不会渲染
      path: '/',
      name: 'projectManage',
      component: layout,
      redirect: 'userMsg',   // 加上重定向，使加载layout组件时也加载子组件userMsg
      children: [
        {
          // 当子组件userMsg渲染成功时，父组件layout也会跟着渲染成功
          path: '/userMsg',
          name: 'userMsg',
          component: userMsg,
        },
        {
          path: '/login',
          name: 'login',
          component: login,
        },
        {
          path: '/pro2',
          name: 'pro2',
          component: pro2,
        }
      ]
    }
  ]
})
