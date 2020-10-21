<template>
  <v-container class="pa-0 ml-2 mt-0 viewList" fluid>
    <Tutorialroomlist v-if="tutorial" @close="do_tutorial" />
    <v-row no-gutters dense>
      <dashboardCard v-for="table in tableList" :key="table.TableID" :table="table" :prop-card-size="propCardSize" />
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
      tutorial: false,
      viewType: 'default'
    }
  },
  computed: {
    propCardSize () {
      // console.log('this.$route.query.vtype=', this.$route.query.vtype)
      const viewType = this.$route.query.vtype
      switch (viewType) {
        case 'default':
          return 'md6'
        case 'road_map_view':
          return 'md4'
        case 'big_road_view':
          return 'md3'
        default:
          return 'md6'
      }
    },
    token () {
      // console.log('this.$store.state=', this.$store.state)
      if (this.$store.state.account) {
        // console.log('[debug] Token=', this.$store.state.account.Token)
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
    tableList () {
      // console.log('lobby=', this.$store.state.lobby)
      let gg1 = []
      if (this.$store.state.lobby) {
        // console.log('GameTables=', this.$store.state.lobby.GameTables)
        if (this.$store.state.lobby.Games) {
          const games = this.$store.state.lobby.Games
          // console.log('games=', games)
          const gtables = games[0].Tables
          // console.log('gtables=', gtables)
          const ts = this.$store.state.tables.Tables
          // console.log('ts=', ts)
          if (gtables !== undefined) {
            gg1 = gtables.map((x, i) => {
              let bb = 0
              let pp = 0
              let tt = 0
              // console.log('x.TableID=', x.TableID)
              let rs
              if (ts) {
                rs = ts.find(y => y.TableID === x.TableID)
              }
              // console.log('yyyy rs=', rs)
              if (rs !== undefined && rs.History !== undefined) {
                // console.log('xxxxx rs=', rs)
                bb = rs.History.filter(x => x === 3).length
                pp = rs.History.filter(x => x === 1).length
                tt = rs.History.filter(x => x === 2).length
              }
              return {
                ...x,
                index: i,
                tableinfo: rs,
                bb: bb,
                pp: pp,
                tt: tt
              }
            })
          }
        }
        // console.log('gg1=', gg1)
      }
      return gg1
    },
    xxtableList () {
      if (this.$store.state.tables) {
        return this.$store.state.tables
      } else {
        return []
      }
    }
  },
  watch: {
  },
  mounted () {
    // console.log('mounted()')
    const xx = this.$cookies.get('t_roomlist')
    this.tutorial = !xx
    // console.log('xxxx this.tutorial=', this.tutorial)
  },
  methods: {
    do_tutorial () {
      // console.log('do_tutorial()')
      this.tutorial = false
      this.$cookies.set('t_roomlist', 1)
    }
  }
}
</script>

<style scoped>
.viewList{
  overflow-y: auto;
  overflow-x: hidden;
  height: 95.5vh;
  background-color:#444444;
  width:100%;
}
.viewList::-webkit-scrollbar {
    width: 14px;
}

/* Track */
.viewList::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background: rgba(245, 223, 178, 0.2);
}

/* Handle */
.viewList::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background:#AA8647;
    /* -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,1);  */
}

</style>
