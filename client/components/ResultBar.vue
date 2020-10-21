<template>
  <div style="height:100%; width:20%;">
    <v-row no-gutters class="singleRow banker">
      <v-col cols="6">
        <v-row
          no-gutters
          style="width:100%;height:100%;"
          align="center"
          justify="start"
        >
          <span class="ml-2">庄</span>
        </v-row>
      </v-col>
      <v-col cols="6">
        <v-row
          no-gutters
          style="width:100%;height:100%;"
          align="center"
          justify="end"
        >
          <span class="mr-4">00</span>
        </v-row>
      </v-col>
    </v-row>
    <v-row no-gutters class="singleRow player">
      <v-col cols="6">
        <v-row
          no-gutters
          style="width:100%;height:100%;"
          align="center"
          justify="start"
        >
          <span class="ml-2">團</span>
        </v-row>
      </v-col>
      <v-col cols="6">
        <v-row
          no-gutters
          style="width:100%;height:100%;"
          align="center"
          justify="end"
        >
          <span class="mr-4">00</span>
        </v-row>
      </v-col>
    </v-row>
    <v-row no-gutters class="singleRow tie-text">
      <v-col cols="6">
        <v-row
          no-gutters
          style="width:100%;height:100%;"
          align="center"
          justify="start"
        >
          <span class="ml-2">庄對</span>
        </v-row>
      </v-col>
      <v-col cols="6">
        <v-row
          no-gutters
          style="width:100%;height:100%;"
          align="center"
          justify="end"
        >
          <span class="mr-4">00</span>
        </v-row>
      </v-col>
    </v-row>
    <v-row no-gutters class="singleRow banker">
      <v-col cols="6">
        <v-row
          no-gutters
          style="width:100%;height:100%;"
          align="center"
          justify="start"
        >
          <span class="ml-2">庄對</span>
        </v-row>
      </v-col>
      <v-col cols="6">
        <v-row
          no-gutters
          style="width:100%;height:100%;"
          align="center"
          justify="end"
        >
          <span class="mr-4">00</span>
        </v-row>
      </v-col>
    </v-row>
    <v-row no-gutters class="singleRow player">
      <v-col cols="6">
        <v-row
          no-gutters
          style="width:100%;height:100%;"
          align="center"
          justify="start"
        >
          <span class="ml-2">閒對</span>
        </v-row>
      </v-col>
      <v-col cols="6">
        <v-row
          no-gutters
          style="width:100%;height:100%;"
          align="center"
          justify="end"
        >
          <span class="mr-4">00</span>
        </v-row>
      </v-col>
    </v-row>
    <v-row no-gutters class="singleRow total">
      <v-col cols="6">
        <v-row
          no-gutters
          style="width:100%;height:100%;"
          align="center"
          justify="start"
        >
          <span class="ml-2">總數</span>
        </v-row>
      </v-col>
      <v-col cols="6">
        <v-row
          no-gutters
          style="width:100%;height:100%;"
          align="center"
          justify="end"
        >
          <span class="mr-4">00</span>
        </v-row>
      </v-col>
    </v-row>
    <v-row no-gutters class="singleRow banker">
      <v-col cols="6">
        <v-row
          no-gutters
          style="width:100%;height:100%;"
          align="center"
          justify="start"
        >
          <span class="ml-2">庄問路</span>
        </v-row>
      </v-col>
      <v-col cols="6">
        <v-row
          no-gutters
          style="width:100%;height:100%;"
          align="center"
          justify="end"
        >
          <v-img

            max-width="0.6vw"
            max-height="0.6vw"
            src="/icon/bluec.png"
          />
          <v-avatar color="#2d30b1" class="ml-1" size="12" />
          <span class="font-weight-bold blue--text ml-1 mr-4  ">/</span>
        </v-row>
      </v-col>
    </v-row>
    <v-row no-gutters class="singleRow player">
      <v-col cols="6">
        <v-row
          no-gutters
          style="width:100%;height:100%;"
          align="center"
          justify="start"
        >
          <span class="ml-2">閒問路</span>
        </v-row>
      </v-col>
      <v-col cols="6">
        <v-row
          no-gutters
          style="width:100%;height:100%;"
          align="center"
          justify="end"
        >
          <v-img

            max-width="0.6vw"
            max-height="0.6vw"
            src="/icon/redc.png"
          />
          <v-avatar color="#c70000" class="ml-1" size="12" />
          <span class="font-weight-bold red--text ml-1 mr-4  ">/</span>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.singleRow{
    width:100%;
    height:12.5%;
    border:1px solid #B48A33;
    font-size: 0.75vw;
    font-weight: bold;
}
  .player{
      color:#3470A9
    }
    .banker{
      color:red
    }
    .tie-text{
      color:#0C930A;
    }
    .total{
        color:#AA8647
    }
</style>
