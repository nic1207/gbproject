<template>
  <v-flex :md4="cardSize.md4" :md3="cardSize.md3" :md6="cardSize.md6" xs12>
    <v-card class="ma-1" elevation="24" raised outlined>
      <!-- Card bar for 2 cloumn view -->
      <v-row v-if="PropCardSize=='md6'" no-gutters class="dashboard-bar">
        <v-flex row class=" align-center">
          <span class="black--text textSize ml-4">TableID {{ table && table.TableID }}  </span>
        </v-flex>
        <v-flex row class="align-center">
          <v-icon color="#B98F38">
            group
          </v-icon>
          <span class="black--text textSize">{{ table && table.tableinfo && table.tableinfo.Status && table.tableinfo.Status.PlayerCount }} </span>
        </v-flex>
        <v-flex row class="align-center">
          <v-img src="/icon/圓庄.png" max-height="1vw" max-width="1vw" />
          <span class="black--text textSize">{{ table && table.bb }}</span>
        </v-flex>
        <v-flex row class="align-center">
          <v-img src="/icon/圓閒.png" max-height="1vw" max-width="1vw" />
          <span class="black--text textSize">{{ table && table.pp }}</span>
        </v-flex>
        <v-flex row class="align-center">
          <v-img src="/icon/圓和.png" max-height="1vw" max-width="1vw" />
          <span class="black--text textSize"> {{ table && table.tt }}</span>
        </v-flex>
        <v-flex>
          <div class="d-flex white--text textSize justify-center align-center" style="background:#404040; height:30px;">
            <span> {{ table && table.status }}</span>
          </div>
        </v-flex>
      </v-row>
      <!-- card bar for other column views -->
      <v-row v-if="PropCardSize!='md6'" no-gutters class="dashboard-bar">
        <v-flex row class=" align-center">
          <span class="black--text textSize ml-4">TableType {{ table && table.TableID }}  </span>
        </v-flex>
        <v-flex row class="align-center">
          <v-icon color="#B98F38">
            group
          </v-icon>
          <span class="black--text textSize">xx{{ table && table.tableinfo && table.tableinfo.Status && table.tableinfo.Status.PlayerCount }}xx</span>
        </v-flex>
        <v-flex row class="align-center">
          <v-img src="/icon/圓庄.png" max-height="1vw" max-width="1vw" />
          <span class="black--text textSize">{{ table && table.bb }}</span>
        </v-flex>
      </v-row>
      <!-- card bar for other column views -->
      <v-row v-if="PropCardSize!='md6'" no-gutters class="dashboard-bar">
        <v-flex row class="align-center ml-1">
          <v-img src="/icon/圓閒.png" max-height="1vw" max-width="1vw" />
          <span class="black--text textSize">{{ table && table.pp }}</span>
        </v-flex>
        <v-flex row class="align-center">
          <v-img src="/icon/圓和.png" max-height="1vw" max-width="1vw" />
          <span class="black--text textSize"> {{ table && table.tt }}</span>
        </v-flex>
        <v-flex>
          <div class="d-flex white--text textSize justify-center align-center" style="background:#404040; height:30px;">
            <span> {{ table && table.status }}</span>
          </div>
        </v-flex>
      </v-row>

      <v-row no-gutters dense>
        <!-- image region for table host -->
        <div :style="{height:PropCardSize=='md3'?'12vh':'21vh', width:'17%'}">
          <v-img
            height="100%"
            width="100%"
            src="/icon/荷官頭圖.png"
          >
            <v-row align="end" class="fill-height" no-gutters>
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
                         `${PropCardSize=='md6'?'珠盤路單(大).png':PropCardSize=='md4'?'檯桌棋盤格.png':'珠盤路單(小).png'}`
                         //chaing background image based on card size and column views
                         + '\')',
                       'background-repeat': 'no-repeat',
                       'background-position': 'center',
                       'background-size': '100% 100%'}"
            >
              <v-row no-gutters style="height:100%">
                <div
                  v-if="PropCardSize=='md6'||PropCardSize=='md3'"
                  :style="{height:'100%', width:PropCardSize=='md3'?'100%':'39%',}"
                  class="d-flex align-content-start flex-wrap flex-column"
                >
                  <v-img
                    v-if="table && table.tableinfo && table.tableinfo.Status && table.tableinfo.Status.History"
                    v-for="(hi, index) in table && table.tableinfo && table.tableinfo.Status && table.tableinfo.Status.History"
                    :key='index'
                    class="mt-1"
                    :src="images[hi]"
                    :max-height="PropCardSize=='md3'?'0.8vw':'1.4vw'"
                    :max-width="PropCardSize=='md3'?'0.75vw':'1.3vw'"
                  />
                  <!--
                  <v-img class="mt-1" src="/icon/圓庄.png" :max-height="PropCardSize=='md3'?'0.8vw':'1.4vw'" :max-width="PropCardSize=='md3'?'0.75vw':'1.3vw'" />
                  <v-img class="mt-1" src="/icon/圓閒.png" :max-height="PropCardSize=='md3'?'0.8vw':'1.4vw'" :max-width="PropCardSize=='md3'?'0.75vw':'1.3vw'" />
                  <v-img class="mt-1" src="/icon/圓庄.png" :max-height="PropCardSize=='md3'?'0.8vw':'1.4vw'" :max-width="PropCardSize=='md3'?'0.75vw':'1.3vw'" />
                  <v-img class="mt-1" src="/icon/圓閒.png" :max-height="PropCardSize=='md3'?'0.8vw':'1.4vw'" :max-width="PropCardSize=='md3'?'0.75vw':'1.3vw'" />
                  <v-img class="mt-1" src="/icon/圓庄.png" :max-height="PropCardSize=='md3'?'0.8vw':'1.4vw'" :max-width="PropCardSize=='md3'?'0.75vw':'1.3vw'" />
                  <v-img class="mt-1" src="/icon/圓庄.png" :max-height="PropCardSize=='md3'?'0.8vw':'1.4vw'" :max-width="PropCardSize=='md3'?'0.75vw':'1.3vw'" />
                  <v-img class="mt-1" src="/icon/圓庄.png" :max-height="PropCardSize=='md3'?'0.8vw':'1.4vw'" :max-width="PropCardSize=='md3'?'0.75vw':'1.3vw'" />
                  <v-img class="mt-1" src="/icon/圓庄.png" :max-height="PropCardSize=='md3'?'0.8vw':'1.4vw'" :max-width="PropCardSize=='md3'?'0.75vw':'1.3vw'" />
                  <v-img class="mt-1" src="/icon/圓庄.png" :max-height="PropCardSize=='md3'?'0.8vw':'1.4vw'" :max-width="PropCardSize=='md3'?'0.75vw':'1.3vw'" />
                  <v-img class="mt-1" src="/icon/圓庄.png" :max-height="PropCardSize=='md3'?'0.8vw':'1.4vw'" :max-width="PropCardSize=='md3'?'0.75vw':'1.3vw'" />
                  -->
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

              <div class=" mr-5 ">
                <v-btn
                  class="white--text"
                  :small="PropCardSize=='md3'"
                  :large="!PropCardSize=='md3'"
                  depressed
                  color="#5f4d35"
                  @click="show=true"
                >
                  Baccarat
                </v-btn>
              </div>

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
            </div>
            <!-- end first button -->

            <!-- first button- second action-->
            <div
              v-if="hover ? show&& hover : show=false "
              class=" #1f180e darken-2 v-card--reveal d-flex justify-center align-center flex-wrap display-3 white--text"

              style="height: 100%; background:black;"
            >
              <v-btn
                class="white--text  mr-1"
                :small="PropCardSize=='md3'"
                :large="!PropCardSize=='md3'"
                depressed
                color="#5f4d35"
                link
                to="/betRoom"
              >
                10 - 1,000
              </v-btn>

              <v-btn
                class="white--text  mr-1"
                :small="PropCardSize=='md3'"
                :large="!PropCardSize=='md3'"
                depressed
                color="#5f4d35"
                link
                to="/betRoom"
              >
                50 - 5,000
              </v-btn>

              <v-btn
                class="white--text mr-1"
                :small="PropCardSize=='md3'"
                :large="!PropCardSize=='md3'"
                depressed
                color="#5f4d35"
                link
                to="/betRoom"
              >
                100 - 5,000
              </v-btn>

              <v-btn
                class="white--text  mr-1"
                :small="PropCardSize=='md3'"
                :large="!PropCardSize=='md3'"
                depressed
                color="#5f4d35"
                link
                to="/betRoom"
              >
                100 - 5,000
              </v-btn>

              <v-btn
                class="white--text  mr-1"
                :small="PropCardSize=='md3'"
                :large="!PropCardSize=='md3'"
                depressed
                color="#5f4d35"
                link
                to="/betRoom"
              >
                100 - 5,000
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
                class="white--text mr-1"
                :small="PropCardSize=='md3'"
                :large="!PropCardSize=='md3'"
                depressed
                color="#5f4d35"
                link
                to="/betRoom"
              >
                10 - 1,000
              </v-btn>

              <v-btn
                class="white--text  mr-1"
                :small="PropCardSize=='md3'"
                :large="!PropCardSize=='md3'"
                depressed
                color="#5f4d35"
                link
                to="/betRoom"
              >
                50 - 5,000
              </v-btn>

              <v-btn
                class="white--text mr-1"
                :small="PropCardSize=='md3'"
                :large="!PropCardSize=='md3'"
                depressed
                color="#5f4d35"
                link
                to="/betRoom"
              >
                100 - 5,000
              </v-btn>

              <v-btn
                class="white--text  mr-1"
                link
                to="/betRoom"
                :small="PropCardSize=='md3'"
                :large="!PropCardSize=='md3'"
                depressed
                color="#5f4d35"
              >
                100 - 5,000
              </v-btn>

              <v-btn
                class="white--text  mr-1"
                :small="PropCardSize=='md3'"
                :large="!PropCardSize=='md3'"
                depressed
                color="#5f4d35"
                link
                to="/betRoom"
              >
                100 - 5,000
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
    'token',
    'PropCardSize'
  ],
  //   components:{
  //     previewTable
  // },
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
      ],
      images: [
        { src: '/icon/0.png' },
        { src: '/icon/圓閒.png' },
        { src: '/icon/圓和.png' },
        { src: '/icon/圓庄.png' }
      ]
    }
  },
  computed: {
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
    }
  },
  methods: {
    async joinGame () {
      console.log('joinGame(', this.table, ')')
      console.log('tihs.token=', this.token)
      try {
        const cmdBody = {
          Token: this.token,
          GameID: this.table.GameID,
          TableID: this.table.TableID
        }
        const cmd = {
          SN: 2,
          CID: 10001,
          SC: 1000,
          B: cmdBody
        }
        // const strcmd = JSON.stringify(cmd)
        console.log('cmd=', cmd)
        // this.send(strcmd)
        const cmder = await this.$websocket.sendAsync(cmd)
        // console.log('Response.data:', response.data)
        // const cmder = JSON.parse(response)
        this.process_20001(cmder)
      } catch (error) {
        console.log('[debug] error=', error)
        this.$router.push('/betRoom')
      }
    },
    // RESPONSE_JOIN_GAME_RESULT
    process_20001 (cmder) {
      console.log('處理加入遊戲桌回傳20001 process_20001(', cmder, ')')
      if (cmder.SC === 1000) { // success
        console.log('join table success!')
        this.$router.push('/betRoom')
        // this.intable = true
      } else {
        console.log('join table fail!', cmder)
        this.$router.push('/betRoom')
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
