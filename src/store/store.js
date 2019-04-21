import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    modal: false
  },
  mutations: {
    toggle(state) {
      state.modal = !state.modal;
    }
  }
})
