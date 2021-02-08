const state = {
  userInfo: {} // 用户信息
}
const mutations = {
  SET_userInfo(state, val) {
    state.userInfo = val
  }
}
const actions = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
