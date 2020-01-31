import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usernameStored: ''
  },
  mutations: {
    SAVE_USERNAME(state, username) {
      state.usernameStored = username;
    }
  },
  getters: {
  },
  actions: {
  },
  modules: {
  }
})
