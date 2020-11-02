<template>
  <v-flex :md4="cardSize.md4" :md3="cardSize.md3" :md6="cardSize.md6" xs12>
    <v-card class="ma-1" elevation="24" raised outlined>
      <!-- Card bar for 2 cloumn view -->
      <v-row v-if="PropCardSize=='md6'" no-gutters class="dashboard-bar">
        <v-flex row class=" align-center">
          <span class="black--text textSize ml-4">{{ table && table.TableName }}  </span>
        </v-flex>
        <v-flex row class="align-center">
          <v-icon color="#B98F38">
            group
          </v-icon>
          <span class="black--text textSize">{{ playerCount }} </span>
        </v-flex>
        <v-flex row class="align-center">
          <v-img src="/icon/cb.png" max-height="1vw" max-width="1vw" />
          <span class="black--text textSize">{{ table && table.bb }}</span>
        </v-flex>
        <v-flex row class="align-center">
          <v-img src="/icon/cp.png" max-height="1vw" max-width="1vw" />
          <span class="black--text textSize">{{ table && table.pp }}</span>
        </v-flex>
        <v-flex row class="align-center">
          <v-img src="/icon/ct.png" max-height="1vw" max-width="1vw" />
          <span class="black--text textSize"> {{ table && table.tt }}</span>
        </v-flex>
        <v-flex style="flex: 0 1 auto;flex-basis: 100px;height:30px">
          <div class="d-flex white--text textSize justify-center align-center" :style="StateColor">
            <span class="white--text textSize"> {{ State }}</span>
          </div>
        </v-flex>
      </v-row>
      <!-- card bar for other column views -->
      <v-row v-if="PropCardSize!='md6'" no-gutters class="dashboard-bar">
        <v-flex row class=" align-center">
          <span class="black--text textSize ml-4"> {{ table && table.TableName }}  </span>
        </v-flex>
        <v-flex row class="align-center">
          <v-icon color="#B98F38">
            group
          </v-icon>
          <span class="black--text textSize">{{ playerCount }}</span>
        </v-flex>
        <v-flex row class="align-center">
          <v-img src="/icon/cb.png" max-height="1vw" max-width="1vw" />
          <span class="black--text textSize">{{ table && table.bb }}</span>
        </v-flex>
      </v-row>
      <!-- card bar for other column views -->
      <v-row v-if="PropCardSize!='md6'" no-gutters class="dashboard-bar">
        <v-flex row class="align-center ml-1">
          <v-img src="/icon/cp.png" max-height="1vw" max-width="1vw" />
          <span class="black--text textSize">{{ table && table.pp }}</span>
        </v-flex>
        <v-flex row class="align-center">
          <v-img src="/icon/ct.png" max-height="1vw" max-width="1vw" />
          <span class="black--text textSize"> {{ table && table.tt }}</span>
        </v-flex>
        <v-flex>
          <div class="d-flex white--text textSize justify-center align-center" style="background:#404040; height:30px;">
            <span> {{ State }}</span>
          </div>
        </v-flex>
      </v-row>

      <v-row no-gutters dense>
        <!-- image region for table host -->
        <div :style="{height:PropCardSize=='md3'?'12vh':'21vh', width:'17%'}">
          <v-img
            height="100%"
            width="100%"
            :src="imageavatar"
          >
            <div class="subheading text-center align-center white--text textSize" style="background-color:rgba(0,0,0,0.5)">
              {{ nameavatar }}
            </div>
            <v-row class="align-end fill-height" no-gutters>
              <v-col>
                <div class="subheading text-center white--text textSize" style="background-color:rgba(0,0,0,0.5)">
                  {{ table && table.name }}
                </div>
              </v-col>
            </v-row>
          </v-img>
        </div>
        <!-- hover div for showing table bet range and link to betroom -->
        <v-hover v-slot:default="{ hover }">
          <!-- Start show resultimg -->
          <div class="showing-resulting" :style="{height:PropCardSize=='md3'?'12vh':'21vh'}">
            <div
              :style="{width:'100%', height:'100%',
                       'background-image': 'url(\'/icon/'+
                         `${PropCardSize=='md6'?'road_big.png':PropCardSize=='md4'?'chess.png':'road_small.png'}`
                         //chaing background image based on card size and column views
                         + '\')',
                       'background-repeat': 'no-repeat',
                       'background-position': 'center',
                       'background-size': '100% 100%'}"
            >
              <v-row no-gutters style="height:100%;width:100%">
                <div
                  v-if="PropCardSize=='md6'||PropCardSize=='md3'"
                  :style="{height:'100%', width:PropCardSize=='md3'?'100%':'39%',}"
                  class="d-flex align-content-start flex-wrap flex-column"
                >
                  <v-img
                    v-for="(hi, index) in histroy"
                    :key="index"
                    class="mt-1"
                    :src="images[hi]"
                    max-height="calc((100%)/6)"
                    max-width="calc(100%/11)"
                  />
                </div>
                <div
                  v-if="PropCardSize=='md4'||PropCardSize=='md6'"
                  :style="{ height: '100%', width: PropCardSize=='md4'?'100%':'60%', }"
                >
                  <div style="width:100%; height:49%;">
                    <!-- <previewTable :row="6" :column="36"/> -->
                  </div>
                  <div style="width:100%; height:26.5%;">
                    <!-- <previewTable :row="3" :column="36"/> -->
                  </div>

                  <v-row style="width:100%; height:24.5%" no-gutters>
                    <div style="width:50%; height:100%; ">
                      <!-- <previewTable :row="4" :column="18"/> background-color:rgba(0, 0, 102,0.5)-->
                    </div>

                    <div style="width:50%; height:100%;">
                      <!-- <previewTable :row="4" :column="18"/> -->
                    </div>
                  </v-row>
                </div>
              </v-row>
            </div>
            <!-- first button -->
            <div
              v-if="hover&&!show &&!secondshow"
              class="d-flex align-center v-card--reveal justify-center #1f180e darken-2 display-3 white--text"

              style="height: 100%; background:black;"
            >
              <!-- <v-input v-model="show">{{show}}</v-input> -->

              <div
                v-for="(ga, index) in Games"
                :key="index"
                class=" mr-5 "
              >
                <v-btn
                  class="white--text"
                  :small="PropCardSize=='md3'"
                  :large="!PropCardSize=='md3'"
                  depressed
                  color="#5f4d35"
                  @click="show=true"
                >
                  {{ $t('TABLE.'+ga.GameCode) }}
                </v-btn>
              </div>
              <!--
              <div class="mr-5 ">
                <v-btn
                  class="white--text"
                  :small="PropCardSize=='md3'"
                  :large="!PropCardSize=='md3'"
                  depressed
                  color="#5f4d35"
                  @click="secondshow=true"
                >
                  7-Seat Baccarat
                </v-btn>
              </div>
              -->
            </div>
            <!-- end first button -->

            <!-- first button- second action-->
            <div
              v-if="hover ? show && hover : show=false "
              class=" #1f180e darken-2 v-card--reveal d-flex justify-center align-center flex-wrap display-3 white--text"

              style="height: 100%; background:black;"
            >
              <v-btn
                v-for="(bl, index) in betlimits"
                :key="index"
                class="white--text  mr-1"
                :small="PropCardSize=='md3'"
                :large="!PropCardSize=='md3'"
                depressed
                color="#5f4d35"
                link
                @click="joinGameTable(Games[0].GameID, table.TableID, bl.GroupID)"
              >
                {{ numFormat(bl.BetSettings[0].PBLL) }} - {{ numFormat(bl.BetSettings[0].PBUL) }}
              </v-btn>
            </div>
            <!-- end first button- second action-->

            <!-- second button- second action-->
            <div
              v-if="hover ? secondshow&& hover : secondshow=false "
              class=" #1f180e darken-2 v-card--reveal d-flex justify-center align-center flex-wrap display-3 white--text"

              style="height: 100%; background:black;"
            >
              <v-btn
                v-for="(bl, index) in betlimits"
                :key="index"
                class="white--text mr-1"
                :small="PropCardSize=='md3'"
                :large="!PropCardSize=='md3'"
                depressed
                color="#5f4d35"
                link
                @click="joinGameTable(Games[0].GameID, table.TableID, bl.GroupID)"
              >
                {{ numFormat(bl.PBLL) }} - {{ numFormat(bl.PBUL) }}
              </v-btn>
            </div>
            <!-- end second button- second action-->
          </div>
          <!-- End show resultimg -->
        </v-hover>
      </v-row>
    </v-card>
  </v-flex>
