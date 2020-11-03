<template>
  <div>
    <div style="height:5vh;width:100%;background-color:#2f2f2f">
      <v-row class="justify-center" style="height:80%;width:100%; margin:0;" no-gutters>
        <div
          v-for="(t, index) in Tables"
          :key="index+1"
          style="height:10vh;width:12.5%;"
          class="d-flex justify-center align-center"
        >
          <v-card
            height="80%"
            width="80%"
            dark
            class="d-flex justify-center align-middle room-list"
            :class="{ 'windowActive': nowtableid==t.TableID }"
            @click="doChangeTable(t.TableID)"
          >
            {{ t.TableName }}
          </v-card>
        </div>
      </v-row>
    </div>
    <v-window>
      <v-window-item :value="1">
        <div style="height:45vh;width:100%">
          <div class="text-center tableBg">
            <div style="width:100%; height:25%;" />

            <div style="width:100%; height:12.5%;" />

            <v-row style="width:100%; height:12.7%" no-gutters>
              <div style="width:50%; height:100%; " />

              <div style="width:50%; height:100%;" />
            </v-row>

            <div style="width:100%; height:50%;" class="d-flex align-content-start flex-wrap flex-column">
              <HoverPreviewResult v-for="n in 12" :key="n">
                <template v-slot:item="slotProps">
                  <v-img
                    src="/icon/cb.png"
                    max-height="1.6vw"
                    max-width="1.6vw"
                    v-bind="slotProps.activate.attrs"
                    v-on="slotProps.activate.on"
                  />
                </template>
              </HoverPreviewResult>
            </div>
          </div>
          <v-row no-gutters style="width:100%; height:10%">
            <div class="d-flex align-center justify-left room-list" style="width:50%; height:100%; background-color:black">
              <span class="font-weight-bold red--text ml-1">庄</span>
              <span class="font-weight-bold white--text ml-1">13</span>
              <span class="font-weight-bold blue--text ml-1">圓</span>
              <span class="font-weight-bold white--text ml-1">123</span>
              <span class="font-weight-bold green--text ml-1">和</span>
              <span class="font-weight-bold white--text ml-1">13</span>
              <span class="font-weight-bold red--text ml-1">庄庄</span>
              <span class="font-weight-bold white--text ml-1">13</span>
              <span class="font-weight-bold blue--text ml-1">和和</span>
              <span class="font-weight-bold white--text ml-1">133</span>
            </div>
            <div class="d-flex align-center justify-left room-list" style="width:50%; height:100%; background-color:black">
              <v-btn small color="#c70000" class="ml-1">
                <span class="white--text">庄問路</span>
              </v-btn>
              <v-img
                max-width="1vw"
                max-height="1vw"
                src="/icon/redc.png"
              />
              <v-avatar color="#c70000" class="ml-1" size="15" />
              <span class="font-weight-bold red--text ml-1 mr-5  ">/</span>
              <v-btn small color="#2d30b1" class="ml-1">
                <span class="white--text"> 閒問路</span>
              </v-btn>
              <v-img
                max-width="1vw"
                max-height="1vw"
                src="/icon/bluec.png"
              />
              <v-avatar color="#2d30b1" class="ml-1" size="15" />
              <span class="font-weight-bold ml-1" style="color:#2d30b1">/</span>
            </div>
          </v-row>
        </div>
      </v-window-item>
      <!--
      <v-window-item :value="2">
        <div class="pa-4 text-center" style="height:100%; width:100%;background-color:black">
          <v-text-field
            label="Password"
            type="password"
          />
          <v-text-field
            label="Confirm Password"
            type="password"
          />
          <span class="caption grey--text text--darken-1">
            Please enter a password for your account
          </span>
        </div>
      </v-window-item>

      <v-window-item :value="3">
        <div class="pa-4 text-center" style="height:100%; width:100%;background-color:black">
          <v-img
            class="mb-4"
            contain
            height="128"
            src="https://cdn.vuetifyjs.com/images/logos/v.svg"
          />
          <h3 class="title font-weight-light mb-2">
            Welcome to Vuetify
          </h3>
          <span class="caption grey--text">Thanks for signing up!</span>
        </div>
      </v-window-item>
      -->
    </v-window>
  </div>
