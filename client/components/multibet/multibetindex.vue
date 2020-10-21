<template>
  <!-- card panel -->
  <v-card class="mt-2 ml-2" width="100%" max-height="23.4vh">
    <v-row no-gutters class="text-size " align="center">
      <v-flex class="align-center ml-1">
        <span class="black--text">Seri {{ project.seri }}</span>
      </v-flex>

      <v-flex class="align-center">
        <span class="red--text">庄</span>
        <span class="black--text mr-3">{{ project.bb }}</span>
      </v-flex>

      <v-flex class="align-center">
        <span class="blue--text">和</span>
        <span class="black--text mr-3">{{ project.pp }}</span>
      </v-flex>

      <v-flex class="align-center">
        <span class="green--text">和</span>
        <span class="black--text mr-3">{{ project.tt }}</span>
      </v-flex>

      <v-flex class="align-center">
        <span class="red--text">庄庄</span>
        <span class="black--text mr-3">{{ project.tt }}</span>
      </v-flex>

      <v-flex>
        <span class="blue--text">和和</span>
        {{ project.tt }}
      </v-flex>

      <v-flex class="align-center">
        <v-btn class="white--text" small color="#c70000">
          庄問路
        </v-btn>
      </v-flex>

      <v-flex class="align-center">
        <v-img
          max-width="1vw"
          max-height="1vw"
          src="/icon/redc.png"
        />
      </v-flex>
      <v-flex>
        <v-avatar color="#c70000" size="15" />
      </v-flex>

      <v-flex class="align-center">
        <span class="font-weight-bold red--text ">/</span>
      </v-flex>

      <v-flex class="align-center">
        <v-btn class="white--text" small color="#2d30b1">
          閒問路
        </v-btn>
      </v-flex>

      <v-flex class="align-center">
        <v-img
          max-width="1vw"
          max-height="1vw"
          src="/icon/bluec.png"
        />
      </v-flex>

      <v-flex class="align-center">
        <v-avatar color="#2d30b1" size="15" />
      </v-flex>

      <v-flex>
        <span class="font-weight-bold" style="color:#2d30b1">/</span>
      </v-flex>

      <v-spacer />

      <v-flex>
        <v-btn text icon medium color="#787878" @click="addFav">
          <v-icon :color="project.isFavourite?'red':''">
            favorite
          </v-icon>
        </v-btn>
      </v-flex>

      <v-flex>
        <v-btn icon medium color="#c3a475">
          <v-icon>switch_video</v-icon>
        </v-btn>
      </v-flex>
      <div class=" d-flex justify-center align-center black--text pa-3" style="background:#c6c6c9;">
        <div> {{ project.status }} </div>
      </div>
    </v-row>

    <v-row no-gutters style="height:19.5vh;background-color:#1C1C1C" class="ma-0 pa-0">
      <div class="showResult">
        <div class="d-flex align-content-start flex-wrap flex-column mt-1" style="height:100%;width:39.5%;">
          <HoverPreviewResult v-for="n in 12" :key="n">
            <template v-slot:item="slotProps">
              <v-img
                src="/icon/cb.png"
                max-height="1.51vw"
                max-width="1.51vw"
                v-bind="slotProps.activate.attrs"
                v-on="slotProps.activate.on"
              />
            </template>
          </HoverPreviewResult>
        </div>
        <div
          v-if="project.seri=='C01'"
          class="result-cards"
        >
          <v-img
            src="/card/c2.png"
            height="5vw"
            width="5vw"
            contain
            style="position:absolute;left:0;top:5%; "
          />
          <v-img
            src="/card/c2.png"
            height="5vw"
            width="5vw"
            contain
            style="position:absolute;left:12%;top:5%; "
          />
          <v-img
            src="/card/c2.png"
            height="5vw"
            width="5vw"
            contain
            style="position:absolute;left:24%;top:5%; "
          />

          <div class="winner d-flex justify-center align-center" :style="{'background-color':'blue'}">
            <span>Banker Win</span>
          </div>
          <v-img
            src="/card/c2.png"
            height="5vw"
            width="5vw"
            contain
            style="position:absolute;right:0;top:5%; "
          />
          <v-img
            src="/card/c2.png"
            height="5vw"
            width="5vw"
            contain
            style="position:absolute;right:12%;top:5%; "
          />
          <v-img
            src="/card/c2.png"
            height="5vw"
            width="5vw"
            contain
            style="position:absolute;right:24%;top:5%; "
          />
          <div class="p0 d-flex justify-center align-center">
            <span>P 0</span>
          </div>
          <div class="b0 d-flex justify-center align-center">
            <span>B 0</span>
          </div>
        </div>
      </div>

      <div style="width:30%;height:100%;" class="mt-1">
        <v-tabs

          background-color="#404040"
          height="3vh"
          active-class="tabActive black--text"
          dark
          hide-slider
          centered
          show-arrows
          center-active
        >
          <v-tab href="#tab-1" style="color:#b5a182; font-size:0.55vw;width:33.33%">
            Baccar
          </v-tab>

          <v-tab href="#tab-2" style="color:#b5a182;font-size:0.55vw;width:33.33%">
            Comm
          </v-tab>

          <v-tab href="#tab-3" style="color:#b5a182;font-size:0.55vw;width:33.33%">
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
              <v-row style="margin:0;">
                <v-col tile cols="4" class="playArea-tile-last  d-flex justify-center align-center">
                  <h2>Player</h2>
                </v-col>
                <v-col tile cols="4" class="playArea-tile-last tile  d-flex justify-center align-center">
                  <h2> Tie</h2>
                </v-col>
                <v-col tile cols="4" class="playArea-tile-last banker  d-flex justify-center align-center">
                  <h2> Banker</h2>
                </v-col>
              </v-row>
            </v-card>
          </v-tab-item>
        </v-tabs>
      </div>
    </v-row>
  </v-card>

  <!-- end card panel -->
</template>

<script>
export default {
  props: ['project'],
  // favoriteshow: false,
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
.showResult{
  height:100%;
  width:70%;
  position:relative;
  background-image: url('/icon/road_big.png');
  background-repeat:no-repeat;
  background-position:center;
  background-size: 100% 100%
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
.result-cards{
  bottom: 0;
height: 100%;
position: absolute;
width: 100%;
background-color: rgba(0,0,0,0.5);
}
.p0{
   width:25%;
   height:25%;
   background-color:blue;
   position:absolute;
   top:66%;
   left:7.3%;
   font-size: 0.6vw;
   color:white
}
.b0{
   width:25%;
   height:25%;
   background-color:red;
   position:absolute;
   top:66%;
   right:7.3%;
   font-size: 0.6vw;
   color:white
}
.playArea{
    background-color:rgb(3, 62, 29);
    height: 15.6vh;
}
.playAreaLast{
    background-image:url('/icon/niuniu_b.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
    height:15.6vh;
}

.playArea-tile{
    border:1px solid rgba(255,255,255, 0.3);
    color:#3470A9;
    height: 7.8vh;

}
.playArea-tile-last{
  color:#3470A9;
  height: 15.6vh;
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

</style>
