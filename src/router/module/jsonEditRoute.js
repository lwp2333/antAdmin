// 工作台
const jsonEditRoute = {
  path: 'jsonEdit',
  name: 'jsonEdit',
  component: () => import('@/views/jsonEdit'),
  meta: {
    title: 'json编辑器',
    icon: 'xxx'
  }
}

export const orderSort = 2
export default jsonEditRoute
