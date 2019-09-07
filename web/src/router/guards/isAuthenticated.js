import store from '@/store/store'

export default (callback) => {
  return (to, from, next) => {
    const loggedIn = store.getters.token
    if (!loggedIn) {
      return next({ name: 'login' })
    }

    callback(to, from, next)
  }
}
