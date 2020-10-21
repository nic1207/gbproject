<template>
  <v-card dark color="rgba(0, 0, 0,0)">
    <v-toolbar class="Appbar">
      <v-toolbar-title>
        <v-icon color="black">
          history
        </v-icon>
        <span class="black--text">Bet Log</span>
      </v-toolbar-title>
      <v-spacer />
      <v-btn icon color="black" @click="close">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-toolbar>
    <v-data-table
      dark
      style="background-color:rgb(34, 34, 34,0.95)"
      :headers="headers"
      disable-sort
      :items-per-page="5"
      :items="[1,2,33,45,6,1321,9,90,7,8,6,0,97]"
    >
      <template v-slot:body="{items}">
        <tbody>
          <tr v-for="n in items" :key="n">
            <td>1sdsad</td>
            <td>asd</td>
            <td>1sdsad</td>
            <td>asd</td>
            <td>1sdsad</td>
            <td>
              <v-row no-gutters align="center">
                <span class="mr-1">xx</span>
                <v-img
                  v-for="m in 3"
                  :key="m"
                  max-height="4vh"
                  max-width="1vw"
                  class="mr-1"
                  contain
                  src="/smallcard/h2.png"
                />
                <span class="mr-1">zz</span>
                <v-img
                  v-for="m in 3"
                  :key="m"
                  max-height="4vh"
                  max-width="1vw"
                  class="mr-1"
                  contain
                  src="/smallcard/h10.png"
                />
              </v-row>
            </td>
            <td>1sdsad</td>
            <td>asd</td>
          </tr>
        </tbody>
      </template>
    </v-data-table>

    <v-card-actions style="background-color:rgba(34, 34, 34,0.95)">
      <v-row no-gutters>
        <v-col cols="3">
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
        <v-col cols="3">
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
        <v-col cols="1">
          <v-btn small color="white" class="ml-4 mt-4" elevation="23">
            <span style="color:black">Query</span>
          </v-btn>
        </v-col>
      </v-row>
    </v-card-actions>
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
      headers: [
        { text: 'Bet ID', value: 'created_at' },
        { text: 'Date/Time', value: 'voucher_no' },
        { text: 'Game', value: 'pickup_id' },
        { text: 'Round', value: 'receiver.name' },
        {
          text: 'Video',
          value: 'total_amount_to_collect'
        },
        { text: 'Game Result', value: 'total_delivery_amount' },
        { text: 'Bet Content', value: 'delivery_status' },
        { text: 'Remark', value: 'is_paid' },
        { text: 'Start Balance', value: 'is_paid' },
        { text: 'Bet Amount', value: 'is_paid' },
        { text: 'Win/Lose', value: 'is_paid' },
        { text: 'Balance', value: 'is_paid' }

      ]
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
