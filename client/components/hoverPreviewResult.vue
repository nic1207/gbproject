<template>
  <v-tooltip top color="rgb(0,0,0,0)">
    <template v-slot:activator="{ on, attrs }">
      <slot
        name="item"
        :activate="{on,attrs}"
      />
    </template>
    <v-card height="230" width="300" dark>
      <v-row no-gutters class="pa-1">
        <v-col cols="6">
          ID 10234512312
        </v-col>
        <v-col cols="6">
          Round 4-1
        </v-col>
      </v-row>
      <v-divider />
      <v-row no-gutters justify="center">
        Click roadmap to replay
      </v-row>

      <v-row class="result-cards" no-gutters>
        <div
          class=" d-flex justify-center align-center"
          style="width:42%; height:10%; position:absolute; top:5%; left:5%; background-color:blue"
        >
          <span>Player 8</span>
        </div>

        <div
          class=" d-flex justify-center align-center"
          style="width:42%; height:10%; position:absolute; top:5%; right:5%; background-color:red"
        >
          <span>Banker 0</span>
        </div>
        <v-img
          src="/smallcard/小方塊2.png"
          style="position:absolute;left:33%;top:20%"
          width="12%"
          height="18%"
          contain
        />

        <v-img
          src="/smallcard/小方塊2.png"
          style="position:absolute;left:20%;top:20%"
          width="12%"
          height="18%"
          contain
        />
        <v-img
          src="/smallcard/小方塊2.png"
          style="position:absolute;left:7%;top:20%"
          width="12%"
          height="18%"
          contain
        />
        <v-img
          src="/smallcard/小方塊2.png"
          style="position:absolute;right:33%;top:20%"
          width="12%"
          height="18%"
          contain
        />
        <v-img
          src="/smallcard/小方塊2.png"
          style="position:absolute;right:20%;top:20%"
          width="12%"
          height="18%"
          contain
        />
        <v-img
          src="/smallcard/小方塊2.png"
          style="position:absolute;right:7%;top:20%"
          width="12%"
          height="18%"
          contain
        />
        <div
          class=" d-flex justify-center align-center"
          style="width:42%;
                            height:10%;
                            position: absolute;
                              bottom:25%;
                              left: 50%;
                              transform: translate(-50%, -50%); background-color:blue"
        >
          <span>Player Win</span>
        </div>
      </v-row>
    </v-card>
  </v-tooltip>
</template>

<script>
export default {

}
</script>

<style scoped>
        .result-cards{

         position: relative;;
        width:100%;
        height:100%
    }
</style>
