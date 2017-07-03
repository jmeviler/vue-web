import Config from '../../config/dev.env'
import axios from 'axios'
import store from 'store'

axios.defaults.baseURL = Config.BASE_URL

axios.interceptors.request.use((config) => {
  store.commit('LOADING', { loading: true, code: 500 })
  return { ...config, timeout: 6000 }
}, (error) => {
  return Promise.reject(error)
})

axios.interceptors.response.use((response) => {
  return response.data
}, (error) => {
  store.commit('LOADING', { loading: false, code: 500 })
  store.commit('SHOW_ERROR', { status: true, msg: '服务器错误！' })

  setTimeout(function () {
    store.commit('SHOW_ERROR', { status: false, msg: '' })
  }, 3000);

  return Promise.reject(error)
})

export default axios
