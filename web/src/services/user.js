import http from './http'
import store from '../store/store'

export default {
  async login (user, password) {
    const response = await http.post('/login', { user, password })

    if (response.status !== 200) {
      return false
    }

    store.dispatch('updateToken', response.data.content.token)

    return true
  },
  async logout () {
    const response = await http.get(`/logout`)

    if (response.status !== 200) {
      return false
    }

    store.dispatch('updateToken', null)

    return true
  }
}
