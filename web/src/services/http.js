import axios from 'axios'
import store from '../store/store'

axios.defaults.baseURL = 'http://localhost:8000'

export default {
  async get (url, headers = {}) {
    return this.send('get', url, null, headers)
  },
  async post (url, body = null, headers = {}) {
    return this.send('post', url, body)
  },
  async send (method, url, data = null, headers = {}) {
    headers = {
      ...headers,
      'content-type': 'application/json'
    }

    if (store.getters.token) {
      headers['x-api-token'] = store.getters.token
    }

    return axios({
      method,
      url,
      data,
      headers
    })
  }
}
