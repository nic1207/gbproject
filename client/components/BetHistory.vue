<template>
  <div>
    <div style="height:13vh;width:100%; background-color:#2E2E2E">
      <v-row style="height:100%;width:100%; margin:0;" no-gutters justify="left">
        <div
          v-for="n in 3"
          :key="n"
          style="height:50%;width:12.5%;"
          class="d-flex justify-center align-center"
        >
          <v-card
            height="80%"
            width="80%"
            dark
            class="d-flex justify-center align-center room-list"
            :class="{ 'windowActive': window==n }"
            @click="window=n"
          >
            C0{{ n }}
          </v-card>
        </div>
      </v-row>
    </div>
    <v-window v-model="window">
      <v-window-item :value="1">
        <div style="height:45vh;width:100%">
          <div class="text-center tableBg">
            <div style="width:100%; height:25%;" />

            <div style="width:100%; height:12.5%;" />

            <v-row style="width:100%; height:12.7%" no-gutters>
              <div style="width:50%; height:100%; " />

              <div style="width:50%; height:100%;" />
            </v-row>

            <div style="width:100%; height:50%;" class="d-flex align-content-start flex-wrap flex-column">
              <HoverPreviewResult v-for="n in 12" :key="n">
                <template v-slot:item="slotProps">
                  <v-img
                    src="/icon/圓庄.png"
                    max-height="1.6vw"
                    max-width="1.6vw"
                    v-bind="slotProps.activate.attrs"
                    v-on="slotProps.activate.on"
                  />
                </template>
              </HoverPreviewResult>
            </div>
          </div>
          <v-row no-gutters style="width:100%; height:10%">
            <div class="d-flex align-center justify-left room-list" style="width:50%; height:100%; background-color:black">
              <span class="font-weight-bold red--text ml-1">庄</span>
              <span class="font-weight-bold white--text ml-1">13</span>
              <span class="font-weight-bold blue--text ml-1">圓</span>
              <span class="font-weight-bold white--text ml-1">123</span>
              <span class="font-weight-bold green--text ml-1">和</span>
              <span class="font-weight-bold white--text ml-1">13</span>
              <span class="font-weight-bold red--text ml-1">庄庄</span>
              <span class="font-weight-bold white--text ml-1">13</span>
              <span class="font-weight-bold blue--text ml-1">和和</span>
              <span class="font-weight-bold white--text ml-1">133</span>
            </div>
            <div class="d-flex align-center justify-left room-list" style="width:50%; height:100%; background-color:black">
              <v-btn small color="#c70000" class="ml-1">
                <span class="white--text">庄問路</span>
              </v-btn>
              <v-img
                max-width="1vw"
                max-height="1vw"
                src="/icon/大紅圈.png"
              />
              <v-avatar color="#c70000" class="ml-1" size="15" />
              <span class="font-weight-bold red--text ml-1 mr-5  ">/</span>
              <v-btn small color="#2d30b1" class="ml-1">
                <span class="white--text"> 閒問路</span>
              </v-btn>
              <v-img
                max-width="1vw"
                max-height="1vw"
                src="/icon/大藍圈.png"
              />
              <v-avatar color="#2d30b1" class="ml-1" size="15" />
              <span class="font-weight-bold ml-1" style="color:#2d30b1">/</span>
            </div>
          </v-row>
        </div>
      </v-window-item>

      <v-window-item :value="2">
        <div class="pa-4 text-center" style="height:100%; width:100%;background-color:black">
          <v-text-field
            label="Password"
            type="password"
          />
          <v-text-field
            label="Confirm Password"
            type="password"
          />
          <span class="caption grey--text text--darken-1">
            Please enter a password for your account
          </span>
        </div>
      </v-window-item>

      <v-window-item :value="3">
        <div class="pa-4 text-center" style="height:100%; width:100%;background-color:black">
          <v-img
            class="mb-4"
            contain
            height="128"
            src="https://cdn.vuetifyjs.com/images/logos/v.svg"
          />
          <h3 class="title font-weight-light mb-2">
            Welcome to Vuetify
          </h3>
          <span class="caption grey--text">Thanks for signing up!</span>
        </div>
      </v-window-item>
    </v-window>
  </div>
</template>
<script>
export default {
  data () {
    return {
      window: 1
    }
  }
}
</script>
<style scoped>
.tableBg{
  height:90%;
  width:100%;
  background-color:#2E2E2E;
  background-image: url('/icon/單人棋盤格.png');
  background-repeat:no-repeat;
  background-position:center;
  background-size: 100% 100%
}
 .windowActive{
      background-color:#AA8647 ;

    }
      .room-list{
        font-size: 0.8vw;
    }
</style>
