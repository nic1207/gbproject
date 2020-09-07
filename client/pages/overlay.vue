<template>
  <v-container class="pa-0 ma-0" fluid>
    <!-- first row -->
    <v-row no-gutters dense>
      <dashboardCard v-for="project in projects" :key="project.name" :project="project" prop-card-size="md6" />

      <v-overlay
        :z-index="zIndex"
        :value="overlay"
      >
        <v-card

          height="250"
          width="280"
          color="#9e9d9b"
          class="mr-2"
        >
          <div class="text-center pt-10">
            <h3 style="color:black;">
              This is overlay
            </h3>
            <h3 style="color:black;">
              dddd
            </h3>
          </div>

          <div class="white--text mt-14 text-center">
            <v-btn
              color="#876f4d"
              @click="overlay = false"
            >
              Change
            </v-btn>
          </div>
          <div style="background:white; margin-left:7.2vw; height:22vh; width:0.1vw; margin-top:5vh;" />
          <div
            style="background:#3b2e1e"
            :class="`rounded-circle`"
            class="pa-16 text-center grey lighten-2"
          />
        </v-card>
      </v-overlay>
    </v-row>
  </v-container>
</template>

<script>
import dashboardCard from '@/components/dashboardCard'

export default {
  components: {
    dashboardCard
  },
  data () {
    return {
      overlay: true,
      zIndex: 0,
      projects: [
        { seri: 'C01', name: 'SIKEN', user: '123300', bb: '1232200', pp: '2322200', tt: '2020', status: 'Dealing' },
        { seri: 'C02', name: 'HONGLONG', user: '5200', bb: '1232200', pp: '2322200', tt: '2020', status: 'Waiting' },
        { seri: 'C03', name: 'KUNHEAR', user: '2200', bb: '1232200', pp: '2322200', tt: '2020', status: '12' },
        { seri: 'C04', name: 'CHEA_C', user: '2200', bb: '1232200', pp: '2322200', tt: '2020', status: 'Player Win' },
        { seri: 'C05', name: 'MAkara', user: '2200', bb: '1232200', pp: '2322200', tt: '2020', status: 'Shuffling' },
        { seri: 'C06', name: 'HEAT_S', user: '2200', bb: '1232200', pp: '2322200', tt: '2020', status: 'Waiting' },
        { seri: 'C07', name: 'SVEYNAR', user: '2200', bb: '1232200', pp: '2322200', tt: '2020', status: '12' },
        { seri: 'C08', name: 'CHANDA', user: '2200', bb: '1232200', pp: '2322200', tt: '2020', status: 'Shuffling' },
        { seri: 'C09', name: 'YORNNEN', user: '2200', bb: '1232200', pp: '2322200', tt: '2020', status: 'Dealing' },
        { seri: 'C10', name: 'PHALLA', user: '2200', bb: '1232200', pp: '2322200', tt: '2020', status: 'Waiting' }

      ]
    }
  },
  watch: {
    overlay (val) {
      val && setTimeout(() => {
        this.overlay = false
      }, 3000)
    }
  }
}
</script>

<style scoped>

</style>
