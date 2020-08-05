<template>
  <v-flex :md4="cardSize.md4" :md3="cardSize.md3" :md6="cardSize.md6" xs12>
    <v-card class="ma-2">
      <v-row v-if="PropCardSize=='md6'" no-gutters class="dashboard-bar">
        <v-flex>
          <span class="white--text textSize">Seri {{ project.seri }}  </span>
        </v-flex>
        <v-flex>
          <div class="white--text textSize">
            <v-icon class="white--text ">
              group
            </v-icon>  {{ project.user }}
          </div>
        </v-flex>
        <v-flex>
          <v-avatar color="red" size="25">
            <span class="white--text textSize">B</span>
          </v-avatar>
          <span class="white--text textSize">{{ project.bb }}</span>
        </v-flex>
        <v-flex>
          <v-avatar color="blue" size="25">
            <span class="white--text textSize">P</span>
          </v-avatar>
          <span class="white--text textSize">{{ project.pp }}</span>
        </v-flex>
        <v-flex>
          <div class="white--text textSize">
            <v-avatar color="red" size="25">
              <span class="white--text textSize">T</span>
            </v-avatar>
            {{ project.tt }}
          </div>
        </v-flex>
        <v-flex>
          <div class="white--text textSize text-center" style="background:#196260; height:30px;">
            <span> {{ project.status }}</span>
          </div>
        </v-flex>
      </v-row>
      <v-row v-if="PropCardSize!='md6'" no-gutters class="dashboard-bar">
        <v-flex>
          <span class="white--text textSize">Seri {{ project.seri }}  </span>
        </v-flex>
        <v-flex>
          <div class="white--text textSize">
            <v-icon class="white--text ">
              group
            </v-icon>  {{ project.user }}
          </div>
        </v-flex>
        <v-flex>
          <div class="white--text textSize text-center" style="background:#196260; height:30px;">
            <span> {{ project.status }}</span>
          </div>
        </v-flex>
      </v-row>
      <v-row v-if="PropCardSize!='md6'" no-gutters class="dashboard-bar">
        <v-flex>
          <v-avatar color="red" size="25">
            <span class="white--text textSize">B</span>
          </v-avatar>
          <span class="white--text textSize">{{ project.bb }}</span>
        </v-flex>
        <v-flex>
          <v-avatar color="blue" size="25">
            <span class="white--text textSize">P</span>
          </v-avatar>
          <span class="white--text textSize">{{ project.pp }}</span>
        </v-flex>
        <v-flex>
          <div class="white--text textSize">
            <v-avatar color="red" size="25">
              <span class="white--text textSize">T</span>
            </v-avatar>
            {{ project.tt }}
          </div>
        </v-flex>
      </v-row>
      <v-row no-gutters dense>
        <div style="width:17%;height:21vh">
          <v-img
            width="100%"
            height="80%"
            :src="project.avator"
          />
          <div style="height:100%;bottom:0px">{{ project.name }}</div>
        </div>
        <v-hover v-slot:default="{ hover }">
          <!-- Start show resultimg -->
          <div class="showing-resulting">
            <div style="width:100%;height:100%;background-color:#1f180e">
              <v-row no-gutters style="height:100%">
                <div v-if="PropCardSize=='md6'||PropCardSize=='md3'" :style="{height:'100%', width:PropCardSize=='md3'?'100%':'40%'}">
                  <previewTable :row="6" :column="15" />
                </div>
                <div v-if="PropCardSize=='md4'||PropCardSize=='md6'" :style="{ height: '100%', width: PropCardSize=='md4'?'100%':'60%' }">
                  <div style="width:100%; height:45%">
                    <previewTable :row="6" :column="36" />
                  </div>
                  <v-divider />
                  <div style="width:100%; height:27.5%">
                    <previewTable :row="3" :column="36" />
                  </div>
                  <v-divider />
                  <!--
                  <v-row style="width:100%; height:27.5%" no-gutters>
                    <div style="width:49.5%; height:100%; ">
                      <previewTable :row="4" :column="18" />
                    </div>
                    <v-divider vertical />
                    <div style="width:49.5%; height:100%">
                      <previewTable :row="4" :column="18" />
                    </div>
                  </v-row>
                  -->
                </div>
              </v-row>
            </div>
            <!-- first button -->
            <div
              v-if="hover&&!show &&!secondshow"
              class="d-flex align-center v-card--reveal justify-center #1f180e darken-2 display-3 white--text"

              style="height: 100%; background:black;"
            >
              <!-- <v-input v-model="show">{{show}}</v-input> -->

              <div class=" mr-5 ">
                <v-btn class="white--text" large depressed color="#5f4d35" @click="show=true">
                  Baccarat
                </v-btn>
              </div>

              <div class="mr-5 ">
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
                <v-btn
                  class="white--text mt-9 mr-3"
                  large
                  depressed
                  color="#5f4d35"
                  link
                  to="/betRoom"
                >
                  10 - 1,000
                </v-btn>

                <v-btn
                  class="white--text mt-9 mr-3"
                  large
                  depressed
                  color="#5f4d35"
                  link
                  to="/betRoom"
                >
                  50 - 5,000
                </v-btn>

                <v-btn
                  class="white--text mt-9 mr-3"
                  large
                  depressed
                  color="#5f4d35"
                  link
                  to="/betRoom"
                >
                  100 - 5,000
                </v-btn>
              </div>

              <div class="d-flex align-center flex-row justify-center">
                <v-btn
                  class="white--text mt-7 mr-3"
                  large
                  depressed
                  color="#5f4d35"
                  link
                  to="/betRoom"
                >
                  100 - 5,000
                </v-btn>

                <v-btn
                  class="white--text mt-7 mr-3"
                  large
                  depressed
                  color="#5f4d35"
                  link
                  to="/betRoom"
                >
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
                <v-btn
                  class="white--text mt-9 mr-3"
                  large
                  depressed
                  color="#5f4d35"
                  link
                  to="/betRoom"
                >
                  10 - 1,000
                </v-btn>

                <v-btn
                  class="white--text mt-9 mr-3"
                  large
                  depressed
                  color="#5f4d35"
                  link
                  to="/betRoom"
                >
                  50 - 5,000
                </v-btn>

                <v-btn
                  class="white--text mt-9 mr-3"
                  large
                  depressed
                  color="#5f4d35"
                  link
                  to="/betRoom"
                >
                  100 - 5,000
                </v-btn>
              </div>

              <div class="d-flex align-center flex-row justify-center">
                <v-btn
                  class="white--text mt-7 mr-3"
                  link
                  to="/betRoom"
                  large
                  depressed
                  color="#5f4d35"
                >
                  100 - 5,000
                </v-btn>

                <v-btn
                  class="white--text mt-7 mr-3"
                  large
                  depressed
                  color="#5f4d35"
                  link
                  to="/betRoom"
                >
                  100 - 5,000
                </v-btn>
              </div>
            </div>
            <!-- end second button- second action-->
          </div>
          <!-- End show resultimg -->
        </v-hover>
      </v-row>
    </v-card>
  </v-flex>
</template>
<script>
import previewTable from './previewTable'
export default {
  components: {
    previewTable
  },
  props: ['project', 'PropCardSize'],
  data () {
    return {
      show: false,
      secondshow: false

    }
  },
  computed: {
    cardSize () {
      let x = {}
      switch (this.PropCardSize) {
        case 'md6':
          x = {
            md6: true,
            md4: false,
            md3: false
          }
          break
        case 'md4':
          x = {
            md6: false,
            md4: true,
            md3: false
          }
          break
        case 'md3':
          x = {
            md6: false,
            md4: false,
            md3: true
          }
          break
        default:
          x = {
            md6: true,
            md4: false,
            md3: false
          }
      }
      return x
    }
  }

}
</script>
<style scoped>
.v-card--reveal {

bottom: 0;

opacity: 0.6;
position: absolute;
width: 100%;
}
.dashboard-bar{
  background:#1f180e;
}
.showing-resulting {
   width:83%;
   height:21vh;
   margin: 0;
   padding: 0;
   position: relative;
}
.profile-img {
  margin-left:11px;
}
.textSize{
  font-size: 0.8vw;
}

</style>
