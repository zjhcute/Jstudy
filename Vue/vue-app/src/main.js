import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles/reset.css'
import store from './store/index'

Vue.config.productionTip = false
// router.beforeEach((to, from, next) => {
//   console.log('beforeEach');
//   next();
// })
// router.beforeResolve((to, from, next) => {
//   console.log('beforeResolve');
//   next();
// })
// router.afterEach((to, from) => {
//   console.log('afterEach');
// })

router.beforeEach((to, from, next) => {
  const needLogin = to.matched.some(route => route.meta && route.meta.login);
  if(needLogin) {
    const hasLogin = document.cookie.includes('login=true');
    if(hasLogin) {
      next();
      return;
    } else {
      const isLogin = window.confirm('该功能登入后开放, 现在登入吗?')
      if(isLogin) {
        next({
          name: 'login'
        })
        return
      }
    }
  }
  // console.log(needLogin);
  next();
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
