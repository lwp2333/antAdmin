// 工作台
const dashboardRoute = {
  path: 'dashboard',
  name: 'dashboard',
  component: () => import('@/views/dashboard'),
  meta: {
    title: '工作台',
    icon: 'xxx'
  }
}

export const orderSort = 1
export default dashboardRoute
