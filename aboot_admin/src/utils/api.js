import axios from 'axios'
import { BASE_DOMAIN } from './domain'
//http 请求拦截器
axios.interceptors.request.use(config => {
  return config
})

//http 返回拦截器
axios.interceptors.response.use(req => {
  let status = req.status
  switch (status) {
    case 200:
      return req.data
      break
    case 400:
      break
    case 404:
      break
    case 500:
      break
  }
})

//get 请求
export const getRequest = (url, params) => {
  return axios({
    url: `${BASE_DOMAIN}${url}`,
    method: 'get',
    data: params
  })
}

//post JSON请求
export const post2json = (url, params) => {
  return axios({
    url: `${BASE_DOMAIN}${url}`,
    method: 'post',
    data: params
  })
}
//post Form请求
export const post2Form = (url, params) => {
  return axios({
    url: `${url}`,
    method: 'post',
    data: params
  })
}
