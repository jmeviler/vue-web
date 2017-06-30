import * as types from 'constant/mutationTypes'

import { fetchAllTodos } from 'api/todo'

// initial state
const state = {
  todos: [],
  editTodo: ''
}

// actios
const actions = {
  async fetchAllTodos ({ commit }) {
    const todos = await fetchAllTodos()
    const { entrance_info } = todos.stationInfo[0] || {}
    commit(types.FETCH_ALL, { entrance_info })
  },
  addToDo ({ commit, state }, todo) {
    commit(types.ADD_TODO, { todo })
  },
  deleteToDo ({commit, state}, todo) {
    commit(types.DELETE_TODO, { todo })
  },
  updateToDo: ({commit, state}, todo) => {
    commit(types.UPDATE_TODO, { todo })
  }
}

// mutations
const mutations = {
  [types.FETCH_ALL] (state, { entrance_info }) {
    state.todos.push({ key: 1, text: entrance_info })
  },
  [types.ADD_TODO] (state, { todo }) {
    state.todos.push(todo)
  },
  [types.DELETE_TODO] (state, { todo }) {
    state.todos = state.todos.filter(item => item.key !== todo.key)
  },
  [types.UPDATE_TODO]: (state, { todo }) => {
    state.todos = state.todos.map(item => {
      if (todo.key === item.key) {
        item.text = todo.text
      }
      return item
    })
  }
}

export default {
  state,
  actions,
  mutations
}
