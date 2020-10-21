export const state = () => ({
  account: undefined, // 帳號資訊
  /*
  account = {
    AccountName: "DEMO999"
    AgentCode: "TESTER_USD"
    CreditTypeCode: "USD"
    LanguageTypeCode: "en"
    Token: "5ad7af0ab01f40fe8196ae4bbd597e8a"
   }
  */
  user: undefined, // 會員資訊
  /*
  user = {
    AccountName: "DEMO999"
    AgentCode: "TESTER_USD"
    CreditTypeCode: "USD"
    Point: 100000000
    Token: "78c0c30a333c4d949162db4aa20dc625"
  }
  */
  lobby: undefined, // 大廳資訊
  /*
  lobby: {
    Games: [{ // 遊戲清單
      GameID: 1001, // 遊戲識別號
      GameCode: 'SGBACCARAT', // 遊戲代碼
      Tables: [{ // 桌集合
        TableID: 1, // 桌識別號
        TableName: 'B01' // 桌名稱
      }, {
        TableID: 2,
        TableName: 'B02'
      }],
      Subgames: [{ // 子遊戲集合
        SubgameID: 1, // 子遊戲識別號
        SubgameCode: 'TRADITION' // 子遊戲名稱
      }, {
        SubgameID: 2,
        SubgameCode: 'NO_COMMISSION'
      }, {
        SubgameID: 3,
        SubgameCode: 'NIU_NIU'
      }]
    }]
  },
  */

  tables: [], // 遊戲桌資訊
  /*
  tables: {
    GameID: 1001, // 遊戲識別號
    Tables: [{ // 桌列表
      TableID: 1, // 桌識別號
      DealerName: 'TEST_DEALER',
      DealerAvatar: 'test_dealer.jpg',
      RoundID: 1234567890,
      RoundName: 'B01-01-01',
      PlayerCount: 101, // 玩家計數
      History: [1, 1, 1, 1, 1, 1, 1, 1], // 遊戲歷史紀錄 1.PLAYER_WIN 2.TIE 3.BANKER_WIN
      Desktop: { // 桌資訊
        IsSuffle: 1, // 是否洗牌
        BetTimeCountDown: 0, // 押注倒數
        ShowCards: [1, 1, 1, 1, 1, 1, 1, 1], // 牌面
        PlayerPoint: 3, // 玩家點數
        BankPoint: 3, // 莊家點數
        Winlose: 1 // 開牌結果 1.PLAYER_WIN 2.TIE 3.BANKER_WIN
      },
      State: 11 // 遊戲桌狀態  11.READY (準備中) 21.SUFFLE (洗牌) 31.BET (押注) 41.DRAW_CARDS (開牌) 51.SETTLE (結算)
    }]
  },
  */
  groups: [],
  /*
  groups: { // 遊戲群組清單
    GameID: 1001, // 遊戲識別號
    Groups: [{ // 群組
      GroupID: 1, // 群組識別號
      BetSettings: [ // 子遊戲設定
        {
          PBLL: 100, // 玩家押注底限
          PBUL: 10000 // 玩家押注上限
        },
        {
          PBLL: 10000,
          PBUL: 100000
        },
        {
          PBLL: 100000,
          PBUL: 10000000
        }
      ]
    }]
  }
  */
  // betsetting: undefined,
  betsetting: {
    GameID: 1001,
    BetSettings: [{
      GroupID: 1,
      SubgameID: 1,
      PBLL: 10000,
      PBUL: 1000000,
      BABULS: [
        500000,
        500000,
        500000,
        500000,
        500000,
        500000,
        500000,
        500000
      ],
      TBU: 10000000,
      ACs: [
        10000,
        50000,
        100000,
        500000,
        1000000
      ]
    },
    {
      GroupID: 2,
      SubgameID: 2,
      PBLL: 10000,
      PBUL: 1000000,
      BABULS: [
        500000,
        500000,
        500000,
        500000,
        500000,
        500000,
        500000,
        500000
      ],
      TBU: 10000000,
      ACs: [
        10000,
        50000,
        100000,
        500000,
        1000000
      ]
    },
    {
      GroupID: 3,
      SubgameID: 3,
      PBLL: 10000,
      PBUL: 1000000,
      BABULS: [
        500000,
        500000,
        500000,
        500000,
        500000,
        500000,
        500000,
        500000
      ],
      TBU: 10000000,
      ACs: [
        10000,
        50000,
        100000,
        500000,
        1000000
      ]
    }]
  },
  pgtoken: undefined, // 加入遊戲桌成功的TOKEN
  nowtable: undefined,
  /*
  nowtable: {
    GameID: 1001, // 遊戲識別號
    TableID: 1, // 桌識別號
    RoundID: 1234567890, // 回合識別號
    RoundName: 'B01-01-01', // 回合名稱
    DealerName: 'TEST_DEALER', // 發牌員
    DealerAvatar: 'test_dealer.jpg', // 發牌員頭像
    Desktop: {
      IsSuffle: 1, // 是否洗牌
      BetTimeCountDown: 0, // 押注倒數 (投注階段才有)
      ShowCards: [1, 1, 1, 1, 1, 1, 1, 1], // 牌面 (開牌階段才有)
      PlayerPoint: 3, // 玩家點數 (結算階段才有)
      BankPoint: 3, // 莊家點數 (結算階段才有)
      Winlose: 1 // 開牌結果
    },
    State: 11
  }
  */
  nowgroupid: 0,
  history: undefined,
  /*
  history: {
    GameID: 1001,
    TableID: 1,
    History: [{
      RoundID: 637352672851625635,
      Winlose:1
    }]
  }
  */
  showcoins: []
  /*
  showcoins: [
    'coin_5.png',
    'coin_10.png',
    'coin_20.png',
    'coin_50.png'
  ]
  */
})
export const mutations = {
  setUser (state, user) {
    state.user = user
  },
  setAccount (state, acc) {
    state.account = acc
  },
  setBetSetting (state, sett) {
    state.betsetting = sett
  },
  setPGToken (state, token) {
    state.pgtoken = token
  },
  setLobby (state, lobby) {
    // console.log('[debug] setLobby(', lobby, ')')
    state.lobby = lobby
  },
  setTables (state, tables) {
    // console.log('[debug] setTables(', tables, ')')
    state.tables = tables
  },
  setNowTable (state, table) {
    state.nowtable = table
  },
  setNowGroupID (state, gid) {
    state.nowgroupid = gid
  },
  setGroups (state, groups) {
    // console.log('[debug] setGroups(', groups, ')')
    state.groups = groups
  },
  setHistory (state, history) {
    // console.log('[debug] setHistory(', history, ')')
    state.history = history
  },
  setShowCoins (state, coins) {
    // console.log('[debug] setShowCoins(', coins, ')')
    state.showcoins = coins
  },

  clear (state) {
    state.user = undefined
    state.account = undefined
    state.lobby = undefined
    state.tables = undefined
    state.groups = undefined
    state.pgtoken = undefined
    state.nowtable = undefined
    state.nowgroupid = 0
    state.betsetting = undefined
    state.history = undefined
    state.showcoins = undefined
  }
}
export const getters = {
  fetchUser (state) {
    return state.user
  },
  fetchAccount (state) {
    return state.account
  },
  fetchBetSetting (state) {
    return state.betsetting
  },
  fetchPGToken (state) {
    return state.pgtoken
  },
  fetchLobby (state) {
    return state.lobby
  },
  fetchTables (state) {
    return state.tables
  },
  fetchNowTable () {
    return state.nowtable
  },
  fetchNowGroupID () {
    return state.nowgroupid
  },
  fetchnowtable (state) {
    return state.nowtable
  },
  fetchGroups (state) {
    return state.groups
  },
  fetchHistory (state) {
    return state.history
  },
  fetchShowCoins (state) {
    return state.showcoins
  }
}
