import axios from 'axios'
import { Message } from 'iview'
const http = axios.create({
  // baseURL: process.env.BASE_API,
  baseURL: 'http://localhost:5000',
  timeout: 50000
})

http.interceptors.request.use(
  config => {
    config.headers['X-Requested-With'] = 'XMLHttpRequest'
    return config
  },
  error => {
    console.log(error)
    Promise.reject(error)
  }
)

http.interceptors.response.use(
  response => {
    return response.data
  }
  // error => {
  //   console.log('err' + error)
  //   Message.error({
  //     content: error.message,
  //     duration: 5 * 1000
  //   })
  //   return Promise.reject(error)
  // }
)

export default http
