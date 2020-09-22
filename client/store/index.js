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
  Groups: []
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
})
export const mutations = {
  setUser (state, user) {
    state.user = user
  },
  setAccount (state, acc) {
    state.account = acc
  },
  setLobby (state, lobby) {
    // console.log('[debug] setLobby(', lobby, ')')
    state.lobby = lobby
  },
  setTables (state, tables) {
    // console.log('[debug] setTables(', tables, ')')
    state.tables = tables
  },
  setGroups (state, groups) {
    // console.log('[debug] setGroups(', groups, ')')
    state.groups = groups
  },
  clear (state) {
    state.user = undefined
    state.account = undefined
    state.lobby = undefined
    state.tables = undefined
    state.groups = undefined
  }
}
export const getters = {
  fetchUser (state) {
    return state.user
  },
  fetchAccount (state) {
    return state.account
  },
  fetchLobby (state) {
    return state.lobby
  },
  fetchTables (state) {
    return state.tables
  },
  fetchGroups (state) {
    return state.groups
  }
}
