import Vue from 'vue'
import router from './router'
import store from './store'
import 'normalize.css'
import './style/global.less'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.less'
import './style/theme.less'
import App from './App.vue'
import VueSocketIO from 'vue-socket.io'
import SocketIO from 'socket.io-client'
import './permission'
Vue.config.productionTip = false
Vue.use(
  new VueSocketIO({
    debug: true,
    connection: SocketIO('ws://localhost:7000/', {
      query: {
        room: 'demo',
        userId: `client_${Math.random()}`
      },
      transports: ['websocket']
    })
  })
)
Vue.use(Antd)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
