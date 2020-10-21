<template>
  <v-flex md3>
    <!-- Start card -->
    <v-card class="ma-1" elevation="24" raised>
      <v-row no-gutters class="cardbar1 text-size" align="center">
        <v-flex class="align-center ml-1">
          <span>Seri {{ project.seri }}</span>
        </v-flex>
        <v-spacer />
        <v-btn text icon medium color="#787878" @click="addFav">
          <v-icon :color="project.isFavourite?'red':''">
            favorite
          </v-icon>
        </v-btn>
      </v-row>

      <v-row style="height:30px;" align="center" no-gutters class="text-size">
        <v-flex>
          <span class="red--text">庄</span>

          <span>{{ project.bb }}</span>
        </v-flex>
        <v-flex>
          <span class="blue--text">圓</span>
          <span>{{ project.pp }}</span>
        </v-flex>
        <v-flex>
          <div>
            <span class="green--text">和</span>
            {{ project.tt }}
          </div>
        </v-flex>
        <v-flex>
          <v-icon medium color="#c3a475">
            switch_video
          </v-icon>
        </v-flex>

        <div class="d-flex justify-center align-center black--text pa-2" style="background:#c6c6c9; height:100%;width:3.8vw">
          <span> {{ project.status }}</span>
        </div>
      </v-row>

      <v-img src="/icon/road_small.png">
        <div class="d-flex align-content-start flex-wrap flex-row" style="height:100%;width:100%;">
          <HoverPreviewResult v-for="n in 12" :key="n">
            <template v-slot:item="slotProps">
              <v-img
                src="/icon/bluec.png"
                max-height="0.61vw"
                max-width="0.61vw"
                v-bind="slotProps.activate.attrs"
                v-on="slotProps.activate.on"
              />
            </template>
          </HoverPreviewResult>
        </div>
        <div
          v-if="project.seri=='C03'"
          class="result-cards"
        >
          <v-img
            src="/smallcard/c9.png"
            height="2vw"
            width="2vw"
            contain
            style="position:absolute;left:0;top:10%; "
          />
          <v-img
            src="/smallcard/c9.png"
            height="2vw"
            width="2vw"
            contain
            style="position:absolute;left:12%;top:10%; "
          />
          <v-img
            src="/smallcard/c9.png"
            height="2vw"
            width="2vw"
            contain
            style="position:absolute;left:24%;top:10%; "
          />

          <div class="winner d-flex justify-center align-center" :style="{'background-color':'blue'}">
            <span>Banker Win</span>
          </div>
          <v-img
            src="/smallcard/c9.png"
            height="2vw"
            width="2vw"
            contain
            style="position:absolute;right:0;top:10%; "
          />
          <v-img
            src="/smallcard/c9.png"
            height="2vw"
            width="2vw"
            contain
            style="position:absolute;right:12%;top:10%; "
          />
          <v-img
            src="/smallcard/c9.png"
            height="2vw"
            width="2vw"
            contain
            style="position:absolute;right:24%;top:10%; "
          />
          <div class="p0 d-flex justify-center align-center">
            <span>P 0</span>
          </div>
          <div class="b0 d-flex justify-center align-center">
            <span>B 0</span>
          </div>
        </div>
      </v-img>

      <v-tabs
        background-color="#404040"
        height="3vh"
        active-class="tabActive black--text"
        dark
        hide-slider
        center-active
        show-arrows
      >
        <v-tab href="#tab-1" style="color:#b5a182; font-size:0.5vw;width:33.33%">
          Bacc
        </v-tab>

        <v-tab href="#tab-2" style="color:#b5a182; font-size:0.5vw;width:33.33%">
          Com
        </v-tab>

        <v-tab href="#tab-3" style="color:#b5a182; font-size:0.5vw;width:33.33%">
          <span> Cow <v-icon size="13">help</v-icon> </span>
        </v-tab>

        <v-tab-item :value="'tab-' + 1">
          <v-card
            flat
            tile
            class="text-size"
          >
            <div class="playArea">
              <v-row style="margin:0;">
                <v-col tile cols="4" class="playArea-tile" align="center">
                  <h3>Player</h3>
                </v-col>
                <v-col tile cols="4" class="playArea-tile tile" align="center">
                  <h3> Tie</h3>
                </v-col>
                <v-col tile cols="4" class="playArea-tile banker" align="center">
                  <h3> Banker</h3>
                </v-col>
              </v-row>
              <v-row style="margin:0;">
                <v-col tile cols="4" class="playArea-tile" align="center">
                  <h3>P.Pair</h3>
                </v-col>
                <v-col tile cols="4" class="playArea-tile tile" align="center">
                  <h3>Lucky Six</h3>
                </v-col>
                <v-col tile cols="4" class="playArea-tile banker" align="center">
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
            class="text-size"
          >
            <div class="playArea">
              <v-row style="margin:0;">
                <v-col tile cols="4" class="playArea-tile" align="center">
                  <h3>Player</h3>
                </v-col>
                <v-col tile cols="4" class="playArea-tile tile" align="center">
                  <h3> Tie</h3>
                </v-col>
                <v-col tile cols="4" class="playArea-tile banker" align="center">
                  <h3> Banker</h3>
                </v-col>
              </v-row>
              <v-row style="margin:0;">
                <v-col tile cols="4" class="playArea-tile" align="center">
                  <h3>P.Pair</h3>
                </v-col>
                <v-col tile cols="4" class="playArea-tile tile" align="center">
                  <h3>Lucky Six</h3>
                </v-col>
                <v-col tile cols="4" class="playArea-tile banker" align="center">
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
            class="text-size playAreaLast"
            color="#1C1C1C"
          >
            <v-row no-gutters style="height:100%">
              <div class="playArea-tile-last d-flex justify-center align-center" style="color:#3470A9;">
                <h3>Player</h3>
              </div>
              <div class="playArea-tile-last tile d-flex justify-center align-center">
                <h3> Tie</h3>
              </div>
              <div class="playArea-tile-last banker d-flex justify-center align-center">
                <h3> Banker</h3>
              </div>
            </v-row>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </v-card>
    <!-- End card -->
  </v-flex>
