import * as types from 'constant/mutationTypes'

// initial state
const state = {
  loading: false
}

// actios
const actions = {

}

// mutations
const mutations = {
  [types.LOADING] (state, params) {
    const { loading } = params
    state.loading = loading
  }
}

export default {
  state,
  actions,
  mutations
}
