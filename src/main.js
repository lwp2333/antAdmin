import Vue from 'vue'
import router from './router'
import store from './store'
import 'normalize.css' // 样式重置到 各浏览器统一
import './style/global.less' // 全局颜色
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.less' // ant design ui 样式 引入less 文件才可修改主题色
import './style/theme.less' // ant design 主题修改
import 'jsoneditor/dist/jsoneditor.min.css' // json编辑
import './components/global' // 全局组件
import './permission' // 动态路由权限
import './socket' // 双向通信
import App from './App.vue'
Vue.config.productionTip = false
Vue.use(Antd)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
