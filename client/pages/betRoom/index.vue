<template>
  <v-container class="pa-0 ma-0" fluid>
    <v-row class="pa-0" style="height:100vh;" no-gutters>
      <v-col class="pa-0" style="width:50% ;max-width: 50%">
        <div class="playTable">
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
          <div class="room-title d-flex justify-center align-center">
            Baccrart C01
          </div>
          <v-avatar
            v-show="true"
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
        </div>

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
          >
            Baccarat
          </v-tab>
          <v-tab
            :href="`#tab-2`"
          >
            No Commission
          </v-tab>
          <v-tab
            :href="`#tab-3`"
          >
            Cow Cow
          </v-tab>

          <v-tab-item
            :value="'tab-' + 1"
          >
            <v-card
              flat
              tile
              height="30vh"
            >
              <div class="playArea">
                <v-row style="height:55%;width:100%; margin:0">
                  <v-col tile cols="4" class="playArea-tile" align="center">
                    <h1> Player</h1>
                    <h2>1:1</h2>
                  </v-col>
                  <v-col tile cols="4" class="playArea-tile pa-0" align="center">
                    <div class="tie tie1">
                      <h2> Tie</h2>
                      <h2>8:1</h2>
                    </div>
                    <div class="tie">
                      <h2> Lucky Six</h2>
                      <h2> 12:1 / 20:1</h2>
                    </div>
                  </v-col>
                  <v-col tile cols="4" class="playArea-tile banker" align="center">
                    <h1> Banker</h1>
                    <h2>0.95:1</h2>
                  </v-col>
                </v-row>
                <v-row style="height:45%;width:100%; margin:0">
                  <v-col tile cols="3" class="playArea-tile1" align="center">
                    <h1>Player Pair</h1>
                    <h2>11:1</h2>
                  </v-col>
                  <v-col tile cols="3" class="playArea-tile1" align="center">
                    <h1>Player Natural</h1>
                    <h2>7:2</h2>
                  </v-col>
                  <v-col tile cols="3" class="playArea-tile1 banker" align="center">
                    <h1>Banker Natural</h1>
                    <h2>7:2</h2>
                  </v-col>
                  <v-col tile cols="3" class="playArea-tile1 banker" align="center">
                    <h1>Banker Pair</h1>
                    <h2>11:1</h2>
                  </v-col>
                </v-row>
              </div>
            </v-card>
          </v-tab-item>
          <v-tab-item
            :value="'tab-' + 2"
          >
            <v-card
              flat
              tile
              height="30vh"
            >
              <div class="playArea">
                <v-row style="height:55%;width:100%; margin:0">
                  <v-col tile cols="4" class="playArea-tile" align="center">
                    <h1> Player</h1>
                    <h2>1:1</h2>
                  </v-col>
                  <v-col tile cols="4" class="playArea-tile pa-0" align="center">
                    <div class="tie tie1">
                      <h2> Tie</h2>
                      <h2>8:1</h2>
                    </div>
                    <div class="tie">
                      <h2> Lucky Six</h2>
                      <h2> 12:1 / 20:1</h2>
                    </div>
                  </v-col>
                  <v-col tile cols="4" class="playArea-tile banker" align="center">
                    <h1> Banker</h1>
                    <h2>1:1</h2>
                  </v-col>
                </v-row>
                <v-row style="height:45%;width:100%; margin:0">
                  <v-col tile cols="3" class="playArea-tile1" align="center">
                    <h1>Player Pair</h1>
                    <h2>11:1</h2>
                  </v-col>
                  <v-col tile cols="3" class="playArea-tile1" align="center">
                    <h1>Player Natural</h1>
                    <h2>7:2</h2>
                  </v-col>
                  <v-col tile cols="3" class="playArea-tile1 banker" align="center">
                    <h1>Banker Natural</h1>
                    <h2>7:2</h2>
                  </v-col>
                  <v-col tile cols="3" class="playArea-tile1 banker" align="center">
                    <h1>Banker Pair</h1>
                    <h2>11:1</h2>
                  </v-col>
                </v-row>
              </div>
            </v-card>
          </v-tab-item>
          <v-tab-item
            :value="'tab-' + 3"
          >
            <v-card
              flat
              tile
              height="30vh"
            >
              <div class="playArea">
                <v-row style="height:100%;width:100%; margin:0">
                  <v-col tile cols="4" class="playArea-tile" align="center">
                    <h1> Player</h1>
                    <h2>1:1</h2>
                  </v-col>
                  <v-col tile cols="4" class="playArea-tile" align="center">
                    <h2> Tie</h2>
                    <h2>8:1</h2>
                  </v-col>
                  <v-col tile cols="4" class="playArea-tile banker" align="center">
                    <h1> Banker</h1>
                    <h2>1:1</h2>
                  </v-col>
                </v-row>
              </div>
            </v-card>
          </v-tab-item>
        </v-tabs>

        <div
          style="height:4vh ;background-color:#023016"
          class="d-flex justify-center align-center white--text"
        >
          Total BetAmount : 0.0
        </div>
        <div class="selectCoin d-flex align-center white--text">
          <v-menu
            v-model="coinMenu"
            offset-y
            top
            :close-on-content-click="false"
            :nudge-width="450"
            :max-width="450"
          >
            <template v-slot:activator="{ on, attrs }">
              <div
                class="text-center mt-1 ml-2"
                style="width:4vw; height:2.6vw; background-color:rgba(0,0,0,0.5)"
                v-bind="attrs"
                v-on="on"
                @click="openCoinSelect"
              >
                <v-icon dark>
                  monetization_on
                </v-icon>
                <span style="font-size:0.8vw">Custom</span>
              </div>
            </template>
            <v-card>
              <v-card-title>
                <v-row no-gutters justify="center">
                  Please Select
                </v-row>
              </v-card-title>
              <v-row no-gutters justify="center">
                <v-img
                  class="text-center ma-2"
                  max-width="3.2vw"
                  max-height="2.6vw"
                  src="/coin1.jpg"
                >
                  <v-checkbox
                    v-model="selectedCoin"
                    value="coin1"
                    color="#009167"
                    :disabled="disableCoinSelect?selectedCoin.includes('coin1')?false:true:false"
                  />
                </v-img>

                <v-img
                  class="text-center ma-2"
                  max-width="3.2vw"
                  max-height="2.6vw"
                  src="/coin2.jpg"
                >
                  <v-checkbox
                    v-model="selectedCoin"
                    value="coin2"
                    color="#009167"
                    :disabled="disableCoinSelect?selectedCoin.includes('coin2')?false:true:false"
                  />
                </v-img>
                <v-img
                  class="text-center ma-2"
                  max-width="3.2vw"
                  max-height="2.6vw"
                  src="/coin3.jpg"
                >
                  <v-checkbox
                    v-model="selectedCoin"
                    value="coin3"
                    color="#009167"
                    :disabled="disableCoinSelect?selectedCoin.includes('coin3')?false:true:false"
                  />
                </v-img>
                <v-img
                  class="text-center ma-2"
                  max-width="3.2vw"
                  max-height="2.6vw"
                  src="/coin4.jpg"
                >
                  <v-checkbox
                    v-model="selectedCoin"
                    value="coin4"
                    color="#009167"
                    :disabled="disableCoinSelect?selectedCoin.includes('coin4')?false:true:false"
                  />
                </v-img>
                <v-img
                  class="text-center ma-2"
                  max-width="3.2vw"
                  max-height="2.6vw"
                  src="/coin5.jpg"
                >
                  <v-checkbox
                    v-model="selectedCoin"
                    value="coin5"
                    color="#009167"
                    :disabled="disableCoinSelect?selectedCoin.includes('coin5')?false:true:false"
                  />
                </v-img>
              </v-row>
              <v-row no-gutters justify="center">
                <v-img
                  class="text-center ma-2"
                  max-width="3.2vw"
                  max-height="2.6vw"
                  src="/coin2.jpg"
                >
                  <v-checkbox
                    v-model="selectedCoin"
                    value="coin6"
                    color="#009167"
                    :disabled="disableCoinSelect?selectedCoin.includes('coin6')?false:true:false"
                  />
                </v-img>

                <v-img
                  class="text-center ma-2"
                  max-width="3.2vw"
                  max-height="2.6vw"
                  src="/coin2.jpg"
                >
                  <v-checkbox
                    v-model="selectedCoin"
                    value="coin7"
                    color="#009167"
                    :disabled="disableCoinSelect?selectedCoin.includes('coin7')?false:true:false"
                  />
                </v-img>
                <v-img
                  class="text-center ma-2"
                  max-width="3.2vw"
                  max-height="2.6vw"
                  src="/coin2.jpg"
                >
                  <v-checkbox
                    v-model="selectedCoin"
                    value="coin8"
                    color="#009167"
                    :disabled="disableCoinSelect?selectedCoin.includes('coin8')?false:true:false"
                  />
                </v-img>
                <v-img
                  class="text-center ma-2"
                  max-width="3.2vw"
                  max-height="2.6vw"
                  src="/coin2.jpg"
                >
                  <v-checkbox
                    v-model="selectedCoin"
                    value="coin9"
                    color="#009167"
                    :disabled="disableCoinSelect?selectedCoin.includes('coin9')?false:true:false"
                  />
                </v-img>
                <v-img
                  class="text-center ma-2"
                  max-width="3.2vw"
                  max-height="2.6vw"
                  src="/coin2.jpg"
                >
                  <v-checkbox
                    v-model="selectedCoin"
                    value="coin10"
                    color="#009167"
                    :disabled="disableCoinSelect?selectedCoin.includes('coin10')?false:true:false"
                  />
                </v-img>
              </v-row>
              <v-card-actions>
                <v-row justify="center">
                  <v-btn class="mx-2" fab dark color="#4f3c2b" @click="cancelCoinSelect">
                    <v-icon dark>
                      cancel
                    </v-icon>
                  </v-btn>
                  <v-btn class="mx-2" fab dark color="#4f3c2b" @click="changeShowing">
                    <v-icon dark>
                      done
                    </v-icon>
                  </v-btn>
                </v-row>
              </v-card-actions>
            </v-card>
          </v-menu>

          <div
            class="text-center mt-1"
            style="width:4vw; height:2.6vw; "
          >
            <img :src="'/'+showingCoin[0]+'.jpg'" style="width:3.2vw;">
          </div>
          <div
            class="text-center mt-1"
            style="width:4vw; height:2.6vw; "
          >
            <img :src="'/'+showingCoin[1]+'.jpg'" style="width:3.2vw;">
          </div>
          <div
            class="text-center mt-1"
            style="width:4vw; height:2.6vw; "
          >
            <img :src="'/'+showingCoin[2]+'.jpg'" style="width:3.2vw;">
          </div>
          <div
            class="text-center mt-1"
            style="width:4vw; height:2.6vw; "
          >
            <img :src="'/'+showingCoin[3]+'.jpg'" style="width:3.2vw;">
          </div>
          <div
            class="text-center mt-1"
            style="width:4vw; height:2.6vw; "
          >
            <img :src="'/'+showingCoin[4]+'.jpg'" style="width:3.2vw;">
          </div>
          <div
            class="text-center mt-1 ml-2"
            style="width:4vw; height:2.6vw; background-color:rgba(0,0,0,0.5)"
          >
            <v-icon dark>
              monetization_on
            </v-icon><br>
            <span style="font-size:0.8vw">Double</span>
          </div>
        </div>
      </v-col>
      <v-col cols="4" class="pa-0">
        <v-tabs
          background-color="rgba(0, 0, 0, 1)"
          class="elevation-2"
          dark
          centered
          grow
          height="5vh"
        >
          <v-tabs-slider />

          <v-tab
            :href="`#tab-1`"
          >
            Table Info
          </v-tab>
          <v-tab
            :href="`#tab-2`"
          >
            Video
          </v-tab>
          <v-tab
            :href="`#tab-3`"
          >
            Cards
          </v-tab>

          <v-tab-item
            :value="'tab-' + 1"
          >
            <v-card
              flat
              tile
              height="32vh"
              dark
            >
              <v-row style="height:80%;width:100%; margin:0;" class="table-info">
                <v-col style="width:50%; padding:0;border-right:1px solid white ">
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
                <v-col style="width:50%; ;padding:0">
                  <v-row style="margin:0;" dense>
                    <v-col cols="6">
                      Table
                    </v-col>
                    <v-col cols="6">
                      C01
                    </v-col>
                  </v-row>
                  <v-row style="margin:0;" dense>
                    <v-col cols="6">
                      Dealer
                    </v-col>
                    <v-col cols="6">
                      Monkey Dog
                    </v-col>
                  </v-row>
                  <v-row style="margin:0;" dense>
                    <v-col cols="6">
                      Round
                    </v-col>
                    <v-col cols="6">
                      3-25
                    </v-col>
                  </v-row>
                  <v-row style="margin:0;" dense>
                    <v-col cols="6">
                      ID
                    </v-col>
                    <v-col cols="6">
                      1291200211
                    </v-col>
                  </v-row>
                  <v-row style="margin:0;" dense>
                    <v-col cols="6">
                      Table Limit
                    </v-col>
                    <v-col cols="6">
                      20000
                    </v-col>
                  </v-row>
                  <v-row style="margin:0;" dense>
                    <v-col cols="6">
                      Max. Limit
                    </v-col>
                    <v-col cols="6">
                      5000
                    </v-col>
                  </v-row>
                  <v-row style="margin:0;" dense>
                    <v-col cols="6">
                      Min. Limit
                    </v-col>
                    <v-col cols="6">
                      100
                    </v-col>
                  </v-row>
                </v-col>
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
                <v-col cols="2" class="text-center d-flex align-center justify-center">
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
                <img
                  src="/card.png"
                  style="width:20%; height:42%; position:absolute;left:15%;top:0; transform: rotate(-90deg);"
                >
                <img
                  src="/card.png"
                  style="width:20%; height:42%; position:absolute;left:5%;bottom:18%"
                >
                <img
                  src="/card.png"
                  style="width:20%; height:42%; position:absolute;left:27%;bottom:18%"
                >
                <div
                  class=" d-flex justify-center align-center"
                  style="width:42%; height:10%; position:absolute; top:85%; left:5%; background-color:blue"
                >
                  <span>P 6</span>
                </div>
                <img
                  src="/card.png"
                  style="width:20%; height:42%; position:absolute;right:15%;top:0; transform: rotate(-90deg);"
                >
                <img
                  src="/card.png"
                  style="width:20%; height:42%; position:absolute;right:5%;bottom:18%"
                >
                <img
                  src="/card.png"
                  style="width:20%; height:42%; position:absolute;right:27%;bottom:18%"
                >
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
        <div style="height:13% ;background-color:black">
          <v-row style="height:50%;width:100%; margin:0;">
            <div style="width:12.5%;" class="d-flex justify-center align-center">
              <v-card
                height="80%"
                width="80%"
                color="secondary"
                dark
                class="d-flex justify-center align-center room-list"
                @click="window=1"
              >
                C01
              </v-card>
            </div>
            <div style="width:12.5%;" class="d-flex justify-center align-center">
              <v-card
                height="80%"
                width="80%"
                color="secondary"
                dark
                class="d-flex justify-center align-center room-list"
                @click="window=2"
              >
                C02
              </v-card>
            </div>
            <div style="width:12.5%;" class="d-flex justify-center align-center">
              <v-card
                height="80%"
                width="80%"
                color="secondary"
                dark
                class="d-flex justify-center align-center room-list"
                @click="window=3"
              >
                C03
              </v-card>
            </div>
            <div style="width:12.5%;" class="d-flex justify-center align-center">
              <v-card
                height="80%"
                width="80%"
                color="secondary"
                dark
                class="d-flex justify-center align-center room-list"
                @click="window=1"
              >
                C06
              </v-card>
            </div>
            <div style="width:12.5%;" class="d-flex justify-center align-center">
              <v-card
                height="80%"
                width="80%"
                color="secondary"
                dark
                class="d-flex justify-center align-center room-list"
                @click="window=1"
              >
                C07
              </v-card>
            </div>
            <div style="width:12.5%;" class="d-flex justify-center align-center">
              <v-card
                height="80%"
                width="80%"
                color="secondary"
                dark
                class="d-flex justify-center align-center room-list"
                @click="window=1"
              >
                P01
              </v-card>
            </div>
            <div style="width:12.5%;" class="d-flex justify-center align-center">
              <v-card
                height="80%"
                width="80%"
                color="secondary"
                dark
                class="d-flex justify-center align-center room-list"
                @click="window=3"
              >
                P02
              </v-card>
            </div>
            <div style="width:12.5%;" class="d-flex justify-center align-center">
              <v-card
                height="80%"
                width="80%"
                color="secondary"
                dark
                class="d-flex justify-center align-center room-list"
                @click="window=2"
              >
                P03
              </v-card>
            </div>
          </v-row>
          <v-row style="height:50%;width:100%; margin:0;">
            <div style="width:12.5%;" class="d-flex justify-center align-center">
              <v-card
                height="80%"
                width="80%"
                color="secondary"
                dark
                class="d-flex justify-center align-center room-list"
                @click="window=2"
              >
                C01
              </v-card>
            </div>
            <div style="width:12.5%;" class="d-flex justify-center align-center">
              <v-card
                height="80%"
                width="80%"
                color="secondary"
                dark
                class="d-flex justify-center align-center room-list"
                @click="window=1"
              >
                C02
              </v-card>
            </div>
            <div style="width:12.5%;" class="d-flex justify-center align-center">
              <v-card
                height="80%"
                width="80%"
                color="secondary"
                dark
                class="d-flex justify-center align-center room-list"
                @click="window=1"
              >
                C03
              </v-card>
            </div>
            <div style="width:12.5%;" class="d-flex justify-center align-center">
              <v-card
                height="80%"
                width="80%"
                color="secondary"
                dark
                class="d-flex justify-center align-center room-list"
                @click="window=1"
              >
                C06
              </v-card>
            </div>
            <div style="width:12.5%;" class="d-flex justify-center align-center">
              <v-card
                height="80%"
                width="80%"
                color="secondary"
                dark
                class="d-flex justify-center align-center room-list"
                @click="window=1"
              >
                C07
              </v-card>
            </div>
            <div style="width:12.5%;" class="d-flex justify-center align-center">
              <v-card
                height="80%"
                width="80%"
                color="secondary"
                dark
                class="d-flex justify-center align-center room-list"
                @click="window=1"
              >
                P01
              </v-card>
            </div>
            <div style="width:12.5%;" class="d-flex justify-center align-center">
              <v-card
                height="80%"
                width="80%"
                color="secondary"
                dark
                class="d-flex justify-center align-center room-list"
                @click="window=2"
              >
                P02
              </v-card>
            </div>
            <div style="width:12.5%;" class="d-flex justify-center align-center">
              <v-card
                height="80%"
                width="80%"
                color="secondary"
                dark
                class="d-flex justify-center align-center room-list"
                @click="window=3"
              >
                P03
              </v-card>
            </div>
          </v-row>
        </div>
        <v-window v-model="window">
          <v-window-item :value="1">
            <div class="text-center" style="height:46vh; width:100%;background-color:black">
              <div style="width:100%; height:30%">
                <previewTable :row="6" :column="36" />
              </div>
              <v-divider />
              <div style="width:100%; height:10%">
                <previewTable :row="3" :column="36" />
              </div>
              <v-divider />
              <v-row style="width:100%; height:10%" no-gutters>
                <div style="width:49.7%; height:100%; ">
                  <previewTable :row="3" :column="16" />
                </div>
                <v-divider vertical />
                <div style="width:50%; height:100%">
                  <previewTable :row="3" :column="16" />
                </div>
              </v-row>
              <v-divider />
              <div style="width:100%; height:40%">
                <previewTable :row="6" :column="18" />
              </div>
              <v-row no-gutters style="width:100%; height:10%">
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
              </v-row>
            </div>
          </v-window-item>

          <v-window-item :value="2">
            <div class="pa-4 text-center" style="height:100%; width:100%;background-color:black">
              <v-text-field
                label="Password"
                type="password"
              />
              <v-text-field
                label="Confirm Password"
                type="password"
              />
              <span class="caption grey--text text--darken-1">
                Please enter a password for your account
              </span>
            </div>
          </v-window-item>

          <v-window-item :value="3">
            <div class="pa-4 text-center" style="height:100%; width:100%;background-color:black">
              <v-img
                class="mb-4"
                contain
                height="128"
                src="https://cdn.vuetifyjs.com/images/logos/v.svg"
              />
              <h3 class="title font-weight-light mb-2">
                Welcome to Vuetify
              </h3>
              <span class="caption grey--text">Thanks for signing up!</span>
            </div>
          </v-window-item>
        </v-window>
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
      coinMenu: false,
      selectedCoin: [],
      showingCoin: ['coin1', 'coin2', 'coin3', 'coin4', 'coin5']

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
    .playTable{
        background-image: url("/table.png");
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
    .playArea{
        background-color:rgb(3, 62, 29);
        width:100%;
        height:100%;
        cursor: url('/coin1.jpg'),pointer;
    }
    .selectCoin{
        width: 100%;
        background-color:#4F3C2B
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
    .result-cards{
        background-color:rgba(0, 0, 0, 0.5);
         position: relative;;
        width:100%;
        height:100%
    }
</style>
