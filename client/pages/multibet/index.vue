<template>
  <v-container class="pa-0 ml-1 mt-0" fluid>
    <v-row no-gutters style=" height: 96vh;background-color:#1C1C1C;">
      <!-- Main First Col -->
      <v-col cols="8" style="padding:0;">
        <v-tabs
          fixed-tabs
          background-color="#404040"
          dark
          active-class="tabActive black--text"
          hide-slider
          height="5vh"
        >
          <v-tab v-if="favoriteTab" href="#navtab-1" style="color:#b5a182;border-right:3px solid black;">
            <span style="font-size:0.8vw">My favorite <v-icon color="red">favorite</v-icon></span>
          </v-tab>

          <v-tab href="#navtab-2" style="color:#b5a182;border-right:3px solid black;">
            <span style="font-size:0.8vw">All Games</span>
          </v-tab>

          <v-tab style="color:#b5a182; border-right:3px solid black;">
            <span style="font-size:0.8vw">All Baccarat</span>
          </v-tab>

          <v-tab style="color:#b5a182; border-right:3px solid black;">
            <span style="font-size:0.8vw">Special Baccarat</span>
          </v-tab>

          <v-tab style="color:#b5a182;">
            <span style="font-size:0.8vw">Other Games</span>
          </v-tab>

          <!-- Start favorite  -->
          <v-tab-item :value="'navtab-' + 1">
            <v-row class="scrollbar " no-gutters>
              <multibetindex
                v-for="project in projects"
                v-if="project.isFavourite"
                :key="project.name"
                :project="project"
                @addFav="AddingFav(project)"
              />
            </v-row>
          </v-tab-item>

          <!-- End Favorite -->

          <!-- card panel -->
          <v-tab-item :value="'navtab-' + 2">
            <v-row class="scrollbar " no-gutters>
              <multibetindex
                v-for="project in projects"
                :key="project.name"
                :project="project"
                @addFav="AddingFav(project)"
              />
            </v-row>
          </v-tab-item>
        </v-tabs>
      </v-col>
      <!-- End Main First Col -->

      <!-- Main Second Col -->
      <v-col cols="4" style="padding:0;">
        <multibetSlite />
      </v-col>
      <!-- End Main Second Col -->
    </v-row>
  </v-container>
</template>

<script>
import multibetindex from '@/components/multibet/multibetindex'
import multibetSlite from '@/components/multibet/multibet1'
export default {
  components: {
    multibetindex,
    multibetSlite
  },
  data () {
    return {
      projects: [
        { seri: 'C01', name: 'SIKEN', user: '123300', bb: '123', pp: '2322200', tt: '2020', status: 'Dealing', isFavourite: false },
        { seri: 'C02', name: 'HONGLONG', user: '5200', bb: '123', pp: '2322200', tt: '2020', status: 'Waiting', isFavourite: false },
        { seri: 'C03', name: 'KUNHEAR', user: '2200', bb: '123', pp: '2322200', tt: '2020', status: '12', isFavourite: false },
        { seri: 'C04', name: 'CHEA_C', user: '2200', bb: '123', pp: '2322200', tt: '2020', status: 'Player Win', isFavourite: false },
        { seri: 'C05', name: 'MAkara', user: '2200', bb: '123', pp: '2322200', tt: '2020', status: 'Shuffling', isFavourite: false },
        { seri: 'C06', name: 'HEAT_S', user: '2200', bb: '1232', pp: '2322200', tt: '2020', status: 'Waiting', isFavourite: false },
        { seri: 'C07', name: 'SVEYNAR', user: '2200', bb: '322', pp: '2322200', tt: '2020', status: '12', isFavourite: false },
        { seri: 'C08', name: 'CHANDA', user: '2200', bb: '1232', pp: '2322200', tt: '2020', status: 'Shuffling', isFavourite: false },
        { seri: 'C09', name: 'YORNNEN', user: '2200', bb: '123', pp: '2322200', tt: '2020', status: 'Dealing', isFavourite: false },
        { seri: 'C10', name: 'PHALLA', user: '2200', bb: '1232', pp: '2322200', tt: '2020', status: 'Waiting', isFavourite: false }

      ],
      favoriteshow: false
    }
  },
  computed: {
    favoriteTab () {
      if (this.projects.filter(project => project.isFavourite === true).length === 0) {
        return false
      } else {
        return true
      }
    }
  },
  methods: {
    AddingFav (project) {
      console.log('[debug] sadsad')
      project.isFavourite = !project.isFavourite
    }
  }
  // methods:{
  //   favoritecatch() {
  //     this.$emit('favoriteshow')
  //   }
  // }
}
</script>

<style scoped>

.changenumber {
  background-color: #b9934e;
  height: 9vh;
  width: 100%;
  margin-top:0.1vh;
}

.result-cards {
  background-color: gray;
  position: relative;
}

.scrollbar {

  overflow-y: auto;
  height: 90vh;
  background-color:#1C1C1C;

}
 .tabActive{
      background-image:
      linear-gradient(
          rgb(255, 255, 255) 63%,
          #B98F38
        );

    }

</style>
