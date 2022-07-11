/*
 * @Descripttion: 
 * @Date: 2022-07-11 09:03:34
 * @LastEditTime: 2022-07-11 10:21:39
 */
import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
})
