import Vue from 'vue'
import Vuex from 'vuex'
import types from './mutation-types'

Vue.use(Vuex)

const state = {
  shelfList: [],
  currentShelf: null,
  relativePath: ''
}

/* eslint-disable no-shadow, no-param-reassign */
const mutations = {
  [types.UPDATE_SHELF_LIST](state, shelfList) {
    state.shelfList = shelfList;
  },

  [types.CHANGE_SHELF](state, shelf) {
    state.currentShelf = shelf;
  },

  [types.CHANGE_RELATIVE_PATH](state, relativePath) {
    state.relativePath = relativePath;
  }
}

export default new Vuex.Store({
  state,
  mutations
})
