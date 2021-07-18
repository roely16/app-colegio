import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import login from '@/store/login/index'
import home from '@/store/home/index'
import roles from '@/store/roles/index'
import usuarios from '@/store/usuarios/index'
import alumnos from '@/store/alumnos/index'
import modal from '@/store/modal/index'
import gestion from '@/store/gestion/index'
import alumnos_encargado from '@/store/alumnos_encargado/index'

export default new Vuex.Store({
	modules: {
		login: login,
		home: home,
		roles: roles,
		usuarios: usuarios,
		alumnos: alumnos,
		modal: modal,
		gestion: gestion,
		alumnos_encargado: alumnos_encargado
	}
})
