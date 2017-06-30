<template>
  <div class="todo-container">
    <input placeholder="add todos.." @keyup.enter="addTodo">
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
      :value="todo.text"
      @blur="doneEdit"
      @keyup.enter="doneEdit"
      @keyup.esc="cancelEdit"
    >
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'ToDoList',
  data () {
    return {
      editTodo: {}
    }
  },
  computed: {
    todos () {
      return this.$store.state.todo.todos
    }
  },
  methods: {
    ...mapActions([
      'addToDo',
      'deleteToDo',
      'updateToDo'
    ]),
    addTodo: function (e) {
      const { todos } = this
      const newTodo = e.target.value
      if (!newTodo.trim().length) return
      this.addToDo({ key: todos.length + 1, text: newTodo })
      e.target.value = ''
    },
    onClickDel: function (item) {
      this.deleteToDo(item)
    },
    onEditTodo: function (todo) {
      this.editTodo = todo
    },
    doneEdit: function (e) {
      const item = { ...this.editTodo, text: e.target.value }
      this.updateToDo(item)
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
