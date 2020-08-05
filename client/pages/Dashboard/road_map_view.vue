<template>
  <v-container class="ma-0">
    <v-row>
      <!-- Main First Col -->
      <v-col cols="8" style="padding:0;">
        <v-tabs
          fixed-tabs
          background-color="#1c170e"
          dark
          active-class="brown darken-4 text--accent-4"
        >
          <v-tab v-if="favoriteshow" href="#navtab-1">
            My favorite
          </v-tab>
          <v-tab href="#navtab-2">
            All Games
          </v-tab>
          <v-tab>
            All Baccarat
          </v-tab>
          <v-tab>
            Special Baccarat
          </v-tab>
          <v-tab>
            Other Games
          </v-tab>
          <v-tab-item :value="'navtab-' + 1">
            <v-card
              flat
              tile
            >
              <div>
                <v-col tile cols="12">
                  <v-card v-if="favoriteshow" @click="favoriteshow=false">
                    <div v-for="project in projects"  :key="project.name" class="dashboard-card" flat>
                      <v-layout>
                        <v-flex mt-3 mb-2 ml-5>
                          <span class="white--text">Seri {{ project.seri }}</span>
                        </v-flex>
                        <v-flex mt-3 mb-2>
                          <span class="red--text">B</span>

                          <span class="white--text">{{ project.bb }}</span>
                        </v-flex>
                        <v-flex mt-3 mb-2>
                          <span class="blue--text ">P</span>
                          <span class="white--text">{{ project.pp }}</span>
                        </v-flex>
                        <v-flex mt-3 mb-2>
                          <div class="white--text">
                            <span class="green--text">T</span>
                            {{ project.tt }}
                          </div>
                        </v-flex>

                        <v-spacer /><v-spacer />
                        <v-flex mt-2 mb-1>
                          <v-btn @click="favoriteshow=true">
                            <v-icon medium color="#787878">
                              favorite
                            </v-icon>
                          </v-btn>
                        </v-flex>

                        <v-flex mt-2 mb-1>
                          <v-icon medium color="#c3a475">
                            switch_video
                          </v-icon>
                        </v-flex>

                        <v-flex>
                          <div class="white--text" style="background:#196260; height:44px;">
                            <div> {{ project.status }} </div>
                          </div>
                        </v-flex>
                      </v-layout>
                    </div>

                    <v-img
                      height="140"
                      style="background:red;"
                    />

                    <v-tabs
                      v-model="tab"
                      class="tabform"
                      background-color="deep-purple accent-4"
                      height="25"
                      centered
                      dark
                      icons-and-text
                    >
                      <v-tabs-slider />

                      <v-tab href="#tab-1">
                        Baccarat
                      </v-tab>

                      <v-tab href="#tab-2">
                        No Commission
                      </v-tab>

                      <v-tab href="#tab-3">
                        Cow Cow ?
                      </v-tab>

                      <v-tab-item :value="'tab-' + 1">
                        <v-card
                          flat
                          tile
                        >
                          <div class="playArea">
                            <v-row style="margin:0;">
                              <v-col tile cols="2" class="playArea-tile" align="center">
                                <h3>Player</h3>
                              </v-col>
                              <v-col tile cols="2" class="playArea-tile tile" align="center">
                                <h3>Tie</h3>
                              </v-col>
                              <v-col tile cols="2" class="playArea-tile banker" align="center">
                                <h3>Banker</h3>
                              </v-col>
                              <v-col tile cols="2" class="playArea-tile" align="center">
                                <h3>P.Pair</h3>
                              </v-col>
                              <v-col tile cols="2" class="playArea-tile tile" align="center">
                                <h3>Lucky Six</h3>
                              </v-col>
                              <v-col tile cols="2" class="playArea-tile banker" align="center">
                                <h3>B.Pair</h3>
                              </v-col>
                            </v-row>
                          </div>
                        </v-card>
                      </v-tab-item>

                      <v-tab-item :value="'tab-' + 2">
                        <v-card
                          flat
                          tile
                        >
                          <div class="playArea">
                            <v-row style="margin:0;">
                              <v-col tile cols="2" class="playArea-tile" align="center">
                                <h3>Player</h3>
                              </v-col>
                              <v-col tile cols="2" class="playArea-tile tile" align="center">
                                <h3> Tie</h3>
                              </v-col>
                              <v-col tile cols="2" class="playArea-tile banker" align="center">
                                <h3> Banker</h3>
                              </v-col>
                              <v-col tile cols="2" class="playArea-tile" align="center">
                                <h3>P.Pair</h3>
                              </v-col>
                              <v-col tile cols="2" class="playArea-tile tile" align="center">
                                <h3>Lucky Six</h3>
                              </v-col>
                              <v-col tile cols="2" class="playArea-tile banker" align="center">
                                <h3>B.Pair</h3>
                              </v-col>
                            </v-row>
                          </div>
                        </v-card>
                      </v-tab-item>

                      <v-tab-item :value="'tab-' + 3">
                        <v-card
                          flat
                          tile
                        >
                          <div class="playArea">
                            <v-row style="margin:0;">
                              <v-col tile cols="4" class="playArea-tile-last" align="center">
                                <h2>Player</h2>
                              </v-col>
                              <v-col tile cols="4" class="playArea-tile-last tile" align="center">
                                <h2> Tie</h2>
                              </v-col>
                              <v-col tile cols="4" class="playArea-tile-last banker" align="center">
                                <h2> Banker</h2>
                              </v-col>
                            </v-row>
                          </div>
                        </v-card>
                      </v-tab-item>
                    </v-tabs>
                  </v-card>
                </v-col>
              </div>
            </v-card>
          </v-tab-item>
          <v-tab-item :value="'navtab-' + 2">
            <v-card
              flat
              tile
            >
              <v-row style="height:100%;" class="pa-0" no-gutters>
                <v-col cols="6" style="padding:0;">
                  <v-card>
                    <div v-for="project in projects"  :key="project.name" class="dashboard-card" flat>
                      <v-layout>
                        <v-flex mt-3 mb-2 ml-5>
                          <span class="white--text">Seri {{ project.seri }}</span>
                        </v-flex>
                        <v-flex mt-3 mb-2>
                          <span class="red--text">B</span>

                          <span class="white--text">{{ project.bb }}</span>
                        </v-flex>
                        <v-flex mt-3 mb-2>
                          <span class="blue--text ">P</span>
                          <span class="white--text">{{ project.pp }}</span>
                        </v-flex>
                        <v-flex mt-3 mb-2>
                          <div class="white--text">
                            <span class="green--text">T</span>
                            {{ project.tt }}
                          </div>
                        </v-flex>

                        <v-spacer /><v-spacer />
                        <v-flex mt-2 mb-1>
                          <v-btn @click="favoriteshow=true">
                            <v-icon medium color="#787878">
                              favorite
                            </v-icon>
                          </v-btn>
                        </v-flex>

                        <v-flex mt-2 mb-1>
                          <v-icon medium color="#c3a475">
                            switch_video
                          </v-icon>
                        </v-flex>

                        <v-flex>
                          <div class="white--text" style="background:#196260; height:44px;">
                            <div> {{ project.status }} </div>
                          </div>
                        </v-flex>
                      </v-layout>
                    </div>

                    <v-img
                      height="140"
                    />

                    <v-tabs
                      v-model="tab"
                      class="tabform"
                      background-color="deep-purple accent-4"
                      height="25"
                      centered
                      dark
                      icons-and-text
                    >
                      <v-tabs-slider />

                      <v-tab href="#tab-1">
                        Baccarat
                      </v-tab>

                      <v-tab href="#tab-2">
                        No Commission
                      </v-tab>

                      <v-tab href="#tab-3">
                        Cow Cow ?
                      </v-tab>

                      <v-tab-item :value="'tab-' + 1">
                        <v-card
                          flat
                          tile
                        >
                          <div class="playArea">
                            <v-row style="margin:0;">
                              <v-col tile cols="2" class="playArea-tile" align="center">
                                <h3>Player</h3>
                              </v-col>
                              <v-col tile cols="2" class="playArea-tile tile" align="center">
                                <h3>Tie</h3>
                              </v-col>
                              <v-col tile cols="2" class="playArea-tile banker" align="center">
                                <h3>Banker</h3>
                              </v-col>
                              <v-col tile cols="2" class="playArea-tile" align="center">
                                <h3>P.Pair</h3>
                              </v-col>
                              <v-col tile cols="2" class="playArea-tile tile" align="center">
                                <h3>Lucky Six</h3>
                              </v-col>
                              <v-col tile cols="2" class="playArea-tile banker" align="center">
                                <h3>B.Pair</h3>
                              </v-col>
                            </v-row>
                          </div>
                        </v-card>
                      </v-tab-item>

                      <v-tab-item :value="'tab-' + 2">
                        <v-card
                          flat
                          tile
                        >
                          <div class="playArea">
                            <v-row style="margin:0;">
                              <v-col tile cols="2" class="playArea-tile" align="center">
                                <h3>Player</h3>
                              </v-col>
                              <v-col tile cols="2" class="playArea-tile tile" align="center">
                                <h3> Tie</h3>
                              </v-col>
                              <v-col tile cols="2" class="playArea-tile banker" align="center">
                                <h3> Banker</h3>
                              </v-col>
                              <v-col tile cols="2" class="playArea-tile" align="center">
                                <h3>P.Pair</h3>
                              </v-col>
                              <v-col tile cols="2" class="playArea-tile tile" align="center">
                                <h3>Lucky Six</h3>
                              </v-col>
                              <v-col tile cols="2" class="playArea-tile banker" align="center">
                                <h3>B.Pair</h3>
                              </v-col>
                            </v-row>
                          </div>
                        </v-card>
                      </v-tab-item>

                      <v-tab-item :value="'tab-' + 3">
                        <v-card
                          flat
                          tile
                        >
                          <div class="playArea">
                            <v-row style="margin:0;">
                              <v-col tile cols="4" class="playArea-tile-last" align="center">
                                <h2>Player</h2>
                              </v-col>
                              <v-col tile cols="4" class="playArea-tile-last tile" align="center">
                                <h2> Tie</h2>
                              </v-col>
                              <v-col tile cols="4" class="playArea-tile-last banker" align="center">
                                <h2> Banker</h2>
                              </v-col>
                            </v-row>
                          </div>
                        </v-card>
                      </v-tab-item>
                    </v-tabs>
                  </v-card>

                  <v-card class="mt-13">
                    <div v-for="project in projects"  :key="project.name" class="dashboard-card " flat>
                      <v-layout>
                        <v-flex mt-3 mb-2 ml-5>
                          <span class="white--text">Seri {{ project.seri }}</span>
                        </v-flex>
                        <v-flex mt-3 mb-2>
                          <span class="red--text">B</span>

                          <span class="white--text">{{ project.bb }}</span>
                        </v-flex>
                        <v-flex mt-3 mb-2>
                          <span class="blue--text ">P</span>
                          <span class="white--text">{{ project.pp }}</span>
                        </v-flex>
                        <v-flex mt-3 mb-2>
                          <div class="white--text">
                            <span class="green--text">T</span>
                            {{ project.tt }}
                          </div>
                        </v-flex>

                        <v-spacer /><v-spacer />
                        <v-flex mt-2 mb-1>
                          <v-icon medium color="#787878">
                            favorite
                          </v-icon>
                        </v-flex>
                        <v-flex mt-2 mb-1>
                          <v-icon medium color="#c3a475">
                            switch_video
                          </v-icon>
                        </v-flex>

                        <v-flex>
                          <div class="white--text" style="background:#196260; height:44px;">
                            <div> {{ project.status }} </div>
                          </div>
                        </v-flex>
                      </v-layout>
                    </div>

                    <v-img
                      height="140"
                    />

                    <v-tabs
                      v-model="tab"
                      class="tabform"
                      background-color="deep-purple accent-4"
                      height="25"
                      centered
                      dark
                      icons-and-text
                    >
                      <v-tabs-slider />

                      <v-tab href="#tab-1">
                        Baccarat
                      </v-tab>

                      <v-tab href="#tab-2">
                        No Commission
                      </v-tab>

                      <v-tab href="#tab-3">
                        Cow Cow ?
                      </v-tab>

                      <v-tab-item :value="'tab-' + 1">
                        <v-card
                          flat
                          tile
                        >
                          <div class="playArea">
                            <v-row style="margin:0;">
                              <v-col tile cols="2" class="playArea-tile" align="center">
                                <h3>Player</h3>
                              </v-col>
                              <v-col tile cols="2" class="playArea-tile tile" align="center">
                                <h3>Tie</h3>
                              </v-col>
                              <v-col tile cols="2" class="playArea-tile banker" align="center">
                                <h3>Banker</h3>
                              </v-col>
                              <v-col tile cols="2" class="playArea-tile" align="center">
                                <h3>P.Pair</h3>
                              </v-col>
                              <v-col tile cols="2" class="playArea-tile tile" align="center">
                                <h3>Lucky Six</h3>
                              </v-col>
                              <v-col tile cols="2" class="playArea-tile banker" align="center">
                                <h3>B.Pair</h3>
                              </v-col>
                            </v-row>
                          </div>
                        </v-card>
                      </v-tab-item>

                      <v-tab-item :value="'tab-' + 2">
                        <v-card
                          flat
                          tile
                        >
                          <div class="playArea">
                            <v-row style="margin:0;">
                              <v-col tile cols="2" class="playArea-tile" align="center">
                                <h3>Player</h3>
                              </v-col>
                              <v-col tile cols="2" class="playArea-tile tile" align="center">
                                <h3> Tie</h3>
                              </v-col>
                              <v-col tile cols="2" class="playArea-tile banker" align="center">
                                <h3> Banker</h3>
                              </v-col>
                              <v-col tile cols="2" class="playArea-tile" align="center">
                                <h3>P.Pair</h3>
                              </v-col>
                              <v-col tile cols="2" class="playArea-tile tile" align="center">
                                <h3>Lucky Six</h3>
                              </v-col>
                              <v-col tile cols="2" class="playArea-tile banker" align="center">
                                <h3>B.Pair</h3>
                              </v-col>
                            </v-row>
                          </div>
                        </v-card>
                      </v-tab-item>

                      <v-tab-item :value="'tab-' + 3">
                        <v-card
                          flat
                          tile
                        >
                          <div class="playArea">
                            <v-row style="margin:0;">
                              <v-col tile cols="4" class="playArea-tile-last" align="center">
                                <h2>Player</h2>
                              </v-col>
                              <v-col tile cols="4" class="playArea-tile-last tile" align="center">
                                <h2> Tie</h2>
                              </v-col>
                              <v-col tile cols="4" class="playArea-tile-last banker" align="center">
                                <h2> Banker</h2>
                              </v-col>
                            </v-row>
                          </div>
                        </v-card>
                      </v-tab-item>
                    </v-tabs>
                  </v-card>

                  <v-card class="mt-13">
                    <div v-for="project in projects"  :key="project.name" class="dashboard-card " flat>
                      <v-layout>
                        <v-flex mt-3 mb-2 ml-5>
                          <span class="white--text">Seri {{ project.seri }}</span>
                        </v-flex>
                        <v-flex mt-3 mb-2>
                          <span class="red--text">B</span>

                          <span class="white--text">{{ project.bb }}</span>
                        </v-flex>
                        <v-flex mt-3 mb-2>
                          <span class="blue--text ">P</span>
                          <span class="white--text">{{ project.pp }}</span>
                        </v-flex>
                        <v-flex mt-3 mb-2>
                          <div class="white--text">
                            <span class="green--text">T</span>
                            {{ project.tt }}
                          </div>
                        </v-flex>

                        <v-spacer /><v-spacer />
                        <v-flex mt-2 mb-1>
                          <v-btn @click="show=true">
                            <v-icon medium color="#787878">
                              favorite
                            </v-icon>
                          </v-btn>
                        </v-flex>
                        <v-flex mt-2 mb-1>
                          <v-icon medium color="#c3a475">
                            switch_video
                          </v-icon>
                        </v-flex>

                        <v-flex>
                          <div class="white--text" style="background:#196260; height:44px;">
                            <div> {{ project.status }} </div>
                          </div>
                        </v-flex>
                      </v-layout>
                    </div>

                    <v-img
                      height="140"
                    />

                    <v-tabs
                      v-model="tab"
                      class="tabform"
                      background-color="deep-purple accent-4"
                      height="25"
                      centered
                      dark
                      icons-and-text
                    >
                      <v-tabs-slider />

                      <v-tab href="#tab-1">
                        Baccarat
                      </v-tab>

                      <v-tab href="#tab-2">
                        No Commission
                      </v-tab>

                      <v-tab href="#tab-3">
                        Cow Cow ?
                      </v-tab>

                      <v-tab-item :value="'tab-' + 1">
                        <v-card
                          flat
                          tile
                        >
                          <div class="playArea">
                            <v-row style="margin:0;">
                              <v-col tile cols="2" class="playArea-tile" align="center">
                                <h3>Player</h3>
                              </v-col>
                              <v-col tile cols="2" class="playArea-tile tile" align="center">
                                <h3>Tie</h3>
                              </v-col>
                              <v-col tile cols="2" class="playArea-tile banker" align="center">
                                <h3>Banker</h3>
                              </v-col>
                              <v-col tile cols="2" class="playArea-tile" align="center">
                                <h3>P.Pair</h3>
                              </v-col>
                              <v-col tile cols="2" class="playArea-tile tile" align="center">
                                <h3>Lucky Six</h3>
                              </v-col>
                              <v-col tile cols="2" class="playArea-tile banker" align="center">
                                <h3>B.Pair</h3>
                              </v-col>
                            </v-row>
                          </div>
                        </v-card>
                      </v-tab-item>

                      <v-tab-item :value="'tab-' + 2">
                        <v-card
                          flat
                          tile
                        >
                          <div class="playArea">
                            <v-row style="margin:0;">
                              <v-col tile cols="2" class="playArea-tile" align="center">
                                <h3>Player</h3>
                              </v-col>
                              <v-col tile cols="2" class="playArea-tile tile" align="center">
                                <h3> Tie</h3>
                              </v-col>
                              <v-col tile cols="2" class="playArea-tile banker" align="center">
                                <h3> Banker</h3>
                              </v-col>
                              <v-col tile cols="2" class="playArea-tile" align="center">
                                <h3>P.Pair</h3>
                              </v-col>
                              <v-col tile cols="2" class="playArea-tile tile" align="center">
                                <h3>Lucky Six</h3>
                              </v-col>
                              <v-col tile cols="2" class="playArea-tile banker" align="center">
                                <h3>B.Pair</h3>
                              </v-col>
                            </v-row>
                          </div>
                        </v-card>
                      </v-tab-item>

                      <v-tab-item :value="'tab-' + 3">
                        <v-card
                          flat
                          tile
                        >
                          <div class="playArea">
                            <v-row style="margin:0;">
                              <v-col tile cols="4" class="playArea-tile-last" align="center">
                                <h2>Player</h2>
                              </v-col>
                              <v-col tile cols="4" class="playArea-tile-last tile" align="center">
                                <h2> Tie</h2>
                              </v-col>
                              <v-col tile cols="4" class="playArea-tile-last banker" align="center">
                                <h2> Banker</h2>
                              </v-col>
                            </v-row>
                          </div>
                        </v-card>
                      </v-tab-item>
                    </v-tabs>
                  </v-card>
                </v-col>

                <v-col cols="6" style=" height:100%;">
                  <v-card class="ml-1">
                    <div v-for="project in projects"  :key="project.name" class="dashboard-card " flat>
                      <v-layout>
                        <v-flex mt-3 mb-2 ml-5>
                          <span class="white--text">Seri {{ project.seri }}</span>
                        </v-flex>
                        <v-flex mt-3 mb-2>
                          <span class="red--text">B</span>

                          <span class="white--text">{{ project.bb }}</span>
                        </v-flex>
                        <v-flex mt-3 mb-2>
                          <span class="blue--text ">P</span>
                          <span class="white--text">{{ project.pp }}</span>
                        </v-flex>
                        <v-flex mt-3 mb-2>
                          <div class="white--text">
                            <span class="green--text">T</span>
                            {{ project.tt }}
                          </div>
                        </v-flex>

                        <v-spacer /><v-spacer />
                        <v-flex mt-2 mb-1>
                          <v-btn @click="show=true">
                            <v-icon medium color="#787878">
                              favorite
                            </v-icon>
                          </v-btn>
                        </v-flex>
                        <v-flex mt-2 mb-1>
                          <v-icon medium color="#c3a475">
                            switch_video
                          </v-icon>
                        </v-flex>

                        <v-flex>
                          <div class="white--text" style="background:#196260; height:44px;">
                            <div> {{ project.status }} </div>
                          </div>
                        </v-flex>
                      </v-layout>
                    </div>

                    <v-img
                      height="140"
                    />

                    <v-tabs
                      v-model="tab"
                      class="tabform"
                      background-color="deep-purple accent-4"
                      height="25"
                      centered
                      dark
                      icons-and-text
                    >
                      <v-tabs-slider />

                      <v-tab href="#tab-1">
                        Baccarat
                      </v-tab>

                      <v-tab href="#tab-2">
                        No Commission
                      </v-tab>

                      <v-tab href="#tab-3">
                        Cow Cow ?
                      </v-tab>

                      <v-tab-item :value="'tab-' + 1">
                        <v-card
                          flat
                          tile
                        >
                          <div class="playArea">
                            <v-row style="margin:0;">
                              <v-col tile cols="2" class="playArea-tile" align="center">
                                <h3>Player</h3>
                              </v-col>
                              <v-col tile cols="2" class="playArea-tile tile" align="center">
                                <h3>Tie</h3>
                              </v-col>
                              <v-col tile cols="2" class="playArea-tile banker" align="center">
                                <h3>Banker</h3>
                              </v-col>
                              <v-col tile cols="2" class="playArea-tile" align="center">
                                <h3>P.Pair</h3>
                              </v-col>
                              <v-col tile cols="2" class="playArea-tile tile" align="center">
                                <h3>Lucky Six</h3>
                              </v-col>
                              <v-col tile cols="2" class="playArea-tile banker" align="center">
                                <h3>B.Pair</h3>
                              </v-col>
                            </v-row>
                          </div>
                        </v-card>
                      </v-tab-item>

                      <v-tab-item :value="'tab-' + 2">
                        <v-card
                          flat
                          tile
                        >
                          <div class="playArea">
                            <v-row style="margin:0;">
                              <v-col tile cols="2" class="playArea-tile" align="center">
                                <h3>Player</h3>
                              </v-col>
                              <v-col tile cols="2" class="playArea-tile tile" align="center">
                                <h3> Tie</h3>
                              </v-col>
                              <v-col tile cols="2" class="playArea-tile banker" align="center">
                                <h3> Banker</h3>
                              </v-col>
                              <v-col tile cols="2" class="playArea-tile" align="center">
                                <h3>P.Pair</h3>
                              </v-col>
                              <v-col tile cols="2" class="playArea-tile tile" align="center">
                                <h3>Lucky Six</h3>
                              </v-col>
                              <v-col tile cols="2" class="playArea-tile banker" align="center">
                                <h3>B.Pair</h3>
                              </v-col>
                            </v-row>
                          </div>
                        </v-card>
                      </v-tab-item>

                      <v-tab-item :value="'tab-' + 3">
                        <v-card
                          flat
                          tile
                        >
                          <div class="playArea">
                            <v-row style="margin:0;">
                              <v-col tile cols="4" class="playArea-tile-last" align="center">
                                <h2>Player</h2>
                              </v-col>
                              <v-col tile cols="4" class="playArea-tile-last tile" align="center">
                                <h2> Tie</h2>
                              </v-col>
                              <v-col tile cols="4" class="playArea-tile-last banker" align="center">
                                <h2> Banker</h2>
                              </v-col>
                            </v-row>
                          </div>
                        </v-card>
                      </v-tab-item>
                    </v-tabs>
                  </v-card>

                  <v-card class="ml-1 mt-13">
                    <div v-for="project in projects"  :key="project.name" class="dashboard-card " flat>
                      <v-layout>
                        <v-flex mt-3 mb-2 ml-5>
                          <span class="white--text">Seri {{ project.seri }}</span>
                        </v-flex>
                        <v-flex mt-3 mb-2>
                          <span class="red--text">B</span>

                          <span class="white--text">{{ project.bb }}</span>
                        </v-flex>
                        <v-flex mt-3 mb-2>
                          <span class="blue--text ">P</span>
                          <span class="white--text">{{ project.pp }}</span>
                        </v-flex>
                        <v-flex mt-3 mb-2>
                          <div class="white--text">
                            <span class="green--text">T</span>
                            {{ project.tt }}
                          </div>
                        </v-flex>

                        <v-spacer /><v-spacer />
                        <v-flex mt-2 mb-1>
                          <v-icon medium color="#787878">
                            favorite
                          </v-icon>
                        </v-flex>
                        <v-flex mt-2 mb-1>
                          <v-icon medium color="#c3a475">
                            switch_video
                          </v-icon>
                        </v-flex>

                        <v-flex>
                          <div class="white--text" style="background:#196260; height:44px;">
                            <div> {{ project.status }} </div>
                          </div>
                        </v-flex>
                      </v-layout>
                    </div>

                    <v-img
                      height="140"
                    />

                    <v-tabs
                      v-model="tab"
                      class="tabform"
                      background-color="deep-purple accent-4"
                      height="25"
                      centered
                      dark
                      icons-and-text
                    >
                      <v-tabs-slider />

                      <v-tab href="#tab-1">
                        Baccarat
                      </v-tab>

                      <v-tab href="#tab-2">
                        No Commission
                      </v-tab>

                      <v-tab href="#tab-3">
                        Cow Cow ?
                      </v-tab>

                      <v-tab-item :value="'tab-' + 1">
                        <v-card
                          flat
                          tile
                        >
                          <div class="playArea">
                            <v-row style="margin:0;">
                              <v-col tile cols="2" class="playArea-tile" align="center">
                                <h3>Player</h3>
                              </v-col>
                              <v-col tile cols="2" class="playArea-tile tile" align="center">
                                <h3>Tie</h3>
                              </v-col>
                              <v-col tile cols="2" class="playArea-tile banker" align="center">
                                <h3>Banker</h3>
                              </v-col>
                              <v-col tile cols="2" class="playArea-tile" align="center">
                                <h3>P.Pair</h3>
                              </v-col>
                              <v-col tile cols="2" class="playArea-tile tile" align="center">
                                <h3>Lucky Six</h3>
                              </v-col>
                              <v-col tile cols="2" class="playArea-tile banker" align="center">
                                <h3>B.Pair</h3>
                              </v-col>
                            </v-row>
                          </div>
                        </v-card>
                      </v-tab-item>

                      <v-tab-item :value="'tab-' + 2">
                        <v-card
                          flat
                          tile
                        >
                          <div class="playArea">
                            <v-row style="margin:0;">
                              <v-col tile cols="2" class="playArea-tile" align="center">
                                <h3>Player</h3>
                              </v-col>
                              <v-col tile cols="2" class="playArea-tile tile" align="center">
                                <h3> Tie</h3>
                              </v-col>
                              <v-col tile cols="2" class="playArea-tile banker" align="center">
                                <h3> Banker</h3>
                              </v-col>
                              <v-col tile cols="2" class="playArea-tile" align="center">
                                <h3>P.Pair</h3>
                              </v-col>
                              <v-col tile cols="2" class="playArea-tile tile" align="center">
                                <h3>Lucky Six</h3>
                              </v-col>
                              <v-col tile cols="2" class="playArea-tile banker" align="center">
                                <h3>B.Pair</h3>
                              </v-col>
                            </v-row>
                          </div>
                        </v-card>
                      </v-tab-item>

                      <v-tab-item :value="'tab-' + 3">
                        <v-card
                          flat
                          tile
                        >
                          <div class="playArea">
                            <v-row style="margin:0;">
                              <v-col tile cols="4" class="playArea-tile-last" align="center">
                                <h2>Player</h2>
                              </v-col>
                              <v-col tile cols="4" class="playArea-tile-last tile" align="center">
                                <h2> Tie</h2>
                              </v-col>
                              <v-col tile cols="4" class="playArea-tile-last banker" align="center">
                                <h2> Banker</h2>
                              </v-col>
                            </v-row>
                          </div>
                        </v-card>
                      </v-tab-item>
                    </v-tabs>
                  </v-card>

                  <v-card class="ml-1 mt-13">
                    <div v-for="project in projects" :key="project.name" class="dashboard-card " flat>
                      <v-layout>
                        <v-flex mt-3 mb-2 ml-5>
                          <span class="white--text">Seri {{ project.seri }}</span>
                        </v-flex>
                        <v-flex mt-3 mb-2>
                          <span class="red--text">B</span>
                          <span class="white--text">{{ project.bb }}</span>
                        </v-flex>
                        <v-flex mt-3 mb-2>
                          <span class="blue--text ">P</span>
                          <span class="white--text">{{ project.pp }}</span>
                        </v-flex>
                        <v-flex mt-3 mb-2>
                          <div class="white--text">
                            <span class="green--text">T</span>
                            {{ project.tt }}
                          </div>
                        </v-flex>

                        <v-spacer /><v-spacer />
                        <v-flex mt-2 mb-1>
                          <v-icon medium color="#787878">
                            favorite
                          </v-icon>
                        </v-flex>
                        <v-flex mt-2 mb-1>
                          <v-icon medium color="#c3a475">
                            switch_video
                          </v-icon>
                        </v-flex>

                        <v-flex>
                          <div class="white--text" style="background:#196260; height:44px;">
                            <div> {{ project.status }} </div>
                          </div>
                        </v-flex>
                      </v-layout>
                    </div>

                    <v-img
                      height="140"
                    />

                    <v-tabs
                      v-model="tab"
                      class="tabform"
                      background-color="deep-purple accent-4"
                      height="25"
                      centered
                      dark
                      icons-and-text
                    >
                      <v-tabs-slider />

                      <v-tab href="#tab-1">
                        Baccarat
                      </v-tab>

                      <v-tab href="#tab-2">
                        No Commission
                      </v-tab>

                      <v-tab href="#tab-3">
                        Cow Cow ?
                      </v-tab>

                      <v-tab-item :value="'tab-' + 1">
                        <v-card
                          flat
                          tile
                        >
                          <div class="playArea">
                            <v-row style="margin:0;">
                              <v-col tile cols="2" class="playArea-tile" align="center">
                                <h3>Player</h3>
                              </v-col>
                              <v-col tile cols="2" class="playArea-tile tile" align="center">
                                <h3>Tie</h3>
                              </v-col>
                              <v-col tile cols="2" class="playArea-tile banker" align="center">
                                <h3>Banker</h3>
                              </v-col>
                              <v-col tile cols="2" class="playArea-tile" align="center">
                                <h3>P.Pair</h3>
                              </v-col>
                              <v-col tile cols="2" class="playArea-tile tile" align="center">
                                <h3>Lucky Six</h3>
                              </v-col>
                              <v-col tile cols="2" class="playArea-tile banker" align="center">
                                <h3>B.Pair</h3>
                              </v-col>
                            </v-row>
                          </div>
                        </v-card>
                      </v-tab-item>

                      <v-tab-item :value="'tab-' + 2">
                        <v-card
                          flat
                          tile
                        >
                          <div class="playArea">
                            <v-row style="margin:0;">
                              <v-col tile cols="2" class="playArea-tile" align="center">
                                <h3>Player</h3>
                              </v-col>
                              <v-col tile cols="2" class="playArea-tile tile" align="center">
                                <h3> Tie</h3>
                              </v-col>
                              <v-col tile cols="2" class="playArea-tile banker" align="center">
                                <h3> Banker</h3>
                              </v-col>
                              <v-col tile cols="2" class="playArea-tile" align="center">
                                <h3>P.Pair</h3>
                              </v-col>
                              <v-col tile cols="2" class="playArea-tile tile" align="center">
                                <h3>Lucky Six</h3>
                              </v-col>
                              <v-col tile cols="2" class="playArea-tile banker" align="center">
                                <h3>B.Pair</h3>
                              </v-col>
                            </v-row>
                          </div>
                        </v-card>
                      </v-tab-item>

                      <v-tab-item :value="'tab-' + 3">
                        <v-card
                          flat
                          tile
                        >
                          <div class="playArea">
                            <v-row style="margin:0;">
                              <v-col tile cols="4" class="playArea-tile-last" align="center">
                                <h2>Player</h2>
                              </v-col>
                              <v-col tile cols="4" class="playArea-tile-last tile" align="center">
                                <h2> Tie</h2>
                              </v-col>
                              <v-col tile cols="4" class="playArea-tile-last banker" align="center">
                                <h2> Banker</h2>
                              </v-col>
                            </v-row>
                          </div>
                        </v-card>
                      </v-tab-item>
                    </v-tabs>
                  </v-card>
                </v-col>
              </v-row>
            </v-card>
          </v-tab-item>
        </v-tabs>
      </v-col>
      <!-- End Main First Col -->

      <!-- Main Second Col -->
      <v-col cols="4" style="padding:0;">
        <div class="playTable" />
        <!-- start slite -->
        <div style="width:100%">
          <v-sheet
            class="mx-auto "
            elevation="8"
          >
            <v-slide-group>
              <v-row style="background:#382b1c; height:13vh;">
                <v-row style="width:100%;">
                  <v-slide-item

                    v-slot:default="{ active, toggle }"
                  >
                    <v-card
                      :color="active ? '#766143' : '#0e0a06'"
                      class="ma-4 ml-13"
                      height="30"
                      width="80"
                      align="center"
                      @click="toggle"
                    >
                      <span class="white--text pa-5">C01</span>
                    </v-card>
                  </v-slide-item>

                  <v-slide-item

                    v-slot:default="{ active, toggle }"
                  >
                    <v-card
                      :color="active ? '#766143' : '#0e0a06'"
                      class="ma-4"
                      height="30"
                      width="80"
                      align="center"
                      @click="toggle"
                    >
                      <span class="white--text ">C02</span>
                    </v-card>
                  </v-slide-item>

                  <v-slide-item

                    v-slot:default="{ active, toggle }"
                  >
                    <v-card
                      :color="active ? '#766143' : '#0e0a06'"
                      class="ma-4"
                      height="30"
                      width="80"
                      align="center"
                      @click="toggle"
                    >
                      <span class="white--text ">C03</span>
                    </v-card>
                  </v-slide-item>

                  <v-slide-item

                    v-slot:default="{ active, toggle }"
                  >
                    <v-card
                      :color="active ? '#766143' : '#0e0a06'"
                      class="ma-4"
                      height="30"
                      width="80"
                      align="center"
                      @click="toggle"
                    >
                      <span class="white--text ">C04</span>
                    </v-card>
                  </v-slide-item>

                  <v-slide-item

                    v-slot:default="{ active, toggle }"
                  >
                    <v-card
                      :color="active ? '#766143' : '#0e0a06'"
                      class="ma-4 ml-10"
                      height="30"
                      width="80"
                      align="center"
                      @click="toggle"
                    >
                      <span class="white--text ">P03</span>
                    </v-card>
                  </v-slide-item>

                  <v-slide-item

                    v-slot:default="{ active, toggle }"
                  >
                    <v-card
                      :color="active ? '#766143' : '#0e0a06'"
                      class="ma-4"
                      height="30"
                      width="80"
                      align="center"
                      @click="toggle"
                    >
                      <span class="white--text ">P04</span>
                    </v-card>
                  </v-slide-item>

                  <v-slide-item

                    v-slot:default="{ active, toggle }"
                  >
                    <v-card
                      :color="active ? '#766143' : '#0e0a06'"
                      class="ma-4"
                      height="30"
                      width="80"
                      align="center"
                      @click="toggle"
                    >
                      <span class="white--text ">P05</span>
                    </v-card>
                  </v-slide-item>

                  <v-slide-item

                    v-slot:default="{ active, toggle }"
                  >
                    <v-card
                      :color="active ? '#766143' : '#0e0a06'"
                      class="ma-4 m-15"
                      height="30"
                      width="80"
                      align="center"
                      @click="toggle"
                    >
                      <span class="white--text ">P06</span>
                    </v-card>
                  </v-slide-item>

                  <v-slide-item

                    v-slot:default="{ active, toggle }"
                  >
                    <v-card
                      :color="active ? '#766143' : '#0e0a06'"
                      class="ma-4 ml-10"
                      height="30"
                      width="80"
                      align="center"
                      @click="toggle"
                    >
                      <span class="white--text ">A03</span>
                    </v-card>
                  </v-slide-item>

                  <v-slide-item

                    v-slot:default="{ active, toggle }"
                  >
                    <v-card
                      :color="active ? '#766143' : '#0e0a06'"
                      class="ma-4"
                      height="30"
                      width="80"
                      align="center"
                      @click="toggle"
                    >
                      <span class="white--text ">A04</span>
                    </v-card>
                  </v-slide-item>
                  <v-slide-item

                    v-slot:default="{ active, toggle }"
                  >
                    <v-card
                      :color="active ? '#766143' : '#0e0a06'"
                      class="ma-4"
                      height="30"
                      width="80"
                      align="center"
                      @click="toggle"
                    >
                      <span class="white--text ">A05</span>
                    </v-card>
                  </v-slide-item>
                  <v-slide-item

                    v-slot:default="{ active, toggle }"
                  >
                    <v-card
                      :color="active ? '#766143' : '#0e0a06'"
                      class="ma-4"
                      height="30"
                      width="80"
                      align="center"
                      @click="toggle"
                    >
                      <span class="white--text ">A06</span>
                    </v-card>
                  </v-slide-item>
                  <v-slide-item

                    v-slot:default="{ active, toggle }"
                  >
                    <v-card
                      :color="active ? '#766143' : '#0e0a06'"
                      class="ma-4 ml-10"
                      height="30"
                      width="80"
                      align="center"
                      @click="toggle"
                    >
                      <span class="white--text ">A11</span>
                    </v-card>
                  </v-slide-item>
                  <v-slide-item

                    v-slot:default="{ active, toggle }"
                  >
                    <v-card
                      :color="active ? '#766143' : '#0e0a06'"
                      class="ma-4 "
                      height="30"
                      width="80"
                      align="center"
                      @click="toggle"
                    >
                      <span class="white--text ">A12</span>
                    </v-card>
                  </v-slide-item>
                  <v-slide-item

                    v-slot:default="{ active, toggle }"
                  >
                    <v-card
                      :color="active ? '#766143' : '#0e0a06'"
                      class="ma-4 "
                      height="30"
                      width="80"
                      align="center"
                      @click="toggle"
                    >
                      <span class="white--text ">CD &T</span>
                    </v-card>
                  </v-slide-item>
                  <v-slide-item

                    v-slot:default="{ active, toggle }"
                  >
                    <v-card
                      :color="active ? '#766143' : '#0e0a06'"
                      class="ma-4 "
                      height="30"
                      width="80"
                      align="center"
                      @click="toggle"
                    >
                      <span class="white--text ">P D&T</span>
                    </v-card>
                  </v-slide-item>
                </v-row>
                <v-row>
                  <v-slide-item

                    v-slot:default="{ active, toggle }"
                  >
                    <v-card
                      :color="active ? '#766143' : '#0e0a06'"
                      class="ma-4 ml-13"
                      height="30"
                      width="80"
                      align="center"
                      @click="toggle"
                    >
                      <span class="white--text ">C05</span>
                    </v-card>
                  </v-slide-item>

                  <v-slide-item

                    v-slot:default="{ active, toggle }"
                  >
                    <v-card
                      :color="active ? '#766143' : '#0e0a06'"
                      class="ma-4"
                      height="30"
                      width="80"
                      align="center"
                      @click="toggle"
                    >
                      <span class="white--text ">C06</span>
                    </v-card>
                  </v-slide-item>

                  <v-slide-item

                    v-slot:default="{ active, toggle }"
                  >
                    <v-card
                      :color="active ? '#766143' : '#0e0a06'"
                      class="ma-4"
                      height="30"
                      width="80"
                      align="center"
                      @click="toggle"
                    >
                      <span class="white--text ">P01</span>
                    </v-card>
                  </v-slide-item>

                  <v-slide-item

                    v-slot:default="{ active, toggle }"
                  >
                    <v-card
                      :color="active ? '#766143' : '#0e0a06'"
                      class="ma-4"
                      height="30"
                      width="80"
                      align="center"
                      @click="toggle"
                    >
                      <span class="white--text ">P02</span>
                    </v-card>
                  </v-slide-item>

                  <v-slide-item

                    v-slot:default="{ active, toggle }"
                  >
                    <v-card
                      :color="active ? '#766143' : '#0e0a06'"
                      class="ma-4 ml-10"
                      height="30"
                      width="80"
                      align="center"
                      @click="toggle"
                    >
                      <span class="white--text ">P07</span>
                    </v-card>
                  </v-slide-item>

                  <v-slide-item

                    v-slot:default="{ active, toggle }"
                  >
                    <v-card
                      :color="active ? '#766143' : '#0e0a06'"
                      class="ma-4"
                      height="30"
                      width="80"
                      align="center"
                      @click="toggle"
                    >
                      <span class="white--text ">P08</span>
                    </v-card>
                  </v-slide-item>

                  <v-slide-item

                    v-slot:default="{ active, toggle }"
                  >
                    <v-card
                      :color="active ? '#766143' : '#0e0a06'"
                      class="ma-4"
                      height="30"
                      width="80"
                      align="center"
                      @click="toggle"
                    >
                      <span class="white--text ">A01</span>
                    </v-card>
                  </v-slide-item>

                  <v-slide-item

                    v-slot:default="{ active, toggle }"
                  >
                    <v-card
                      :color="active ? '#766143' : '#0e0a06'"
                      class="ma-4"
                      height="30"
                      width="80"
                      align="center"
                      @click="toggle"
                    >
                      <span class="white--text ">A02</span>
                    </v-card>
                  </v-slide-item>

                  <v-slide-item

                    v-slot:default="{ active, toggle }"
                  >
                    <v-card
                      :color="active ? '#766143' : '#0e0a06'"
                      class="ma-4 ml-10"
                      height="30"
                      width="80"
                      align="center"
                      @click="toggle"
                    >
                      <span class="white--text ">A07</span>
                    </v-card>
                  </v-slide-item>
                  <v-slide-item

                    v-slot:default="{ active, toggle }"
                  >
                    <v-card
                      :color="active ? '#766143' : '#0e0a06'"
                      class="ma-4 ml-"
                      height="30"
                      width="80"
                      align="center"
                      @click="toggle"
                    >
                      <span class="white--text ">A08</span>
                    </v-card>
                  </v-slide-item>
                  <v-slide-item

                    v-slot:default="{ active, toggle }"
                  >
                    <v-card
                      :color="active ? '#766143' : '#0e0a06'"
                      class="ma-4"
                      height="30"
                      width="80"
                      align="center"
                      @click="toggle"
                    >
                      <span class="white--text ">A09</span>
                    </v-card>
                  </v-slide-item>
                  <v-slide-item

                    v-slot:default="{ active, toggle }"
                  >
                    <v-card
                      :color="active ? '#766143' : '#0e0a06'"
                      class="ma-4"
                      height="30"
                      width="80"
                      align="center"
                      @click="toggle"
                    >
                      <span class="white--text ">A10</span>
                    </v-card>
                  </v-slide-item>
                </v-row>
              </v-row>
            </v-slide-group>
          </v-sheet>
        </div>
        <!-- End slite -->

        <v-row no-gutters>
          <span class="subtitle-2 text-center pa-4  white--text " style="background:#876f4d; width:100%"><h3>Bet Information</h3></span>
        </v-row>

        <v-data-table
          :headers="headers"
          :items="desserts"
          :items-per-page="8"
          disable-sort
          dark
          dense

          item-key="name"
          class="elevation-1"
          :footer-props="{
            showFirstLastPage: true,

            firstIcon: 'mdi-arrow-collapse-left',
            lastIcon: 'mdi-arrow-collapse-right',
            prevIcon: 'mdi-minus',
            nextIcon: 'mdi-plus'
          }"
        />

        <div class="changepicture" flat>
          <v-layout>
            <v-flex class="ml-3 mt-4">
              <span style="color:#776345; font-size:18px;">Bet-Limit</span><br>
              <span class="white--text"> {{ changenumbers[betLimit].bet_limit }} </span>
            </v-flex>
            <v-flex class="mr-2 mt-4">
              <span style="color:#776345; font-size:18px;">Banker</span><br>
              <span class="white--text"> {{ changenumbers[betLimit].banker }} </span>
            </v-flex>
            <v-flex class="mr-2 mt-4">
              <span style="color:#776345; font-size:18px;">Player</span><br>
              <span class="white--text"> {{ changenumbers[betLimit].player }} </span>
            </v-flex>
            <v-flex class="mr-2 mt-4">
              <span style="color:#776345; font-size:18px;">Tie</span><br>
              <span class="white--text"> {{ changenumbers[betLimit].tie }} </span>
            </v-flex>
            <v-flex class="mr-2 mt-4">
              <span style="color:#776345; font-size:18px;">Pair</span><br>
              <span class="white--text"> {{ changenumbers[betLimit].pair }} </span>
            </v-flex>
            <v-flex class=" mt-5 mr-4">
              <div class="d-flex justify-center">
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
                      icon
                      class="pa-2 ma-1"
                      v-bind="attrs"
                      v-on="on"
                    >
                      <v-btn color="#756043" class="white--text ">
                        Change
                      </v-btn>
                    </v-btn>
                  </template>

                  <v-card>
                    <v-list
                      dark

                      color="rgba(12, 10, 6, 0.8)"
                    >
                      <v-radio-group v-model="betLimit" :mandatory="false">
                        <v-radio label="10 - 1,000" value="10-1000" on-icon="done" off-icon="" />
                        <v-radio label="50 - 5,000" value="50-5000" on-icon="done" off-icon="" />
                        <v-radio label="100 - 5,000" value="100-5000" on-icon="done" off-icon="" />
                        <v-radio label="100 - 10K" value="100-10k" on-icon="done" off-icon="" />
                        <v-radio label="200 - 20K" value="200-20k" on-icon="done" off-icon="" />
                      </v-radio-group>
                    </v-list>
                  </v-card>
                </v-menu>
              </div>
            </v-flex>
          </v-layout>

          <v-layout style="background:#503b28; width:100%">
            <v-flex class=" mt-3">
              <v-btn

                color="blue-grey"
                class="ma-2 white--text"
                @click="loader = 'loading3'"
              >
                <v-icon left dark>
                  monetization_on
                </v-icon>
                Custom
              </v-btn>
            </v-flex>
            <v-flex class=" mt-4">
              <img src="/Coin1.jpg" style="width:3.2vw;">
            </v-flex>
            <v-flex class=" mt-4">
              <img src="/Coin2.jpg" style="width:3.2vw;">
            </v-flex>
            <v-flex class=" mt-4">
              <img src="/Coin3.jpg" style="width:3.2vw;">
            </v-flex>
            <v-flex class=" mt-4">
              <img src="/Coin4.jpg" style="width:3.2vw;">
            </v-flex>
            <v-flex class=" mt-4">
              <img src="/Coin5.jpg" style="width:3.2vw;">
            </v-flex>
          </v-layout>
        </div>
      </v-col>
      <!-- End Main Second Col -->
    </v-row>
  </v-container>
