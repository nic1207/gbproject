<template>
  <v-container>
    <!-- first row -->
    <v-row>
      <v-col>
        <v-card v-for="project in projects" :key="project.name" flat>
          <div class="dashboard-card">
            <v-layout>
              <v-flex>
                <span class="white--text">Seri {{ project.seri }}</span>
              </v-flex>
              <v-flex>
                <div class="white--text">
                  <v-icon class="white--text">
                    group
                  </v-icon> {{ project.user }}
                </div>
              </v-flex>
              <v-flex>
                <v-avatar color="red" size="25">
                  <span class="white--text">B</span>
                </v-avatar>
                <span class="white--text">{{ project.bb }}</span>
              </v-flex>
              <v-flex>
                <v-avatar color="blue" size="25">
                  <span class="white--text ">P</span>
                </v-avatar>
                <span class="white--text">{{ project.pp }}</span> vv
              </v-flex>
              <v-flex>
                <div class="white--text">
                  <v-avatar color="red" size="25">
                    <span class="white--text">T</span>
                  </v-avatar>
                  {{ project.tt }}
                </div>
              </v-flex>
              <v-flex>
                <div class="white--text" style="background:#196260; height:30px;">
                  <div> {{ project.status }} </div>
                </div>
              </v-flex>
            </v-layout>
          </div>
        </v-card>

        <v-row>
          <div class="profile-img">
            <v-img
              height="200"
              width="150"
              src="https://cdn.vuetifyjs.com/images/cards/store.jpg"
            />
          </div>

          <v-hover v-slot:default="{ hover }">
            <!-- Start show resultimg -->
            <div class="showing-resulting">
              <!-- first button -->
              <div
                v-if="hover&&!show &&!secondshow"
                :class="`justify-center justify-xl-center`"
                class="d-flex  #1f180e darken-2 v-card--reveal display-3 white--text"

                style="height: 100%; background:gray;"
              >
                <!-- <v-input v-model="show">{{show}}</v-input> -->

                <div class="mt-15 mr-5 ">
                  <v-btn class="white--text" large depressed color="#5f4d35" @click="show=true">
                    Baccarat
                  </v-btn>
                </div>

                <div class="mt-15 mr-5 ">
                  <v-btn class="white--text" large depressed color="#5f4d35" @click="secondshow=true">
                    7-Seat Baccarat
                  </v-btn>
                </div>
              </div>
              <!-- end first button -->

              <!-- first button- second action-->
              <div
                v-if="hover ? show&& hover : show=false "
                class=" #1f180e darken-2 v-card--reveal display-3 white--text"

                style="height: 100%; background:gray;"
              >
                <div class="d-flex align-center flex-row justify-center">
                  <v-btn class="white--text mt-9 mr-3" large depressed color="#5f4d35">
                    10 - 1,000
                  </v-btn>

                  <v-btn class="white--text mt-9 mr-3" large depressed color="#5f4d35">
                    50 - 5,000
                  </v-btn>

                  <v-btn class="white--text mt-9 mr-3" large depressed color="#5f4d35">
                    100 - 5,000
                  </v-btn>
                </div>

                <div class="d-flex align-center flex-row justify-center">
                  <v-btn class="white--text mt-7 mr-3" large depressed color="#5f4d35">
                    100 - 5,000
                  </v-btn>

                  <v-btn class="white--text mt-7 mr-3" large depressed color="#5f4d35">
                    100 - 5,000
                  </v-btn>
                </div>
              </div>
              <!-- end first button- second action-->

              <!-- second button- second action-->
              <div
                v-if="hover ? secondshow&& hover : secondshow=false "
                class=" #1f180e darken-2 v-card--reveal display-3 white--text"

                style="height: 100%; background:gray;"
              >
                <div class="d-flex align-center flex-row justify-center">
                  <v-btn class="white--text mt-9 mr-3" large depressed color="#5f4d35">
                    10 - 1,000
                  </v-btn>

                  <v-btn class="white--text mt-9 mr-3" large depressed color="#5f4d35">
                    50 - 5,000
                  </v-btn>

                  <v-btn class="white--text mt-9 mr-3" large depressed color="#5f4d35">
                    100 - 5,000
                  </v-btn>
                </div>

                <div class="d-flex align-center flex-row justify-center">
                  <v-btn class="white--text mt-7 mr-3" large depressed color="#5f4d35">
                    100 - 5,000
                  </v-btn>

                  <v-btn class="white--text mt-7 mr-3" large depressed color="#5f4d35">
                    100 - 5,000
                  </v-btn>
                </div>
              </div>
              <!-- end second button- second action-->
            </div>
            <!-- End show resultimg -->
          </v-hover>
        </v-row>
      </v-col>

      <!-- first row - second column -->
      <v-col>
        <v-card v-for="project in projects" :key="project.name" flat>
          <div class="dashboard-card">
            <v-layout>
              <v-flex>
                <span class="white--text">Seri {{ project.seri }}</span>
              </v-flex>
              <v-flex>
                <div class="white--text">
                  <v-icon class="white--text">
                    group
                  </v-icon> {{ project.user }}
                </div>
              </v-flex>
              <v-flex>
                <v-avatar color="red" size="25">
                  <span class="white--text">B</span>
                </v-avatar>
                <span class="white--text">{{ project.bb }}</span>
              </v-flex>
              <v-flex>
                <v-avatar color="blue" size="25">
                  <span class="white--text ">P</span>
                </v-avatar>
                <span class="white--text">{{ project.pp }}</span>
              </v-flex>
              <v-flex>
                <div class="white--text">
                  <v-avatar color="red" size="25">
                    <span class="white--text">T</span>
                  </v-avatar>
                  {{ project.tt }}
                </div>
              </v-flex>
              <v-flex>
                <div class="white--text" style="background:#196260; height:30px;">
                  <div> {{ project.status }} </div>
                </div>
              </v-flex>
            </v-layout>
          </div>
        </v-card>

        <v-row>
          <div class="profile-img">
            <v-img
              height="200"
              width="150"
              src="https://cdn.vuetifyjs.com/images/cards/store.jpg"
            />
          </div>

          <div class="showing-resulting" />
        </v-row>
      </v-col>
      <!-- end first row - second column -->
    </v-row>
    <!-- End first row -->

    <!-- second row -->

    <!-- End second row -->

    <!-- third row -->

    <!-- End third row -->

    <!-- fourth row -->

    <!-- End fourth row -->
  </v-container>
</template>

<script>

export default {
  data () {
    return {
      show: false,
      secondshow: false,
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
.dashboard-card {
    background:#1f180e;
    width: 770px;
}
.showing-resulting {
   border: 1px solid gray;
   width:620px;
   height:200px;
}
.profile-img {
  margin-left:11px;
}

</style>
