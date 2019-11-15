import Vue from 'vue'
import Vuex from 'vuex'
import userlist from './modules/userlist.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menus: {
      active: 'home',
      mmshow: false,
      umshow: true,
      mylike: true
    }
  },
  mutations: {
    setActive(state, payload) {
      state.menus.active = payload.active
    }
  },
  actions: {
  },
  modules: {
    userlist
  }
})
