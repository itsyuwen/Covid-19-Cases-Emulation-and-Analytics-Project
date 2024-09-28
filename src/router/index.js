import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/Main.vue'),
    name: 'home1',
    redirect: '/home',
    children: [
    
      {
        path: '/home',
        name: 'home',
        component: () => import('../views/home/Home.vue')
      },
      // {EDFS.vue

      //   path: '/user',
      //   name: 'user',
      //   component: () => import('../views/User/User.vue')
      // },
      {
        path: '/EDFS',
        name: 'EDFS',
        component: () => import('../views/EDFS/EDFS.vue')
      },

      {
        path: '/FireBase',
        name: 'FireBase',
        component: () => import('../views/EDFS/FireBase.vue')
      },
      {
        path: '/MySQL',
        name: 'MySQL',
        component: () => import('../views/EDFS/MySQL.vue')
      },
      {
        path: '/MongoDB',
        name: 'MongoDB',
        component: () => import('../views/EDFS/MongoDB.vue')
      },
      {
        path: '/Data',
        name: 'Data',
        component: () => import('../views/data/Data.vue')
      },
      {
        path: '/FileBrowser',
        name: 'FileBrowser',
        component: () => import('../views/data/FileBrowser.vue')
      },
      {
        path: '/FireBaseAnalyze',
        name: '/FireBaseAnalyze',
        component: () => import('../views/analyze/Analyze.vue')
      },
      {
        path: '/FireBaseAnalyze1',
        name: 'FireBaseAnalyze1',
        component: () => import('../views/analyze/Analyze1.vue')
      },
      {
        path: '/FireBaseAnalyze2',
        name: 'FireBaseAnalyze2',
        component: () => import('../views/analyze/Analyze2.vue')
      },
      {
        path: '/FireBaseAnalyze3',
        name: 'FireBaseAnalyze3',
        component: () => import('../views/analyze/Analyze3.vue')
      },
      {
        path: '/FireSearch',
        name: 'FireSearch',
        component: () => import('../views/search/search.vue')
      },
      {
        path: '/search1',
        name: 'Search1',
        component: () => import('../views/search/search1.vue')
      },
      {
        path: '/search2',
        name: 'Search2',
        component: () => import('../views/search/search2.vue')
      },
      {
        path: '/mysqlSearch',
        name: 'MySQLSearch',
        component: () => import('../views/mysqlSearch/search.vue')
      },
      {
        path: '/mysqlSearch1',
        name: 'MySQLSearch1',
        component: () => import('../views/mysqlSearch/search1.vue')
      },
      {
        path: '/mysqlSearch2',
        name: 'MySQLSearch2',
        component: () => import('../views/mysqlSearch/search2.vue')
      },
      {
        path: '/mysqlAnalyze',
        name: 'MySQLAnalyze',
        component: () => import('../views/mysqlAnalyze/Analyze.vue')
      },
      {
        path: '/mysqlAnalyze1',
        name: 'MySQLAnalyze1',
        component: () => import('../views/mysqlAnalyze/Analyze1.vue')
      },
      {
        path: '/mysqlAnalyze2',
        name: 'MySQLAnalyze2',
        component: () => import('../views/mysqlAnalyze/Analyze2.vue')
      },
      {
        path: '/mysqlAnalyze3',
        name: 'MySQLAnalyze3',
        component: () => import('../views/mysqlAnalyze/Analyze3.vue')
      },
      {
        path: '/mongodbSearch',
        name: 'mongodbSearch',
        component: () => import('../views/mongodbSearch/search.vue')
      },
      {
        path: '/mongodbSearch1',
        name: 'mongodbSearch1',
        component: () => import('../views/mongodbSearch/search1.vue')
      },
      {
        path: '/mongodbSearch2',
        name: 'mongodbSearch2',
        component: () => import('../views/mongodbSearch/search2.vue')
      },
      {
        path: '/mongodbAnalyze',
        name: 'mongodbAnalyze',
        component: () => import('../views/mongodbAnalyze/Analyze.vue')
      },
      {
        path: '/mongodbAnalyze1',
        name: 'mongodbAnalyze1',
        component: () => import('../views/mongodbAnalyze/Analyze1.vue')
      },
      {
        path: '/mongodbAnalyze2',
        name: 'mongodbAnalyze2',
        component: () => import('../views/mongodbAnalyze/Analyze2.vue')
      },
      {
        path: '/mongodbAnalyze3',
        name: 'mongodbAnalyze3',
        component: () => import('../views/mongodbAnalyze/Analyze3.vue')
      },
    ],
    // children: []
  },
  // {
  //   path: '/login',
  //   name: 'login',
  //   component: () => import('../views/Login.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router