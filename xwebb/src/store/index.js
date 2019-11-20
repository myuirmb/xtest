import Vue from 'vue'
import Vuex from 'vuex'
import userlist from './modules/userlist.js'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
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
    },
    setShowMenus(state, payload) {
      state.menus.mmshow = payload.menus === 'MainMenu'
      state.menus.umshow = payload.menus === 'UserMenu'
    },
    setMyLike(state, payload) {
      state.menus.mylike = payload.mylike
    }
  },
  actions: {
  },
  modules: {
    userlist
  }
})
