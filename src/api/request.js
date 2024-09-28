import axios from 'axios'
import config from '../config'
import { ElMessage } from 'element-plus'
import Qs from 'qs'
const NETWORK_ERROR = '网络请求异常,请稍后重试.....'
// 创建一个axios实例对象
const service = axios.create({
  baseURL: config.baseApi
  // transformRequest: [
  //  (data) => {
  //   return data instanceof FormData ? data : Qs.stringify({ //此处的data类型判断为重要点，
  //    ...data
  //   });
  //  }
  // ]
 });

// 在请求之前做一些事情
service.interceptors.request.use((req) => {
  // 可以自定义header
  // jwt-token认证的时候 
  // return req
  config => {
    return config;
   },
   error => Promise.error(error)
})

// 在请求之后做一些事情
// 响应拦截器
service.interceptors.response.use(
  (response) => {
      if (response.status === 200) {
          //    接口HTTP状态码为200时
          return Promise.resolve(response);
      }
  },
  // HTTP状态码非200的情况
  (error) => {
      if (error.response.status) {
          switch (error.response.status) {
              case 500: //    HTTP状态码500
                  ElMessage({
                      message: "后台服务发生错误",
                      type: "error"
                  });
                  break;
              case 401: //    HTTP状态码401
                  ElMessage({
                      message: "无权限",
                      type: "error"
                  });
                  break;
              case 404: //    HTTP状态码404
                  ElMessage({
                      message: "当前接口不存在",
                      type: "error"
                  });
                  break;
              default: //    页面显示接口返回的错误信息
                  this.$message.error(error.response.message);
                  return Promise.reject(error.response);
          }
      }
  }
);

// 封装的核心函数
function request(options) {
  options.method = options.method || 'get'
  if (options.method.toLowerCase() == 'get') {
    options.params = options.data
  }
  // 对mock的处理
  let isMock = config.mock
  if (typeof options.mock !== 'undefined') {
    isMock = options.mock
  }
  // 对线上环境做处理
  if (config.env == 'prod') {
    // 不给你用到mock的机会
    service.defaults.baseURL = config.baseApi
  } else {
    service.defaults.baseURL = isMock ? config.mockApi : config.baseApi
  }

  return service(options)
}
/**
 * post方法，对应post请求
 * info为 true，formData格式；
 * info为 undefined或false，是json格式
 */
//  export function post(url, data = {}, info) {
//   return new Promise((resolve, reject) => {
//       let newData = data;
//       if (info) {
//           //  转formData格式
//           newData = new FormData();
//           for (let i in data) {
//               newData.append(i, data[i]);
//           }
//       }
//       axios
//           .post(url, newData)
//           .then((res) => {
//               resolve(res.data);
//           })
//           .catch((err) => {
//               reject(err.data);
//           });
//   });
// }

// /**
// * 封装put请求
// */

// export function put(url, params = {}, info = "") {
//   return new Promise((resolve, reject) => {
//       axios.put(url + info, params).then(
//           (res) => {
//               resolve(res.data);
//           },
//           (err) => {
//               reject(err.data);
//           }
//       );
//   });
// }

// /**
// * 封装delete请求
// */
// export function axiosDelete(url, params = {}, info = "") {
//   return new Promise((resolve, reject) => {
//       axios
//           .delete(url + info, {
//               params: params,
//           })
//           .then((res) => {
//               resolve(res.data);
//           })
//           .catch((err) => {
//               reject(err.data);
//           });
//   });
// }

export default request