</template>

<script>
export default {
  props: ['project'],
  data () {
    return {

    }
  },
  methods: {
    addFav () {
      // this.isFav=!this.isFav

      this.$emit('addFav')
    }
  }
}
</script>

<style scoped>
.cardbar1{
  background-image:linear-gradient(to right, rgb(255, 255, 255) 12%, #B98F38,#404040);
}
.text-size{
  font-size: 0.75vw;
}
.tabActive{
      background-image:
      linear-gradient(
          rgb(255, 255, 255) 36%,
          #B98F38
        );

    }
.winner {
   width:25%;
   height:40%;
   background-color:red;
   position:absolute;
   top:19%;
   left:38%;
   font-size: 0.6vw;
   color:white
}
.p0{
   width:25%;
   height:30%;
   background-color:blue;
   position:absolute;
   top:66%;
   left:7.3%;
   font-size: 0.6vw;
   color:white
}
.b0{
   width:25%;
   height:30%;
   background-color:red;
   position:absolute;
   top:66%;
   right:7.3%;
   font-size: 0.6vw;
   color:white
}
.result-cards{
  bottom: 0;
height: 100%;
position: absolute;
width: 100%;
background-color: rgba(0,0,0,0.5);
}
.playArea-tile{
    border:1px solid rgba(255,255,255, 0.3);
    color:#3470A9;
    height: 64px;

}
.playArea-tile-last{
  color:#3470A9;
  height: 100%;
  width: 33.3333%;
}

.banker{
  color:red
}

.tie{
  color:#0C930A;
}

.tile{
  color:green;

}

.playArea{
    background-color:rgb(3, 62, 29);
    height:128px;
}
.playAreaLast{
    background-image:url('/icon/niuniu_s.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
    height:128px;
}
</style>
