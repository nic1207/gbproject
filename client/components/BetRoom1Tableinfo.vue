<template>
  <v-tabs
    background-color="rgba(0, 0, 0, 1)"
    class="elevation-2"
    dark
    centered
    grow
    height="4vh"
    hide-slider
    active-class="tabActive black--text"
  >
    <v-tab
      :href="`#tab-1`"
      style="color:#BC8F31;"
    >
      <span style="font-size:0.8vw"> {{ $t('TABLE.TABLEINFO') }}</span>
    </v-tab>
    <v-tab
      :href="`#tab-2`"
      style="color:#BC8F31;"
    >
      <span style="font-size:0.8vw" @onclick="doPlay"> {{ $t('TABLE.VIDEO') }}</span>
    </v-tab>
    <v-tab
      :href="`#tab-3`"
      style="color:#BC8F31;"
    >
      <span style="font-size:0.8vw"> {{ $t('TABLE.CARDS') }}</span>
    </v-tab>

    <v-tab-item
      :value="'tab-' + 1"
    >
      <v-card
        flat
        tile
        height="32vh"
        dark
        color="#2E2E2E"
      >
        <v-row style="height:80%;width:100%; margin:0;" class="table-info">
          <v-col style="width:50%;height:100%; padding:0;border-right:1px solid white ">
            <v-row style="margin:0;padding:0" dense>
              <v-col cols="6" class="banker">
                {{ $t('TABLE.BANKER') }} 65%
              </v-col>
              <v-col cols="6">
                2242532/1213
              </v-col>
              <v-progress-linear
                v-model="progress"
                height="1"
                color="red"
              />
            </v-row>

            <v-row style="margin:0;padding:0" dense>
              <v-col cols="6" class="player">
                {{ $t('TABLE.PLAYER') }} 41%
              </v-col>
              <v-col cols="6">
                2242532/1213
              </v-col>
              <v-progress-linear
                v-model="progress"
                height="1"
                color="blue"
              />
            </v-row>

            <v-row style="margin:0;padding:0" dense>
              <v-col cols="6" class="tie-text">
                {{ $t('TABLE.TIE') }} 1%
              </v-col>
              <v-col cols="6">
                2242532/1213
              </v-col>
              <v-progress-linear
                v-model="progress"
                height="1"
                color="green"
              />
            </v-row>
            <v-row style="margin:0;padding:0" dense>
              <v-col cols="6" class="banker">
                {{ $t('TABLE.BANKERPAIR') }}
              </v-col>
              <v-col cols="6">
                2242532/1213
              </v-col>
            </v-row>
            <v-row style="margin:0;padding:0" dense>
              <v-col cols="6" class="player">
                {{ $t('TABLE.PLAYERPAIR') }}
              </v-col>
              <v-col cols="6">
                2242532/1213
              </v-col>
            </v-row>
            <v-row style="margin:0;padding:0" dense>
              <v-col cols="6" class="banker">
                {{ $t('TABLE.BANKERNATURAL') }}
              </v-col>
              <v-col cols="6">
                2242532/1213
              </v-col>
            </v-row>
            <v-row style="margin:0;padding:0" dense>
              <v-col cols="6" class="player">
                {{ $t('TABLE.PLAYERNATURAL') }}
              </v-col>
              <v-col cols="6">
                2242532/1213
              </v-col>
            </v-row>
          </v-col>
          <v-col v-if="NowTable" style="width:50%;height:100%; margin:0;padding:0;color:#E7CAA0">
            <v-row style="margin:0;padding:0" dense>
              <v-col cols="4">
                {{ $t('TABLE.TABLE') }}
              </v-col>
              <v-col v-if="NowTable" cols="8">
                {{ NowTable.info.TableName }}
              </v-col>
            </v-row>
            <v-row style="margin:0;padding:0" dense>
              <v-col cols="4">
                {{ $t('TABLE.DEALER') }}
              </v-col>
              <v-col cols="8">
                {{ NowTable.DealerName }}
              </v-col>
            </v-row>
            <v-row style="margin:0;padding:0" dense>
              <v-col cols="4">
                {{ $t('TABLE.ROUND') }}
              </v-col>
              <v-col cols="8">
                {{ NowTable.RoundName }}
              </v-col>
            </v-row>
            <v-row style="margin:0;padding:0" dense>
              <v-col cols="4">
                {{ $t('TABLE.ID') }}
              </v-col>
              <v-col cols="8">
                {{ NowTable.RoundID }}
              </v-col>
            </v-row>
            <v-row style="margin:0;padding:0" dense>
              <v-col cols="4">
                {{ $t('TABLE.TABLELIMIT') }}
              </v-col>
              <v-col cols="8">
                {{ BetSet && (BetSet.TBU/10000) }}
              </v-col>
            </v-row>
            <v-row style="margin:0;padding:0" dense>
              <v-col cols="4">
                {{ $t('TABLE.MAXLIMIT') }}
              </v-col>
              <v-col cols="8">
                {{ BetSet && (BetSet.PBUL/10000) }}
              </v-col>
            </v-row>
            <v-row style="margin:0;padding:0" dense>
              <v-col cols="4">
                {{ $t('TABLE.MINLIMIT') }}
              </v-col>
              <v-col cols="8">
                {{ BetSet && (BetSet.PBLL/10000) }}
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <v-row style="height:20%;width:100%; margin:0;padding:0;background-color:black;" class="table-info">
          <v-col cols="2" class="text-center">
            <span style="color:#E7CAA0">{{ $t('TABLE.BANKER') }}</span><br>
            <span>{{ changenumbers && (changenumbers[0]/10000) }}</span>
          </v-col>
          <v-col cols="2" class="text-center">
            <span style="color:#E7CAA0">{{ $t('TABLE.PLAYER') }}</span><br>
            <span>{{ changenumbers && (changenumbers[1]/10000) }}</span>
          </v-col>
          <v-col cols="2" class="text-center">
            <span style="color:#E7CAA0">{{ $t('TABLE.TIE') }}</span><br>
            <span>{{ changenumbers && (changenumbers[2]/10000) }}</span>
          </v-col>
          <v-col cols="2" class="text-center">
            <span style="color:#E7CAA0">{{ $t('TABLE.PAIR') }}</span><br>
            <span>{{ changenumbers && (changenumbers[3]/10000) }}</span>
          </v-col>
          <v-col cols="2" class="text-center">
            <span style="color:#E7CAA0">{{ $t('TABLE.NATURAL') }}</span><br>
            <span>{{ changenumbers && (changenumbers[4]/10000) }}</span>
          </v-col>
          <v-col cols="2" class="text-center d-flex align-center justify-center">
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
                  small
                  v-bind="attrs"
                  color="white"
                  elevation="24"
                  v-on="on"
                >
                  <span style="color:black;font-size:0.7vw;">{{ $t('TABLE.CHANGE') }}</span>
                </v-btn>
              </template>

              <v-card color="rgba(0, 0, 0, 0.7)">
                <v-list
                  dark
                  color="rgba(0, 0, 0, 0.5)"
                >
                  <v-radio-group v-model="betLimit" :mandatory="false">
                    <v-radio
                      v-for="(item, index) in BetSettings"
                      :key="index+1"
                      :label="(item.PBLL/10000)+` - `+(item.PBUL/10000)"
                      :value="item.GroupID"
                      on-icon="done"
                      color="#B48A33"
                      off-icon=""
                      @change="doChangeGroupID(item.GroupID)"
                    />
                  </v-radio-group>
                </v-list>
              </v-card>
            </v-menu>
          </v-col>
        </v-row>
        <!--
        <v-row style="height:5%;width:100%; margin:0; background-color:#876F4D" justify="center" @click="exten=!exten">
          <div style="width:100%;height:100%" class="d-flex justify-center algin-center">
            <v-icon v-show="exten" dense x-small>
              keyboard_arrow_up
            </v-icon>
            <v-icon v-show="!exten" dense x-small>
              keyboard_arrow_down
            </v-icon>
          </div>
        </v-row>
        -->
      </v-card>
      <!--
      <v-banner v-model="exten" dark color="black" single-line transition="slide-y-transition">
        <span class="table-info">{{ changenumbers[0] }}</span>
      </v-banner>
      -->
    </v-tab-item>
    <v-tab-item
      :value="'tab-' + 2"
    >
      <v-card
        flat
        tile
        height="32vh"
      >
        <div v-show="vReady" style="width:100% ;height: 100%">
          <video-player
            ref="vPlayer2"
            class="video-player-box"
            style="width: 100%;height: 70%"
            :options="playerOptions"
            :playsinline="true"
            @play="onPlayerPlay($event)"
            @loadeddata="onPlayerLoadeddata($event)"
            @canplay="onPlayerCanplay($event)"
            @ready="playerReadied"
          />
        </div>
      </v-card>
    </v-tab-item>
    <v-tab-item
      :value="'tab-' + 3"
    >
      <v-card
        flat
        tile
        height="32vh"
      >
        <div class="result-cards">
          <v-img
            src="/card/c2.png"
            height="14vh"
            contain
            style="position:absolute;left:15%;top:1%; transform: rotate(-90deg);"
          />
          <v-img
            src="/card/c2.png"
            height="14vh"
            contain
            style=" position:absolute;left:5%;bottom:18%"
          />
          <v-img
            src="/card/c2.png"
            height="14vh"
            contain
            style=" position:absolute;left:27%;bottom:18%"
          />
          <div
            class=" d-flex justify-center align-center"
            style="width:42%; height:10%; position:absolute; top:85%; left:5%; background-color:blue"
          >
            <span>P 6</span>
          </div>
          <v-img
            src="/card/c2.png"
            contain
            height="14vh"
            style="position:absolute;right:18%;top:2%; transform: rotate(-90deg);"
          />
          <v-img
            src="/card/c2.png"
            contain
            height="14vh"
            style=" position:absolute;right:5%;bottom:18%"
          />
          <v-img
            src="/card/c2.png"
            contain
            height="14vh"
            style="position:absolute;right:27%;bottom:18%"
          />
          <div
            class=" d-flex justify-center align-center"
            style="width:42%; height:10%; position:absolute; top:85%; right:5%; background-color:red"
          >
            <span>B 5</span>
          </div>
        </div>
      </v-card>
    </v-tab-item>
  </v-tabs>
