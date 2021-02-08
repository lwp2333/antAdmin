let asyncRoutes = []

const modules = require.context('./module', false, /\.js$/)

modules.keys().forEach(key => {
  asyncRoutes.push({
    orderSort: modules(key).orderSort || 0,
    module: modules(key).default || modules(key)
  })
})

asyncRoutes = asyncRoutes.sort((a, b) => a.orderSort - b.orderSort).map(item => item.module)

export default asyncRoutes
