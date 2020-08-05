<template>
  <v-container class="pa-0 ma-0" fluid>
    <v-row class="pa-0" style="height:100vh;" no-gutters>
      <v-col cols="10">
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
            <img
              src="/card.png"
              style="width:20%; height:40%; position:absolute;left:15%;top:0; transform: rotate(-90deg);"
            >
            <img
              src="/card.png"
              style="width:20%; height:40%; position:absolute;left:5%;bottom:23%"
            >
            <img
              src="/card.png"
              style="width:20%; height:40%; position:absolute;left:27%;bottom:23%"
            >
            <div
              class=" d-flex justify-center align-center"
              style="width:42%; height:10%; position:absolute; top:80%; left:5%; background-color:blue"
            >
              <span>P 6</span>
            </div>
            <img
              src="/card.png"
              style="width:20%; height:40%; position:absolute;right:15%;top:0; transform: rotate(-90deg);"
            >
            <img
              src="/card.png"
              style="width:20%; height:40%; position:absolute;right:5%;bottom:23%"
            >
            <img
              src="/card.png"
              style="width:20%; height:40%; position:absolute;right:27%;bottom:23%"
            >
            <div
              class=" d-flex justify-center align-center"
              style="width:42%; height:10%; position:absolute; top:80%; right:5%; background-color:red"
            >
              <span>B 5</span>
            </div>
          </div>
          <div style="width:500px;position:absolute; top:0;right: 0;">
            <v-tabs
              background-color="rgba(0, 0, 0, 0.7)"
              class="elevation-2"
              dark
              centered
              grow
              height="5vh"
            >
              <v-tabs-slider />

              <v-tab
                :href="`#tab-1`"
                @click="tableInfoShow=!tableInfoShow"
              >
                Table Info
                <v-icon>{{ tableInfoShow? 'mdi-menu-down':'mdi-menu-up' }}</v-icon>
              </v-tab>
              <v-tab
                :href="`#tab-2`"
                @click="betPoolShow=!betPoolShow"
              >
                Bet Pool
                <v-icon>{{ betPoolShow? 'mdi-menu-down':'mdi-menu-up' }}</v-icon>
              </v-tab>

              <v-tab-item
                :value="'tab-' + 1"
              >
                <v-card
                  v-show="tableInfoShow"
                  flat
                  tile
                  height="30vh"
                  color="rgba(0, 0, 0, 0.5)"
                >
                  <v-row style="width:100%; margin:0">
                    <v-card width="50%">
                      <v-list dense>
                        <v-list-item>
                          <v-list-item-content><span class="table-info">Table</span></v-list-item-content>
                          <v-list-item-content class="align-end">
                            <span class="table-info">C01</span>
                          </v-list-item-content>
                        </v-list-item>

                        <v-list-item>
                          <v-list-item-content><span class="table-info">Dealer</span></v-list-item-content>
                          <v-list-item-content class="align-end">
                            <span class="table-info">SOKNY</span>
                          </v-list-item-content>
                        </v-list-item>

                        <v-list-item>
                          <v-list-item-content><span class="table-info">Round</span></v-list-item-content>
                          <v-list-item-content class="align-end">
                            <span class="table-info">23-34 </span>
                          </v-list-item-content>
                        </v-list-item>
                      </v-list>
                    </v-card>
                    <v-card width="50%">
                      <v-list dense>
                        <v-list-item dense>
                          <v-list-item-content><span class="table-info">ID</span></v-list-item-content>
                          <v-list-item-content class="align-end">
                            <span class="table-info">93924329423</span>
                          </v-list-item-content>
                        </v-list-item>

                        <v-list-item dense>
                          <v-list-item-content><span class="table-info">Table Limit</span></v-list-item-content>
                          <v-list-item-content class="align-end">
                            <span class="table-info"> 20,000.000</span>
                          </v-list-item-content>
                        </v-list-item>

                        <v-list-item dense>
                          <v-list-item-content><span class="table-info">Bet Limit</span></v-list-item-content>
                          <v-list-item-content class="align-end">
                            <span class="table-info">100-5,000 </span>
                          </v-list-item-content>
                        </v-list-item>
                      </v-list>
                    </v-card>
                  </v-row>
                  <v-row style="height:20%;width:100%; margin:0; " class="table-info">
                    <v-col cols="2" class="text-center">
                      <span>Banker</span><br>
                      <span>5000</span>
                    </v-col>
                    <v-col cols="2" class="text-center">
                      <span>Player</span><br>
                      <span>5000</span>
                    </v-col>
                    <v-col cols="2" class="text-center">
                      <span>Tie</span><br>
                      <span>5000</span>
                    </v-col>
                    <v-col cols="2" class="text-center">
                      <span>Pair</span><br>
                      <span>500</span>
                    </v-col>
                    <v-col cols="2" class="text-center">
                      <span>Natural</span><br>
                      <span>5000</span>
                    </v-col>
                    <v-col cols="2" class="text-center">
                      <span>Lucky Six</span><br>
                      <span>500</span>
                    </v-col>
                  </v-row>
                  <v-row style="height:20%;width:100%; margin:0; " class="table-info">
                    <v-col cols="12" class="text-center d-flex align-center justify-center">
                      <v-btn x-small>
                        change
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-card>
              </v-tab-item>
              <v-tab-item
                :value="'tab-' + 2"
              >
                <v-card
                  v-show="betPoolShow"
                  flat
                  tile
                  height="15vh"
                >
                  <v-row style="width:100%; margin:0">
                    <v-card width="50%">
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
                    </v-card>
                    <v-card width="50%">
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
                    </v-card>
                  </v-row>
                </v-card>
              </v-tab-item>
            </v-tabs>
          </div>
        </div>
        <v-row
          style="height:21vh;width:100%"
          class="pa-0 ma-0"
        >
          <div style="height:100%;  width:30%">
            <previewTable :row="7" :column="15" />
          </div>
          <div style="height:100%;  width:30%">
            <div style="width:100%; height:45%">
              <previewTable :row="6" :column="36" />
            </div>
            <v-divider />
            <div style="width:100%; height:27.5%">
              <previewTable :row="3" :column="36" />
            </div>
            <v-divider />
            <v-row style="width:100%; height:27.5%" no-gutters>
              <div style="width:49.7%; height:100%; ">
                <previewTable :row="4" :column="18" />
              </div>
              <v-divider vertical />
              <div style="width:50%; height:100%">
                <previewTable :row="4" :column="18" />
              </div>
            </v-row>
          </div>
          <div style="height:100%;  width:40%">
            <div
              style="height:25% ;background-color:rgba(0,0,0,0.5)"
              class="d-flex justify-center align-center white--text"
            >
              Total BetAmount : 0.0
            </div>
            <v-divider />
            <div
              style="height:52% ;background-color:#4F3C2B"
              class="d-flex align-center white--text"
            >
              <div
                class="text-center mt-4 ml-2"
                style="width:4vw; height:2.6vw; background-color:rgba(0,0,0,0.5)"
              >
                <v-icon dark>
                  monetization_on
                </v-icon>
                <span style="font-size:0.8vw">Custom</span>
              </div>
              <div
                class="text-center mt-4"
                style="width:4vw; height:2.6vw; "
              >
                <img src="/coin1.jpg" style="width:3.2vw;">
              </div>
              <div
                class="text-center mt-4"
                style="width:4vw; height:2.6vw; "
              >
                <img src="/coin1.jpg" style="width:3.2vw;">
              </div>
              <div
                class="text-center mt-4"
                style="width:4vw; height:2.6vw; "
              >
                <img src="/coin1.jpg" style="width:3.2vw;">
              </div>
              <div
                class="text-center mt-4"
                style="width:4vw; height:2.6vw; "
              >
                <img src="/coin1.jpg" style="width:3.2vw;">
              </div>
              <div
                class="text-center mt-4"
                style="width:4vw; height:2.6vw; "
              >
                <img src="/coin1.jpg" style="width:3.2vw;">
              </div>
              <div
                class="text-center mt-4 ml-2"
                style="width:4vw; height:2.6vw; background-color:rgba(0,0,0,0.5)"
              >
                <v-icon dark>
                  monetization_on
                </v-icon><br>
                <span style="font-size:0.8vw">Double</span>
              </div>
            </div>
            <v-divider />
            <div
              style="height:20% ;background-color:rgba(0,0,0,0.5)"
              class="d-flex justify-center align-center white--text"
            >
              <div class="d-flex align-center justify-left room-list" style="width:50%; height:100%; background-color:black">
                <span class="font-weight-bold red--text ml-1">B</span>
                <span class="font-weight-bold white--text ml-1">13</span>
                <span class="font-weight-bold blue--text ml-1">P</span>
                <span class="font-weight-bold white--text ml-1">123</span>
                <span class="font-weight-bold green--text ml-1">T</span>
                <span class="font-weight-bold white--text ml-1">13</span>
                <span class="font-weight-bold red--text ml-1">BP</span>
                <span class="font-weight-bold white--text ml-1">13</span>
                <span class="font-weight-bold blue--text ml-1">PP</span>
                <span class="font-weight-bold white--text ml-1">133</span>
              </div>
              <div class="d-flex align-center justify-left room-list" style="width:50%; height:100%; background-color:black">
                <v-btn x-small color="red" class="ml-1">
                  <span class="white--text"> Ask B.</span>
                </v-btn>
                <v-progress-circular
                  :value="100"
                  width="3"
                  color="blue"
                  class="ml-1"
                  size="15"
                />
                <v-avatar color="blue" class="ml-1" size="15" />
                <span class="font-weight-bold red--text ml-1 mr-5  ">/</span>
                <v-btn x-small color="blue" class="ml-1">
                  <span class="white--text"> Ask P.</span>
                </v-btn>
                <v-progress-circular
                  :value="100"
                  width="3"
                  color="red"
                  class="ml-1"
                  size="15"
                />
                <v-avatar color="red" class="ml-1" size="15" />
                <span class="font-weight-bold blue--text ml-1">/</span>
              </div>
            </div>
          </div>
        </v-row>
      </v-col>
      <v-col cols="2">
        <v-card height="50vh">
          <v-expansion-panels flat>
            <v-expansion-panel>
              <v-expansion-panel-header color="black">
                <span class="white--text">Switch Table</span>
                <template v-slot:actions>
                  <v-icon color="white">
                    clear_all
                  </v-icon>
                </template>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-row class="d-flex justify-center align-center ma-0 pa-0">
                  <v-checkbox
                    label="Checkbox 1"
                  />
                  <v-checkbox
                    label="Checkbox 1"
                  />
                </v-row>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
          <v-divider />
          <v-card-text style="height: 85%;" class="scroll pa-0 ma-0">
            <v-card height="150px" class="mb-2" color="blue">
              <v-system-bar
                color="black"
                dark
                class="ma-0 pa-0"
              >
                <span class="room-list ml-1 white--text">Baccarat C02</span>
                <v-spacer />

                <div
                  class="d-flex justify-center align-center ma-0 pa-0"
                  style="width:30%;height:100%;background-color:#196260"
                >
                  <span>20</span>
                </div>
              </v-system-bar>
              <previewTable :row="7" :column="16" />
            </v-card>
            <v-card height="150px" class="mb-2" color="blue">
              <v-system-bar
                color="black"
                dark
                class="ma-0 pa-0"
              >
                <span class="room-list ml-1 white--text">Baccarat C02</span>
                <v-spacer />

                <div
                  class="d-flex justify-center align-center ma-0 pa-0"
                  style="width:30%;height:100%;background-color:#196260"
                >
                  <span>20</span>
                </div>
              </v-system-bar>
              <previewTable :row="7" :column="16" />
            </v-card>
            <v-card height="150px" class="mb-2" color="blue">
              <v-system-bar
                color="black"
                dark
                class="ma-0 pa-0"
              >
                <span class="room-list ml-1 white--text">Baccarat C02</span>
                <v-spacer />

                <div
                  class="d-flex justify-center align-center ma-0 pa-0"
                  style="width:30%;height:100%;background-color:#196260"
                >
                  <span>20</span>
                </div>
              </v-system-bar>
              <previewTable :row="7" :column="16" />
            </v-card>
            <v-card height="150px" class="mb-2" color="blue">
              <v-system-bar
                color="black"
                dark
                class="ma-0 pa-0"
              >
                <span class="room-list ml-1 white--text">Baccarat C02</span>
                <v-spacer />

                <div
                  class="d-flex justify-center align-center ma-0 pa-0"
                  style="width:30%;height:100%;background-color:#196260"
                >
                  <span>20</span>
                </div>
              </v-system-bar>

              <previewTable :row="7" :column="16" />
            </v-card>
          </v-card-text>
        </v-card>

        <v-card height="46vh">
          <v-system-bar
            color="black"
            dark
            class="ma-0 pa-0"
            height="35"
          >
            <span class="room-list ml-5 white--text">Good Road</span>
            <v-spacer />

            <v-icon color="white">
              mdi-menu-down
            </v-icon>
          </v-system-bar>
          <v-divider />
          <v-card-text style="height: 85%;" class="scroll pa-0 ma-0">
            <v-card height="150px" class="mb-2" color="blue">
              <v-system-bar
                color="black"
                dark
                class="ma-0 pa-0"
              >
                <span class="room-list ml-1 white--text">Baccarat C02</span>
                <v-spacer />

                <div
                  class="d-flex justify-center align-center ma-0 pa-0"
                  style="width:30%;height:100%;background-color:#196260"
                >
                  <span>20</span>
                </div>
              </v-system-bar>
              <previewTable :row="7" :column="16" />
            </v-card>
            <v-card height="150px" class="mb-2" color="blue">
              <v-system-bar
                color="black"
                dark
                class="ma-0 pa-0"
              >
                <span class="room-list ml-1 white--text">Baccarat C02</span>
                <v-spacer />

                <div
                  class="d-flex justify-center align-center ma-0 pa-0"
                  style="width:30%;height:100%;background-color:#196260"
                >
                  <span>20</span>
                </div>
              </v-system-bar>
              <previewTable :row="7" :column="16" />
            </v-card>
            <v-card height="150px" class="mb-2" color="blue">
              <v-system-bar
                color="black"
                dark
                class="ma-0 pa-0"
              >
                <span class="room-list ml-1 white--text">Baccarat C02</span>
                <v-spacer />

                <div
                  class="d-flex justify-center align-center ma-0 pa-0"
                  style="width:30%;height:100%;background-color:#196260"
                >
                  <span>20</span>
                </div>
              </v-system-bar>
              <previewTable :row="7" :column="16" />
            </v-card>
            <v-card height="150px" class="mb-2" color="blue">
              <v-system-bar
                color="black"
                dark
                class="ma-0 pa-0"
              >
                <span class="room-list ml-1 white--text">Baccarat C02</span>
                <v-spacer />

                <div
                  class="d-flex justify-center align-center ma-0 pa-0"
                  style="width:30%;height:100%;background-color:#196260"
                >
                  <span>20</span>
                </div>
              </v-system-bar>

              <previewTable :row="7" :column="16" />
            </v-card>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import previewTable from '@/components/previewTable'
export default {
  components: {
    previewTable
  },
  data () {
    return {
      progress: 50,
      window: 1,
      tableInfoShow: false,
      betPoolShow: false

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

    .selectCoin{
        width: 100%;
    }
    .table-info{
      font-size: 0.7vw;
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
    .result-cards{
        background-color:rgba(0, 0, 0, 0.5);
         position:absolute;
          top:10%;
          left:0;
        width:30%;
        height:30vh
    }

</style>
