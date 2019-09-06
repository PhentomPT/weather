import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
      beforeEnter: (to, from, next) => {
        const loggedIn = true
        if (loggedIn) {
          next({ name: 'Login' })
        }

        next()
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      beforeEnter: (to, from, next) => {
        next()
      }
    }
  ]
})
