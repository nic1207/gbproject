<template>
  <v-container class="pa-0 ma-0" fluid>
    <div class="container">
      <div>
        <Logo />
        <div class="links">
          <v-btn
            color="#D69F51"
            @click="login"
          >
            {{ $t('WELCOME.PLAY') }}
          </v-btn>
        </div>
      </div>
    </div>
  </v-container>
</template>
<script>
export default {
  layout: 'welcome',
  data () {
    return {
      LoginCode: this.$nuxt.$route.query.LoginCode
    }
  },
  mounted () {
    this.$i18n.setLocaleCookie('en')
  },
  methods: {
    async login () {
      // const url = 'ws://121.40.165.18:8800'
      // const url = 'ws://35.229.140.14:30510'
      // this.$connect(url)
      const code = 'aaaX2323DEEDa2SWW'
      try {
        const cmd = {
          SN: 1,
          CID: 101,
          SC: 1000,
          B: {
            LoginCode: code
          }
        }
        // const strcmd = JSON.stringify(cmd)
        const cmder = await this.$websocket.sendAsync(cmd)
        // console.log('Response:', response)
        // const cmder = JSON.parse(response)
        this.process_201(cmder)
        console.log('cmder=', cmder)
      } catch (error) {
        console.error('error=', error)
      }
    },
    process_201 (cmder) {
      console.log('201處理登入回傳 process_201(', cmder, ')')
      // this.$nuxt.$loading.finish()
      if (cmder.SC === 1000) { // success
        if (cmder.B) {
          const accountinfo = cmder.B
          console.log('accountinfo=', accountinfo)
          this.$store.commit('setAccount', accountinfo)
          this.$i18n.setLocaleCookie(accountinfo.LanguageTypeCode)
          this.$router.push('/roomlist')
        }
        // console.log(this.$store.fetchAccount)
      } else {
        console.log('get login data fail!')
      }
    }
  }
}
</script>
<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  /*background-image:url('~static/img/mainbg.jpg');*/
}
</style>
