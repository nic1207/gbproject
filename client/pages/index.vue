/* eslint-disable no-console */
<template>
  <v-container fluid>
    <div class="logo" style="margin-left:470px;" />

    <v-row class="align-center justify-center pa-6">
      <v-img
        src="/banner.jpg"
        aspect-ratio="1.8"
        class="grey lighten-2"
        max-width="700"
        max-height="500"
        contain
      >
        <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0 justify-center"
            align="center"
          >
            <v-progress-circular indeterminate color="grey lighten-5" />
          </v-row>
        </template>
      </v-img>
    </v-row>

    <v-row no-gutters style="width:100%" align-content="center" justify="center">
      <div style="width:100%; height:200px;position:relative">
        <div
          style="width:20%;position:absolute; top:10%;left:47%;
                          transform: translate(-50%, -50%);"
        >
          <div>{{ percent }} % </div>
          <v-progress-linear
            v-model="percent"
            color="#ffff99"
            value="10"
            height="10"
            striped
            rounded
          />
        </div>
        <div
          style="width:20%;position:absolute; top:30%;left:69.2%;
                          transform: translate(-50%, -50%); "
        >
          <div class="playTable" />
        </div>
      </div>
    </v-row>
  </v-container>
</template>

<script>
export default {
  layout: 'welcome',
  data () {
    return {
      LoginCode: this.$nuxt.$route.query.LoginCode,
      percent: 0
    }
  },
  mounted () {
    console.log('pages.index mounted()')
    // this.$i18n.setLocaleCookie('zh-tw')
    this.doLogin()
    // this.doGetCode()
  },
  methods: {
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
        // console.log('[debug] doGetCode(code=', code)
        // this.image = respons.message
      } catch (err) {
        console.log(err)
      }
      return code
    },
    async doLogin () {
      console.log('[debug] index.doLogin()')
      // const url = 'ws://121.40.165.18:8800'
      // const url = 'ws://35.229.140.14:30510'
      // this.$connect(url)
      this.percent = 10
      console.log('[debug] this.LoginCode=', this.LoginCode)
      if (this.LoginCode === undefined) {
        this.percent = 20
        const token = this.$store.state.account && this.$store.state.account.Token
        console.log('[debug] token=', token)
        if (token) {
          this.recheckToken()
          return
        } else {
          // for local test
          this.LoginCode = await this.doGetCode()
          console.log('[debug] new LoginCode=', this.LoginCode)
          // for stable server
          // this.$store.commit('clear')
          // window.location.href = 'http://35.229.140.14:30601/'
        }
      }
      console.log('do_send_login()')
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
        // this.$router.push('/roomlist')
      }
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
          // setTimeout(() => {
          //   this.$router.go()
          // }, 1000)
        }
        // console.log(this.$store.fetchAccount)
      } else {
        this.percent = 100
        console.log('[debug] get login data fail!')
        // this.$router.push('/roomlist')
      }
    },
    async recheckToken () {
      // this.logoutDialog = false
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
      this.process_202(cmder)
    },
    // RESPONSE_RECHECK_TOKEN_RESULT
    process_202 (cmder) {
      console.log('[debug] 202 重新檢查token回傳 process_202(', cmder, ')')
      // this.$nuxt.$loading.finish()
      if (cmder.SC === 1000) { // success
        if (cmder.B) {
          const accountinfo = cmder.B
          console.log('accountinfo=', accountinfo)
          this.$store.commit('setAccount', accountinfo)
          this.$router.push('/roomlist')
        }
        // console.log('[debug] this.$store.state.account=', this.$store.state.account)
        // console.log(this.$store.fetchAccount)
      } else {
        console.log('[debug] recheck token fail and dologout!')
        this.$store.commit('clear')
        window.location.href = 'http://35.229.140.14:30601/'
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.container {
  text-align: center;
  font-size: 20px;
  color: white;
  background: black;
  width: 100%;
  height: 100%;
  padding: 70px;

}
.playTable{
    background-image: url("/logo.jpg");
    height: 100px;
}
.logo{
  background-image: url("/gaming.jpg");
  height: 100px;
}

</style>
