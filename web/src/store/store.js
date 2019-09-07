import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null
  },
  getters: {
    token: state => {
      return state.token
    }
  },
  mutations: {
    updateToken: (state, token) => {
      localStorage.setItem('token', token)
      state.token = token
    }
  },
  actions: {
    updateToken: ({ commit }, token) => {
      commit('updateToken', token)
    }
  }
})
