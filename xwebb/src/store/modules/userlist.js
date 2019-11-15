import { getHomeUserList } from '../../service/userlist.js'

export default {
  namespaced: true,
  state: {
    homelist: []
  },
  mutations: {
    setHomeUserList: (state, payload) => {   //payload:{type:'refresh || append', homelist:[]}
      if (payload.type === 'refresh') {
        state.homelist = payload.homelist
      }
      else {
        state.homelist = [...state.homelist, ...payload.homelist]
      }
    }
  },
  actions: {
    getHomeUserList({ commit }) {
      return new Promise((resolve, reject) => {
        getHomeUserList().then(res => {
          console.log(arguments)
          console.log(res)
          resolve(arguments)
          commit({ setHomeUserList: { type: 'refresh', homelist: res.data.data } })
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}