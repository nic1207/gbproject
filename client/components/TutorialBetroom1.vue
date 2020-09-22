<template>
  <div style="width:100%;height:100%;background-color:rgba(0,0,0,0.75);position:absolute;z-index:20">
    <v-col cols="5" class="pa-0" offset="7" style="position:relative">
      <v-row v-if="step==1" no-gutters style="width:100%;height:4vh" />
      <v-card
        v-if="step==1"
        flat
        tile
        height="32vh"
        dark
        color="rgba(0,0,0,0)"
        style="position:relative;"
      >
        <div class="outLine" />
        <v-row class="step1row1 table-info">
          <v-col cols="2" class="text-center">
            <span style="color:#E7CAA0">Banker</span><br>
            <span>1000</span>
          </v-col>
          <v-col cols="2" class="text-center">
            <span style="color:#E7CAA0">Player</span><br>
            <span>1000</span>
          </v-col>
          <v-col cols="2" class="text-center">
            <span style="color:#E7CAA0">Tie</span><br>
            <span>1000</span>
          </v-col>
          <v-col cols="2" class="text-center">
            <span style="color:#E7CAA0">Pair</span><br>
            <span>1000</span>
          </v-col>
          <v-col cols="2" class="text-center">
            <span style="color:#E7CAA0">Natural</span><br>
            <span>1000</span>
          </v-col>
          <v-col cols="2" class="text-center d-flex align-center justify-center">
            <v-btn
              small
              color="white"
              elevation="24"
            >
              <span style="color:black;font-size:0.7vw;">change</span>
            </v-btn>
          </v-col>
        </v-row>
        <v-row class="step1row2" justify="center">
          <div style="width:100%;height:100%" class="d-flex justify-center algin-center">
            <v-icon dense x-small>
              keyboard_arrow_up
            </v-icon>
          </div>
        </v-row>
      </v-card>
      <v-row v-if="step==3" no-gutters style="width:100%;height:36vh" />
      <v-row v-if="step==3" no-gutters>
        <v-col cols="9">
          <!--betroom history and other betrooms history-->
          <BetHistory style="outline:2px solid #F7D9AB; outline-offset:3px" />
        </v-col>
      </v-row>
      <div v-if="step==1" class="vl vl1" />
      <span v-if="step==1" class="dot dot1" />
      <v-card
        v-if="step==1"
        class="mx-auto step1card"
        color="#BCBEBD"
        dark
        max-width="400"
      >
        <v-card-title class="d-flex justify-center align-center">
          <span class="title black--text">投注限額</span>
        </v-card-title>

        <v-card-text class="d-flex justify-center align-center">
          <span style="font-size:0.9vw" class=" black--text">
            你可以根據需要在這裡設定牌局的投注限
          </span>
        </v-card-text>

        <v-card-actions class="d-flex justify-center align-center">
          <v-btn small color="#AA8647" @click="goNext(2)">
            Next
          </v-btn>
          <v-btn small color="#AA8647" @click="close">
            Skip
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <TableDrawer v-if="step==2" :drawer="true" style=" position:absolute;top:3%" />

    <div v-if="step==2" class="vl vl2" />
    <span v-if="step==2" class="dot dot2" />
    <hr v-if="step==2" class="hr hr2">
    <v-card
      v-if="step==2"
      class="mx-auto step2card"
      color="#BCBEBD"
      dark
      max-width="400"
    >
      <v-card-title class="d-flex justify-center align-center">
        <span class="title black--text">投注限額</span>
      </v-card-title>

      <v-card-text class="d-flex justify-center align-center">
        <span style="font-size:0.9vw" class=" black--text">
          你可以根據需要在這裡設定牌局的投注限
        </span>
      </v-card-text>

      <v-card-actions class="d-flex justify-center align-center">
        <v-btn small color="#AA8647" @click="goNext(3)">
          Next
        </v-btn>
        <v-btn small color="#AA8647" @click="close">
          Skip
        </v-btn>
      </v-card-actions>
    </v-card>

    <div v-if="step==3" class="vl vl2" />
    <hr v-if="step==3" class="hr hr2">
    <span v-if="step==3" class="dot dot2" />
    <v-card
      v-if="step==3"
      class="mx-auto step2card"
      color="#BCBEBD"
      dark
      max-width="400"
    >
      <v-card-title class="d-flex justify-center align-center">
        <span class="title black--text">投注限額</span>
      </v-card-title>

      <v-card-text class="d-flex justify-center align-center">
        <span style="font-size:0.9vw" class=" black--text">
          你可以根據需要在這裡設定牌局的投注限
        </span>
      </v-card-text>

      <v-card-actions class="d-flex justify-center align-center">
        <v-btn small color="#AA8647" @click="goNext(4)">
          Next
        </v-btn>
        <v-btn small color="#AA8647" @click="close">
          Skip
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
export default {
  data () {
    return {
      step: 1
    }
  },
  methods: {
    close () {
      this.$emit('close')
    },
    goNext (current) {
      if (current > 3) {
        this.close()
      } else {
        this.step = current
      }
    }
  }
}
</script>
<style scoped>
.hr{
    width:17vw;
    height:2px;border-width:0;
    color:#F7D9AB;
    background-color:#F7D9AB;
    position: absolute;
}
.hr2{
     left:50%;
    top:46vh
}
.step1row1{
    height:19%;
    width:100%;
     margin:0;
     background-color:black;
     position:absolute;
     bottom:5%;
}
.step1row2{
    height:5%;
    width:100%;
    margin:0;
    background-color:#876F4D;
    position:absolute;
    bottom:0
}
    .dot {
        height: 10px;
        width: 10px;
        background-color: #F7D9AB;
        border-radius: 50%;
        display: inline-block;
        position: absolute;
        }
    .dot1 {
        left:49.55%;
        top:46vh
    }
    .dot2 {
        left:49.8%;
        top:35vh
    }
.step1card{
     position: absolute;
        left:50%;
        transform: translate(-50%);
        top:47vh
}
.step2card{
     position: absolute;
        left:50%;
        transform: translate(-50%);
        top:20vh;
}
.vl {
  border-left: 2px solid #F7D9AB;
  height: 10vh;
  position: absolute;
}
.vl1{
     left:50%;
    top:36vh
}
.vl2{
     left:50%;
    top:36vh;

}
.outLine{
    height:24%;
    width:100%;
    margin:0;
    background-color:rgba(0,0,0,0);
    position:absolute;
    bottom:0;
    outline:3px solid #F7D9AB;
    outline-offset:1px
}
.table-info{
      font-size: 0.8vw;
    }
</style>
