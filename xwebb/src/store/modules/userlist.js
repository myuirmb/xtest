import { getHomeUserList } from '../../service/userlist.js'

export default {
  // namespaced: true,
  state: {
    homelist: [
      {
        uid: 'f1322363-09db-11ea-afaf-000c29e1fb60',
        nickname:'月光下的肖邦',
        gender:'1',
        age:'19',
        height:'179',
        conste:'天蝎座',
        zodiac:'龙',
        maxim:'月光下，房顶上，一个人的钢琴曲月光下，房顶上，一个人的钢琴曲月光下，房顶上，一个人的钢琴曲',
        salary:'1.5-2W 元/月',
        online:'2019-11-18 16:18:03',
        distance:'4568.21km',
        // car:'',
        // house:'',
        // edu:'',
        vip:'1'
      },
      {
        uid: 'f1322363-09db-11ea-afaf-000c29e1fb61',
        nickname:'莫扎特',
        gender:'',
        age:'',
        height:'',
        conste:'',
        zodiac:'龙',
        maxim:'莫扎特的钢琴曲',
        salary:'',
        online:'2019-11-18 16:18:03',
        distance:'458.21km',
        // car:'',
        // house:'',
        // edu:'',
        vip:'0'
      }
    ]
  },

  mutations: {
    setHomeUserList: (state, payload) => {   //payload:{type:'refresh || append', homelist:[]}
      // console.log(state, payload, '???');
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
          // console.log(res, res.data.data, '--data--')
          commit(
            'setHomeUserList',
            { type: 'append', homelist: res.data.data }
          )
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}