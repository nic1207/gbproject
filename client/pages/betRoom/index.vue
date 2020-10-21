<template>
  <v-container class="pa-0 ml-1" fluid style="background-color:black">
    <v-row class="pa-0" style="height:96vh;" no-gutters>
      <v-img
        v-show="showCoin"
        width="3vw"
        height="3vw"
        contain
        :style="{ left: page.left+ 'px', top: page.top+ 'px' ,position:'absolute','z-index':1000}"
        :src="'/coin/'+betCoin"
      />
      <TutorialBetroom1 v-if="tutorial" @close="do_tutorial" />
      <v-col class="pa-0" cols="7">
        <div id="v-step-0" class="playTable">
          <div v-show="vReady" style="width:100% ;height: 100%">
            <video-player
              ref="vPlayer"
              class="video-js vjs-big-play-centered"
              style="width:100% ;height: 100%"
              :options="playerOptions"
              :playsinline="true"
              @play="onPlayerPlay($event)"
              @loadeddata="onPlayerLoadeddata($event)"
              @canplay="onPlayerCanplay($event)"
              @ready="playerReadied"
            />
          </div>
          <!--
          <v-btn
            class="mx-2"
            dark
            small
            color="#4F3C2B"
            style="position:absolute;bottom:1%;left:0"
            link
            to="/betRoom/betRoom2"
          >
            <v-icon dark>
              picture_in_picture
            </v-icon>
          </v-btn>
          -->
          <!--
          <v-btn class="mx-2" dark small color="#4F3C2B" style="position:absolute;bottom:10%;right:0">
            <v-icon dark>
              switch_video
            </v-icon>
          </v-btn>
          <v-btn class="mx-2" dark small color="#4F3C2B" style="position:absolute;bottom:1%;right:0">
            <v-icon dark>
              fullscreen
            </v-icon>
          </v-btn>
          -->
          <div class="room-title d-flex justify-center align-center white--text">
            {{ $t('TABLE.'+NowGameInfo.GameCode) }} {{ NowTableInfo.TableName }}
          </div>
          <v-avatar
            v-show="StateString"
            color="rgba(0,0,0,0.5)"
            size="130"
            class="gameCountDown"
          >
            <v-progress-circular
              v-show="cd>=0 || StateString"
              :value="(cd)*10"
              color="red"
              size="100"
            >
              <span> {{ StateString }} </span><span v-show="cd>=0">{{ cd }}</span>
            </v-progress-circular>
          </v-avatar>
          <div v-if="false" class="d-flex flex-column justify-center align-center betResult">
            {{ StateString }}
          </div>
        </div>
        <!--beting play section-->
        <v-tabs
          background-color="#404040"
          class="elevation-2"
          centered
          grow
          dark
          height="4vh"
          hide-slider
          active-class="tabActive black--text"
        >
          <v-tab
            v-for="(item, index) in NowGameInfo.Subgames"
            :key="index+1"
            :href="`#tab-${ index+1 }`"
            style="color:#F7D9AB;"
            @click="changeSubgame(item)"
          >
            <span style="font-size:0.8vw"> {{ $t('SUBGAMENAMES.'+item.SubgameCode) }}</span>
          </v-tab>
          <!--
          <v-tab
            :href="`#tab-2`"
            style="color:#F7D9AB;"
          >
            <span style="font-size:0.8vw">  No Commission</span>
          </v-tab>
          <v-tab
            :href="`#tab-3`"
            style="color:#F7D9AB;"
          >
            <span style="font-size:0.8vw">  Cow Cow</span>
          </v-tab>
          -->
          <v-tab-item
            :value="'tab-' + 1"
          >
            <v-card
              flat
              tile
              height="30vh"
              class="playArea"
              @mouseenter="showCoin = true"
              @mousemove="onMouseMove"
              @mouseleave="showCoin = false"
            >
              <div v-show="State!=31" style="position:absolute;height:100%;width:100%; margin:0;background-color: rgba(0,0,0,0.5)">
                <div v-show="State!=31" class="d-flex justify-center align-center stopBetting">
                  {{ $t('TABLE.STOPBETTING') }}
                </div>
              </div>
              <div v-if="false" class="d-flex flex-column justify-center align-center bettingSuccess">
                <v-icon color="green" size="60">
                  done
                </v-icon>
                Betting Success
              </div>

              <v-row style="height:55%;width:100%; margin:0">
                <v-col tile cols="4" class="playArea-tile" align="center" @click="dobet('P')">
                  <h1>{{ $t('TABLE.PLAYER') }}</h1>
                  <h2>1:1</h2>
                </v-col>
                <v-col tile class="tie playArea-tile" align="center" @click="dobet('T')">
                  <h1>{{ $t('TABLE.TIE') }}</h1>
                  <h2>8:1</h2>
                </v-col>
                <v-col tile cols="4" class="playArea-tile banker" align="center" @click="dobet('B')">
                  <h1> {{ $t('TABLE.BANKER') }} </h1>
                  <h2>0.95:1</h2>
                </v-col>
              </v-row>
              <v-row style="height:45%;width:100%; margin:0">
                <v-col tile cols="3" class="playArea-tile1" align="center" @click="dobet('PP')">
                  <h1>{{ $t('TABLE.PLAYERPAIR') }}</h1>
                  <h2>11:1</h2>
                </v-col>
                <v-col tile cols="3" class="playArea-tile1" align="center" @click="dobet('PN')">
                  <h1>{{ $t('TABLE.PLAYERNATURAL') }}</h1>
                  <h2>7:2</h2>
                </v-col>
                <v-col tile cols="3" class="playArea-tile1 banker" align="center" @click="dobet('BN')">
                  <h1>{{ $t('TABLE.BANKERNATURAL') }}</h1>
                  <h2>7:2</h2>
                </v-col>
                <v-col tile cols="3" class="playArea-tile1 banker" align="center" @click="dobet('BP')">
                  <h1>{{ $t('TABLE.BANKERPAIR') }}</h1>
                  <h2>11:1</h2>
                </v-col>
              </v-row>
            </v-card>
          </v-tab-item>
          <v-tab-item
            :value="'tab-' + 2"
          >
            <v-card
              flat
              tile
              height="30vh"
              class="playArea"
            >
              <div v-show="State!=31" style="position:absolute;height:100%;width:100%; margin:0;background-color: rgba(0,0,0,0.5)">
                <div v-show="State!=31" class="d-flex justify-center align-center stopBetting">
                  {{ $t('TABLE.STOPBETTING') }}
                </div>
              </div>
              <v-row style="height:55%;width:100%; margin:0">
                <v-col tile cols="4" class="playArea-tile" align="center" @click="dobet('P')">
                  <h1>{{ $t('TABLE.PLAYER') }}</h1>
                  <h2>1:1</h2>
                </v-col>
                <v-col tile cols="4" class="tie playArea-tile" align="center" @click="dobet('T')">
                  <h1>{{ $t('TABLE.TIE') }}</h1>
                  <h2>8:1</h2>
                </v-col>
                <v-col tile cols="4" class="playArea-tile banker" align="center" @click="dobet('B')">
                  <h1>{{ $t('TABLE.BANKER') }}</h1>
                  <h2>1:1</h2>
                </v-col>
              </v-row>
              <v-row style="height:45%;width:100%; margin:0">
                <v-col tile cols="3" class="playArea-tile1" align="center" @click="dobet('PN')">
                  <h1>{{ $t('TABLE.PLAYERNATURAL') }}</h1>
                  <h2>11:1</h2>
                </v-col>
                <v-col tile cols="3" class="playArea-tile1" align="center" @click="dobet('PP')">
                  <h1>{{ $t('TABLE.PLAYERPAIR') }}</h1>
                  <h2>7:2</h2>
                </v-col>
                <v-col tile cols="3" class="playArea-tile1 banker" align="center" @click="dobet('BN')">
                  <h1>{{ $t('TABLE.BANKERNATURAL') }}</h1>
                  <h2>7:2</h2>
                </v-col>
                <v-col tile cols="3" class="playArea-tile1 banker" align="center" @click="dobet('BP')">
                  <h1>{{ $t('TABLE.BANKERPAIR') }}</h1>
                  <h2>11:1</h2>
                </v-col>
              </v-row>
            </v-card>
          </v-tab-item>
          <v-tab-item
            :value="'tab-' + 3"
          >
            <v-card
              flat
              tile
              height="30vh"
              class="playArea"
            >
              <div v-show="State!=31" style="position:absolute;height:100%;width:100%; margin:0;background-color: rgba(0,0,0,0.5)">
                <div v-show="State!=31" class="d-flex justify-center align-center stopBetting">
                  {{ $t('TABLE.STOPBETTING') }}
                </div>
              </div>
              <v-row style="height:100%;width:100%; margin:0">
                <v-col tile cols="4" class="playArea-tile" align="center" @click="dobet('P')">
                  <h1>{{ $t('TABLE.PLAYER') }}</h1>
                  <h2>1:1</h2>
                </v-col>
                <v-col tile cols="4" class="tie playArea-tile" align="center" @click="dobet('T')">
                  <h1>{{ $t('TABLE.TIE') }}</h1>
                  <h2>8:1</h2>
                </v-col>
                <v-col tile cols="4" class="playArea-tile banker" align="center" @click="dobet('B')">
                  <h1>{{ $t('TABLE.BANKER') }}</h1>
                  <h2>1:1</h2>
                </v-col>
              </v-row>
            </v-card>
          </v-tab-item>
        </v-tabs>
        <!--total bet amount-->
        <div
          style="height:4vh ;background-color:#023016;"
          class="d-flex justify-center align-center white--text"
        >
          {{ $t('TABLE.TOTALBETAMOUNT') }} : 0.0
        </div>
        <!--betcoin selection-->
        <div class="selectCoin d-flex align-center white--text pa-2">
          <v-menu
            v-model="coinMenu"
            offset-y
            top
            :close-on-content-click="false"
            :nudge-width="450"
            :max-width="450"
            dark
          >
            <template v-slot:activator="{ on, attrs }">
              <div
                class="text-center mt-1 mx-2"
                style="width:2.7vw;
                  height:2.6vw;
                  background-image:url('/icon/7customUI.png');
                  background-repeat: no-repeat;
                  background-position: center;
                  background-size: 100% 100%;"
                v-bind="attrs"
                v-on="on"
                @click="openCoinSelect"
              />
            </template>
            <v-card color="rgba(0, 0, 0, 0.7)" elevation="20">
              <v-card-title>
                <v-row no-gutters justify="center">
                  Please Select
                </v-row>
              </v-card-title>
              <v-row no-gutters justify="center">
                <v-img
                  v-for="(coin,n) in coinList"
                  :key="n"
                  class="text-center ma-2"
                  max-width="3.7vw"
                  max-height="2.6vw"
                  :src="'/coin/'+coin"
                >
                  <v-checkbox
                    v-model="selectedCoin"
                    :value="coin"
                    color="#009167"
                    :disabled="disableCoinSelect?selectedCoin.includes(coin)?false:true:false"
                  />
                </v-img>
              </v-row>
              <v-card-actions>
                <v-row justify="center">
                  <!-- <v-btn small class="mx-2" fab dark color="#4f3c2b" @click="cancelCoinSelect"> -->

                  <v-img
                    src="/icon/selectUI.png"
                    class="ma-2"
                    max-width="2.5vw"
                    max-height="2.5vw"
                    @click="cancelCoinSelect"
                  />

                  <!-- </v-btn> -->
                  <v-img
                    src="/icon/cancelUI.png"
                    class="ma-2"
                    max-width="2.5vw"
                    max-height="2.5vw"
                    @click="changeShowing"
                  />
                </v-row>
              </v-card-actions>
            </v-card>
          </v-menu>
          <v-img
            v-for="(coin,n) in showingCoin"
            :key="n"
            :src="betCoin==coin?'/coin/coin_selecting.png':''"
            max-width="4.9vw"
            height="3.9vw"
            @click="betCoin=coin"
          >
            <v-row
              class="fill-height ma-0"
              align="center"
              justify="center"
            >
              <v-img
                max-width="3.7vw"
                max-height="2.6vw"
                :src="'/coin/'+coin"
              />
            </v-row>
          </v-img>
          <div
            class="text-center mt-1 ml-2"
            style="width:2.7vw;
            height:2.6vw;
            background-image:url('/icon/doubleui.png');
            background-repeat: no-repeat;
            background-position: center;
            background-size: 100% 100%"
          />
        </div>
      </v-col>
      <!--betroom detail-->
      <v-col cols="5" class="pa-0">
        <BetRoom1Tableinfo />
        <v-row no-gutters>
          <v-col cols="12">
            <!--betroom history and other betrooms history-->
            <BetHistory />
          </v-col>
          <!--
          <v-col cols="3">
            <BetRoom1SideTable />
          </v-col>
          -->
        </v-row>
      </v-col>
    </v-row>
    <!--
    <button v-show="!drawer" class="Custombutton" style="position:absolute; top:12vh;right:0;" @click="drawer=true">
      <p class="py-5" style="writing-mode: vertical-rl;text-orientation: upright;letter-spacing:-2px;font-size:0.8vw">
        tables
      </p>
    </button>
    -->
    <TableDrawer :drawer="drawer" @close="drawer=false" />
  </v-container>
