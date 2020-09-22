<template>
  <v-app id="app">
    <v-navigation-drawer
      fixed
      app
      permanent
      width="140px"
      style="box-sizing: border-box;border-right: 0.5vw solid #A56F19;"
    >
      <div style="height:30%;width:100% ;position:relative">
        <h1
          style="position:absolute;
            bottom:15%; left: 50%;
            transform: translate(-50%, -50%);
            font-size:1vw;
            font-weight:bold"
        >
          L O G O
        </h1>
        <p
          style="position:absolute; bottom:1%;font-size:0.8vw;left: 50%;
            transform: translate(-50%, -50%);
            font-weight:bold"
        >
          <pre>Company Name</pre>
        </p>
      </div>

      <router-link
        v-for="(item, i) in LeftMenu"
        :key="i"
        v-slot="{ navigate, isActive }"
        :to="item.to"
      >
        <v-btn
          block
          height="6vh"
          class="text-size mt-2"
          dark
          elevation="18"
          :class="[isActive && 'activeLink']"
          @click="navigate"
        >
          {{ item.title }}
        </v-btn>
      </router-link>

      <template v-slot:append>
        <v-list>
          <v-divider />
          <v-list-item
            class="red--text text-center"
          >
            <v-list-item-content>
              <v-list-item-title class="text-size">
                <v-icon>people</v-icon> &nbsp;&nbsp;{{ TotalCount }}
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
    <!-- <v-app-bar
      flat
      fixed
      app
      height="20px"
    >

      <v-toolbar-title v-text="title" />
      <v-spacer />
    </v-app-bar> -->
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
    <v-footer
      color="black"
      padless
      height="40px"
      inset
      fixed
      elevation="20"
    >
      <v-row class="d-flex flex-row justify-end">
        <div class="d-flex justify-center">
          <v-btn v-if="showViewList" icon class="pa-2 ma-1" link exact>
            <v-img src="/icon/wifi按鈕_4.png" />
          </v-btn>
        </div>
        <v-divider vertical />
        <div class="d-flex justify-center">
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
                <v-icon v-show="music!=0" class="pa-2" color="#B98F38">
                  audiotrack
                </v-icon>
                <v-icon v-show="music==0" class="pa-2" color="#B98F38">
                  music_off
                </v-icon>
              </v-btn>
            </template>
            <v-card color="rgba(34, 34, 34,0.9)">
              <v-row no-gutters>
                <v-col cols="3" class="text-center">
                  <p style="color:#C4A76E" class="mt-4">
                    Music
                  </p>
                </v-col>

                <v-col cols="9" class="text-center">
                  <v-row no-gutters dense>
                    <v-btn icon color="#C4A76E" class="mt-2" @click="music==0?music=50:music=0">
                      <v-icon v-show="music!=0">
                        volume_up
                      </v-icon>
                      <v-icon v-show="music==0">
                        volume_off
                      </v-icon>
                    </v-btn>
                    <v-slider
                      v-model="music"
                      class="mt-3"
                      color="#196260"
                    />
                  </v-row>
                </v-col>
              </v-row>
            </v-card>
          </v-menu>
        </div>

        <v-divider vertical />
        <div class="d-flex justify-center align-center" style="width:20vw">
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
                v-bind="attrs"
                v-on="on"
              >
                <v-icon class="pa-2 " color="#B98F38">
                  volume_up
                </v-icon>
              </v-btn>
            </template>
            <v-card color="rgba(34, 34, 34,0.9)">
              <v-row no-gutters>
                <v-col cols="4" class="text-center">
                  <p style="color:#C4A76E" class="mt-4">
                    Studio Sound
                  </p>
                </v-col>

                <v-col cols="8" class="text-center">
                  <v-row no-gutters dense>
                    <v-btn icon color="#C4A76E" class="mt-2" @click="studioSound==0?studioSound=50:studioSound=0">
                      <v-icon v-show="studioSound!=0">
                        volume_up
                      </v-icon>
                      <v-icon v-show="studioSound==0">
                        volume_off
                      </v-icon>
                    </v-btn>
                    <v-slider
                      v-model="studioSound"
                      class="mt-3"
                      color="#196260"
                    />
                  </v-row>
                </v-col>
              </v-row>
              <v-row no-gutters>
                <v-col cols="4" class="text-center">
                  <p style="color:#C4A76E" class="mt-4">
                    Game Volume
                  </p>
                </v-col>

                <v-col cols="8" class="text-center">
                  <v-row no-gutters dense>
                    <v-btn icon color="#C4A76E" class="mt-2" @click="gameVolume==0?gameVolume=50:gameVolume=0">
                      <v-icon v-show="gameVolume!=0">
                        volume_up
                      </v-icon>
                      <v-icon v-show="gameVolume==0">
                        volume_off
                      </v-icon>
                    </v-btn>
                    <v-slider
                      v-model="gameVolume"
                      class="mt-3"
                      color="#196260"
                    />
                  </v-row>
                </v-col>
              </v-row>
            </v-card>
          </v-menu>
          <v-btn-toggle v-model="toggle_exclusive" color="#B98F38">
            <v-btn
              v-if="!showViewList"
              value="0"
              icon
              link
              background-color="primary"
              :to="toRouteName+'?vtype=default'"
              exact
            >
              <v-icon class="pa-2 " color="#B98F38">
                view_list
              </v-icon>
            </v-btn>
            <v-btn
              v-if="!showViewList"
              value="1"
              icon
              link
              :to="toRouteName+'?vtype=road_map_view'"
              exact
            >
              <v-icon class="pa-2 " color="#B98F38">
                view_module
              </v-icon>
            </v-btn>
            <v-btn
              v-if="!showViewList"
              value="2"
              icon
              link
              :to="toRouteName+'?vtype=big_road_view'"
              exact
            >
              <v-icon class="pa-2 " color="#B98F38">
                view_column
              </v-icon>
            </v-btn>
          </v-btn-toggle>
          <v-btn v-if="showViewList" icon class="pa-2 ma-1" link exact>
            <v-img src="/icon/高清按鈕.png" />
          </v-btn>
          <v-btn v-if="showViewList" icon class="pa-2 ma-1" link exact>
            <v-icon class="pa-2 " color="#B98F38">
              videocam
            </v-icon>
          </v-btn>
          <v-btn v-if="showViewList&&false" icon class="pa-2 ma-1" link exact>
            <v-icon class="pa-2 " color="#B98F38">
              videocam_off
            </v-icon>
          </v-btn>
          <v-btn v-if="showViewList" icon class="pa-2 ma-1" link exact>
            <v-img src="/icon/重新載入視訊按鈕.png" />
          </v-btn>
        </div>
        <v-divider vertical />
        <div class="d-flex justify-center align-center footer-size" style="width:10vw;color:#C4A76E">
          <v-icon color="#B98F38" class="mr-2">
            attach_money
          </v-icon>
          {{ Money }}
          <v-icon small color="#B98F38" class="ml-2">
            autorenew
          </v-icon>
        </div>
        <v-divider vertical />
        <div class="d-flex justify-center align-center footer-size" style="width:10vw;color:#C4A76E">
          <v-icon class="mr-1" color="#B98F38">
            account_circle
          </v-icon>
          {{ PLAYER_NAME }}
        </div>
        <v-divider vertical />
        <div class="d-flex justify-center align-center footer-size" style="width:15vw;color:#C4A76E">
          {{ Now }}
        </div>
        <v-divider vertical />
        <div class="d-flex justify-center align-center">
          <v-menu
            offset-y
            top
            close-on-content-click
            :nudge-width="100"
            left
            :max-width="250"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                icon
                class="pa-2 ma-1"
                v-bind="attrs"
                v-on="on"
              >
                <v-icon class="pa-2" color="#B98F38">
                  menu
                </v-icon>
              </v-btn>
            </template>

            <v-card>
              <v-list
                dark
                color="rgba(12, 10, 6, 0.8)"
              >
                <v-subheader>
                  <v-icon>account_circle</v-icon>&nbsp;&nbsp;&nbsp;&nbsp;{{ PLAYER_NAME }}
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
                <v-list-item>
                  <v-list-item-action-text>
                    v0.123
                  </v-list-item-action-text>
                </v-list-item>
              </v-list>
            </v-card>
          </v-menu>
        </div>
        <v-divider vertical />
        <div class="d-flex" style="width:1vw" />
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
import betLog from '@/components/bet_log'
import memberReport from '@/components/member_report'
import gameAgreement from '@/components/gameAgreement'
import setting from '@/components/setting'
export default {
  middleware: 'authenticated',
  components: {
    betLog,
    memberReport,
    gameAgreement,
    setting
  },
  data () {
    return {
      LoginCode: this.$nuxt.$route.query.LoginCode,
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
      toggle_exclusive: 0,
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
      // console.log('[debug] this.$route=', this.$route)
      const routeArr = this.$route.name.split('-')
      // console.log(routeArr)
      if (routeArr.includes('betRoom')) {
        return true
      } else {
        return false
      }
    },
    Money () {
      // console.log('[debug] Money=', this.$store.state.user)
      if (this.$store.state.user && this.$store.state.user.Point) {
        return (this.$store.state.user.Point / 10000)
      } else {
        return 0
      }
    },
    TotalCount () {
      if (this.$store.state.tables && this.$store.state.tables.Tables) {
        const arr = this.$store.state.tables.Tables
        let count = 0
        arr.forEach((item) => {
          // console.log('item=', item)
          if (item) {
            count += item.PlayerCount
          }
        })
        // console.log('count=', count)
        return count
      } else {
        return 0
      }
    }
  },
  watch: {
  },
  loading: false,
  mounted () {
    // this.connect()
    // Always call on message
    this.doLogin()
    this.recheckToken()
    console.log('default.mounted()', this.$i18n)
    this.$websocket.addEventListener('close', (event) => {
      console.log('The connection has been closed successfully.')
    })
    // this.$i18n.setLocaleCookie('zh_tw')
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
  beforeDestroy () {
    this.$websocket.removeEventListener('any')
  },
  methods: {
    toggle (index) {
      console.log('[debug] toggle(', index, ')')
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
    // 登出
    async signout () {
      this.logoutDialog = false
      // this.$nuxt.$loading.start()
      const token = this.$store.state.account.Token
      console.log('[debug] 要求登出 signout()', token)
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
    async doGetCode () {
      let code = ''
      try {
        const url = 'http://35.229.140.14:30000/api/Agent/GetGameEntrance'
        const data = {
          AgentKey: '6J4wV3iFdUakdSiritwpMw',
          AccountName: 'DEMO999',
          GameProductionCode: 'STREAM_GAMING',
          LanguageTypeCode: 'en',
          ReturnURI: '',
          NotifyPlatformPlayerLeaveCallback: ''
        }
        const respons = await this.$axios.$post(url, data)
        this.percent = 40
        code = respons.LoginCode
        console.log('[debug] LoginCode=', code)
        // this.image = respons.message
      } catch (err) {
        console.log(err)
      }
      return code
    },
    async doLogin () {
      console.log('[debug] default.doLogin()')
      // const url = 'ws://121.40.165.18:8800'
      // const url = 'ws://35.229.140.14:30510'
      // this.$connect(url)
      this.percent = 10
      // console.log('[debug] this.LoginCode=', this.LoginCode)
      if (this.LoginCode === undefined) {
        // for local test
        this.percent = 20
        this.LoginCode = await this.doGetCode()
      }
      const code = this.LoginCode
      try {
        const cmd = {
          SN: 1,
          CID: 101,
          SC: 1000,
          B: {
            LoginCode: code
          }
        }
        // console.log('[debug] cmd=', cmd)
        // const strcmd = JSON.stringify(cmd)
        // console.log('this.$websocket=', this.$websocket)
        const cmder = await this.$websocket.sendAsync(cmd)
        // console.log('Response:', response)
        // const cmder = JSON.parse(response)
        this.percent = 50
        this.process_201(cmder)
        // console.log('[debug] cmder=', cmder)
      } catch (error) {
        console.error('[debug] error=', error)
        // for test
        const accountinfo = {
          xxx: 'aaa'
        }
        console.log('[debug] accountinfo=', accountinfo)
        this.$store.commit('setAccount', accountinfo)
        this.percent = 100
        this.$router.push('/roomlistdefault')
      }
    },
    async recheckToken () {
      this.logoutDialog = false
      // this.$nuxt.$loading.start()
      const token = this.$store.state.account.Token
      console.log('[debug] recheckToken() token=', token)
      const cmd = {
        SN: 3,
        CID: 102,
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
    process_201 (cmder) {
      // console.log('[debug] 201處理登入回傳 process_201(', cmder, ')')
      // this.$nuxt.$loading.finish()
      if (cmder.SC === 1000) { // success
        if (cmder.B) {
          this.percent = 100
          const accountinfo = cmder.B
          console.log('[debug] accountinfo=', accountinfo)
          this.$store.commit('setAccount', accountinfo)
          // this.$i18n.setLocaleCookie(accountinfo.LanguageTypeCode)
          this.$router.push('/roomlist')
        }
        // console.log(this.$store.fetchAccount)
      } else {
        this.percent = 100
        console.log('[debug] get login data fail!')
        // this.$router.push('/roomlist')
      }
    },
    // RESPONSE_RECHECK_TOKEN_RESULT
    process_202 (cmder) {
      console.log('202 重新檢查token回傳 process_202(', cmder, ')')
      // this.$nuxt.$loading.finish()
      if (cmder.SC === 1000) { // success
        if (cmder.B) {
          const accountinfo = cmder.B
          // console.log('accountinfo=', accountinfo)
          this.$store.commit('setAccount', accountinfo)
        }
        console.log('[debug] this.$store.state.account=', this.$store.state.account)
        // console.log(this.$store.fetchAccount)
      } else {
        console.log('[debug] get login data fail!')
      }
    },
    // REFLASH_MEMBER_INFO
    process_203 (cmder) {
      // console.log('203處理更新會員資訊 process_203(', cmder, ')')
      // this.$nuxt.$loading.finish()
      if (cmder.SC === 1000) { // success
        if (cmder.B) {
          const userinfo = cmder.B
          // console.log('更新會員資訊 userinfo=', userinfo)
          this.$store.commit('setUser', userinfo)
        }
        // .log('this.$store.state.user=', this.$store.state.user)
      } else {
        console.log('[debug] get user data fail!')
      }
    },
    // REFLASH_GAME_LOBBY_INFO
    process_204 (cmder) {
      console.log('204處理更新遊戲大廳資訊 process_204(', cmder, ')')
      if (cmder.SC === 1000) { // success
        if (cmder.B) {
          const lobbyinfo = cmder.B
          // console.log('更新遊戲大廳資訊 lobbyinfo=', lobbyinfo)
          this.$store.commit('setLobby', lobbyinfo)
        }
        // console.log('this.$store.state.lobby=', this.$store.state.lobby)
      } else {
        console.log('[debug] get lobby data fail!')
      }
    },
    // REFLASH_GAME_TABLE_STATUS
    process_205 (cmder) {
      console.log('205處理更新遊戲桌資訊 process_205(', cmder, ')')
      if (cmder.SC === 1000) { // success
        if (cmder.B) {
          const Tables = cmder.B
          console.log('更新遊戲桌資訊 Tables=', Tables)
          this.$store.commit('setTables', Tables)
        }
        // console.log('this.$store.state.tables=', this.$store.state.tables)
      } else {
        console.log('[debug] get tables data fail!')
      }
    },
    // REFLASH_GAME_GROUP
    process_206 (cmder) {
      console.log('206 處理刷新群組資訊 process_206(', cmder, ')')
      if (cmder.SC === 1000) { // success
        if (cmder.B) {
          const groups = cmder.B
          // console.log('更新群組資訊 groups=', groups)
          this.$store.commit('setGroups', groups)
        }
        // console.log('this.$store.state.tables=', this.$store.state.tables)
      } else {
        console.log('[debug] get groups data fail!')
      }
    },
    // RESPONSE_SIGN_OUT
    process_299 (cmder) {
      console.log('[debug] 處理登出回傳299 process_299(', cmder, ')')
      // this.$nuxt.$loading.finish()
      this.$store.commit('clear')
      this.$router.push('/')
    },
    // REFLASH_TALBE_STATUS
    process_20002 (cmder) {
      // console.log('[debug] 更新遊戲桌狀態20002 process_20002(', cmder, ')')
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
      // console.log('[debug] 更新下注資訊20003 process_20003(', cmder, ')')
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
      // console.log('[debug] 更新遊戲歷史資訊20004 process_20004(', cmder, ')')
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
      console.log('[debug] 回傳下注結果20011 process_20011(', cmder, ')')
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
      console.log('[debug] 回傳離開遊戲桌結果20099 process_20099(', cmder, ')')
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
      console.log('[debug] 離開遊戲桌 leaveGame()')
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
      // console.log('processMsg(cmder=', cmder, ')')
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
        case 206:// REFLASH_GAME_GROUP
          this.process_206(cmder)
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
          console.error('no process cmder=', cmder)
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
.footer-size{
  font-size: 0.8vw;
}
#app {
    background-color: var(--v-background-base);
}
.activeLink{
  background-image:
  linear-gradient(
      rgb(255, 255, 255) 63%,
      #B98F38
    );
  color:black
}
</style>
