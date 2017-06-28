import Layout from 'components/Layout/Layout'
import Main from 'modules/Main/Main'
import Router from 'vue-router'
import ToDoList from 'modules/ToDoList/ToDoList'
import Vue from 'vue'

Vue.use(Router)

// const beforeEnterHome = (to, from, next) => {
//   console.error(to)
//   next('/test')
// }

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
