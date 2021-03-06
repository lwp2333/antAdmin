import Vue from 'vue'
import VueSocketIO from 'vue-socket.io'
import SocketIO from 'socket.io-client'
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
