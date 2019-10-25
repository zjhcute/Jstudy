import Vue from 'vue'
import Router from 'vue-router'
import Default from '@/layout/default'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'default',
      component: Default,
      redirect: '/index',
      children: [
        {
          path: 'index',
          name: 'index',
          component: () => import('../views/index.vue')
        },
        {
          path: 'changecity',
          name: 'changeCity',
          component: () => import('../views/changeCity.vue')
        },
        {
          path: 'product',
          name: 'product',
          component: () => import('../views/product.vue')
        }
      ]
    },
    {
      path: '/blank',
      name: 'blankPage',
      component: () => import('../layout/blank.vue')
    }
  ]
})
