import Vue from 'vue'
import Vuex from 'vuex'
import types from './mutation-types'

Vue.use(Vuex)

const state = {
  count: 0
}

/* eslint-disable no-shadow, no-param-reassign */
const mutations = {

  [types.INCREMENT](state) {
    state.count += 1
  },

  [types.DECREMENT](state) {
    state.count -= 1
  }
}

export default new Vuex.Store({
  state,
  mutations
})
