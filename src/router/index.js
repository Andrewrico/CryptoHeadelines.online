import Vue from 'vue'
import Router from 'vue-router'
import App from '@/components/Index'

Vue.use(Router)

export default new Router({
  mode:'history', 
  hash: false,
  routes: [
    {
      path: '/',
      name: 'App',
      component: App
    },
    { path: '*', redirect: '/' }, 
  ],
  
})