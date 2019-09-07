import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/store'
import isAuthenticated from './guards/isAuthenticated'

const Today = resolve => {
  require.ensure(['@/components/dashboard/Today'], () => {
    resolve(require('@/components/dashboard/Today'))
  }, 'today')
}

const History = resolve => {
  require.ensure(['@/components/dashboard/History'], () => {
    resolve(require('@/components/dashboard/History'))
  }, 'history')
}

const Login = resolve => {
  require.ensure(['@/components/auth/Login'], () => {
    resolve(require('@/components/auth/Login'))
  }, 'login')
}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'today',
      component: Today,
      beforeEnter: isAuthenticated((to, from, next) => {
        next()
      })
    },
    {
      path: '/history',
      name: 'history',
      component: History,
      beforeEnter: isAuthenticated((to, from, next) => {
        next()
      })
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      beforeEnter: (to, from, next) => {
        console.log('before enter login')
        const loggedIn = store.getters.token
        if (loggedIn) {
          return next({ name: 'today' })
        }

        next()
      }
    },
    { path: '*', redirect: { name: 'today' } }
  ]
})
