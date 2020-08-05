<template>
  <v-card>
    <v-toolbar dark color="#7A6445">
      <v-toolbar-title>
        <v-icon>history</v-icon>
        Bet Log
      </v-toolbar-title>
      <v-spacer />
      <v-btn icon dark @click="close">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-toolbar>

    <v-data-table :headers="headers" disable-sort :items-per-page="5" :items="[1,2,33,45,6,1321,9,90,7,8,6,0,97]">
      <template v-slot:body="{items}">
        <tbody>
          <tr v-for="n in items" :key="n">
            <td>1sdsad</td>
            <td>asd</td>
            <td>1sdsad</td>
            <td>asd</td>
            <td>1sdsad</td>
            <td>asd</td>
            <td>1sdsad</td>
            <td>asd</td>
          </tr>
        </tbody>
      </template>
    </v-data-table>

    <v-card-actions>
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
          <v-btn small color="#7A6445" class="ml-4 mt-4">
            Query
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
