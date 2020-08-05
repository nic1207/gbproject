<template>
  <div class="container pt-14">
    <div class="logo" style="margin-left:470px;" />

    <v-row align="center" justify="center" class="pa-6">
      <v-img
        src="https://bad.src/not/valid"
        lazy-src="https://picsum.photos/id/11/100/60"
        aspect-ratio="1"
        class="grey lighten-2"
        max-width="700"
        max-height="500"
      >
        <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular indeterminate color="grey lighten-5" />
          </v-row>
        </template>
      </v-img>
    </v-row>

    <v-row no-gutters style="width:100%" align-content="center" justify="center">
      <div style="width:100%; height:200px;position:relative">
        <div
          style="width:20%;position:absolute; top:10%;left:47%;
                          transform: translate(-50%, -50%);"
        >
          <div>{{ percent }} % </div>
          <v-progress-linear
            v-model="percent"
            color="#ffff99"
            value="10"
            height="10"
            striped
            rounded
          />
        </div>
        <div
          style="width:20%;position:absolute; top:30%;left:69.2%;
                          transform: translate(-50%, -50%); "
        >
          <div class="playTable" />
        </div>
      </div>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      percentage: 0
    }
  },
  computed: {
    percent () {
      return this.percentage.toFixed()
    }
  },
  created () {
    const intval = setInterval(() => {
      if (this.percentage < 100) { this.percentage += 0.1 } else { clearInterval(intval) }
    }, 10)
  }
}
</script>

<style lang="scss" scoped>

.container {
  text-align: center;
  font-size: 20px;
  color: white;
  background: black;

}
.playTable{
    background-image: url("/logo.jpg");
    height: 100px;
}
.logo{
  background-image: url("/gaming.jpg");
  height: 100px;
}

</style>
