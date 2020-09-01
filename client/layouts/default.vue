<template>
  <v-app id="app">
    <v-navigation-drawer
      fixed
      app
      dark
      permanent
      width="140"
      color="#312717"
    >
      <v-img :src="mylogo" width="140" />
      <v-list>
        <v-list-item
          v-for="(item, i) in LeftMenu"
          :key="i"
          class="red--text text-center"
        >
          <v-list-item-content>
            <v-btn
              block
              height="5vh"
              :to="item.to"
              class="text-size"
              color="#9c7e49"
            >
              {{ item.title }}
            </v-btn>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <v-list>
          <v-divider />
          <v-list-item
            link
            class="red--text text-center "
          >
            <v-list-item-content>
              <v-list-item-title class="text-size">
                <v-icon>email</v-icon> {{ $t('LEFTMENU.FEEDBACK') }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider />
          <v-list-item
            class="red--text text-center"
          >
            <v-list-item-content>
              <v-list-item-title class="text-size">
                <v-icon>people</v-icon> &nbsp;&nbsp;{{ online }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider />
          <v-list-item class="red--text text-center">
            <v-list-item-content>
              <v-list-item-title class="text-size">
                {{ version }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </template>
    </v-navigation-drawer>
    <v-main>
      <nuxt />
    </v-main>
    <v-dialog
      v-model="betlogDialog"
      max-width="1200"
      min-width="290"
    >
      <betLog @close="betlogDialog=false" />
    </v-dialog>
    <v-dialog
      v-model="memberReportDialog"
      max-width="800"
      min-width="290"
    >
      <memberReport @close="memberReportDialog=false" />
    </v-dialog>
    <v-dialog
      v-model="gameAgreementDialog"
      max-width="800"
      min-width="290"
    >
      <gameAgreement @close="gameAgreementDialog=false" />
    </v-dialog>
    <v-dialog
      v-model="settingDialog"
      max-width="800"
      min-width="290"
    >
      <setting @close="settingDialog=false" />
    </v-dialog>
    <v-dialog
      v-model="logoutDialog"
      max-width="400"
      min-width="290"
    >
      <logoutdialog @close="logoutDialog=false" @signout="signout" />
    </v-dialog>
    <v-footer
      color="#312717"
      padless
      height="40px"
      inset
      app
      dark
    >
      <v-row class="d-flex flex-row justify-end">
        <v-divider vertical />
        <div class="d-flex justify-center">
          <v-menu
            offset-y
            top
            :close-on-content-click="false"
            :nudge-width="150"
            :max-width="350"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                icon
                class="pa-2 ma-1"
                v-bind="attrs"
                v-on="on"
              >
                <v-icon v-show="soundOn" class="pa-2">
                  audiotrack
                </v-icon>
                <v-icon v-show="!soundOn" class="pa-2">
                  music_off
                </v-icon>
              </v-btn>
            </template>
            <v-card>
              <v-row no-gutters>
                <v-col cols="3" class="text-center">
                  <p style="color:#876f4d" class="mt-4">
                    Music
                  </p>
                </v-col>

                <v-col cols="9" class="text-center">
                  <v-row no-gutters dense>
                    <v-btn icon color="#876f4d" class="mt-2">
                      <v-icon>volume_up</v-icon>
                      <!-- <v-icon>volume_off</v-icon> -->
                    </v-btn>
                    <v-slider
                      v-model="music"
                      class="mt-3"
                    />
                  </v-row>
                </v-col>
              </v-row>
            </v-card>
          </v-menu>
        </div>

        <v-divider vertical />
        <div class="d-flex">
          <v-menu
            offset-y
            top
            :close-on-content-click="false"
            :nudge-width="350"
            :max-width="350"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                icon
                class="pa-2 ma-1"
                v-bind="attrs"
                v-on="on"
              >
                <v-icon class="pa-2 ">
                  volume_up
                </v-icon>
              </v-btn>
            </template>
            <v-card>
              <v-row no-gutters>
                <v-col cols="4" class="text-center">
                  <p style="color:#876f4d" class="mt-4">
                    Studio Sound
                  </p>
                </v-col>

                <v-col cols="8" class="text-center">
                  <v-row no-gutters dense>
                    <v-btn icon color="#876f4d" class="mt-2">
                      <v-icon>volume_up</v-icon>
                      <!-- <v-icon>volume_off</v-icon> -->
                    </v-btn>
                    <v-slider
                      v-model="studioSound"
                      class="mt-3"
                    />
                  </v-row>
                </v-col>
              </v-row>
              <v-row no-gutters>
                <v-col cols="4" class="text-center">
                  <p style="color:#876f4d" class="mt-4">
                    Game Volume
                  </p>
                </v-col>

                <v-col cols="8" class="text-center">
                  <v-row no-gutters dense>
                    <v-btn icon color="#876f4d" class="mt-2">
                      <v-icon>volume_up</v-icon>
                      <!-- <v-icon>volume_off</v-icon> -->
                    </v-btn>
                    <v-slider
                      v-model="gameVolume"
                      class="mt-3"
                    />
                  </v-row>
                </v-col>
              </v-row>
            </v-card>
          </v-menu>
          <v-btn
            v-if="!showViewList"
            icon
            class="pa-2 ma-1"
            link
            :to="toRouteName"
            exact
          >
            <v-icon class="pa-2 ">
              view_list
            </v-icon>
          </v-btn>
          <v-btn
            v-if="!showViewList"
            icon
            class="pa-2 ma-1"
            link
            :to="toRouteName+'/road_map_view'"
            exact
          >
            <v-icon class="pa-2 ">
              view_module
            </v-icon>
          </v-btn>
          <v-btn
            v-if="!showViewList"
            icon
            class="pa-2 ma-1"
            link
            :to="toRouteName+'/big_road_view'"
            exact
          >
            <v-icon class="pa-2 ">
              view_column
            </v-icon>
          </v-btn>

          <v-btn v-if="showViewList" icon class="pa-2 ma-1" link exact>
            <v-icon class="pa-2 ">
              hd
            </v-icon>
          </v-btn>
          <v-btn v-if="showViewList" icon class="pa-2 ma-1" link exact>
            <v-icon class="pa-2 ">
              videocam
            </v-icon>
          </v-btn>
          <v-btn v-if="showViewList" icon class="pa-2 ma-1" link exact>
            <v-icon class="pa-2 ">
              videocam_off
            </v-icon>
          </v-btn>
        </div>
        <v-divider vertical />
        <div class="d-flex">
          <div style="width:40px" class="pa-2">
            <v-icon>attach_money</v-icon>
          </div>

          <div class="pa-2">
            {{ Money }}
          </div>
          <v-btn icon link>
            <v-icon small>
              autorenew
            </v-icon>
          </v-btn>
        </div>
        <v-divider vertical />
        <div class="d-flex">
          <div style="width:40px" class="pa-2">
            <v-icon>account_circle</v-icon>
          </div>
          <div class="pa-2">
            {{ PLAYER_NAME }}
          </div>
        </div>
        <v-divider vertical />
        <div class="d-flex">
          <div class="pa-2">
            {{ Now }}
          </div>
        </div>
        <v-divider vertical />
        <div class="d-flex">
          <v-menu
            offset-y
            top
            close-on-content-click
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                icon
                v-bind="attrs"
                v-on="on"
              >
                <v-icon>
                  menu
                </v-icon>
              </v-btn>
            </template>

            <v-card>
              <v-list
                dark
                color="#312717"
              >
                <v-subheader>
                  <v-icon>account_circle</v-icon> &nbsp;&nbsp;&nbsp;&nbsp;{{ PLAYER_NAME }}
                </v-subheader>
                <v-list-item
                  v-for="(item, i) in MainMenu"
                  :key="i"
                  link
                  @click="toggle(i)"
                >
                  <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                  </v-list-item-icon>
                  {{ item.title }}
                </v-list-item>
              </v-list>
            </v-card>
          </v-menu>
        </div>
        <v-divider vertical />
        <div class="d-flex" style="width:10px" />
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
import betLog from '@/components/bet_log'
import memberReport from '@/components/member_report'
import gameAgreement from '@/components/gameAgreement'
import setting from '@/components/setting'
import logoutdialog from '@/components/logoutdialog'

export default {
  middleware: 'authenticated',
  components: {
    betLog,
    memberReport,
    gameAgreement,
    setting,
    logoutdialog
  },
  data () {
    return {
      LoginCode: this.$nuxt.$route.query.LoginCode,
      online: 1,
      Money: 0,
      Now: this.$moment().format('YYYY-MM-DD HH:mm:ss Z'),
      version: 'v0.0.10',
      mylogo: 'img/logo.png',
      PLAYER_NAME: '',
      studioSound: 50,
      gameVolume: 60,
      music: 30,
      fixed: false,
      soundOn: true,
      betlogDialog: false,
      memberReportDialog: false,
      gameAgreementDialog: false,
      settingDialog: false,
      logoutDialog: false,
      LeftMenu: [
        {
          title: this.$t('LEFTMENU.BACCARAT'),
          to: '/roomlist'
        },
        {
          title: this.$t('LEFTMENU.MULTIBET'),
          to: '/multibet'
        },
        {
          title: this.$t('LEFTMENU.MOBILE'),
          to: '/inspire'
        }

      ],
      MainMenu: [
        {
          icon: 'history',
          title: this.$t('MAINMENU.BETLOG')
        },
        {
          icon: 'text_snippet',
          title: this.$t('MAINMENU.MEMBERREPORT')
        },
        {
          icon: 'settings',
          title: this.$t('MAINMENU.SETTING')
        },
        {
          icon: 'info',
          title: this.$t('MAINMENU.GAGREEMENT')
        },
        {
          icon: 'logout',
          title: this.$t('MAINMENU.LOGOUT')
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },
  computed: {
    toRouteName () {
      const routeArr = this.$route.name.split('-')
      if (routeArr.includes('multibet')) {
        return '/multibet'
      } else {
        return '/roomlist'
      }
    },
    showViewList () {
      const routeArr = this.$route.name.split('-')
      console.log(routeArr)
      if (routeArr.includes('betRoom')) {
        return true
      } else {
        return false
      }
    }
  },
  loading: false,
  mounted () {
    // this.connect()
    // Always call on message
    this.$websocket.addEventListener('any', (cmder) => {
      // console.log('xxxxxxxxxxxxxxxxxx Got a message: ', cmder)
      // const cmder = JSON.parse(data)
      this.processMsg(cmder)
    })
    const that = this
    setInterval(() => {
      that.getNow()
    }, 1000)
    // console.log('this.$store.state.account=', this.$store.state.account)
    this.PLAYER_NAME = this.$store.state.account.AccountName
  },
  methods: {
    toggle (index) {
      console.log('toggle(', index, ')')
      switch (index) {
        case 0:
          this.betlogDialog = true
          break
        case 1:
          this.memberReportDialog = true
          break
        case 2:
          this.settingDialog = true
          break
        case 3:
          this.gameAgreementDialog = true
          break
        case 4:
          this.logoutDialog = true
          break
        default:
          break
      }
    },
    getNow () {
      this.Now = this.$moment().format('YYYY-MM-DD HH:mm:ss Z')
      // console.log(this.Now)
    },
    /*
    connect () {
      // this.$nextTick(() => {
        // this.$nuxt.$loading.start()
      // })
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
            // that.$nuxt.$loading.finish()
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
            // that.$nuxt.$loading.finish()
          })
          console.error('onerror() Socket encountered error: ', err, 'Closing socket')
          that.websocket.close()
        }
        this.websocket.onclose = function (e) {
          that.$nextTick(() => {
            // that.$nuxt.$loading.finish()
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
    */
    // 登出
    async signout () {
      this.logoutDialog = false
      // this.$nuxt.$loading.start()
      const token = this.$store.state.account.Token
      console.log('要求登出 signout()', token)
      const cmd = {
        SN: 2,
        CID: 199,
        SC: 1000,
        B: {
          Token: token
        }
      }
      // console.log('strcmd=', strcmd)
      // this.send(strcmd)
      const cmder = await this.$websocket.sendAsync(cmd)
      // console.log('Response.data:', response.data)
      // const cmder = JSON.parse(response)
      this.processMsg(cmder)
    },
    // RESPONSE_RECHECK_TOKEN_RESULT
    process_202 (cmder) {
      console.log('202 重新檢查token回傳 process_202(', cmder, ')')
      // this.$nuxt.$loading.finish()
      if (cmder.SC === 1000) { // success
        if (cmder.B) {
          const accountinfo = cmder.B
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
      // console.log('203處理會員資訊 process_203(', cmder, ')')
      // this.$nuxt.$loading.finish()
      if (cmder.SC === 1000) { // success
        if (cmder.B) {
          const userinfo = cmder.B
          // console.log('userinfo=', userinfo)
          this.$store.commit('setUser', userinfo)
        }
        // .log('this.$store.state.user=', this.$store.state.user)
      } else {
        console.log('get user data fail!')
      }
    },
    // REFLASH_GAME_LOBBY_INFO
    process_204 (cmder) {
      // console.log('204處理遊戲大廳資訊 process_204(', cmder, ')')
      if (cmder.SC === 1000) { // success
        if (cmder.B) {
          const lobbyinfo = cmder.B
          // console.log('lobbyinfo=', lobbyinfo)
          this.$store.commit('setLobby', lobbyinfo)
        }
        // console.log('this.$store.state.lobby=', this.$store.state.lobby)
      } else {
        console.log('get lobby data fail!')
      }
    },
    // REFLASH_GAME_TABLE_STATUS
    process_205 (cmder) {
      // console.log('205處理遊戲桌資訊 process_205(', cmder, ')')
      if (cmder.SC === 1000) { // success
        if (cmder.B) {
          const gametableinfo = cmder.B
          // console.log('gametableinfo=', gametableinfo)
          this.$store.commit('setTables', gametableinfo)
        }
        // console.log('this.$store.state.tables=', this.$store.state.tables)
      } else {
        console.log('get tables data fail!')
      }
    },
    // RESPONSE_SIGN_OUT
    process_299 (cmder) {
      console.log('處理登出回傳299 process_299(', cmder, ')')
      // this.$nuxt.$loading.finish()
      this.$store.commit('clear')
      this.$router.push('/')
    },
    // REFLASH_TALBE_STATUS
    process_20002 (cmder) {
      // console.log('更新遊戲桌狀態20002 process_20002(', cmder, ')')
      if (cmder.SC === 1000) { // success
        if (cmder.B) {
          // const gametableinfo = cmder.B
          // console.log('gametableinfo=', gametableinfo)
          // this.$store.commit('setTables', gametableinfo)
        }
      } else {
        console.log('reflash table status fail!')
      }
    },
    // REFLASH_BET_INFOS
    process_20003 (cmder) {
      // console.log('更新下注資訊20003 process_20003(', cmder, ')')
      if (cmder.SC === 1000) { // success
        if (cmder.B) {
          // const betinfo = cmder.B
          // console.log('betinfo=', betinfo)
          // this.$store.commit('setTables', gametableinfo)
        }
      } else {
        console.log('reflash bet info fail!')
      }
    },
    // REFLASH_GAME_HISTORY
    process_20004 (cmder) {
      // console.log('更新遊戲歷史資訊20004 process_20004(', cmder, ')')
      if (cmder.SC === 1000) { // success
        if (cmder.B) {
          // const history = cmder.B
          // console.log('history=', history)
          // this.$store.commit('setTables', gametableinfo)
        }
      } else {
        console.log('refresh game history fail!')
      }
    },
    // RESPONSE_BET_RESULT
    process_20011 (cmder) {
      // console.log('回傳下注結果20011 process_20011(', cmder, ')')
      if (cmder.SC === 1000) { // success
        if (cmder.B) {
          // const betinfo = cmder.B
          // console.log('betinfo=', betinfo)
          // this.$store.commit('setTables', gametableinfo)
        }
      } else {
        console.log('response bet result fail!')
      }
    },
    // RESPONSE_LEAVE_GAME_RESULT
    process_20099 (cmder) {
      console.log('回傳離開遊戲桌結果20099 process_20099(', cmder, ')')
      if (cmder.SC === 1000) { // success
        console.log('leave table success!')
      } else {
        console.log('leave table fail!')
      }
    },
    /*
    send (msg) {
      // console.log('send(', msg, ')')
      this.$sendMessage(msg)
    },
    bet () {
      console.log('要求壓注 bet()')
      // this.$nuxt.$loading.start()
      // this.$nuxt.$loading.finish()
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
      this.send(strcmd)
    },
    async joinGame () {
      console.log('加入遊戲桌 joinGame()')
      const token = this.$store.state.account.Token
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
      // const strcmd = JSON.stringify(cmd)
      // console.log('strcmd=', strcmd)
      // this.send(strcmd)
      const cmder = await this.$websocket.sendAsync(cmd)
      // console.log('Response.data:', response.data)
      // const cmder = JSON.parse(response)
      this.processMsg(cmder)
    },
    */
    leaveGame () {
      console.log('離開遊戲桌 leaveGame()')
      const token = this.$store.state.account.Token
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
      this.send(strcmd)
    },
    processMsg (cmder) {
      // console.log('processMsg(msg=', msg, ')')
      // const cmder = JSON.parse(msg)
      // console.log('processMsg(cmder=', cmder, ')')
      switch (cmder.CID) {
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
  }
}
</script>
<style scoped>
.text-size{
  font-size: 1.6vh;
}
#app {
    background-color: var(--v-background-base);
}
</style>
