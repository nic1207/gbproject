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
  lobby = {
    GameTables: [{
      DealerAvatar: ""
      DealerName: ""
      GameID: 1001
      TableID: 1
      TableName: "B01"
    }],
    Games: [{
      GameCode: "SGBACCARAT"
      GameID: 1001
    }]
  }
  */
  tables: undefined // 遊戲桌資訊
  /*
  tables = [{
   GameID: 10001
   TableID: 1
   Status: {
     CountDown: 0,
     PlayerCount: 101
     Result: 1,
     State: 11,
     History: [0,0,0,0,0,0,1]
   }
  }]
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
    state.lobby = lobby
  },
  setTables (state, tables) {
    state.tables = tables
  },
  clear (state) {
    state.user = undefined
    state.account = undefined
    state.lobby = undefined
    state.tables = undefined
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
  }
}