</template>
<script>

export default {
  props: [
    'table',
    'PropCardSize'
  ],
  //   components:{
  //     previewTable
  // },
  data () {
    return {
      show: false,
      secondshow: false,
      images: [
        { src: '/icon/0.png' },
        { src: '/icon/cp.png' },
        { src: '/icon/ct.png' },
        { src: '/icon/cb.png' }
      ],
      WinText: {
        0: this.$t('GAMEWIN.UWIN'),
        1: this.$t('GAMEWIN.PWIN'),
        2: this.$t('GAMEWIN.TWIN'),
        3: this.$t('GAMEWIN.BWIN')
      },
      StateText: {
        11: this.$t('GAMESTATE.READY'), // 準備
        21: this.$t('GAMESTATE.SUFFLE'), // 洗牌
        31: this.$t('GAMESTATE.BET'), // 押注
        41: this.$t('GAMESTATE.DRAW_CARDS'), // 開牌
        51: this.$t('GAMESTATE.SETTLE') // 結算
      }
    }
  },
  computed: {
    imageavatar () {
      if (this.table && this.table.tableinfo && this.table.tableinfo.DealerAvatar) {
        // console.log('this.table.tableinfo=', this.table.tableinfo)
        return this.table.tableinfo.DealerAvatar
      } else {
        return '/icon/avatar.png'
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
    nameavatar () {
      if (this.table && this.table.tableinfo && this.table.tableinfo.DealerName) {
        return this.table.tableinfo.DealerName
      } else {
        return ''
      }
    },
    cardSize () {
      switch (this.PropCardSize) {
        case 'md6':
          return {
            md6: true,
            md4: false,
            md3: false
          }
        case 'md4':
          return {
            md6: false,
            md4: true,
            md3: false
          }
        case 'md3':
          return {
            md6: false,
            md4: false,
            md3: true
          }
        default:
          return {
            md6: true,
            md4: false,
            md3: false
          }
      }
    },
    State () {
      if (this.table && this.table.tableinfo && this.table.tableinfo.State) {
        const st = this.table.tableinfo.State
        // console.log('tableinfo.State=', this.table.tableinfo.State)
        if (st === 31) {
          const cd = Math.ceil(this.table.tableinfo.Desktop.BetTimeCountDown / 1000)
          // console.log('tabled=' + this.table.tableinfo.TableID + ' cd=', cd)
          return (cd)
        } else if (st === 51) { // 結算
          const win = this.table.tableinfo.Desktop.Winlose
          return this.WinText[win]
        } else {
          return this.StateText[st]
        }
      } else {
        return ''
      }
    },
    StateColor () {
      if (this.table && this.table.tableinfo && this.table.tableinfo.State) {
        const st = this.table.tableinfo.State
        // console.log('tableinfo.State=', this.table.tableinfo.State)
        if (st === 11) { // READY 準備
          return 'background:dimgrey;height:30px'
        } else if (st === 21) { // SUFFLE 洗牌中
          return 'background:rebeccapurple;height:30px'
        } else if (st === 31) { // BET 可押注
          return 'background:darkcyan;height:30px'
        } else if (st === 41) { // DRAW_CARDS 開牌
          return 'background:black;height:30px'
        } else if (st === 51) { // SETTLE 結算
          const win = this.table.tableinfo.Desktop.Winlose
          if (win === 1) { // player win
            return 'background:blue;height:30px'
          } else if (win === 2) { // tie
            return 'background:green;height:30px'
          } else if (win === 3) { // bank win
            return 'background:darkred;height:30px'
          } else {
            return 'background:darkslategrey;height:30px'
          }
        } else {
          return 'background:green;height:30px'
        }
      } else {
        return 'background:black;height:30px'
      }
    },
    Games () {
      // console.log('[debug] lobby=', this.$store.state.lobby)
      if (this.$store.state.lobby) {
        // console.log('[debug] Games=', this.$store.state.lobby.Games)
        return this.$store.state.lobby.Games
      } else {
        return []
      }
    },
    histroy () {
      if (this.table && this.table.tableinfo && this.table.tableinfo.History) {
        // console.log('this.table.tableinfo=', this.table.tableinfo)
        return this.table.tableinfo.History
        // return ['1']
      } else {
        return []
      }
    },
    betlimits () {
      if (this.$store.state.groups) {
        // console.log('this.$store.state.groups=', this.$store.state.groups)
        return this.$store.state.groups.Groups
      } else {
        return []
      }
    },
    playerCount () {
      if (this.table && this.table.tableinfo && this.table.tableinfo.PlayerCount) {
        return this.table.tableinfo.PlayerCount
      } else {
        return 0
      }
    }
  },
  methods: {
    async joinGameTable (gid, tid, groupid) {
      console.log('[debug] joinGameTable(', this.table, ')')
      console.log('[debug] tihs.token=', this.token)
      console.log('[debug] groupid=', groupid)
      try {
        if (groupid) {
          this.$store.commit('setNowGroupID', groupid)
        }
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
          SC: 1000,
          B: cmdBody
        }
        // const strcmd = JSON.stringify(cmd)
        // console.log('[debug] cmd=', cmd)
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
        this.$router.push('/betRoom')
        // setTimeout(() => {
        //   this.$router.go()
        // }, 500)
        // window.location.reload()
        const token = cmder.B.PlayerGameToken
        console.log('[debug] join table success!! token=', token)
        if (token) {
          this.$store.commit('setPGToken', token)
        }
      } else {
        console.log('[debug] join table fail!', cmder)
        // this.$router.push('/betRoom')
      }
    },
    numFormat (num) {
      // console.log('numFormat(', num, ')')
      if (num >= 10000000) {
        return (num / 10000000) + 'K'
      } else {
        return (num / 10000)
      }
    }
  }

}
</script>
<style scoped>
.v-card--reveal {

bottom: 0;

opacity: 0.7;
position: absolute;
width: 100%;
}
.dashboard-bar{
  background-image:
  linear-gradient(
      rgb(255, 255, 255) 63%,
      #B98F38
    );
  color:black;
}
.showing-resulting {
   width:83%;
   height:21vh;
   margin: 0;
   padding: 0;
   position: relative;
}
.profile-img {
  margin-left:11px;
}
.textSize{
  font-size: 0.8vw;
}

</style>
