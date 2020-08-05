<template>
  <v-container class="pa-0 ma-0" fluid>
    <!-- first row -->
    <v-row no-gutters dense>
      <dashboardCard v-for="project in projects" :key="project.name" :project="project" prop-card-size="md6" />
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
        { seri: 'C01', name: 'SIKEN', user: '123300', avator: 'img/dea1011.jpg', bb: '1232200', pp: '2322200', tt: '2020', status: 'Dealing' },
        { seri: 'C02', name: 'KNY MCY', user: '5200', avator: 'img/dea1011.jpg', bb: '1232200', pp: '2322200', tt: '2020', status: 'Waiting' }
      ]
    }
  }
}
</script>

<style scoped>

</style>
