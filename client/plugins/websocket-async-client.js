import WebSocketVue from 'vue-async-websocket-nic'
import Vue from 'vue'

const defOptions = {
  debug: false,
  // protocols: '',
  'load-on-start': true,
  'max-timeout': 10000,
  reconnect: true,
  'max-reconnect-count': 4,
  'reconnect-delay': 5000,
  'create-autoid-func': true,
  'create-id': 'SN',
  'response-id': 'SN'
  // 'response-type': '_type'
}
// console.log('WebSocketVue=', WebSocketVue, 'defOptions=', defOptions)
const url = 'ws://35.229.140.14:30622'
// const url = 'ws://121.40.165.18:8800'
// const webSocket = new WebSocket(url)
// console.log('webSocket=', webSocket)
Vue.use(WebSocketVue, url, defOptions)
