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
      <span style="font-size:0.8vw"> Table Info</span>
    </v-tab>
    <v-tab
      :href="`#tab-2`"
      style="color:#BC8F31;"
    >
      <span style="font-size:0.8vw">  Video</span>
    </v-tab>
    <v-tab
      :href="`#tab-3`"
      style="color:#BC8F31;"
    >
      <span style="font-size:0.8vw">  Cards</span>
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
        <v-row style="height:77%;width:100%; margin:0;" class="table-info">
          <v-col style="width:50%;height:100%; padding:0;border-right:1px solid white ">
            <v-row style="margin:0;" dense>
              <v-col cols="6" class="banker">
                Banker 65%
              </v-col>
              <v-col cols="6">
                2242532/1213
              </v-col>
              <v-progress-linear
                v-model="progress"
                color="red"
              />
            </v-row>

            <v-row style="margin:0;" dense>
              <v-col cols="6" class="player">
                Player 41%
              </v-col>
              <v-col cols="6">
                2242532/1213
              </v-col>
              <v-progress-linear
                v-model="progress"
                color="blue"
              />
            </v-row>

            <v-row style="margin:0;" dense>
              <v-col cols="6" class="tie-text">
                Tie 1%
              </v-col>
              <v-col cols="6">
                2242532/1213
              </v-col>
              <v-progress-linear
                v-model="progress"
                color="green"
              />
            </v-row>
            <v-row style="margin:0;" dense>
              <v-col cols="6" class="banker">
                Banker Pair
              </v-col>
              <v-col cols="6">
                2242532/1213
              </v-col>
            </v-row>
            <v-row style="margin:0;" dense>
              <v-col cols="6" class="player">
                Player Pair
              </v-col>
              <v-col cols="6">
                2242532/1213
              </v-col>
            </v-row>
            <v-row style="margin:0;" dense>
              <v-col cols="6" class="banker">
                Banker Natural
              </v-col>
              <v-col cols="6">
                2242532/1213
              </v-col>
            </v-row>
            <v-row style="margin:0;" dense>
              <v-col cols="6" class="player">
                Player Natural
              </v-col>
              <v-col cols="6">
                2242532/1213
              </v-col>
            </v-row>
          </v-col>
          <v-col style="width:50%;height:100% ;padding:0;color:#E7CAA0">
            <v-row style="margin:0;padding:0" dense>
              <v-col cols="6">
                Table
              </v-col>
              <v-col cols="6">
                C01
              </v-col>
            </v-row>
            <v-row style="margin:0;padding:0" dense>
              <v-col cols="6">
                Dealer
              </v-col>
              <v-col cols="6">
                Monkey Dog
              </v-col>
            </v-row>
            <v-row style="margin:0;padding:0" dense>
              <v-col cols="6">
                Round
              </v-col>
              <v-col cols="6">
                3-25
              </v-col>
            </v-row>
            <v-row style="margin:0;padding:0" dense>
              <v-col cols="6">
                ID
              </v-col>
              <v-col cols="6">
                1291200211
              </v-col>
            </v-row>
            <v-row style="margin:0;padding:0" dense>
              <v-col cols="6">
                Table Limit
              </v-col>
              <v-col cols="6">
                20000
              </v-col>
            </v-row>
            <v-row style="margin:0;padding:0" dense>
              <v-col cols="6">
                Max. Limit
              </v-col>
              <v-col cols="6">
                5000
              </v-col>
            </v-row>
            <v-row style="margin:0;padding:0" dense>
              <v-col cols="6">
                Min. Limit
              </v-col>
              <v-col cols="6">
                100
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <v-row style="height:19%;width:100%; margin:0;background-color:black;" class="table-info">
          <v-col cols="2" class="text-center">
            <span style="color:#E7CAA0">Banker</span><br>
            <span>{{ changenumbers[betLimit].bet_limit }}</span>
          </v-col>
          <v-col cols="2" class="text-center">
            <span style="color:#E7CAA0">Player</span><br>
            <span>{{ changenumbers[betLimit].bet_limit }}</span>
          </v-col>
          <v-col cols="2" class="text-center">
            <span style="color:#E7CAA0">Tie</span><br>
            <span>{{ changenumbers[betLimit].bet_limit }}</span>
          </v-col>
          <v-col cols="2" class="text-center">
            <span style="color:#E7CAA0">Pair</span><br>
            <span>{{ changenumbers[betLimit].bet_limit }}</span>
          </v-col>
          <v-col cols="2" class="text-center">
            <span style="color:#E7CAA0">Natural</span><br>
            <span>{{ changenumbers[betLimit].bet_limit }}</span>
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
                  <span style="color:black;font-size:0.7vw;">change</span>
                </v-btn>
              </template>

              <v-card color="rgba(0, 0, 0, 0.7)">
                <v-list
                  dark

                  color="rgba(0, 0, 0, 0.5)"
                >
                  <v-radio-group v-model="betLimit" :mandatory="false">
                    <v-radio label="10 - 1,000" value="10-1000" on-icon="done" color="#B48A33" off-icon="" />
                    <v-radio label="50 - 5,000" value="50-5000" on-icon="done" color="#B48A33" off-icon="" />
                    <v-radio label="100 - 5,000" value="100-5000" on-icon="done" color="#B48A33" off-icon="" />
                    <v-radio label="100 - 10K" value="100-10k" on-icon="done" color="#B48A33" off-icon="" />
                    <v-radio label="200 - 20K" value="200-20k" on-icon="done" color="#B48A33" off-icon="" />
                  </v-radio-group>
                </v-list>
              </v-card>
            </v-menu>
          </v-col>
        </v-row>
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
      </v-card>
      <v-banner v-model="exten" dark color="black" single-line transition="slide-y-transition">
        <span style="color:#E7CAA0" class="table-info">Lucky Six</span><br>
        <span class="table-info">{{ changenumbers[betLimit].bet_limit }}</span>
      </v-banner>
    </v-tab-item>
    <v-tab-item
      :value="'tab-' + 2"
    >
      <v-card
        flat
        tile
        height="32vh"
      >
        <div class="playArea">
          <h1> 2</h1>
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
            src="/card/方塊2.png"
            height="14vh"
            contain
            style="position:absolute;left:15%;top:1%; transform: rotate(-90deg);"
          />
          <v-img
            src="/card/方塊2.png"
            height="14vh"
            contain
            style=" position:absolute;left:5%;bottom:18%"
          />
          <v-img
            src="/card/方塊2.png"
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
            src="/card/方塊2.png"
            contain
            height="14vh"
            style="position:absolute;right:18%;top:2%; transform: rotate(-90deg);"
          />
          <v-img
            src="/card/方塊2.png"
            contain
            height="14vh"
            style=" position:absolute;right:5%;bottom:18%"
          />
          <v-img
            src="/card/方塊2.png"
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
export default {
  data () {
    return {
      betLimit: '10-1000',
      changenumbers: {
        '10-1000': { bet_limit: '1,000', banker: '1,000', player: '1,000', tie: '125', pair: '90' },
        '50-5000': { bet_limit: '5000', banker: '5,000', player: '5,000', tie: '625', pair: '454' },
        '100-5000': { bet_limit: '600', banker: '5,000', player: '5,000', tie: '625', pair: '454' },
        '100-10k': { bet_limit: '100', banker: '10,000', player: '10,000', tie: '1250', pair: '909' },
        '200-20k': { bet_limit: '200', banker: '20,000', player: '20,000', tie: '2500', pair: '1818' }
      },
      progress: 50,
      exten: false
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
