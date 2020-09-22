<template>
  <div style="width:500px;position:absolute; top:0;right: 4%;">
    <v-tabs
      v-model="tab"
      background-color="rgba(0, 0, 0, 0.7)"
      class="elevation-2"
      dark
      centered
      grow
      height="5vh"
      hide-slider
      active-class="tabActive black--text"
    >
      <v-tab

        style="color:#BC8F31;"
        @click="tableInfoShow=!tableInfoShow"
      >
        Table Info
        <v-icon>{{ tableInfoShow? 'mdi-menu-up':'mdi-menu-down' }}</v-icon>
      </v-tab>
      <v-tab

        style="color:#BC8F31;"
        @click="betPoolShow=!betPoolShow"
      >
        Bet Pool
        <v-icon>{{ betPoolShow? 'mdi-menu-up':'mdi-menu-down' }}</v-icon>
      </v-tab>
      <v-tabs-items v-model="tab" style="background-color:rgba(0,0,0,0)">
        <v-tab-item>
          <v-card
            v-show="tableInfoShow"
            flat
            tile
            height="28vh"
            color="rgba(0,0,0,0)"
          >
            <v-row style="width:100%; margin:0;">
              <v-card
                outlined
                tile
                width="50%"
                color="rgba(0, 0, 0, 0)"
              >
                <v-list dense color="rgba(46, 46, 46, 0.8)">
                  <v-list-item>
                    <v-list-item-content>
                      <span
                        class="table-info"
                        style="color:#B48A33;"
                      >Table</span>
                    </v-list-item-content>
                    <v-list-item-content class="align-end">
                      <span class="table-info white--text">C01</span>
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item>
                    <v-list-item-content>
                      <span class="table-info" style="color:#B48A33;">
                        Dealer

                      </span>
                    </v-list-item-content>
                    <v-list-item-content class="align-end">
                      <span class="table-info white--text">SOKNY</span>
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item>
                    <v-list-item-content>
                      <span class="table-info" style="color:#B48A33;">Round</span>
                    </v-list-item-content>
                    <v-list-item-content class="align-end">
                      <span class="table-info white--text">23-34 </span>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card>
              <v-card
                outlined
                tile
                width="50%"
                color="rgba(0, 0, 0, 0)"
              >
                <v-list dense color="rgba(46, 46, 46, 0.8)">
                  <v-list-item dense>
                    <v-list-item-content>
                      <span class="table-info" style="color:#B48A33;">
                        ID
                      </span>
                    </v-list-item-content>
                    <v-list-item-content class="align-end">
                      <span class="table-info white--text">93924329423</span>
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item dense>
                    <v-list-item-content>
                      <span class="table-info" style="color:#B48A33;">
                        Table Limit
                      </span>
                    </v-list-item-content>
                    <v-list-item-content class="align-end">
                      <span class="table-info white--text"> 20,000.000</span>
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item dense>
                    <v-list-item-content>
                      <span class="table-info" style="color:#B48A33;">
                        Bet Limit
                      </span>
                    </v-list-item-content>
                    <v-list-item-content class="align-end">
                      <span class="table-info white--text">100-5,000 </span>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-row>
            <v-row no-gutters style="height:20%;width:100%; margin:0;background-color:rgba(46, 46, 46, 0.8) " class="table-info">
              <v-col cols="2" class="text-center">
                <span style="color:#B48A33;">Banker</span><br>
                <span class="white--text">{{ changenumbers[betLimit].bet_limit }}</span>
              </v-col>
              <v-col cols="2" class="text-center">
                <span style="color:#B48A33;">Player</span><br>
                <span class="white--text">{{ changenumbers[betLimit].bet_limit }}</span>
              </v-col>
              <v-col cols="2" class="text-center">
                <span style="color:#B48A33;">Tie</span><br>
                <span class="white--text">{{ changenumbers[betLimit].bet_limit }}</span>
              </v-col>
              <v-col cols="2" class="text-center">
                <span style="color:#B48A33;">Pair</span><br>
                <span class="white--text">{{ changenumbers[betLimit].bet_limit }}</span>
              </v-col>
              <v-col cols="2" class="text-center">
                <span style="color:#B48A33;">Natural</span><br>
                <span class="white--text">{{ changenumbers[betLimit].bet_limit }}</span>
              </v-col>
              <v-col cols="2" class="text-center">
                <span style="color:#B48A33;">Lucky Six</span><br>
                <span class="white--text">{{ changenumbers[betLimit].bet_limit }}</span>
              </v-col>
            </v-row>
            <v-row nogutters style="height:26%;width:100%; margin:0;background-color:rgba(46, 46, 46, 0.8) " class="table-info">
              <v-col cols="12" class="text-center d-flex align-center justify-center">
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
                      x-small
                      v-bind="attrs"
                      color="white"
                      elevation="24"
                      v-on="on"
                    >
                      <span style="color:black">change</span>
                    </v-btn>
                  </template>

                  <v-card color="rgba(0, 0, 0, 0.7)">
                    <v-list
                      dark

                      color="rgba(0, 0, 0, 0.5)"
                    >
                      <v-radio-group v-model="betLimit" :mandatory="false">
                        <v-radio label="10 - 1,000" value="10-1000" on-icon="done" off-icon="" color="#B48A33" />
                        <v-radio label="50 - 5,000" value="50-5000" on-icon="done" off-icon="" color="#B48A33" />
                        <v-radio label="100 - 5,000" value="100-5000" on-icon="done" off-icon="" color="#B48A33" />
                        <v-radio label="100 - 10K" value="100-10k" on-icon="done" off-icon="" color="#B48A33" />
                        <v-radio label="200 - 20K" value="200-20k" on-icon="done" off-icon="" color="#B48A33" />
                      </v-radio-group>
                    </v-list>
                  </v-card>
                </v-menu>
              </v-col>
            </v-row>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card
            v-show="betPoolShow"
            outlined
            tile
            height="14vh"
            color="rgba(0,0,0,0)"
          >
            <v-row style="width:100%; margin:0">
              <v-card
                width="50%"
                color="rgba(46, 46, 46, 0.8)"
                outlined
                tile
              >
                <v-row style="margin:0;" dense>
                  <v-col cols="6" class="banker">
                    Banker 65%
                  </v-col>
                  <v-col cols="6" class="white--text">
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
                  <v-col cols="6" class="white--text">
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
                  <v-col cols="6" class="white--text">
                    2242532/1213
                  </v-col>
                  <v-progress-linear
                    v-model="progress"
                    color="green"
                  />
                </v-row>
              </v-card>
              <v-card
                width="50%"
                outlined
                tile
                color="rgba(46, 46, 46, 0.8)"
              >
                <v-row style="margin:0;" dense>
                  <v-col cols="6" class="banker">
                    Banker Pair
                  </v-col>
                  <v-col cols="6" class="white--text">
                    2242532/1213
                  </v-col>
                </v-row>
                <v-row style="margin:0;" dense>
                  <v-col cols="6" class="player">
                    Player Pair
                  </v-col>
                  <v-col cols="6" class="white--text">
                    2242532/1213
                  </v-col>
                </v-row>
                <v-row style="margin:0;" dense>
                  <v-col cols="6" class="banker">
                    Banker Natural
                  </v-col>
                  <v-col cols="6" class="white--text">
                    2242532/1213
                  </v-col>
                </v-row>
                <v-row style="margin:0;" dense>
                  <v-col cols="6" class="player">
                    Player Natural
                  </v-col>
                  <v-col cols="6" class="white--text">
                    2242532/1213
                  </v-col>
                </v-row>
              </v-card>
            </v-row>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-tabs>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tab: null,
      tableInfoShow: false,
      betPoolShow: false,
      progress: 50,
      betLimit: '10-1000',
      changenumbers: {
        '10-1000': { bet_limit: '1,000', banker: '1,000', player: '1,000', tie: '125', pair: '90' },
        '50-5000': { bet_limit: '5000', banker: '5,000', player: '5,000', tie: '625', pair: '454' },
        '100-5000': { bet_limit: '600', banker: '5,000', player: '5,000', tie: '625', pair: '454' },
        '100-10k': { bet_limit: '100', banker: '10,000', player: '10,000', tie: '1250', pair: '909' },
        '200-20k': { bet_limit: '200', banker: '20,000', player: '20,000', tie: '2500', pair: '1818' }
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
</style>
