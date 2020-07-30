<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      permanent
      width="140"
      color="brown darken-4"
      app
      clipped
    >
      <el-image src="img/logo1.png" width=140></el-image>
      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.text"
          link
        >
          <v-list-item-content>
            <v-list-item-title>
              {{ item.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-subheader class="mt-4 grey--text text--darken-1"> </v-subheader>
        <v-subheader class="mt-4 grey--text text--darken-1"> </v-subheader>
        <v-list>
        </v-list>
        <v-list-item
          class="mt-4"
          link
        >
          <v-list-item-action>
            <v-icon color="grey darken-1">mdi-email</v-icon>
          </v-list-item-action>
          <v-list-item-title class="grey--text text--darken-1">意見提交</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-action>
            <v-icon color="grey darken-1">mdi-account-multiple</v-icon>
          </v-list-item-action>
          <v-list-item-title class="grey--text text--darken-1">12321</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title class="grey--text text--darken-1">v1.0.0</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      height="40px"
      clipped-left
      color="blue-grey darken-4"
      flat
      dense
      bottom
    >
      <v-spacer>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</v-spacer>
      <v-spacer>
        <v-btn icon>
          <v-icon>mdi-music-note</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-volume-high</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-view-list</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-view-module</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-view-week</v-icon>
        </v-btn>
      </v-spacer>
      <v-spacer>
        <span v-if="$store.state.user"><v-icon>mdi-currency-usd</v-icon> {{ $store.state.user.Point }}</span>
      </v-spacer>
      <v-spacer>
        <span v-if="$store.state.account"><v-icon>mdi-account</v-icon> {{ $store.state.account.AccountName }}</span>
      </v-spacer>
      <v-spacer>
        <v-icon>mdi-timer</v-icon> {{ new Date().getFullYear() }}
      </v-spacer>
      <v-btn icon>
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main class="fill-height">
      <v-container fluid class="fill-height" color="brown darken-4">
        <v-tabs
          v-model="tab"
          background-color="primary"
          class="fill-height"
          dark
        >
          <v-tab
            v-for="item in itemtabs"
            :key="item.tab"
          >
            {{ item.tab }}
          </v-tab>
          <v-tabs-items class="fill-height" v-model="tab">
            <v-tab-item
              class="fill-height"
              v-for="item in itemtabs"
              :key="item.tab"
            >
              <div>
                <v-container v-if="!intable">
                  <v-row dense>
                    <v-col
                      v-for="(item, i) in tableitems"
                      :key="i"
                      cols="6"
                    >
                      <v-card
                        :color="item.color"
                        @click.native="joinGame()"
                        dark
                      >
                        <div class="d-flex flex-no-wrap">
                          <v-avatar
                            class="ma-3"
                            size="125"
                            tile
                          >
                            <v-img :src="item.src"></v-img>
                          </v-avatar>
                          <div>
                            <v-card-title
                              class="headline"
                              v-text="item.title"
                            ></v-card-title>
                            <v-card-subtitle v-text="item.artist"></v-card-subtitle>
                          </div>
                        </div>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-container>
                <v-container v-else>
                  <v-row dense>
                    <v-col
                      cols="8"
                    >
                      <v-img src="img/dea1011.jpg" width=120></v-img>
                    </v-col>
                  </v-row>
                </v-container>
              </div>
            </v-tab-item>
          </v-tabs-items>
        </v-tabs>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    tab: null,
    intable: false,
    itemtabs: [
      { tab: 'SA Asia', content: 'Tab 1 Content' }
    ],
    items: [
      { icon: 'mdi-trending-up', text: '百家樂' },
      { icon: 'mdi-youtube-subscription', text: '多檯投注' }
    ],
    tableitems: [
      {
        color: '#1F7087',
        src: 'img/dea1011.jpg',
        title: 'Room1',
        artist: 'Foster the People'
      },
      {
        color: '#952175',
        src: 'img/dea1011.jpg',
        title: 'Room2',
        artist: 'Ellie Goulding'
      },
      {
        color: '#1F7087',
        src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
        title: 'Room3',
        artist: 'Foster the People'
      },
      {
        color: '#952175',
        src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
        title: 'Room4',
        artist: 'Ellie Goulding'
      },
      {
        color: '#1F7087',
        src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
        title: 'Room5',
        artist: 'Foster the People'
      },
      {
        color: '#952175',
        src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
        title: 'Room6',
        artist: 'Ellie Goulding'
      },
      {
        color: '#1F7087',
        src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
        title: 'Room7',
        artist: 'Foster the People'
      },
      {
        color: '#952175',
        src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
        title: 'Room8',
        artist: 'Ellie Goulding'
      },
      {
        color: '#1F7087',
        src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
        title: 'Room9',
        artist: 'Foster the People'
      },
      {
        color: '#952175',
        src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
        title: 'Room10',
        artist: 'Ellie Goulding'
      }
    ]
  }),
  created () {
    this.$vuetify.theme.dark = true
  },
  loading: false,
  mounted () {
    this.connect()
  },
  methods: {
    connect () {
      this.$nextTick(() => {
        this.$nuxt.$loading.start()
      })
      // console.log('this.$nuxt.$loading=', this.$nuxt.$loading)
      // const url = 'ws://121.40.165.18:8800'
      // const url = 'ws://localhost:3333'
      const url = 'ws://35.229.140.14:30510'
      console.log('建立連線至...connect(url=', url, ')')
      if (this.websocket === undefined) {
        this.websocket = this.$initWebSocket(url)
        // console.log('this.websocket=', this.websocket)
        const that = this
        this.websocket.onopen = function () {
          that.$nextTick(() => {
            that.$nuxt.$loading.finish()
          })
          console.log('WebSocket連線成功 WebSocket connected.')
          that.signin_by_logincode()
          // this.send('aaa')
        }
        this.websocket.onmessage = function (e) {
          // console.log('onMessage(', e.data, ')')
          that.processMsg(e.data)
        }
        this.websocket.onerror = function (err) {
          that.$nextTick(() => {
            that.$nuxt.$loading.finish()
          })
          console.error('onerror() Socket encountered error: ', err, 'Closing socket')
          that.websocket.close()
        }
        this.websocket.onclose = function (e) {
          that.$nextTick(() => {
            that.$nuxt.$loading.finish()
          })
          that.websocket = undefined
          that.$clearWebSocket()
          const tt = 3000
          console.log('onclose() webSocket is closed.')
          console.log('Reconnect will be attempted in', (tt / 1000), ' second.', e.reason)
          setTimeout(function () {
            that.connect()
          }, tt)
        }
      }
    },
    // 登入
    signin_by_logincode () {
      const code = 'Yz8DHneE00-TGp_yQ6D5LA'
      console.log('要求登入 signin_by_logincode()')
      this.$nextTick(() => {
        this.$nuxt.$loading.start()
      })
      const cmdHeader = {
        SN: 1,
        CommandID: 101,
        Encode: 'ASCII',
        Timestamp: 'xxxx',
        StatusCode: 1000,
        Message: 'SUCCESS',
        HasBody: true
      }
      const cmdBody = {
        LoginCode: code
      }
      const cmd = {
        CommandHeader: cmdHeader,
        CommandBody: cmdBody
      }
      const strcmd = JSON.stringify(cmd)
      // console.log('strcmd=', strcmd)
      this.send(strcmd)
    },
    // 登出
    signout () {
      this.$nuxt.$loading.start()
      const token = 'NkcJY2HbMkqyQSz9zLbUbA'
      console.log('要求登出 signout()')
      const cmdHeader = {
        SN: 2,
        CommandID: 199,
        Encode: 'ASCII',
        Timestamp: 'xxxx',
        StatusCode: 1000,
        Message: 'SUCCESS',
        HasBody: true
      }
      const cmdBody = {
        Token: token
      }
      const cmd = {
        CommandHeader: cmdHeader,
        CommandBody: cmdBody
      }
      const strcmd = JSON.stringify(cmd)
      // console.log('strcmd=', strcmd)
      this.send(strcmd)
    },
    // RESPONSE_SIGN_IN_BY_LOGIN_CODE_RESULT
    process_201 (cmder) {
      console.log('201處理登入回傳 process_201(', cmder, ')')
      this.$nuxt.$loading.finish()
      if (cmder.CommandHeader.StatusCode === 1000) { // success
        if (cmder.CommandHeader.HasBody) {
          const accountinfo = cmder.CommandBody
          console.log('accountinfo=', accountinfo)
          this.$store.commit('setAccount', accountinfo)
        }
        console.log('this.$store.state.account=', this.$store.state.account)
        // console.log(this.$store.fetchAccount)
      } else {
        console.log('get login data fail!')
      }
    },
    // RESPONSE_RECHECK_TOKEN_RESULT
    process_202 (cmder) {
      console.log('202 重新檢查token回傳 process_202(', cmder, ')')
      this.$nuxt.$loading.finish()
      if (cmder.CommandHeader.StatusCode === 1000) { // success
        if (cmder.CommandHeader.HasBody) {
          const accountinfo = cmder.CommandBody
          console.log('accountinfo=', accountinfo)
          this.$store.commit('setAccount', accountinfo)
        }
        console.log('this.$store.state.account=', this.$store.state.account)
        // console.log(this.$store.fetchAccount)
      } else {
        console.log('get login data fail!')
      }
    },
    // REFLASH_MEMBER_INFO
    process_203 (cmder) {
      console.log('203處理會員資訊 process_203(', cmder, ')')
      // this.$nuxt.$loading.finish()
      if (cmder.CommandHeader.StatusCode === 1000) { // success
        if (cmder.CommandHeader.HasBody) {
          const userinfo = cmder.CommandBody
          console.log('userinfo=', userinfo)
          this.$store.commit('setUser', userinfo)
        }
        console.log('this.$store.state.user=', this.$store.state.user)
      } else {
        console.log('get user data fail!')
      }
    },
    // REFLASH_GAME_LOBBY_INFO
    process_204 (cmder) {
      console.log('204處理遊戲大廳資訊 process_204(', cmder, ')')
      if (cmder.CommandHeader.StatusCode === 1000) { // success
        if (cmder.CommandHeader.HasBody) {
          const lobbyinfo = cmder.CommandBody
          console.log('lobbyinfo=', lobbyinfo)
          this.$store.commit('setLobby', lobbyinfo)
        }
        console.log('this.$store.state.lobby=', this.$store.state.lobby)
      } else {
        console.log('get lobby data fail!')
      }
    },
    // REFLASH_GAME_TABLE_STATUS
    process_205 (cmder) {
      console.log('205處理遊戲桌資訊 process_205(', cmder, ')')
      if (cmder.CommandHeader.StatusCode === 1000) { // success
        if (cmder.CommandHeader.HasBody) {
          const gametableinfo = cmder.CommandBody
          console.log('gametableinfo=', gametableinfo)
          this.$store.commit('setTables', gametableinfo)
        }
        console.log('this.$store.state.tables=', this.$store.state.tables)
      } else {
        console.log('get tables data fail!')
      }
    },
    // RESPONSE_SIGN_OUT
    process_299 (cmder) {
      console.log('處理登出回傳299 process_299(', cmder, ')')
      this.$nuxt.$loading.finish()
      this.$store.commit('clear')
    },
    // RESPONSE_JOIN_GAME_RESULT
    process_20001 (cmder) {
      console.log('處理加入遊戲桌回傳20001 process_20001(', cmder, ')')
      if (cmder.CommandHeader.StatusCode === 1000) { // success
        console.log('join table success!')
        this.intable = true
      } else {
        console.log('join table fail!')
      }
    },
    // REFLASH_TALBE_STATUS
    process_20002 (cmder) {
      console.log('更新遊戲桌狀態20002 process_20002(', cmder, ')')
      if (cmder.CommandHeader.StatusCode === 1000) { // success
        if (cmder.CommandHeader.HasBody) {
          const gametableinfo = cmder.CommandBody
          console.log('gametableinfo=', gametableinfo)
          // this.$store.commit('setTables', gametableinfo)
        }
      } else {
        console.log('reflash table status fail!')
      }
    },
    // REFLASH_BET_INFOS
    process_20003 (cmder) {
      console.log('更新下注資訊20003 process_20003(', cmder, ')')
      if (cmder.CommandHeader.StatusCode === 1000) { // success
        if (cmder.CommandHeader.HasBody) {
          const betinfo = cmder.CommandBody
          console.log('betinfo=', betinfo)
          // this.$store.commit('setTables', gametableinfo)
        }
      } else {
        console.log('reflash bet info fail!')
      }
    },
    // REFLASH_GAME_HISTORY
    process_20004 (cmder) {
      console.log('更新遊戲歷史資訊20004 process_20004(', cmder, ')')
      if (cmder.CommandHeader.StatusCode === 1000) { // success
        if (cmder.CommandHeader.HasBody) {
          const history = cmder.CommandBody
          console.log('history=', history)
          // this.$store.commit('setTables', gametableinfo)
        }
      } else {
        console.log('refresh game history fail!')
      }
    },
    // RESPONSE_BET_RESULT
    process_20011 (cmder) {
      console.log('回傳下注結果20011 process_20011(', cmder, ')')
      if (cmder.CommandHeader.StatusCode === 1000) { // success
        if (cmder.CommandHeader.HasBody) {
          const betinfo = cmder.CommandBody
          console.log('betinfo=', betinfo)
          // this.$store.commit('setTables', gametableinfo)
        }
      } else {
        console.log('response bet result fail!')
      }
    },
    // RESPONSE_LEAVE_GAME_RESULT
    process_20099 (cmder) {
      console.log('回傳離開遊戲桌結果20099 process_20099(', cmder, ')')
      if (cmder.CommandHeader.StatusCode === 1000) { // success
        console.log('leave table success!')
      } else {
        console.log('leave table fail!')
      }
    },
    send (msg) {
      // console.log('send(', msg, ')')
      this.$sendMessage(msg)
    },
    bet () {
      console.log('要求壓注 bet()')
      this.$nuxt.$loading.start()
      this.$nuxt.$loading.finish()
      const cmdHeader = {
        SN: 2,
        CommandID: 10011,
        Encode: 'ASCII',
        Timestamp: 'xxxx',
        StatusCode: 1000,
        Message: 'SUCCESS',
        HasBody: true
      }
      const cmdBody = {
        GameID: 10001,
        TableID: 1,
        RoundID: '1234567890',
        AccessCode: 'IEiX-U7ZC0OOJCdQQUR2_Q',
        Bets: [1, 0, 0, 0, 0, 0, 0]
      }
      const cmd = {
        CommandHeader: cmdHeader,
        CommandBody: cmdBody
      }
      const strcmd = JSON.stringify(cmd)
      // console.log('strcmd=', strcmd)
      this.send(strcmd)
    },
    joinGame () {
      console.log('加入遊戲桌 joinGame()')
      const cmdHeader = {
        SN: 2,
        CommandID: 10001,
        Encode: 'ASCII',
        Timestamp: 'xxxx',
        StatusCode: 1000,
        Message: 'SUCCESS',
        HasBody: true
      }
      const cmdBody = {
        GameID: 10001,
        TableID: 1
      }
      const cmd = {
        CommandHeader: cmdHeader,
        CommandBody: cmdBody
      }
      const strcmd = JSON.stringify(cmd)
      // console.log('strcmd=', strcmd)
      this.send(strcmd)
    },
    leaveGame () {
      console.log('離開遊戲桌 leaveGame()')
      const cmdHeader = {
        SN: 2,
        CommandID: 10099,
        Encode: 'ASCII',
        Timestamp: 'xxxx',
        StatusCode: 1000,
        Message: 'SUCCESS',
        HasBody: true
      }
      const cmdBody = {
        GameID: 10001,
        TableID: 1
      }
      const cmd = {
        CommandHeader: cmdHeader,
        CommandBody: cmdBody
      }
      const strcmd = JSON.stringify(cmd)
      // console.log('strcmd=', strcmd)
      this.send(strcmd)
    },
    processMsg (msg) {
      // console.log('processMsg(msg=', msg, ')')
      const cmder = JSON.parse(msg)
      // console.log('processMsg(cmder=', cmder, ')')
      switch (cmder.CommandHeader.CommandID) {
        case 201: // RESPONSE_SIGN_IN_BY_LOGIN_CODE_RESULT
          this.process_201(cmder)
          break
        case 202: // RESPONSE_RECHECK_TOKEN_RESULT
          this.process_202(cmder)
          break
        case 203:// REFLASH_MEMBER_INFO
          this.process_203(cmder)
          break
        case 204:// REFLASH_GAME_LOBBY_INFO
          this.process_204(cmder)
          break
        case 205:// REFLASH_GAME_TABLE_STATUS
          this.process_205(cmder)
          break
        case 299:// RESPONSE_SIGN_OUT
          this.process_299(cmder)
          break
        case 20001:// RESPONSE_JOIN_GAME_RESULT
          this.process_20001(cmder)
          break
        case 20002:// REFLASH_TALBE_STATUS
          this.process_20002(cmder)
          break
        case 20003:// REFLASH_BET_INFOS
          this.process_20003(cmder)
          break
        case 20004:// REFLASH_GAME_HISTORY
          this.process_20004(cmder)
          break
        case 20011:// RESPONSE_BET_RESULT
          this.process_20011(cmder)
          break
        case 20099:// RESPONSE_LEAVE_GAME_RESULT
          this.process_20099(cmder)
          break
        default:
          console.error('no process CommandID=', cmder.CommandHeader.CommandID)
          break
      }
    }
  },
  head: {
    title: 'Game Lobby'
  }
}
</script>
<style>
</style>
