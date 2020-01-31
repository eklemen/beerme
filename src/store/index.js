import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usernameStored: '',
    isAuthenticated: false
  },
  mutations: {
    SAVE_USERNAME(state, username) {
      state.usernameStored = username;
    },
    AUTHENTICATE_USER(state) {
      state.isAuthenticated = true
    },
    UNAUTHENTICATE_USER(state) {
      state.isAuthenticated = true
    }
  },
  getters: {
    isNewUser(state) {
      return !state.usernameStored;
    }
  },
  actions: {
    authenticateUser(context) {
      context.commit('AUTHENTICATE_USER')
    }
  },
  modules: {
  }
})