</template>
<script>
export default {
  data () {
    return {
      window: 1
    }
  },
  computed: {
    nowtableid () {
      return this.$store.state.nowtableid
    },
    nowgameid () {
      const nowtable = this.$store.state.nowtable
      if (nowtable) {
        return nowtable.GameID
      } else {
        return 0
      }
    },
    token () {
      // console.log('this.$store.state=', this.$store.state)
      if (this.$store.state.account) {
        // console.log('[debug] Token=', this.$store.state.account.Token)
        return this.$store.state.account.Token
      } else {
        return []
      }
    },
    Tables () {
      const nowtable = this.$store.state.nowtable
      if (nowtable) {
        const gameid = nowtable.GameID
        // const tableid = nowtable.TableID
        const lobby = this.$store.state.lobby
        // console.log('lobby=', lobby)
        const games = lobby.Games
        // console.log('games=', games)
        const gameinfo = games.find(e => e.GameID === gameid)
        // console.log('gameinfo=', gameinfo)
        const gtables = gameinfo.Tables
        // console.log('gtables=', gtables)
        // const ti = gtables.find(e => e.TableID === tableid)
        // console.log('tableinfo=', ti)
        // nowtable.info = ti
        // console.log('nowtable=', nowtable)
        return gtables
      } else {
        return []
      }
    }
  },
  methods: {
    doChangeTable (tid) {
      console.log('doChangeTable(tableid=', tid, ')')
      this.joinGameTable(this.nowgameid, tid)
      // this.leaveGameTable(this.nowgameid, tid)
    },
    async leaveGameTable (ptoken) {
      console.log('[debug] leaveGameTable(ptoken=', ptoken, ')')
      console.log('[debug] tihs.token=', this.token)
      try {
        const cmdBody = {
          Token: this.token,
          PlayerGameToken: ptoken
        }
        console.log('cmdBody=', cmdBody)
        const cmd = {
          SN: 2,
          CID: 19999,
          B: cmdBody
        }
        // const strcmd = JSON.stringify(cmd)
        console.log('[debug] cmd=', cmd)
        // this.send(strcmd)
        const cmder = await this.$websocket.sendAsync(cmd)
        // console.log('[debug] Response.data:', response.data)
        // const cmder = JSON.parse(response)
        this.process_29999(cmder)
      } catch (error) {
        console.error('[debug] error=', error)
        // this.$router.push('/betRoom')
      }
    },
    async joinGameTable (gid, tid) {
      console.log('[debug] joinGameTable(', this.table, ')')
      console.log('[debug] tihs.token=', this.token)
      try {
        if (tid) {
          this.$store.commit('setNowTableID', tid)
        }
        const cmdBody = {
          Token: this.token,
          GameID: gid,
          TableID: tid
        }
        console.log('cmdBody=', cmdBody)
        const cmd = {
          SN: 2,
          CID: 10001,
          B: cmdBody
        }
        // const strcmd = JSON.stringify(cmd)
        console.log('[debug] cmd=', cmd)
        // this.send(strcmd)
        const cmder = await this.$websocket.sendAsync(cmd)
        // console.log('[debug] Response.data:', response.data)
        // const cmder = JSON.parse(response)
        this.process_20001(cmder)
      } catch (error) {
        console.error('[debug] error=', error)
        // this.$router.push('/betRoom')
      }
    },
    // RESPONSE_JOIN_GAME_RESULT
    process_20001 (cmder) {
      console.log('[debug] 處理加入遊戲桌回傳20001 process_20001(', cmder, ')')
      if (cmder.SC === 1000) { // success
        const token = cmder.B.PlayerGameToken
        console.log('[debug] join table success!! token=', token)
        if (token) {
          const oldtoken = this.$store.state.pgtoken
          this.leaveGameTable(oldtoken)
          this.$store.commit('setPGToken', token)
        }
      } else {
        console.log('[debug] join table fail!', cmder)
        // this.$router.push('/betRoom')
      }
    },
    // RESPONSE_LEAVE_GAME_RESULT
    process_29999 (cmder) {
      console.log('[debug] 回傳離開遊戲桌結果29999 process_29999(', cmder, ')')
      if (cmder.SC === 1000) { // success
        console.log('leave table success!')
      } else {
        console.log('leave table fail!')
      }
    }
  }
}
</script>
<style scoped>
.tableBg{
  height:90%;
  width:100%;
  background-color:#2E2E2E;
  background-image: url('/icon/road_s.png');
  background-repeat:no-repeat;
  background-position:center;
  background-size: 100% 100%
}
 .windowActive{
      background-color:#AA8647 ;

    }
      .room-list{
        font-size: 0.8vw;
    }
</style>
