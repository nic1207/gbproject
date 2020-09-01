<template>
  <div v-if="loading" class="loading-page">
    <div class="sk-chase">
      <div class="sk-chase-dot" />
      <div class="sk-chase-dot" />
      <div class="sk-chase-dot" />
      <div class="sk-chase-dot" />
      <div class="sk-chase-dot" />
      <div class="sk-chase-dot" />
    </div>
  </div>
  <!--
  <v-row align="center" justify="center" class="pa-6">
    <v-img
      src="banner.jpg"
      aspect-ratio="1.8"
      class="grey lighten-2"
      max-width="700"
      max-height="500"
      contain
    >
      <template v-slot:placeholder>
        <v-row
          class="fill-height ma-0"
          align="center"
          justify="center"
        >
          <v-progress-circular indeterminate color="grey lighten-5" />
        </v-row>
      </template>
    </v-img>
  </v-row>
  <v-row no-gutters style="width:100%" align-content="center" justify="center">
    <div style="width:100%; height:200px;position:relative">
      <div
        style="width:20%;position:absolute; top:10%;left:47%;
        transform: translate(-50%, -50%);"
      >
        <div>{{ percent }} % </div>
        <v-progress-linear
          v-model="percent"
          color="#ffff99"
          value="10"
          height="10"
          striped
          rounded
        />
      </div>
      <div
        style="width:20%;position:absolute; top:30%;left:69.2%;
          transform: translate(-50%, -50%); "
      >
        <div class="playTable" />
      </div>
    </div>
  </v-row>
  -->
</template>
<script>
export default {
  data: () => ({
    loading: false
  }),
  methods: {
    start () {
      this.loading = true
    },
    finish () {
      this.loading = false
    }
  }
}
</script>

<style scoped>
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding-top: 200px;
  font-size: 30px;
  font-family: sans-serif;
}
.sk-chase {
  width: 40px;
  height: 40px;
  position: relative;
  animation: sk-chase 2.5s infinite linear both;
}
.sk-chase-dot {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  animation: sk-chase-dot 2.0s infinite ease-in-out both;
}
.sk-chase-dot:before {
  content: '';
  display: block;
  width: 25%;
  height: 25%;
  background-color: rgb(131, 4, 170);
  border-radius: 100%;
  animation: sk-chase-dot-before 2.0s infinite ease-in-out both;
}
.sk-chase-dot:nth-child(1) { animation-delay: -1.1s; }
.sk-chase-dot:nth-child(2) { animation-delay: -1.0s; }
.sk-chase-dot:nth-child(3) { animation-delay: -0.9s; }
.sk-chase-dot:nth-child(4) { animation-delay: -0.8s; }
.sk-chase-dot:nth-child(5) { animation-delay: -0.7s; }
.sk-chase-dot:nth-child(6) { animation-delay: -0.6s; }
.sk-chase-dot:nth-child(1):before { animation-delay: -1.1s; }
.sk-chase-dot:nth-child(2):before { animation-delay: -1.0s; }
.sk-chase-dot:nth-child(3):before { animation-delay: -0.9s; }
.sk-chase-dot:nth-child(4):before { animation-delay: -0.8s; }
.sk-chase-dot:nth-child(5):before { animation-delay: -0.7s; }
.sk-chase-dot:nth-child(6):before { animation-delay: -0.6s; }

@keyframes sk-chase {
  100% { transform: rotate(360deg); }
}

@keyframes sk-chase-dot {
  80%, 100% { transform: rotate(360deg); }
}

@keyframes sk-chase-dot-before {
  50% {
    transform: scale(0.4);
  } 100%, 0% {
    transform: scale(1.0);
  }
}
</style>
