<template>
  <v-container class="pa-0 ml-2 mt-0" fluid>
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
          <v-tab style="color:#b5a182;border-right:3px solid black;">
            <span style="font-size:0.8vw">All Baccarat</span>
          </v-tab>
          <v-tab style="color:#b5a182;border-right:3px solid black;">
            <span style="font-size:0.8vw">Special Baccarat</span>
          </v-tab>
          <v-tab style="color:#b5a182;">
            <span style="font-size:0.8vw">Other Games</span>
          </v-tab>

          <!-- Start favorite  -->
          <v-tab-item :value="'navtab-' + 1">
            <v-row class="scrollbar" no-gutters>
              <multibetRoadMap
                v-for="project in projects"
                v-if="project.isFavourite"
                :key="project.name"
                :project="project"
                @addFav="AddingFav(project)"
              />
            </v-row>
          </v-tab-item>
          <!-- End Favorite -->

          <v-tab-item :value="'navtab-' + 2">
            <v-row class="scrollbar" no-gutters>
              <multibetRoadMap
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
import multibetRoadMap from '@/components/multibet/multibetRoadMap'
import multibetSlite from '@/components/multibet/multibet1'
export default {
  components: {
    multibetRoadMap,
    multibetSlite
  },
  data () {
    return {
      betLimit: '10-1000',
      projects: [
        { seri: 'C01', name: 'SIKEN', user: '123300', bb: '123', pp: '2300', tt: '2020', status: 'Dealing', isFavourite: false },
        { seri: 'C02', name: 'HONGLONG', user: '5200', bb: '123', pp: '20', tt: '2020', status: 'Waiting', isFavourite: false },
        { seri: 'C03', name: 'KUNHEAR', user: '2200', bb: '123', pp: '2320', tt: '2020', status: '12', isFavourite: false },
        { seri: 'C04', name: 'CHEA_C', user: '2200', bb: '2200', pp: '2300', tt: '2020', status: 'PlayerWin', isFavourite: false },
        { seri: 'C05', name: 'MAkara', user: '2200', bb: '200', pp: '2320', tt: '2020', status: 'Shuffling', isFavourite: false },
        { seri: 'C06', name: 'HEAT_S', user: '2200', bb: '200', pp: '200', tt: '2020', status: 'Waiting', isFavourite: false },
        { seri: 'C07', name: 'SVEYNAR', user: '2200', bb: '1232', pp: '23220', tt: '2020', status: '12', isFavourite: false },
        { seri: 'C08', name: 'CHANDA', user: '2200', bb: '12300', pp: '23', tt: '2020', status: 'Shuffling', isFavourite: false },
        { seri: 'C09', name: 'YORNNEN', user: '2200', bb: '1200', pp: '23200', tt: '2020', status: 'Dealing', isFavourite: false },
        { seri: 'C10', name: 'PHALLA', user: '2200', bb: '1200', pp: '23200', tt: '2020', status: 'Waiting', isFavourite: false }

      ],
      changenumbers: {
        '10-1000': { bet_limit: '10 - 1,000', banker: '1,000', player: '1,000', tie: '125', pair: '90' },
        '50-5000': { bet_limit: '50 - 5,000', banker: '5,000', player: '5,000', tie: '625', pair: '454' },
        '100-5000': { bet_limit: '100 - 5,000', banker: '5,000', player: '5,000', tie: '625', pair: '454' },
        '100-10k': { bet_limit: '100 - 10K', banker: '10,000', player: '10,000', tie: '1250', pair: '909' },
        '200-20k': { bet_limit: '200 - 20K', banker: '20,000', player: '20,000', tie: '2500', pair: '1818' }
      },
      doneresult: false,
      headers: [
        {
          text: 'Table',
          align: 'start'

        },
        { text: 'Bet Content', value: 'category' },
        { text: 'Bet Amount', value: 'bet_amount' },
        { text: 'Win/Lose', value: 'winlose' },
        { text: 'Remark', value: 'remark' }
      ],
      desserts: [
        {
          name: '',
          category: '',
          bet_amount: ''

        },
        {
          name: '',
          category: ''
        },
        {
          name: '',
          category: ''
        },
        {
          name: '',
          category: ''
        },
        {
          name: '',
          category: ''
        },
        {
          name: '',
          category: ''
        },
        {
          name: '',
          category: ''
        },

        {
          name: '',
          category: ''
        }
      ]

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
}
</script>

<style scoped>
.dashboard-card {
    background-color:white;
    height: 44px;
    margin-top: 2px;
}
 .tabActive{
      background-image:
      linear-gradient(
          rgb(255, 255, 255) 63%,
          #B98F38
        );

    }
.playTable{
    background-image: url("/icon/荷官暫代圖.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 33vh;
    margin: 0;
    padding: 0;
}
.changepicture {
  background-color: #b9934e;
  height: 9vh;
  width: 100%;
  margin-top:0.1vh;
}

.tabform{
  height: 42px;
}

.scrollbar {

  overflow-y: auto;
  height: 90vh;
  background-color: #1C1C1C;

}

</style>
