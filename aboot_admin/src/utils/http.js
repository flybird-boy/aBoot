import http from '@/utils/request'
import router from '../router'
import { Message } from 'iview'
/**
 *
 * @param {*} options
 */
var token = localStorage.getItem('access_token')
export var fetch = options => {
  const {
    headers = {},
    url,
    autoLogin = true,
    loading = false,
    loadingText,
    method = 'get',
    errShow = true
  } = options
  //   if (loading) {
  //     var loadingInstance = Loading.service({
  //       text:
  //         loadingText ||
  //         (method.toLocaleLowerCase() === 'get' ? '加载中...' : '处理中...'),
  //       lock: true
  //     })
  //   }
  return http({
    ...options,
    headers: {
      // 'content-type': 'application/x-www-form-urlencoded',
      Authorization: token,
      ...headers
    },
    url: url
  }).then(data => {
    // if (loading) {
    //   loadingInstance.close()
    // }
    var { error_code, msg, res } = data
    if (error_code === 0) {
      return res
    } else {
      console.log(data)

      Message.error({
        content: msg || '服务器异常',
        duration: 5 * 1000
      })
      return Promise.reject(data)
    }
  })
}
