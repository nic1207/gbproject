<template>
  <div class="div-with-hole" :style="styles[step]">
    <div v-if="step==0" class="vl vl1" />
    <span v-if="step==0" class="dot dot1" />
    <v-card
      v-if="step==0"
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
        <v-btn small color="#AA8647" @click="goNext(1)">
          Next
        </v-btn>
        <v-btn small color="#AA8647" @click="close">
          Skip
        </v-btn>
      </v-card-actions>
    </v-card>
    <div v-if="step==1" class="vl vl2" />
    <span v-if="step==1" class="dot dot2" />
    <v-card
      v-if="step==1"
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
        <v-btn small color="#AA8647" @click="goNext(2)">
          Next
        </v-btn>
        <v-btn small color="#AA8647" @click="close">
          Skip
        </v-btn>
      </v-card-actions>
    </v-card>
    <hr v-if="step==2" class="hr hr3">
    <div v-if="step==2" class="vl vl3" />
    <span v-if="step==2" class="dot dot3" />
    <v-card
      v-if="step==2"
      class="mx-auto step3card"
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
  </div>
</template>
<script>
export default {
  data () {
    return {
      step: 0,
      styles: [{ background: 'radial-gradient(circle at 50% 100%, transparent 8%,#F6D8AA 8.5%, rgba(0,0,0,0.7) 8.7% )' },
        { background: 'radial-gradient(circle at 90% 100%, transparent 5%,#F6D8AA 5.5%, rgba(0,0,0,0.7) 5.7% )' },
        { background: 'linear-gradient(to left,transparent 1%,#F6D8AA 1.2%,rgba(0,0,0,0.7) 1.6%)' }
      ]

    }
  },
  methods: {
    close () {
      console.log('close()')
      this.$emit('close')
      // console.log('this.$cookies=', this.$cookies)
      // this.$cookies.set('troomlist', 'TRUE')
    },
    goNext (current) {
      if (current > 2) {
        this.close()
      } else {
        this.step = current
      }
    }
  }
}
</script>
<style scoped>

.div-with-hole {
    width:100%;
    height:100%;
    position: absolute;
    z-index:20;
  background-size: 100% 100%;
  background-position: 50% 50%;
  transition: all 2s ease;
}
.hr{
    width:12%;
    height:2px;border-width:0;
    color:#F7D9AB;
    background-color:#F7D9AB;
    position: absolute;
}
.hr3{
     left:86.6%;
    top:47%
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
        left:49.7%;
        top:75.5%
    }
    .dot2 {
        left:88.8%;
        top:75.5%
    }
    .dot3 {
        left:86.4%;
        top:31%
    }
.step1card{
     position: absolute;
        left:50%;
        transform: translate(-50%);
        top:60%
}
.step2card{
     position: absolute;
        left:79%;
        top:60%
}
.step3card{
     position: absolute;
         left:76.4%;
        top:15%
}
.vl {
  border-left: 2px solid #F7D9AB;
  height: 15%;
  position: absolute;
}
.vl1{
     left:49.9%;
     top:75%
}
.vl2{
     left:89%;
     top:75%

}
.vl3{
     left:86.6%;
     top:32%

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
