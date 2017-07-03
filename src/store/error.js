import * as types from 'constant/mutationTypes'

// initial state
const state = {
  loading: false,
  errorStatus: false,
  errorMsg: ''
}

// actios
const actions = {

}

// mutations
const mutations = {
  [types.LOADING] (state, params) {
    const { loading } = params
    state.loading = loading
  },
  [types.SHOW_ERROR] (state, params) {
    const { status, msg } = params;
    state.errorStatus = status
    state.errorMsg = msg
  }
}

export default {
  state,
  actions,
  mutations
}
