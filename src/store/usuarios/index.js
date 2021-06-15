
import axios from 'axios'

const state = {

    items: [],
    headers: []

}

const mutations = {

    setUsuarios(state, payload){

        state.items = payload.items
        state.headers = payload.headers

    }

}

const actions = {

    getUsuarios(){

        axios.get(process.env.VUE_APP_API_URL + 'obtener_usuarios')
        .then((response) => {

            this.commit('setUsuarios', response.data)

        })


    }

}

const getters = {

    getItems: state => state.items,
    getHeaders: state => state.headers

}

export default {
    state,
    mutations,
    actions,
    getters
}