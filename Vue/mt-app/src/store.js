import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    position: {},
    productName: ''
  },
  mutations: {
    setPosition (state, val) {
      state.position = val
    },
    setProductName (state, val) {
      state.productName = val
    }
  },
  actions: {
    setPosition ({
      commit
    }, val) {
      commit('setPosition', val)
    },
    setProductName ({
      commit
    }, val) {
      commit('setProductName', val)
    }
  }
})
