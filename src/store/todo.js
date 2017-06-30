import * as types from 'constant/mutationTypes'

// initial state
const state = {
  todos: [],
  editTodo: ''
}

// actios
const actions = {
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
