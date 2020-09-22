<template>
  <div>
    <div class="playTable">
      <div class="room-title d-flex justify-left align-center black--text">
        Baccrart C01
      </div>
    </div>
    <!-- start slite -->

    <v-sheet
      class="d-flex justify-center "
      elevation="8"
    >
      <v-slide-group
        center-active
        style="height:5vh;width:24vw"
        class="d-flex justify-center align-center"
      >
        <v-slide-item
          v-for="n in 19"
          v-slot:default="{ active, toggle }"
          :key="n"
        >
          <v-card
            :color="active ? '#b98f38' : '#404040'"
            class="d-flex align-center justify-center mx-4"
            height="3vh"
            width="3vw"
            @click="toggle"
          >
            <span class="white--text tableText">C0{{ n }}</span>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
    <!-- End slite -->

    <v-card tile>
      <v-row no-gutters class="d-flex white--text align-center justify-center" style="background-color:#AA8647;height:6vh">
        <span>下注貫訊</span>
      </v-row>
      <v-data-table
        :headers="headers"
        :items="desserts"
        :page.sync="page"
        :items-per-page="5"
        hide-default-footer
        class="elevation-1 tableBackground"
        disable-sort
        height="28vh"
        dense
        @page-count="pageCount = $event"
      >
        <template v-slot:body="{items}">
          <tbody>
            <tr v-for="n in items" :key="n.name">
              <td style="border-top: 1px solid #AA8647">
                <span class="tableText">{{ n.name }}</span>
              </td>
              <td style="border-top: 1px solid #AA8647">
                <span class="tableText">1sdsad</span>
              </td>
              <td style="border-top: 1px solid #AA8647">
                <span class="tableText">1sdsad</span>
              </td>
              <td style="border-top: 1px solid #AA8647">
                <span class="tableText">1sdsad</span>
              </td>
              <td style="border-top: 1px solid #AA8647">
                <span class="tableText">1sdsad</span>
              </td>
            </tr>
          </tbody>
        </template>
        <template v-slot:footer>
          <div class="text-center pt-1">
            <v-pagination
              v-model="page"
              :length="pageCount"
              total-visible="4"
              color="#AA8647"
            />
          </div>
        </template>
      </v-data-table>
    </v-card>
    <v-row no-gutters style="height:8vh;width:100%;background:radial-gradient(circle, rgba(222,193,103,1) 9%, rgba(170,134,71,1) 98%);" justify="center" align="center" class="table-info">
      <v-col cols="2" class="text-center">
        <span class="white--text">Banker</span><br>
        <span class="black--text">{{ changenumbers[betLimit].bet_limit }} </span>
      </v-col>
      <v-col cols="2" class="text-center">
        <span class="white--text">Player</span><br>
        <span class="black--text">{{ changenumbers[betLimit].bet_limit }}</span>
      </v-col>
      <v-col cols="2" class="text-center">
        <span class="white--text">Tie</span><br>
        <span class="black--text">{{ changenumbers[betLimit].bet_limit }}</span>
      </v-col>
      <v-col cols="2" class="text-center">
        <span class="white--text">Pair</span><br>
        <span class="black--text">{{ changenumbers[betLimit].bet_limit }}</span>
      </v-col>
      <v-col cols="2" class="text-center">
        <span class="white--text">Natural</span><br>
        <span class="black--text">{{ changenumbers[betLimit].bet_limit }}</span>
      </v-col>
      <v-col cols="2" class="text-center d-flex align-center justify-center">
        <v-menu
          offset-y
          top
          close-on-content-click
          :nudge-width="100"
          left
          :max-width="250"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              small
              v-bind="attrs"
              color="white"
              elevation="24"
              v-on="on"
            >
              <span style="color:black;font-size:0.5vw">change</span>
            </v-btn>
          </template>

          <v-card color="rgba(0, 0, 0, 0.7)">
            <v-list
              dark

              color="rgba(0, 0, 0, 0.5)"
            >
              <v-radio-group v-model="betLimit" :mandatory="false">
                <v-radio label="10 - 1,000" value="10-1000" on-icon="done" color="#B48A33" off-icon="" />
                <v-radio label="50 - 5,000" value="50-5000" on-icon="done" color="#B48A33" off-icon="" />
                <v-radio label="100 - 5,000" value="100-5000" on-icon="done" color="#B48A33" off-icon="" />
                <v-radio label="100 - 10K" value="100-10k" on-icon="done" color="#B48A33" off-icon="" />
                <v-radio label="200 - 20K" value="200-20k" on-icon="done" color="#B48A33" off-icon="" />
              </v-radio-group>
            </v-list>
          </v-card>
        </v-menu>
      </v-col>
    </v-row>
    <div class="selectCoin d-flex align-center white--text pa-1">
      <v-menu
        v-model="coinMenu"
        offset-y
        top
        :close-on-content-click="false"
        :nudge-width="450"
        :max-width="450"
        dark
      >
        <template v-slot:activator="{ on, attrs }">
          <div
            class="text-center mt-1"
            style="width:2.7vw;
                                                   height:2.6vw;
                                                    background-image:url('/icon/七人座自定UI.png');
                                                    background-repeat: no-repeat;
                                                    background-position: center;
                                                    background-size: 100% 100%"
            v-bind="attrs"
            v-on="on"
            @click="openCoinSelect"
          />
        </template>
        <v-card color="rgba(0, 0, 0, 0.7)" elevation="20">
          <v-card-title>
            <v-row no-gutters justify="center">
              Please Select
            </v-row>
          </v-card-title>
          <v-row no-gutters justify="center">
            <v-img
              v-for="(coin,n) in coinList"
              :key="n"
              class="text-center ma-2"
              max-width="3.7vw"
              max-height="2.6vw"
              :src="'/coin/'+coin"
            >
              <v-checkbox
                v-model="selectedCoin"
                :value="coin"
                color="#009167"
                :disabled="disableCoinSelect?selectedCoin.includes(coin)?false:true:false"
              />
            </v-img>
          </v-row>
          <v-card-actions>
            <v-row justify="center">
              <!-- <v-btn small class="mx-2" fab dark color="#4f3c2b" @click="cancelCoinSelect"> -->

              <v-img
                src="/icon/萬用選擇UI.png"
                class="ma-2"
                max-width="2.5vw"
                max-height="2.5vw"
                @click="cancelCoinSelect"
              />

              <!-- </v-btn> -->
              <v-img
                src="/icon/萬用取消UI.png"
                class="ma-2"
                max-width="2.5vw"
                max-height="2.5vw"
                @click="changeShowing"
              />
            </v-row>
          </v-card-actions>
        </v-card>
      </v-menu>
      <v-img
        v-for="(coin,n) in showingCoin"
        :key="n"
        :src="betCoin==coin?'/coin/籌碼發光.png':''"
        max-width="4.9vw"
        height="3.9vw"
        @click="betCoin=coin"
      >
        <v-row
          class="fill-height ma-0"
          align="center"
          justify="center"
        >
          <v-img
            max-width="3.7vw"
            max-height="2.6vw"
            :src="'/coin/'+coin"
          />
        </v-row>
      </v-img>
      <div
        class="text-center mt-1"
        style="width:2.7vw;
                                                    height:2.6vw;
                                                      background-image:url('/icon/單人雙倍ui.png');
                                                      background-repeat: no-repeat;
                                                      background-position: center;
                                                      background-size: 100% 100%"
      />
    </div>
  </div>
