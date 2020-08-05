<template>
  <v-container fluid>
    <div class="logo" style="margin-left:470px;" />

    <v-row align="center" justify="center" class="pa-6">
      <v-img
        src="/banner.jpg"
        aspect-ratio="1.8"
        class="grey lighten-2"
        max-width="700"
        max-height="500"
        contain
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
          <div>{{ percent }}xx % </div>
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
  </v-container>
</template>

<script>
export default {
  layout: 'loading',
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
    /*
    const intval = setInterval(() => {
      if (this.percentage < 100) {
        this.percentage += 10
      } else {
        this.percentage = 100
        clearInterval(intval)
        this.$router.push('/roomlist')
        console.log('end')
      }
    }, 100)
    */
  }
}
</script>

<style lang="scss" scoped>

.container {
  text-align: center;
  font-size: 20px;
  color: white;
  background: black;
  width: 100%;
  height: 100%;
  padding: 70px;

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
