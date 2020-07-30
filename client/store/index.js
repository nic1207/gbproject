export const state = () => ({
  account: undefined, // 帳號資訊
  user: undefined, // 會員資訊
  lobby: undefined, // 大廳資訊
  tables: undefined // 遊戲桌資訊
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
