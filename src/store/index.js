import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import * as getters from './getter'
import state from './state'
import mutations from './mutations'
import recommend from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  state,
  mutations,
  actions,
  modules: {
    recommend
  }
})
