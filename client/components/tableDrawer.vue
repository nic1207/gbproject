<template>
  <v-navigation-drawer
    v-model="drawer"
    dark
    absolute
    right
    floating
    color="rgba(0,0,0,0)"
    height="90vh"
    width="30vw"
    style="top:2%"
  >
    <v-row no-gutters style="width:100%;height:100%">
      <v-col cols="1" style="height:100%;">
        <v-row class="align-center" style="width:100%;height:100%;" no-gutters>
          <button class="Custombutton" @click="close">
            <p
              class="py-5"
              style="writing-mode: vertical-rl;
            text-orientation: upright;letter-spacing:-2px; font-size:0.8vw"
            >
              table
            </p>
          </button>
        </v-row>
      </v-col>
      <v-col cols="11">
        <v-card
          style="border:2px solid #BB9953;
                                border-radius: 10px;"
          height="100%"
          color="rgba(0,0,0,0.6)"
        >
          <v-row style="height:10%;width:100%;" no-gutters justify="end" align="center">
            <v-btn text color="white">
              圓庄
            </v-btn>
            <v-btn text color="#BB9953" class="mr-6">
              大路
            </v-btn>
          </v-row>
          <v-row style="height:90%;width:100%;" no-gutters>
            <v-col cols="3">
              <div class="d-flex flex-column justify-center align-center" style="width:100%;height:100%;">
                <v-card
                  v-for="n in 7"
                  :key="n"
                  height="2vw"
                  width="5vw"
                  color="#404040"
                  style=" border:1px solid #BB9953;
                                            border-radius: 5px;
                                            font-size:0.8vw"
                  dark
                  class="d-flex justify-center align-center room-list mb-3"
                  :class="{ 'windowActive': window==n }"
                  @click="window=n"
                >
                  window {{ n }}
                </v-card>
              </div>
            </v-col>
            <v-col cols="9">
              <v-window v-model="window" vertical>
                <v-window-item :value="1">
                  <v-card height="80vh" class="scroll" color="rgba(255,255,255,0)">
                    <v-card
                      v-for="n in 10"
                      :key="n"
                      height="20vh"
                      class="ma-3 "
                      color="#404040"
                      style=" border:2px solid #BB9953;
                                                    border-radius: 10px;"
                    >
                      <v-row no-gutters style="width:100%;height:15%" justify="end">
                        <v-flex row class=" align-center pl-3">
                          <span style="color:#C48F29" class=" textSize ml-4">
                            RoomType
                          </span>
                        </v-flex>
                        <v-flex row class=" align-center">
                          <span class="offsetClass">X</span>
                          <span class="white--text textSize ml-4">RoomType </span>
                        </v-flex>

                        <div
                          class="
                                                        d-flex justify-center align-center black--text textSize ma-1 tableCount"
                          style="width:1.2vw;height:1.2vw;"
                        >
                          <span> 0 </span>
                        </div>
                      </v-row>
                      <v-row no-gutters style="width:100%;height:85%;">
                        <div class="ml-4 tableCard" />
                      </v-row>
                    </v-card>
                  </v-card>
                </v-window-item>
                <v-window-item :value="2">
                  2
                </v-window-item>
                <v-window-item :value="3">
                  3
                </v-window-item>
              </v-window>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-navigation-drawer>
</template>
<script>
export default {
  components: {

  },
  props: ['drawer'],
  data () {
    return {
      window: 1
    }
  },
  computed: {

  },
  methods: {
    close () {
      this.$emit('close')
    }
  }
}
</script>
<style scoped>
.textSize{
    font-size: 0.6vw;
}
.scroll {
      overflow-y: auto;
    }
  .Custombutton {
      border: none;
      color: white;
      padding: 9px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 0.8vw;
      margin: 0px 8.5px;
      cursor: pointer;
      background-image:url('/icon/tselectui_2.png');
      background-repeat: no-repeat;
      background-position: center;
      background-size: 100% 100%;
      letter-spacing:20px;

    }
    .Custombutton:focus {
    outline: 1px solid #F7D8A8;
    outline-offset: -4px;
    }
    .windowActive{
      background-image:
      linear-gradient(
          rgb(255, 255, 255) 63%,
          #B98F38
        );
        color:black
    }
    .tableCount{
         background-image:
      linear-gradient(
          rgb(255, 255, 255) 63%,
          #B98F38
        );
       border-radius: 1px;
    }
    .offsetClass{
        font-size:1.6vw;position:absolute;
        top:0;
        transform: translate(0, -14px);
        background: -webkit-linear-gradient( rgb(255, 255, 255) 10%, #B98F38);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .tableCard{
        width:96%;
        height:96%;
        background-color:black;
        background-image:url('/icon/grid.png');
        background-repeat: no-repeat;
        background-position: center;
        background-size: 100% 100%;
    }
</style>
