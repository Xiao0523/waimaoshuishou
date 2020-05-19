import axios from 'axios'
// import Vue  from 'vue'
import { Loading, Message } from 'element-ui'
const server = axios.create({})
// server.defaults.timeout = 12000
server.defaults.withCredentials = true // 携带cookie

if (process.env.NODE_ENV === 'development') {
  server.defaults.baseURL = 'https://dev.my51share.com/waimaoshuishou/'
  // https://dev.my51share.com/boss/
  // https://www.my51share.com/boss/
} else if (process.env.NODE_ENV === 'production') {
  server.defaults.baseURL = 'https://www.my51share.com/waimaoshuishou/'
}
// Add a request interceptor 添加请求拦截机
server.interceptors.request.use(config => {
  // Do something before request is sent
  Loading.service()
  return config
}, err => {
  const loadingInstance = Loading.service()
  setTimeout(() => {
    loadingInstance.close()
    Message({
      message: '请求超时',
      type: 'error'
    })
  }, 1000)
  return Promise.reject(err)
})

// http响应拦截器
server.interceptors.response.use(res => { // 响应成功关闭loading
  const loadingInstance = Loading.service()
  setTimeout(() => {
    loadingInstance.close()
  }, 0)
  return res
}, error => {
  const loadingInstance = Loading.service()
  setTimeout(() => {
    loadingInstance.close()
  }, 1000)
  // 错误码处理
  if (error && error.response) {
    // console.log(error.response.status);
    if (error.response.status == 403) {
      Message({
        message: error.response.data.data,
        type: 'error'
      })
    } else {
      Message({
        message: error.response.data.message,
        type: 'error'
      })
    }
  }
  return Promise.reject(error)
})
export default server
