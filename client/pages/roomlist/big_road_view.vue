<template>
  <v-container class="pa-0 ma-0" fluid>
    <!-- first row -->
    <v-row no-gutters dense>
      <dashboardCard v-for="project in projects" :key="project.name" :project="project" prop-card-size="md3" />
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
  }
}
</script>

<style scoped>

</style>
