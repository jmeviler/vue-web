import Config from '../../config/dev.env'
// import { Loading } from 'element-ui';
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
  return Promise.reject(error)
})

export default axios
