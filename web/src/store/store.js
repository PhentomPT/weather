import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null,
    city: {
      name: null,
      code: null
    }
  },
  getters: {
    token: state => {
      return state.token
    },
    city: state => {
      return state.city
    }
  },
  mutations: {
    updateToken: (state, token) => {
      localStorage.setItem('token', token)
      state.token = token
    },
    updateLocation: (state, city) => {
      state.city = city
    }
  },
  actions: {
    updateToken: ({ commit }, token) => {
      commit('updateToken', token)
    },
    updateLocation: ({ commit }, city) => {
      commit('updateLocation', city)
    }
  }
})
