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
          <div v-if="NowGameInfo" class="room-title d-flex justify-center align-center white--text">
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
          <div v-if="GameResult" :style="'background-color: '+GameResultColor" class="d-flex justify-center align-center GameResultAnnounce">
            {{ GameResult }}
          </div>
        </div>
        <!--beting play section-->
        <v-tabs
          v-if="NowGameInfo"
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
              <div v-show="ShowAnnounce" style="position:absolute;height:100%;width:100%; margin:0;background-color: rgba(0,0,0,0.5)">
                <div v-show="ShowAnnounce" class="d-flex justify-center align-center AnnounceMessage">
                  {{ ShowAnnounce }}
                </div>
              </div>
              <div v-if="BetSuccess" class="d-flex flex-column justify-center align-center bettingSuccess">
                {{ $t('TABLE.BETSUCCESS') }}<br>
                <v-icon color="green" size="60">
                  done
                </v-icon>
              </div>
              <div v-if="BetFail" class="d-flex flex-column justify-center align-center bettingSuccess">
                {{ $t('TABLE.BETFAIL') }}<br>
                <v-icon color="red" size="60">
                  mdi-close
                </v-icon>
              </div>
              <div v-if="ConfirmDialog" class="d-flex flex-column justify-center align-center bettingSuccess">
                <v-card color="rgba(0, 0, 0, 0.7)" elevation="20">
                  <!--<v-card-title>
                    <v-row no-gutters justify="center">
                      Are You Sure Bet Coin?
                    </v-row>
                  </v-card-title>
                  -->
                  <v-row no-gutters align="center" justify="center">
                    <div
                      v-if="betCoin"
                      class="text-center "
                      justify="center"
                    >
                      <v-img
                        :src="'/coin/'+betCoin"
                        :title="get_coin_value_m(betCoin)"
                        max-width="52"
                        max-height="36"
                      />
                    </div>
                  </v-row>
                  <v-card-actions>
                    <v-row justify="center">
                      <v-img
                        src="/icon/selectUI.png"
                        class="ma-2"
                        max-width="2.5vw"
                        max-height="2.5vw"
                        @click="cancelCoinBet"
                      />

                      <!-- </v-btn> -->
                      <v-img
                        src="/icon/cancelUI.png"
                        class="ma-2"
                        max-width="2.5vw"
                        max-height="2.5vw"
                        @click="confirmCoinBet"
                      />
                    </v-row>
                  </v-card-actions>
                </v-card>
              </div>
              <v-row style="height:55%;width:100%; margin:0">
                <v-col tile cols="4" class="playArea-tile" align="center" @click="openConfirmDialog('P')">
                  <h1>{{ $t('TABLE.PLAYER') }}</h1>
                  <h2>1:1</h2>
                </v-col>
                <v-col tile class="tie playArea-tile" align="center" @click="openConfirmDialog('T')">
                  <h1>{{ $t('TABLE.TIE') }}</h1>
                  <h2>8:1</h2>
                </v-col>
                <v-col tile cols="4" class="playArea-tile banker" align="center" @click="openConfirmDialog('B')">
                  <h1> {{ $t('TABLE.BANKER') }} </h1>
                  <h2>0.95:1</h2>
                </v-col>
              </v-row>
              <v-row style="height:45%;width:100%; margin:0">
                <v-col tile cols="3" class="playArea-tile1" align="center" @click="openConfirmDialog('PP')">
                  <h1>{{ $t('TABLE.PLAYERPAIR') }}</h1>
                  <h2>11:1</h2>
                </v-col>
                <v-col tile cols="3" class="playArea-tile1" align="center" @click="openConfirmDialog('PN')">
                  <h1>{{ $t('TABLE.PLAYERNATURAL') }}</h1>
                  <h2>7:2</h2>
                </v-col>
                <v-col tile cols="3" class="playArea-tile1 banker" align="center" @click="openConfirmDialog('BN')">
                  <h1>{{ $t('TABLE.BANKERNATURAL') }}</h1>
                  <h2>7:2</h2>
                </v-col>
                <v-col tile cols="3" class="playArea-tile1 banker" align="center" @click="openConfirmDialog('BP')">
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
              <div v-show="true" style="position:absolute;height:100%;width:100%; margin:0;background-color: rgba(0,0,0,0.5)">
                <div v-show="true" class="d-flex justify-center align-center AnnounceMessage">
                  {{ $t('TABLE.COMINGSOON') }}
                </div>
              </div>
              <v-row style="height:55%;width:100%; margin:0">
                <v-col tile cols="4" class="playArea-tile" align="center" @click="openConfirmDialog('P')">
                  <h1>{{ $t('TABLE.PLAYER') }}</h1>
                  <h2>1:1</h2>
                </v-col>
                <v-col tile cols="4" class="tie playArea-tile" align="center" @click="openConfirmDialog('T')">
                  <h1>{{ $t('TABLE.TIE') }}</h1>
                  <h2>8:1</h2>
                </v-col>
                <v-col tile cols="4" class="playArea-tile banker" align="center" @click="openConfirmDialog('B')">
                  <h1>{{ $t('TABLE.BANKER') }}</h1>
                  <h2>1:1</h2>
                </v-col>
              </v-row>
              <v-row style="height:45%;width:100%; margin:0">
                <v-col tile cols="3" class="playArea-tile1" align="center" @click="openConfirmDialog('PN')">
                  <h1>{{ $t('TABLE.PLAYERNATURAL') }}</h1>
                  <h2>11:1</h2>
                </v-col>
                <v-col tile cols="3" class="playArea-tile1" align="center" @click="openConfirmDialog('PP')">
                  <h1>{{ $t('TABLE.PLAYERPAIR') }}</h1>
                  <h2>7:2</h2>
                </v-col>
                <v-col tile cols="3" class="playArea-tile1 banker" align="center" @click="openConfirmDialog('BN')">
                  <h1>{{ $t('TABLE.BANKERNATURAL') }}</h1>
                  <h2>7:2</h2>
                </v-col>
                <v-col tile cols="3" class="playArea-tile1 banker" align="center" @click="openConfirmDialog('BP')">
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
              <div v-show="true" style="position:absolute;height:100%;width:100%; margin:0;background-color: rgba(0,0,0,0.5)">
                <div v-show="true" class="d-flex justify-center align-center AnnounceMessage">
                  {{ $t('TABLE.COMINGSOON') }}
                </div>
              </div>
              <v-row style="height:100%;width:100%; margin:0">
                <v-col tile cols="4" class="playArea-tile" align="center" @click="openConfirmDialog('P')">
                  <h1>{{ $t('TABLE.PLAYER') }}</h1>
                  <h2>1:1</h2>
                </v-col>
                <v-col tile cols="4" class="tie playArea-tile" align="center" @click="openConfirmDialog('T')">
                  <h1>{{ $t('TABLE.TIE') }}</h1>
                  <h2>8:1</h2>
                </v-col>
                <v-col tile cols="4" class="playArea-tile banker" align="center" @click="openConfirmDialog('B')">
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
                style="width:44px;
                  height:44px;
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
                  {{ $t('TABLE.PSELECT') }}
                </v-row>
              </v-card-title>
              <v-row no-gutters align="center" justify="center">
                <div
                  v-for="(coin,n) in coinList"
                  :key="n"
                  class="text-center "
                  justify="center"
                >
                  <v-img
                    :src="'/coin/'+coin"
                    :title="get_coin_value_m(coin)"
                    max-width="52"
                    max-height="36"
                  />
                  <v-checkbox
                    v-model="selectedCoin"
                    background-color="black"
                    :label="`${get_coin_value_m(coin).toString()}`"
                    :value="coin"
                    color="#009167"
                    :disabled="disableCoinSelect?selectedCoin.includes(coin)?false:true:false"
                  />
                </div>
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
            max-width="60px"
            max-height="46px"
            class="white--text align-center"
            @click="betCoin=coin"
          >
            <v-card>
              <!-- max-width="3.7vw" max-height="2.6vw"-->
              <v-img
                :aspect-ratio="16/9"
                max-width="54px"
                max-height="36px"
                class="white--text text-center align-center"
                :src="'/coin/'+coin"
                :title="get_coin_value_m(coin)"
              >
                <v-card-title>
                  <div style="font-size: 6px" v-text="get_coin_value_m(coin)" />
                </v-card-title>
              </v-img>
            </v-card>
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
      page: { left: 170, top: 0 },
      showCoin: false,
      subgameid: 1, // default 1
      videoready: false,
      tutorial: false,
      drawer: false,
      betsuccess: false,
      betfail: false,
      coinMenu: false,
      selectedType: undefined,
      confirmDialog: false,
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
      WinTextColor: {
        0: 'rgba(0, 0, 0, 0.7)',
        1: 'rgba(0, 0, 224, 0.7)',
        2: 'rgba(0, 224, 0, 0.7)',
        3: 'rgba(224, 0, 0, 0.7)'
      },
      StateText: {
        11: this.$t('GAMESTATE.READY'), // 準備
        21: this.$t('GAMESTATE.SUFFLE'), // 洗牌
        31: this.$t('GAMESTATE.BET'), // 押注
        41: this.$t('GAMESTATE.DRAW_CARDS'), // 開牌
        51: this.$t('GAMESTATE.SETTLE') // 結算
      },
      AnnounceText: {
        31: this.$t('TABLE.STARTBETTING'), // 開始投注
        41: this.$t('TABLE.STOPBETTING'), // 停止投注
        betsuccess: this.$t('TABLE.BETSUCCESS'), // 下注成功
        betfail: this.$t('TABLE.BETFAIL'), // 下注失敗
        pwin: this.$t('GAMEWIN.PWIN'),
        bwin: this.$t('GAMEWIN.BWIN'),
        twin: this.$t('GAMEWIN.TWIN')
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
    HideAnn () {
      return this.hideann
    },
    ConfirmDialog () {
      return this.confirmDialog
    },
    GameResultColor () {
      const nowtable = this.$store.state.nowtable
      if (nowtable) {
        const st = nowtable.State
        if (st === 51) { // 結算
          const win = nowtable.Desktop.Winlose
          console.log('zzzzz win=', win)
          return this.WinTextColor[win]
        } else {
          return this.WinTextColor[0]
        }
      } else {
        return this.WinTextColor[0]
      }
    },
    GameResult () {
      const nowtable = this.$store.state.nowtable
      // console.log('StateString()!!nowtable.State=', nowtable.State)
      if (nowtable) {
        const st = nowtable.State
        if (st === 51) { // 開始下注
          const win = nowtable.Desktop.Winlose
          console.log('wwwwwwwwwwwwwwwwwwin=', win)
          return this.WinText[win]
        } else {
          return false
        }
      } else {
        return false
      }
    },
    ShowAnnounce () {
      const nowtable = this.$store.state.nowtable
      // console.log('StateString()!!nowtable.State=', nowtable.State)
      if (nowtable) {
        const st = nowtable.State
        // console.log('!!!!! st=', st)
        if (st === 31) { // 開始下注
          const cd = Math.ceil(nowtable.Desktop.BetTimeCountDown / 1000)
          if (cd > 9) {
            const aa = this.AnnounceText[st]
            return aa
          } else {
            // const aa = this.AnnounceText[st]
            console.log('!!!! cd=', cd)
            return ''
          }
        } else { // 結算
          const aa = this.AnnounceText[41]
          console.log('aa=', aa)
          return aa
        }
      } else {
        const aa = this.AnnounceText[41]
        console.log('aa=', aa)
        return aa
      }
    },
    BetSuccess () {
      return this.betsuccess
    },
    BetFail () {
      console.log('this.betfail=', this.betfail)
      return this.betfail
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
    State () {
      // console.log('State()')
      const nowtable = this.$store.state.nowtable
      // console.log('State()!!nowtable=', nowtable)
      if (nowtable && nowtable.State) {
        const st = nowtable.State
        console.log('!!!!! nowtable.st=', st)
        if (st === 51) {
          console.log('nowtable=', nowtable)
        }
        return st
      } else {
        return -1
      }
    },
    StateString () {
      // console.log('111 StateString()')
      // console.trace()
      const nowtable = this.$store.state.nowtable
      // console.log('StateString()!!nowtable.State=', nowtable.State)
      if (nowtable) {
        const st = nowtable.State
        // console.log('!!!!! st=', st)
        if (st === 31) {
          // const cd = Math.ceil(this.nowtable.Desktop.BetTimeCountDown / 1000)
          // console.log('!!!! BetTimeCountDown=', cd)
          return this.StateText[st]
        } else if (st === 51) { // 結算
          const win = nowtable.Desktop.Winlose
          return this.WinText[win]
        } else {
          return this.StateText[st]
        }
      } else {
        return ''
      }
    },
    cd () {
      // console.log('cd()')
      const nowtable = this.$store.state.nowtable
      // console.log('cd()!!nowtable=', nowtable)
      if (nowtable) {
        const st = nowtable.State
        if (st === 31) {
          const cd = Math.ceil(nowtable.Desktop.BetTimeCountDown / 1000)
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
      // console.log('NowGameInfo()')
      const nowtable = this.$store.state.nowtable
      // console.log('NowGameInfo()!!nowtable=', nowtable)
      if (nowtable) {
        // console.log('!!nowtable=', nowtable)
        const gameid = nowtable.GameID
        const lobby = this.$store.state.lobby
        // console.log('lobby=', lobby)
        const games = lobby.Games
        // console.log('games=', games)
        const gameinfo = games.find(e => e.GameID === gameid)
        // console.log('gameinfo=', gameinfo)
        return gameinfo
      } else {
        return null
      }
    },
    NowGameID () {
      // const nowtableid = this.$store.state.nowtableid
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
      const nowtable = this.$store.state.nowtable
      if (nowtable) {
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
      } else {
        return null
      }
    }
  },
  // components:{
  //       previewTable,
  //       tableDrawer
  //   },
  mounted () {
    // console.log('zzzzzzzzzzzzz')
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
      // console.log('the player is readied', player)
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
    openConfirmDialog (type) {
      this.selectedType = type
      this.confirmDialog = true
    },
    cancelCoinBet () {
      this.confirmDialog = false
    },
    confirmCoinBet () {
      this.doBet()
      this.confirmDialog = false
    },
    do_tutorial () {
      console.log('do_tutorial()')
      this.tutorial = false
      this.$cookies.set('t_betroom', 1)
    },
    get_coin_value (c) {
      let betpoint = 0
      switch (c) {
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
      return betpoint
    },
    get_coin_value_m (c) {
      // console.log('get_coin_value_m(c=', c, ')')
      let betpoint = 0
      switch (c) {
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
      if (betpoint >= 10000000) {
        return (betpoint / 10000000) + 'K'
      } else {
        return (betpoint / 10000)
      }
    },
    async doBet () {
      const btype = this.selectedType
      console.log('要求壓注 doBet(type=', btype)
      const betpoint = this.get_coin_value(this.betCoin)
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
        // const nowtableid = this.$store.state.nowtableid
        const nowtable = this.$store.state.nowtable
        // console.log('xzzzz nowtable.RoundID=', nowtable.RoundID)
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
        // this.$router.push('/betRoom')
        const AccessCode = cmder.B.AccessCode
        console.log('[debug] bet success!! AccessCode=', AccessCode)
        this.betsuccess = true
        setTimeout(() => {
          this.betsuccess = false
        }, 1000)
        // if (AccessCode) {
        //  this.$store.commit('setPGToken', token)
        // }
      } else {
        console.log('[debug] bet fail!', cmder)
        this.betfail = true
        setTimeout(() => {
          this.betfail = false
        }, 1000)
        // this.$router.push('/betRoom')
      }
    }
  }
}
</script>
<style scoped>
.GameResultAnnounce{
  font-size: xx-large;
  font-weight: bold;
  width:50%;
  height:40%;
  border-style: solid;
  border-color: white;
  border-width: 1px;
  position:absolute;
  color:white;
  top:50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.AnnounceMessage{
  font-size: xx-large;
  font-weight: bold;
  width:40%;
  height:70%;
  background-color:rgba(0,0,0,0.6);
  border-style: solid;
  border-color: white;
  border-width: 1px;
  position:absolute;
  color:white;
  top:50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.bettingSuccess{
  font-size: large;
  width:30%;
  height:70%;
  background-color:rgba(0,0,0,0.8);
  position:absolute;
  color: white;
  top:50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.bettingFail{
  font-size: large;
  width:30%;
  height:70%;
  background-color:rgba(0,0,0,0.8);
  position:absolute;
  color: white;
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
