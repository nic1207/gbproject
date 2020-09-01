export default (context, inject) => {
  const initWebSocket = (url) => {
    // console.log(`initWebSocket(${url}!)`)
    if (window.WebSocket) {
      const ws = new WebSocket(url)
      ws.onopen = function (e) {
        console.log('onopen() websocket伺服器連接成功')
        // this.send('test')
      }
      ws.onerror = function () {
        console.log('onerror() websocket伺服器連接出錯')
      }
      ws.onmessage = function (e) {
        const message = e.data
        console.log('onmessage(', message, ')')
      }
      ws.onclose = function (e) {
        console.log('onclose() websocket伺服器關閉')
      }
      context.websocket = ws
      // console.log('context=', context)
      return ws
    }
  }
  inject('initWebSocket', initWebSocket)
  // context.$initWebSocket = initWebSocket

  const sendMessage = (msg) => {
    if (context.websocket !== undefined) {
      // console.log(`sendMessage(${msg})`)
      // console.log('context.websocket=', context.websocket)
      context.websocket.send(msg)
    }
  }
  inject('sendMessage', sendMessage)
  // context.$sendMessage = sendMessage

  const clearWebSocket = () => {
    if (context.websocket !== undefined) {
      // console.log('clearWebSocket()')
      // console.log('context.websocket=', context.websocket)
      context.websocket = undefined
    }
  }
  inject('clearWebSocket', clearWebSocket)
  // context.$clearWebSocket = clearWebSocket
}