</template>

<script>

export default {
  data () {
    return {
      betLimit: '10-1000',
      projects: [
        { seri: 'C01', name: 'SIKEN', user: '123300', bb: '123', pp: '2300', tt: '2020', status: 'Dealing' },
        { seri: 'C02', name: 'HONGLONG', user: '5200', bb: '123', pp: '20', tt: '2020', status: 'Waiting' },
        { seri: 'C03', name: 'KUNHEAR', user: '2200', bb: '123', pp: '2320', tt: '2020', status: '12' },
        { seri: 'C04', name: 'CHEA_C', user: '2200', bb: '2200', pp: '2300', tt: '2020', status: 'Player Win' },
        { seri: 'C05', name: 'MAkara', user: '2200', bb: '200', pp: '2320', tt: '2020', status: 'Shuffling' },
        { seri: 'C06', name: 'HEAT_S', user: '2200', bb: '200', pp: '200', tt: '2020', status: 'Waiting' },
        { seri: 'C07', name: 'SVEYNAR', user: '2200', bb: '1232', pp: '23220', tt: '2020', status: '12' },
        { seri: 'C08', name: 'CHANDA', user: '2200', bb: '12300', pp: '23', tt: '2020', status: 'Shuffling' },
        { seri: 'C09', name: 'YORNNEN', user: '2200', bb: '1200', pp: '23200', tt: '2020', status: 'Dealing' },
        { seri: 'C10', name: 'PHALLA', user: '2200', bb: '1200', pp: '23200', tt: '2020', status: 'Waiting' }

      ],
      changenumbers: {
        '10-1000': { bet_limit: '10 - 1,000', banker: '1,000', player: '1,000', tie: '125', pair: '90' },
        '50-5000': { bet_limit: '50 - 5,000', banker: '5,000', player: '5,000', tie: '625', pair: '454' },
        '100-5000': { bet_limit: '100 - 5,000', banker: '5,000', player: '5,000', tie: '625', pair: '454' },
        '100-10k': { bet_limit: '100 - 10K', banker: '10,000', player: '10,000', tie: '1250', pair: '909' },
        '200-20k': { bet_limit: '200 - 20K', banker: '20,000', player: '20,000', tie: '2500', pair: '1818' }
      },
      favoriteshow: false,
      doneresult: false,
      headers: [
        {
          text: 'Table',
          align: 'start'

        },
        { text: 'Bet Content', value: 'category' },
        { text: 'Bet Amount', value: 'bet_amount' },
        { text: 'Win/Lose', value: 'winlose' },
        { text: 'Remark', value: 'remark' }
      ],
      desserts: [
        {
          name: '',
          category: '',
          bet_amount: ''

        },
        {
          name: '',
          category: ''
        },
        {
          name: '',
          category: ''
        },
        {
          name: '',
          category: ''
        },
        {
          name: '',
          category: ''
        },
        {
          name: '',
          category: ''
        },
        {
          name: '',
          category: ''
        },

        {
          name: '',
          category: ''
        }
      ]

    }
  }
}
</script>

<style scoped>
.dashboard-card {
    background:#120e09;
    height: 44px;
    margin-top: 2px;

}
.playArea-tile{
    border:1px solid rgba(255,255,255, 0.3);
    color:#3470A9;
    height: 64px;

}
.playArea-tile-last{
  border:1px solid rgba(255,255,255, 0.3);
  color:#3470A9;
  height: 64px;
}

.banker{
  color:red
}

.tie{
  color:#0C930A;
}

.tile{
  color:green
}

.playArea{
    background-color:rgb(3, 62, 29);
    height:64px;
}

.playTable{
    background-image: url("/table.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 300px;
    margin: 0;
    padding: 0;
}
.changepicture {
  background-color: #231b12;
  height: 9vh;
  width: 100%;
  margin-top:0.1vh;
}

.tabform{
  height: 42px;
}

</style>