</template>

<script>
import 'video.js/dist/video-js.css'
import { videoPlayer } from 'vue-video-player'
import { uuid } from 'vue-uuid'
// import errorVue from '../../layouts/error.vue'
// import previewTable from '@/components/previewTable';
// import tableDrawer from '@/components/tableDrawer';
export default {
  components: {
    videoPlayer
  },
  data () {
    return {
      playerOptions: {
        muted: true,
        language: 'en',
        autoplay: true, // 是否自動播放
        controls: true, // 是否擁有控制條
        loop: true, // 導致視訊一結束就重新開始
        preload: 'muted', // 建議瀏覽器在<video>載入元素後是否應該開始下載視訊數據。auto瀏覽器選擇最佳行爲,立即開始載入視訊（如果瀏覽器支援）
        // aspectRatio: '16:9', // 播放器大小比例
        fluid: true, // 當true時，將按比例縮放以適應其容器
        techOrder: ['html5'], // 相容順序'flash', 'html5'
        sourceOrder: true,
        html5: {
          hls: {
            withCredentials: true
          }
        },
        sources: [{
          withCredentials: false,
          type: 'video/mp4',
          src: 'http://1.34.133.245:3310/live/test.m3u8'
          // src: 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm'
          // type: 'application/x-mpegURL', // 型別
          // src: 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8' // 流地址
        }]
        // poster: '/vue-videojs-demo/static/images/logo.png'
        // controlBar: {
        //   timeDivider: false, // 時間分割線
        //   durationDisplay: false, // 總時間
        //   progressControl: true, // 進度條
        //   customControlSpacer: true, // 未知
        //   fullscreenToggle: true // 全螢幕
        // },
      },
      // player: undefined,
      // activeSrc: 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8',
      // activeSrc: 'http://1.34.133.245:3310/live/test.m3u8',
      page: { left: 170, top: 0 },
      showCoin: false,
      subgameid: 1, // default 1
      videoready: false,
      tutorial: false,
      drawer: false,
      betsuccess: false,
      coinMenu: false,
      selectedCoin: [],
      // showingCoin: [],
      coinList: [
        'coin_5.png', 'coin_10.png', 'coin_20.png', 'coin_50.png',
        'coin_100.png', 'coin_200.png', 'coin_500.png', 'coin_1000.png',
        'coin_2000.png', 'coin_5000.png', 'coin_10k.png', 'coin_20k.png'
      ],
      betCoin: 'coin_5.png',
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
    player () {
      return this.$refs.vPlayer.player
    },
    vReady () {
      return this.videoready
    },
    disableCoinSelect () {
      if (this.selectedCoin.length === 5) {
        return true
      } else {
        return false
      }
    },
    showingCoin () {
      const showcoins = this.$store.state.showcoins
      return showcoins
    },
    nowtable () {
      const nowtable = this.$store.state.nowtable
      console.log('!!!!!!!!!!!!!!!!!!nowtable.RoundID=', nowtable.RoundID)
      return nowtable
    },
    State () {
      const nowtable = this.$store.state.nowtable
      if (nowtable && nowtable.State) {
        const st = this.nowtable.State
        // console.log('!!!!! st=', st)
        return st
      } else {
        // console.log(this.nowtable)
        return -1
      }
    },
    StateString () {
      const nowtable = this.$store.state.nowtable
      if (nowtable && nowtable.State) {
        const st = this.nowtable.State
        // console.log('!!!!! st=', st)
        if (st === 31) {
          // const cd = Math.ceil(this.nowtable.Desktop.BetTimeCountDown / 1000)
          // console.log('!!!! BetTimeCountDown=', cd)
          return this.StateText[st]
        } else if (st === 51) { // 結算
          const win = this.nowtable.Desktop.Winlose
          return this.WinText[win]
        } else {
          return this.StateText[st]
        }
      } else {
        // console.log(this.nowtable)
        return ''
      }
    },
    cd () {
      const nowtable = this.$store.state.nowtable
      if (nowtable && nowtable.State) {
        const st = this.nowtable.State
        if (st === 31) {
          const cd = Math.ceil(this.nowtable.Desktop.BetTimeCountDown / 1000)
          // console.log('!!!! BetTimeCountDown=', cd)
          return cd
        } else {
          return -1
        }
      } else {
        return -1
      }
    },
    NowGameInfo () {
      const nowtable = this.$store.state.nowtable
      const gameid = nowtable.GameID
      const lobby = this.$store.state.lobby
      // console.log('lobby=', lobby)
      const games = lobby.Games
      // console.log('games=', games)
      const gameinfo = games.find(e => e.GameID === gameid)
      // console.log('gameinfo=', gameinfo)
      return gameinfo
    },
    NowGameID () {
      const nowtable = this.$store.state.nowtable
      const gameid = nowtable.GameID
      return gameid
    },
    NowSubGameID () {
      return this.subgameid
    },
    NowGroupID () {
      return this.$store.state.NowGroupID
    },
    NowTableInfo () {
      // console.log('zzzzz nowtableinfo=', this.$store.state.nowtable)
      const nowtable = this.$store.state.nowtable
      const gameid = nowtable.GameID
      const tableid = nowtable.TableID
      // console.log('nowtable=', nowtable)
      const lobby = this.$store.state.lobby
      // console.log('lobby=', lobby)
      const games = lobby.Games
      // console.log('games=', games)
      const gameinfo = games.find(e => e.GameID === gameid)
      // console.log('gameinfo=', gameinfo)
      const gtables = gameinfo.Tables
      // console.log('gtables=', gtables)
      const ti = gtables.find(e => e.TableID === tableid)
      // console.log('tableinfo=', ti)
      return ti
    }
  },
  // components:{
  //       previewTable,
  //       tableDrawer
  //   },
  mounted () {
    const xx = this.$cookies.get('t_betroom')
    this.tutorial = !xx
    // console.log('xxxx this.tutorial=', this.tutorial)
    /*
    setTimeout(() => {
      // console.log('aaaaaaa this.$refs=', this.$refs)
      console.log('bbbbbb this.player=', this.player)
      if (this.player === undefined) {
        // console.log('[debug] zzzzzzzzzzzzzzzzzzz')
        const player = Videojs(this.$refs.avplayer1, {
          sources: [{ src: this.activeSrc }],
          autoplay: true,
          muted: true,
          controls: true
        })
        this.player = player
        this.player.src(this.activeSrc)
      } else {
        this.player.src(this.activeSrc)
        // this.player.play();
      }
      console.log('!!!!!!!!!!!!!!!!!!!! this.player=', this.player)
      this.player.play()
      this.videoready = true
    }, 1000)
    */
  },
  methods: {
    // listen event
    onPlayerPlay (player) {
      console.log('player play!', player)
      // this.videoready = true
    },
    onPlayerCanplay (player) {
      console.log('onPlayerCanplay()', player)
      // this.videoready = true
    },
    onPlayerPause (player) {
      console.log('player pause!', player)
    },
    onPlayerLoadeddata (player) {
      console.log('onPlayerLoadeddata!', player)
      this.videoready = true
    },

    // player is ready
    playerReadied (player) {
      console.log('the player is readied', player)
      // you can use it to do something...
      // player.[methods]
    },
    onMouseMove (e) {
      // console.log('[debug] page x: ', e.pageX, e.pageY)
      // console.log(window.screen.width)
      // this.page.left = (e.pageX * 100 / window.screen.width) - 7
      this.page.left = e.pageX - 160
      this.page.top = e.pageY + 10
      // this.page.top = e.pageY
    },
    changeSubgame (item) {
      console.log('changeSubgame(', item, ')')
      this.subgameid = item.SubgameID
    },
    changeShowing () {
      this.coinMenu = false
      this.$store.commit('setShowCoins', [...this.selectedCoin])
    },
    openCoinSelect () {
      console.log('openCoinSelect()this.showingCoin=', this.showingCoin)
      this.selectedCoin = [...this.showingCoin]
    },
    cancelCoinSelect () {
      this.selectedCoin = []
      this.coinMenu = false
    },
    do_tutorial () {
      console.log('do_tutorial()')
      this.tutorial = false
      this.$cookies.set('t_betroom', 1)
    },
    async dobet (btype) {
      console.log('要求壓注 bet()')
      let betpoint = 50000
      // 'coin_5.png', 'coin_10.png', 'coin_20.png', 'coin_50.png',
      //  'coin_100.png', 'coin_200.png', 'coin_500.png', 'coin_1000.png',
      //  'coin_2000.png', 'coin_5000.png', 'coin_10k.png'
      switch (this.betCoin) {
        case 'coin_5.png':
          betpoint = 50000
          break
        case 'coin_10.png':
          betpoint = 100000
          break
        case 'coin_20.png':
          betpoint = 200000
          break
        case 'coin_50.png':
          betpoint = 500000
          break
        case 'coin_100.png':
          betpoint = 1000000
          break
        case 'coin_200.png':
          betpoint = 2000000
          break
        case 'coin_500.png':
          betpoint = 5000000
          break
        case 'coin_1000.png':
          betpoint = 10000000
          break
        case 'coin_2000.png':
          betpoint = 20000000
          break
        case 'coin_5000.png':
          betpoint = 50000000
          break
        case 'coin_10k.png':
          betpoint = 100000000
          break
        case 'coin_20k.png':
          betpoint = 200000000
          break
        default:
          betpoint = 50000
          break
      }
      let bets = [0, 0, 0, 0, 0, 0, 0] // [PLAYER, TIE, BANKER, P_PAIR, P_NATUAL, B_PAIR, B_NATUAL]
      try {
        switch (btype) {
          case 'P': // Player 閒
            bets = [betpoint, 0, 0, 0, 0, 0, 0]
            break
          case 'T': // Tie 和
            bets = [0, betpoint, 0, 0, 0, 0, 0]
            break
          case 'B': // Bank 庄
            bets = [0, 0, betpoint, 0, 0, 0, 0]
            break
          case 'PP': // Player Pair 閒對
            bets = [0, 0, 0, betpoint, 0, 0, 0]
            break
          case 'PN': // Player Natural 閒例牌
            bets = [0, 0, 0, 0, betpoint, 0, 0]
            break
          case 'BP': // Bank Pair 庄對
            bets = [0, 0, 0, 0, 0, betpoint, 0]
            break
          case 'BN': // Bank Natural 庄例牌
            bets = [0, 0, 0, 0, 0, 0, betpoint]
            break
          default:
            bets = [0, 0, 0, 0, 0, 0, 0]
            break
        }
        const acode = uuid.v4()
        console.log('acode=', acode)
        const token = this.$store.state.account.Token
        const pgtoken = this.$store.state.pgtoken
        const nowtable = this.$store.state.nowtable
        console.log('xzzzz nowtable.RoundID=', nowtable.RoundID)
        const nowgroupid = this.$store.state.nowgroupid
        const cmdBody = {
          Token: token, // 在線憑證
          PlayerGameToken: pgtoken, // 玩家遊戲憑證
          AccessCode: acode, // (本次投注之)存取碼
          GameID: nowtable.GameID, // 遊戲識別號
          TableID: nowtable.TableID, // 桌識別號
          RoundID: nowtable.RoundID, // 回合識別號
          GroupID: nowgroupid, // 群組識別號
          SubgameID: this.subgameid, // 子遊戲識別號
          Bets: bets // 欲投注點數。依以下順訊排列 [PLAYER, TIE, BANKER, P_PAIR, P_NATUAL, B_PAIR, B_NATUAL]
        }
        const cmd = {
          SN: 1,
          CID: 10101,
          B: cmdBody
        }
        console.log('[debug] cmd=', cmd)
        // this.send(strcmd)
        const cmder = await this.$websocket.sendAsync(cmd)
        // console.log('[debug] Response.data:', response.data)
        // const cmder = JSON.parse(response)
        this.process_20101(cmder)
      } catch (error) {
        console.error('[debug] error=', error)
        // this.$router.push('/betRoom')
      }
    },
    process_20101 (cmder) {
      console.log('[debug] 處理回應投注結果20101 process_20101(', cmder, ')')
      if (cmder.SC === 1000) { // success
        this.$router.push('/betRoom')
        const AccessCode = cmder.B.AccessCode
        console.log('[debug] bet success!! AccessCode=', AccessCode)
        // if (AccessCode) {
        //  this.$store.commit('setPGToken', token)
        // }
      } else {
        console.log('[debug] bet fail!', cmder)
        // this.$router.push('/betRoom')
      }
    }
  }
}
</script>
<style scoped>
.stopBetting{
  font-size:0.8vw;
  width:20%;
  height:30%;
  background-color:rgba(0,0,0,0.5);
  position:absolute;
  color:white;
  top:50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.bettingSuccess{
  font-size:0.9vw;
  width:25%;
  height:35%;
  background-color:rgba(0,0,0,0.5);
  position:absolute;
  color:green;
  top:50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.betResult{
  font-size:0.9vw;
  width:25%;
  height:35%;
  background-color:rgba(0,0,0,0.9);
  position:absolute;
  color: white;
  top:50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.scroll {
  overflow-y: auto;
}
.playTable{
  background-image: url("/icon/table_n.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 50%;
  position: relative;
}
.playArea-tile{
  border:1px solid rgba(255,255,255, 0.3);
  color:#3470A9;
  font-size:1.2vw ;
}
.playArea-tile:hover {
  background-color: #0E541B;
}
.playArea-tile1:hover {
  background-color: #0E541B;
}
.playArea-tile1{
  border:1px solid rgba(255,255,255, 0.3);
  color:#3470A9;
  font-size:0.7vw ;
}
.player{
  color:#3470A9
}
.banker{
  color:red
}
.tie-text{
  color:#0C930A;
}
.tie{
  height:100%;
  width:100%;
  margin:0;
  color:#0C930A;
}
.tie1{
  border-bottom: 1px solid  rgba(255,255,255, 0.3);
}
.playArea{
  background-color:rgb(3, 62, 29);
  /* width:100%;
  height:100%; */
  /* cursor: url('/21.png') 2 2,auto; */
  position: relative;
}
.selectCoin{
  width: 100%;
  background-color:black
}
.table-info{
  font-size: 0.8vw;
}
.room-list{
  font-size: 0.8vw;
}
.room-title{
  width:20%;
  height:5vh;
  position:absolute;
  top:0;
  left:0;
  background-color:rgba(0,0,0,0.5);
  font-size: 1vw;
}
.gameCountDown{
  position:absolute;
  top:10%;
  left:5%;
}
.tabActive{
  background-image:
  linear-gradient(
  rgb(255, 255, 255) 63%,
  #B98F38
  );
}
.Custombutton {
  border: none;
  color: white;
  padding: 9px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 0.8vw;
  margin: 0px 8.5px;
  cursor: pointer;
  background-image:url('/icon/tselectui_1.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  letter-spacing:20px;
}
.Custombutton:focus {
  outline: 1px solid #F7D8A8;
  outline-offset: -4px;
}
</style>
