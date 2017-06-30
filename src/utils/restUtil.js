import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000/api/'

axios.interceptors.request.use((config) => {
  return { ...config, timeout: 6000 }
}, (error) => {
  return Promise.reject(error)
})

axios.interceptors.response.use((response) => {
  return response.data
}, (error) => {
  return Promise.reject(error)
})

export default axios