</template>

<style scoped>
.playTable{
    background-image: url("/icon/荷官暫代圖.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
    width: 100%;
    height: 30vh;
    margin: 0;
    padding: 0;
    position: relative;
}
.tableBackground{
  background-image:
  linear-gradient(
      rgb(255, 255, 255) 33%,
      #B98F38
    );
    color:black
}
.tableText{
  font-size: 0.8vw;
}
.table-info{
      font-size: 0.8vw;
    }
.selectCoin{
        width: 100%;

    }
.room-title{
        width:30%;
        height:5vh;
        position:absolute;
        top:0;
        left:0;
        font-size: 1vw;
        background-image:linear-gradient(to right, rgb(255, 255, 255) 13%, #B98F38);
        opacity: 0.9;

    }
</style>

<script>

export default {
  components: {

  },
  data () {
    return {
      coinMenu: false,
      selectedCoin: [],
      showingCoin: ['5籌碼.png', '10K籌碼.png', '10籌碼.png', '20K籌碼.png', '50籌碼.png'],
      coinList: ['5籌碼.png', '10K籌碼.png', '10籌碼.png', '20K籌碼.png', '20籌碼.png', '50籌碼.png', '100籌碼.png',
        '200籌碼.png', '500籌碼.png', '1000籌碼.png', '2000籌碼.png', '5000籌碼.png'],
      betCoin: '5籌碼.png',
      betLimit: '10-1000',
      changenumbers: {
        '10-1000': { bet_limit: '1,000', banker: '1,000', player: '1,000', tie: '125', pair: '90' },
        '50-5000': { bet_limit: '5000', banker: '5,000', player: '5,000', tie: '625', pair: '454' },
        '100-5000': { bet_limit: '600', banker: '5,000', player: '5,000', tie: '625', pair: '454' },
        '100-10k': { bet_limit: '100', banker: '10,000', player: '10,000', tie: '1250', pair: '909' },
        '200-20k': { bet_limit: '200', banker: '20,000', player: '20,000', tie: '2500', pair: '1818' }
      },
      headers: [
        {
          text: 'Table',
          align: 'start'

        },
        { text: 'Bet Content', value: 'category' },
        { text: 'Bet Amount', value: 'bet_amount' },
        { text: 'Win/Lose', value: 'winlose' },
        { text: 'Remark', value: 'remark' }
      ],

      page: 1,
      pageCount: 0,
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1%'
        },
        {
          name: 'Ice cream ',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: '1%'
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: '7%'
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: '8%'
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: '16%'
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: '0%'
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: '2%'
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: '45%'
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: '22%'
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%'
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%'
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%'
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%'
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%'
        }
      ]

    }
  },
  computed: {
    disableCoinSelect () {
      if (this.selectedCoin.length === 5) {
        return true
      } else {
        return false
      }
    }

  },
  methods: {
    changeShowing () {
      this.showingCoin = [...this.selectedCoin]
      this.coinMenu = false
    },
    openCoinSelect () {
      this.selectedCoin = [...this.showingCoin]
    },
    cancelCoinSelect () {
      this.selectedCoin = []
      this.coinMenu = false
    }
  }
}
</script>
