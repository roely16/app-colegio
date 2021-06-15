import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import login from '@/store/login/index'
import home from '@/store/home/index'
import roles from '@/store/roles/index'
import usuarios from '@/store/usuarios/index'

export default new Vuex.Store({
  // state: {
  // },
  // mutations: {
  // },
  // actions: {
  // },
  modules: {
    login: login,
    home: home,
    roles: roles,
    usuarios: usuarios
  }
})
