export default (context, inject) => {
  const connect = (url) => {
    console.log(`connect(${url}!)`)
    if (context.websocket === undefined) {
      context.websocket = context.$initWebSocket(url)
      // console.log('this.websocket=', this.websocket)
      const that = this
      context.websocket.onopen = function () {
        // that.$nextTick(() => {
        //  that.$nuxt.$loading.finish()
        // })
        console.log('WebSocket連線成功 WebSocket connected.')
        // that.signin_by_logincode()
        // this.send('aaa')
      }
      context.websocket.onmessage = function (e) {
        console.log('onMessage(', e.data, ')')
        // that.processMsg(e.data)
      }
      context.websocket.onerror = function (err) {
        // that.$nextTick(() => {
        // that.$nuxt.$loading.finish()
        // })
        console.error('onerror() Socket encountered error: ', err, 'Closing socket')
        that.websocket.close()
      }
      context.websocket.onclose = function (e) {
        // that.$nextTick(() => {
        // that.$nuxt.$loading.finish()
        // })
        // that.websocket = undefined
        // that.$clearWebSocket()
        // const tt = 3000
        console.log('onclose() webSocket is closed.')
        // console.log('Reconnect will be attempted in', (tt / 1000), ' second.', e.reason)
        // setTimeout(function () {
        // that.connect()
        // }, tt)
      }
    }
  }
  inject('connect', connect)
  const login = (code) => {
    console.log(`login(${code}!)`)
    const cmd = {
      SN: 1,
      CID: 101,
      SC: 1000,
      B: {
        LoginCode: code
      }
    }
    const strcmd = JSON.stringify(cmd)
    // console.log('strcmd=', strcmd)
    context.$sendMessage(strcmd)
  }
  inject('login', login)
  const logout = (token) => {
    console.log('logout()')
    const cmd = {
      SN: 2,
      CID: 199,
      SC: 1000,
      B: {
        Token: token
      }
    }
    const strcmd = JSON.stringify(cmd)
    context.$sendMessage(strcmd)
  }
  inject('logout', logout)
  const joinGame = (token) => {
    const cmdBody = {
      Token: token,
      GameID: 10001,
      TableID: 1
    }
    const cmd = {
      SN: 2,
      CID: 10001,
      SC: 1000,
      B: cmdBody
    }
    const strcmd = JSON.stringify(cmd)
    // console.log('strcmd=', strcmd)
    context.$sendMessage(strcmd)
  }
  inject('joinGame', joinGame)
  const quitGame = (token) => {
    const cmd = {
      SN: 2,
      CID: 10099,
      SC: 1000,
      B: {
        Token: token
      }
    }
    const strcmd = JSON.stringify(cmd)
    // console.log('strcmd=', strcmd)
    context.$sendMessage(strcmd)
  }
  inject('quitGame', quitGame)

  const betGame = (token) => {
    const cmdBody = {
      GameID: 10001,
      TableID: 1,
      RoundID: '1234567890',
      AccessCode: 'IEiX-U7ZC0OOJCdQQUR2_Q',
      Bets: [1, 0, 0, 0, 0, 0, 0]
    }
    const cmd = {
      SN: 2,
      CID: 10011,
      StatusCode: 1000,
      B: cmdBody
    }
    const strcmd = JSON.stringify(cmd)
    // console.log('strcmd=', strcmd)
    context.$sendMessage(strcmd)
  }
  inject('betGame', betGame)
}
