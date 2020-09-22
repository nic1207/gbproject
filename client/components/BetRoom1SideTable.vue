<template>
  <v-card height="53vh" class="my-3 mx-1 cardGradient">
    <v-system-bar
      color="#AA8647"
      dark
      class="ma-0 pa-0"
    >
      <span class="room-list ml-1 black--text">Baccarat C02</span>
      <v-spacer />
      <div
        class="d-flex justify-center align-center ma-0 pa-0"
        style="width:30%;height:100%;"
      >
        <v-btn icon small>
          <v-icon>settings</v-icon>
        </v-btn>
      </div>
    </v-system-bar>
    <v-card
      v-for="n in 6"
      :key="n"
      color="rgba(255,2555,255,0)"
      height="8vh"
      class="d-flex align-center justify-space-between "
    >
      <div class="ml-1">
        <v-avatar
          color="#4C4331"
          size="2vw"
        >
          <v-progress-circular
            :value="100"
            color="#F7A823"
            size="30"
            width="2"
          />
        </v-avatar>
      </div>
      <span style="font-size:0.7vw">blahblah</span>
      <div style="background-color:#EAEDEA;width:3vw;height:3vw" class="ma-2" />
    </v-card>
  </v-card>
</template>
<script>
export default {

}
</script>
<style scoped>
 .room-list{
        font-size: 0.8vw;
    }
    .cardGradient{
      background-image:
      linear-gradient(
          rgb(255, 255, 255) 23%,
          #B98F38
        );
    }
</style>
