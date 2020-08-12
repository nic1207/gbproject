<template>
  <v-container fluid>
    <!-- first row -->
    <v-row no-gutters dense>
      <dashboardCard
        v-for="tableinfo in tableinfos"
        :key="tableinfo.name"
        :tableinfo="tableinfo"
        prop-card-size="md6"
      />
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
      tableinfos: [
        { seri: 'C01', name: 'SIKEN', user: '1300', avator: 'img/xdea1011.jpg', bb: '1232200', pp: '2322200', tt: '2020', status: 'Dealing' },
        { seri: 'C02', name: 'KNYMCY', user: '5200', avator: 'img/xdea1011.jpg', bb: '1232200', pp: '2322200', tt: '2020', status: 'Waiting' }
      ]
    }
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
