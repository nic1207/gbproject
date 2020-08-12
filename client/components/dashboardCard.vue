<template>
  <v-flex xs12>
    <v-card class="ma-2">
      <v-row v-if="tableinfo" no-gutters class="dashboard-bar">
        <v-flex>
          <span class="white--text textSize">Seria {{ tableinfo.seri }}  </span>
        </v-flex>
        <v-flex>
          <div class="white--text textSize">
            <v-icon class="white--text ">
              group
            </v-icon>  {{ tableinfo.user }}
          </div>
        </v-flex>
        <v-flex>
          <v-avatar color="red" size="25">
            <span class="white--text textSize">B</span>
          </v-avatar>
          <span class="white--text textSize">{{ tableinfo.bb }}</span>
        </v-flex>
        <v-flex>
          <v-avatar color="blue" size="25">
            <span class="white--text textSize">P</span>
          </v-avatar>
          <span class="white--text textSize">{{ tableinfo.pp }}</span>
        </v-flex>
        <v-flex>
          <div class="white--text textSize">
            <v-avatar color="red" size="25">
              <span class="white--text textSize">T</span>
            </v-avatar>
            {{ tableinfo.tt }}
          </div>
        </v-flex>
        <v-flex>
          <div class="white--text textSize text-center" style="background:#196260; height:30px;">
            <span>{{ tableinfo.status }}</span>
          </div>
        </v-flex>
      </v-row>
      <v-row v-if="tableinfo" no-gutters dense>
        <div style="width:90px;height:120px">
          <v-img
            width="90px"
            height="120px"
            :src="tableinfo.avator"
          />
          <div>{{ tableinfo.name }}</div>
        </div>
        <v-hover v-slot:default="{ hover }">
          <!-- Start show resultimg -->
          <div class="showing-resulting">
            <div style="width:100%;height:100%;background-color:#1f180e">
              <v-row no-gutters style="height:100%">
                <div :style="{height:'100%', width:'40%'}">
                  <previewTable :row="6" :column="15" />
                </div>
                <div :style="{ height: '100%', width:'60%'}">
                  <div style="width:100%; height:45%">
                    <previewTable :row="6" :column="36" />
                  </div>
                  <v-divider />
                  <div style="width:100%; height:27.5%">
                    <previewTable :row="3" :column="36" />
                  </div>
                  <v-divider />
                  <v-row style="width:100%; height:27.5%" no-gutters>
                    <div style="width:49.5%; height:100%; ">
                      <previewTable :row="4" :column="18" />
                    </div>
                    <v-divider vertical />
                    <div style="width:49.5%; height:100%">
                      <previewTable :row="4" :column="18" />
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

              <div class=" mr-5 ">
                <v-btn class="white--text" large depressed color="#5f4d35" @click="show=true">
                  {{ $t('TABLE.BACCARAT') }}
                </v-btn>
              </div>

              <div class="mr-5 ">
                <v-btn class="white--text" large depressed color="#5f4d35" @click="secondshow=true">
                  {{ $t('TABLE.BACCARAT7') }}
                </v-btn>
              </div>
            </div>
            <!-- end first button -->

            <!-- first button- second action-->
            <div
              v-if="hover ? show && hover : show=false "
              class=" #1f180e darken-2 v-card--reveal display-3 white--text"
              style="height: 100%; background:black;"
            >
              <div style="height:20px" class="d-flex align-center textSize justify-center">
                {{ $t('TABLE.BETLIMIT') }}
              </div>
              <div class="d-flex flex-wrap align-center flex-row justify-center">
                <v-btn
                  v-for="(betlimit, i) in betlimits"
                  :key="i"
                  class="white--text mt-3 mr-3"
                  color="#5f4d35"
                  link
                  @click.native="joinGame($event)"
                >
                  {{ betlimit.title }}
                </v-btn>
              </div>
            </div>
            <!-- end first button- second action-->
            <!-- second button- second action-->
            <div
              v-if="hover ? secondshow && hover : secondshow=false "
              class=" #1f180e darken-2 v-card--reveal display-3 white--text"
              style="height: 100%; background:black;"
            >
              <div style="height:20px" class="d-flex align-center textSize justify-center">
                {{ $t('TABLE.BETLIMIT') }}
              </div>
              <div class="d-flex flex-wrap align-center flex-row justify-center">
                <v-btn
                  v-for="(betlimit, i) in betlimits"
                  :key="i"
                  class="white--text mt-3 mr-3"
                  color="#5f4d35"
                  link
                  @click.native="joinGame($event)"
                >
                  {{ betlimit.title }}
                </v-btn>
              </div>
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
import previewTable from './previewTable'
export default {
  components: {
    previewTable
  },
  props: {
    tableinfo: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      show: false,
      secondshow: false,
      betlimits: [
        { title: '10 - 1,000' },
        { title: '50 - 5,000' },
        { title: '100 - 5,000' },
        { title: '100 - 10K' },
        { title: '200 - 20K' }
      ]
    }
  },
  methods: {
    async joinGame () {
      console.log('joinGame()')
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
      this.process_20001(cmder)
    },
    // RESPONSE_JOIN_GAME_RESULT
    process_20001 (cmder) {
      console.log('處理加入遊戲桌回傳20001 process_20001(', cmder, ')')
      if (cmder.SC === 1000) { // success
        console.log('join table success!')
        this.$router.push('/betRoom')
        // this.intable = true
      } else {
        console.log('join table fail!')
      }
    }
  }
}
</script>
<style scoped>
.v-card--reveal {

bottom: 0;

opacity: 0.6;
position: absolute;
width: 100%;
}
.dashboard-bar{
  background:#1f180e;
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
