import router from '@/router'

import axios from 'axios'

const state = {

    drawer: false,
    userData: {
        name: 'Herson Chur',
        type: 'Administración'
    },
    menu: [
        {
            name: 'Alumnos',
            icon: 'mdi-account-group',
            url: 'alumnos'
        },
        {
            name: 'Grados',
            icon: 'mdi-book',
            url: 'grados'
        },
        {
            name: 'Administración',
            icon: 'mdi-account-cog',
            url: 'administracion'
        }
    ]

}

const mutations = {

    setDrawer(state, payload){
        state.drawer = payload
    },
    setMenu(state, payload){
        state.menu = payload
    }
    

}

const actions = {

    setDrawer(state, payload){

        this.commit('setDrawer', payload)
    },
    getMenu(){

        const data = JSON.parse(localStorage.getItem('app-colegio'))

        axios.post(process.env.VUE_APP_API_URL + 'obtener_menu', {
            usuario_id: data.usuario_id
        })
        .then((response) => {
            
            this.commit('setMenu', response.data)

        })

    },
    logout(){

        localStorage.removeItem('app-colegio')

        router.push('/')

    }

}

const getters = {

    getDrawer: state => state.drawer,
    getMenu: state => state.menu,
    getUserData: state => state.userData

}

export default {
    state,
    mutations,
    actions,
    getters
}