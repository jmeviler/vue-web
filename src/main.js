import 'element-ui/lib/theme-default/index.css'
import 'scss/index.scss'

import App from './App'
import ElementUI from 'element-ui'
import Vue from 'vue'
import router from './router'
import store from 'store'

Vue.config.productionTip = false

// use eleme UI
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
