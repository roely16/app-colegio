import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import login from '@/store/login/index'
import home from '@/store/home/index'

export default new Vuex.Store({
  // state: {
  // },
  // mutations: {
  // },
  // actions: {
  // },
  modules: {
    login: login,
    home: home

  }
})
