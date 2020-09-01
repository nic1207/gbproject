<template>
  <v-container fluid>
    <!-- first row -->
    <v-row no-gutters dense>
      <dashboardCard
        v-for="tableinfo in tableinfos"
        :key="tableinfo.name"
        :tableinfo="tableinfo"
        :token="token"
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
      // tableinfos: [
      //  { seri: 'C01', name: 'SIKEN', user: '1300', avator: 'img/xdea1011.jpg', bb: '1232200', pp: '2322200', tt: '2020', status: 'Dealing' },
      //  { seri: 'C02', name: 'KNYMCY', user: '5200', avator: 'img/xdea1011.jpg', bb: '1232200', pp: '2322200', tt: '2020', status: 'Waiting' }
      // ]
    }
  },
  computed: {
    token () {
      // console.log('this.$store.state=', this.$store.state)
      if (this.$store.state.account) {
        console.log('Token=', this.$store.state.account.Token)
        return this.$store.state.account.Token
      } else {
        return []
      }
    },
    games () {
      // console.log('Games=', this.$store.state.lobby)
      if (this.$store.state.lobby) {
        // console.log('Games=', this.$store.state.lobby.Games)
        return this.$store.state.lobby.Games
      } else {
        return []
      }
    },
    tableinfos () {
      if (this.$store.state.lobby) {
        // console.log('lobby=', this.$store.state.lobby)
        // console.log('GameTables=', this.$store.state.lobby.GameTables)
        return this.$store.state.lobby.GameTables
      } else {
        return []
        /*
        return [
          { seri: 'C01', name: 'SIKEN', user: '1300', avator: 'img/xdea1011.jpg', bb: '1232200', pp: '2322200', tt: '2020', status: 'Dealing' },
          { seri: 'C02', name: 'KNYMCY', user: '5200', avator: 'img/xdea1011.jpg', bb: '1232200', pp: '2322200', tt: '2020', status: 'Waiting' }
        ]
        */
      }
    }
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
