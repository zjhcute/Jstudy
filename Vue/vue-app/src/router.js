import Router from 'vue-router'
import Vue from 'vue'
import Home from './views/Home'
Vue.use(Router);
export default new Router({
  mode: 'history',
  linkExactActiveClass: 'exact-active',
  linkActiveClass: 'link-active',
  routes: [
    {
      path: '/notfound',
      name: 'notfound',
      component: () => import('./views/Notfound.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      // beforeEnter(to, from, next) {
      //   console.log('beforeEnter');
      //   next();
      // }
    },
    {
      path: '/learn',
      name: 'learn',
      component: () => import('./views/Learn')
    },
    {
      path: '/hero',
      name: 'hero',
      component: () => import('./views/Hero'),
      meta: {
        login: true
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About')
    },
    {
      path: '/community',
      name: 'community',
      component: () => import('./views/Community'),
      meta: {
        login: true
      },
      redirect: '/community/academic',
      children: [
        {
          path: 'academic',
          name: 'academic',
          component: () => import('./views/Academic.vue')
        },
        {
          path: 'task',
          name: 'task',
          component: () => import('./views/Task.vue')
        },
        {
          path: 'person',
          name: 'person',
          component: () => import('./views/Person.vue')
        }
      ]
    },
    {
      path: '/question/:id',
      name: 'question',
      component: () => import('./views/Question.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '*',
      redirect: (to) => {
        if(to.path === '/') {
          return '/home'
        }else {
          return '/notfound'
        }
      }
    }
  ]
})








































// import Vue from 'vue'
// import Router from 'vue-router'
// import Home from './views/Home.vue'

// Vue.use(Router)

// export default new Router({
//   mode: 'history',
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: Home
//     },
//     {
//       path: '/about',
//       name: 'about',
//       // route level code-splitting
//       // this generates a separate chunk (about.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
//     }
//   ]
// })
