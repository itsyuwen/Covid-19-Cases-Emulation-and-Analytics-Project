/**
 * 环境配置文件
 * 一般在企业级项目里面有三个环境
 * 开发环境
 * 测试环境
 * 线上环境
 */
// 当前的环境
const env = import.meta.env.MODE || 'prod'
//change fastmock data
const EnvConfig = {
  development: {
    baseApi: 'http://127.0.0.1:5000',
    mockApi: 'https://www.fastmock.site/mock/300283cb590d2022f75682f11a1848b0/api',
  },
  test: {
    baseApi: 'http://127.0.0.1:5000',
    mockApi: 'https://www.fastmock.site/mock/300283cb590d2022f75682f11a1848b0/api',
  },
  pro: {
    baseApi: 'http://127.0.0.1:5000',
    mockApi: 'https://www.fastmock.site/mock/300283cb590d2022f75682f11a1848b0/api',
  },
}

export default {
  env,
  // mock的总开关,
  mock: false,
  ...EnvConfig[env]
}

