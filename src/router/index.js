import Layout from 'views/Layout/Layout'
import Main from 'views/Main/Main'
import Router from 'vue-router'
import ToDoList from 'views/ToDoList/ToDoList'
import Vue from 'vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      redirect: '/index',
      children: [
        { path: '/index', name: 'index', component: Main },
        { path: '/todo', name: 'todo', component: ToDoList }
      ]
    }
  ]
})
