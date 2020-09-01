<template>
  <v-container class="pa-0 ma-0" fluid>
    <div class="container">
      <v-row align="center" justify="center" class="pa-6">
        <v-img
          src="img/banner.jpg"
          class="grey lighten-2"
          width="60%"
          height="60%"
          contain
        />
      </v-row>
      <v-row no-gutters style="width:100%" align-content="center" justify="center">
        <div style="width:100%; height:200px;position:relative">
          <div
            style="width:20%;position:absolute; top:20%;left:47%;
            transform: translate(-50%, -50%);"
          >
            <div align="center">{{ percent }} % </div>
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
    </div>
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
    this.$i18n.setLocaleCookie('zh-tw')
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
        console.log('LoginCode=', code)
        // this.image = respons.message
      } catch (err) {
        console.log(err)
      }
      return code
    },
    async doLogin () {
      console.log('login()')
      // const url = 'ws://121.40.165.18:8800'
      // const url = 'ws://35.229.140.14:30510'
      // this.$connect(url)
      this.percent = 10
      console.log('this.LoginCode=', this.LoginCode)
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
        console.log('cmd=', cmd)
        // const strcmd = JSON.stringify(cmd)
        // console.log('this.$websocket=', this.$websocket)
        const cmder = await this.$websocket.sendAsync(cmd)
        // console.log('Response:', response)
        // const cmder = JSON.parse(response)
        this.percent = 50
        this.process_201(cmder)
        console.log('cmder=', cmder)
      } catch (error) {
        console.log('[debug] error=', error)
        // for test
        const accountinfo = {
          xxx: 'aaa'
        }
        console.log('accountinfo=', accountinfo)
        this.$store.commit('setAccount', accountinfo)
        this.percent = 100
        this.$router.push('/roomlist')
      }
    },
    process_201 (cmder) {
      console.log('201處理登入回傳 process_201(', cmder, ')')
      // this.$nuxt.$loading.finish()
      if (cmder.SC === 1000) { // success
        if (cmder.B) {
          this.percent = 100
          const accountinfo = cmder.B
          console.log('accountinfo=', accountinfo)
          this.$store.commit('setAccount', accountinfo)
          this.$i18n.setLocaleCookie(accountinfo.LanguageTypeCode)
          this.$router.push('/roomlist')
        }
        // console.log(this.$store.fetchAccount)
      } else {
        this.percent = 100
        console.log('get login data fail!')
        // this.$router.push('/roomlist')
      }
    }
  }
}
</script>
<style>
</style>
