
import axios from 'axios'

const state = {
    roles: []
}

const mutations = {

    setRoles(state, payload){

        state.roles = payload

    }

}

const actions = {

    getRoles(){

        axios.get(process.env.VUE_APP_API_URL + 'obtener_roles')
        .then((response) => {

            this.commit('setRoles', response.data)

        })

    }

}

const getters = {

    getRoles: state => state.roles

}

export default {
    state,
    mutations,
    actions,
    getters
}