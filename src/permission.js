import Store from './store'
import Router from './router'
import accessRoutes from './router/asyncRoutes'
import { getAccessToken } from '@/utils/auth'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
NProgress.configure({ showSpinner: false })

const token = getAccessToken()

const whiteRouteList = []
// 1.判断是否登录
// 2. 登录请求权限菜单，比对asyncRoutes（vuex action）
// 3. 动态添加路由
const filterRoutes = [...accessRoutes]
const mainAppRoute = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/layout'),
    redirect: '/dashboard',
    children: [
      ...filterRoutes,
      {
        path: 'notFound',
        name: 'notFound',
        component: () => import('@/views/notFound'),
        meta: {
          title: '无相应路由/权限'
        }
      }
    ]
  },
  {
    path: '*',
    name: '*',
    redirect: '/notFound'
  }
]
mainAppRoute.forEach(item => {
  Router.addRoute(item)
})

// 路由切换进度条
Router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

Router.afterEach(() => {
  NProgress.done()
})
