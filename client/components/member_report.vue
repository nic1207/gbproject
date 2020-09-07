<template>
  <v-card min-height="360" dark color="rgba(34, 34, 34,0.8)">
    <v-toolbar dark class="Appbar">
      <v-toolbar-title>
        <v-icon color="black">
          text_snippet
        </v-icon>
        Member Report
      </v-toolbar-title>
      <v-spacer />
      <v-btn icon dark @click="close">
        <v-icon color="black">
          mdi-close
        </v-icon>
      </v-btn>
    </v-toolbar>
    <v-row no-gutters dense>
      <v-col cols="1" />
      <v-col cols="4">
        <v-menu
          ref="from_menu"
          v-model="from_menu"
          :close-on-content-click="false"
          :return-value.sync="from_date"
          transition="scale-transition"
          offset-y
          min-width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="from_date"
              label="From Date"
              prepend-icon="event"
              readonly
              v-bind="attrs"
              v-on="on"
            />
          </template>
          <v-date-picker v-model="from_date" no-title scrollable>
            <v-spacer />
            <v-btn text color="#7A6445" @click="from_menu = false">
              Cancel
            </v-btn>
            <v-btn text color="#7A6445" @click="$refs.from_menu.save(from_date)">
              OK
            </v-btn>
          </v-date-picker>
        </v-menu>
      </v-col>
      <v-col cols="2" />
      <v-col cols="4">
        <v-menu
          ref="to_menu"
          v-model="to_menu"
          :close-on-content-click="false"
          :return-value.sync="to_date"
          transition="scale-transition"
          offset-y
          min-width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="to_date"
              label="To Date"
              prepend-icon="event"
              readonly
              v-bind="attrs"
              v-on="on"
            />
          </template>
          <v-date-picker v-model="to_date" no-title scrollable>
            <v-spacer />
            <v-btn text color="#7A6445" @click="to_menu = false">
              Cancel
            </v-btn>
            <v-btn text color="#7A6445" @click="$refs.to_menu.save(to_date)">
              OK
            </v-btn>
          </v-date-picker>
        </v-menu>
      </v-col>
      <v-col cols="1" />
    </v-row>
    <v-divider />
    <v-row no-gutters dense>
      <v-col cols="1" />
      <v-col cols="4">
        <v-select
          v-model="selectedGametype"
          :items="gameTypes"
          filled
          label="Game Type"
          dense
          background-color="#C4A76E"
          color="white"
          full-width
          rounded
          class="mt-2"
        />
      </v-col>
      <v-col cols="2" />
      <v-col cols="4">
        <v-btn block rounded color="#C4A76E" class="mt-3">
          Search
        </v-btn>
      </v-col>
      <v-col cols="1" />
    </v-row>
    <v-divider />
    <v-row no-gutters dense>
      <v-col cols="2" class="text-right">
        <p style="color:#C4A76E" class="mt-4">
          Turnover
        </p>
      </v-col>
      <v-col cols="3">
        <v-card
          class="ma-2 d-flex justify-center align-center"
          height="40"
          color="#424242"
        >
          <span style="color:#C4A76E"> 0.00</span>
        </v-card>
      </v-col>
      <v-col cols="3" class="text-right">
        <p style="color:#C4A76E" class="mt-4">
          Rolling Amount
        </p>
      </v-col>
      <v-col cols="3">
        <v-card
          class="ma-2 d-flex justify-center align-center"
          height="40"
          color="#424242"
        >
          <span style="color:#C4A76E"> 0.00</span>
        </v-card>
      </v-col>
    </v-row>
    <v-divider />
    <v-row no-gutters dense>
      <v-col cols="2" class="text-right">
        <p style="color:#C4A76E" class="mt-4">
          Win/Lose Amount
        </p>
      </v-col>
      <v-col cols="3">
        <v-card
          class="ma-2 d-flex justify-center align-center"
          height="40"
          color="#424242"
        >
          <span style="color:#C4A76E"> 0.00</span>
        </v-card>
      </v-col>
      <v-col cols="3" class="text-right">
        <p style="color:#C4A76E" class="mt-4">
          Total Amount
        </p>
      </v-col>
      <v-col cols="3">
        <v-card
          class="ma-2 d-flex justify-center align-center"
          height="40"
          color="#424242"
        >
          <span style="color:#C4A76E"> 0.00</span>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
export default {
  data () {
    return {
      from_date: new Date().toISOString().substr(0, 10),
      to_date: new Date().toISOString().substr(0, 10),
      from_menu: false,
      to_menu: false,
      gameTypes: ['All Games', 'Live Games', 'Slot Game', 'Multi-player game'],
      selectedGametype: null

    }
  },
  methods: {
    close () {
      this.$emit('close')
    }
  }
}
</script>
<style scoped>
.Appbar{
  background-image:
  linear-gradient(
      rgb(255, 255, 255) 63%,
      #B98F38
    );
    color:black
}
</style>
