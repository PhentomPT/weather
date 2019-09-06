import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
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
      state.token = token
    }
  },
  actions: {
    updateToken: ({ commit }, token) => {
      commit('updateToken', token)
    }
  }
})
