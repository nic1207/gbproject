<template>
  <v-flex md6>
    <!-- Start card -->
    <v-card class="ma-1" elevation="24" raised>
      <v-row no-gutters class="text-size" align="center">
        <v-flex class="align-center ml-1">
          <span class="black--text">Seri {{ project.seri }}</span>
        </v-flex>

        <v-flex class="align-center">
          <span class="red--text">庄</span>
          <span class="black--text">{{ project.bb }}</span>
        </v-flex>

        <v-flex class="align-center">
          <span class="blue--text">圓</span>
          <span class="black--text">{{ project.pp }}</span>
        </v-flex>

        <v-flex class="align-center">
          <span class="green--text">和</span>
          <span class="black--text"> {{ project.tt }}</span>
        </v-flex>

        <v-spacer />
        <v-flex class="align-center">
          <v-btn text icon medium color="#787878" @click="addFav">
            <v-icon :color="project.isFavourite?'red':''">
              favorite
            </v-icon>
          </v-btn>
        </v-flex>

        <v-flex class="align-center">
          <v-btn icon medium color="#c3a475">
            <v-icon>switch_video</v-icon>
          </v-btn>
        </v-flex>

        <div class="d-flex justify-center align-center black--text pa-2" style="background:#c6c6c9;width:3.8vw;">
          <span> {{ project.status }} </span>
        </div>
      </v-row>
      <v-img
        height="100%"
        src="/icon/road_middle.png"
      >
        <div class="d-flex align-content-start flex-wrap flex-row" style="height:100%;width:100%">
          <HoverPreviewResult v-for="n in 12" :key="n">
            <template v-slot:item="slotProps">
              <v-img
                src="/icon/bluec.png"
                max-height="0.62vw"
                max-width="0.62vw"
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
            src="/card/d2.png"
            height="4vw"
            width="4vw"
            contain
            style="position:absolute;left:0;top:5%; "
          />
          <v-img
            src="/card/d2.png"
            height="4vw"
            width="4vw"
            contain
            style="position:absolute;left:12%;top:5%; "
          />
          <v-img
            src="/card/d2.png"
            height="4vw"
            width="4vw"
            contain
            style="position:absolute;left:24%;top:5%; "
          />

          <div class="winner d-flex justify-center align-center" :style="{'background-color':'blue'}">
            <span>Banker Win</span>
          </div>
          <v-img
            src="/card/d2.png"
            height="4vw"
            width="4vw"
            contain
            style="position:absolute;right:0;top:5%; "
          />
          <v-img
            src="/card/d2.png"
            height="4vw"
            width="4vw"
            contain
            style="position:absolute;right:12%;top:5%; "
          />
          <v-img
            src="/card/d2.png"
            height="4vw"
            width="4vw"
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
      </v-img>
      <v-tabs
        grow
        background-color="#404040"
        centered
        height="3.3vh"
        active-class="tabActive black--text"
        dark
        hide-slider
      >
        <v-tab href="#tab-1" style="color:#b5a182;" class="text-size">
          Baccarat
        </v-tab>

        <v-tab href="#tab-2" style="color:#b5a182;" class="text-size">
          No Commission
        </v-tab>

        <v-tab href="#tab-3" style="color:#b5a182;" class="text-size">
          <span> Cow <v-icon size="17">help</v-icon> </span>
        </v-tab>

        <v-tab-item :value="'tab-' + 1">
          <v-card
            flat
            tile
            class="text-size"
          >
            <v-row style="margin:0;" align="center" class="playArea">
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
          </v-card>
        </v-tab-item>

        <v-tab-item :value="'tab-' + 2">
          <v-card
            flat
            tile
            class="text-size"
          >
            <v-row style="margin:0;" class="playArea">
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
.playArea-tile{
    border:1px solid rgba(255,255,255, 0.3);
    color:#3470A9;
    height: 64px;
    }

.playArea{
    background-color:rgb(3, 62, 29);
    height:64px;
    }

.playArea-tile-last{
  color:#3470A9;
  height: 100%;
  width: 33.3333%;
}
.playAreaLast{
    background-image:url('/icon/niuniu_m.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
    height:64px;
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
