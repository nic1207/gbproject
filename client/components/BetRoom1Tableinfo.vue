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
    <!--<v-tab
      :href="`#tab-2`"
      style="color:#BC8F31;"
    >
      <span style="font-size:0.8vw" @onclick="doPlay"> {{ $t('TABLE.VIDEO') }}</span>
    </v-tab>
    -->
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
                      v-for="(gp, index) in Groups"
                      :key="index+1"
                      :label="(gp.BetSettings[NowGroupID].PBLL/10000)+` - `+(gp.BetSettings[NowGroupID].PBUL/10000)"
                      :value="gp.GroupID"
                      on-icon="done"
                      color="#B48A33"
                      off-icon=""
                      @change="doChangeGroupID(gp.GroupID)"
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
    <!--
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
    -->
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
            v-if="cards.length>0"
            :src="'/card/'+cardImages[cards[0]]+'.png'"
            height="14vh"
            contain
            style="position:absolute;left:15%;top:1%; transform: rotate(-90deg);"
          />
          <v-img
            v-if="cards.length>2"
            :src="'/card/'+cardImages[cards[2]]+'.png'"
            height="14vh"
            contain
            style=" position:absolute;left:5%;bottom:18%"
          />
          <v-img
            v-if="cards.length>4"
            :src="'/card/'+cardImages[cards[4]]+'.png'"
            height="14vh"
            contain
            style=" position:absolute;left:27%;bottom:18%"
          />
          <div
            v-if="pp"
            class=" d-flex justify-center align-center"
            style="width:42%; height:10%; position:absolute; top:85%; left:5%; background-color:blue"
          >
            <span>Player {{ pp }}</span>
          </div>
          <v-img
            v-if="cards.length>1"
            :src="'/card/'+cardImages[cards[1]]+'.png'"
            contain
            height="14vh"
            style="position:absolute;right:18%;top:2%; transform: rotate(-90deg);"
          />
          <v-img
            v-if="cards.length>5"
            :src="'/card/'+cardImages[cards[5]]+'.png'"
            contain
            height="14vh"
            style=" position:absolute;right:5%;bottom:18%"
          />
          <v-img
            v-if="cards.length>3"
            :src="'/card/'+cardImages[cards[3]]+'.png'"
            contain
            height="14vh"
            style="position:absolute;right:27%;bottom:18%"
          />
          <div
            v-if="bp"
            class=" d-flex justify-center align-center"
            style="width:42%; height:10%; position:absolute; top:85%; right:5%; background-color:red"
          >
            <span>Bank {{ bp }}</span>
          </div>
        </div>
      </v-card>
    </v-tab-item>
  </v-tabs>
</template>
<script>

export default {
  components: {
  },
  data () {
    return {
      videoready: false,
      betLimit: '1',
      progress: 50,
      exten: false,
      cardImages: [
        'unknown',
        's1', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9', 's10', 's11', 's12', 's13',
        'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'h8', 'h9', 'h10', 'h11', 'h12', 'h13',
        'c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'c10', 'c11', 'c12', 'c13',
        'd1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8', 'd9', 'd10', 'd11', 'd12', 'd13'
      ]
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
        // console.log('ti=', ti)
        nowtable.info = ti
        // console.log('nowtable=', nowtable)
        return nowtable
      } else {
        return null
      }
    },
    cards () {
      // console.log('State()')
      const nowtable = this.$store.state.nowtable
      // console.log('State()!!nowtable=', nowtable)
      if (nowtable && nowtable.Desktop && nowtable.Desktop.ShowCards) {
        const st = nowtable.State
        // console.log('!!!!! nowtable.st=', st)
        if (st >= 41) { // 開牌階段才有
          console.log('nowtable=', nowtable)
          const cards = nowtable.Desktop.ShowCards
          console.log('!!!!! cards=', cards)
          return cards
        } else {
          return []
        }
      } else {
        return []
      }
    },
    pp () {
      const nowtable = this.$store.state.nowtable
      // console.log('State()!!nowtable=', nowtable)
      if (nowtable && nowtable.Desktop) {
        const st = nowtable.State
        if (st >= 41) { // 結算階段才有
          return nowtable.Desktop.PlayerPoint
        } else {
          return null
        }
      } else {
        return null
      }
    },
    bp () {
      const nowtable = this.$store.state.nowtable
      // console.log('State()!!nowtable=', nowtable)
      if (nowtable && nowtable.Desktop) {
        const st = nowtable.State
        if (st >= 41) { // 結算階段才有
          return nowtable.Desktop.BankPoint
        } else {
          return null
        }
      } else {
        return null
      }
    },
    Groups () {
      if (this.$store.state.groups) {
        // console.log('this.$store.state.groups=', this.$store.state.groups)
        return this.$store.state.groups.Groups
      } else {
        return []
      }
    },
    NowGroupID () {
      if (this.$store.state.NowGroupID) {
        return this.$store.state.NowGroupID
      } else {
        return 0
      }
    },
    BetSettings () {
      if (this.$store.state.betsetting && this.$store.state.betsetting.BetSettings) {
        const bsets = this.$store.state.betsetting.BetSettings
        // console.log('bsets=', bsets)
        return bsets
      } else {
        return []
      }
    },
    BetSet () {
      // console.log('this.$store.state=', this.$store.state)
      if (this.$store.state.betsetting && this.$store.state.betsetting.BetSettings) {
        const bsets = this.$store.state.betsetting.BetSettings
        // console.log('bsets=', bsets)
        const nowgroupid = this.$store.state.nowgroupid
        // console.log('nowgroupid=', nowgroupid)
        const bset = bsets.find(x => x.GroupID === nowgroupid)
        // console.log('bset.Setting=', bset.Setting)
        return bset.Setting
      } else {
        return null
      }
    },
    changenumbers () {
      // console.log('this.BetSet=', this.BetSet)
      if (this.BetSet && this.BetSet.BABULS) {
        return this.BetSet.BABULS
      } else {
        return []
      }
    }
  },
  mounted () {
  },
  methods: {
    doChangeGroupID (gid) {
      // console.log('doChangeGroupID(', gid, ')')
      if (gid) {
        this.$store.commit('setNowGroupID', gid)
      }
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
