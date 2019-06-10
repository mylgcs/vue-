import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      count:0,
      todos:[
          {name:'misitema',age:'32',axe:'body'},
          {name:'misitema',age:'32',axe:'body'},
          {name:'misitema',age:'32',axe:'body'},
          {name:'misitema',age:'32',axe:'body'}
      ]
  },
  mutations: {},
  actions: {

  }
})
