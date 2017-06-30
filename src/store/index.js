import Vue from 'vue'
import Vuex from 'vuex'
import error from './error'
import todo from './todo'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    todo,
    error
  },
  strict: true
})
