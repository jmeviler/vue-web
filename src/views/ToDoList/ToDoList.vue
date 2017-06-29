<template>
  <div class="todo-container">
    <input v-model="newTodo" placeholder="add todos.." @keyup.enter="addTodo">
    <hr>
    <div
      v-for="todo in todos"
      :key="todo.key"
      class="item-todo"
    >
    <div v-show="editTodo !== todo">
      <span class="todo-content" @dblclick="onEditTodo(todo)">{{ todo.text }}</span>
      <i @click="onClickDel(todo)" class="el-icon-close icon-del"></i>
    </div>
    <input
      class="edit"
      v-show="editTodo === todo"
      v-model="todo.text"
      @blur="doneEdit(todo)"
      @keyup.enter="doneEdit(todo)"
      @keyup.esc="cancelEdit(todo)"
    >
    </div>
  </div>
</template>

<script>
export default {
  name: 'ToDoList',
  data () {
    return {
      newTodo: '',
      editTodo: {},
      todos: []
    }
  },
  methods: {
    addTodo: function () {
      const { todos, newTodo } = this
      if (!newTodo.trim().length) return
      this.todos.push({ key: todos.length + 1, text: newTodo })
      this.newTodo = ''
    },
    onClickDel: function (item) {
      const { todos } = this
      this.todos = todos.filter(todo => item.key !== todo.key)
    },
    onEditTodo: function (todo) {
      this.editTodo = todo
    },
    doneEdit: function (item) {
      const { todos } = this
      this.todos = todos.map(todo => {
        if (todo.key === item.key) {
          todo.text = item.text
        }
        return todo
      })
      this.cancelEdit()
    },
    cancelEdit: function () {
      this.editTodo = {}
    }
  }
}
</script>

<style lang="scss">
.todo-container {
  padding: 4%;

  .item-todo {
    font-size: 24px;
    padding-bottom: 15px;
    line-height: 1;

    .todo-content {
      max-width: 76%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      display: inline-block;
    }

    .icon-del {
      font-size: 16px;
      line-height: 24px;
      float: right;
      margin-right: 20%;
    }

  }
}
</style>