</template>
<script>
import 'video.js/dist/video-js.css'
import { videoPlayer } from 'vue-video-player'

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
        controls: false, // 是否擁有控制條
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
      videoready: false,
      betLimit: '1',
      // changenumbers: {
      //  '10-1000': { bet_limit: '1,000', banker: '1,000', player: '1,000', tie: '125', pair: '90' },
      //  '50-5000': { bet_limit: '5000', banker: '5,000', player: '5,000', tie: '625', pair: '454' },
      //  '100-5000': { bet_limit: '600', banker: '5,000', player: '5,000', tie: '625', pair: '454' },
      //  '100-10k': { bet_limit: '100', banker: '10,000', player: '10,000', tie: '1250', pair: '909' },
      //  '200-20k': { bet_limit: '200', banker: '20,000', player: '20,000', tie: '2500', pair: '1818' }
      // },
      progress: 50,
      exten: false
    }
  },
  computed: {
    player () {
      return this.$refs.vPlayer2.player
    },
    vReady () {
      return this.videoready
    },
    NowTable () {
      // console.log('nowtableid', nowtableid)
      const snowtable = this.$store.state.nowtable
      if (snowtable) {
        const nowtable = Object.assign({}, this.$store.state.nowtable)
        const gameid = nowtable.GameID
        const tableid = nowtable.TableID
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
        nowtable.info = ti
        // console.log('nowtable=', nowtable)
        return nowtable
      } else {
        return null
      }
    },
    Groups () {
      const groups = this.$store.state.groups
      console.log('groups=', groups)
      return groups
    },
    NowGroupID () {
      return this.$store.state.NowGroupID
    },
    BetSettings () {
      if (this.$store.state.betsetting && this.$store.state.betsetting.BetSettings) {
        const bsets = this.$store.state.betsetting.BetSettings
        console.log('bsets=', bsets)
        return bsets
      } else {
        return []
      }
    },
    BetSet () {
      console.log('this.$store.state=', this.$store.state)
      if (this.$store.state.betsetting && this.$store.state.betsetting.BetSettings) {
        const bsets = this.$store.state.betsetting.BetSettings
        console.log('bsets=', bsets)
        const nowgroupid = this.$store.state.nowgroupid
        console.log('nowgroupid=', nowgroupid)
        const bset = bsets.find(x => x.GroupID === nowgroupid)
        console.log('bset.Setting=', bset.Setting)
        return bset.Setting
      } else {
        return null
      }
    },
    changenumbers () {
      if (this.BetSet && this.BetSet.BABULS) {
        return this.BetSet.BABULS
      } else {
        return []
      }
    }
  },
  mounted () {
    /*
    setTimeout(() => {
      // console.log('xxxxx this.$refs=', this.$refs)
      // console.log('yyyyyy this.player=', this.player)
      if (this.player === undefined) {
        // console.log('xxxxx this.$refs=', this.$refs)
        // await this.$refs.avatorplayer != null
        // console.log('[debug] zzzzzzzzzzzzzzzzzzz')
        const player = Videojs(this.$refs.avplayer2, {
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
    }, 5000)
    */
  },
  methods: {
    doPlay () {
      console.log('doPlay()')
    },
    doChangeGroupID (gid) {
      console.log('doChangeGroupID(', gid, ')')
      if (gid) {
        this.$store.commit('setNowGroupID', gid)
      }
    },
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
    }
  }
}
</script>
<style scoped>
  .tabActive{
      background-image:
      linear-gradient(
          rgb(255, 255, 255) 63%,
          #B98F38
        );
    }
    .table-info{
      font-size: 0.7vw;
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
    .result-cards{
        background-color:rgba(0, 0, 0,0.8);
         position: relative;;
        width:100%;
        height:100%
    }
     .playArea{
        background-color:rgb(3, 62, 29);
        width:100%;
        height:100%;
        cursor: url('/21.png') 2 2,auto
    }
</style>
