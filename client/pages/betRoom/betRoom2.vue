<template>
  <v-container class="pa-0 ml-2" fluid>
    <v-row class="pa-0" style="height:100vh;" no-gutters>
      <v-col cols="12">
        <div class="tableInfo">
          <div class="room-title d-flex justify-center align-center">
            Baccrart C01
          </div>
          <v-btn
            class="mx-2"
            dark
            small
            color="#4F3C2B"
            style="position:absolute;bottom:1%;left:0"
            link
            to="/betRoom"
          >
            <v-icon dark>
              picture_in_picture
            </v-icon>
          </v-btn>
          <v-avatar
            v-show="false"
            color="rgba(0,0,0,0.5)"
            size="130"
            class="gameCountDown"
          >
            <v-progress-circular
              :value="70"
              color="red"
              size="100"
            >
              <span> 60</span>
            </v-progress-circular>
          </v-avatar>
          <div class="result-cards">
            <v-img
              src="/card/方塊2.png"
              height="10vh"
              contain
              style="position:absolute;left:10%;top:1%; transform: rotate(-90deg);"
            />
            <v-img
              src="/card/方塊2.png"
              height="10vh"
              contain
              style=" position:absolute;left:0;bottom:18%"
            />
            <v-img
              src="/card/方塊2.png"
              height="10vh"
              contain
              style=" position:absolute;left:19%;bottom:18%"
            />
            <div
              class=" d-flex justify-center align-center"
              style="width:42%; height:10%; position:absolute; top:85%; left:5%; background-color:blue"
            >
              <span>P 6</span>
            </div>
            <v-img
              src="/card/方塊2.png"
              contain
              height="10vh"
              style="position:absolute;right:10%;top:2%; transform: rotate(-90deg);"
            />
            <v-img
              src="/card/方塊2.png"
              contain
              height="10vh"
              style=" position:absolute;right:0;bottom:18%"
            />
            <v-img
              src="/card/方塊2.png"
              contain
              height="10vh"
              style="position:absolute;right:19%;bottom:18%"
            />
            <div
              class=" d-flex justify-center align-center"
              style="width:42%; height:10%; position:absolute; top:85%; right:5%; background-color:red"
            >
              <span>B 5</span>
            </div>
          </div>
          <BetRoom2Tableinfo />

          <div class="selectCoin d-flex align-center justify-end white--text pa-2">
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
                                                    background-image:url('/icon/七人座自定UI.png');
                                                    background-repeat: no-repeat;
                                                    background-position: center;
                                                    background-size: 100% 100%"
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
                      src="/icon/萬用選擇UI.png"
                      class="ma-2"
                      max-width="2.5vw"
                      max-height="2.5vw"
                      @click="cancelCoinSelect"
                    />

                    <!-- </v-btn> -->
                    <v-img
                      src="/icon/萬用取消UI.png"
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
              :src="betCoin==coin?'/coin/籌碼發光.png':''"
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
                                                      background-image:url('/icon/單人雙倍ui.png');
                                                      background-repeat: no-repeat;
                                                      background-position: center;
                                                      background-size: 100% 100%"
            />
          </div>
        </div>
        <v-row
          style="height:20vh;width:100%"
          class="pa-0 ma-0"
        >
          <BetHistory2 />
          <v-row no-gutters style="height:100%;  width:50%">
            <ResultBar />
            <BetRoom2SideTable />
            <Chat />
          </v-row>
        </v-row>
      </v-col>
      <!-- <v-col cols="2"></v-col> -->
      <button v-show="!drawer" class="Custombutton" style="position:absolute; top:37vh;right:0" @click="drawer=true">
        <p class="py-5" style="writing-mode: vertical-rl;text-orientation: upright;letter-spacing:-2px;font-size:0.8vw">
          tables
        </p>
      </button>
      <TableDrawer :drawer="drawer" @close="drawer=false" />
    </v-row>
  </v-container>
</template>

<script>
// import previewTable from '@/components/PreviewTable';
export default {
  // components:{
  //       previewTable
  //   },
  data () {
    return {
      drawer: false,
      coinMenu: false,
      selectedCoin: [],
      showingCoin: ['5籌碼.png', '10K籌碼.png', '10籌碼.png', '20K籌碼.png', '50籌碼.png'],
      coinList: ['5籌碼.png', '10K籌碼.png', '10籌碼.png', '20K籌碼.png', '20籌碼.png', '50籌碼.png', '100籌碼.png',
        '200籌碼.png', '500籌碼.png', '1000籌碼.png', '2000籌碼.png', '5000籌碼.png'],
      betCoin: '5籌碼.png'
    }
  },
  computed: {
    disableCoinSelect () {
      if (this.selectedCoin.length === 5) {
        return true
      } else {
        return false
      }
    }

  },
  methods: {
    changeShowing () {
      this.showingCoin = [...this.selectedCoin]
      this.coinMenu = false
    },
    openCoinSelect () {
      this.selectedCoin = [...this.showingCoin]
    },
    cancelCoinSelect () {
      this.selectedCoin = []
      this.coinMenu = false
    }
  }
}
</script>
<style scoped>
 .scroll {
      overflow-y: auto;
    }
    .tableInfo{
        background-image: url("/table.png");
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        width: 100%;
        height: 75%;
        position: relative;
    }
    .playArea-tile{
        border:1px solid rgba(255,255,255, 0.3);
        color:#3470A9;
        font-size:1.2vw ;
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
      height:50%;
      width:100%;
      margin:0;
      color:#0C930A;
       font-size:0.75vw ;
    }
    .tie1{
      border-bottom: 1px solid  rgba(255,255,255, 0.3);
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
        color:white
    }
    .gameCountDown{
        position:absolute;
        top:10%;
        left:5%;
    }
    .result-cards{
        background-color:rgba(46, 46, 46, 0.6);
         position:absolute;
          top:5vh;
          left:0;
        width:20%;
        height:23vh
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
      background-image:url('/icon/選擇桌台ui_1.png');
      background-repeat: no-repeat;
      background-position: center;
      background-size: 100% 100%;
      letter-spacing:20px;

    }
    .Custombutton:focus {
    outline: 1px solid #F7D8A8;
    outline-offset: -4px;
}
.selectCoin{
        /* background-color: rgba(0,0,0,0.5); */
        width:32vw;
        position: absolute;
        right:0;
        bottom: 0;
    }
</style>
