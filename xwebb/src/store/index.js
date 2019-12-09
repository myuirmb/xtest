import Vue from 'vue'
import Vuex from 'vuex'
import userlist from './modules/userlist.js'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    menus: {
      active: 'home',   //main menu selected item[主菜单 选中的项]
      mmshow: false,    //main menu show [显示主菜单]
      umshow: true,     //user menu show [显示用户菜单]
      mylike: true,     //select mylike flag [选中喜欢标识]
      csshow: false     //contact search show [显示联系人查询选项]
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
    },
    setShowContactSearch(state, payload) {
      state.menus.csshow = payload.csshow
    }
  },
  actions: {
  },
  modules: {
    userlist
  }
})
